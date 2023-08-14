import Post from '../Post/Post';
import './Feed.css';

const Feed = (props) => {

    return(
        props.content.length>0 ?<div className='feed'>
            <h2>Feed</h2>
            {props.content.map(post => <Post key={props.content.indexOf(post)} message={post.message} location={post.location} date={post.date} urls={post.urls}/>)}
        </div>
        : ""
    )
}

export default Feed;