import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="container">
          <h1>{location.state.title}</h1>
          <img src={location.state.thumbnail} alt={location.state.title}></img>
          <span>{location.state.contents}</span>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
