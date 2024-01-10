import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Components/Form.js";
import useState from "react";

function App() {
  const [activities, setActivities] = useState([]);
  return <Form onAddActivity={setActivities} activities={activities} />;
}

export default App;
