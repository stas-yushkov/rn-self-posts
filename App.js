import React, { useState, useEffect, useCallback } from 'react';
import { Appearance } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { bootstrap } from './src/bootstrap';
import { MainLayout } from './src/MainLayout';

import { ThemeContext } from './src/context/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const themeListener = Appearance.addChangeListener(() => setTheme(Appearance.getColorScheme()));

  useEffect(() => {
    setTheme(Appearance.getColorScheme());
    return () => themeListener.remove();
  }, [])


  useEffect(() => {
    async function prepare() {
      try {
        await bootstrap();
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainLayout onLayoutRootView={onLayoutRootView} />
    </ThemeContext.Provider>
  );
}
