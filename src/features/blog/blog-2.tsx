import { TabPanel } from '#ui/tabs/tads-panel';
import { useState, useEffect } from 'react';
import Post2 from '#ui/post2/post2';
import Post3 from '#ui/post3/post3';
import styled from 'styled-components';
import image1 from '../../Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';
import { TabPanel2 } from '#ui/tabs/tabs-down';
import { useNavigate } from 'react-router-dom';

export const BlogContext2: React.FC = () => {
  const navigate = useNavigate();
  const tabItems = [
    { id: '1', title: 'All' },
    { id: '2', title: 'My favorites' },
    { id: '3', title: 'Popular' },
  ];

  const tabNumber = [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
  ];

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  const [activeNumberId, setActiveNumberId] = useState(tabNumber[0].id);

  const post2Count = 6;
  const post3Count = 6;

  const [post2Data, setPost2Data] = useState<any[] | null>(null);
  const [post3Data, setPost3Data] = useState<any[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const postData2 = Array.from({ length: post2Count }, (_, index) => ({
        id: index + 1,
        image: image1,
        text: 'Post content here...',
        date: '2023-08-31',
        lesson_num: index + 1,
        title: 'Example Post Example Post Example Post Example Post',
        author: index + 1,
      }));

      const postData3 = Array.from({ length: post3Count }, (_, index) => ({
        id: index + 1,
        image: image1,
        text: 'Post content here...',
        date: '2023-08-31',
        lesson_num: index + 1,
        title: 'Example Post Example Post Example Post Example Post',
        author: index + 1,
      }));

      setPost2Data(postData2);
      setPost3Data(postData3);
    }, 300);
  }, []);

  return (
    <AllPostAndPanelWrapper>
      <TabPanel
        items={tabItems}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
      <PostWrapper>
        <PostMiddleWrapper>
          {post2Data &&
            post2Data.map((postData, index) => (
              <Post2 key={index} {...postData} />
            ))}
        </PostMiddleWrapper>
        <PostsmallWrapper>
          {post3Data &&
            post3Data.map((postData, index) => (
              <Post3 key={index} {...postData} />
            ))}
        </PostsmallWrapper>
      </PostWrapper>
      <TabPanel2
        numbers={tabNumber}
        activeId={activeNumberId}
        onTabClick={(activeId) => {
          setActiveNumberId(activeId);
          if (activeId === '1') {
            navigate('/blog');
          }
        }}
      />
    </AllPostAndPanelWrapper>
  );
};

const AllPostAndPanelWrapper = styled.div``;

const PostWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const PostMiddleWrapper = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(2, 400px);
`;

const PostsmallWrapper = styled.div`
  display: grid;
  align-items: stretch;
`;

export default BlogContext2;
