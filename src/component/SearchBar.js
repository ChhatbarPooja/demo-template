import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder, data }) => {
    return (
        <div className='search'>
            <div className='serachinput p-5'>
                <input type="text" placeholder={placeholder} />
                <div className='searchicon'>
                {/* <i><SearchIcon /></i> */}
                </div>

            </div>
            <div className='dataresult'>

            </div>
        </div>
    )
}

export default SearchBar