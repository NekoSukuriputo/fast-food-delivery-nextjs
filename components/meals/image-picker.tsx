"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  const handleFileInputChange = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleFileInputChange}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
