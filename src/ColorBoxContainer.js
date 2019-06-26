import React, { Component } from 'react';
import { getRandomColorsArr } from "./helpers";
import ColorBox from "./ColorBox";
import './ColorBoxContainer.css';

class ColorBoxContainer extends Component {
    static defaultProps = {
        colors: getRandomColorsArr(20),
        boxNumber: 18
    };

    render() {
        const boxes = Array.from({length: this.props.boxNumber}).map(
            () => <ColorBox colors={this.props.colors}/>
        )
        return (
            <div className='ColorBoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default ColorBoxContainer;