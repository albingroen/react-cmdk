import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CMDK, { CMDKOption, CMDKProps } from '../src';

const meta: Meta = {
  title: 'CMDK',
  component: CMDK,
};

export default meta;

const Template: Story<CMDKProps> = (args) => {
  const [open, onOpenChange] = useState(true);

  const options: CMDKOption[] = [
    {
      key: 'create-project',
      label: 'Create new project',
      shortcut: ['⇧', '⌘', 'N'],
      type: 'settings',
    },
    {
      key: 'create-account',
      label: 'Create new acount',
      shortcut: ['⇧', '⌘', 'A'],
      type: 'settings',
    },
    {
      key: 'settings',
      label: 'Preferences',
      shortcut: ['⌘', ','],
      type: 'settings',
    },
    {
      key: 'log-out',
      label: 'Log out',
      type: 'settings',
    },
  ];
  return (
    <div>
      <button
        onClick={() => {
          onOpenChange(true);
        }}
      >
        Toggle CMDK
      </button>
      <CMDK onOpenChange={onOpenChange} options={options} open={open} />
    </div>
  );
};

export const Default = Template.bind({});
