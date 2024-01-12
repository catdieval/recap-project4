import "./App.css";
import { Form } from "./Components/Form.js";
import { List } from "./Components/List.js";
// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    const allActivities = [...activities];
    allActivities.push(newActivity);
    setActivities(allActivities);
    console.log(activities);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} activities={activities} />
    </>
  );
}

export default App;
