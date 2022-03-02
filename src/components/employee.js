import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './search';

const Employee = () => {
    const [data, setData] = useState({});
    const [order, setOrder] = useState('ascending');

    const getEmployee = async () => {
        const results = await axios.get("https://randomuser.me/api/?results=30");
        const people = {
            people: results.data.results,
            peopleCopy: results.data.results,
        }
        setData(people);
    }

    const ascendingSort = () => {
        const dataCopy = { ...data }
        const sortedEmployees = dataCopy.peopleCopy.sort((a, b) => {
            if (b.name.first > a.name.first) {
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
        dataCopy.peopleCopy = [...sortedEmployees];
        setData(dataCopy);
    }

    useEffect(() => {
        getEmployee()
    }, [])

    return (
        <div className="container">
            <Search employees={{ data, setData }} />
            <table className="table table-dark table-striped tableHeader">
                <thead className="tbHeader">
                    <tr>
                        <th className="name" onClick={ascendingSort}>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.people &&
                        data.peopleCopy.map(user => {
                            return (
                                <tr key={`${user.name.first}${user.name.last}`}>
                                    <th>
                                        {user.name.first}
                                        <br></br>
                                        {user.name.last}
                                    </th>
                                    <th>
                                        <img src={user.picture.medium} alt="employee photos" />
                                    </th>
                                    <th>
                                        {user.email}
                                    </th>
                                    <th>
                                        {user.location.city},
                                        <br></br>
                                        {user.location.country}
                                    </th>
                                    <th>
                                        {user.phone}
                                    </th>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Employee
