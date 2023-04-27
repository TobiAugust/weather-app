import "./App.css";
import { uid } from "uid";
import Form from "./components/Form/Form";
import useLocalStorageState from "use-local-storage-state";

export default App;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.key !== id));
  }
  function handleAddActivity(activitiesObject) {
    const id = uid();
    const activity = { key: id, ...activitiesObject };
    setActivities([activity, ...activities]);
    console.log(activities);
  }
  function List({ listItems, onDeleteActivity }) {
    return (
      <ul>
        {listItems.map((item) => {
          return (
            <li key={item.key}>
              {item.name}
              <button type="button" onClick={() => onDeleteActivity(item.key)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Weather App</h1>
      <List listItems={activities} onDeleteActivity={handleDeleteActivity} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
