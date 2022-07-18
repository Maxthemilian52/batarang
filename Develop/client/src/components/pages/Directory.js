import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries/queries';

function Directory() {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.allUsers || [];

    return (
        <main>
            <div className='postPage'>
                <div className='card postCard outlineCard align-items-center'>
                    <div>
                        <h2>Docent Directory</h2>
                    </div>
                        <div>
            
                            {users.map((user,i) => (
                                <><div className='card w-100'>
                                    <div>
                                        <h2>{user.firstName} {user.lastName}</h2>
                                        <h3>{user.email}</h3>
                                        <h3>{user.phone}</h3>
                                        <h4>{user.address}</h4>
                                    </div>
                                    <div>
                                        <h4>Team: {user.team}</h4>
                                        <h4>Position: {user.position}</h4>
                                        <h4>GradYear: {user.gradYear}</h4>
                                    </div>
                                    </div></>
                            
            
                            ))}
                </div>
                </div>
        </div>
    </main>
    );
}

export default Directory;