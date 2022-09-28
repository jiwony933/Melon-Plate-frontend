import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../../Components/ReviewList/ReviewList';
import Melon from './Melon';
import './ReviewWrite.scss';

const ReviewWrite = () => {
  const params = useParams();
  const [melonPoint, setMelonPoint] = useState(10);
  const [images, setImages] = useState([]);
  const [imgLength, setImgLength] = useState(0);
  const [text, setText] = useState('');
  const [originPhoto, setOriginPhoto] = useState([]);
  const textLength = text.length;
  const greenMelon = `${process.env.PUBLIC_URL}/images/20596969-F8C3-4D15-9D89-16ECCE2090F5.jpeg`;
  const grayMelon = `${process.env.PUBLIC_URL}/images/07E08BB9-5390-41B4-9270-DC83C7D8ACE2.jpeg`;

  const formData = new FormData();
  originPhoto.forEach(photo => {
    formData.append('reviewImg', photo);
  });
  formData.append('rate', melonPoint);
  formData.append('text', text);

  const formGo = async e => {
    e.preventDefault();
    await fetch(`http://192.168.239.167:8000/review/new/1`, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
      },
      cache: 'no-cache',
      body: formData,
    }).then(res => res.json());
    localStorage.removeItem('text');
  };
  const textCount = e => {
    setText(e.target.value);
  };

  const saveText = e => {
    e.preventDefault();
    localStorage.removeItem('text');
    localStorage.setItem('text', text);
  };

  const saveImages = e => {
    const fileArr = e.target.files;
    setOriginPhoto(originPhoto.concat(...fileArr));
    let fileURLs = [];
    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs.push(reader.result);
        setImages([...fileURLs, ...images]);
      };

      reader.readAsDataURL(file);
    }
  };

  const Vialed = textLength > 0;

  const deleteImage = clickedImage => {
    const imgIdx = images.findIndex(img => img === clickedImage);
    setImages(images.filter((_, idx) => idx !== imgIdx));
    setOriginPhoto(originPhoto.filter((_, idx) => idx !== imgIdx));
  };

  useEffect(() => {
    setImgLength(images.length);
    if (images.length > 10) {
      setImages(images.splice(0, 10));
    }
  }, [images]);

  useEffect(() => {
    if (textLength > 50000) {
      alert('리뷰는 50000자 이상 넘어갈수 없습니다.');
    }
  }, [textLength]);

  useEffect(() => {
    if (localStorage.getItem('text')) {
      setText(localStorage.getItem('text'));
    }
  }, []);

  return (
    <div className="reviewWrite">
      <form className="reviewWritePage" name="reviewImg">
        <div className="store">
          <span className="storeName">{params.name} </span>
          <span>에 대한 솔직한 리뷰를 써주세요</span>
        </div>
        <div className="melon">
          <div className="point">
            <div className="pointResult">
              <Melon Melon={grayMelon} />
              <Melon Melon={grayMelon} />
              <Melon Melon={grayMelon} />
              <Melon Melon={grayMelon} />
              <Melon Melon={grayMelon} />
              <input
                type="range"
                value={melonPoint}
                step="1"
                min="0"
                max="10"
                onChange={e => {
                  setMelonPoint(e.target.value);
                }}
              />
            </div>
            <div
              className="pointResultSpan"
              style={{ width: `${melonPoint * 10}%` }}
            >
              <Melon Melon={greenMelon} />
              <Melon Melon={greenMelon} />
              <Melon Melon={greenMelon} />
              <Melon Melon={greenMelon} />
              <Melon Melon={greenMelon} />
            </div>
          </div>
          <div className="review">
            <textarea
              placeholder="서비스도 궁금해요"
              value={text}
              className="reviewInput"
              onChange={textCount}
            />
            <span className="span">{textLength}/50000</span>
          </div>
        </div>
        <div className="photo">
          <div className="photoInner">
            <div>
              <label htmlFor="file" className="photoInnerLabel">
                <div className="photoInnerLength">{imgLength}/10</div>
                <div className="photoInnerInputFile">
                  <i className="fa-regular fa-image" />
                </div>
              </label>
              <input
                type="file"
                id="file"
                multiple="multiple"
                className="photoInnerInput"
                onChange={saveImages}
              />
            </div>
            <ul className="photoInnerPhotos">
              {images.map((el, i) => (
                <li key={i} className="photoInnerPhotosList">
                  <img
                    src={el}
                    className="photoInnerPhotosImg"
                    alt="melonImg"
                  />
                  <button
                    className="photoInnerPhotosBtn"
                    type="button"
                    onClick={() => deleteImage(el)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="result">
          <button
            className={!Vialed ? 'btn' : 'btnChange'}
            disabled={!Vialed}
            onClick={saveText}
          >
            나중에 이어쓰기
          </button>
          <div>
            <button className="btnCancel">취소</button>
            <button
              className={!Vialed ? 'btnReview' : 'btnReviewChange'}
              disabled={!Vialed}
              onClick={formGo}
            >
              리뷰 올리기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewWrite;
