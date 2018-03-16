import React, { Component } from 'react';

export default class Page extends Component {
    static defaultProps = {
        years: [2104, 2015, 2016]
    };

    render() {
        const { activeYear, photos, years } = this.props;

        return (
            <div>
                <p>
                    {years.map(year => (
                        <button key={year} onClick={() => this.props.setYear(year)}>
                            {year}
                        </button>
                    ))}
                </p>
                <h3>{activeYear} год</h3>
                <p>У тебя {photos.length} фото.</p>
            </div>
        )
    }
}

