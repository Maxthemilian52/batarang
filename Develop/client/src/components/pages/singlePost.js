import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries/queries';
import { useParams } from 'react-router-dom';
import CommentList from '../Comments/CommentList'

function SinglePost() {
    const { postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: {postId: postId}
    });
    console.log(data)
    const post = data?.post || [];

    return (
        <main>
        <div className='postPage'>
            <div className='card postCard outlineCard align-items-center'>
                <div>
                    <h2>Posts</h2>
                    <a className="navBtn" href='/addpost'><button className="btn btn-light">Add Post</button></a>
                </div>
                    <div className='w-100'>
        
                        
                            <div className='card'><div className=''>
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
                                        
                                    </div>
                                </div></div>
                                
                                <div className='card'>
                                <div>
                                    <h2>Comments</h2>
                                </div>
                                <div>
                                    {/* <AddComment /> */}
                                </div>
                                <CommentList comments={post.comments} />
                                </div>
                        
        
                     
            </div>
            </div>
    </div>
</main>
    )


}


export default SinglePost;