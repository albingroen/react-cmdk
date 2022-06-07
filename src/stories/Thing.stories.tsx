import CommandPalette, { JsonStructure, getItemIndex, filterItems } from "../";
import { Meta, Story } from "@storybook/react";
import { useEffect, useState } from "react";

const meta: Meta = {
  title: "CommandPalette",
  component: CommandPalette,
  parameters: { controls: { expanded: false } },
};

export default meta;

const Template: Story<any> = () => {
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

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

  const items: JsonStructure = [
    {
      id: "welcome",
      items: [
        {
          id: "welcome",
          children: <Welcome />,
          showType: false,
          onClick: () => {
            alert("welcome!");
          },
        },
      ],
    },
    {
      heading: "Home",
      id: "home",
      items: [
        {
          children: "Home",
          icon: "HomeIcon",
          id: "home",
          disabled: true,
          href: "#",
          renderLink: (props) => <a {...props} />,
        },
        {
          children: "Settings",
          icon: "CogIcon",
          id: "settings",
          disabled: true,
        },
        {
          children: "Positions",
          icon: "BriefcaseIcon",
          id: "positions",
          href: "#",
        },
        {
          children: "Candidates",
          icon: "UsersIcon",
          id: "users",
          onClick: () => {
            alert("hj");
          },
        },
      ],
    },
    {
      heading: "External",
      id: "external",
      items: [
        {
          href: "https://google.com",
          children: "Help",
          icon: "SupportIcon",
          id: "support",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
    },
    {
      heading: "Extra",
      id: "extra",
      items: [
        {
          children: "Privacy policy",
          icon: "FlagIcon",
          id: "privacy",
        },
        {
          children: "User agreement",
          icon: "UserIcon",
          id: "user-agreement",
        },
        {
          children: "About",
          icon: "EyeIcon",
          id: "about",
        },
        {
          children: "Career",
          icon: "UsersIcon",
          id: "career",
        },
      ],
    },
  ];

  const filteredItems = filterItems(items, search);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#E5E7EB",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      }}
    >
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setIsOpen}
        search={search}
        isOpen={isOpen}
      >
        {filteredItems.length ? (
          filteredItems.map((list) => {
            return (
              <CommandPalette.List heading={list.heading} key={list.id}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    index={getItemIndex(filteredItems, id)}
                    key={id}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            );
          })
        ) : (
          <CommandPalette.FreeSearchAction
            href={`https://google.com/?q=${search}`}
            rel="noopener noreferrer"
            closeOnSelect={false}
            target="_blank"
          />
        )}
      </CommandPalette>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};

function Welcome() {
  return (
    <div className="w-full rounded-lg bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-400 p-4 border-t border-indigo-500 border-b border-indigo-500">
      <h2 className="text-lg font-semibold leading-tight text-white">
        Welcome 👋
      </h2>
      <p className="text-sm text-white/80 font-medium max-w-xs mt-1">
        We're really glad you found this! Here you can quickly get to what you
        want to do
      </p>
    </div>
  );
}
