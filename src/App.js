import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form.js";
import { List } from "./Components/List.js";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [emoji, setEmoji] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = weather;

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();
      setWeather(weather.isGoodWeather);
      setEmoji(weather.condition);
      setTemperature(weather.temperature);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    const allActivities = [...activities];
    allActivities.push(newActivity);
    setActivities(allActivities);
  }

  function filterActivity(activities) {
    const copy = [...activities];
    const filteredActivities = copy.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
    return filteredActivities;
  }

  function handleDeleteActivity(id) {
    console.log(id);
    let allActivities = [...activities];
    allActivities = allActivities.filter((a) => a.id !== id);

    setActivities(allActivities);
  }

  return (
    <>
      <h1>
        {emoji} {temperature} °C
      </h1>
      <List
        activities={filterActivity(activities)}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
      <p>{isGoodWeather ? "true" : "false"}</p>
    </>
  );
}

export default App;
