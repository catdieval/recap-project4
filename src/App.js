import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form.js";
import { List } from "./Components/List.js";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();
      setWeather(weather.isGoodWeather);
    }
    fetchWeather();
  }, []);

  const isGoodWeather = weather;
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    const allActivities = [...activities];
    allActivities.push(newActivity);
    setActivities(allActivities);
    console.log(activities);
  }

  function filterActivity(activities) {
    const copy = [...activities];
    const filteredActivities = copy.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
    return filteredActivities;
  }

  return (
    <>
      <List
        activities={filterActivity(activities)}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
      <p>{isGoodWeather ? "true" : "false"}</p>
    </>
  );
}

export default App;
