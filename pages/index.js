import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const currentWeatherURL =
      "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1&models=icon_seamless";

    async function fetchData() {
      try {
        const response = await axios.get(currentWeatherURL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return data ? (
    <div className="flex justify-center">
      <p>{`Aktuell ist es ${data.current.temperature_2m} ${data.current_units.temperature_2m} in ${data.timezone}.`}</p>
    </div>
  ) : (
    <p>Keine Daten verfügbar. Überprüfe die Konsole.</p>
  );
}
