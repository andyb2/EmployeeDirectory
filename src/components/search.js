import React from 'react';


const Search = ({ employees }) => {
    const { data, setData } = employees;
    const handleChange = (e) => {
        const lowerCase = `${e.target.value}`.toLowerCase();
        const peopleSearch = data.people.filter(person => `${person.name.first} ${person.name.last}`.toLowerCase().includes(lowerCase));
        const dataCopy = { ...data }
        dataCopy.peopleCopy = [...peopleSearch]
        setData(dataCopy)
    }

    return (
        <div className="container">
            <form>
                <div className="form-group search-widget">
                    <div className="input-group mb-3">
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Search directory for employee'
                            id='search'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;