import React from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
	render() {
		const { onClick } = this.props;

		return (
			<button onClick={onClick} className={styles.btn}>
				Get Users Data
			</button>
		);
	}
}

export default Button;
