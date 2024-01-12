import "./App.css";
import { Form } from "./Components/Form.js";
import { List } from "./Components/List.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const isGoodWeather = true;
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

  const filteredActivities = filterActivity(activities);

  return (
    <>
      <List activities={filteredActivities} />
      <Form
        onAddActivity={handleAddActivity}
        filteredActivities={filteredActivities}
      />
      <p>{isGoodWeather ? "true" : "false"}</p>
    </>
  );
}

export default App;
