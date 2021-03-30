
import { useEffect, useState, } from 'react'
import axios from 'axios'

function Employee() {

    const [data, setData] = useState([])
    // const [search, setSearch] = useState([])


    async function getEmployee() {
        const results = await axios.get("https://randomuser.me/api/?results=15")
        setData(data => results.data.results)
        console.log(results.data.results)
    }

    console.log(data)
    useEffect(function () {
        console.log('please work')
        getEmployee()

    }, [])

    // sorting function needs work

    function ascendingSort() {
        console.log('please work')
        const aSort = data.name.sort();
        console.log(aSort)
    }

    // NEEDS WORK.... SEARCH FUNCTION 

    // function employeeSearch(event) {
    //     event.preventDefault();
    //     if (event.target.name === 'search') {
    //         const searchBarInput = event.target.value.toLowerCase();
    //         const result = data.filter(input => input === searchBarInput)
    //         console.log(result)
    //     }
    // }

    return (
        // onClick={sortByName}
        <div className="container">
            <table className="table table-dark table-striped tableHeader">
                <thead>
                    <tr className="tbHeader">
                        <th onclick={ascendingSort}>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone number</th>

                    </tr>
                </thead>

                {data.map(user => {
                    return (
                        // <table class="table table-dark table-striped">
                        <tr>
                            <th>
                                {user.name.first}
                                <br></br>
                                {user.name.last}
                            </th>

                            <th><img src={user.picture.medium} alt="employee photos"></img></th>
                            <th>{user.email}</th>
                            <th>
                                {user.location.city},
                            <br></br>
                                {user.location.country}
                            </th>
                            <th>{user.phone}</th>
                        </tr>
                        // </table>
                    )
                })}

            </table>
        </div>
    )

}



export default Employee
