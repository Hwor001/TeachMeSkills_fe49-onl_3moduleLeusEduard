import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { BlogContext2 } from '../../features/blog/blog-2';

export const Blog2: React.FC = () => {
  return (
    <MainTemplate
      header={<Header></Header>}
      backLink={<Backlink />}
      title={<Title>Blog</Title>}
      body={<BlogContext2 />}
    />
  );
};
