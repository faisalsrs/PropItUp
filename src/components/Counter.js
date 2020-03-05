import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      clickCount: 0
    };
  }
  handleClick = () => {
    console.log(this);

    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.btnText}
        {this.state.clickCount}
      </button>
    );
  }
}
export default Counter;
