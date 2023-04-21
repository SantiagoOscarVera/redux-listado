import React, {useEffect} from 'react'; // el useEffect conecta a los componentes de la aplicacion
import { fetchAllUsers } from '../store/reducer-slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

    const {list: users } = useSelector(state => state.users); // users que viene de los slides

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    users.map((user, index) => (
                        <div key={index} className='col-md-3 mb 4'>
                            <div className='card'>
                                <img src={user.avatar} alt='avatar'></img>
                                <div className='card-body'>
                                        <h5 className='card-title' >{`${user.first_name} ${user.last_name}`} </h5>
                                        <p className='card-text'>{user.email} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserList;