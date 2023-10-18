import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button3 } from '../button2/button3';
import { Button4 } from '../button2/button4';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../features/postactive/favoritePostsSlice';
import { Post } from '../../features/auth/types';
import { LikeDislike } from '#features/like-dislike/like-dislike';
// import { RootState } from '../../store1';

interface Props {
  post: Post;
}

const PanelPost: React.FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const [Flag, setFlag] = useState(false);
  const [MoreVisible, setMoreVisible] = useState(false);
  const [iconColor3, setIconColor3] = useState('var(--text-primary-color)');
  const [iconColor4, setIconColor4] = useState('var(--text-primary-color)');

  const somePostData = {
    id: post.id,
    image: post.image,
    text: post.text,
    date: post.date,
    lesson_num: post.lesson_num,
    title: post.title,
    author: post.author,
  };

  const handFlagClick = () => {
    if (Flag) {
      setFlag(false);
      setIconColor3('var(--text-primary-color)');
      dispatch(removeFromFavorites(somePostData));
    } else {
      setFlag(true);
      setIconColor3('red');
      dispatch(addToFavorites(somePostData));
    }
  };

  const handMoreVisibleClick = () => {
    if (MoreVisible) {
      setMoreVisible(false);
      setIconColor4('var(--text-primary-color)');
    } else {
      setMoreVisible(true);
      setIconColor4('red');
    }
  };

  return (
    <ButtonWrapper>
      <LikeDislike id={post.id} />
      <FlagMoreVisible>
        <Button3 onClick={handFlagClick}>
          <FontAwesomeIcon icon={faBookmark} style={{ color: iconColor3 }} />
        </Button3>
        <Button4 onClick={handMoreVisibleClick}>
          <FontAwesomeIcon icon={faEllipsis} style={{ color: iconColor4 }} />
        </Button4>
      </FlagMoreVisible>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NomberWrapper = styled.span`
  margin-left: 3px;
  margin-right: 3px;
`;
const FlagMoreVisible = styled.div`
  display: inline-flex;
  align-items: flex-end;
`;

export default PanelPost;
