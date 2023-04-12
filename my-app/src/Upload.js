import { useState, useRef } from "react";
import "./App.css";

const Upload = () => {
  const [Image, setImage] = useState(null);
  const fileInput = useRef(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImage(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <img
        style={{
          width: "250px",
          height: "150px",
          margin: "10px 20px",
          cursor: "pointer",
        }}
        src={Image ? Image : process.env.PUBLIC_URL + "blank.jpg"}
        onClick={() => {
          fileInput.current.click();
        }}
        alt=""
      />
      <input
        style={{ display: "none" }}
        accept="image/*"
        type="file"
        onChange={(e) => onChange(e)}
        ref={fileInput}
      />
    </>
  );
};

export default Upload;
