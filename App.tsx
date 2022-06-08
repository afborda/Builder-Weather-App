import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import * as Location from "expo-location";
import Home from "./src/screen/Home";

export default function App() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home data={location} />
    </ThemeProvider>
  );
}
