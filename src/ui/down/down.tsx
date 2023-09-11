import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../button2/button';
import { Button2 } from '../button2/button2';
import image1 from './палец вверх.png';
import image5 from './палец вверх2.png';
import image2 from './палец вниз.png';
import image6 from './палец вниз2.png';
import { Button3 } from '../button2/button3';
import image3 from './флажок.png';
import image7 from './флажок2.png';
import { Button4 } from '../button2/button4';
import image4 from './три точки.png';
import image8 from './три точки2.png';

interface Props {
   
  }

  const Down: React.FC<Props> = () => {
    const [like, setLiked] = useState(false);
    const [Dislike, setDisliked] = useState(false);
    const [Flag, setFlag] = useState(false);
    const [MoreVisible, setMoreVisible] = useState(false);
    const [imageSrcLike, setImageSrcLike] = useState(image1);
    const [imageSrcDisliked, setImageSrcDisliked] = useState(image2);
    const [imageSrcFlag, setImageSrcFlag] = useState(image3);
    const [imageSrcMoreVisible, setImageSrcMoreVisible] = useState(image4);
    
  const handleLikeClick = () => {
    if (like) {
      setLiked(false);
      setImageSrcLike(image1);
    } else {
      setLiked(true);
      setImageSrcLike(image5);
    }
  };
  const likeCount = like ? 28 : 27; 

  const handleDislikeClick = () => {
    if (Dislike) {
      setDisliked(false);
      setImageSrcDisliked(image2);
    } else {
      setDisliked(true);
      setImageSrcDisliked(image6);
    }
  };
  const DislikeCount = Dislike ? 9 : 8;

  const handFlagClick = () => {
    if (Flag) {
      setFlag(false);
      setImageSrcFlag(image3);
    } else {
      setFlag(true);
      setImageSrcFlag(image7);
    }
  };

  const handMoreVisibleClick = () => {
    if (MoreVisible) {
      setMoreVisible(false);
      setImageSrcMoreVisible(image4);
    } else {
      setMoreVisible(true);
      setImageSrcMoreVisible(image8);
    }
  };
  
      return (
        <ButtonWrapper>
          <div>
            <Button onClick={handleLikeClick}>
              <img src={imageSrcLike} alt="#" className="pic1" />
            </Button>
            <NomberWrapper>{likeCount}</NomberWrapper>
            <Button2 onClick={handleDislikeClick}>
              <img src={imageSrcDisliked} alt="#" className="pic1" />
            </Button2>
            <NomberWrapper>{DislikeCount}</NomberWrapper>
          </div>
          <FlagMoreVisible>
            <Button3 onClick={handFlagClick}>
              <img src={imageSrcFlag} alt="#" className="pic1" />
            </Button3>
            <Button4 onClick={handMoreVisibleClick}>
              <img src={imageSrcMoreVisible} alt="#" className="pic1" />
            </Button4>
          </FlagMoreVisible>
        </ButtonWrapper>
      );
  };
    
  const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  `
  const NomberWrapper = styled.span`
  margin-left: 3px;
  margin-right: 3px;
  `
  const FlagMoreVisible = styled.div`
  display: inline-flex;
  align-items: flex-end;
  `
  
  export default Down;