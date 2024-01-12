import "./App.css";
import { Form } from "./Components/Form.js";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const allActivities = [...activities];
    allActivities.push(newActivity);
    setActivities(allActivities);
  }

  return <Form onAddActivity={handleAddActivity} activities={activities} />;
}

export default App;
