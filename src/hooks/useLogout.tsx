import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate()
    localStorage.removeItem('demo')
    localStorage.removeItem('token')
    navigate('/signin')
}

export default useLogout;
