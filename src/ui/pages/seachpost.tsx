import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import SeachPostForm from '../../features/seach-post-form/seach-post-form';

export const SeachPost: React.FC = () => {
  return (
    <MainTemplate
      header={<Header></Header>}
      backLink={<Backlink />}
      title={<Title>Seach results </Title>}
      body={<SeachPostForm />}
    />
  );
};
