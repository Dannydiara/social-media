import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Short name alert, pump it up!' }),
    username: z.string().min(2, { message: 'Short username detected! Make it cooler!' }),
    email: z.string().email({ message: 'Invalid email' }).min(2, { message: 'Too short, level up email' }),
    password: z.string().min(6, { message: 'Password’s too tiny, boost its length!' })
})
