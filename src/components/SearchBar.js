import React, { useState } from 'react'

export default function SearchBar(props) {
    const [keyword, setKeyword] = useState("")

    function handleSearch(e) {
        e.preventDefault();      
        props.search(keyword)
    }


    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleSearch}>
                <div className="field">
                    <label htmlFor="image">Search video</label>
                    <input name="image" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search Image" />
                </div>
                <input className="ui button" type="submit" value="Search" />
               
            </form>
        </div>
    )
}
