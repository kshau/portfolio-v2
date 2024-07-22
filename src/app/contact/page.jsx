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
            "name": "Phone number", 
            "icon": <Phone/>,
            "value": "(404)-432-9074"
        }, 
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
            <div className="flex flex-col">

                <span className="text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Contact</span>

                <div className="flex flex-row self-center mt-16 gap-3 flex-wrap animate-fadeIn opacity-0 delay-200 justify-center">

                    {contactMethods.map((method, index) => (

                        <Card className={`w-[70rem] self-center w-fit`} key={index}>

                            <CardHeader className="flex flex-row gap-3">

                                <div className="mt-2">
                                    {method.icon}
                                </div>

                                <CardTitle className="text-2xl">
                                    {method.name}
                                </CardTitle>

                            </CardHeader>

                            <CardContent className="flex flex-row gap-5">
                                <Button variant="ghost" className="text-lg" onClick={() => {copyContact(method)}}>
                                    {method.value}
                                </Button>
                            </CardContent>

                        </Card>

                    ))}

                </div>

                <Separator className="lg:w-[30rem] self-center m-12 animate-fadeIn opacity-0 delay-300"/>

                <div className="flex flex-row self-center gap-3 flex-wrap  animate-fadeIn opacity-0 delay-500 justify-center">

                    {socialLinks.map((link, index) => (

                    <Card className={`w-[70rem] self-center w-fit animate-fadeIn opacity-0`} key={index}>

                        <CardHeader className="flex flex-row gap-3">

                            <div className="mt-2">
                                {link.icon}
                            </div>

                            <CardTitle className="text-2xl">
                                {link.name}
                            </CardTitle>

                        </CardHeader>

                        <CardContent className="flex flex-row gap-5">
                            <Link href={link.url}>
                                <Button variant="ghost" className="text-lg">
                                    {link.value}
                                </Button>
                            </Link>
                        </CardContent>

                    </Card>

                    ))}

                </div>

            </div>
        </Navbar>
    )

}