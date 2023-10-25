import styled from 'styled-components';
import { Button8 } from '#ui/button2/button8';
import { Button7 } from '#ui/button/button7';
import { RootState } from '../../store1';
import { useSelector } from 'react-redux';
import PanelPost from '../../ui/panelpost/panelpost';
import { Post } from '../auth/types';

interface PostProps {
  posts: Post[];
  post: Post;
}

export const AllPostFrom: React.FC<PostProps> = (PostProps) => {
  const selectedPost = useSelector(
    (state: RootState) => state.Post.selectedPost
  );

  const somePostData = {
    id: selectedPost?.id || 0,
    image: selectedPost?.image || null,
    text: selectedPost?.text || '',
    date: selectedPost?.date || '',
    title: selectedPost?.title || '',
    lesson_num: selectedPost?.lesson_num || 0,
    likes_amount: selectedPost?.likes_amount || 0,
    dislikes_amount: selectedPost?.dislikes_amount || 0,
    user_choice: selectedPost?.user_choice || null,
    author: selectedPost?.author || 0,
  };

  const goToPreviousPost = () => {
    console.log('назад');
  };

  const goToNextPost = () => {
    console.log('вперед');
  };

  return (
    <SelectPostWrapper>
      <ImgWrapper>
        <img src={selectedPost?.image} alt="Post" />
      </ImgWrapper>
      <p>{selectedPost?.text}</p>
      <PanelPost post={somePostData} />
      <ButtonWrapper>
        <Button8 onClick={goToPreviousPost}>Назад</Button8>
        <Button7 onClick={goToNextPost}>Вперед</Button7>
      </ButtonWrapper>
    </SelectPostWrapper>
  );
};

const SelectPostWrapper = styled.div`
  & p {
    color: var(--text-primary-color);
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
