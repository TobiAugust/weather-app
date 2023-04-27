import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";

export default App;

function List({ listItems }) {
  return (
    <ul>
      {listItems.map((item) => {
        return <li key={item.key}>{item.name}</li>;
      })}
    </ul>
  );
}

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activitiesObject) {
    const id = uid();
    const activity = { key: id, ...activitiesObject };
    setActivities([activity, ...activities]);
    console.log(activities);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Weather App</h1>
      <List listItems={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
