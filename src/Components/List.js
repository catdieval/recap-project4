export function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here´s what you can do now:"}
      </h1>
      <ul>
        {activities.map((activity) => (
          <li className="listItem" key={activity.id}>
            {activity.name}{" "}
            <button onClick={() => onDeleteActivity(activity.id)} type="delete">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
