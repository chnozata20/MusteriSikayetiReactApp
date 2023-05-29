import React from "react";
import "./Upload.css";
const Upload = () => {
  return (
 
    <>
    <div className="uploadContainer">
      
      <div className="box-parent">
      <div><span className="importText">IMPORT</span></div>
        <label className="explain">
          Please upload your files in the specified format.
        </label>
        <br/>
        <input
          type="file"
          id="file"
          accept=".xlsx"
          required="required"
          // onChange={handleFileChange}
          // onChange={ReadUploadFile}
        />
        <button
          className="upload-btn"
          // onClick={handleUploadClick}
        >
          Upload
        </button>
      </div>
      <div className="select-sla-container">
        <label className="label-import-1">Choose File Type</label>
        <select
          name="selectSla"
          id="selectSla"
          // onChange={event => setSelectedSla(event.target.value)}
        >
          <option value="-1">{"SELECT SLA1"}</option>
          <option value="-2">{"SELECT SLA2"}</option>
          <option value="-3">{"SELECT SLA2"}</option>
        </select>
      </div>
      </div>
    </>
  );
};

export default Upload;
