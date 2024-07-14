import './Post.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

function Post({ post }) {
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const createdAtDate = moment(post.created_at);
    const formattedDate = createdAtDate.isValid() ? createdAtDate.format("MMMM D, YYYY, h:mm:ss a") : "Unknown Date";
    setCreatedAt(formattedDate);
  }, [post.created_at]);

  return (
    
    <div className='post'>
    
      <Link className='postLink Link' to={`/post/${post.id}`}>
        <div className='postInfo'>
          <div className='postCats'>
            <span className='postTitle'>{post.title}</span>
          </div>
          <div className='postCatDate d-flex col-12'>
            <span className='postDate col-12'>
              <p className='postCat'>Posted at {createdAt}</p>
            </span>
          </div>
          <p className='postDesc'>{post.description}</p>
          <p className='postCat'>
            <span className='postCatSeeMore'>Click to see more...</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Post;