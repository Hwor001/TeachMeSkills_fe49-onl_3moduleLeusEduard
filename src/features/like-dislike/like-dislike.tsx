import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button } from '../../ui/button2/button';
import { Button2 } from '../../ui/button2/button2';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setActiveDislike, setActiveLike } from './like-dislike.slice';

type Props = {
  id: number;
};

export const LikeDislike: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.likeDislike[id]);
  const activeLike = rating?.userChoice === 'like' || false;
  const activeDislike = rating?.userChoice === 'dislike' || false;

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(setActiveLike({ id }));
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ color: activeLike ? 'red' : 'var(--text-primary-color)' }}
        />
      </Button>
      <NomberWrapper>{rating?.likes || 0}</NomberWrapper>
      <Button2
        onClick={() => {
          dispatch(setActiveDislike({ id }));
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{
            color: activeDislike ? 'blue' : 'var(--text-primary-color)',
          }}
        />
      </Button2>
      <NomberWrapper>{rating?.dislikes || 0}</NomberWrapper>
    </div>
  );
};
const NomberWrapper = styled.span`
  margin-left: 3px;
  margin-right: 3px;
`;
