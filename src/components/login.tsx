"use client";

import React, { useState } from "react";
import Button from "./ui/button";
import { ZodError, z } from "zod";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailState, setEmailState] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const emailSchema = z.string().email({ message: "Invalid email address" });

  async function SignInWithEmail() {
    try {
      emailSchema.parse(email);
      setEmailError(null);
      setLoading(true);
      setEmailState(true);
      const signInResult = await signIn("email", {
        email: email,
        callbackUrl: `${window.location.origin}`,
        redirect: false,
      });
      if (!signInResult?.ok) {
        return toast.error("Well this did not work...\n\nSomething went wrong, please try again");
      }
      toast.success("Check your email \n\nA magic link has been sent to you");
    } catch (error) {
      const zodError = error as ZodError;
      setLoading(false);
      toast.error("Well this did not work...\n\nSomething went wrong, please try again");
      if (zodError && zodError.errors && zodError.errors.length > 0) {
        setEmailError(zodError.errors[0].message);
      } else {
        setEmailError("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative isolate  bg-white">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="rounded-lg border bg-card text-card-foreground flex min-h-full py-52 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={SignInWithEmail}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-4 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 ${
                    loading ? "border-red-500" : ""
                  }`}
                />
                {emailError && <p className="mt-2 text-sm text-red-500">{emailError}</p>}
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disable={emailState}
                loading={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login with email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
