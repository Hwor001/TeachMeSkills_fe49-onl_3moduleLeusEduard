import { TabPanel } from '#ui/tabs/tads-panel';
import { useState } from 'react';
import styled from 'styled-components';
import { TabPanel2 } from '#ui/tabs/tabs-down';
import { Post } from '#features/auth/types';
import { AllPosts } from '#ui/allpost/all-posts';
import { BookmarkPost } from '#ui/allpost/bookmark-post';
import { PopularPosts } from '#ui/allpost/popular-post';

type ListOfPostsProps = {
  posts: Post[];
};

export const BlogContext: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  const { posts } = props;
  const tabItems = [
    { id: 'All', title: 'All' },
    { id: 'My favorites', title: 'My favorites' },
    { id: 'Popular', title: 'Popular' },
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

  return (
    <AllPostAndPanelWrapper>
      <TabsWpapper>
        <TabPanel
          items={tabItems}
          activeId={activeTabId}
          onTabClick={setActiveTabId}
        />
      </TabsWpapper>
      {activeTabId === 'All' ? <AllPosts posts={posts} /> : null}
      {activeTabId === 'My favorites' ? <BookmarkPost posts={posts} /> : null}
      {activeTabId === 'Popular' ? <PopularPosts posts={posts} /> : null}
      <TabPanel2
        numbers={tabNumber}
        activeId={activeNumberId}
        onTabClick={setActiveNumberId}
        //   => {
        //   setActiveNumberId(activeId);
        //   if (activeId === '2') {
        //     navigate('/blog2');
        //   }
        // }
      />
    </AllPostAndPanelWrapper>
  );
};

const AllPostAndPanelWrapper = styled.div`
  width: -webkit-fill-available;
`;

const TabsWpapper = styled.div`
  margin-left: -100px;
`;

export default BlogContext;
