import { api } from "../baseURL";

export const WeatherData = async (lat: any, long: any) => {
  try {
    const response = await api.get(
      `weather?lat=${lat}&lon=${long}&lang=pt_br&appid=838c97e7eb8729ad48034aa16975f448&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
