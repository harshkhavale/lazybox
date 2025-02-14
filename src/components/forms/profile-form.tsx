"use client";
import { EditUserProfileSchema } from "@/lib/types";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });
  return (
    <FormProvider {...form}>
      <form action="" className=" p-6 flex flex-col gap-6" onSubmit={() => {}}>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-lg">User Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={true}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-lg">User Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" self-start hover:text-white hover:border-[1px] bg-white hover:bg-primary"
        >
          {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Saving</>) : "Save User Settings"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
