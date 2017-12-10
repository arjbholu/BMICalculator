import React, {PropTypes, Component} from 'react'

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  onChange(event) {
    this.setState({value: event.target.value}, () => {})
    this.props.onChange(this.state.value)
  }

  render() {
    return (
      <div>
        <input
        type="range"
        min={this.props.min}
        max={this.props.max}
        value={this.state.value}
        step={this.props.step}
        onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}

Range.defaultProps = {
  min: 0,
  max: 245,
  step: 1
};

export default Range
