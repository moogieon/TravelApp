/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
// import App from './App';

// AppRegistry.registerComponent(appName, () => App);
import AreaPage from './src/screen/units/AreaPage/AreaPage.container';

AppRegistry.registerComponent(appName, () => AreaPage);
