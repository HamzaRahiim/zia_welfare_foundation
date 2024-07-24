"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
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
import Alerrt from "@/components/shared/Alerrt";

const formSchema = z.object({
  username: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters." }),
});

type FormType = z.infer<typeof formSchema>;

function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormType) => {
    try {
      const response = await fetch("https://formspree.io/f/meqybnyq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setAlertMessage(
          "Your message has been successfully received. We appreciate your interest and support. \n We will get back to you shortly."
        );
        reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setAlertMessage("There was a problem submitting your form.");
    }
    setAlertVisible(true); // Show the Alertt component
  };
  return (
    <Form {...form}>
      <form
        className="space-y-5 md:ml-10 flex flex-col justify-center items-center md:border-l-2 md:border-black md:mt-10 md:mr-6 md:pl-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name here.."
                  {...field}
                  className="w-[250px] md:w-80 border border-slate-600 focus:border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email here.."
                  {...field}
                  className="w-[250px] md:w-80 border border-slate-600 focus:border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here.."
                  {...field}
                  className="w-[250px] md:w-80 border border-slate-600 focus:border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-10 rounded-md px-8 bg-green-500 hover:bg-green-700 md:self-start md:ml-8"
        >
          {isSubmitting ? "Submiting..." : "Submit"}
        </Button>
      </form>
      {alertVisible && (
        <Alerrt message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
    </Form>
  );
}

export default ProfileForm;
