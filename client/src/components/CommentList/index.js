import React from 'react';
import { Link } from 'react-router-dom';

import Art from '../../images/album-art.jpeg';
import Play from '../../images/play-btn.png';
const CommentList = ({ comments, title }) => {

    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }

    return (
        <div className="row">
            {/* <h3>{title}</h3> */}
            {comments &&
                comments.map(comment => (
                    <div key={comment._id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
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
                            <div className="grid-card d-flex" style={{ backgroundImage: `url(${Art})` }}>
                            <img className="play-btn-grid" src={Play} />
                            </div>

                            <p className="grid-song-title"><Link
                                to={`/comment/${comment._id}`}
                                style={{ textDecoration: 'none' }}
                                className="grid-song-title"
                            >
                                Skittles
                            </Link>
                            </p>
                            <p className="grid-artist-title">
                                <Link
                                    to={`/profile/${comment.username}`}
                                    style={{ textDecoration: 'none' }}
                                    className="grid-artist-title"
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