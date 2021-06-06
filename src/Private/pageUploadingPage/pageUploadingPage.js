import React, { useEffect, useState } from "react";
import "./pageUploadingPage.css";
import Axios from "axios";
const PageUploadingPage = () => {
  const [values, setValues] = useState({
    prouctName: "",
    prevPrice: 0,
    currPrice: 0,
    description: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    // Axios.get("http://localhost:4000/test")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
    // Axios.post("http://localhost:4000/post", {
    //   message: "This is post example",
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const OutputForDescription = () => {
    let outputForDescription = [];
    for (let i = 0; i < parseInt(noOfDescription); i++) {
      outputForDescription.push(
        <div style={{ width: "100%" }} key={i}>
          <input className="inputField" type="text" placeholder="title" />
          <input className="inputField" type="text" placeholder="value" />
        </div>
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
        <form className="mainDiv">
          <div className="productNameDiv">
            <label>Product Name</label>
            <input
              className="inputField"
              type="text"
              placeholder="Product Name"
              value={values.prouctName}
              onChange={(e) =>
                setValues({ ...values, prouctName: e.target.value })
              }
            />
          </div>
          <div className="productNameDiv">
            <label>previous price</label>
            <input
              className="inputField"
              type="number"
              placeholder="previous price"
              value={values.prevPrice}
              onChange={(e) =>
                setValues({ ...values, prevPrice: e.target.value })
              }
            />
          </div>
          <div className="productNameDiv">
            <label>Actual price</label>
            <input
              className="inputField"
              type="number"
              placeholder="Actual price"
              value={values.currPrice}
              onChange={(e) =>
                setValues({ ...values, currPrice: e.target.value })
              }
            />
          </div>
          <div className="productNameDiv">
            <label>Description about the product in hand</label>
            <textarea
              className="inputField"
              type="text"
              placeholder="Product Name"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
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
          <button onSubmit={(e) => handleSubmit(e)}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default PageUploadingPage;
