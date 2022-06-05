import { Children, ReactNode } from "react";
import { JsonStructure } from "../types";

export function getItemIndex(
  items: JsonStructure,
  id: string,
  startIndex: number = 0
) {
  return (
    items
      .map((list) => list.items)
      .reduce((a, b) => a.concat(b))
      .findIndex((i) => i.id === id) + startIndex
  );
}

export function filterItems(items: JsonStructure, search: string) {
  return items
    .filter((list) =>
      list.items.some((item) => doesChildMatchSearch(search, item.children))
    )
    .map((list) => ({
      ...list,
      items: list.items.filter((item) =>
        doesChildMatchSearch(search, item.children)
      ),
    }));
}

function doesChildMatchSearch(search: string, children?: ReactNode) {
  return children
    ? getLabelFromChildren(children)
        .toLowerCase()
        .includes(search.toLowerCase())
    : false;
}

function getLabelFromChildren(children: ReactNode) {
  let label = "";

  Children.map(children, (child) => {
    if (typeof child === "string") {
      label += child;
    }
  });

  return label;
}

export function classNames(
  ...classes: Array<string | null | boolean | undefined>
) {
  return classes.filter(Boolean).join(" ");
}
