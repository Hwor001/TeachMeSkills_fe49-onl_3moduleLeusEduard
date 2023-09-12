import { TabPanel } from '#ui/tabs/tads-panel';
import { useState } from 'react';
import Post from '#ui/post1/post1';
import Post2 from '#ui/post2/post2';
import Post3 from '#ui/post3/post3';
import styled from 'styled-components';
import image1 from '../../Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';
import { TabPanel2 } from '#ui/tabs/tabs-down';

export const BlogContext: React.FC = () => {
  const tabItems = [
    {id:'1',title:'All'},
    {id:'2',title:'My favorites'},
    {id:'3',title:'Popular'},
  ]
  
  const tabNumber = [
    {id:'1',title:'1'},
    {id:'2',title:'2'},
    {id:'3',title:'3'},
    {id:'4',title:'4'},
    {id:'5',title:'5'},
  ]

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id)
  const [activeNumberId, setActiveNumberId] = useState(tabNumber[0].id)  
  
  const post1Count = 1; 
  const post2Count = 4; 
  const post3Count = 6; 

  const post1Data = Array.from({ length: post1Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  const post2Data = Array.from({ length: post2Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  const post3Data = Array.from({ length: post3Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  return (
    <form>
      <TabPanel 
        items={tabItems}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
      <PostWrapper>
        <RightWrapper>
          {post1Data.map((postData, index) => (
            <Post key={index} {...postData} />
          ))}
          <PostMiddleWrapper>
            {post2Data.map((postData, index) => (
              <Post2 key={index} {...postData} />
          ))}
          </PostMiddleWrapper>
        </RightWrapper>
        <LeftWrapper>
        {post3Data.map((postData, index) => (
          <Post3 key={index} {...postData} />
        ))}
        </LeftWrapper>
      </PostWrapper>
      <TabPanel2 
      numbers={tabNumber}
      activeId={activeNumberId}
      onTabClick={setActiveNumberId}
      />
    </form>
  );
}

const PostWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center; 
`

const RightWrapper = styled.div`
  display: grid;
  align-items: stretch;
  justify-content: center;
`
const PostMiddleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
`

const LeftWrapper = styled.div`
  display: grid
  align-items: stretch;
`

export default BlogContext;