import React, { useState } from "react";
import "./Upload.css";
import * as xlsx from "xlsx";

const Upload = (props) => {

  const [file, setFile] = useState();
  
  function ReadUploadFile (e){
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            props.setDataFromExcel(json)
            console.log("json");
            console.log(json);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}

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
          onChange={ReadUploadFile}
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
