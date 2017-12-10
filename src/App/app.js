import React, {Component} from 'react';
import Range from './range.js'
import Output from './output.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 22.5,
      bmiClass: 'Normal',
      height: 170,
      weight: 50
    }
  }

  onChangeHeight(height) {
    this.setState({height: height}, this.setBmi)
  }

  onChangeWeight(weight) {
    this.setState({weight: weight}, this.setBmi)
  }

  setBmi() {
    let bmi = ((this.state.weight/ this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi: bmi, bmiClass: this.setBmiClass(bmi)})
  }

  setBmiClass(bmi) {
    if (bmi < 18.5) return 'UnderWeight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if (bmi >= 25 && bmi <= 29.9) return 'OverWeight';
    if (bmi >= 30) return 'Obese';
  }

  render() {
    return (
      <div>
        <form>
          <div className="range">
            <label>Height: {this.state.height}</label>
            <Range value={this.state.height} onChange={this.onChangeHeight.bind(this)} />
          </div>
          <br />
          <div className="range">
            <label>Weight: {this.state.weight}</label> <br/>
            <Range value={this.state.weight} onChange={this.onChangeWeight.bind(this)} />
          </div>
          <div>
            <Output bmi={this.state.bmi} bmiClass={this.state.bmiClass} />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
