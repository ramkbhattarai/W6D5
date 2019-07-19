import React  from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    this.tick = this.tick.bind(this);
  }

  tick(){
    const newDate = new Date();
    this.setState({date: newDate})
  }

  componentDidMount(){
    this.clockId = setInterval(()=> {
      this.tick()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockId);
    this.clockId = 0;
  }

  render(){
    let timer = this.state.date;
    let hours = timer.getHours();
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();
    let date = timer.toDateString();
    // let year = timer.getFullYear();
    // let month = timer.getMonth();
    // let day = timer.getDate();
    // let weekday = timer.getDay();
    return(
      <>
      <h1 className="clock">Clock</h1>
      <ul className="clock-ul">
          <li>Time: {hours}:{minutes}:{seconds} EST</li>
          <li>Date: {date}</li>
      </ul>
      
      </>
    )
  }
}

export default Clock;