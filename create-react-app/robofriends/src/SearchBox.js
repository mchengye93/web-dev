import React from 'react';

const SearchBox = (props) => {
    return (
        <input type="text" placeholder="name" onChange={props.handleSearch}/>
    )
}
export default SearchBox;