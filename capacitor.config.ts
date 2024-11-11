import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapp',
  appName: 'MyApp',
  webDir: 'dist/my-app', // Ensure this matches the output directory of your Angular build
  bundledWebRuntime: false,
};

export default config;
