import { uid } from "uid";
export function Form({ onAddActivity, activities }) {
  return (
    <>
      <h1>Add new activity</h1>
      <form>
        <label htmlFor="activity">Name: </label>
        <input autoFocus type="text" id="activity"></input>
        <label htmlFor="checkbox">Good weather activity</label>
        <input type="checkbox" id="checkbox"></input>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            const data = {
              name: event.target.form.activity.value,
              isForGoodWeather: event.target.form.checkbox.checked,
              id: uid(),
            };
            event.target.form.reset();
            event.target.form.activity.focus();
            onAddActivity(data);
            console.log(activities);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
