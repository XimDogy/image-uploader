import React from 'react'
import './Progress.css'

const Progrss = () => {
    return (
        <div className="progress-window">
            <h5 className="upload-text">Uploading...</h5>
            <progress id="progress"></progress>
        </div>
    )
}

export default Progrss
