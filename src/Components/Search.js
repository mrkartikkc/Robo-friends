import React from 'react'

const Search = ({Searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='tc pa3 ba b--green bg-lightest-blue'
            type='Search' 
            placeholder='Search robots'
            onChange={searchChange}    
            />
        </div>
    )
}

export default Search;