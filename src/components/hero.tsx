import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hi, I'm Adarsh Masekar
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Motivate Software Engineer eager to contribute and grow. Focused on continuous learning and mastering new technologies to deliver impactful results.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="#projects">
          <Button size="lg">View My Projects</Button>
        </Link>
      </div>
    </section>
  )
}
