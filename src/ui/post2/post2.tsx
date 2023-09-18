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

const Post2: React.FC<Props> = (props) => {
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
        <PostWrapper3>
          {image && <img src={image} alt={`Post ${id}`} />}
          <p>{date}</p>
          <h3>{truncateText(title, 70)}</h3>
        </PostWrapper3>
      </PostWrapper2>
      <PanelPost />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  width: 370px;
  color: black;
  padding: 15px;

  & p,
  h3 {
    margin: 0 0 5px 0;
    color: var(--text-primary-color);
  }
  & span {
    font-size: 17px;
    color: var(--text-primary-color);
  }
`;

const PostWrapper2 = styled.div`
  margin-bottom: 5px;
`;

const PostWrapper3 = styled.div`
  text-align: initial;
  img {
    width: -webkit-fill-available;
  }
`;

export default Post2;
