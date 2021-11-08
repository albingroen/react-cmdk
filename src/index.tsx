import React, { FC, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as HeroIcons from '@heroicons/react/outline';
import { CMDKProps, CMDKOption } from './types';
import { tw, setup } from 'twind';
import './styles.css';

setup({
  darkMode: 'media',
});

const CMDK: FC<CMDKProps> = ({ options }) => {
  const [search, onSearchChange] = useState<string>();
  const [open, onOpenChange] = useState(true);

  const searchOption: CMDKOption = {
    shortcut: undefined,
    label: `Search "${search}"`,
    icon: 'Search',
    key: 'search',
  };

  const filteredOptions = [
    ...options.filter((option) =>
      search
        ? JSON.stringify(option).toLowerCase().includes(search.toLowerCase())
        : true
    ),
    ...(search ? [searchOption] : []),
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        onOpenChange((prevOpen) => {
          return !prevOpen;
        });
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Overlay
        className={`dialog-overlay ${tw(
          'h-screen w-screen bg-black bg-opacity-25 dark:bg-opacity-50'
        )}`}
      />
      <Dialog.Content
        className={`dialog-content ${tw(
          'text-gray-900 antialiased dark:text-white fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        )}`}
      >
        <div
          className={tw(
            'w-screen max-w-screen-sm rounded-lg h-80 bg-white dark:bg-gray-900 overflow-hidden flex flex-col'
          )}
        >
          <input
            className={tw(
              'px-4 py-3 w-full placeholder-gray-500 focus:placeholder-gray-400 dark:focus:placeholder-gray-600 transition bg-white dark:bg-gray-900 focus:outline-none'
            )}
            onChange={(e) => onSearchChange(e.currentTarget.value)}
            placeholder="Search"
            value={search}
            type="text"
            autoFocus
          />

          <ul
            className={tw(
              'p-2 border-t dark:border-gray-800 flex-1 overflow-y-auto'
            )}
          >
            {[...filteredOptions].map((option) => {
              const Icon = HeroIcons[`${option.icon}Icon`];

              return (
                <li>
                  <a
                    className={tw(
                      'flex items-center space-x-4 justify-between px-2 rounded-md h-12 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800'
                    )}
                    onMouseOver={(e) => {
                      e.currentTarget.focus();
                    }}
                    href="/"
                  >
                    <div className={tw('space-x-3 flex items-center')}>
                      <div
                        className={tw('w-6 flex items-center justify-center')}
                      >
                        <Icon className={tw('w-5 text-gray-500')} />
                      </div>

                      <span className={tw('leading-none')}>{option.label}</span>
                    </div>

                    {option.shortcut && (
                      <div className={tw('flex items-center space-x-1')}>
                        {option.shortcut.map((shortcut) => (
                          <div
                            className={tw(
                              'leading-none p-1 rounded bg-gray-100 dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 text-gray-600 dark:text-gray-400 w-6 h-6 flex items-center justify-center'
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
            })}
          </ul>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CMDK;
