"use client";

import { ForwardRefExoticComponent, Fragment, SVGProps } from "react";
import { signOut } from "next-auth/react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  InboxIcon,
  CursorArrowRaysIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface Solution {
  name: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  onClick?: () => void;
}

export const AccountDropDown = ({ session }: { session: { user: { email: string } } }) => {
  const userEmail = session?.user?.email;
  const solutions: Solution[] = [
    { name: "Account email", description: userEmail, href: "#", icon: InboxIcon },
    { name: "Create", description: "Sparkling memo", href: "#", icon: CursorArrowRaysIcon },
    {
      name: "Logout",
      description: "End session",
      href: "#",
      icon: ArrowLeftStartOnRectangleIcon,
      onClick: () =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        }),
    },
  ];
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
          <UserIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600" aria-hidden="true" />
        </div>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-96 max-w-96 -translate-x-3/4 px-4 focus:border-0">
          <div className="w-80 max-w-80 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    {item.onClick ? (
                      <div onClick={item.onClick} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </div>
                    ) : (
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    )}
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
