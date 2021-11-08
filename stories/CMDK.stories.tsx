import React from 'react';
import CMDK from '../src';
import { CMDKOption, CMDKProps } from '../src/types';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'CMDK',
  component: CMDK,
};

export default meta;

const Template: Story<CMDKProps> = args => {
  const options: CMDKOption[] = [
    {
      key: 'general',
      label: 'General',
      options: [
        {
          key: 'create-project',
          label: 'Create new project',
          shortcut: ['⇧', '⌘', 'N'],
          href: '/new-project',
          icon: 'Plus',
        },
        {
          key: 'account',
          label: 'My account',
          shortcut: ['⇧', '⌘', 'A'],
          href: '/account',
          icon: 'User',
        },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      options: [
        {
          key: 'preferences',
          label: 'Preferences',
          shortcut: ['⌘', ','],
          href: '/settings',
          icon: 'Cog',
        },
        {
          key: 'billing',
          label: 'Billing settings',
          shortcut: ['⇧', '⌘', 'B'],
          href: '/billing',
          icon: 'CreditCard',
        },
      ],
    },
    {
      key: 'other',
      label: 'Other',
      options: [
        {
          key: 'release-notes',
          label: 'Release notes',
          shortcut: ['⇧', '⌘', 'R'],
          href: '/releases',
          icon: 'Collection',
        },
        {
          key: 'contact',
          label: 'Contact',
          shortcut: ['⇧', '⌘', 'C'],
          href: '/contact',
          icon: 'Chat',
        },
      ],
    },
  ];
  return <CMDK options={options} />;
};

export const Default = Template.bind({});
