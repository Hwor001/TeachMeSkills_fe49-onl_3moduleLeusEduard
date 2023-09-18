import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button } from '../button2/button';
import { Button2 } from '../button2/button2';
import { Button3 } from '../button2/button3';
import { Button4 } from '../button2/button4';

interface Props {}

const PanelPost: React.FC<Props> = () => {
  const [like, setLiked] = useState(false);
  const [Dislike, setDisliked] = useState(false);
  const [Flag, setFlag] = useState(false);
  const [MoreVisible, setMoreVisible] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [iconColor, setIconColor] = useState('var(--text-primary-color)');
  const [iconColor2, setIconColor2] = useState('var(--text-primary-color)');
  const [iconColor3, setIconColor3] = useState('var(--text-primary-color)');
  const [iconColor4, setIconColor4] = useState('var(--text-primary-color)');

  const handleLikeClick = () => {
    if (likeClicked) {
      setLiked(false);
      setIconColor('var(--text-primary-color)');
    } else {
      setLiked(true);
      setIconColor('red');
    }
    setLikeClicked(!likeClicked);
  };
  const likeCount = like ? 28 : 27;

  const handleDislikeClick = () => {
    if (Dislike) {
      setDisliked(false);
      setIconColor2('var(--text-primary-color)');
    } else {
      setDisliked(true);
      setIconColor2('red');
    }
  };
  const DislikeCount = Dislike ? 9 : 8;

  const handFlagClick = () => {
    if (Flag) {
      setFlag(false);
      setIconColor3('var(--text-primary-color)');
    } else {
      setFlag(true);
      setIconColor3('red');
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
      <div>
        <Button onClick={handleLikeClick}>
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: iconColor }} />
        </Button>
        <NomberWrapper>{likeCount}</NomberWrapper>
        <Button2 onClick={handleDislikeClick}>
          <FontAwesomeIcon icon={faThumbsDown} style={{ color: iconColor2 }} />
        </Button2>
        <NomberWrapper>{DislikeCount}</NomberWrapper>
      </div>
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
