import CommandPalette, {
  JsonStructure,
  filterItems,
  renderJsonStructure,
  useHandleOpenCommandPalette,
} from "../src";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import React from "react";

const meta: Meta = {
  title: "CommandPalette",
  component: CommandPalette,
  parameters: { controls: { expanded: false } },
};

export default meta;

const Template: Story<any> = () => {
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<"root" | "positions">("root");

  useHandleOpenCommandPalette(setIsOpen);

  const items: JsonStructure = [
    {
      id: "welcome",
      items: [
        {
          id: "welcome",
          children: <Welcome />,
          showType: false,
          keywords: ["Welcome"],
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
          closeOnSelect: false,
          keywords: ["jobs"],
          id: "positions",
          onClick: () => {
            setPage("positions");
            setSearch("");
          },
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
          icon: "LifebuoyIcon",
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

  const rootItems = filterItems(items, search);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#E5E7EB",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      }}
    >
      <CommandPalette
        onChangeSelected={setSelected}
        onChangeSearch={setSearch}
        onChangeOpen={setIsOpen}
        selected={selected}
        search={search}
        isOpen={isOpen}
        page={page}
        footer={
          <div style={{ paddingInline: "1rem", paddingBlock: "0.75rem" }}>
            <p>hej</p>
          </div>
        }
      >
        <CommandPalette.Page id="root" searchPrefix={["General"]}>
          {rootItems.length ? (
            renderJsonStructure(rootItems)
          ) : (
            <CommandPalette.FreeSearchAction
              href={`https://google.com/?q=${search}`}
              rel="noopener noreferrer"
              closeOnSelect={false}
              target="_blank"
            />
          )}
        </CommandPalette.Page>

        <CommandPalette.Page
          searchPrefix={["General", "Positions"]}
          id="positions"
          onEscape={() => {
            setPage("root");
          }}
        >
          <CommandPalette.List heading="Positions">
            <CommandPalette.ListItem index={0}>
              Nothing here
            </CommandPalette.ListItem>
          </CommandPalette.List>
        </CommandPalette.Page>
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
