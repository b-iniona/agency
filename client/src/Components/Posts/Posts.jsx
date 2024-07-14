import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Posts.css';
import '../SharedLayout/SharedLayout';

function Posts({ postsArray }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    if (postsArray && typeof postsArray === 'object') {
      const sorted = Object.values(postsArray).sort((a, b) => b.id - a.id);
      setSortedPosts(sorted);
    }
  }, [postsArray]);

  const initialVisiblePosts = 6;
  const [visiblePosts, setVisiblePosts] = useState(initialVisiblePosts);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
  };

  const showLessPosts = () => {
    setVisiblePosts(initialVisiblePosts);
    setShowAllPosts(false);
  };

  return (
    <div className='posts'>
      <div><h1 className='pt-5 latestPosts'>Latest Posts</h1></div>
      <div className='postContainer'>
        {sortedPosts.slice(0, visiblePosts).map(p => (
          <Post post={p} key={p.id} />
        ))}
      </div>
      <div className='buttonContainer'>
        {!showAllPosts && visiblePosts < sortedPosts.length && (
          <button className='my-1 seeMoreButton fixedSizeButton' onClick={loadMorePosts}>
            See More <i className='px-1 fa-solid fa-down-long'></i>
          </button>
        )}
        {visiblePosts >= sortedPosts.length && (
          <button className='my-1 seeMoreButton fixedSizeButton' onClick={showLessPosts}>
            See Less <i className='px-1 fa-solid fa-up-long'></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Posts;
