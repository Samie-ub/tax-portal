import React, { useState } from "react";
import "../Dashboard.css";
function DependentOne() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="status_form_main">
      <h1>Dependents</h1>
      <div className="dependet_heading">
        <p className="digital_heading_blue">
          If more than four dependents, see instructions and check here
        </p>
        <input
          className="depend_box"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="tabel_container">
        <table className="depend_tabel">
          <tr>
            <th>First name</th>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Last name</th>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Social security no</th>
          </tr>
          <tr>
            <input type="number" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="number" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="number" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="number" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Relationship to You</th>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
        <table className="depend_tabel_last">
          <tr>
            <th>Child tax credit</th>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
        <table className="depend_tabel_last">
          <tr>
            <th>Credit for dependents</th>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
          <tr>
            <input type="text" className={isChecked ? "enabled-input" : "disabled-input"} disabled={!isChecked}/>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DependentOne;
