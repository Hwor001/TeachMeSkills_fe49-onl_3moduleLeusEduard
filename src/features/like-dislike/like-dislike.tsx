import styled from 'styled-components';
import { useState } from 'react';
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
  const [iconColor, setIconColor] = useState('var(--text-primary-color)');
  const [iconColor2, setIconColor2] = useState('var(--text-primary-color)');
  //   const handleLikeClick = () => {
  //     if (activeLike) {
  //       dispatch(setActiveDislike({ id }));
  //       setIconColor('var(--text-primary-color)');
  //       setIconColor2('var(--text-primary-color)');
  //     } else {
  //       dispatch(setActiveLike({ id }));
  //       setIconColor('red');
  //     }
  //   };

  //   const handleDislikeClick = () => {
  //     if (activeDislike) {
  //       setIconColor('var(--text-primary-color)');
  //       setIconColor2('var(--text-primary-color)');
  //     } else {
  //       setIconColor2('blue');
  //     }
  //   };

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(setActiveLike({ id }));
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ color: activeLike ? 'red' : iconColor }}
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
          style={{ color: activeDislike ? 'blue' : iconColor2 }}
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
