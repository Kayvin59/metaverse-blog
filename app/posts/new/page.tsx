"use client"

import { useState } from "react"

import Link from "next/link"
import InputField from "@/components/InputField"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronLeft } from "lucide-react"
import { generateFormattedDate } from '@/utils/formatDate';
export default function NewPost() {

    const [formData, setFormData] = useState({
        title: "",
        post: "",
        author: "",
        published: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setIsSubmitted(false);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const currentDate = new Date();
        const formattedDate = generateFormattedDate(currentDate.toLocaleDateString("en-US"));
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            published: formattedDate,
        }));
        console.log("formData:", formData)
        setIsSubmitted(true);
    }

    return (
        <div className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
            <Link href='/' className='flex self-start mb-5 underline'>
                <ChevronLeft />
                Home
            </Link>
            <h1 className="text-4xl font-bold mb-8 font-cambria">Add New Post</h1>
            <form className="w-80" onSubmit={handleSubmit}>
                <InputField type="text" id="title" name="title" label="Title" placeholder="Enter title here" value={formData.title} onChange={handleChange}/>
                <InputField type="textarea" id="post" name="post" label="Your Post" placeholder="This is the content of your post." value={formData.post} onChange={handleChange}/>
                <InputField type="text" id="author" name="author" label="Signature" placeholder="Enter your full name" value={formData.author} onChange={handleChange}/>
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
