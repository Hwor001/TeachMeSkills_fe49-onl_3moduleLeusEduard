import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { BlogContext } from '../../features/blog/blog';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Blog: React.FC<Props> = ({ handleSearch }) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Blog</Title>}
      body={<BlogContext />}
    />
  );
};
