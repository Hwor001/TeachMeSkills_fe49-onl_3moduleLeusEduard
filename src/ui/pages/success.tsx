import { Button3 } from "#ui/button/button3"
import { MainTemplate } from "#ui/templates/main-template"
import { Title } from "#ui/title/title"
import { Backlink } from "../../features/back-link/back-link"

export const Registration: React.FC = () => {
   const handleButtonClick = () => {
      
   };
   return <MainTemplate 
   header={<header style={{width:'100%;', height:'40px'}}>Header</header>} 
   backLink={<Backlink/>} 
   title={<Title>Registration Confirmation</Title>} 
   body={<Button3 onClick={handleButtonClick}>Go home</Button3>}
   />
}