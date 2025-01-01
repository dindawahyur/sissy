import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Comment {
    name: string;
    comment: string;
    timestamp: string;
    isSessionComment: boolean;
}

interface Toast {
    message: string;
    type: 'success' | 'error';
}

const SESSION_STORAGE_KEY = 'current_session_comments';
const LOCAL_STORAGE_KEY = 'recent_comments';

export function CommentSection() {
    const [allComments, setAllComments] = useState<Comment[]>([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [toast, setToast] = useState<Toast | null>(null)

    useEffect(() => {
        loadComments()
    }, [])

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [toast])

    const loadComments = () => {
        const storedSessionComments = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '[]')
        const storedRecentComments = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')

        const sessionComments = storedSessionComments.map((c: Comment) => ({ ...c, isSessionComment: true }))
        const recentComments = storedRecentComments.map((c: Comment) => ({ ...c, isSessionComment: false }))

        const combinedComments = [...sessionComments, ...recentComments]
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

        setAllComments(combinedComments)
    }

    const saveComments = (sessionComments: Comment[], recentComments: Comment[]) => {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionComments))
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recentComments))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name && comment) {
            const newComment: Comment = {
                name,
                comment,
                timestamp: new Date().toISOString(),
                isSessionComment: true
            }

            const updatedSessionComments = [newComment, ...allComments.filter(c => c.isSessionComment)]
            const updatedRecentComments = [newComment, ...allComments.filter(c => !c.isSessionComment)].slice(0, 5)

            saveComments(updatedSessionComments, updatedRecentComments)
            setAllComments([newComment, ...allComments])

            setName('')
            setComment('')

            setToast({ message: "Your comment has been added.", type: 'success' })
        }
    }

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    }

    return (
        <section id="comments" className="py-12 max-w-6xl mx-auto px-4 relative">
            {toast && (
                <div className={`fixed bottom-4 left-4 p-4 z-30 rounded-md ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {toast.message}
                </div>
            )}
            <h2 className="text-3xl font-bold text-center mb-6">Comments Section</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <Card className="flex-1 md:order-2">
                    <CardHeader>
                        <h3 className="text-xl font-semibold">Leave a Comment</h3>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Textarea
                                placeholder="Your Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                            <Button type="submit" className="w-full">Submit Comment</Button>
                        </form>
                    </CardContent>
                </Card>
                <Card className="flex-1 md:order-1">
                    <CardHeader>
                        <h3 className="text-xl font-semibold">Comments</h3>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[400px] md:h-[200px]">
                            <div className="space-y-4 pr-4">
                                {allComments.map((c, index) => (
                                    <Card key={index} className={c.isSessionComment ? "border-primary" : ""}>
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <Avatar>
                                                    <AvatarFallback>{getInitials(c.name)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className="font-bold">{c.name}</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {new Date(c.timestamp).toLocaleString()}
                                                        {c.isSessionComment && " (Current Session)"}
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
    )
}