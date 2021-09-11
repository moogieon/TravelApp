/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
// import App from './App';
import BoardWritePage from './src/screen/units/BoardWritePage/BoardWritePage.container';

AppRegistry.registerComponent(appName, () => BoardWritePage);
// AppRegistry.registerComponent(appName, () => App);
