
import React, { useState } from 'react';

function Search(props) {
    const { onFilter }  = props
    const [key, setKey] = useState('')

    function handleValueChange(e) {
        setKey(e.target.value)
    }

    function onClick() {
        onFilter(key)
        setKey('')
    } 

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Nhập từ khóa..." value = {key} onChange = {handleValueChange} />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick ={onClick}>
                <span className="fa fa-search mr-5" ></span>Tìm
            </button>
            </span>
        </div>
    )
}

export default Search;