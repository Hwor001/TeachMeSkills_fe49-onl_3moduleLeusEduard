import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { BlogContext } from '../../features/blog/blog';
import { useAppDispatch, useAppSelector } from '#hooks';
import { useEffect } from 'react';
import { getAllposts } from '../../features/postactive/all-post.slice';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Blog: React.FC<Props> = ({ handleSearch }) => {
  const dispatch = useAppDispatch();
  const { posts, isLoading } = useAppSelector(({ allPosts }) => allPosts);

  useEffect(() => {
    dispatch(getAllposts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (posts.length === 0) {
    return <div>Постов нет</div>;
  }

  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Blog</Title>}
      body={<BlogContext posts={posts} />}
    />
  );
};
