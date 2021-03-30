import React from 'react';
import Employee from './employee'

const Search = (props) => {
    return (
        <div className="container">
            <form>
                <div className="form-group search-widget">
                    <div className="input-group mb-3">
                        <input className='form-control' value={props.search} name='search' type='text' placeholder='Search directory for Employee' id='search' />
                        <button className="btn btn-primary" onclick={Employee.employeeSearch}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;