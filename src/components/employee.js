
import { useEffect, useState, } from 'react'
import axios from 'axios'

function Employee() {

    const [data, setData] = useState([])


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

    return (
        // onClick={sortByName}
        <div className="container">
            <table className="table table-dark table-striped tableHeader">
                <thead>
                    <tr className="tbHeader">
                        <th>Name</th>
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

                            <th><img src={user.picture.medium}></img></th>
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
