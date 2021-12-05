import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries';
import CommentList from '../components/CommentList';
import FriendList from '../components/FriendList';
import CommentForm from '../components/CommentForm';
import GridImg from '../images/grid.png';
import ListImg from '../images/list.png';

import HeaderSearch from '../components/HeaderSearch';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const comments = data?.comments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
    <HeaderSearch />
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 discover-left-bar">
            <div className="row">

              {/* Section */}
              <div className="col-12" style={{ paddingLeft: '34px', paddingTop: '40px' }}>
                <h3 className="disc-left-title">Layout</h3>
                <div className="row" style={{ paddingTop: '20px' }}>
                  <img src={GridImg} className="discover-layout-img" />
                  <img src={ListImg} className="discover-layout-img" />
                </div>
              </div>

              {/* Section */}
              <div className="col-12" style={{ paddingLeft: '34px', paddingTop: '45px' }}>
                <h3 className="disc-left-title">Filters</h3>
                <div className="row" style={{ paddingTop: '20px' }}>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Samples
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Songs
                    </label>
                  </div>

                </div>
              </div>

              {/* Section */}
              <div className="col-12" style={{ paddingLeft: '34px', paddingTop: '45px' }}>
                <h3 className="disc-left-title">Type</h3>
                <div className="row" style={{ paddingTop: '20px' }}>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Kicks
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Hats
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Synths
                    </label>
                  </div>

                </div>
              </div>

              {/* Section */}
              <div className="col-12" style={{ paddingLeft: '34px', paddingTop: '45px' }}>
                <h3 className="disc-left-title">Genre</h3>
                <div className="row" style={{ paddingTop: '20px' }}>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      House
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Garage
                    </label>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="col-10">
            This side will diplay post list component
          </div>
        </div>
      </div>


      {/* <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <CommentForm />
          </div>
        )}
        <div className={`col-12 mb-3' ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentList comments={comments} title="Post Discovery" />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}

      </div> */}
    </main >
    </>
  );
};

export default Home;
