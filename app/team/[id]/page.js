// app/team/[id]/page.js
'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { teamMembers } from '@/data/teamMembers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import RadarChartComponent from '@/components/ui/RadarChartComponent' // Adjust path as needed

export default function TeamMemberPage() {
  const router = useRouter()
  const params = useParams()
  const [member, setMember] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!params?.id) return

    const cleanId = decodeURIComponent(params.id)
    const foundMember = teamMembers.find(member => 
      member.id.toLowerCase() === cleanId.toLowerCase()
    )

    if (!foundMember) {
      setError('Member not found')
      setTimeout(() => router.push('/not-found'), 2000)
    } else {
      setMember(foundMember)
    }
  }, [params.id, router])

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl text-red-500">{error}</h2>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl">Loading member profile...</h2>
      </div>
    )
  }

  return (
    <body className="animated-bg">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto"> {/* Increased max-width to accommodate radar */}
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.specialty}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {(member.bio_long || member.bio).split('\n').map((line, index) => (
              <p key={index} className="text-lg mb-2">{line}</p>
            ))}
            
            {/* Add Radar Chart Component */}
            <div className="mt-8">
              <RadarChartComponent 
                skills={member.skills}
                memberName={member.name}
              />
            </div>
          </CardContent>
          <div className="flex justify-between p-6">
            <Button variant="outline" size="icon" asChild>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </body>
  )
}