import React from 'react';
import Dice from './Dice'

class RollingDie extends React.Component {

    constructor() {
        super()
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false
        }
        this.numbers = ["one", "two", "three", "four", "five", "six"]
        this.onClick = this.onClick.bind(this);

    }

    onClick(e) {
        const die1 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        const die2 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        this.setState({
            die1,
            die2,
            rolling: true
        })


        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 1000);
    }


    render() {
        return (
            <div className="text-center">


                <Dice num={this.state.die1} rolling={this.state.rolling} />
                <Dice num={this.state.die2} rolling={this.state.rolling} />
                <div>
                    <button className="btn-danger btn" onClick={this.onClick} disabled={this.state.rolling}>Let's Roll </button>
                </div>
            </ div>
        )
    }
}
export default RollingDie