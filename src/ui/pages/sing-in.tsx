import { Header } from "#ui/seach/seach"
import { MainTemplate } from "#ui/templates/main-template"
import { Title } from "#ui/title/title"
import { Backlink } from "../../features/back-link/back-link"
import { SingInForm } from "../../features/sing-in-form/sing-in-form"

export const SingIn: React.FC = () => {
   return <MainTemplate 
   header={<Header></Header>} 
   backLink={<Backlink/>} 
   title={<Title>Sing In</Title>} 
   body={<SingInForm/>}
   />
}