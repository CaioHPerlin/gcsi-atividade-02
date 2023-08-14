import PostField from '../PostField/PostField';
import './Timeline.css';
import { useState } from 'react';
import Feed from '../Feed/Feed';

const Timeline = () => {

    const [posts, setPosts] = useState([]);

    const newPost = (post) => {
        setPosts([post, ...posts]);
    }

    return(
        <div className='timeline'>
            <PostField toNewPost={post => newPost(post)}/>
            <Feed content={posts}/>
        </div>
    )
}

export default Timeline;