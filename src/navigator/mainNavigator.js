import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen112778Navigator from '../features/CopyOfBlankScreen112778/navigator';
import BlankScreen112777Navigator from '../features/BlankScreen112777/navigator';
import CopyOfBlankScreen012776Navigator from '../features/CopyOfBlankScreen012776/navigator';
import CopyOfBlankScreen112732Navigator from '../features/CopyOfBlankScreen112732/navigator';
import CopyOfBlankScreen012731Navigator from '../features/CopyOfBlankScreen012731/navigator';
import BlankScreen112730Navigator from '../features/BlankScreen112730/navigator';
import BlankScreen012715Navigator from '../features/BlankScreen012715/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen112778: { screen: CopyOfBlankScreen112778Navigator },
BlankScreen112777: { screen: BlankScreen112777Navigator },
CopyOfBlankScreen012776: { screen: CopyOfBlankScreen012776Navigator },
CopyOfBlankScreen112732: { screen: CopyOfBlankScreen112732Navigator },
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
