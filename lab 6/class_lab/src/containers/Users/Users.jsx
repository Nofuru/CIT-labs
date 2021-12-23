import { connect } from "react-redux";
import { getUsersData } from "../../store/reducers/users";
import UserList from "../UersList/UserList";

const mapStateToProps = state => {
	return {
		initialLoading: state.users.initialLoading,
		users: state.users.usersData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getUsers: () => {
			dispatch(getUsersData());
		},
	};
};

const Users = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default Users;
