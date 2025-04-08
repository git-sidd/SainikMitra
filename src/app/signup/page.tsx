"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignupForm() {
  const router=useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false)

 
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!firstname || !lastname ||!email || !password){
        setError("All Fields are Necessary")
        return;
      }
      
       try {
       
        const res =await fetch ("/pages/api/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            firstname,
            lastname,
            email,
            password
          })
          
        })
        const data=await res.json();
        if(data.existedUser){
          setError("User Already Exits!!");
          return;
        }
        if(res.ok){
          const form=e.target as HTMLFormElement;
          form.reset();
          setSuccess(true);
          setError("")
          router.push("/login");
        }
       
      } catch (error) {
        console.log(error)
        setError("Error occurred during registration.");
      }

  };
  return (
    <div className="md:h-auto h-screen flex flex-col justify-center items-center ">
      <div id="signup" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl mt-4 p-4 md:p-8 shadow-input bg-white dark:bg-black/80 mb-4">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Welcome to <span className=" text-orange-500">S</span>ainik
        <span className=" text-green-500">M</span>itra
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        SignUp to Sainik-Mitra
      </p>

      <form className="my-8"  onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="firstname" type="text" value={firstname} onChange={e=>setFirstname(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="lastname" type="text"  value={lastname} onChange={e=>setLastname(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="email"
            type="email"
            value={email} 
            onChange={e=>setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        {error && (
          <div className="bg-red-500 text-center p-1 rounded-sm my-2">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500 text-center p-1 rounded-sm my-2">
            User Registered
          </div>
          
        )}

        <div className="text-center">
          <p>
            Already have an Account ?{" "}
            <span className="text-blue-500">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
