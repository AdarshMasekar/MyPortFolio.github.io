import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import quiz from "../lib/quiz.png"

const projects = [

  {
    title: "Learning hub",
    description: "A platform built using Next.js and prisma",
    image: quiz,
    github: "https://github.com/AdarshMasekar/learning-hub",
    demo: "https://learning-hub-phi.vercel.app/"
  },{
    title: "QuizMaster - online quiz application",
    description: "A responsive web application built with nextjs and firebase",
    image: quiz,
    github: "https://github.com/AdarshMasekar/quiz-demo",
    demo: "https://quiz-demo-livid.vercel.app/"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-4">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="p-1 rounded-lg object-cover border border-secondary"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
