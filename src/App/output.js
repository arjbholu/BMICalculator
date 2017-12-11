import React, {Component} from 'react'

class Range extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="output">
        <br />
        <h3>{this.props.bmi} </h3>
        <h3>{this.props.bmiClass} </h3>
      </div>
    )
  }
}

export default Range
