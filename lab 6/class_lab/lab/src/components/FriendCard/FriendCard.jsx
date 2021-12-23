import React from "react";
import { useDispatch } from "react-redux";
import { removeFriends } from "../../store/reducers/bestFriends";
import { getGender } from "../../Utils/getGender";
import { parseDate } from "../../Utils/parseDate";
import Avatar from "../Avatar/Avatar";
import styles from "./FriendCard.module.css";

const FriendCard = ({
  img,
  user,
  name,
  gender,
  dob,
  location,
  email,
  phone,
}) => {
  const dispatch = useDispatch();

  const removeFriend = () => {
    dispatch(removeFriends(user));
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <Avatar image={img} />
        <h3 className={styles.headTitle}>
          {name.title} {name.first} {name.last}
        </h3>
        <button onClick={() => removeFriend(user)}>Remove friend</button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Пол: {getGender[gender]}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>
            Адрес: {location.country} {location.state} {location.city}{" "}
            {location.street.name}, <span>{location.street.number}</span>
          </p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Дата рождения: {parseDate(dob.date)}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Email: {email}</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Возраст: {dob.age} лет</p>
        </div>
        <div className={styles.bodyItem}>
          <p className={styles.text}>Телефон: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
