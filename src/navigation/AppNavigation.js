import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BookmarkedScreen } from '../screens/BookmarkedScreen';

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Create: CreateScreen,
  About: AboutScreen,
  Bookmarked: BookmarkedScreen,
  Post: {
    screen: PostScreen
  }
},
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {//need to be fixed in react-navigation v6
      // headerStyle: {
      //   backgroundColor: COLORS['dark'].navbarBgColor,
      // },
      // headerTintColor: COLORS['dark'].accentColor,
    }
  }
)

export const AppNavigation = createAppContainer(PostNavigator);
