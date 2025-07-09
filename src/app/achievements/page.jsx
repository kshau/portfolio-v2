"use client"

import { Navbar } from "@/components/Navbar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CalendarDays } from "lucide-react"
import Image from "next/image"

function AchievementCard({name, award, image, date, className, ...props}) {

    return (
        <Card className={cn("h-fit w-[23rem] bg-background", className)} {...props}>
            <CardHeader>
                <Image src={image} className="h-48 rounded-md object-cover mb-5" width={1000} height={0}/>
                <CardTitle className="text-2xl lg:text-3xl">
                    {name}
                </CardTitle>
                <CardDescription className="text-lg lg:text-xl">
                    {award}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Badge className="text-sm lg:text-md flex gap-x-2">
                    <CalendarDays size={20}/>
                    {date}
                </Badge>
            </CardContent>
        </Card>
    )

}

export default function Achievements() {

    const achievements = [
        {
            "name": "FBLA National Leadership Conference 2025", 
            "award": "#1 in Introduction to Information Technology",
            "image": "/assets/achievements/fbla_nlc_intro_to_it_2025.png", 
            "date" : "July 2nd, 2025"
        }, 
        {
            "name": "FBLA State Leadership Conference 2024-25", 
            "award": "#4 in Introduction to Information Technology",
            "image": "/assets/achievements/fbla_slc_intro_to_it_2024_25.png", 
            "date" : "March 15th, 2025"
        }, 
        {
            "name": "FBLA State Leadership Conference 2024-25", 
            "award": "#8 in Introduction to Programming",
            "image": "/assets/achievements/fbla_slc_intro_to_programming_2024_25.png", 
            "date" : "March 15th, 2025"
        }, 
        {
            "name": "2025 Lanier Regional Technology Competition", 
            "award": <span>#3 in Project Programming <br/> 9-10</span>,
            "image": "/assets/achievements/lanier_regional_2025.png", 
            "date" : "January 25th, 2025"
        }, 
        {
            "name": "FBLA Region Leadership Conference 2024-25", 
            "award": "#5 in Introduction to Information Technology",
            "image": "/assets/achievements/fbla_rlc_intro_to_it_2024_25.png", 
            "date" : "January 17th, 2025"
        }, 
        {
            "name": "Microsoft Office Specialist", 
            "award": "Word Associate Microsoft 365 Apps",
            "image": "/assets/achievements/word_365_associate.png", 
            "date" : "October 14th, 2024"
        }, 
        {
            "name": "GFACT Certification", 
            "award": "Global Information Assurance Certification (GIAC)", 
            "image": "/assets/achievements/gfact.png", 
            "date" : "June 18th, 2024"
        }, 
        {
            "name": "GaSTC 2024", 
            "award": "#3 in Internet Applications 9-10",
            "image": "/assets/achievements/gastc_2024.png", 
            "date" : "March 2nd, 2024"
        }, 
        {
            "name": "Microsoft Office Specialist", 
            "award": "Powerpoint 2019 Associate",
            "image": "/assets/achievements/ppt_2019_associate.png", 
            "date" : "February 14th, 2024"
        }, 
        {
            "name": "2024 Lanier Regional Technology Competition", 
            "award": "#1 in Internet Applications 9-10",
            "image": "/assets/achievements/lanier_regional_2024.png", 
            "date" : "January 20th, 2024"
        }, 
        {
            "name": "HackGwinnett 3", 
            "award": "Best Humanitarian",
            "image": "/assets/achievements/hack_gwinett_3_best_humanitarian.png", 
            "date" : "October 28th, 2023"
        }, 
        {
            "name": "Certified Entry-Level JS Programmer", 
            "award": "JS Institute Certification",
            "image": "/assets/achievements/jse.png", 
            "date" : "July 30th, 2023"
        }, 

    ]

    return (
        <Navbar current="Achievements">

            <div className="flex flex-col">

                <span className="text-4xl lg:text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Achievements</span>

                <div className="lg:flex flex-row justify-center mt-16 mb-5 hidden animate-fadeIn opacity-0 delay-200">

                    <div className="flex flex-col">

                        {achievements.map((achievement, index) => (index % 2 == 0 ? (

                            <div className="flex flex-row mb-56" key={index}>

                                <AchievementCard name={achievement.name} award={achievement.award} image={achievement.image} date={achievement.date}/>

                                <div className="bg-white h-2 w-20 mt-36 rounded-l-md ml-10"/>

                            </div>

                        ) : <></>))}

                    </div>

                    <div className="bg-white min-w-2 rounded-full"/>

                    <div className="flex flex-col">

                        {achievements.map((achievement, index) => (index % 2 != 0 ? (

                            <div className="flex flex-row mt-72" key={index}>

                                <div className="bg-white h-2 w-20 mt-36 rounded-r-md mr-10"/>

                                <AchievementCard name={achievement.name} award={achievement.award} image={achievement.image} date={achievement.date}/>

                            </div>

                        ) : <></>))}

                    </div>

                </div>

                <div className="mt-16 flex flex-col gap-3 lg:hidden animate-fadeIn opacity-0 delay-200">
                    {achievements.map((achievement, index) => (
                        <AchievementCard name={achievement.name} award={achievement.award} image={achievement.image} date={achievement.date} className="self-center" key={index}/>
                    ))}
                </div>

            </div>
        </Navbar>
    )

}
