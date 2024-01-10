export function Form() {
  return (
    <>
      <h1>Add new activity</h1>
      <form>
        <label for="activity">Name: </label>
        <input type="text" id="activity"></input>
        <label for="checkbox">Good weather activity</label>
        <input type="checkbox" id="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
