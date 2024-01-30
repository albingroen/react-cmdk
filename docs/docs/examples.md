---
sidebar_position: 2
---

# Examples 

You can compose your command palette pretty much however you like with the included components. But here is an example of a command palette that uses some of the included helpers for a very neat solution.

```tsx
import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";

const Example = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
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
            icon: "RectangleStackIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
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
            icon: "CodeBracketIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "LifebuoyIcon",
            href: "#",
          },
          {
            id: "log-out",
            children: "Log out",
            icon: "ArrowRightOnRectangleIcon",
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
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        {/* Projects page */}
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default Example;
```


## Opening the command palelette

The package does include a helper hook for opening the command palette,
but you can actually open it however you want. Here are some examples.

### Helper

```typescript
const [isOpen, setIsOpen] = useState<boolean>(false);

useHandleOpenCommandPalette(setIsOpen);
```

### Custom

```typescript
const [isOpen, setIsOpen] = useState<boolean>(false);

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