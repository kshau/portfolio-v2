"use client"

import { Navbar } from "@/components/Navbar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function AchievementCard({name, award, image, date, className, ...props}) {

    return (
        <Card className={cn("h-fit w-[23rem]", className)} {...props}>
            <CardHeader>
                <img src={image} className="h-48 rounded-md object-cover mb-5"/>
                <CardTitle className="text-3xl">
                    {name}
                </CardTitle>
                <CardDescription className="text-xl">
                    {award}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Badge className="text-md">
                    {date}
                </Badge>
            </CardContent>
        </Card>
    )

}

export default function Achievements() {

    const achievements = [
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
            "name": "Lanier Regional Technology Competition", 
            "award": "#1 in Internet Applications 9-10",
            "image": "/assets/achievements/lanier_regional_2024.png", 
            "date" : "January 20th, 2024"
        }, 
        {
            "name": "HackGwinett 3", 
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

                <span className="text-5xl lg:text-6xl font-bold mt-36 self-center animate-fadeIn opacity-0 delay-100">Achievements</span>

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