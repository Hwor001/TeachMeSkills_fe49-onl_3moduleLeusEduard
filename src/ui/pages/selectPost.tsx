import { Header } from "#ui/seach/seach"
import { MainTemplate } from "#ui/templates/main-template"
import { Title } from "#ui/title/title"
import styled from "styled-components"
import { Backlink } from "../../features/back-link/back-link"
import { SelectPostFrom } from "../../features/select-post-form/select-post-form"

export const SelectPost: React.FC = () => {
   return <MainTemplate 
   header={<Header></Header>} 
   backLink={<Backlink/>} 
   title={<TitlewRapper>
   <Title>Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post</Title></TitlewRapper>} 
   body={<SelectPostFrom/>}
   />
}

const TitlewRapper = styled.div`
   text-align: center;
   margin-bottom: 15px;
   
   & h1 {
      margin: 0;
   }
`