"use client";

import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const createLoginFormSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Esse não é um formato de email")
    .endsWith("@gcaspp.com.br", "use um email de dominio GCASPP"),
  password: z.string().nonempty("Campo obrigatório"),
});

type LoginForm = z.infer<typeof createLoginFormSchema>;

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(createLoginFormSchema),
  });

  function Login(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main
      className=" justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0"
    >
      <div
        className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto    
          p-4 
          pb-2
          shadow
          bg-zinc-800
          rounded-md            
"
      >
        <h1 className="text-2xl mb-4 ">Sign Up</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(Login)}>
          <Form.Control>
            <Form.Label htmlFor="Email">Name</Form.Label>
            <Form.Input
              id="name"
              disabled={isLoading}
              register={register}
              required
            />
          </Form.Control>
          <Form.Control>
            <Form.Label htmlFor="Email">Email</Form.Label>
            <Form.Input
              id="email"
              disabled={isLoading}
              register={register}
              required
            />
          </Form.Control>
          <Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              id="password"
              type="password"
              disabled={isLoading}
              register={register}
              required
            />
          </Form.Control>
          <Button className="" type="submit" variant="primary">
            Login
          </Button>
        </form>
        <div className="mt-4 w-full text-end font-thin  ">
          <Link
            className="text-sm text-zinc-400  hover:underline hover:underline-offset-2 hover:decoration-0 hover:text-sky-600  dark:hover:text-white"
            href="/"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
