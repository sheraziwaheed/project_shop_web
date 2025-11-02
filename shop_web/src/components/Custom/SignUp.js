"use client";
import React, { useState } from 'react'
import { z } from "zod";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstname: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastname: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().email("Invalid email").min(1, "Email is required").max(50, "Email is too long"),
  password: z.string().min(6, "Password must be at least 6 characters").max(200, "Password is too long"),
});


function SignUp() {
  const [closeDailog , setCloseDialog]= useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname:"",
      lastname:"",
      email: "",
      pasword: "",
    },
  });

  
  async function onSubmit(values) {
    setCloseDialog(false);
    try {
      let response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        let res = await response.json();
        console.log("Response Message:", res?.message);
        alert(" signup successfully!");  
      } else {
        console.error("Failed to submit form:", response.statusText);
        alert("Failed to signup!");
      }
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
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
              <FormLabel>Pasword</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={()=>setCloseDialog(false)}
         className="w-full mt-[10px]"
         type="submit">
          SignUp
        </Button>
      </form>
    </Form>
  );
}

export default SignUp;
