import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { activate } from '../../features/auth/activation.slice';

export const ActivatePage: React.FC = () => {
  const { uid, token } = useParams();
  const dispatch = useAppDispatch();
  const isCompleted = useAppSelector((state) => state.activate.isCompleted);

  const navigate = useNavigate();

  useEffect(() => {
    if (isCompleted) {
      navigate('/activate/success');
    }
  }, [navigate, isCompleted]);

  useEffect(() => {
    if (uid && token) {
      dispatch(activate({ uid, token }));
    }
  }, [uid, token, dispatch]);

  if (!uid || !token) return <div>Error</div>;
  return <div>Success</div>;
};
