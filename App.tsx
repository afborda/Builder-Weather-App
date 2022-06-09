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
import { Text } from "react-native";

export default function App() {
  const [locationData, setLocation] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState<any>(null);

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  const GetLocalization = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log(location);

    setLocation(location);
    console.log("locationData>>", location);
  };

  useEffect(() => {
    GetLocalization();
  }, []);

  if (!fontsLoaded && locationData !== {}) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {locationData !== {}
        ? <Home data={locationData} />
        : <Text>Aguarde</Text>}
    </ThemeProvider>
  );
}
