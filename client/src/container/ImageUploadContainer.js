import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import defaultAvatar from '../public/default.png';
import ImageCrop from '../components/resist/ImageCrop';
import { uploadState } from '../modules/imageUpload';
import { useDispatch } from 'react-redux';
const ImageUpload = () => {
  const [avatar, setAvatar] = useState({
    default: defaultAvatar,
  });

  const [cropSrc, setCropSrc] = useState();
  const { preview } = useSelector(({ profileUploadReducer }) => ({
    preview: profileUploadReducer.url,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (cropSrc !== undefined) dispatch(uploadState(cropSrc));
  }, [dispatch, cropSrc]);

  useEffect(() => {
    if (preview) {
      setAvatar({ ...avatar, default: preview });
    }
  }, [preview]);
  const updateCropSrc = (src) => {
    setCropSrc(src);
  };
  return (
    <ContentDiv>
      <LiveText>나의 가장 멋진 사진</LiveText>
      <Preview src={avatar.default} alt="profileImage" />
      <ImageCrop updateCropSrc={updateCropSrc} />
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
`;

export default ImageUpload;
