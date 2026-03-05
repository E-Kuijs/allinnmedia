// app.config.js
import "dotenv/config";

export default ({ config }) => ({
  ...config,

  name: "Ajax All-In",
  slug: "nieuws-app-ajax",
  scheme: "ajaxnieuws",
  version: "1.0.0",
  platforms: ["android", "ios"],
  jsEngine: "hermes",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",

  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },

  android: {
    package: "com.edwin.ajaxnieuws",
    permissions: ["INTERNET"],
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },

  plugins: [
    "expo-router",
    "expo-asset",
    "expo-font",
    "expo-secure-store",
  ],

  extra: {
    router: {},
    eas: {
    },

    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    EXPO_PUBLIC_SUPABASE_FUNCTION_URL: process.env.EXPO_PUBLIC_SUPABASE_FUNCTION_URL,
  },

  owner: "edwin3771",
});
