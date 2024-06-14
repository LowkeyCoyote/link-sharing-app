import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '@redux/store';
import {  useDispatch } from 'react-redux';
import { logout } from '@redux/userSlice';


const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()

  const logoutAccount = () => {
    localStorage.removeItem('demo');
    localStorage.removeItem('token');
    navigate('/signin');
    dispatch(logout())

  };

  return logoutAccount;
};

export default useLogout;