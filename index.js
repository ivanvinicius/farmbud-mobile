/**
 * @format
 */

 import 'intl';
 import 'intl/locale-data/jsonp/pt-BR';
 import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import {App}from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
