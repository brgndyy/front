import classes from "./UserItem.module.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

export default function UserItem(props) {
  return (
    <li className={classes.users_list}>
      <div>
        <Card className={classes.user_item_content}>
          <Link to={`/${props.id}/places`}>
            <div className={classes.user_item_image}>
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className={classes.user_item_info}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
}
