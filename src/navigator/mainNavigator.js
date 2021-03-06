import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen16163331Navigator from '../features/BlankScreen16163331/navigator';
import BlankScreen0115537Navigator from '../features/BlankScreen0115537/navigator';
import ArticleList115520Navigator from '../features/ArticleList115520/navigator';
import ArticleList115519Navigator from '../features/ArticleList115519/navigator';
import ArticleList115518Navigator from '../features/ArticleList115518/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen16163331: { screen: BlankScreen16163331Navigator },
BlankScreen0115537: { screen: BlankScreen0115537Navigator },
ArticleList115520: { screen: ArticleList115520Navigator },
ArticleList115519: { screen: ArticleList115519Navigator },
ArticleList115518: { screen: ArticleList115518Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
