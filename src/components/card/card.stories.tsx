import React from 'react';
import { storybookMeta } from '../components.config';
import { Card } from './card';
import { CardProps, CardSize } from './card.types';

export default {
  title: `${storybookMeta.type}/Card`,
  component: Card,
  argTypes: {
    size: {
      options: [CardSize.S, CardSize.XL],
      control: { type: 'select' },
    },
    hasRoundBorders: {
      control: { type: 'boolean' },
    },
    hasTopRoundBorders: {
      control: { type: 'boolean' },
    },
  },
};

const withSingleCard = (args: CardProps) => {
  return (
    <Card size={args.size} hasRoundBorders={args.hasRoundBorders} hasTopRoundBorders={args.hasTopRoundBorders}>
      <div>
        Sed at eleifend erat. Ut mattis malesuada tristique. Aliquam eget ultricies ipsum. Quisque rutrum orci non risus
        dignissim, a semper tortor ultricies. Nam commodo lacus mi, molestie malesuada mi scelerisque eu. Aenean et
        pellentesque lectus, in iaculis sem. In ac efficitur lectus. Quisque consectetur est libero, eu sagittis magna
        vestibulum a. Etiam consectetur lobortis ipsum et bibendum. Maecenas id purus quam.
      </div>
    </Card>
  );
};

export const WithSingleCard: { (args: CardProps): JSX.Element; args?: CardProps } = withSingleCard.bind({});
WithSingleCard.args = {
  size: CardSize.XL,
  hasRoundBorders: false,
  hasTopRoundBorders: false,
};
