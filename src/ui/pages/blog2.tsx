import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { BlogContext2 } from '../../features/blog/blog-2';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Blog2: React.FC<Props> = ({ handleSearch }) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Blog</Title>}
      body={<BlogContext2 />}
    />
  );
};
