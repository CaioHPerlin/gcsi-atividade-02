import './PostField.css';
import { useState } from 'react';
import Button from '../Button/Button';
import Attachments from '../Attachments/Attachments';

const PostField = (props) => {

    const [message, setMessage] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [urls, setUrls] = useState([]);

    const [dragging, setDragging] = useState(false);

    const onTyping = (event) => {
        setMessage(event.target.value)

        //Get Time and Date
        let now = new Date();

        let currDate = now.toLocaleDateString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        let currTime = now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        })
        
        setDate(currTime + ' ' + currDate);

        //Get Location
        const gotLocation = (pos) => {
            const lat = pos.coords.latitude;
            const long = pos.coords.longitude;

            const API = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=pt-br`;

            fetch(API)
            .then(res => res.json())
            .then(data => {
                setLocation(data.city + ' — ' + data.principalSubdivisionCode.slice(-2) + ' | ' + data.countryCode);
            })
        }

        navigator.geolocation.getCurrentPosition(gotLocation, err => console.log(err));
    }

    const Send = (event) => {
        event.preventDefault();

        props.toNewPost({
            message,
            location,
            date,
            urls
        });

        setMessage('');
        setUrls([]);
    }

    const placeholders = [
        'Say something to the world!',
        `What's up?`,
        'What are you thinking?',
        'Share your thoughts!',
        'How was your day?'
    ]
    
    let randomPlaceholder = placeholders[Math.floor(Math.random()*placeholders.length)];

    const handleDragEvents = {
        onDragEnter:(event) => {
            event.preventDefault();
            setDragging(true);
        },
        onDragLeave:(event) => {
            event.preventDefault();
            setDragging(false);
        },
        onDragOver:(event) => {
            event.preventDefault();
        },
        onDrop:(event) => {
            event.preventDefault();
            let attachments = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image'));
            let images = attachments.map(file => URL.createObjectURL(file));
            setUrls([images, ...urls]);
            setDragging(false);
        }
    }

    return(
        <div className='post-field'>
            <div className='picture-field'>
                <img src='/images/profilepic.jpg' alt='User Profile'/>
            </div>
            <form onSubmit={Send}>
                <input value={message} onChange={event => onTyping(event)} required={true} placeholder={randomPlaceholder}/>
                <div className={dragging ?'droparea dragging': 'droparea'} {...handleDragEvents}>+</div>
                <Attachments images={urls}/>
                <Button>Send</Button>
            </form>
        </div>
    )
}

export default PostField;