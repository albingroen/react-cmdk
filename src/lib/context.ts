import { createContext } from "react";
import { RenderLink } from "../types";

export const SelectContext = createContext<{ selected: number }>({
  selected: 0,
});

export const SearchContext = createContext<{ search: string }>({
  search: "",
});

export const RenderLinkContext = createContext<{
  renderLink?: RenderLink;
}>({
  renderLink: undefined,
});
