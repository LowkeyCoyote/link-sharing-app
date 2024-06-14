import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('demo');
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return logout;
};

export default useLogout;