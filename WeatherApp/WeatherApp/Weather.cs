using System;
using System.Collections.Generic;
using System.Text;

namespace WeatherApp
{
    public class Weather
    {
        public string Title { get; set; }
        public string Tempareture { get; set; }
        public string Wind { get; set; }
        public string Humidity { get; set; }
        public string Visibility { get; set; }
        public string Sunrise { get; set; }
        public string Sunset { get; set; }

        public Weather()
        {
            //because labels bind to these values, set them to an empty string to
            //ensure that the label appears on all platforms by default
            this.Title = "";
            this.Tempareture = "";
            this.Wind = "";
            this.Humidity = "";
            this.Visibility = "";
            this.Sunrise = "";
            this.Sunset = "";
        }
    }
}
