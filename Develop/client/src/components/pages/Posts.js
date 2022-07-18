import React, { useState } from 'react';
// import { QUERY_POSTS} from '../../utils/queries'


function Posts() {
    //database call posts.findall()


    return (
        <body>
            <div className='postPage'>
                <div className='card postCard outlineCard align-items-center'>
                    <div>
                        <h2>Posts</h2>
                        <a className="navBtn" href='/addpost'><button className="btn btn-light">Add Post</button></a>
                    </div>
                        <div className='card w-100'>
            
                            {post.map((post,i) => (
                                <><div className=''>
                                    <div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>
                                            <h4>Date Posted: {post.title} </h4>
                                        </div>

                                        <div>

                                            <h5>{post.date}</h5>
                                        </div>
                                    </div>
                                </div><div className=''>

                                        <p>{post.content}</p>
                                    </div><div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>

                                            <h4>{post.user}</h4>
                                        </div>
                                        <div>
                                            <a className="navBtn" href='/posts/:id'><button className="btn btn-light">Comments</button></a>
                                        </div>
                                    </div></>
                            
            
                            ))};
                </div>
                </div>
        </div>
    </body>
    );
}

export default Posts;