import React, { useState } from "react";
import { useFormContext } from "../../../hooks/useFormContext";
import { Grid } from "@mui/material";
import DigitalOne from "./DigitalOne";
import StandardOne from "./StandardOne";
import "../Dashboard.css";
import DependentOne from "./DependentOne";
import DigitalAssets from './DigitalAssets'

function Status() {
  const [formStep, setFormStep] = useState(1);
  console.log("======>",formStep)
  const { dispatch } = useFormContext();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [ssn, setSsn] = useState();
  const [ssnTwo, setSsnTwo] = useState();
  const [ssnThree, setSsnThree] = useState();
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [zip, setZip] = useState();
  const [zipTwo, setZipTwo] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [residency, setResidency] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionTwo, setSelectedOptionTwo] = useState("");
  const [selectedValueDigital, setSelectedValueDigital] = useState("");
  const [dependentValue, setDependentValue] = useState(null);
  const [ageBlindnessValue, setAgeBlindnessValue] = useState(null);

  const [dependentFirstName, setDependentFirstName] = useState("");
  const [dependentTwoFirstName, setDependentTwoFirstName] = useState("");
  const [dependentThreeFirstName, setDependentThreeFirstName] = useState("");
  const [dependentFourFirstName, setDependentFourFirstName] = useState("");
  const [dependentLastName, setDependentLastName] = useState("");
  const [dependentTwoLastName, setDependentTwoLastName] = useState("");
  const [dependentThreeLastName, setDependentThreeLastName] = useState("");
  const [dependentFourLastName, setDependentFourLastName] = useState("");
  const [dependentSsn, setDependentSsn] = useState();
  const [dependentTwoSsn, setDependentTwoSsn] = useState();
  const [dependentThreeSsn, setDependentThreeSsn] = useState();
  const [dependentFourSsn, setDependentFourSsn] = useState();
  const [dependentRelationship, setDependentRelationship] = useState("");
  const [dependentTwoRelationship, setDependentTwoRelationship] = useState("");
  const [dependentThreeRelationship, setDependentThreeRelationship] =
    useState("");
  const [dependentFourRelationship, setDependentFourRelationship] =
    useState("");
  const [taxCredit, setTaxCredit] = useState("");
  const [taxCreditTwo, setTaxCreditTwo] = useState("");
  const [taxCreditThree, setTaxCreditThree] = useState("");
  const [taxCreditFour, setTaxCreditFour] = useState("");
  const [dependentsCredit, setDependentsCredit] = useState("");
  const [dependentsCreditTwo, setDependentsCreditTwo] = useState("");
  const [dependentsCreditThree, setDependentsCreditThree] = useState("");
  const [dependentsCreditFour, setDependentsCreditFour] = useState("");
  const [careBenefits, setCareBenefits] = useState("");
  const [adoptionBenefits, setAdoptionBenefits] = useState("");
  const [wages, setWages] = useState("");
  const [earnedIncome, setEarnedIncome] = useState("");
  const [combatPay, setCombatPay] = useState("");
  const [amountForm, setAmountForm] = useState("");
  const [household, setHousehold] = useState("");
  const [tipIncome, setTipIncome] = useState("");
  const [medicaidWaiver, setMedicaidWaiver] = useState("");
  const [taxExempt, setTaxExempt] = useState("");
  const [taxableInterest, setTaxableInterest] = useState("");
  const [qualifiedDividends, setQualifiedDividends] = useState("");
  const [ordinaryDividends, setOrdinaryDividends] = useState("");
  const [iraDistributions, setIraDistributions] = useState("");
  const [taxableAmount, setTaxableAmount] = useState("");
  const [pensions, setPensions] = useState("");
  const [ssBenefits, setSsBenefits] = useState("");
  const [lumpSum, setLumpSum] = useState("");
  const [capitalGain, setCapitalGain] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [addLines, setAddLines] = useState("");
  const [adjustments, setAdjustments] = useState("");
  // Functions
  const handleDependentCheckboxChange = (event) => {
    const value = event.target.value;
    setDependentValue(value === dependentValue ? null : value);
  };

  const handleAgeBlindnessCheckboxChange = (event) => {
    const value = event.target.value;
    setAgeBlindnessValue(value === ageBlindnessValue ? null : value);
  };

  const handleCheckboxChangeDependent = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChangeDigital = (event) => {
    setSelectedValueDigital(event.target.value);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleRadioChange = (option) => {
    setSelectedOptionTwo(option);
  };

  const handleContinue = () => {
    setFormStep(formStep + 1);
  };

  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const combineSsn = parseInt(ssn + ssnTwo + ssnThree);
    const combineZip = parseInt(zip + zipTwo);
    const forms = {
      firstName,
      middleName,
      combineSsn,
      dob,
      occupation,
      country,
      address,
      apartment,
      combineZip,
      city,
      state,
      residency,
      filingJointly: selectedOption,
      fillingStatus: selectedOptionTwo,
      digitalAssets: selectedValueDigital,
      canClaim: dependentValue,
      ageBlindness: ageBlindnessValue,
      dependentFirstName,
      dependentTwoFirstName,
      dependentThreeFirstName,
      dependentFourFirstName,
      dependentLastName,
      dependentTwoLastName,
      dependentThreeLastName,
      dependentFourLastName,
      dependentSsn,
      dependentTwoSsn,
      dependentThreeSsn,
      dependentFourSsn,
      dependentRelationship,
      dependentTwoRelationship,
      dependentThreeRelationship,
      dependentFourRelationship,
      taxCredit,
      taxCreditTwo,
      taxCreditThree,
      taxCreditFour,
      dependentsCredit,
      dependentsCreditTwo,
      dependentsCreditThree,
      dependentsCreditFour,
      careBenefits,
      adoptionBenefits,
      wages,
      earnedIncome,
      combatPay,
      amountForm,
      household,
      tipIncome,
      medicaidWaiver,
      taxExempt,
      taxableInterest,
      qualifiedDividends,
      ordinaryDividends,
      iraDistributions,
      taxableAmount,
      pensions,
      ssBenefits,
      lumpSum,
      capitalGain,
      otherIncome,
      addLines,
      adjustments,
    };
    console.log(forms);

    const response = await fetch("https://tax-portal-backend.vercel.app/api/userform", {
      method: "POST",
      body: JSON.stringify(forms),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setFirstName("");
      setMiddleName("");
      setSsn();
      setSsnTwo();
      setSsnThree();
      setDob("");
      setOccupation("");
      setError(null);
      setEmptyFields([]);
      console.log("new Form added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      {formStep === 1 && (
        <div className="status_form_main">
          <div className="status_heading">
            <h1>Personal information</h1>
            <p>
              If you checked the MFS box, enter the name of your spouse. If you
              checked the HOH or QSS box, enter the child’s name if the
              qualifying person is a child but not your dependent:
            </p>
          </div>
          <hr />
          <div className="status_form_container">
            <form action="submit" className="status_form">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
              <label htmlFor="">Middle Name</label>
              <input
                type="text"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
                required
              />
              <label htmlFor="">
                SSN The IRIS requires your Social Security Number for
                e-filling.*
              </label>
              <div className="row">
                <input
                  className="no_input "
                  type="number"
                  onChange={(e) => setSsn(e.target.value)}
                  value={ssn}
                  maxLength={3}
                  required
                />
                -
                <input
                  className="no_input"
                  type="number"
                  onChange={(e) => setSsnTwo(e.target.value)}
                  value={ssnTwo}
                  maxLength={3}
                  required
                />
                -
                <input
                  className="no_input"
                  type="number"
                  onChange={(e) => setSsnThree(e.target.value)}
                  value={ssnThree}
                  maxLength={3}
                  required
                />
              </div>
              <label htmlFor="">Date of Birth</label>
              <input
                type="date"
                id="birthday"
                className="no_input "
                onChange={(e) => setDob(e.target.value)}
                value={dob}
              />
              <label htmlFor="">Occupation</label>
              <input
                type="text"
                onChange={(e) => setOccupation(e.target.value)}
                value={occupation}
              />
            </form>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
          {/* end here */}
        </div>
      )}
      {formStep === 2 && (
        <>
        <DigitalAssets/>
          <div>
            <div className="status_form_main">
              <div className="status_heading">
                <h1>Personal information</h1>
                <p className="status_heading_blue">
                  Whats your mailing address?
                </p>
              </div>
              <hr />

              <form action="submit" className="status_form">
                <datalist id="countries">
                  {[
                    "USA",
                    "Canada",
                    "Mexico",
                    "Brazil",
                    "Argentina",
                    "Chile",
                    "Peru",
                    "Colombia",
                  ].map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
                <label htmlFor="">Country</label>
                <input
                  list="countries"
                  type="text"
                  id="country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  required
                />
                <label htmlFor="">Address (Street number & name)</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
                <label htmlFor="">
                  Apartment (provide apartment number only)
                </label>
                <input
                  className="no_input "
                  type="text"
                  onChange={(e) => setApartment(e.target.value)}
                  value={apartment}
                  required
                />
                <label htmlFor="">ZIP Code</label>
                <div className="zip_container">
                  <input
                    type="number"
                    className="no_input "
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}
                    required
                  />{" "}
                  -
                  <input
                    type="number"
                    className="no_input "
                    onChange={(e) => setZipTwo(e.target.value)}
                    value={zipTwo}
                    required
                  />
                </div>
                <label htmlFor="">City town,or post office</label>
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
                <datalist id="countries">
                  {[
                    "USA",
                    "Canada",
                    "Mexico",
                    "Brazil",
                    "Argentina",
                    "Chile",
                    "Peru",
                    "Colombia",
                  ].map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
                <label htmlFor="">State*</label>
                <input
                  list="countries"
                  type="text"
                  id="country"
                  name="country"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  required
                />
                <datalist id="countries">
                  {[
                    "USA",
                    "Canada",
                    "Mexico",
                    "Brazil",
                    "Argentina",
                    "Chile",
                    "Peru",
                    "Colombia",
                  ].map((country) => (
                    <option key={country} value={country} />
                  ))}
                </datalist>
                <label htmlFor="residency">Residency Status*</label>
                <input
                  list="countries"
                  type="text"
                  id="residency"
                  name="country"
                  onChange={(e) => setResidency(e.target.value)}
                  value={residency}
                  required
                />

                <div className="spouse_box">
                  <Grid container justifyContent={"space-between"}>
                    <Grid item lg={8}>
                      <p>
                        Presidential Election Campaign Check here if you, or
                        your spouse if filing jointly, want $3 to go to this
                        fund. Checking a box below will not change your tax or
                        refund.
                      </p>
                    </Grid>
                    <Grid item lg={1}>
                      <input
                        type="checkbox"
                        checked={selectedOption === "yes"}
                        onChange={() => handleCheckboxChange("yes")}
                      />
                      <label>yes</label>
                    </Grid>
                    <Grid item lg={1}>
                      <input
                        type="checkbox"
                        checked={selectedOption === "no"}
                        onChange={() => handleCheckboxChange("no")}
                      />
                      <label>No</label>
                    </Grid>
                  </Grid>
                </div>
                <div></div>
              </form>
            </div>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 3 && (
        <>
          <div className="status_form_main">
            <div className="status_heading">
              <h1>Personal information</h1>
              <p className="status_heading_blue">Whats your Filling Status?</p>

              <div>
                <div className="radio_box">
                  <input
                    type="radio"
                    name="status"
                    value="single"
                    checked={selectedOptionTwo === "single"}
                    onChange={() => handleRadioChange("single")}
                  />
                  <label htmlFor="">Single</label>
                </div>
                <div className="radio_box">
                  <input
                    type="radio"
                    name="status"
                    value="married_filing_jointly"
                    checked={selectedOptionTwo === "married_filing_jointly"}
                    onChange={() => handleRadioChange("married_filing_jointly")}
                  />
                  <label htmlFor="">Married Filling Jointly</label>
                </div>
                <div className="radio_box">
                  <input
                    type="radio"
                    name="status"
                    value="married_filing_separately"
                    checked={selectedOptionTwo === "married_filing_separately"}
                    onChange={() =>
                      handleRadioChange("married_filing_separately")
                    }
                  />
                  <label htmlFor="">Married filing separately (MFS)</label>
                </div>
                <div className="radio_box">
                  <input
                    type="radio"
                    name="status"
                    value="head_of_household"
                    checked={selectedOptionTwo === "head_of_household"}
                    onChange={() => handleRadioChange("head_of_household")}
                  />
                  <label htmlFor="">Head of household (HOH)</label>
                </div>
                <div className="radio_box">
                  <input
                    type="radio"
                    name="status"
                    value="qualifying_surviving_spouse"
                    checked={
                      selectedOptionTwo === "qualifying_surviving_spouse"
                    }
                    onChange={() =>
                      handleRadioChange("qualifying_surviving_spouse")
                    }
                  />
                  <label htmlFor="">Qualifying surviving spouse (QSS)</label>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 4 && (
        <>
          <DigitalOne
            selectedValueDigital={selectedValueDigital}
            handleCheckboxChangeDigital={handleCheckboxChangeDigital}
          />
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 5 && (
        <>
          <StandardOne
            dependentValue={dependentValue}
            ageBlindnessValue={ageBlindnessValue}
            handleDependentCheckboxChange={handleDependentCheckboxChange}
            handleAgeBlindnessCheckboxChange={handleAgeBlindnessCheckboxChange}
          />
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 6 && (
        <>
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
                onChange={handleCheckboxChangeDependent}
              />
            </div>
            <div className="tabel_container">
              <table className="depend_tabel">
                <tr>
                  <th>First name</th>
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentFirstName(e.target.value)}
                    value={dependentFirstName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentTwoFirstName(e.target.value)}
                    value={dependentTwoFirstName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentThreeFirstName(e.target.value)}
                    value={dependentThreeFirstName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentFourFirstName(e.target.value)}
                    value={dependentFourFirstName}
                  />
                </tr>
              </table>
              <table className="depend_tabel">
                <tr>
                  <th>Last name</th>
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentLastName(e.target.value)}
                    value={dependentLastName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentTwoLastName(e.target.value)}
                    value={dependentTwoLastName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentThreeLastName(e.target.value)}
                    value={dependentThreeLastName}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentFourLastName(e.target.value)}
                    value={dependentFourLastName}
                  />
                </tr>
              </table>
              <table className="depend_tabel">
                <tr>
                  <th>Social security no</th>
                </tr>
                <tr>
                  <input
                    type="number"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentSsn(e.target.value)}
                    value={dependentSsn}
                  />
                </tr>
                <tr>
                  <input
                    type="number"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentTwoSsn(e.target.value)}
                    value={dependentTwoSsn}
                  />
                </tr>
                <tr>
                  <input
                    type="number"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentThreeSsn(e.target.value)}
                    value={dependentThreeSsn}
                  />
                </tr>
                <tr>
                  <input
                    type="number"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentFourSsn(e.target.value)}
                    value={dependentFourSsn}
                  />
                </tr>
              </table>
              <table className="depend_tabel">
                <tr>
                  <th>Relationship to You</th>
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentRelationship(e.target.value)}
                    value={dependentRelationship}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) =>
                      setDependentTwoRelationship(e.target.value)
                    }
                    value={dependentTwoRelationship}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) =>
                      setDependentThreeRelationship(e.target.value)
                    }
                    value={dependentThreeRelationship}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) =>
                      setDependentFourRelationship(e.target.value)
                    }
                    value={dependentFourRelationship}
                  />
                </tr>
              </table>
              <table className="depend_tabel_last">
                <tr>
                  <th>Child tax credit</th>
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setTaxCredit(e.target.value)}
                    value={taxCredit}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setTaxCreditTwo(e.target.value)}
                    value={taxCreditTwo}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setTaxCreditThree(e.target.value)}
                    value={taxCreditThree}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setTaxCreditFour(e.target.value)}
                    value={taxCreditFour}
                  />
                </tr>
              </table>
              <table className="depend_tabel_last">
                <tr>
                  <th>Credit for dependents</th>
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentsCredit(e.target.value)}
                    value={dependentsCredit}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentsCreditTwo(e.target.value)}
                    value={dependentsCreditTwo}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentsCreditThree(e.target.value)}
                    value={dependentsCreditThree}
                  />
                </tr>
                <tr>
                  <input
                    type="text"
                    className={isChecked ? "enabled-input" : "disabled-input"}
                    disabled={!isChecked}
                    onChange={(e) => setDependentsCreditFour(e.target.value)}
                    value={dependentsCreditFour}
                  />
                </tr>
              </table>
            </div>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 7 && (
        <div className="status_form_main">
          <div className="icome_heading">
            <h1>Income</h1>
            <Grid container justifyContent={"space-evenly"}>
              <Grid item lg={6}>
                <p>
                  Attach Form(s) W-2 here. Also attach Forms W-2G and 1099-R if
                  tax was withheld.
                </p>
                <p>If you did not get a Form W-2, see instructions.</p>
              </Grid>
              <Grid item lg={6} className="income_grid">
                <h3>Standard Deduction for:</h3>
                <p>• Single or Married filing separately, $12,950</p>
                <p>
                  • Married filing jointly or Qualifying surviving spouse,
                  $25,900
                </p>
                <p>• Head of household, $19,400</p>
                <p>
                  • If you checked any box under Standard Deduction, see
                  instructions
                </p>
              </Grid>
            </Grid>
          </div>
          <Grid container justifyContent={"center"}>
            <Grid item lg={12} className="income_text">
              <label htmlFor="">
                1a. Total amount from Form(s) W-2, box 1 (see instructions)
              </label>
              <input
                type="text"
                onChange={(e) => setAmountForm(e.target.value)}
                value={amountForm}
              />
            </Grid>
            <Grid item lg={12} className="income_text">
              <label htmlFor="">
                b. Household employee wages not reported on Form(s) W-2
              </label>
              <input
                type="text"
                onChange={(e) => setHousehold(e.target.value)}
                value={household}
              />
            </Grid>
            <Grid item lg={12} className="income_text">
              <label htmlFor="">
                c. Tip income not reported on line 1a (see instructions)
              </label>
              <input
                type="text"
                onChange={(e) => setTipIncome(e.target.value)}
                value={tipIncome}
              />
            </Grid>
            <Grid item lg={12} className="income_text">
              <label htmlFor="">
                d. Medicaid waiver payments not reported on Form(s) W-2 (see
                instructions)
              </label>
              <input
                type="text"
                onChange={(e) => setMedicaidWaiver(e.target.value)}
                value={medicaidWaiver}
              />
            </Grid>
          </Grid>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </div>
      )}
      {formStep === 8 && (
        <>
          <div className="status_form_main">
            <Grid container justifyContent={"center"}>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  e. Taxable dependent care benefits from Form 2441, line 26
                </label>
                <input
                  type="text"
                  onChange={(e) => setCareBenefits(e.target.value)}
                  value={careBenefits}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  f. Employer-provided adoption benefits from Form 8839, line 29
                </label>
                <input
                  type="text"
                  onChange={(e) => setAdoptionBenefits(e.target.value)}
                  value={adoptionBenefits}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">g. Wages from Form 8919, line 6</label>
                <input
                  type="text"
                  onChange={(e) => setWages(e.target.value)}
                  value={wages}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  h. Other earned income (see instructions)
                </label>
                <input
                  type="text"
                  onChange={(e) => setEarnedIncome(e.target.value)}
                  value={earnedIncome}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  i. Nontaxable combat pay election (see instructions)
                </label>
                <input
                  type="text"
                  onChange={(e) => setCombatPay(e.target.value)}
                  value={combatPay}
                />
              </Grid>
            </Grid>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </>
      )}
      {formStep === 9 && (
        <div className="status_form_main">
          <Grid container justifyContent={"space-evenly"}>
            <Grid item lg={12}>
              <Grid
                container
                className="income_three_container"
                justifyContent={"space-evenly"}
              >
                <Grid item lg={5}>
                  <label htmlFor="">2a. Tax-exempt interest</label>
                  <input
                    type="text"
                    onChange={(e) => setTaxExempt(e.target.value)}
                    value={taxExempt}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">2b. Taxable interest</label>
                  <input
                    type="text"
                    onChange={(e) => setTaxableInterest(e.target.value)}
                    value={taxableInterest}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">3a. Qualified dividends</label>
                  <input
                    type="text"
                    onChange={(e) => setQualifiedDividends(e.target.value)}
                    value={qualifiedDividends}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">3b. Ordinary dividends</label>
                  <input
                    type="text"
                    onChange={(e) => setOrdinaryDividends(e.target.value)}
                    value={ordinaryDividends}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">4a. IRA distributions</label>
                  <input
                    type="text"
                    onChange={(e) => setIraDistributions(e.target.value)}
                    value={iraDistributions}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">4b.Taxable amount</label>
                  <input
                    type="text"
                    onChange={(e) => setTaxableAmount(e.target.value)}
                    value={taxableAmount}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">5a. Pensions and annuities</label>
                  <input
                    type="text"
                    onChange={(e) => setPensions(e.target.value)}
                    value={pensions}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">5b. Taxable amount</label>
                  <input type="text" />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">6a.Social security benefits</label>
                  <input
                    type="text"
                    onChange={(e) => setSsBenefits(e.target.value)}
                    value={ssBenefits}
                  />
                </Grid>
                <Grid item lg={5}>
                  <label htmlFor="">6b. Taxable amount</label>
                  <input type="text" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
        </div>
      )}
      {formStep === 10 && (
        <>
          <div className="status_form_main">
            <Grid container justifyContent={"center"}>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  c. If you elect to use the lump-sum election method, check
                  here
                </label>
                <input
                  type="text"
                  onChange={(e) => setLumpSum(e.target.value)}
                  value={lumpSum}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  Capital gain or (loss). Attach Schedule D if required.
                </label>
                <input
                  type="text"
                  onChange={(e) => setCapitalGain(e.target.value)}
                  value={capitalGain}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">Other income from Schedule 1, line 10</label>
                <input
                  type="text"
                  onChange={(e) => setOtherIncome(e.target.value)}
                  value={otherIncome}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  Add lines 1z, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total
                  income
                </label>
                <input
                  type="text"
                  onChange={(e) => setAddLines(e.target.value)}
                  value={addLines}
                />
              </Grid>
              <Grid item lg={12} className="income_text">
                <label htmlFor="">
                  Adjustments to income from Schedule 1, line 26
                </label>
                <input
                  type="text"
                  onChange={(e) => setAdjustments(e.target.value)}
                  value={adjustments}
                />
              </Grid>
            </Grid>
<div className="center">
           <button className="next_btn" onClick={handleSubmitForm}>
        submit
      </button>
          </div>
          </div>
        </>
      )}
      
    </>
  );
}

export default Status;
