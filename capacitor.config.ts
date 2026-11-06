import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moviebox.stream.app',
  appName: 'Movie Box',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
