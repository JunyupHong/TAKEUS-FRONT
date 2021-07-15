/* eslint-disable arrow-parens */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AddDogCard from "components/atoms/AddDogCard";

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
  `,
};

const AddDogCardContainer = ({ setEnrollData, name }) => {
  const [photo, setPhoto] = useState(null);
  const [photoFile, setPhotoFile] = useState([]);
  const [photoArray, setPhotoArray] = useState([1, 0, 0, 0, 0]);
  function photoHandle(e) {
    const newFile = e.target.files;
    (async () => {
      setPhoto(newFile);
    })();
    (async () => {
      arrayHandle(newFile);
    })();
  }

  function photoStore(e) {
    const formData = new FormData();
    formData.append("image", e.target.files);
    setPhotoFile([...photoFile, formData]);
  }

  const nextId = useRef(0);
  function arrayHandle(photo) {
    const idPhoto = {
      id: nextId.current,
      photo,
    };
    if (photo !== null) {
      setPhotoArray([idPhoto, ...photoArray]);
      setEnrollData(
        name,
        [idPhoto, ...photoArray]
          .filter((v) => isNaN(v))
          .map((v) => console.log(v["photo"]["0"]["name"]))
      );
    }
    nextId.current += 1;
  }

  function deleteHandle(e) {
    const deletedKey = e.target.nextSibling.dataset.key;
    setPhotoArray(
      photoArray.filter((photo) => photo.id !== parseInt(deletedKey, 10))
    );
  }

  console.log(photo);

  useEffect(() => {
    setEnrollData(name, photoFile);
  }, [photoFile]);

  return (
    <Styled.Wrapper>
      <>
        {photoArray.map((value, i) =>
          i < 5 ? (
            <AddDogCard
              key={i}
              value={value}
              photoHandle={photoHandle}
              deleteHandle={deleteHandle}
              photoStore={photoStore}
            />
          ) : null
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
