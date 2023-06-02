import React, { useEffect, useState } from "react";
import "./Upload.css";
import * as xlsx from "xlsx";
import { Navigate, useNavigate } from "react-router-dom";

const Upload = (props) => {
  const [file, setFile] = useState();
  const [isCsv, SetIsCsv] = useState(false);
  const [csvData, setCSVData] = useState([]);
  const [isActiveDropdown_1, setIsActiveDropdown_1] = useState(false);
  let navigate = useNavigate();

  const languages = [
    { label: "English", value: "English" },
    { label: "Turkish", value: "Turkish" },
  ];

  function ReadUploadFile(e) {
    e.preventDefault();
    console.log("log")
    console.log(e.target.files[0])
    if (e.target.files[0]) {
      let file = e.target.files;
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const extension = file.name;
        console.log(extension);
        if (extension === "csv") {
          SetIsCsv(true);
          const contents = e.target.result;
          const rows = contents.split("\n");
          const dataCsvArr = [];

          for (let i = 0; i < rows.length; i++) {
            const row = rows[i].split(",");
            dataCsvArr.push(row);
          }
          
          setCSVData(dataCsvArr);
        } else if (extension === "xlsx" || extension === "xls") {
          SetIsCsv(false);
          const workbook = xlsx.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          props.setDataFromExcel(json);
          console.log("json");
          console.log(json);
          reader.readAsArrayBuffer(e.target.files[0]);
        }console.log(csvData)
      };
      // reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  // const renderCSVData = () => {
  //   return csvData.map((row, index) => (
  //     <tr key={index}>
  //       {row.map((cell, cellIndex) => (
  //         <td key={cellIndex}>{cell}</td>
  //       ))}
  //     </tr>
  //   ));
  // };

  return (
    <>
      <div className="uploadContainer">
        <div className="box-parent">
          <div>
            <span className="importText">IMPORT</span>
          </div>
          <br />
          <input
            type="file"
            id="file"
            accept=".xlsx , .csv"
            required="required"
            onChange={ReadUploadFile}
          />
          <label className="ChooseFile" htmlFor="file">
            Choose File
          </label>
        </div>

        <div className="select-file-container">
          <label className="label-import-1">Choose File Type</label>
          <select name="selectSla" id="selectSla">
            <option value="-1">{"Excell(.xls)"}</option>
          </select>
        </div>
        <div className="select-file-container">
          <label className="label-import-1">Select Languages</label>
          <select name="selectSla" id="selectSla">
            <option value="-1">{"English"}</option>
            <option value="-2">{"Turkish"}</option>
          </select>
        </div>
        
        <div className="select-file-container">
          <button onClick={() => navigate(`/editdepartment`)} className="editDepartmentbtn">Edit Department</button>
          <div
            className={
              isActiveDropdown_1 === true
                ? "checkbox-dropdown is-active"
                : "checkbox-dropdown"
            }
            onClick={() => setIsActiveDropdown_1(!isActiveDropdown_1)}
          >
            Departments
            <ul className="checkbox-dropdown-list">
              <li>
                <label>
                  <input type="checkbox" value="IT1" name="IT1" />
                  IT1
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="IT2" name="IT2" />
                  IT2
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="IT3" name="IT3" />
                  IT3
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="IT4" name="IT4" />
                  IT4
                </label>
              </li>
            </ul>
          </div>
        </div>
  
     

        {/* <div className="select-sla-container">
          <label className="label-import-1">Select Department</label>
          <select
            name="selectSla"
            id="selectSla"
            // onChange={event => setSelectedSla(event.target.value)}
          >
            <option value="-1">{"IT"}</option>
            <option value="-2">{"IT"}</option>
          </select>
        </div> */}
      </div>
    </>
  );
};

export default Upload;
