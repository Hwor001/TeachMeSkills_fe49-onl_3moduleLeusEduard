import styled from 'styled-components';
import image1 from '../../Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';
import { Button8 } from '#ui/button2/button8';
import { Button7 } from '#ui/button/button7';

export const SelectPostFrom: React.FC = () => {
  const postData = () => ({
    id: 1,
    image: image1,
    text: 'Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...',
    date: '2023-08-31',
    lesson_num: 1,
    title: 'Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post',
    author: 1,
  });


  const goToPreviousPost = () => {
    console.log('назад');
  };

  const goToNextPost = () => {
    console.log('вперед');
  };


  const post = postData();

  return (
    
        <SelectPostWrapper>
        <ImgWrapper>
          <img src={post.image} alt="Post" />
        </ImgWrapper>  
          <p>{post.text}</p>
          <ButtonWrapper>
        <Button8 onClick={goToPreviousPost} >
          Назад
        </Button8>
        <Button7 onClick={goToNextPost} >
          Вперед
        </Button7>
      </ButtonWrapper>
      </SelectPostWrapper>
    );
};


const SelectPostWrapper = styled.div`

  & p {
    color: var(--text-primary-color);
  }
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between
`