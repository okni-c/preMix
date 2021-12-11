import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }

    return (
        <div className="row">
            <h3>{title}</h3>
            {comments &&
                comments.map(comment => (
                    <div key={comment._id} className="card mb-3 col-3">
                        <p className="card-header">
                            <Link
                                to={`/profile/${comment.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-dark"
                            >
                                {comment.username}
                            </Link>{' '}
                            posted on {comment.createdAt}
                        </p>
                        <div className="card-body">
                            <Link to={`/comment/${comment._id}`}>
                                <p>{comment.commentText}</p>
                                <p className="mb-0">
                                    Reactions: {comment.reactionCount} || Click to{' '}
                                    {comment.reactionCount ? 'see' : 'start'} the discussion!
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CommentList;