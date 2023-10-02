'use client'

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function AnimateProvider({ children }: { children: ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
