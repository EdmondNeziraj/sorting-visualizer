import React, { Component } from 'react'

export class Bar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { generateArray } = this.props;

        generateArray(50);
        document.getElementById('changeSize').value = 50;
    }

    handleClick(algorithm) {
        const {updateAlgorithm} = this.props;
        updateAlgorithm(algorithm);
    }

    handleChange(e) {
        const {generateArray} = this.props;

        generateArray(Math.floor((parseInt(e.target.value)+3)*1.65));
    }

    render() {
        return (
            <div>Bar</div>
        )
    }
}

export default Bar