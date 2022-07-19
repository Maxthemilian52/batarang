import React from 'react';

const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {

    return <div className='d-flex justify-content-center'><h3>No Comments Yet</h3></div>;
  }

  return (
    <>
      <h3
        className="p-5 d-flex justify-content-center"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment,i) => (
            <div key={comment._id} className="">
              <div className="p-3 d-flex card-header justify-content-between ">
                <h5 className="r">
                    {comment.commentAuthor}                  
                </h5>
                <p>{comment.createdAt}</p>
                
              </div>
              <p className="card-body p-4" style={{ borderBottom: '1px dotted #1a1a1a' }}>{comment.commentBody}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
