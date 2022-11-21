import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function Main() {
  return (
    <PaperProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);