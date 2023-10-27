import { Button3 } from '#ui/button/button3';
import { Link } from 'react-router-dom';
import Header from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Registration: React.FC<Props> = ({ handleSearch }) => {
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch} />}
      backLink={<Backlink />}
      title={<Title>Registration Confirmation</Title>}
      body={
        <Link to="/sing-in">
          <Button3 onClick={() => null} role="presentation">
            Go home
          </Button3>
        </Link>
      }
    />
  );
};
