import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function MyProfile() {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt="" /> 
            {JSON.stringify(user)}
            </div>
            
        )
    )
}

export default MyProfile
