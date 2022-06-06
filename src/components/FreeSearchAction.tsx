import ListItem, { ButtonProps, LinkProps } from "./ListItem";
import React, { useContext } from "react";
import { SearchContext } from "../lib/context";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
  index?: number;
}

export default function FreeSearchAction(props: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} icon="SearchIcon" showType={false} {...props}>
      <span className="max-w-md truncate dark:text-white">
        Search for <span className="font-semibold">"{search}"</span>
      </span>
    </ListItem>
  );
}
