import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Professional Background</CardTitle>
          <CardDescription>My Experience in Tech</CardDescription>
        </CardHeader>
        <hr  className="-mt-2"/>
        <CardContent className="mt-2">
          <p className="mb-4">
            I am a Software Engineer passionate about web development and problem-solving. I specialize in full-stack development with React, Next.js, and Node.js, working effectively in team environments.
        </p>
        <ul>
            <li>• 2+ years of hands-on development experience</li>
            <li>• Strong foundation in JavaScript/TypeScript ecosystem</li>
            <li>• Experience with modern frontend frameworks and libraries</li>
            <li>• Committed to writing clean, maintainable, and well-tested code</li>
            <li>• Always eager to learn new technologies and best practices</li>
        </ul>
        </CardContent>
      </Card>
    </section>
  )
}
