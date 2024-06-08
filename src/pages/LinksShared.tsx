import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLinksUser } from '@redux/authSlice';
import { AppDispatch } from '@redux/store';
import { useEffect, useState } from 'react';

const LinkShared = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        console.log('undefined');
        setLoading(false);
        return;
      }

      try {
        const result: any = await dispatch(getLinksUser(id));
        setUser(result);
        console.log(user);
        console.log(loading);
        console.log(error);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, dispatch]);

  return <div></div>;
};

export default LinkShared;
