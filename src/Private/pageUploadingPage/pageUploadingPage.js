import React, { useEffect, useState, useRef } from "react";
import "./pageUploadingPage.css";
import Axios from "axios";
import AddedTocart from "../../Components/addedToCart/addedTocart.js";
import axios from "axios";
//
let PROUUCT_UPLOADING_API = "https://chamunda.herokuapp.com/products"; //!http://localhost:4000/products
let PRODUCT_UPDATING_API = "https://chamunda.herokuapp.com/productsUpdate"; //!http://localhost:4000/productsUpdate
let PRODUCT_LOADING_API = "https://chamunda.herokuapp.com/productsLoad"; //!http://localhost:4000/productsLoad
const PageUploadingPage = () => {
  const password = "123456789";
  const [editProductID, setEditProductID] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [allProduct, setAllProducts] = useState([]);
  const [noOfDescription, setNoOfDescription] = useState(5);
  const [images, setImages] = useState(new Array(4).fill(""));
  const [showMessages, setShowMessages] = useState([false, ""]);
  const [files123, setFile] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    prouctName: "",
    prevPrice: "",
    currPrice: "",
    noOfItems: 1,
    description: "",
    tags: "",
    productDetails: new Array(noOfDescription).fill({ title: "", value: "" }),
  });
  const [tags, setTags] = useState([]);
  const [multipeFiles, setMultipleFiles] = useState(["", ""]);

  const [showSort, setShowSort] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSort(false);
          // alert("you just clicked outside of box!");
        }
      }

      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
    }, [ref]);
  }
  let sortClickEventListener = useRef(null);
  useOutsideAlerter(sortClickEventListener);

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
    axios
      .get(PRODUCT_LOADING_API)
      .then((res) => {
        setAllProducts(res.data);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let newTagsVariable = JSON.parse(
      JSON.stringify([...values.tags.split(" ")])
    ).filter((ele) => ele !== "");
    setTags(newTagsVariable);
  }, [values.tags]);
  const handlePhotoChange = (e, id, imagesID) => {
    // let img = document.getElementById(id);
    let file = e.target.files[0];
    if (file !== undefined) {
      if (file.size / 1000 > 16000) {
        alert("The image must be less than 16 mb");
      } else {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          setMultipleFiles([
            e.target.files[0],
            ...multipeFiles.slice(1, multipeFiles.length),
          ]);
          // setImages([
          //   ...images.slice(0, imagesID),
          //   fileReader.result,
          //   ...images.slice(imagesID + 1, images.length),
          // ]);
          // setFile([
          //   ...files123.slice(0, imagesID),
          //   e.target.files[0],
          //   ...files123.slice(imagesID + 1, files123.length),
          // ]);
          // let fileData = new FormData();
          // fileData.append("myImage", files123[1]);
          // axios
          //   .post("http://localhost:4000/post", fileData)
          //   .then((res) => console.log(res))
          //   .catch((err) => console.log(err));
        };
        fileReader.readAsDataURL(file);
      }
    }
    // img.src = URL.createObjectURL(e.target.files[0]);
  };
  const photoSubmit = () => {
    let fileData = new FormData();
    fileData.append("myImage", files123[1]);
    axios
      .post("http://localhost:4000/test", fileData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const checkPassword = () => {
    if (password === document.getElementById("passwordInput").value) {
      setShowContent(true);
      return true;
    } else {
      setShowMessages([true, "Wrong password"]);
      setTimeout(() => {
        setShowMessages(false);
      }, 1500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.prouctName !== "") {
      if (values.prevPrice !== "") {
        if (values.currPrice !== "") {
          if (values.description !== "") {
            if (multipeFiles[0] !== "") {
              if (multipeFiles.length > 3) {
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
                    let allow = true;
                    let img = new Image();
                    // document.getElementById("photoTest").style.display = "flex";
                    // img.src = URL.createObjectURL(multipeFiles[0]);
                    // document.getElementById("photoTest").src =
                    //   URL.createObjectURL(multipeFiles[0]);
                    document.getElementById("cartImageInput").clientWidth /
                      document.getElementById("cartImageInput").clientHeight <
                      1.4 &&
                    document.getElementById("cartImageInput").clientWidth /
                      document.getElementById("cartImageInput").clientHeight >
                      0.7
                      ? (allow = true)
                      : (allow = false);
                    console.log(
                      document.getElementById("cartImageInput").clientWidth
                    );
                    console.log(
                      document.getElementById("cartImageInput").clientHeight
                    );
                    // document.getElementById("photoTest").style.display = "none";
                    if (allow) {
                      let productData = new FormData();
                      productData.append("productName", values.prouctName);
                      productData.append("prevPrice", values.prevPrice);
                      productData.append("currPrice", values.currPrice);
                      productData.append("noOfItems", values.noOfItems);
                      productData.append("description", values.description);
                      productData.append("tags", JSON.stringify(tags));
                      productData.append(
                        "productDetails",
                        JSON.stringify(values.productDetails)
                      );

                      for (let i = 0; i < multipeFiles.length; i++) {
                        productData.append("productImages", multipeFiles[i]);
                      }

                      setLoading(true);
                      Axios.post(PROUUCT_UPLOADING_API, productData) //https://chamunda.herokuapp.com/products //http://localhost:4000/products
                        .then((res) => {
                          setLoading(false);
                          if (res.data === "productUploaded") {
                            setNoOfDescription(5);

                            setValues({
                              prouctName: "",
                              prevPrice: "",
                              currPrice: "",
                              noOfItems: 1,
                              description: "",
                              tags: "",
                              productDetails: new Array(noOfDescription).fill({
                                title: "",
                                value: "",
                              }),
                            });
                            setTags([]);
                            setMultipleFiles(["", ""]);
                            setShowMessages([true, "product uploaded"]);
                            setTimeout(() => {
                              setShowMessages(false);
                            }, 2000);
                          } else if (res.data === "productNotUploaded") {
                            setShowMessages([true, "product NOT uploaded"]);
                            setTimeout(() => {
                              setShowMessages(false);
                            }, 2000);
                          } else if (res.data === "imagesNotUploaded") {
                            setShowMessages([
                              true,
                              "Images not uploaded, please see if any of the images is more than 16 mb",
                            ]);
                            setTimeout(() => {
                              setShowMessages(false);
                            }, 2000);
                            console.log(res);
                          } else {
                            setShowMessages([
                              true,
                              "something else caused this so please hold on",
                            ]);
                            setTimeout(() => {
                              setShowMessages(false);
                            }, 2000);
                            console.log(res);
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                          setLoading(false);
                        });
                    } else {
                      console.log(multipeFiles);
                      console.log(
                        document.getElementById("cartImageInput").clientWidth +
                          "     " +
                          document.getElementById("cartImageInput")
                            .clientHeight +
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
                  setShowMessages([true, "No of item is less than 1"]);
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
  const handleUpdate = (e) => {
    // e.preventDefault();
    if (values.prouctName !== "") {
      if (values.prevPrice !== "") {
        if (values.currPrice !== "") {
          if (values.description !== "") {
            // if (multipeFiles[0] !== "") {
            // if (multipeFiles.length > 3) {
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
                let allow = true;
                let img = new Image();
                // document.getElementById("photoTest").style.display = "flex";
                // img.src = URL.createObjectURL(multipeFiles[0]);
                // document.getElementById("photoTest").src =
                //   URL.createObjectURL(multipeFiles[0]);
                if (multipeFiles[0] !== "") {
                  allow = false;
                  document.getElementById("cartImageInput").clientWidth /
                    document.getElementById("cartImageInput").clientHeight <
                    1.4 &&
                  document.getElementById("cartImageInput").clientWidth /
                    document.getElementById("cartImageInput").clientHeight >
                    0.7
                    ? (allow = true)
                    : (allow = false);
                  console.log(
                    document.getElementById("cartImageInput").clientWidth
                  );
                  console.log(
                    document.getElementById("cartImageInput").clientHeight
                  );
                }

                // document.getElementById("photoTest").style.display = "none";
                if (allow) {
                  let productData = new FormData();
                  productData.append("productID", editProductID);
                  productData.append("productName", values.prouctName);
                  productData.append("prevPrice", values.prevPrice);
                  productData.append("currPrice", values.currPrice);
                  productData.append("noOfItems", values.noOfItems);
                  productData.append("description", values.description);
                  productData.append("tags", JSON.stringify(tags));
                  productData.append(
                    "productDetails",
                    JSON.stringify(values.productDetails)
                  );
                  if (multipeFiles[0] !== "" || multipeFiles.length > 2) {
                    for (let i = 0; i < multipeFiles.length; i++) {
                      productData.append("productImages", multipeFiles[i]);
                    }
                  }

                  setLoading(true);
                  Axios.post(PRODUCT_UPDATING_API, productData)
                    .then((res) => {
                      setLoading(false);
                      if (res.data === "productUploaded") {
                        setNoOfDescription(5);

                        setValues({
                          prouctName: "",
                          prevPrice: "",
                          currPrice: "",
                          noOfItems: 1,
                          description: "",
                          tags: "",
                          productDetails: new Array(noOfDescription).fill({
                            title: "",
                            value: "",
                          }),
                        });
                        setTags([]);
                        setMultipleFiles(["", ""]);
                        setShowMessages([true, "product updated"]);
                        setTimeout(() => {
                          setShowMessages(false);
                        }, 2000);
                      } else if (res.data === "productNotUploaded") {
                        setShowMessages([true, "product NOT uploaded"]);
                        setTimeout(() => {
                          setShowMessages(false);
                        }, 2000);
                      } else if (res.data === "imagesNotUploaded") {
                        setShowMessages([
                          true,
                          "Images not uploaded, please see if any of the images is more than 16 mb",
                        ]);
                        setTimeout(() => {
                          setShowMessages(false);
                        }, 2000);
                        console.log(res);
                      } else {
                        setShowMessages([
                          true,
                          "something else caused this so please hold on",
                        ]);
                        setTimeout(() => {
                          setShowMessages(false);
                        }, 2000);
                        console.log(res);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      setLoading(false);
                    });
                } else {
                  console.log(multipeFiles);
                  console.log(
                    document.getElementById("cartImageInput").clientWidth +
                      "     " +
                      document.getElementById("cartImageInput").clientHeight +
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
              setShowMessages([true, "No of item is less than 1"]);
              setTimeout(() => {
                setShowMessages(false);
              }, 2000);
              // alert("No of item is less than 0 is empty");
            }
            //   } else {
            //     setShowMessages([true, "Other image is empty"]);
            //     setTimeout(() => {
            //       setShowMessages(false);
            //     }, 2000);
            //     // alert("Other image is empty");
            //   }
            // } else {
            //   setShowMessages([true, "Cart Image is empty"]);
            //   setTimeout(() => {
            //     setShowMessages(false);
            //   }, 2000);
            //   // alert("Cart Image is empty");
            // }
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
        <div
          className="inputFieldHolderAndButtonHolder"
          style={{ width: "100%" }}
          key={i}
        >
          <div className="inputFieldHolder">
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
          </div>
          <div className="ButtonHolder">
            <button
              type="button"
              onClick={() => {
                if (noOfDescription > 5) {
                  setValues({
                    ...values,
                    productDetails: [
                      ...values.productDetails.slice(0, i),
                      // { ...values.productDetails[i], value: e.target.value },
                      ...values.productDetails.slice(
                        i + 1,
                        values.productDetails.length
                      ),
                    ],
                  });
                  setNoOfDescription(noOfDescription - 1);
                } else {
                  setShowMessages([true, "We need at least 5 details"]);
                  setTimeout(() => {
                    setShowMessages(false);
                  }, 1500);
                }
              }}
            >
              <i className="far fa-times-circle"></i>
            </button>
          </div>
          <br />
        </div>
      );
    }
    return outputForDescription;
  };

  const ImagesPreview = () => {
    let output = [];
    for (let i = 1; i < multipeFiles.length; i++) {
      if (multipeFiles[1] !== "") {
        output.push(
          <img
            key={i}
            className="imagePreview"
            src={URL.createObjectURL(multipeFiles[i])}
            alt=""
          />
        );
      }
    }
    return output;
  };
  const AllProducts = () => {
    let output = [];
    for (let i = 0; i < allProduct.length; i++) {
      output.push(
        <div
          key={i}
          style={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            margin: "5px",
            padding: "5px",
          }}
        >
          <button
            key={i}
            onClick={() => {
              if (checkPassword() === true) {
                setEditProductID(allProduct[i]._id);
                let output = [];
                for (let j = 0; j < allProduct[i].productDetails.length; j++) {
                  output.push({
                    title: allProduct[i].productDetails[j].title,
                    value: allProduct[i].productDetails[j].value,
                  });
                }
                setNoOfDescription(allProduct[i].productDetails.length);
                setValues({
                  prouctName: allProduct[i].productName,
                  prevPrice: allProduct[i].prevprice,
                  currPrice: allProduct[i].currPrice,
                  noOfItems: allProduct[i].noOfItems,
                  description: allProduct[i].description,
                  tags: JSON.parse(allProduct[i].tags).join(" "),
                  productDetails: output,
                });
              }
            }}
            style={{
              minWidth: "150px",
              minHeight: "30px",
            }}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src={allProduct[i].cartImageLinks[0].main}
              alt=""
            />
            {allProduct[i].productName}
          </button>
        </div>
      );
    }
    return output;
  };
  return (
    <div className="mainDiv">
      {showMessages[0] ? <AddedTocart messages={showMessages[1]} /> : <></>}
      <h1>This is product uploading page</h1>
      {!showContent ? (
        <div className="passwordDiv">
          <input type="password" id="passwordInput" placeholder="Password" />
          <button className="btn btn1" onClick={() => checkPassword()}>
            Enter
          </button>
          {showEdit ? (
            <AllProducts />
          ) : (
            <>
              <button className="btn btn1" onClick={() => setShowEdit(true)}>
                Edit
              </button>
            </>
          )}
        </div>
      ) : loading ? (
        <>
          <span>Uploading</span>
          <i className="fas fa-cog fa-spin fa-4x"></i>
        </>
      ) : (
        <form
          className="mainDiv"
          onSubmit={(e) => handleSubmit(e)}
          encType="multipart/form-data"
        >
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
          <div className="ProductDescription">
            <label htmlFor="file" className="inputFileLabel">
              Main picture. Try your best to make the image a square
            </label>
            <input
              type="file"
              name="myImage"
              id="file"
              className="inputFileSingle"
              onChange={(e) => {
                handlePhotoChange(e, "imageInput", 0);
              }}
              accept="image/*"
            />
            {multipeFiles[0] === "" ? (
              <></>
            ) : (
              <img
                src={
                  multipeFiles[0] === ""
                    ? ""
                    : URL.createObjectURL(multipeFiles[0])
                }
                className="imagePreview"
                id="cartImageInput"
                alt=""
              />
            )}
          </div>
          <div className="ProductDescription">
            <label>
              Choose three or more than three photos with 16:9 ratio
            </label>
            {/* <input type="file" name="myImage" onChange={(e) => { handlePhotoChange(e, "imageInput1", 1); }} accept="image/*" />
            <button type="button" onClick={() => photoSubmit()}> Click e to send </button>
            <img src={images[1]} className="imagePreview" id="imageInput1" alt="" /> */}
            <input
              type="file"
              className="inputFileSingle"
              onChange={(e) => {
                setMultipleFiles([multipeFiles[0], ...e.target.files]);
              }}
              accept="image/*"
              multiple={true}
            />
            <div className="imagePreviewDiv">
              <ImagesPreview />
            </div>
          </div>
          <div className="ProductDescription">
            {/* <div
              className="PriceSortHolderButton-Div"
              style={{ gridArea: "priceSort" }}
              ref={sortClickEventListener}
            > */}
            <button
              type="button"
              className="fa PriceSortHolderButton"
              onClick={() => setShowSort(!showSort)}
            >
              Bitch {showSort ? <>&#xf0de;</> : <>&#xf0dd;</>}
            </button>
            {showSort === true ? (
              <div
                className="PriceSortHolder2"
                // style={{ height: "auto", display: "flex" }}
              >
                <button type="button" className="PriceSortHolderButton">
                  Popular
                </button>
                <button type="button" className="PriceSortHolderButton">
                  Price<i className="fas fa-sort-amount-down-alt"></i>
                </button>
                <button type="button" className="PriceSortHolderButton">
                  Price<i className="fas fa-sort-amount-up"></i>
                </button>
              </div>
            ) : (
              <></>
            )}
            {/* </div> */}
          </div>
          <div className="tagsInputDiv">
            <label>Tags</label>
            <input
              className="inputField"
              type="text"
              placeholder="Search tags"
              value={values.tags}
              onChange={(e) => {
                setValues({ ...values, tags: e.target.value });
              }}
            />

            <div className="tagsDisplayDiv">
              {tags.map((ele, index) => {
                if (ele !== "") {
                  return (
                    <div className="tagsDisplay" key={index}>
                      <div className="tagsDisplay-text">{ele}</div>
                      {/* <button type="button" className="tagsDisplay-button" onClick={()=>{
                        let newValuesForTags = [...values.tags.split(" ")];

                      }}>
                        X
                      </button> */}
                    </div>
                  );
                }
                return <></>;
              })}
              {/* <div className="tagsDisplay">
                <div className="tagsDisplay-text">Reactjs</div>
                <button type="button" className="tagsDisplay-button">
                  X
                </button>
              </div>
              <div className="tagsDisplay">
                <div className="tagsDisplay-text">Reactjs</div>
                <button type="button" className="tagsDisplay-button">
                  X
                </button>
              </div> */}
            </div>
          </div>
          <div className="ProductDescription">
            <label>Description</label>
            {OutputForDescription()}
            <button
              type="button"
              className="btn"
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
              +
            </button>
          </div>
          <div className="submitButtonHolder">
            {showEdit ? (
              <button
                type="button"
                className="btn"
                style={{ marginLeft: "auto" }}
                onClick={() => handleUpdate()}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="btn"
                style={{ marginLeft: "auto" }}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default PageUploadingPage;
