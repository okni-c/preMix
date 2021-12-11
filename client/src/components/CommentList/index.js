import React from 'react';
import { Link } from 'react-router-dom';

import Art from '../../images/album-art.jpeg';

const CommentList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }

    return (
        <div className="row">
            {/* <h3>{title}</h3> */}
            {comments &&
                comments.map(comment => (
                    <div key={comment._id} className="col-3">
                        {/* <p className="card-header">
                            <Link
                                to={`/profile/${comment.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-dark"
                            >
                                {comment.username}
                            </Link>{' '}
                            posted on {comment.createdAt}
                        </p> */}
                        <div>
                            <img className="grid-card" src={Art} />
                            
                                <p><Link
                                        to={`/comment/${comment._id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Song title
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        to={`/profile/${comment.username}`}
                                        style={{ textDecoration: 'none' }}
                                        className="text-dark"
                                    >
                                        {comment.username}
                                    </Link>
                                    {/* Reactions: {comment.reactionCount} || Click to{' '}
                                    {comment.reactionCount ? 'see' : 'start'} the discussion! */}
                                </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CommentList;