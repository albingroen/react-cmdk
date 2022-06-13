import React, { ReactNode, useContext, useEffect } from "react";
import { PageContext } from "../lib/context";

interface PageProps {
  children: ReactNode;
  onEscape?: () => void;
  id: string;
}

export default function Page({ children, onEscape, id }: PageProps) {
  const { page } = useContext(PageContext);

  const isActive = page === id;

  useEffect(() => {
    if (onEscape && isActive) {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          onEscape!();
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isActive]);

  return isActive ? <>{children}</> : null;
}
