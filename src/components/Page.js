import React, { Component } from 'react';

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }

    render() {
        const { year, photos } = this.props;
        return (
            <div>
                <p>
                    <button onClick={() => this.props.setYear(2016)}>2016</button>
                    <button onClick={() => this.props.setYear(2015)}>2015</button>
                    <button onClick={() => this.props.setYear(2014)}>2014</button>
                </p>
                <h3>{year} год</h3>
                <p>У тебя {photos.length} фото.</p>
            </div>
        )
    }
}

