import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';

import { COLORS } from '../constants/colors';

// CreateScreen
// AboutScreen
// BookmarkedScreen

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen
  }
},
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS['dark'].navbarBgColor,
      },
      headerTintColor: COLORS['dark'].accentColor,
    }
  }
)

export const AppNavigation = createAppContainer(PostNavigator);
