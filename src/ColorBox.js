import React, { Component } from 'react';
import './ColorBox.css';
import { getRandomColorsArr, choice } from './helpers';

class ColorBox extends Component {
    static defaultProps = {
        colors: getRandomColorsArr()
    };

    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.colors)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor() {
        let newColor = choice(this.props.colors);
        this.setState(st => {
            while (newColor === st.color) {
                newColor = choice(this.props.colors);
            }
            return ({
                color: newColor
            });
        });
    }

    handleClick(e) {
        this.changeColor();
    }

    render() {
        return (
            <div className="ColorBox" onClick={this.handleClick} style={{backgroundColor:this.state.color}}>
            </div>
        );
    }
}

export default ColorBox;