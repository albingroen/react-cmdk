import React, { FC, ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as HeroIcons from "@heroicons/react/outline";
import { CMDKProps, CMDKOption } from "./types";
import { tw, setup } from "twind";
import "./styles.css";

setup({
  darkMode: "media",
});

const CMDK: FC<CMDKProps> = ({ options }) => {
  const [search, onSearchChange] = useState<string>("");
  const [open, onOpenChange] = useState(false);

  const filterOptions = (opts: CMDKOption[]) => {
    return opts.filter((option) =>
      option.options
        ? true
        : search
        ? JSON.stringify(option).toLowerCase().includes(search.toLowerCase())
        : true
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        onOpenChange((prevOpen) => {
          return !prevOpen;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderOptions = (opts: CMDKOption[]): ReactNode => {
    return filterOptions(opts).map((option) => {
      const Icon = option.icon && HeroIcons[`${option.icon}Icon`];

      return option.options ? (
        <div key={option.key} className={tw("p-2 pt-0")}>
          <li className={tw("px-2 rounded-md flex items-center h-10")}>
            <span
              className={tw("text-sm font-medium text-gray-500 leading-none")}
            >
              {option.label}
            </span>
          </li>

          {renderOptions(option.options)}
        </div>
      ) : (
        <li key={option.key}>
          <a
            className={tw(
              "flex items-center space-x-4 justify-beeen px-2 rounded-md h-11 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800"
            )}
            onMouseOver={(e) => {
              e.currentTarget.focus();
            }}
            href={option.href}
          >
            <div className={tw("space-x-3 flex items-center")}>
              {Icon && (
                <div className={tw("w-5 flex items-center justify-center")}>
                  <Icon className={tw("w-4 text-gray-500")} />
                </div>
              )}

              <span className={tw("leading-none")}>{option.label}</span>
            </div>

            {option.shortcut && (
              <div className={tw("flex items-center space-x-1")}>
                {option.shortcut.map((shortcut) => (
                  <div
                    className={tw(
                      "leading-none p-1 rounded bg-gray-100 dark:bg-gray-800 border border-b-2 dark:border-gray-700 text-gray-500 font-medium dark:text-gray-400 w-6 h-6 flex items-center justify-center"
                    )}
                    key={shortcut}
                  >
                    <span>{shortcut}</span>
                  </div>
                ))}
              </div>
            )}
          </a>
        </li>
      );
    });
  };

  return (
    <Dialog.Root
      onOpenChange={(value) => {
        if (!value && search) {
          onSearchChange("");
        } else {
          onOpenChange(value);
        }
      }}
      open={open}
    >
      <Dialog.Overlay
        className={`dialog-overlay ${tw(
          "h-screen w-screen top-0 left-0 bg-black fixed bg-opacity-25 dark:bg-opacity-50"
        )}`}
      />
      <Dialog.Content
        className={`dialog-content ${tw(
          "text-gray-900 antialiased dark:text-white fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        )}`}
      >
        <div
          className={tw(
            "w-screen max-w-screen-sm rounded-lg h-80 bg-white shadow-xl dark:bg-gray-900 overflow-hidden flex flex-col"
          )}
        >
          <input
            className={tw(
              "px-4 py-3 border-b dark:border-gray-800 w-full placeholder-gray-500 focus:placeholder-gray-400 dark:focus:placeholder-gray-600 transition bg-white dark:bg-gray-900 focus:outline-none"
            )}
            onChange={(e) => onSearchChange(e.currentTarget.value)}
            placeholder="Search"
            value={search}
            type="text"
            autoFocus
          />

          {options?.length ? (
            <ul
              className={tw(
                "dark:border-gray-800 flex-1 overflow-y-auto divide-y dark:divide-gray-800"
              )}
            >
              {renderOptions(options)}
            </ul>
          ) : (
            <div
              className={tw(
                "flex-1 flex flex-col space-y-1 items-center justify-center"
              )}
            >
              <HeroIcons.CloudIcon
                className={tw("w-20 text-gray-300 dark:text-gray-600")}
              />
              <p>Nothing here...</p>
            </div>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CMDK;
