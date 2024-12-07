'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact Me</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <Textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        <div className="flex flex-col justify-center space-y-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>your.email@example.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
