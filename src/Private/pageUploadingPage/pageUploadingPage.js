import React, { useState } from "react";
import "./pageUploadingPage.css";

const PageUploadingPage = () => {
  const password = "123456789";
  const [showContent, setShowContent] = useState(false);
  const [noOfDescription, setNoOfDescription] = useState(1);
  const handlePhotoChange = (e, id) => {
    let img = document.getElementById(id);

    img.src = URL.createObjectURL(e.target.files[0]);
  };
  const checkPassword = () => {
    if (password === document.getElementById("passwordInput").value) {
      setShowContent(true);
    }
  };
  const OutputForDescription = () => {
    let outputForDescription = [];
    for (let i = 0; i < parseInt(noOfDescription); i++) {
      outputForDescription.push(
        <>
          <input className="inputField" type="text" placeholder="title" />
          <input className="inputField" type="text" placeholder="value" />
        </>
      );
    }
    return outputForDescription;
  };

  //<input className="inputField" type="text" placeholder="title" />
  // <input className="inputField" type="text" placeholder="value" />
  return (
    <div className="mainDiv">
      <h1>This is product uploading page</h1>
      {!showContent ? (
        <div className="productNameDiv">
          <input type="text" id="passwordInput" placeholder="Password" />
          <button onClick={() => checkPassword()}>Enter</button>
        </div>
      ) : (
        <div className="mainDiv">
          <div className="productNameDiv">
            <label>Product Name</label>
            <input
              className="inputField"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="productNameDiv">
            <label>previous price</label>
            <input
              className="inputField"
              type="number"
              placeholder="previous price"
            />
          </div>
          <div className="productNameDiv">
            <label>Actual price</label>
            <input
              className="inputField"
              type="number"
              placeholder="Actual price"
            />
          </div>
          <div className="productNameDiv">
            <label>
              Main picture. Try your best to make the image a square
            </label>
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput");
                console.log(e);
              }}
              accept="image/*"
            />
            <img className="imagePreview" id="imageInput" alt="" />
          </div>
          <div className="productNameDiv">
            <label>Choose three photo with 16:9 ratio</label>
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput1");
                console.log(e);
              }}
              accept="image/*"
            />
            <img className="imagePreview" id="imageInput1" alt="" />
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput2");
                console.log(e);
              }}
              accept="image/*"
            />
            <img className="imagePreview" id="imageInput2" alt="" />
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput3");
                console.log(e);
              }}
              accept="image/*"
            />

            <img className="imagePreview" id="imageInput3" alt="" />
          </div>
          <div className="productNameDiv">
            <input
              className="inputField"
              type="number"
              placeholder="no of description"
              value={noOfDescription}
              onChange={(e) => setNoOfDescription(e.target.value)}
            />
            <label>Description</label>
            <OutputForDescription />
          </div>
        </div>
      )}
    </div>
  );
};

export default PageUploadingPage;
