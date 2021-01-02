import React from 'react'
import users from '../../Data/users'

export default function Homepage() {
    return (
        <div> {
            users.map((user) => (
                <div>
                    <div> {
                        user.email
                    } </div>
                    <div> {
                        user.name
                    } </div>
                    <div> {
                        user.password
                    } </div>
                    <div> {
                        user.isAdmin
                    } </div>
                    <hr/>
                </div>

            ))
        } </div>

    )
}
