import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries/queries';
import { Link } from 'react-router-dom';

function Posts() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.allPosts || [];


    return (
        <main>
            <div className='postPage'>
                <div className='card postCard outlineCard'>
                    <div className='d-flex align-items-center flex-column'>
                        <h2>Posts</h2>
                        <a className="navBtn" href='/addpost'><button className="btn btn-light">Add Post</button></a>
                    </div>
                        <div>
            
                            {posts.map((post,i) => (
                                <div key={post._id} className='card w-100'><div>
                                    <div className='w-100 d-flex flex-row justify-content-between'>
                                        <div className='card-header d-flex justify-content-between w-100'>
                                            <h4>{post.title} </h4>
                                        

                                            <h5 className='date'>{post.createdAt}</h5>
                                        </div>
                                    </div>
                                </div><div className=''>

                                        <p>{post.postContent}</p>
                                    </div><div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>

                                            <h4>{post.postAuthor}</h4>
                                        </div>
                                        <div>
                                            <Link className="navBtn" to={`/post/${post._id}`}><button className="btn btn-light">Comments</button></Link>
                                        </div>
                                    </div></div>
                            
            
                            ))}
                </div>
                </div>
        </div>
    </main>
    );
}

export default Posts;