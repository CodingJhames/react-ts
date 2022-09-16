import { useId, useState } from 'react';

interface User {
    uid: string;
    name: string;
}


export const User = () => {
    
    const [user, setUser] = useState<User>();
    
    const login = () => {
        setUser( {
            uid: 'ABC123',
            name: 'Chepito Mejía'
        } )
    }
    
    
    
    return (
    <div className='mt-5'>
        <h3>User: useState</h3>

        <button
            onClick={login}
            className='btn btn-outline-primary'>
            Login
        </button>

        {
            (!user)
            ? <pre> No hay User </pre>
            : <pre> {JSON.stringify(user)} </pre>
        }

        <pre>{JSON.stringify(user)}</pre>
    </div>
    )
}
