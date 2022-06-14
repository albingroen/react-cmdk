import React, { forwardRef, Fragment, Ref } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";

interface SearchProps {
  onChange: (value: string) => void;
  placeholder?: string;
  prefix?: string[];
  value: string;
}

function Search(
  { onChange, placeholder, prefix, value }: SearchProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="flex items-center space-x-1.5 pl-3">
      <SearchIcon className="w-4 pointer-events-none text-gray-400 dark:text-gray-600" />

      {prefix?.length
        ? prefix.map((p) => {
            return (
              <Fragment key={p}>
                <span className="dark:text-white">{p}</span>
                <span className="text-gray-500">/</span>
              </Fragment>
            );
          })
        : null}

      <div className="flex-1 relative">
        <input
          ref={ref}
          spellCheck={false}
          className="py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-gray-500 dark:text-white"
          onChange={(e) => {
            onChange(e.currentTarget.value);
          }}
          onFocus={(e) => {
            e.currentTarget.select();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape" && value) {
              e.preventDefault();
              e.stopPropagation();
              onChange("");
            }
          }}
          id="command-palette-search-input"
          placeholder={placeholder}
          value={value}
          type="text"
          autoFocus
        />

        {value && (
          <button
            tabIndex={-1}
            type="button"
            onClick={() => {
              onChange("");
              const inputElement = document.getElementById(
                "command-palette-search-input"
              );
              if (inputElement) {
                inputElement.focus();
              }
            }}
          >
            <XCircleIcon className="w-5 text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 transition absolute right-3 top-1/2 transform -translate-y-1/2" />
          </button>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Search);
