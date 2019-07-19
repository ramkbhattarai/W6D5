import React from "react";

class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = { index: 0}
   
  }

  handleInput(idx) {
    this.setState({index: idx})
  }

  render(){

    const tabsArrayHere = this.props.tabsArray.map((tab, idx) =>{
      return (
          <>
           <h1 onClick={this.handleInput.bind(this, idx)}>{tab.title}</h1>
          </>
        )
    })

    // let selectedTab = this.props.tabsArrayHere[this.state.index]
    return (
      <ul>
        <header>
          {tabsArrayHere}
        </header>

        {/* <article>{selectedTab.content}</article> */}
      </ul>
    )

  }
}












export default Tabs;