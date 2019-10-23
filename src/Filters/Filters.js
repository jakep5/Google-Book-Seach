import React, { Component } from 'react'
import "./Filters.css"

export class Filters extends Component {
    render() {
        return (
            <div className = "filterDisplay">
                <label htmlFor="printTypeSelect">Print Type:</label>
                <select id = "printTypeSelect" name="printType">
                    <option value = "all">All</option>
                </select>

                <label htmlFor="bookTypeSelect">Book Type:</label>
                <select id="bookTypeSelect" name="bookType">
                    <option value = "noFilter">No Filter</option>
                </select>
            </div>
        )
    }
}

export default Filters
