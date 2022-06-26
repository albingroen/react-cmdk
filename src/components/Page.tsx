import React, { ReactNode, useContext, useEffect } from "react";
import { PageContext, SearchContext } from "../lib/context";

interface PageProps {
  searchPrefix?: string[];
  onEscape?: () => void;
  children: ReactNode;
  id: string;
}

export default function Page({
  searchPrefix,
  children,
  onEscape,
  id,
}: PageProps) {
  const { page, setSearchPrefix } = useContext(PageContext);
  const { search } = useContext(SearchContext);

  const isActive = page === id;

  useEffect(() => {
    if (onEscape && isActive) {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          onEscape!();
        } else if (e.key === "Backspace" && !search) {
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
  }, [isActive, search]);

  useEffect(() => {
    if (isActive && setSearchPrefix) {
      setSearchPrefix(searchPrefix);
    }
  }, [searchPrefix, isActive, setSearchPrefix]);

  return isActive ? <>{children}</> : null;
}
