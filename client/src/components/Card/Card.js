import React, { useState } from "react";
import './Card.css';
import image from '../../images/image.svg';
import * as api from '../../api/upload';

const Card = ({setIsUploading, setIsComplete, setData}) => {
  const [dragged, setDragged] = useState(true);

  const handleUpload = async (convertedFile) => {
      try {
        const  { data } = await api.uploadImage(convertedFile);
        console.log(data);
        setData(data);
        setIsComplete(true);
        
      } catch (error) {
        console.log(error);
      }
  }

  const handleInput = (e) => {
    e.preventDefault();
    converter(e.target.files[0]);
    setIsUploading(true);
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    converter(e.dataTransfer.files[0]);
    setIsUploading(true);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log('drag over');

    if(dragged) {
      document.getElementById('border-div').classList.replace("the-dashed-border", "the-solid-border");
    }else{
      document.getElementById('border-div').classList.replace("the-solid-border", "the-dashed-border") ;
    }
      setDragged(!dragged);
  }


  const converter = (file) => {
    var convertedFiles = [];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        let fileInfo = {
            image: reader.result,
            type: file.type,
            name: file.name,
            size: Math.round(file.size / 1000) + ' kB',
        }
        convertedFiles.push(fileInfo);
        handleUpload(convertedFiles[0]);
    }
  }

  


  return (
    <div className="card">
      <h2 className="title">Upload your image</h2>
      <p className="subtitle1">File should be Jpeg, Png,...</p>

      <div id="border-div" className="imageBox the-dashed-border" onDragOver={(e) => e.preventDefault()} onDrop={handleOnDrop} onDragEnter={handleDragOver}  onDragLeave={handleDragOver} >
      

        <input 
            className="inputfile"
            type="file" 
            onChange={handleInput}
        />

        <img className="image" src={image} alt="uploadImageIcon" />
        <p className="subtitle2">Drag & Drop your image here</p>
      </div>

      <p className="subtitle3">Or</p>

      <button onClick={() => document.getElementsByTagName("input")[0].click()} className="chooseButton">Choose a file</button>
    </div>
  );
};

export default Card;
