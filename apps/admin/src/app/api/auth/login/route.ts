import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(), // TODO: Add better password validation
})

export async function POST(request: Request) {
  const data = await request.formData()
  const parseResult = loginFormSchema.safeParse({
    email: data.get('email'),
    password: data.get('password'),
  })

  if (!parseResult.success) {
    return new NextResponse(
      JSON.stringify({
        message: 'Invalid form data provided, check inputs and constraints',
      }),
      { status: 400 }
    )
  }

  const { email, password } = parseResult.data

  const loginResponse = await fetch('http://localhost:8080/auth/sign_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (loginResponse.status !== 204) {
    return new NextResponse(
      JSON.stringify({ message: 'Ermmmm something went wrong' }),
      { status: loginResponse.status }
    )
  }

  // TODO: Set session cookie

  return NextResponse.redirect(new URL('/dashboard', request.url))
}
