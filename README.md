# react-cmdk

A fast, accessible, and pretty React.js command palette

- [Installation](#installation)
- [Usage](#example-usage)
- [Maintainers](#maintainers)

## Installation

```
npm install react-cmdk
```

Or if you'd rather use Yarn

```
yarn add react-cmdk
```

## Example usage

You can compose your command palette pretty much however you like with the
included components. But here is a example of command palette that uses some
of the included helpers to get a very neat comand palette.

```typescript
import "react-cmdk-2/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk-2";
import { useState } from "react";

const Example = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "#",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            href: "#",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "CollectionIcon",
            href: "#",
          },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: "CodeIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "SupportIcon",
            href: "#",
          },
          {
            id: "log-out",
            children: "Log out",
            icon: "LogoutIcon",
            onClick: () => {
              alert("Logging out...");
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
    >
      {filteredItems.length ? (
        filteredItems.map((list) => (
          <CommandPalette.List key={list.id} heading={list.heading}>
            {list.items.map(({ id, ...rest }, i) => (
              <CommandPalette.ListItem
                key={id}
                index={getItemIndex(filteredItems, id)}
                {...rest}
              />
            ))}
          </CommandPalette.List>
        ))
      ) : (
        <CommandPalette.FreeSearchAction index={0} />
      )}
    </CommandPalette>
  );
};

export default Example;
```

### Opening the commane palelette

The package doesn't include built-in support for opening the comamnd palette,
so you can open it however you want. Here is and example though.

```typescript
useEffect(() => {
  function handleKeyDown(e: KeyboardEvent) {
    if (e.metaKey && e.key === "k") {
      e.preventDefault();
      e.stopPropagation();

      setIsOpen((currentValue) => {
        return !currentValue;
      });
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
```

## Maintainers

<a href="https://github.com/albingroen"> 
  <img src="https://avatars.githubusercontent.com/u/19674362?v=4" width="80" height="80" />
</a>
