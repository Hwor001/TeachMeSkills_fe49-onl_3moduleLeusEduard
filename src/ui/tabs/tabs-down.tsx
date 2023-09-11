import { Button6 } from '#ui/button2/button6';
import { Button5 } from '#ui/button2/button5';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

type Number ={ 
   id:string; 
   title:string;
}

type Props = {
   numbers: Number[];
   activeId: string;
   onTabClick: (id: string) => void;
}

export const TabPanel2: React.FC<Props> = ({numbers, activeId, onTabClick}) => {
   const [activeIndex, setActiveIndex] = useState(numbers.findIndex((number) => number.id === activeId));
   
   const PrevClick = () => {
      if (activeIndex > 0) {
         const newIndex = activeIndex - 1;
         setActiveIndex(newIndex);
         onTabClick(numbers[newIndex].id);
       }
   }
   const NextClick = () => {
      if (activeIndex < numbers.length - 1) {
         const newIndex = activeIndex + 1;
         setActiveIndex(newIndex);
         onTabClick(numbers[newIndex].id);
       }
   }
   return (
   <TabPanel2ButtonWrapper>
      <Button5 onClick={PrevClick}>Назад</Button5>
   <TabPanel2Wrapper>
      {numbers.map(({id, title})=>(
      <Tab key={id} id={id} title={title} isActive={id === activeId} onClick={onTabClick}/>
      ))}
   </TabPanel2Wrapper>
      <Button6 onClick={NextClick}>Вперед</Button6>
   </TabPanel2ButtonWrapper>
   )
}

const css = String.raw;

const TabPanel2Wrapper = styled.ul`
   all: unset;
   display: flex;
   color: black;
   background-color: white;

   & > * + * {
      margin-inline-start: 15px;
   }

   &:active {
      color:
   }
`

const TabPanel2ButtonWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`

type TabProps = Number & {
   isActive: boolean;
   onClick: (id:string) => void;
};

const Tab: React.FC<TabProps> = ({id, title, isActive, onClick}) => {
   return <TabWrapper $isActive={isActive}>
      <TabButton type='button' onClick={()=>onClick(id)}>
      {title}</TabButton>
   </TabWrapper>
}

const TabWrapper = styled.li<{ $isActive:boolean}>`
   display: block;
   border-bottom: ${({$isActive})=>{return $isActive && css`1px solid black`}}
`

const TabButton = styled.button`
   all: unset;
   cursor: pointer; 
   padding: 5px;

   &:hover {
      color: blue;
   }

   &:active{
      color: silver;
   }
`