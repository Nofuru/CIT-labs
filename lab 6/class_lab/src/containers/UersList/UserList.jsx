import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import Button from "../../components/Button/Button";
import Preloader from "../../components/Preloader/Preloader";
import styles from "./UserList.module.css";

class UserList extends React.Component {
	render() {
		return (
			<div>
				{this.props.users.length === 0 && (
					<>
						<h1 style={{ textAlign: "center" }}>There are no users</h1>
						<Button onClick={() => this.props.getUsers()} />
					</>
				)}

				<div className={styles.cards}>
					{this.props.initialLoading ? (
						<Preloader />
					) : (
						this.props.users.map((user, index) => {
							return (
								<UserCard
									key={index}
									name={user.name}
									img={user.picture.medium}
									gender={user.gender}
									dob={user.dob}
									location={user.location}
									email={user.email}
									phone={user.phone}
								/>
							);
						})
					)}
				</div>
			</div>
		);
	}
}

export default UserList;
