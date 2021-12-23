import React from "react";
import loading from "../../assets/loading-48.gif";

class Preloader extends React.Component {
  render() {
    return <img src={loading} alt='' />
  }
}

export default Preloader;
