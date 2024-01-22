"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = ({ session }: any) => {
  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo icon" width={40} height={40} />
        </Link>
        <div>
          {session ? (
            <p
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}/auth`,
                })
              }
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </p>
          ) : (
            <Link href="/auth" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
