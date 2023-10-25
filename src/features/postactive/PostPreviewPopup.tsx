import PanelPost from '#ui/panelpost/panelpost';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearSelectedPost } from './Post.slice';
import { RootState } from '../../store1';
import { Post } from '../../features/auth/types';

interface PostProps {
  post: Post;
}

export const PostPreviewPopup: React.FC<
  {
    isPreviewVisible: boolean;
    setPreviewVisible: (value: boolean) => void;
  } & PostProps
> = ({ isPreviewVisible, setPreviewVisible, post }) => {
  const selectedPost = useSelector(
    (state: RootState) => state.Post.selectedPost
  );
  const dispatch = useDispatch();

  function truncateText(title: string, maxChars: number): string {
    if (title.length <= maxChars) {
      return title;
    }
    const truncatedText = title.substring(0, maxChars);
    return `${truncatedText}...`;
  }

  const somePostData = {
    id: post.id,
    image: post.image,
    text: post.text,
    date: post.date,
    lesson_num: post.lesson_num,
    likes_amount: post.likes_amount,
    dislikes_amount: post.dislikes_amount,
    user_choice: post.user_choice,
    title: post.title,
    author: post.author,
  };

  const handleClosePopup = () => {
    dispatch(clearSelectedPost());
    setPreviewVisible(false);
  };

  return (
    <PostWrapper>
      <button className="close-button" onClick={handleClosePopup}>
        Close
      </button>
      <PostWrapper2>
        <PostWrapper3>
          <p>{selectedPost?.id}</p>
          <p>{selectedPost?.date}</p>
          <h2>{truncateText(selectedPost?.title || '', 80)}</h2>
          <p>{selectedPost?.text}</p>
        </PostWrapper3>
        {selectedPost?.image && (
          <PostImg>
            <img src={selectedPost?.image} alt={`Post ${selectedPost?.id}`} />
          </PostImg>
        )}
      </PostWrapper2>
      <PanelPost post={somePostData} />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  color: black;
  width: 770px;
  padding: 15px;

  & p,
  h2 {
    margin: 0 0 5px 0;
    color: var(--text-primary-color);
  }
  & span {
    font-size: 17px;
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
  width: 244px;
  img {
    width: -webkit-fill-available;
  }
`;

export default PostPreviewPopup;
