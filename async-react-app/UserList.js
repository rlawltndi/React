import React, { useState, useEffect } from 'react'

function UserList() {
    const [users, SetUsers] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.')
                }
                const date = await response.json()
                SetUsers(date);

            } catch (err){
        SetError(err.message)
            }finally{
                SetLoading(false)
            }
        }
        fetchUsers();

    },[])

    if(loading){
        return(<p>로딩중...</p>)
    }
    if(error){
        return(<p>에러발생 : {error}</p>)
    }
    return(
        <div>
            <h1>사용자 목록</h1>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
        
}
export default UserList