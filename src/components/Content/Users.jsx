import './Users.css';

const Users = () => {
    return (
        <div>
            <h2>Manage users</h2>
            <button>Create new user</button>
            <div className='Users-user-list'>
                <p>
                    Username
                </p>
                <p>
                    Email
                </p>
                <p>
                    Usertype
                </p>
                <p>
                    Status
                </p>
            </div>
            
        </div>
    );
};

export default Users;