"use server"
import { signIn } from 'next-auth/react';

type formData={
  
}
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', );
  } catch (error) {
    
  }
}