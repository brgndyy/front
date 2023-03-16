import "./ImageUpload.css";
import Button from "./Button";
import { useRef, useState, useEffect } from "react";

export default function ImageUpload(props) {
  const filePickerRef = useRef();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!file) {
      return;
    }

    const filedReader = new FileReader();
    FileReader.onload = () => {
      setPreviewUrl(filedReader.result);
    };

    FileReader.readAsDataUrl(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    let filesIsValid = isValid;
    if (e.target.files && e.target.files.length === 1) {
      const pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      filesIsValid = true;
    } else {
      setIsValid(false);
      filesIsValid = false;
    }

    props.onInput(props.id, pickedFile, filesIsValid);
  };

  return (
    <div className="form-control">
      <input
        type={"file"}
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview"></img>}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
}
