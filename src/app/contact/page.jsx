"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {

    const {toast} = useToast();

    const contactMethods = [
        {
            "name": "Email", 
            "icon": <Mail size={27}/>,
            "value": "kshaurya731@gmail.com"
        }, 
        {
            "name": "Discord", 
            "icon": <img src="/assets/brand-icons/discord.svg" className="w-8"/>,
            "value": "kshau_"
        }, 
    ]

    const socialLinks = [
        {
            "name": "YouTube", 
            "icon": <img src="/assets/brand-icons/youtube.png" className="w-9"/>,
            "value": "@kshau_", 
            "url": "https://youtube.com/@kshau_"
        }, 
        {
            "name": "GitHub", 
            "icon": <img src="/assets/brand-icons/github.png" className="w-7"/>,
            "value": "kshau", 
            "url": "https://github.com/kshau"
        }, 
    ]

    const copyContact = (method) => {
        navigator.clipboard.writeText(method.value);
        toast({"title": `${method.name} copied to clipboard!`})
    }

    return (
        <Navbar current="Contact">
            <div className="flex flex-col h-screen">

                <span className="text-4xl lg:text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Contact</span>

                <div className="flex flex-col items-center max-w-[40rem] self-center">

                    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full self-center mt-16 gap-3 animate-fadeIn opacity-0 delay-200 justify-center">

                        {contactMethods.map((method, index) => (

                            <Card className={`w-full self-center bg-background hover:cursor-pointer`} key={index} onClick={() => {copyContact(method)}}>

                                <CardHeader className="flex flex-row gap-3">

                                    <div className="mt-2">
                                        {method.icon}
                                    </div>

                                    <CardTitle className="text-2xl">
                                        {method.name}
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="flex flex-row gap-5 text-lg">
                                    {method.value}
                                </CardContent>

                            </Card>

                        ))}

                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full self-center gap-3 flex-wrap animate-fadeIn opacity-0 delay-200 justify-center mt-3">

                        {socialLinks.map((link, index) => (

                            <Link href={link.url} key={index}>

                                <Card className={`w-full self-center animate-fadeIn opacity-0 bg-background`} >

                                    <CardHeader className="flex flex-row gap-3">

                                        <div className="mt-2">
                                            {link.icon}
                                        </div>

                                        <CardTitle className="text-2xl">
                                            {link.name}
                                        </CardTitle>

                                    </CardHeader>

                                    <CardContent className="flex flex-row gap-5 text-lg">
                                        {link.value}
                                    </CardContent>

                                </Card>
                            </Link>
                        

                        ))}

                    </div>

                </div>

            </div>
        </Navbar>
    )

}