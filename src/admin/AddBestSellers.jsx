import React, { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./AddProducts.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
// import { error } from "jquery";
// import { Default } from "react-toastify/dist/utils";

const initialState = {
  name: "",
  nprice: "",
  rprice: "",
  description: "",
  desc1heading: "",
  desc2heading: "",
  desc3heading: "",
  desc4heading: "",
  desc5heading: "",
  desc6heading: "",
  desc7heading: "",
  desc8heading: "",
  desc9heading: "",
  desc10heading: "",
  detail1: "",
  detail2: "",
  detail3: "",
  detail4: "",
  detail5: "",
  detail6: "",
  detail7: "",
  detail8: "",
  detail9: "",
  detail10: "",
  detail11: "",
  detail12: "",
  detail13: "",
  detail14: "",
  detail15: "",
  detail16: "",
  detail17: "",
  detail18: "",
  detail19: "",
  detail20: "",
  detail21: "",
  // detail15:"",
  // detail16:"",
//   detail17: "",
  ulheading1: "",
  ulheading2: "",
  ulheading3: "",
  ulheading4: "",
  ulheading5: "",
  list1: "",
  list2: "",
  list3: "",
  list4: "",
  list5: "",
  list6: "",
  list7: "",
  list8: "",
  list9: "",
  list10: "",
  list11: "",
  list12: "",
  list13: "",
  list14: "",
  list15: "",
  list16: "",
  list17: "",
  list18: "",
  list19: "",
  list20: "",
  list21: "",
  list22: "",
  list23: "",
  list24: "",
  list25: "",
  list26: "",
  list27: "",
  list28: "",
  list29: "",
  list30: "",
  list31: "",
  list32: "",
};

const AddBestSellers = () => {
  const [bestsellerdata, setBestSellerData] = useState(initialState);
  const {
    name,
    nprice,
    rprice,
    description,
    desc1heading,
    desc2heading,
    desc3heading,
    desc4heading,
    desc5heading,
    desc6heading,
    desc7heading,
    desc8heading,
    desc9heading,
    desc10heading,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
    detail6,
    detail7,
    detail8,
    detail9,
    detail10,
    detail11,
    detail12,
    detail13,
    detail14,
    detail15,
    detail16,
    detail17,
    detail18,
    detail19,
    detail20,
    detail21,
    ulheading1,
    ulheading2,
    ulheading3,
    ulheading4,
    ulheading5,
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
    list10,
    list11,
    list12,
    list13,
    list14,
    list15,
    list16,
    list17,
    list18,
    list19,
    list20,
    list21,
    list22,
    list23,
    list24,
    list25,
    list26,
    list27,
    list28,
    list29,
    list30,
    list31,
    list32,
  } = bestsellerdata;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();


  // For Navigate product details by id
//   const { id } = useParams();

//   useEffect(() => {
//     id && getSingleUser();
//   }, [id]);

//   const getSingleUser = async () => {
//     const docRef = doc(db, "bestsellers", id);
//     const snapshot = await getDoc(docRef);
//     if (snapshot.exists()) {
//       setBestSellerData({ ...snapshot.bestsellerdata() });
//     }
//   };

  // For Navigate Product Details by id End

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            snapshot.bytesTransferred / snapshot.totalBytes + 100;
          setProgress(progress);
          switch (snapshot) {
            case "paused":
              console.log("Upload is Pause");
              break;
            case "running":
              console.log("Upload is Running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setBestSellerData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setBestSellerData({ ...bestsellerdata, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is Required";
    }
    if (!rprice) {
      errors.rprice = "Regular price is Required";
    }
    if (!nprice) {
      errors.nprice = "New price is Required";
    }
    if (!description) {
      errors.description = "Description is Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);

    setIsSubmit(true);
    await addDoc(collection(db, "bestsellers"), {
      ...bestsellerdata,
      timestamp: serverTimestamp(),
    });
    navigate("/");
  };

  return (
    <>
      <div className="add-product container">
        {isSubmit ? (
          <Loader active inline="centered" size="huge" />
        ) : (
          <>
            <h2 className="text-center mt30 mb20">Add BestSeller Products</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Product Image:
                <input
                  type="file"
                  // value={file}
                  onChange={(e) => setFile(e.target.files[0])}
                  name="img"
                  autoFocus
                  required
                />
              </label>
              <label>
                Product Name:
                <input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  name="name"
                />
                {errors.name ? (
                  <span className="error">{errors.name}</span>
                ) : null}
              </label>
              <label>
                Regular Price:
                <input
                  type="text"
                  value={rprice}
                  onChange={handleChange}
                  name="rprice"
                />
                {errors.rprice ? (
                  <span className="error">{errors.rprice}</span>
                ) : null}
              </label>
              <label>
                New Price:
                <input
                  type="text"
                  value={nprice}
                  onChange={handleChange}
                  name="nprice"
                />
                {errors.nprice ? (
                  <span className="error">{errors.nprice}</span>
                ) : null}
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={description}
                  onChange={handleChange}
                  name="description"
                />
                {errors.description ? (
                  <span className="error">{errors.description}</span>
                ) : null}
              </label>
              <label>
                Description H1
                <input
                  type="text"
                  value={desc1heading}
                  onChange={handleChange}
                  name="desc1heading"
                />
              </label>
              <label>
                Description H2
                <input
                  type="text"
                  value={desc2heading}
                  onChange={handleChange}
                  name="desc2heading"
                />
              </label>
              <label>
                Description H3
                <input
                  type="text"
                  value={desc3heading}
                  onChange={handleChange}
                  name="desc3heading"
                />
              </label>
              <label>
                Description H4
                <input
                  type="text"
                  value={desc4heading}
                  onChange={handleChange}
                  name="desc4heading"
                />
              </label>
              <label>
                Description H5
                <input
                  type="text"
                  value={desc5heading}
                  onChange={handleChange}
                  name="desc5heading"
                />
              </label>
              <label>
                Description H6
                <input
                  type="text"
                  value={desc6heading}
                  onChange={handleChange}
                  name="desc6heading"
                />
              </label>
              <label>
                Description H7
                <input
                  type="text"
                  value={desc7heading}
                  onChange={handleChange}
                  name="desc7heading"
                />
              </label>
              <label>
                Description H8
                <input
                  type="text"
                  value={desc8heading}
                  onChange={handleChange}
                  name="desc8heading"
                />
              </label>
              <label>
                Description H9
                <input
                  type="text"
                  value={desc9heading}
                  onChange={handleChange}
                  name="desc9heading"
                />
              </label>
              <label>
                Description H10
                <input
                  type="text"
                  value={desc10heading}
                  onChange={handleChange}
                  name="desc10heading"
                />
              </label>
              <label>
                Detail-P1:
                <input
                  type="text"
                  value={detail1}
                  onChange={handleChange}
                  name="detail1"
                />
              </label>
              <label>
                Detail-P2:
                <input
                  type="text"
                  value={detail2}
                  onChange={handleChange}
                  name="detail2"
                />
              </label>
              <label>
                Detail-P3:
                <input
                  type="text"
                  value={detail3}
                  onChange={handleChange}
                  name="detail3"
                />
              </label>
              <label>
                Detail-P4:
                <input
                  type="text"
                  value={detail4}
                  onChange={handleChange}
                  name="detail4"
                />
              </label>
              <label>
                Detail-P5:
                <input
                  type="text"
                  value={detail5}
                  onChange={handleChange}
                  name="detail5"
                />
              </label>
              <label>
                Detail-P6:
                <input
                  type="text"
                  value={detail6}
                  onChange={handleChange}
                  name="detail6"
                />
              </label>
              <label>
                Detail-P7:
                <input
                  type="text"
                  value={detail7}
                  onChange={handleChange}
                  name="detail7"
                />
              </label>
              <label>
                Detail-P8:
                <input
                  type="text"
                  value={detail8}
                  onChange={handleChange}
                  name="detail8"
                />
              </label>
              <label>
                Detail-P9:
                <input
                  type="text"
                  value={detail9}
                  onChange={handleChange}
                  name="detail9"
                />
              </label>
              <label>
                Detail-P10:
                <input
                  type="text"
                  value={detail10}
                  onChange={handleChange}
                  name="detail10"
                />
              </label>
              <label>
                Detail-P11:
                <input
                  type="text"
                  value={detail11}
                  onChange={handleChange}
                  name="detail11"
                />
              </label>
              <label>
                Detail-P12:
                <input
                  type="text"
                  value={detail12}
                  onChange={handleChange}
                  name="detail12"
                />
              </label>
              <label>
                Detail-P13:
                <input
                  type="text"
                  value={detail13}
                  onChange={handleChange}
                  name="detail13"
                />
              </label>
              <label>
                Detail-P14:
                <input
                  type="text"
                  value={detail14}
                  onChange={handleChange}
                  name="detail14"
                />
              </label>
              <label>
                Detail-P15:
                <input
                  type="text"
                  value={detail15}
                  onChange={handleChange}
                  name="detail15"
                />
              </label>
              <label>
                Detail-P16:
                <input
                  type="text"
                  value={detail16}
                  onChange={handleChange}
                  name="detail16"
                />
              </label>
              <label>
                Detail-P17:
                <input
                  type="text"
                  value={detail17}
                  onChange={handleChange}
                  name="detail17"
                />
              </label>
              <label>
                Detail-P18:
                <input
                  type="text"
                  value={detail18}
                  onChange={handleChange}
                  name="detail18"
                />
              </label>
              <label>
                Detail-P19:
                <input
                  type="text"
                  value={detail19}
                  onChange={handleChange}
                  name="detail19"
                />
              </label>
              <label>
                Detail-P20:
                <input
                  type="text"
                  value={detail20}
                  onChange={handleChange}
                  name="detail20"
                />
              </label>
              <label>
                Detail-P21:
                <input
                  type="text"
                  value={detail21}
                  onChange={handleChange}
                  name="detail21"
                />
              </label>
              {/*------------ Ul List 1 -------------------*/}
              <label>
                Ul-Heading1
                <input
                  type="text"
                  value={ulheading1}
                  onChange={handleChange}
                  name="ulheading1"
                />
              </label>
              <label>
                list 1
                <input
                  type="text"
                  value={list1}
                  onChange={handleChange}
                  name="list1"
                />
              </label>
              <label>
                list 2
                <input
                  type="text"
                  value={list2}
                  onChange={handleChange}
                  name="list2"
                />
              </label>
              <label>
                list 3
                <input
                  type="text"
                  value={list3}
                  onChange={handleChange}
                  name="list3"
                />
              </label>
              <label>
                list 4
                <input
                  type="text"
                  value={list4}
                  onChange={handleChange}
                  name="list4"
                />
              </label>
              <label>
                list 5
                <input
                  type="text"
                  value={list5}
                  onChange={handleChange}
                  name="list5"
                />
              </label>
              <label>
                list 6
                <input
                  type="text"
                  value={list6}
                  onChange={handleChange}
                  name="list6"
                />
              </label>
              <label>
                list 23
                <input
                  type="text"
                  value={list23}
                  onChange={handleChange}
                  name="list23"
                />
              </label>
              <label>
                list 24
                <input
                  type="text"
                  value={list24}
                  onChange={handleChange}
                  name="list24"
                />
              </label>
              <label>
                list 25
                <input
                  type="text"
                  value={list25}
                  onChange={handleChange}
                  name="list25"
                />
              </label>
              <label>
                list 26
                <input
                  type="text"
                  value={list26}
                  onChange={handleChange}
                  name="list26"
                />
              </label>
              <label>
                list 27
                <input
                  type="text"
                  value={list27}
                  onChange={handleChange}
                  name="list27"
                />
              </label>
              <label>
                list 28
                <input
                  type="text"
                  value={list28}
                  onChange={handleChange}
                  name="list28"
                />
              </label>
              <label>
                list 29
                <input
                  type="text"
                  value={list29}
                  onChange={handleChange}
                  name="list29"
                />
              </label>
              <label>
                list 30
                <input
                  type="text"
                  value={list30}
                  onChange={handleChange}
                  name="list30"
                />
              </label>
              <label>
                list 31
                <input
                  type="text"
                  value={list31}
                  onChange={handleChange}
                  name="list31"
                />
              </label>
              <label>
                list 32
                <input
                  type="text"
                  value={list32}
                  onChange={handleChange}
                  name="list32"
                />
              </label>
              {/*------------ Ul List 2 -------------------*/}
              <label>
                Ul-Heading2
                <input
                  type="text"
                  value={ulheading2}
                  onChange={handleChange}
                  name="ulheading2"
                />
              </label>
              <label>
                list 7
                <input
                  type="text"
                  value={list7}
                  onChange={handleChange}
                  name="list7"
                />
              </label>
              <label>
                list 8
                <input
                  type="text"
                  value={list8}
                  onChange={handleChange}
                  name="list8"
                />
              </label>
              <label>
                list 9
                <input
                  type="text"
                  value={list9}
                  onChange={handleChange}
                  name="list9"
                />
              </label>
              <label>
                list 10
                <input
                  type="text"
                  value={list10}
                  onChange={handleChange}
                  name="list10"
                />
              </label>
              {/*------------ Ul List 3 -------------------*/}
              <label>
                Ul-Heading3
                <input
                  type="text"
                  value={ulheading3}
                  onChange={handleChange}
                  name="ulheading3"
                />
              </label>
              <label>
                list 11
                <input
                  type="text"
                  value={list11}
                  onChange={handleChange}
                  name="list11"
                />
              </label>
              {/* <label>
                list 11
                <input
                  type="text"
                  value={list11}
                  onChange={handleChange}
                  name="list11"
                />
              </label> */}
              <label>
                list 12
                <input
                  type="text"
                  value={list12}
                  onChange={handleChange}
                  name="list12"
                />
              </label>
              <label>
                list 13
                <input
                  type="text"
                  value={list13}
                  onChange={handleChange}
                  name="list13"
                />
              </label>
              <label>
                list 14
                <input
                  type="text"
                  value={list14}
                  onChange={handleChange}
                  name="list14"
                />
              </label>
              <label>
                list 15
                <input
                  type="text"
                  value={list15}
                  onChange={handleChange}
                  name="list15"
                />
              </label>
              <label>
                list 16
                <input
                  type="text"
                  value={list16}
                  onChange={handleChange}
                  name="list16"
                />
              </label>
              <label>
                Ul-Heading4
                <input
                  type="text"
                  value={ulheading4}
                  onChange={handleChange}
                  name="ulheading4"
                />
              </label>
              <label>
                list 17
                <input
                  type="text"
                  value={list17}
                  onChange={handleChange}
                  name="list17"
                />
              </label>
              <label>
                list 18
                <input
                  type="text"
                  value={list18}
                  onChange={handleChange}
                  name="list18"
                />
              </label>
              <label>
                list 19
                <input
                  type="text"
                  value={list19}
                  onChange={handleChange}
                  name="list19"
                />
              </label>
              <label>
                list 20
                <input
                  type="text"
                  value={list20}
                  onChange={handleChange}
                  name="list20"
                />
              </label>
              <label>
                list 21
                <input
                  type="text"
                  value={list21}
                  onChange={handleChange}
                  name="list21"
                />
              </label>
              <label>
                list 22
                <input
                  type="text"
                  value={list22}
                  onChange={handleChange}
                  name="list22"
                />
              </label>

              {/* <h4>------------------------------------Product Stock Details--------------------------------</h4>
              <label>
              Availability :
                <input
                  type="text"
                  value={Availability}
                  onChange={handleChange}
                  name="Availability"
                />
              </label>
              <label>
              Multilingual :
                <input
                  type="text"
                  value={Multilingual}
                  onChange={handleChange}
                  name="Multilingual"
                />
              </label>
              <label>
              Support:
                <input
                  type="text"
                  value={Support}
                  onChange={handleChange}
                  name="Support"
                />
              </label>
              <label>
              Payment: 
                <input
                  type="text"
                  value={Payment}
                  onChange={handleChange}
                  name="Payment"
                />
              </label>
              <label>
              Shipping: 
                <input
                  type="text"
                  value={Shipping}
                  onChange={handleChange}
                  name="Shipping"
                />
              </label> */}
              <button
                type="submit"
               
              >
                Add Bestseller Product
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default AddBestSellers;
