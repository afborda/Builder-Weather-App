import { useEffect, useState } from "react";
import { Container, ContainerButton } from "./styled";
import { WeatherData } from "../../services/GetData";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { ScrollView } from "react-native";

const Home = ({ data }: any) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false) 

  const GetDataWeather = async (lat: number, long: number ) => {
    setLoading(true);
    const response = await WeatherData(lat, long);
    setWeather(response);
    setLoading(false)
  };

  useEffect(() => {
    if(data?.coords?.latitude !== undefined){
    GetDataWeather(data.coords.latitude, data.coords.longitude);

    }
  }, [data]);

  return (
    <>
    {weather ?
    <Container>
      <ScrollView>
      <Header date={data.timestamp} dataHeader={weather} />
      <Main data={weather}  />
      <ContainerButton>
        <Button Loading={loading} onPress={() => GetDataWeather(data.coords.latitude, data.coords.longitude) } />
      </ContainerButton>
      </ScrollView>
    </Container> 
    : 
    <Loading /> }
   </>
    
  );
};

export default Home;
