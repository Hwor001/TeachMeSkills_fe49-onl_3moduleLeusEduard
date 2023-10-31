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

interface PostProps {
  post: Post;
}

const Post3: React.FC<PostProps> = (PostProps) => {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);
  const dispatch = useDispatch();

  function truncateText(title: string, maxChars: number): string {
    if (title.length <= maxChars) {
      return title;
    }
    const truncatedText = title.substring(0, maxChars);
    return `${truncatedText}...`;
  }

  const somePostData = {
    id: PostProps.post.id,
    image: PostProps.post.image,
    text: PostProps.post.text,
    date: PostProps.post.date,
    lesson_num: PostProps.post.lesson_num,
    title: PostProps.post.title,
    author: PostProps.post.author,
  };

  const handlePreviewClick = () => {
    const selectedPostData = {
      id: PostProps.post.id,
      image: PostProps.post.image,
      text: PostProps.post.text,
      date: PostProps.post.date,
      lesson_num: PostProps.post.lesson_num,
      title: PostProps.post.title,
      author: PostProps.post.author,
    };
    dispatch(selectPost(selectedPostData));
    setPreviewVisible(true);
  };

  const handleImageClick = () => {
    const selectedImageData = {
      id: PostProps.post.id,
      image: PostProps.post.image,
    };
    dispatch(selectImage(selectedImageData));
    setImageVisible(true);
  };

  return (
    <PostWrapper>
      <PostWrapper2>
        <PostWrapper3>
          <p>{PostProps.post.date}</p>
          <h3>{truncateText(PostProps.post.title, 100)}</h3>
        </PostWrapper3>
        <Button9 onClick={handleImageClick}>
          <PostImg>
            {
              <img
                src={PostProps.post.image}
                alt={`Post ${PostProps.post.id}`}
              />
            }
          </PostImg>
        </Button9>
      </PostWrapper2>
      <PanelPost post={somePostData} />
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
              post={{
                id: PostProps.post.id,
                image: PostProps.post.image,
                text: PostProps.post.text,
                date: PostProps.post.date,
                lesson_num: PostProps.post.lesson_num,
                title: PostProps.post.title,
                author: PostProps.post.author,
              }}
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
  width: 370px;
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
  justify-content: space-between;
  margin-bottom: 5px;
`;

const PostWrapper3 = styled.div`
  text-align: initial;
`;

const PostImg = styled.div`
  width: 115px;
  img {
    width: -webkit-fill-available;
  }
`;

const WhiteSquare = styled.div`
  width: 800px;
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

export default Post3;
