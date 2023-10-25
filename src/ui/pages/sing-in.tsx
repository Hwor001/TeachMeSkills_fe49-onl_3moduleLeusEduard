import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { SingInForm } from '../../features/sing-in-form/sing-in-form';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const SingIn: React.FC<Props> = ({ handleSearch }) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Sing In</Title>}
      body={<SingInForm />}
    />
  );
};
