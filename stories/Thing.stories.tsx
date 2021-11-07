import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing, Props } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Thing,
};

export default meta;

const Template: Story<Props> = args => <Thing {...args} />;

export const Default = Template.bind({});

Default.args = {};
