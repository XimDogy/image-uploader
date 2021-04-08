import React from 'react';
import './ShowImage.css';
import check_icon from '../../images/check_circle_black_24dp.svg';
// import image from '../../images/happynewyear.jpg';


const ShowImage = ({data}) => {
    const url = 'https://image-uploader-antareep.herokuapp.com/upload/';
    const  copyLink = () => {
        var copyText = document.getElementById("link-field");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");

        document.getElementById('copyButtonId').innerHTML = 'Copied';
      }
      
    return (
        <div className="card">

           
            <img className="icon" src={check_icon} alt="check_icon" />
            <h2 className="uploadSucces">Uploaded Successfully!</h2>

            <div className="imageBox2">
                <img className="uploadedImage" src={data.image} alt={data._id} key={data._id} />
            </div>

           <div className="copy-link-div">
                <input  id="link-field" className="copy-link" type="text" value={`${url}${data._id}`} />
                <button id="copyButtonId" onClick={copyLink} className="copyButton">Copy Link</button>
           </div>
        </div>
    );
}

export default ShowImage;
