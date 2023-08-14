import './Sidebar.css';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='usercard'>
                <img src='/images/profilepic.jpg' alt='User Profile'/>
                <h3>hygino</h3>
                <h4>@caiohplima</h4>
            </div>
        </div>
    )
}

export default Sidebar;