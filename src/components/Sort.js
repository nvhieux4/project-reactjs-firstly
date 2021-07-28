import React from 'react';

function Sort(props) {
    const { onSort } = props
    function handClick(e) {
        console.log(e.target.value)
        onSort(e.target.value)
    }
    return (
        <select className="form-select" aria-label="Default select example" onClick = {handClick}>
            <option value ='0'>Sắp xếp</option>
            <option value='1'>Từ A-Z</option>
            <option value='-1' >Từ Z-A</option>
        </select>
    )
}

export default Sort;