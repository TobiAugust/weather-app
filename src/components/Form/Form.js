export default function Form({ onAddActivity }) {
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
    onAddActivity(dataClean);
  }
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
