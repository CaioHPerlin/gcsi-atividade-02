import Attachments from '../Attachments/Attachments';
import './Post.css';

const Post = (props) => {

    return(
        <div className='post'>
            <div className='post-pic'>
                <img src='/images/profilepic.jpg' alt='caiohplima Tweeted'/>
            </div>
            <div className='text-content'>
                <h3>hygino <span>@caiohplima {props.date} · {props.location}</span></h3>
                <p>{props.message}</p>
                <Attachments images={props.urls}/>
            </div>
        </div>
    )
}

export default Post;