import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import defaultAvatar from '../../../public/default.png';
import ImageCrop from '../../utils/ImageCrop';
import axios from 'axios';

const ImageUpload = ({ onChange }) => {
  const [blobData, setBlobData] = useState();
  const { profileImage } = useSelector(({ registerReduce }) => ({
    profileImage: registerReduce.profileImage,
  }));

  useEffect(() => {
    onChange(onChange('profileImage', defaultAvatar));
  }, []);

  useEffect(() => {
    if (blobData) {
      const formData = new FormData();
      formData.append('profile_img', blobData);
      axios
        .post('/api/users/upload', formData, {
          header: { 'content-type': 'multipart/form-data' },
        })
        .then((response) => {
          console.log({ response });
          onChange('profileImage', response.data.image);
        });
    }
  }, [blobData]);

  let conditionImage = () => {
    return profileImage[0] === 'u'
      ? `http://localhost:7000/${profileImage}`
      : profileImage;
  };

  return (
    <ContentDiv>
      <LiveText>나의 가장 멋진 사진</LiveText>
      <Preview src={conditionImage()} alt="profileImage" />
      <ImageCrop setBlobData={setBlobData} />
    </ContentDiv>
  );
};

const LiveText = styled.h2`
  font-size: 60px;
  color: #404548;
  font-weight: 300;
  text-align: center;
  width: 710px;
`;

const Preview = styled.img`
  margin-left: 0px;
  height: 300px;
  width: 300px;
  background: #d8d8d8;
  border-radius: 39px;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export default ImageUpload;
