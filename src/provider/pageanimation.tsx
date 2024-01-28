"use client";

import { useTransition, animated } from "@react-spring/web";
import { usePathname } from "next/navigation";
import { ReactNode, FC } from "react";

interface TransitionProps {
  children: ReactNode;
}
const PageTransition: FC<TransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const transitions = useTransition(pathname, {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
  });

  // eslint-disable-next-line no-unused-vars
  return transitions((style, item) => <animated.div style={style}>{children}</animated.div>);
};

export default PageTransition;
