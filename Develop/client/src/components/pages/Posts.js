import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries/queries';

function Posts() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.allPosts || [];


    return (
        <main>
            <div className='postPage'>
                <div className='card postCard outlineCard align-items-center'>
                    <div>
                        <h2>Posts</h2>
                        <a className="navBtn" href='/addpost'><button className="btn btn-light">Add Post</button></a>
                    </div>
                        <div className='card w-100'>
            
                            {posts.map((post,i) => (
                                <><div className=''>
                                    <div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>
                                            <h4>{post.title} </h4>
                                        </div>

                                        <div>

                                            <h5>{post.createdAt}</h5>
                                        </div>
                                    </div>
                                </div><div className=''>

                                        <p>{post.postContent}</p>
                                    </div><div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>

                                            <h4>{post.postAuthor}</h4>
                                        </div>
                                        <div>
                                            <a className="navBtn" href='/posts/:id'><button className="btn btn-light">Comments</button></a>
                                        </div>
                                    </div></>
                            
            
                            ))}
                </div>
                </div>
        </div>
    </main>
    );
}

export default Posts;