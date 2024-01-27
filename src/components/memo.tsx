import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTrail, animated } from "@react-spring/web";
import Button from "./ui/button";

export default function Memo({ open, setOpen, memo }: any) {
  // const [open, setOpen] = useState(false);
  const shouldShowDialog = true; // Set this to your actual condition
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    if (shouldShowDialog && !animationTriggered) {
      setOpen(true);
      setAnimationTriggered(true);
    }
  }, [animationTriggered, setOpen, shouldShowDialog]);

  const textItems = memo?.content?.split(". ") || []; // Splitting the text into sentences

  const trail = useTrail(textItems.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    immediate: !animationTriggered,
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed mt-40 inset-0 z-10 w-screen content-center overflow-y-auto">
          <div className="flex items-stretch justify-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex max-w-lg my-8 transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex rounded-lg items-center overflow-hidden bg-white px-4 pb-8 pt-4 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full items-center text0black-900  bg-black-800 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-8 lg:col-span-7">
                      <animated.h2
                        style={trail[0]}
                        className="text-2xl leading-8 font-bold text-center text-gray-900 sm:pr-12"
                      >
                        {memo.title}
                      </animated.h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Memo Details
                        </h3>

                        <div className="text-center">
                          {trail.map((style, index) => (
                            <animated.p
                              key={index}
                              style={{ ...style, opacity: style.opacity.to((val) => val) }}
                              className="text-md p-4 text-center text-gray-900"
                            >
                              {textItems[index]}
                            </animated.p>
                          ))}
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Memo edit button
                        </h3>

                        <form>
                          <Button
                            href={`/memo/edit/${memo.id}`}
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Edit Memo
                          </Button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
