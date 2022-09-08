const theme = 'dark';

export const colors = (
  theme === 'light'
    ? {
      theme: 'light',
      textColor: '#000000',
      appBg: '#FFFFFF',
    }
    : {
      theme: 'dark',
      textColor: '#FFFFFF',
      appBg: '#282c35',
    }
)