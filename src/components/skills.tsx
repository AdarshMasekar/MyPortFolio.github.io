import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 80 },
  { name: "Java", level: 85 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}
