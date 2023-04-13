"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // setIsLoading(true);

    // signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // }).then((callback) => {
    //   setIsLoading(false);

    //   if (callback?.ok) {
    //     toast.success("Logged in");
    //     router.refresh();
    //     loginModal.onClose();
    //   }

    //   if (callback?.error) {
    //     toast.error(callback.error);
    //   }
    // });
  };

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
          shadow
           
               "
      >
        <h1>Sign in</h1>
        <form className="flex flex-col gap-4">
          <div>
            <Label>Email</Label>
            <Input
              id="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              id="password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <Button variant="primary">Login</Button>
        </form>
      </div>
    </main>
  );
}
