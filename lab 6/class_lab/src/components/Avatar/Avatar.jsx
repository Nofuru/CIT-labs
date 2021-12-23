import React from "react";
import styles from "./Avatar.module.css";

class Avatar extends React.Component {
	render() {
		const { image } = this.props;
		return <img src={image} alt="" className={styles.avatar} />;
	}
}

export default Avatar;
