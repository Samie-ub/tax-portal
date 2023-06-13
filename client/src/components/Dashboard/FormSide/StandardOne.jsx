import React, { useState } from "react";

function StandardOne({
  dependentValue,
  ageBlindnessValue,
  handleDependentCheckboxChange,
  handleAgeBlindnessCheckboxChange,
}) {
  const [dependentValues, setDependentValues] = useState({
    youDependent: false,
    spouseDependent: false,
    separateReturn: false,
  });

  const [ageBlindnessValues, setAgeBlindnessValues] = useState({
    bornBefore1958: false,
    isBlind: false,
  });


  
  return (
    <div className="status_form_main">
      <h1>Standard Deduction</h1>
      <p className="standard_heading_blue">Someone can claim:</p>
      <div className="radio_box">
        <input
          type="checkbox"
          value="You as a dependent"
          checked={dependentValue === "You as a dependent"}
          onChange={handleDependentCheckboxChange}
        />
        <label htmlFor="youDependent">You as a dependent</label>
      </div>
      <div className="radio_box">
        <input
          type="checkbox"
          value="Your spouse as a dependent"
          checked={dependentValue === "Your spouse as a dependent"}
          onChange={handleDependentCheckboxChange}
        />
        <label htmlFor="spouseDependent">Your spouse as a dependent</label>
      </div>
      <div className="radio_box">
        <input
          type="checkbox"
          value="Spouse itemizes on a separate return or you were a dual-status alie"
          checked={dependentValue === "Spouse itemizes on a separate return or you were a dual-status alie"}
          onChange={handleDependentCheckboxChange}
        />
        <label htmlFor="separateReturn">
          Spouse itemizes on a separate return or you were a dual-status alie
        </label>
      </div>
      <p className="stand_p">Age/Blindness</p>
      <div className="radio_box">
        <input
          type="checkbox"
          value="
          Were born before January 2, 1958"
          checked={ageBlindnessValue === "Were born before January 2, 1958"}
          onChange={handleAgeBlindnessCheckboxChange}
        />
        <label htmlFor="bornBefore1958">Were born before January 2, 1958</label>
      </div>
      <div className="radio_box">
        <input
          type="checkbox"
          value="Are blind"
          checked={ageBlindnessValue === "Are blind"}
          onChange={handleAgeBlindnessCheckboxChange}
        />
        <label htmlFor="">Are blind</label>
      </div>
      <div className="radio_box">
        <input
          type="checkbox"
          value="Was born before January 2, 1958"
          checked={ageBlindnessValue === "Was born before January 2, 1958"}
          onChange={handleAgeBlindnessCheckboxChange}
        />
        <label htmlFor="">Was born before January 2, 1958</label>
      </div>
      <div className="radio_box">
        <input
          type="checkbox"
          value="is blind"
          checked={ageBlindnessValue === "is blind"}
          onChange={handleAgeBlindnessCheckboxChange}
        />
        <label htmlFor="isBlind">is blind</label>
      </div>
    </div>
  );
}

export default StandardOne;
