import { useEffect, useState } from "react";

import { Container } from "./styled";
import { ILocation } from "./types";
import { WeatherData } from "../../services/GetData";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Text } from "react-native";
import Loading from "../../components/Loading";

const Home = ({ data }: any) => {
  const [weather, setWeather] = useState<any>(null);

  const GetDataWeather = async (lat: number, long: number ) => {
    const response = await WeatherData(lat, long);

    setWeather(response);
  };

  useEffect(() => {
    GetDataWeather(data.coords.latitude, data.coords.longitude);
  }, []);

  return (
    <>
    {weather ?
    <Container>
      <Header date={data.timestamp} dataHeader={weather} />
      <Main data={weather}  />
    </Container> 
    : 
    <Loading /> }
    </>
    
  );
};

export default Home;
