import React from "react";
import loading from "../../assets/loading-48.gif";

const Preloader = ({ style }) => {
	return <img src={loading} alt="" style={style} />;
};

export default Preloader;
