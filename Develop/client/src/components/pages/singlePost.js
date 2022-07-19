import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries/queries';
import { useParams } from 'react-router-dom';
import CommentList from '../Comments/CommentList'
import CommentForm from '../Comments/CommentForm'

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
            <div className='card postCard outlineCard '>
                <div className='d-flex flex-column align-items-center'>
                    <h2>Posts</h2>
                    <a className="navBtn" href='/addpost'><button className="btn btn-light">Add Post</button></a>
                </div>
                    <div className='w-100'>
        
                        
                            <div className='card'><div className=''>
                                <div className='w-100 d-flex flex-row justify-content-between'>
                                    <div className='card-header d-flex justify-content-between w-100'>
                                        <h4>{post.title} </h4>
                                   
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
                                    <CommentForm postId={post._id}/>
                                </div>
                                
                                </div>
                                <div className='card'>
                                    <CommentList comments={post.comments} />
                                </div>
                        
        
                     
            </div>
            </div>
    </div>
</main>
    )


}


export default SinglePost;