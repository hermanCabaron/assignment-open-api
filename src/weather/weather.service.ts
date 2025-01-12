import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private apiKey = '77459d815b3b323859035b2ff333c330'; // Replace with your actual API key
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  async getWeather(city: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric', // Optional: Get the temperature in Celsius
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
}
