import React, { useContext } from "react";
import { Button, ButtonProps } from "./ListItem";
import { SearchContext } from "../lib/context";

interface FreeSearchActionProps extends Omit<ButtonProps, "index"> {
  index?: number;
}

export default function FreeSearchAction(props: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <Button index={0} icon="SearchIcon" showType={false} {...props}>
      <span className="max-w-md truncate">
        Search for <span className="font-semibold">"{search}"</span>
      </span>
    </Button>
  );
}
