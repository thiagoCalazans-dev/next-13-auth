import * as React from "react";
import {} from "react-hook-form";

import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  id: string;
  required?: boolean;
}

export function Input({
  className,
  register,
  id,
  required,
  ...props
}: InputProps) {
  return (
    <input
      id={id}
      {...register(id, { required })}
      className={cn(
        "flex h-10 w-full rounded-md border border-zinc-300 bg-transparent py-2 px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900",
        className
      )}
      {...props}
    />
  );
}
