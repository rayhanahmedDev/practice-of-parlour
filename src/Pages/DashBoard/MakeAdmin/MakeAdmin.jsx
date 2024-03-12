import { useEffect, useState } from "react";

const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleSearch = () => {
        const inputField = document.getElementById('input-field')
        const inputValue = inputField.value.toLowerCase()
        const userData = users
        const result = userData.filter(email => email.email.toLowerCase() == inputValue)
        setUsers(result)
    }
    return (
        <div>
            <div className="m-8 rounded-xl flex items-center gap-10">
                <input className="md:w-[570px] w-full h-10 pl-5" placeholder="Search Email" type="text" name="" id="input-field" />
                <button onClick={handleSearch} className="btn btn-sm px-10 h-10 btn-error bg-[#F63E7B] text-white">Submit</button>
            </div>

            <div>
                <div className="bg-white m-8 rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="text-sm">
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Role</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <tr key={user._id}>
                                        <td className="text-sm">{user.name}</td>
                                        <td className="text-sm">{user.email}</td>
                                        <td className="text-sm">{user.role}</td>
                                        <td className="text-sm text-center">
                                        <button className="btn btn-sm px-10 h-10 btn-error bg-[#F63E7B] text-white">Make Admin</button>
                                            </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;