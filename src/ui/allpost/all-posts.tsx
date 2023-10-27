import styled from 'styled-components';
import Post1 from '#ui/post1/post1';
import Post2 from '#ui/post2/post2';
import Post3 from '#ui/post3/post3';
import { Post } from '#features/auth/types';

type ListOfPostsProps = {
  posts: Post[];
};

export const AllPosts: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  const getPostIdAndElement = (id: number) =>
    props.posts.find((item) => item.id === id);

  const getHalfOfCards = (part: 'left' | 'down' | 'right'): number[] => {
    const identifiers = props.posts.map((element) => element.id);

    switch (part) {
      case 'left':
        return identifiers.slice(0, 1);
      case 'down':
        return identifiers.slice(1, 5);
      case 'right':
        return identifiers.slice(5, 11);
      default:
        return [];
    }
  };

  return (
    <PostWrapper>
      <RightWrapper>
        {getHalfOfCards('left').map((element, id) => (
          <Post1 key={id} post={getPostIdAndElement(element)!}></Post1>
        ))}
        <PostMiddleWrapper>
          {getHalfOfCards('down').map((element, id) => (
            <Post2 key={id} post={getPostIdAndElement(element)!}></Post2>
          ))}
        </PostMiddleWrapper>
      </RightWrapper>
      <LeftWrapper>
        {getHalfOfCards('right').map((element, id) => (
          <Post3 key={id} post={getPostIdAndElement(element)!}></Post3>
        ))}
      </LeftWrapper>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const RightWrapper = styled.div`
  display: grid;
  align-items: stretch;
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
