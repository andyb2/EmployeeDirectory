
import { useEffect, useState, } from 'react'
import axios from 'axios'
import Search from './search'

function Employee() {

    const [data, setData] = useState([])
    const [order, setOrder] = useState('ascending')

    async function getEmployee() {
        const results = await axios.get("https://randomuser.me/api/?results=15")
        setData(data => results.data.results)

    }

    useEffect(function () {
        getEmployee()
    }, [])

    function ascendingSort() {
        console.log(data)
        let filtereddata = [...data]
        console.log(filtereddata)
        const sortedEmployees = filtereddata.sort((a, b) => {
            if (b.name.first > a.name.first) {
                console.log()
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0
        });
        if (order === 'descending') {
            sortedEmployees.reverse()
            setOrder("ascending")
        }
        else {
            setOrder("descending")
        }
        setData(sortedEmployees)

    }

    function employeeSearch(event) {
        event.preventDefault();
        let filtereddata = [...data]
        const searchBarInput = event.target.value;

        const result = filtereddata.filter(input => {
            let values = Object.values(input).join('').toLowerCase();
            return values.indexOf(searchBarInput.toLowerCase()) !== -1
        }
        )
        setData(result)
    }

    return (
        <div className="container">
            <Search employeeSearch={employeeSearch} />
            <table className="table table-dark table-striped tableHeader">
                <thead>
                    <tr className="tbHeader">
                        <th class="name" onClick={ascendingSort} >Name</th>
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
                    )
                })}
            </table>
        </div>
    )
}

export default Employee
