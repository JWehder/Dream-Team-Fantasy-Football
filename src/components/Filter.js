import React from "react";

function Filter({ onCategoryChange }) {

    return (
        <div>
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by position</option>
                <option value="QB">QB</option>
                <option value="RB">RB</option>
                <option value="WR">WR</option>
                <option value="TE">TE</option>
                <option value="K">K</option>
                <option value="DEF">DEF</option>
            </select>
        </div>
    )
}

export default Filter;