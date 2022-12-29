import React from 'react';
import { StorybookMeta } from '../components.config';
import { TextLink } from './text-link';
import { TextLinkProps } from './text-link.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/TextLink`,
  component: TextLink,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' },
    },
  },
};

const withSingleTextLink = (args: TextLinkProps) => {
  return <TextLink label={args.label} href={args.href} target={args.target}></TextLink>;
};

export const WithSingleTextLink: { (args: TextLinkProps): JSX.Element; args?: TextLinkProps } = withSingleTextLink.bind({});
WithSingleTextLink.args = {
  label: 'Link Label',
};
