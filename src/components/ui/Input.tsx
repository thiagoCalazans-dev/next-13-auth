import * as React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  id: string;
  required?: boolean;
  errors: FieldErrors;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, register, id, required, errors, ...props }, ref) => {
    return (
      <input
        id={id}
        placeholder=" "
        {...register(id, { required })}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-300 bg-transparent py-2 px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
