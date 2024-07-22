"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CircleUser } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function Home() {

  const aboutMeRef = useRef(null);

  const technologies = [
    {
      "name": "HTML", 
      "image": "/assets/brand-icons/html.svg"
    }, 
    {
      "name": "CSS", 
      "image": "/assets/brand-icons/css.svg"
    }, 
    {
      "name": "JavaScript", 
      "image": "/assets/brand-icons/javascript.svg", 
      "imageStyle": "p-2"
    }, 
    {
      "name": "Node.js", 
      "image": "/assets/brand-icons/node-js.svg", 
      "imageStyle": "w-fit p-1"
    }, 
    {
      "name": "React.js", 
      "image": "/assets/brand-icons/react.svg", 
      "imageStyle": "w-fit p-2"
    }, 
    {
      "name": "Tailwind", 
      "image": "/assets/brand-icons/tailwind-css.svg", 
      "imageStyle": "w-fit p-6 scale-[130%]"
    }, 
    {
      "name": "MongoDB", 
      "image": "/assets/brand-icons/mongo-db.svg", 
      "imageStyle": "w-fit p-2"
    }, 
  ]

  return (

    <Navbar current="Home">

      <div className="flex flex-col">

        <div className="flex justify-center h-screen md:m-24 lg:m-0">

          <div className="flex flex-col justify-center my-auto gap-10 w-fit flex-wrap">

            <img src="/assets/shaurya-kumar.png" className="w-52 lg:w-64 aspect-square rounded-full object-cover m-auto animate-fadeIn opacity-0 delay-100"/>

            <div className="flex flex-col gap-5">
              
              <span className="text-[45px] lg:text-7xl leading-tight animate-fadeIn opacity-0 delay-300 font-bold">Shaurya Kumar</span>

              <div className="flex flex-row gap-5 self-center mt-4">
                <Button className="w-40 text-xl h-12 animate-fadeIn opacity-0 delay-500" onClick={() => {aboutMeRef.current.scrollIntoView({"behavior": "smooth"})}}>About me</Button>
                <Link href="/contact">
                  <Button className="w-40 text-xl h-12 animate-fadeIn opacity-0 delay-700" variant="outline">Contact</Button>
                </Link>
              </div>

            </div>

          </div>

        </div>

        <Separator/>

        <div className="flex flex-col m-20 gap-3 flex-wrap w-fit self-center" ref={aboutMeRef}>

          <Card className="min-w-96 max-w-[70rem]">
            <CardHeader className="flex flex-row gap-3">
              <CircleUser size={42}/>
              <CardTitle className="text-3xl">
                About me
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-5 text-xl">
              <span>
                Hi! I&apos;m Shaurya Kumar. As a high school sophomore with a passion for programming, I have been immersed in the world of coding since I moved to the United States at the age of nine. Over the years, I have honed my skills in various programming languages and technologies, including JavaScript, MongoDB, ReactJS, NodeJS, and SQL. Beginning my journey with game development, I slowly transitioned more into web and mobile app development. As a side hobby, I also like to play the drum set!
              </span>
            </CardContent>
          </Card>

          <div className="flex flex-wrap max-w-[75rem] gap-3 justify-center lg:justify-left">
            {technologies.map((technology, index) => (
              <Card className="w-40 h-40" key={index}>
                <CardHeader className="flex justify-center">
                  <img src={technology.image} className={`w-20 h-20 self-center object-cover ${technology.imageStyle}`}/>
                  <CardTitle className="flex justify-center">
                    <span className="mt-2">
                      {technology.name}
                    </span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

        </div>

      </div>

    </Navbar>

  )

}