"use client";

import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Button from "./button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  const backgroundSprings = useSpring({
    from: { opacity: 0.1 },
    to: { opacity: 1 },
    delay: 100,
    loop: {
      reverse: true,
    },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <animated.div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          style={backgroundSprings}
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </animated.div>
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-36">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="flex items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducing our magical memo {"  "}
              <Image
                src="/sparkling.png"
                className="ml-4"
                aria-hidden="true"
                alt="logo icon"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Create, Edit, Share Memos, Snippets easily
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With magic memo, create, update, and share everything easily. The only memo you will
              ever need.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                href="/login"
                className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                icon={<ArrowRightIcon color="white" className="h-6 w-6" />}
              >
                Create memo
              </Button>
            </div>
            <div className="flex justify-center items-center gap-x-20 lg:gap-x-40">
              <Image
                src="/whiteguy.png"
                alt="White Guy"
                width={200}
                height={200}
                className="rounded-full"
              />
              <Image
                src="/blackguy.png"
                alt="Black Guy"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <animated.div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          style={backgroundSprings}
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </animated.div>
      </div>
    </div>
  );
};
