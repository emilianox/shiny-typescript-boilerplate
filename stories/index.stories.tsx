// tslint:disable no-implicit-dependencies
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Hello } from '../src/components/Hello';
import { Preview } from '../src/components/Preview';

import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations'


const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);



stories.add(
  'Hello Component',
  () => <Hello name={text('Text', 'Hello!')} />,
);

stories.add(
  'Hello Component Conbinations', withPropsCombinations(
    Hello,
    {
      name: ['Hello!', 'Bye!'],
    },
  ),
);

stories.add(
  'Preview',
  () => {
    const dataSource = [
      {
        id: 'lili',
        name: 'Lily',
      },
      {
        id: 'lili',
        name: 'Lily',
      },
    ];
    const value = object('dataSource', dataSource);

    return <Preview dataSource={value} onClose={action('On close sidebar')} />;
  },
);
