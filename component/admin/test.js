import React, { useState } from "react";

const test = () => {
  const [file, setFile] = useState();
  const [previewURL, setpreviewURL] = useState();
  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setpreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={handleFileOnChange}
      ></input>
    </div>
  );
};

export default test;
