import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Download, Share2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Photo {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  user_id: string;
  created_at: string;
}

interface Comment {
  id: string;
  comment: string;
  user_id: string;
  created_at: string;
}

const PhotoCard = ({ photo }: { photo: Photo }) => {
  const [user, setUser] = useState<any>(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    checkAuth();
    fetchLikes();
    fetchComments();
  }, []);

  const fetchLikes = async () => {
    const { data, error } = await supabase
      .from("photo_likes")
      .select("*")
      .eq("photo_id", photo.id);

    if (!error && data) {
      setLikes(data.length);
      if (user) {
        setIsLiked(data.some((like) => like.user_id === user.id));
      }
    }
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("photo_comments")
      .select("*")
      .eq("photo_id", photo.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setComments(data);
    }
  };

  const handleLike = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to like photos",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isLiked) {
        await supabase
          .from("photo_likes")
          .delete()
          .eq("photo_id", photo.id)
          .eq("user_id", user.id);
        setIsLiked(false);
        setLikes(likes - 1);
      } else {
        await supabase
          .from("photo_likes")
          .insert([{ photo_id: photo.id, user_id: user.id }]);
        setIsLiked(true);
        setLikes(likes + 1);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update like",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(photo.image_url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${photo.title}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast({
        title: "Downloaded!",
        description: "Photo has been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download photo",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: photo.title,
          text: photo.description || "",
          url: photo.image_url,
        });
      } catch (error) {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(photo.image_url);
      toast({
        title: "Link copied!",
        description: "Photo link has been copied to clipboard",
      });
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to comment",
        variant: "destructive",
      });
      return;
    }

    if (!newComment.trim()) return;

    try {
      const { error } = await supabase
        .from("photo_comments")
        .insert([
          {
            photo_id: photo.id,
            user_id: user.id,
            comment: newComment.trim(),
          },
        ]);

      if (error) throw error;

      setNewComment("");
      fetchComments();
      toast({
        title: "Comment added!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="group overflow-hidden hover-lift">
      <div className="relative overflow-hidden">
        <img
          src={photo.image_url}
          alt={photo.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
        {photo.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {photo.description}
          </p>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLike}
            className={isLiked ? "text-red-500" : ""}
          >
            <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
            {likes}
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
          <Dialog open={showComments} onOpenChange={setShowComments}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                {comments.length}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Comments</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b pb-2">
                    <p className="text-sm">{comment.comment}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
                {comments.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>
              <form onSubmit={handleComment} className="flex gap-2 mt-4">
                <Input
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button type="submit">Post</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
