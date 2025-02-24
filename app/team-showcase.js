import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { teamMembers } from "@/data/teamMembers"



export default function TeamShowcase() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Hackathon Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex flex-col">
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
    </div>
  )
}

