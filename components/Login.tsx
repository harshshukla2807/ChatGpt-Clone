'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center">
            <Image
                src={"https://links.papareact.com/2i6"}
                width={300}
                height={300}
                alt="logo"
            />
            <button onClick={()=>signIn()} className="text-white text-3xl font-bold animate-pulse">Sign in to use chat gpt</button>
    </div>
  )
}

export default Login