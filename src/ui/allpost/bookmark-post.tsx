import styled from 'styled-components';
import Post1 from '#ui/post1/post1';
import Post2 from '#ui/post2/post2';
import Post3 from '#ui/post3/post3';
import { Post } from '#features/auth/types';

type ListOfPostsProps = {
  posts: Post[];
};

export const BookmarkPost: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  const getPostIdAndElement = (id: number) =>
    props.posts.find((item) => item.id === id);
  return (
    <PostWrapper>
      <PostMiddleWrapper>
        {[1, 2, 3, 4].map((element, id) => (
          <Post2 key={id} post={getPostIdAndElement(element)!}></Post2>
        ))}
      </PostMiddleWrapper>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const PostMiddleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
`;

const LeftWrapper = styled.div`
  display: grid;
  align-items: stretch;
`;
