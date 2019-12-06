class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Hello, world!"),
      React.createElement("h2", null, "It is ", this.state.date.toLocaleTimeString(), ".")));


  }}


ReactDOM.render(
React.createElement(Clock, null),
document.getElementById('root'));