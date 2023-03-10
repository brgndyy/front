import classes from "./UserList.module.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

export default function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className={classes.center}>
        <Card>
          <h2>No users Found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes.users_list}>
      {props.items &&
        props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          );
        })}
    </ul>
  );
}
