import React, { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CogIcon, SearchIcon } from '@heroicons/react/outline';
import { tw, setup } from 'twind';

setup({
  darkMode: 'media',
});

export type CMDKProps = {
  onOpenChange: (value: boolean) => void;
  options: CMDKOption[];
  open: boolean;
};

export type CMDKOptionType = 'settings' | 'search';

export type CMDKOption = {
  shortcut?: string[];
  type?: CMDKOptionType;
  label: string;
  key: string;
};

export const optionTypeToIcon: Record<CMDKOptionType, any> = {
  settings: CogIcon,
  search: SearchIcon,
};

const CMDK: FC<CMDKProps> = ({ onOpenChange, options, open }) => {
  const searchOption: CMDKOption = {
    shortcut: undefined,
    label: 'Search...',
    type: 'search',
    key: 'search',
  };

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Overlay
        className={tw(
          'h-screen w-screen bg-black bg-opacity-25 dark:bg-opacity-50'
        )}
      />
      <Dialog.Content
        className={tw(
          'text-gray-900 antialiased dark:text-white fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        )}
      >
        <div
          className={tw(
            'w-screen max-w-screen-sm rounded-lg bg-white dark:bg-gray-900 overflow-hidden'
          )}
        >
          <input
            className={tw(
              'px-4 py-3 w-full placeholder-gray-500 focus:placeholder-gray-400 dark:focus:placeholder-gray-600 transition bg-white dark:bg-gray-900'
            )}
            placeholder="Search"
            type="text"
            autoFocus
          />

          <ul className={tw('p-2 border-t dark:border-gray-800')}>
            {[...options, searchOption].map((option) => {
              const Icon = optionTypeToIcon[option.type ?? 'search'];

              return (
                <li
                  className={tw(
                    'flex items-center space-x-4 justify-between px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md h-11'
                  )}
                >
                  <div className={tw('space-x-3 flex items-center')}>
                    <Icon className={tw('w-5 text-gray-500')} />

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
