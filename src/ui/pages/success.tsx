import { Button3 } from '#ui/button/button3';
import Header from '#ui/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Backlink } from '../../features/back-link/back-link';

export const Success: React.FC = () => {
  const handleButtonClick = () => {};
  return (
    <MainTemplate
      header={<Header />}
      backLink={<Backlink />}
      title={<Title>Success</Title>}
      body={<Button3 onClick={handleButtonClick}>Go home</Button3>}
    />
  );
};
