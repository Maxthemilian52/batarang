import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries/queries';

function Directory() {
    const { loading, data } = useQuery(QUERY_USERS);
    let users = data?.allUsers || [];
    users = [...users].sort((a,b) => a.lastName > b.lastName ? 1 : -1);
    return (
        <main>
            <div className='postPage'>
                <div className='card postCard outlineCard justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <h2>Docent Directory</h2>
                    </div>
                        <div>
            
                            {users.map((user,i) => (
                                <><div className='card p-4 d-flex w-100'>
                                    <div>
                                        <h3 className='card-header'>{user.firstName} {user.lastName}</h3>
                                        <h4>{user.email}</h4>
                                        <h5>{user.phone}</h5>
                                        <h5>{user.address}</h5>
                                    </div>
                                    <div>
                                        <h6>Team: {user.team}</h6>
                                        <h6>Position: {user.position}</h6>
                                        <h6>GradYear: {user.gradYear}</h6>
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