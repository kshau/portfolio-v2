"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Achievements() {

    const projects = [
        {
            "name": "Vidosaur", 
            "description": 
            <span>
                Choose your own story by joining together prerecorded clips! Created for FBLA Intro to Programming 2024-25 with Kaustubh Varikallu and Shourya Manchikanti.
            </span>, 
            "image": "/assets/projects/vidosaur.png",
            "url": "https://vidosaur.shaurya.pro", 
        }, 
        {
            "name": "CodeAAI", 
            "description": 
            <span>
                A website created with programming challenges for members of the coding club at my high school! Collab with <Link href="https://keshav.pro" className="underline">Keshav Shah</Link>. 
            </span>, 
            "image": "/assets/projects/codeaai.png",
            "url": "https://codeaai.org", 
        }, 
        {
            "name": "SAT Unlimited", 
            "description": 
            <span>
                Level up your SAT question solving skills with this tool! You get to choose what to study, and how much you would like to study.
            </span>, 
            "image": "/assets/projects/sat-unlimited.png",
            "url": "https://satunlimited.com", 
        }, 
        {
            "name": "Freelancing", 
            "description": 
            <span>
                Started freelancing as a web developer making websites for small businesses and portfolio websites for individuals. 
                Contact me if you need a website!
            </span>, 
            "image": "/assets/projects/freelancing.png",
            "url": "https://web.shaurya.pro", 
            "githubUrl": "https://github.com/kshau/shauryas-web-dev"
        }, 
        {
            "name": "DNA Info", 
            "description": 
            <span>
                An online tool used for calculating properties of DNA strands such as mRNA and amino acids. 
                Made after learning about DNA in biology class!
            </span>, 
            "image": "/assets/projects/dnainfo.png",
            "url": "https://dnainfo.shaurya.pro", 
            "githubUrl": "https://github.com/kshau/DNAInfo.git"
        }, 
        {
            "name": "DartCTF", 
            "description": 
            <span>
                A simple CTF game made for GaSTC 2024! Includes cryptography, steganography, and web related challenges. Collab with <Link href="https://keshav.pro" className="underline">Keshav Shah</Link>. 
            </span>, 
            "image": "/assets/projects/dartctf.png",
            "url": "https://dartctf.shaurya.pro", 
            "githubUrl": "https://github.com/KeshavCode6/ctfgame"
        }, 

    ]

    return (
        <Navbar current="Projects">

            <div className="flex flex-col h-screen">

                <span className="text-4xl lg:text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Projects</span>

                <div className="mt-16 flex justify-center gap-3 flex-wrap animate-fadeIn opacity-0 delay-200">
                    {projects.map((project, index) => (
                        <Card className="h-fit w-[23rem] lg:w-[30rem] bg-background" key={index}>
                            <CardHeader>
                                <img src={project.image} className="h-48 rounded-md object-cover mb-5"/>
                                <CardTitle className="text-2xl lg:text-3xl">
                                    {project.name}
                                </CardTitle>
                                <CardDescription className="text-lg lg:text-xl">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-row gap-x-2">
                                {project.url ? <Link href={project.url}>
                                    <Button className="w-fit h-fit bg-white">
                                        <ExternalLink size={31}/>
                                    </Button>
                                </Link> : <></>}
                                {project.githubUrl ? <Link href={project.githubUrl}>
                                    <Button className="w-fit h-fit bg-stone-900 hover:bg-stone-800">
                                        <img src="/assets/brand-icons/github.png" className="w-8"/>
                                    </Button>
                                </Link> : <></>}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </Navbar>
    )

}
