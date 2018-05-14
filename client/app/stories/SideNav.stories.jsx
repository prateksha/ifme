import React from 'react';
import { withInfoSide } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import {
  SideNavBar
} from 'bundles/shared/components/SideNav';
import I18nWrapper from './I18nWrapper';

storiesOf('SideNavigation', module)
  .add('SideNav', withInfo()(() => (
    <SideNav/>
  )));
