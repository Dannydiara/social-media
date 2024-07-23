import { Button } from "../../components/ui/button"

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { useToast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "../../lib/validation"
import Loader from "@/components/shared/Loader"
import { createUserAccount } from "@/lib/appwrite/api"

const SignupForm = () => {
  const { toast } = useToast()
  const isLoading = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast({ title: 'Sign up flopped. Give it another go!' });
    }

    // const session = await signInAccount()
    
  }
  
  return (
    <Form {...form}>

    <div className="sm:w-420 w-360 flex-center flex-col">
      <img src="/assets/images/logoname.svg" />

      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Join the vibes squad</h2>
      <p className="text-light-3 small-medium md:base-regular mt-2">Share your deets and get vibing with Vibeshub!</p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 sm:gap-2 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Userame</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="shad-button_primary mt-1">
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Cooking things up...
            </div>
          ) : 'Get on board'}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Already vibing with us? 
          <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">
            Slide back in
          </Link>
        </p>
      </form>
    </div>
  </Form>
  )
}

export default SignupForm
