import React, { useEffect, useState } from "react";
import "./pageUploadingPage.css";
import Axios from "axios";
import AddedTocart from "../../Components/addedToCart/addedTocart.js";
const PageUploadingPage = () => {
  const password = "123456789";
  const [showContent, setShowContent] = useState(false);
  const [noOfDescription, setNoOfDescription] = useState(5);
  const [images, setImages] = useState(["", "", "", ""]);
  const [showMessages, setShowMessages] = useState([false, ""]);
  const [values, setValues] = useState({
    prouctName: "",
    prevPrice: "",
    currPrice: "",
    noOfItems: 1,
    description: "",
    productDetails: new Array(noOfDescription).fill({ title: "", value: "" }),
    // cartImage: "",
    // otherImages: ["", "", ""],
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    // Axios.get("http://localhost:4000/test")4!5%$3YekT&v&@mY%bTe
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

  const handlePhotoChange = (e, id, imagesID) => {
    // let img = document.getElementById(id);
    let file = e.target.files[0];
    if (file !== undefined) {
      if (file.size / 1000 > 1024) {
        alert("The image must be less than 1 mb");
      } else {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          // console.log(fileReader.result);
          // img.src = fileReader.result;
          setImages([
            ...images.slice(0, imagesID),
            fileReader.result,
            ...images.slice(imagesID + 1, images.length),
          ]);
        };
        fileReader.readAsDataURL(file);
      }
    }
    // img.src = URL.createObjectURL(e.target.files[0]);
  };
  const checkPassword = () => {
    if (password === document.getElementById("passwordInput").value) {
      setShowContent(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.prouctName !== "") {
      if (values.prevPrice !== "") {
        if (values.currPrice !== "") {
          if (values.description !== "") {
            if (images[0] !== "") {
              if (images[1] !== "" && images[2] !== "" && images[3] !== "") {
                if (values.noOfItems > 0) {
                  let allValueOfProductDetailsEmpty = true;
                  for (let i = 0; i < values.productDetails.length; i++) {
                    if (
                      values.productDetails[i].title === "" ||
                      values.productDetails[i].value === ""
                    ) {
                      allValueOfProductDetailsEmpty = false;
                      break;
                    }
                  }
                  if (allValueOfProductDetailsEmpty) {
                    let img = new Image();
                    img.src = images[0];
                    if (img.naturalWidth === img.naturalHeight) {
                      Axios.post("http://localhost:4000/products", {
                        ...values,
                        cartImage: images[0],
                        otherImages: [...images.slice(1, images.length)],
                      })
                        .then((res) => console.log(res.data))
                        .catch((err) => console.log(err));
                    } else {
                      alert(
                        img.naturalWidth +
                          "     " +
                          img.naturalHeight +
                          "please make the image square"
                      );
                    }
                  } else {
                    setShowMessages([true, "You have details missing"]);
                    setTimeout(() => {
                      setShowMessages(false);
                    }, 2000);
                    // alert("You have details missing");
                  }
                } else {
                  setShowMessages([true, "No of item is less than 0 is empty"]);
                  setTimeout(() => {
                    setShowMessages(false);
                  }, 2000);
                  // alert("No of item is less than 0 is empty");
                }
              } else {
                setShowMessages([true, "Other image is empty"]);
                setTimeout(() => {
                  setShowMessages(false);
                }, 2000);
                // alert("Other image is empty");
              }
            } else {
              setShowMessages([true, "Cart Image is empty"]);
              setTimeout(() => {
                setShowMessages(false);
              }, 2000);
              // alert("Cart Image is empty");
            }
          } else {
            setShowMessages([true, "description is empty"]);
            setTimeout(() => {
              setShowMessages(false);
            }, 2000);
            // alert("description is empty");
          }
        } else {
          setShowMessages([true, "Current price is empty"]);
          setTimeout(() => {
            setShowMessages(false);
          }, 2000);
          // alert("Current price is empty");
        }
      } else {
        setShowMessages([true, "previous price is empty"]);
        setTimeout(() => {
          setShowMessages(false);
        }, 2000);
        // alert("previous price is empty");
      }
    } else {
      setShowMessages([true, "product name is empty"]);
      setTimeout(() => {
        setShowMessages(false);
      }, 2000);
      // alert("product name is empty");
    }
  };

  //
  const OutputForDescription = () => {
    let outputForDescription = [];
    for (let i = 0; i < parseInt(noOfDescription); i++) {
      outputForDescription.push(
        <div style={{ width: "100%" }} key={i}>
          <input
            key={i}
            className="inputField"
            value={values.productDetails[i].title}
            onChange={(e) => {
              setValues({
                ...values,
                productDetails: [
                  ...values.productDetails.slice(0, i),
                  { ...values.productDetails[i], title: e.target.value },
                  ...values.productDetails.slice(
                    i + 1,
                    values.productDetails.length
                  ),
                ],
              });
            }}
            type="text"
            placeholder="title"
          />
          <input
            key={i + 1}
            className="inputField"
            type="text"
            value={values.productDetails[i].value}
            onChange={(e) =>
              setValues({
                ...values,
                productDetails: [
                  ...values.productDetails.slice(0, i),
                  { ...values.productDetails[i], value: e.target.value },
                  ...values.productDetails.slice(
                    i + 1,
                    values.productDetails.length
                  ),
                ],
              })
            }
            placeholder="value"
          />
          <br />
          <br />
        </div>
      );
    }
    return outputForDescription;
  };
  return (
    <div className="mainDiv">
      {showMessages[0] ? <AddedTocart messages={showMessages[1]} /> : <></>}
      <h1>This is product uploading page</h1>
      {!showContent ? (
        <div className="productNameDiv">
          <input type="text" id="passwordInput" placeholder="Password" />
          <button onClick={() => checkPassword()}>Enter</button>
        </div>
      ) : (
        <form className="mainDiv" onSubmit={(e) => handleSubmit(e)}>
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
            <label>No of items</label>
            <input
              className="inputField"
              type="number"
              placeholder="No of items"
              value={values.noOfItems}
              onChange={(e) =>
                setValues({ ...values, noOfItems: e.target.value })
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
                handlePhotoChange(e, "imageInput", 0);
              }}
              accept="image/*"
            />
            <img
              src={images[0]}
              className="imagePreview"
              id="imageInput"
              alt=""
            />
          </div>
          <div className="productNameDiv">
            <label>Choose three photo with 16:9 ratio</label>
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput1", 1);
              }}
              accept="image/*"
            />
            <img
              src={images[1]}
              className="imagePreview"
              id="imageInput1"
              alt=""
            />
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput2", 2);
              }}
              accept="image/*"
            />
            <img
              src={images[2]}
              className="imagePreview"
              id="imageInput2"
              alt=""
            />
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput3", 3);
              }}
              accept="image/*"
            />

            <img
              src={images[3]}
              className="imagePreview"
              id="imageInput3"
              alt=""
            />
          </div>
          <div className="productNameDiv">
            <label>Description</label>
            {OutputForDescription()}
            <button
              type="button"
              onClick={(e) => {
                setNoOfDescription(noOfDescription + 1);
                setValues({
                  ...values,
                  productDetails: [
                    ...values.productDetails,
                    { title: "", value: "" },
                  ],
                });
              }}
            >
              Add more
            </button>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default PageUploadingPage;
