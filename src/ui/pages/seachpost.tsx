import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import SeachPostForm from '../../features/seach-post-form/seach-post-form';

interface Props {
  handleSearch: (searchText: string) => void;
  searchResultsText: string;
}

export const SeachPost: React.FC<Props> = ({
  handleSearch,
  searchResultsText,
}) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Seach results '{searchResultsText}'</Title>}
      body={<SeachPostForm />}
    />
  );
};
