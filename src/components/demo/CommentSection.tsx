import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { bg_full } from "@/assets";
import axios from "axios";

interface Comment {
  name: string;
  comment: string;
  timestamp: string;
  isSessionComment: boolean;
  rsvp: RSVP | null;
}

interface Toast {
  message: string;
  type: "success" | "error";
}

type RSVP = "hadir" | "tidak_hadir";

export function CommentSection() {
  const [rsvp, setRsvp] = useState<RSVP | null>(null);
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [toast, setToast] = useState<Toast | null>(null);

  console.log("allComment", allComments);
  useEffect(() => {
    loadComments();
  }, []);

  const handleChangeRsvp = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRsvp = event.target.value as RSVP;
    setRsvp(selectedRsvp);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Memuat komentar dari API
  const loadComments = async () => {
    try {
      const response = await axios.get(
        "https://api.weddinglintangrifqi.com/messages",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      setAllComments(
        response.data.sort(
          (a: Comment, b: Comment) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        )
      );
    } catch (error) {
      setToast({
        message: "Gagal memuat komentar.",
        type: "error",
      });
    }
  };

  // Menangani pengiriman form untuk menambahkan komentar baru
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newComment: Partial<Comment> = {
        name,
        comment,
        rsvp,
        timestamp: new Date().toISOString(),
      };

      try {
        const response = await axios.post(
          "https://api.weddinglintangrifqi.com/messages",
          newComment,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const savedComment = response.data;

        setAllComments([savedComment, ...allComments]);
        setName("");
        setComment("");
        setRsvp("hadir");
        setToast({
          message: "Komentar Anda telah ditambahkan.",
          type: "success",
        });
      } catch (error) {
        setToast({
          message: "Gagal menambahkan komentar.",
          type: "error",
        });
      }
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section
      id="comments"
      className="py-12 max-w-6xl mx-auto px-10 relative"
      style={{
        backgroundImage: `url(${bg_full})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {toast && (
        <div
          className={`fixed bottom-4 left-4 p-4 z-30 rounded-md ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {toast.message}
        </div>
      )}
      <h2 className="text-4xl font-bold text-center mb-6 font-rouge text-white">
        Tinggalkan Kami Doa
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1 md:order-2">
          <CardHeader>
            <h3 className="text-sm">Silakan isi form di bawah ini</h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={30}
              />
              <Textarea
                placeholder="Ucapan/Doa"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                maxLength={255}
              />
              <select
                value={rsvp ?? ""}
                onChange={handleChangeRsvp}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Pilih Kehadiran</option>
                <option value="hadir">Hadir</option>
                <option value="tidak_hadir">Tidak Hadir</option>
              </select>
              <Button type="submit" className="w-full">
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="flex-1 md:order-1">
          <CardHeader>
            <h3 className="text-xl font-semibold">Komentar</h3>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] md:h-[200px]">
              <div className="space-y-4 pr-4">
                {allComments.map((c, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{getInitials(c.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{c.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(
                              new Date(c.timestamp).getTime() +
                                7 * 60 * 60 * 1000
                            ).toLocaleTimeString("id-ID", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}
                            -{" "}
                            {c.rsvp === "tidak_hadir" ? "Tidak Hadir" : "Hadir"}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{c.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
