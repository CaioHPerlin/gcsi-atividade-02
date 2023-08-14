import './Attachments.css';

const Attachments = (props) => {

    let cleanUrls = props.images.filter(url => url.length > 0).flat();
    console.log(cleanUrls)

    return(
        <div className='attachments'>
            {cleanUrls.map(url => <img src={url} key={cleanUrls.indexOf(url)} alt=''/>)}
        </div>
    )
}

export default Attachments;