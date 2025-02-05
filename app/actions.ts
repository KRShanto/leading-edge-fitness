"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
})

export async function submitContactForm(data: unknown) {
  const result = formSchema.safeParse(data)

  if (!result.success) {
    throw new Error("Invalid form data")
  }

  // Here you would typically send the data to your email service or database
  // For now, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

