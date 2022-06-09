import { useEffect, useState } from "react";

import { Container } from "./styled";
import { ILocation } from "./types";
import { WeatherData } from "../../services/GetData";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Text } from "react-native";

const Home = ({ data }: any) => {
  const [weather, setWeather] = useState<any>(null);

  const GetDataWeather = async (lat: string, long: string) => {
    const response = await WeatherData(lat, long);

    setWeather(response);
  };

  useEffect(() => {
    GetDataWeather("-30.033056", "-51.230000");
    console.log("locationData", data);
  }, []);

  return (
    <>
    {weather ?
    <Container>
      <Header date={data.timestamp} dataHeader={weather} />
      <Main data={weather}  />
    </Container> 
    : 
    <Text>Aguarde</Text> }
    </>
    
  );
};

export default Home;
