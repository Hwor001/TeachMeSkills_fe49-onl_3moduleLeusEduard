import styled from 'styled-components';
import Post4 from '#ui/post4/post4';
import { useState, useEffect } from 'react';
import { TabPanel2 } from '#ui/tabs/tabs-down';
import image1 from '../../Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';

interface Props {}

const SeachPostForm: React.FC<Props> = () => {
  const tabNumber = [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
  ];
  const [activeNumberId, setActiveNumberId] = useState(tabNumber[0].id);

  const post4Count = 6;

  const [post4Data, setPost4Data] = useState<any[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const postData4 = Array.from({ length: post4Count }, (_, index) => ({
        id: index + 1,
        image: image1,
        text: 'Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...',
        date: '2023-08-31',
        lesson_num: index + 1,
        title:
          'Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post ',
        author: index + 1,
      }));

      setPost4Data(postData4);
    }, 300);
  }, []);

  return (
    <SeachPanelWrapper>
      <LeftWrapper>
        {post4Data &&
          post4Data.map((postData, index) => (
            <Post4 key={index} {...postData} />
          ))}
      </LeftWrapper>
      <TabPanel2
        numbers={tabNumber}
        activeId={activeNumberId}
        onTabClick={setActiveNumberId}
      />
    </SeachPanelWrapper>
  );
};

const SeachPanelWrapper = styled.div`
  width: -webkit-fill-available;
`;

const LeftWrapper = styled.div`
  width: -webkit-fill-available;
`;

export default SeachPostForm;
