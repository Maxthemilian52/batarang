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
                    </div>
                        <div className='card w-100'>
            
                            {/* {post.map((post,i) => ( */}
                                <div className=''>
                                    <div className='w-100 d-flex flex-row justify-content-between'>
                                        <div>
                                            <h4>Post Title</h4>
                                            {/* <h4>Date Posted: {post.title} </h4> */}
                                        </div>
                        
                                        <div>
                                            <h5>Post Date</h5>
                                            {/* <h5>{post.date}</h5> */}
                                        </div>
                                    </div>    
                                </div>
                                
                                <div className=''>
                                    <p>Post If you don’t have a blog idea in mind just yet, opt for a flexible template like this one. One of the best blog templates around, the Life Blog template is ideal for lifestyle bloggers, vloggers and anyone else seeking to build an online presence. Blog posts are visible directly from the homepage, while the blog category in the navigation bar takes readers to the complete blog feed</p>
                                    {/* <p>{post.content}</p> */}
                                </div>
                                <div className='w-100 d-flex flex-row justify-content-between'>
                                    <div>
                                        <h5>Post Author</h5>
                                        {/* <h4>{post.user}</h4> */}
                                    </div>
                                <div>
                                    <a className="navBtn" href='/posts/:id'><button className="btn btn-light">Comments</button></a> 
                                </div>
                            </div>
                        </div>
                        <div className='card w-100'>
            
            {/* {post.map((post,i) => ( */}
                <div className=''>
                    <div className='w-100 d-flex flex-row justify-content-between'>
                        <div>
                            <h4>Post Title</h4>
                            {/* <h4>Date Posted: {post.title} </h4> */}
                        </div>
        
                        <div>
                            <h5>Post Date</h5>
                            {/* <h5>{post.date}</h5> */}
                        </div>
                    </div>    
                </div>
                
                <div className=''>
                    <p>Post If you don’t have a blog idea in mind just yet, opt for a flexible template like this one. One of the best blog templates around, the Life Blog template is ideal for lifestyle bloggers, vloggers and anyone else seeking to build an online presence. Blog posts are visible directly from the homepage, while the blog category in the navigation bar takes readers to the complete blog feed</p>
                    {/* <p>{post.content}</p> */}
                </div>
                <div className='w-100 d-flex flex-row justify-content-between'>
                    <div>
                        <h5>Post Author</h5>
                        {/* <h4>{post.user}</h4> */}
                    </div>
                <div>
                    <a className="navBtn" href='/posts/:id'><button className="btn btn-light">Comments</button></a> 
                </div>
            </div>
        </div>
        <div className='card w-100'>
            
            {/* {post.map((post,i) => ( */}
                <div className=''>
                    <div className='w-100 d-flex flex-row justify-content-between'>
                        <div>
                            <h4>Post Title</h4>
                            {/* <h4>Date Posted: {post.title} </h4> */}
                        </div>
        
                        <div>
                            <h5>Post Date</h5>
                            {/* <h5>{post.date}</h5> */}
                        </div>
                    </div>    
                </div>
                
                <div className=''>
                    <p>Post If you don’t have a blog idea in mind just yet, opt for a flexible template like this one. One of the best blog templates around, the Life Blog template is ideal for lifestyle bloggers, vloggers and anyone else seeking to build an online presence. Blog posts are visible directly from the homepage, while the blog category in the navigation bar takes readers to the complete blog feed</p>
                    {/* <p>{post.content}</p> */}
                </div>
                <div className='w-100 d-flex flex-row justify-content-between'>
                    <div>
                        <h5>Post Author</h5>
                        {/* <h4>{post.user}</h4> */}
                    </div>
                <div>
                    <a className="navBtn" href='/posts/:id'><button className="btn btn-light">Comments</button></a> 
                </div>
            </div>
        </div>
                    {/* ))}; */}
                </div>
            

            <div className='card eventCard outlineCard align-items-center'>
                <h2>Upcoming Events</h2>
                <div className='w-100 card'>
                    {/* {event.timeStamp((event,i) => ( */}
                    <div className='d-flex flex-column align-items-center'>
                        {/* <h3>{event.title}</h3> */}
                        <h3>Event Title</h3>
                        {/* <h4>{event.date}</h4> */}
                        <h4>Event Date</h4>
                    </div>
                    {/* ))}; */}
                </div>
                <div className='w-100 card'>
                    {/* {event.timeStamp((event,i) => ( */}
                    <div className='d-flex flex-column align-items-center'>
                        {/* <h3>{event.title}</h3> */}
                        <h3>Event Title</h3>
                        {/* <h4>{event.date}</h4> */}
                        <h4>Event Date</h4>
                    </div>
                    {/* ))}; */}
                </div>
                <div className='w-100 card'>
                    {/* {event.timeStamp((event,i) => ( */}
                    <div className='d-flex flex-column align-items-center'>
                        {/* <h3>{event.title}</h3> */}
                        <h3>Event Title</h3>
                        {/* <h4>{event.date}</h4> */}
                        <h4>Event Date</h4>
                    </div>
                    {/* ))}; */}
                </div>
            </div>
        </div>
    </body>
    );
}

export default Posts;