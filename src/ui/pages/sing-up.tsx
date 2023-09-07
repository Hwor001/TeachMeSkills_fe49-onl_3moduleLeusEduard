import { MainTemplate } from "#ui/templates/main-template"
import { Title } from "#ui/title/title"
import { Backlink } from "../../features/back-link/back-link"
import { SingUpForm } from "../../features/sing-up-form/sing-up-form"

export const SingUp: React.FC = () => {
   return <MainTemplate 
   header={<header style={{width:'100%;', height:'40px'}}>Header</header>} 
   backLink={<Backlink/>} 
   title={<Title>Sing Up</Title>} 
   body={<SingUpForm/>}
   />
}