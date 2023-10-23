import { Header } from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';
import { SingUpForm } from '../../features/sing-up-form/sing-up-form';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const SingUp: React.FC<Props> = ({ handleSearch }) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch}></Header>}
      backLink={<Backlink />}
      title={<Title>Sing Up</Title>}
      body={<SingUpForm />}
    />
  );
};
