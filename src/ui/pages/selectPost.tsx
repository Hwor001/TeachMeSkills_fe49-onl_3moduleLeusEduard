import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import styled from 'styled-components';
import { Backlink } from '../../features/back-link/back-link';
import { AllPostFrom } from '../../features/select-post-form/select-post-form';
import { useAppSelector } from '#hooks';
import { RootState } from '../../store1';
import { Post } from '../../features/auth/types';
import { useSelector } from 'react-redux';

interface Props {
  handleSearch: (searchText: string) => void;
  posts: Post[];
}

export const SelectPost: React.FC<Props> = ({ handleSearch }) => {
  const { posts } = useAppSelector(({ allPosts }) => allPosts);
  const selectedPost = useSelector(
    (state: RootState) => state.Post.selectedPost
  );

  const selectedPostOrDefault: Post = selectedPost || {
    id: 0,
    image: null,
    text: '',
    date: '',
    lesson_num: 0,
    likes_amount: 0,
    dislikes_amount: 0,
    user_choice: null,
    title: 'Заголовок не доступен',
    author: 0,
  };

  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={
        <TitlewRapper>
          <Title>{selectedPost?.title || 'Заголовок не доступен'}</Title>
        </TitlewRapper>
      }
      body={<AllPostFrom posts={posts} post={selectedPostOrDefault} />}
    />
  );
};

const TitlewRapper = styled.div`
  text-align: center;
  margin-bottom: 15px;

  & h1 {
    margin: 0;
  }
`;
