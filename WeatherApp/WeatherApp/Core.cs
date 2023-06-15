using System;
using System.Threading.Tasks;
using Microsoft.CSharp.RuntimeBinder;
using System.Collections.Generic;
using System.Text;

namespace WeatherApp
{
    public class Core
    {
        public static async Task<Weather>GetWeather(string zipCode)
        {
            string key = "082b4b5ddaaca63d22d7bc9364a56ab3";
            string queryString = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=" + key + "&units=imperial";

            dynamic results = await DataService.getDataFromService(queryString).ConfigureAwait(false);

            if (results["weather"] != null)
            {
                Weather weather = new Weather();
                weather.Title = (string)results["name"];
                weather.Tempareture = (string)results["main"]["temp"] + " F";
                weather.Wind = (string)results["wind"]["speed"] + " mph";
                weather.Humidity = (string)results["main"]["humidity"] + " %";
                weather.Visibility = (string)results["weather"][0]["main"];

                DateTime time = new System.DateTime(1970, 1, 1, 0, 0, 0, 0);
                DateTime sunrise = time.AddSeconds((double)results["sys"]["sunrise"]);
                DateTime sunset = time.AddSeconds((double)results["sys"]["sunset"]);
                weather.Sunrise = sunrise.ToString() + " UTC";
                weather.Sunset = sunset.ToString() + " UTC";

                return weather;
            }
            else
            {
                return null;
            }
        }
    }
}
