"use client"


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Sun, Moon } from "lucide-react"
import { teamMembers } from "@/data/teamMembers"
import { teamInfo } from "@/data/teamInfo"
import { HeroUIProvider } from "@heroui/react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';






export default function TeamShowcase() {


  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  return (
    <HeroUIProvider>
      <main className={`animated-bg ${isDark ? "dark" : "light"}`}>

        <div className="container mx-auto px-4 py-8">

          {/* Dark Mode Toggle Button */}
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
          <div className="text-center">
            <h1 className={`text-6xl font-extrabold text-center drop-shadow-[0_0_20px_rgba(100,100,100,0.7)] animate-float`}>
              {teamInfo.name}
            </h1>
            <p className="mt-10 text-2xl text-black">
              {teamInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {teamMembers.map((member) => (
              <Card
                key={member.id} // Use member ID as key
                className="flex flex-col cursor-pointer hover:shadow-lg transition duration-300"
                onClick={() => {
                  router.push(`/team/${member.id}`)
                }} // Navigate on click
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="icon" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* animations */}
          <DotLottieReact
            src="https://lottie.host/a26c678b-5234-40f8-b616-c693eac2eddb/1GIAuRoiN9.lottie"
            loop
            autoplay
          />
        </div>
      </main>
    </HeroUIProvider>

  )
}

