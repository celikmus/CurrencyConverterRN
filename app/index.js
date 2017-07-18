import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',
  $white: '#ffffff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434'

  // outline: 1
});
export default () =>
  <AlertProvider>
    <Navigator />
  </AlertProvider>;
