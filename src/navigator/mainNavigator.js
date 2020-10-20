import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen012731Navigator from '../features/CopyOfBlankScreen012731/navigator';
import BlankScreen112730Navigator from '../features/BlankScreen112730/navigator';
import BlankScreen012715Navigator from '../features/BlankScreen012715/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen012731: { screen: CopyOfBlankScreen012731Navigator },
BlankScreen112730: { screen: BlankScreen112730Navigator },
BlankScreen012715: { screen: BlankScreen012715Navigator },

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
