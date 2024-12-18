class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  // change code below this line

  increment() {
    this.setState({
      this.state.count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      this.state.count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      this.state.count: 0
    });
  };

  // change code above this line
  render() {
    return (

   <div>
   <button className='inc' onClick={this.increment}>Increment!</button>
    <button className='dec' onClick={this.decrement}>Decrement!</button>
    <button className='reset' onClick={this.reset}>Reset</button>
    <h1>Current Count: {this.state.count}</h1>
  </div>
    );
  }
};
