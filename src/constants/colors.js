import { Platform } from 'react-native';

export const COLORS = {
  light: {
    theme: 'light',
    statusBarStyle: 'dark',
    WHITE: '#ffffff',
    textBgOverImg: 'rgba(0, 0, 0, 0.5)',
    //   TRANSPARENT: 'transparent',
    textColor: '#000000',
    appBg: '#eeeeee',
    accentColor: '#c678dd',
    dangerColor: '#e06252',
    navbarBgColor: Platform.OS === 'ios' ? '#ffffff' : '#cccccc',
    appBgColor: '#eeeeee',
    //     navbarBgColor: '#cccccc',
    //     placeholderTextColor: '#888888',
    //     textColor: '#101010',
    //     todoBorderColor: '#a4a3a5',
    //     shadowColor: '#101010',

    //     buttons: {
    //       accent: {
    //         text: '#ffffff',
    //         bg: '#c678dd',
    //       },
    //       neutral: {
    //         text: '#ffffff',
    //         bg: '#838183',
    //       },
    //       negative: '#e06252',
    //       positive: '#98c379',
    //       edit: '#c5c53e',
    //       default: '#838183',
    //     }
  },
  dark: {
    theme: 'dark',
    statusBarStyle: 'light',
    WHITE: '#ffffff',
    textBgOverImg: 'rgba(0, 0, 0, 0.5)',
    //   TRANSPARENT: 'transparent',
    textColor: '#FFFFFF',
    appBg: '#282c35',
    accentColor: '#c678dd',
    dangerColor: '#e06252',
    navbarBgColor: Platform.OS === 'ios' ? '#000000' : '#21252b',
    appBgColor: '#282c34',
    //     navbarBgColor: '#21252b',
    //     placeholderTextColor: '#838183',
    //     textColor: '#cecdce',
    //     todoBorderColor: '#a4a3a5',
    //     shadowColor: '#ffffff',

    //     buttons: {
    //       accent: {
    //         text: '#ffffff',
    //         bg: '#c678dd',
    //       },
    //       neutral: {
    //         text: '#ffffff',
    //         bg: '#838183',
    //       },
    //       negative: '#e06252',
    //       positive: '#98c379',
    //       edit: '#c5c53e',
    //       default: '#838183',
    //     }
  }
}


// export default {
//   dark: {
//     appBgColor: '#282c34',
//     navbarBgColor: '#21252b',
//     placeholderTextColor: '#838183',
//     textColor: '#cecdce',
//     todoBorderColor: '#a4a3a5',
//     shadowColor: '#ffffff',

//     buttons: {
//       accent: {
//         text: '#ffffff',
//         bg: '#c678dd',
//       },
//       neutral: {
//         text: '#ffffff',
//         bg: '#838183',
//       },
//       negative: '#e06252',
//       positive: '#98c379',
//       edit: '#c5c53e',
//       default: '#838183',
//     }
//   },
//   light: {
//     appBgColor: '#eeeeee',
//     navbarBgColor: '#cccccc',
//     placeholderTextColor: '#888888',
//     textColor: '#101010',
//     todoBorderColor: '#a4a3a5',
//     shadowColor: '#101010',

//     buttons: {
//       accent: {
//         text: '#ffffff',
//         bg: '#c678dd',
//       },
//       neutral: {
//         text: '#ffffff',
//         bg: '#838183',
//       },
//       negative: '#e06252',
//       positive: '#98c379',
//       edit: '#c5c53e',
//       default: '#838183',
//     }
//   },

//   accentColor: '#c678dd',
//   dangerColor: '#e06252',
//   WHITE: '#ffffff',
//   TRANSPARENT: 'transparent',
// };
