import { useState } from 'react';
import styled from 'styled-components';
import PanelPost from '../panelpost/panelpost';
import { useDispatch } from 'react-redux';
import { selectPost } from '../../features/postactive/Post.slice';
import PostPreviewPopup from '#features/postactive/PostPreviewPopup';
import { Post } from '../../features/auth/types';
import { selectImage } from '#features/postactive/Image.slice';
import { PostImagePopup } from '#features/postactive/PostImagePopus';
import { Button9 } from '#ui/button2/button9';

const Post4: React.FC<Post> = (props) => {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);
  const dispatch = useDispatch();
  const { id, image, text, date, lesson_num, title, author } = props;

  function truncateText(title: string, maxChars: number): string {
    if (title.length <= maxChars) {
      return title;
    }
    const truncatedText = title.substring(0, maxChars);
    return `${truncatedText}...`;
  }

  const handlePreviewClick = () => {
    const selectedPostData = {
      id: id,
      image: image,
      text: text,
      date: date,
      lesson_num: lesson_num,
      title: title,
      author: author,
    };
    dispatch(selectPost(selectedPostData));
    setPreviewVisible(true);
  };

  const handleImageClick = () => {
    const selectedImageData = {
      id: id,
      image: image,
    };
    dispatch(selectImage(selectedImageData));
    setImageVisible(true);
  };

  return (
    <PostWrapper>
      <PostWrapper2>
        <PostWrapper3>
          <p>{date}</p>
          <h3>{truncateText(title, 25)}</h3>
        </PostWrapper3>
        <Button9 onClick={handleImageClick}>
          <PostImg>{image && <img src={image} alt={`Post ${id}`} />}</PostImg>
        </Button9>
      </PostWrapper2>
      <PanelPost />
      <button onClick={handlePreviewClick}>Review</button>
      {isImageVisible && (
        <RedSquare>
          <PostImagePopup
            isImageVisible={isImageVisible}
            setImageVisible={setImageVisible}
          />
        </RedSquare>
      )}
      {isPreviewVisible && (
        <BackGround>
          <WhiteSquare>
            <PostPreviewPopup
              isPreviewVisible={isPreviewVisible}
              setPreviewVisible={setPreviewVisible}
            />
          </WhiteSquare>
        </BackGround>
      )}
    </PostWrapper>
  );
};

const BackGround = styled.div``;

const PostWrapper = styled.div`
  color: black;
  width: 100%;
  padding: 15px;
  & span {
    font-size: 17px;
    color: var(--text-primary-color);
  }
  & p,
  h3 {
    margin: 0 0 5px 0;
    color: var(--text-primary-color);
  }
`;

const PostWrapper2 = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PostWrapper3 = styled.div`
  text-align: initial;
`;

const PostImg = styled.div`
  width: 180px;
  padding: 0 25px 0 0;
  img {
    width: -webkit-fill-available;
  }
`;

const WhiteSquare = styled.div`
  width: 800px;
  height: 260px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RedSquare = styled.div`
  width: 800px;
  height: 460px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Post4;
