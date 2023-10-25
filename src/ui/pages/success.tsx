import { Button3 } from '#ui/button/button3';
import { useNavigate } from 'react-router-dom';
import Header from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Success: React.FC<Props> = ({ handleSearch }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/blog');
  };
  return (
    <MainTemplate
      header={<Header handleSearch={handleSearch} />}
      backLink={<Backlink />}
      title={<Title>Success</Title>}
      body={<Button3 onClick={handleButtonClick}>Go home</Button3>}
    />
  );
};
