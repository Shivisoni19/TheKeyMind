import React, { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./AddProducts.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";
// import { error } from "jquery";
// import { Default } from "react-toastify/dist/utils";

const initialState = {
  name: "",
  nprice: "",
  rprice: "",
};

const AddProducts = () => {
  const [data, setData] = useState(initialState);
  const { name, nprice, rprice } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  // For Navigate product details by id 
  const {id} = useParams();

   
useEffect(() => {
   id && getSingleUser();
},[id]) 

const getSingleUser = async () => {
  const docRef = doc(db, "users", id);
  const snapshot = await getDoc(docRef);
  if(snapshot.exists()){
    setData({...snapshot.data() })
  }
};

// For Navigate Product Details by id End

useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage,file.name);
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on("state_changed", (snapshot) =>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) +100;
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
      }, (error) =>{
        console.log(error)
      },
      () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData((prev) => ({ ...prev,img: downloadURL }))
              })
        }
      )
    };
    file && uploadFile()
}, [file]);

const handleChange = (e) => {
  setData({...data, [e.target.name] :e.target.value})
}

const validate = () => {
  let errors = {};
  if(!name) {
    errors.name = "Name is Required"
  }
  if(!rprice) {
    errors.rprice = "Regular price is Required"
  }
  if(!nprice) {
    errors.nprice = "New price is Required"
  } 
  return errors;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let errors = validate();
  if(Object.keys(errors).length) return setErrors(errors);

  setIsSubmit(true);
   await addDoc(collection(db, "users"), {
       ...data,
       timestamp: serverTimestamp()
   })
   navigate("/windows11");
};

  return (
    <>
      <div className="add-product container">
        {isSubmit ? 
          <Loader active inline="centered" size="huge" />
        : (
          <>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Product Image:
                <input
                  type="file"
                  // value={file}
                  onChange={(e) => setFile(e.target.files[0] )}
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
                {errors.name ? <span className="error">{errors.name}</span> : null}
              </label>
              <label>
                Regular Price:
                <input
                  type="text"
                  value={rprice}
                  onChange={handleChange}
                  name="rprice"
                />
                {errors.rprice ? <span className="error">{errors.rprice}</span> : null}
              </label>
              <label>
                New Price:
                <input
                  type="text"
                  value={nprice}
                  onChange={handleChange}
                  name="nprice"
                />
                {errors.nprice ? <span className="error">{errors.nprice}</span> : null}
              </label>
              <button type="submit" disabled={progress !== null && progress < 100} >Add Product</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default AddProducts;
