"use server"

import { z } from "zod"

const checkUsernmae = (username:string)=>
  !username.includes("potato");

const checkPasswords = ({password, confirm_password} : {password:string, confirm_password:string})=> 
  password === confirm_password

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
)

const formSchema = z
  .object({
    username: z
      .string({invalid_type_error:"Username must be a string!",
        
        required_error:"Where is my username?"
        
      })
      .min(3,"Way too short!!!")
      .trim()
      .toLowerCase()
      .transform((username)=>`${username}`)
      // .max(10,"That is too longggg!")
      .refine(checkUsernmae,"No potatoes allowed"),
    email: z.string().email().toLowerCase(),
    password: z.string().min(10).regex(passwordRegex,"Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-"),
    confirm_password: z.string().min(4)
})
.refine(checkPasswords, {
  message:"Both passwords should be the same!",
  path:["confirm_password"]})

export async function createAccount(prevState: any , formData:FormData){
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password")
  }
  const result = formSchema.safeParse(data)
  if (!result.success){
    return result.error.flatten()
  } else{
    console.log(result.data)
  }
}