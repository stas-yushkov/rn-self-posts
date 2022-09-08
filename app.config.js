export default {
  'expo': {
    'name': 'rn-self-posts',
    'slug': 'rn-self-posts',
    'version': '1.0.0',
    'orientation': 'portrait',
    'icon': './assets/images/icon.png',
    'userInterfaceStyle': 'light',
    'splash': {
      'image': './assets/images/splash.png',
      'resizeMode': 'contain',
      'backgroundColor': '#282c35'
    },
    'updates': {
      'fallbackToCacheTimeout': 0
    },
    'assetBundlePatterns': ['**/*'],
    'ios': {
      'supportsTablet': true
    },
    'android': {
      'adaptiveIcon': {
        'foregroundImage': './assets/images/adaptive-icon.png',
        'backgroundColor': '#FFFFFF'
      }
    },
    'web': {
      'favicon': './assets/images/favicon.png'
    }
  }
}
