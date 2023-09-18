import React from 'react';
import styled from 'styled-components';
import PanelPost from '../panelpost/panelpost';

interface Props {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

const Post4: React.FC<Props> = (props) => {
  const { id, image, text, date, lesson_num, title, author } = props;

  function truncateText(title: string, maxChars: number): string {
    if (title.length <= maxChars) {
      return title;
    }
    const truncatedText = title.substring(0, maxChars);
    return `${truncatedText}...`;
  }

  return (
    <PostWrapper>
      <PostWrapper2>
        <PostImg>{image && <img src={image} alt={`Post ${id}`} />}</PostImg>
        <PostWrapper3>
          <p>{date}</p>
          <h3>{truncateText(title, 215)}</h3>
        </PostWrapper3>
      </PostWrapper2>
      <PanelPost />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  color: black;
  width: 100%;
  padding: 15px;
  & span {
    font-size: 17px;
    color: var(--text-primary-color);
  }
  & p,
  h3 {
    margin: 0 0 5px 0;
    color: var(--text-primary-color);
  }
`;

const PostWrapper2 = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PostWrapper3 = styled.div`
  text-align: initial;
`;

const PostImg = styled.div`
  width: 180px;
  padding: 0 25px 0 0;
  img {
    width: -webkit-fill-available;
  }
`;

export default Post4;
