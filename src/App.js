import "./App.css";
import { useState } from "react";

function formData(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const data = Object.fromEntries(form);
  const formElements = event.target.elements;
  const dataClean = {
    name: data.name,
    isForGoodWeather: formElements.goodWeather.checked,
  };
  event.target.reset();
  formElements.name.focus();
}

function Form({ onAddActivity }) {
  return (
    <form onSubmit={formData}>
      <h2>Add New Activity:</h2>
      <label>Name:</label>
      <input name="name"></input>
      <br />
      <label>Good-Weather Activity:</label>
      <input name="goodWeather" type="checkbox"></input>
      <br />
      <button className="button">Submit</button>
    </form>
  );
}

function handleAddActivity(activities) {}

export default App;

function App() {
  const [activities, setActivities] = useState();
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Weather App</h1>
      <Form onAddActivity="" />
    </div>
  );
}
