import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      message: "",
      alert: ""
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  submit = () => {
    const { inputValue, message, alert } = this.state;
    console.log(inputValue);
    if (inputValue) {
      this.setState({
        inputValue: "",
        message: inputValue
      });
    } else {
      this.setState({ alert: "Please Enter a Value to Pass" });
      setTimeout(() => {
        this.setState({ alert: "" });
      }, 1000);
    }
  };

  render() {
    const { inputValue, message, alert } = this.state;

    return (
      <div className="container">
        <h2>A message you'd like to pass</h2>
        <input value={inputValue} onChange={this.handleChange} />
        <button onClick={this.submit}>Submit</button>
        <p className={alert ? "alert" : null}>{alert}</p>
        <h3>Last message delivered:</h3>
        <p className="msg">{message ? message : "HELLO WORLD"}</p>
      </div>
    );
  }
}

export default App;
