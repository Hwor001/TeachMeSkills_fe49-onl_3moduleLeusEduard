import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { BlogContext } from '../../features/blog/blog';

export const Blog: React.FC = () => {
  return (
    <MainTemplate
      header={<Header></Header>}
      backLink={<Backlink />}
      title={<Title>Blog</Title>}
      body={<BlogContext />}
    />
  );
};
