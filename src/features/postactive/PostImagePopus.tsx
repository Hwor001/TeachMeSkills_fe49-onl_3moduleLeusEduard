import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedImage } from './Image.slice';
import { RootState } from '../../store1';

export const PostImagePopup: React.FC<{
  isImageVisible: boolean;
  setImageVisible: (value: boolean) => void;
}> = ({ isImageVisible, setImageVisible }) => {
  const selectedImage = useSelector(
    (state: RootState) => state.Image.selectedImage
  );
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(clearSelectedImage());
    setImageVisible(false);
  };

  return (
    <PopupWrapper>
      <button className="close-button" onClick={handleClosePopup}>
        Close
      </button>
      <p>{selectedImage?.id}</p>
      <Imgwrapper>
        {<img src={selectedImage?.image} alt={`Post ${selectedImage?.id}`} />}
      </Imgwrapper>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  width: 770px;
  height: 100px;
`;

const Imgwrapper = styled.div`
  width: 180px;
  display: contents;
`;
