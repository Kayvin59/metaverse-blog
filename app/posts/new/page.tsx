"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function NewPost() {

    const [formData, setFormData] = useState({
        title: "",
        post: "",
        author: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setIsSubmitted(false);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("formData:", formData)
        setIsSubmitted(true);
        setFormData({
            title: "",
            post: "",
            author: ""
        })
    }

    return (
        <div className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
            <h1 className="text-4xl font-bold mb-8 font-cambria">Add New Post</h1>
            <form className="w-80" onSubmit={handleSubmit}>
                <div className="grid w-full max-w-lg items-center mb-5 gap-1.5">
                    <Label htmlFor="title">Title:</Label>
                    <Input type="text" className="bg-card" id="title" name="title" placeholder="Enter title here" value={formData.title} onChange={handleChange}/>
                </div>
                <div className="grid w-full max-w-lg items-center mb-5 gap-1.5">
                    <Label htmlFor="post">Your Post:</Label>
                    <Textarea id="post" className="bg-card" name="post" placeholder="This is the content of your post." value={formData.post} onChange={handleChange}/>
                </div>
                <div className="grid w-full max-w-lg items-center mb-5 gap-1.5">
                    <Label htmlFor="author">Signature:</Label>
                    <Input type="text" className="bg-card" id="author" name="author" placeholder="Enter your full name" value={formData.author} onChange={handleChange}/>
                </div>
                <Button className="w-full" type="submit">Send your post</Button>
            </form>
            {isSubmitted && 
                <div className="flex flex-col items-center mt-8 text-2xl">
                    <p className="text-green-500 mb-4">Your post has been submitted!</p>
                    <CheckCircle2 className="text-green-500 mb-4" />
                    <p className="text-muted-foreground text-lg">Check your console!</p>
                </div>
            }
        </div>
    )
}
