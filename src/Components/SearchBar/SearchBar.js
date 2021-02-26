import React from 'react'
import '../Container.css'

export const SearchBar = ({ onChangeText, value }) => {
    return (
        <div className="search-box search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChangeText(e.target.value)} />
        </div>
    )
}