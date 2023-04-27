import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";

export default App;

function App() {
  const [activities, setActivities] = useState();

  function handleAddActivity(activitiesObject) {
    const uid = uid();
    const activity = { key: uid, ...activities };
    setActivities(activity, ...activities);
    console.log(activities);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Weather App</h1>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
