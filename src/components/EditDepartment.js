import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./EditDepartment.css";

export default function EditDepartment() {
  const [isActiveDropdown_1, setIsActiveDropdown_1] = useState(false);

  return (
    <Layout>
      <div className="edit-parent">
        <div className="editDepartContainer">
          <div className="editBoard">
            <div className="manuelEdit">
              <div className="select-file-container">
                <div
                  className={
                    isActiveDropdown_1 === true
                      ? "checkbox-dropdown2 is-active"
                      : "checkbox-dropdown2"
                  }
                  onClick={() => setIsActiveDropdown_1(!isActiveDropdown_1)}
                >
                  Sub Departments
                  <ul className="checkbox-dropdown2-list">
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
                    <li>
                      <label>
                        <input type="checkbox" value="OTHER" name="OTHER" />
                        OTHER
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <input
                className="input-text"
                id="text"
                type="text"
                placeholder="Insert Department"
                autoFocus
                required
              />
              <button className="SubmitDepartment">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
