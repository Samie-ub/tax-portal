import React, { useState } from "react";
import { useFormContext } from "../../../hooks/useFormContext";
import { Grid } from "@mui/material";
import DigitalOne from "./DigitalOne";
import StandardOne from "./StandardOne";
import DigitalAssets from "./DigitalAssets";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../Dashboard.css";

function Status({ formStep, setFormStep }) {
  const { dispatch } = useFormContext();

  // States Starts Here

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState();
  const [ssnTwo, setSsnTwo] = useState();
  const [ssnThree, setSsnThree] = useState();
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [zip, setZip] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [residency, setResidency] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  // Value Selection States Starts Here
  const [selectedOptionTwo, setSelectedOptionTwo] = useState("");
  const [selectedValueDigital, setSelectedValueDigital] = useState("");
  const [dependentValue, setDependentValue] = useState(null);
  const [ageBlindnessValue, setAgeBlindnessValue] = useState(null);
  const [selectedValueButton, setSelectedValueButton] = useState("");

  // Value Selection States Ends Here

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
  const [taxOne, setTaxOne] = useState();
  const [taxTwo, setTaxTwo] = useState();
  const [taxThree, setTaxThree] = useState();
  const [taxFour, setTaxFour] = useState("");
  const [taxFive, setTaxFive] = useState("");
  const [taxSix, setTaxSix] = useState("");
  const [taxSeven, setTaxSeven] = useState("");
  const [taxEight, setTaxEight] = useState("");
  const [taxNine, setTaxNine] = useState("");
  const [taxTen, setTaxten] = useState("");
  const [taxEleven, setTaxEleven] = useState("");
  const [paymentOne, setPaymentOne] = useState();
  const [paymentTwo, setPaymentTwo] = useState();
  const [paymentThree, setPaymentThree] = useState();
  const [paymentFour, setPaymentFour] = useState();
  const [paymentFive, setPaymentFive] = useState("");
  const [paymentSix, setPaymentSix] = useState("");
  const [paymentSeven, setPaymentSeven] = useState("");
  const [paymentEight, setPaymentEight] = useState("");
  const [paymentNine, setPaymentNine] = useState("");
  const [paymentTen, setPaymentTen] = useState("");
  const [paymentEleven, setPaymentEleven] = useState("");
  const [refundOne, setRefundOne] = useState("");
  const [refundTwo, setRefundTwo] = useState("");
  const [refundThree, setRefundThree] = useState();
  const [refundFour, setRefundFour] = useState();
  const [refundFive, setRefundFive] = useState();
  const [refundSix, setRefundSix] = useState("");
  const [amountOne, setAmountOne] = useState();
  const [amountTwo, setAmountTwo] = useState();
  const [designeeName, setdesigneeName] = useState("");
  const [designeeNumber, setdesigneeNumber] = useState();
  const [designeeId, setdesigneeId] = useState();
  const [userSignature, setUserSignature] = useState("");
  const [date, setDate] = useState("");
  const [userOccupation, SetUserOccupation] = useState();
  const [irsPin, SetIrsPin] = useState();
  const [userPhoneNumber, SetUserPhoneNumber] = useState();
  const [userEmail, SetUserEmail] = useState("");
  const [preparerName, SetPreparerName] = useState("");
  const [preparerSignature, SetPreparerSignature] = useState("");
  const [preparerDate, SetPreparerDate] = useState("");
  const [ptin, SetPtin] = useState();
  const [firmName, SetFirmName] = useState("");
  const [firmPhNo, SetFirmPhNo] = useState();
  const [firmAddress, SetFirmAddress] = useState("");
  const [firmEin, SetFirmfirmEin] = useState();
  // States Ends Here

  // Functions Starts Here
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

  const handleButtonClick = (value) => {
    setSelectedValueButton(value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Functions Ends Here

  // Form Submit Function Starts Here
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const combineSsn = parseInt(ssn + ssnTwo + ssnThree);
    const combineZip = zip ;
    const forms = {
      firstName,
      middleName,
      lastName,
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
      taxOne,
      taxTwo,
      taxThree,
      taxFour,
      taxFive,
      taxSix,
      taxSeven,
      taxEight,
      taxNine,
      taxTen,
      taxEleven,
      paymentOne,
      paymentTwo,
      paymentThree,
      paymentFour,
      paymentFive,
      paymentSix,
      paymentSeven,
      paymentEight,
      paymentNine,
      paymentTen,
      paymentEleven,
      refundOne,
      refundTwo,
      refundThree,
      refundFour,
      refundFive,
      refundSix,
      amountOne,
      amountTwo,
      selectedValueButton,
      designeeName,
      designeeNumber,
      designeeId,
      userSignature,
      date,
      userOccupation,
      irsPin,
      userPhoneNumber,
      userEmail,
      preparerName,
      preparerSignature,
      preparerDate,
      ptin,
      firmName,
      firmPhNo,
      firmAddress,
      firmEin,
    };

    console.log(forms);
    try {
      const url = "https://tax-portal-backend.vercel.app/api/userform";
      const response = await axios.post(url, forms);
      if (response.status == 200 || response.status == 201) {
        window.location.reload();
        toast.success("Form Submitted");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast.error("Error Submitting Form");

      }
    }

    if (forms.firstName == "") {
      window.location.reload();
    }
  };
  // Form Submit Function Ends Here

  return (
    <>
      {/* Personal Information Starts Here */}
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
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <label htmlFor="">First Name</label>
                  <Grid item xs={12} lg={4}>
                    <input
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      required
                    />
                  </Grid>

                  <label htmlFor="">Middle Name</label>
                  <Grid item lg={4} xs={12}>
                    <input
                      type="text"
                      onChange={(e) => setMiddleName(e.target.value)}
                      value={middleName}
                      required
                    />
                  </Grid>
                  <label htmlFor="">Last Name</label>
                  <Grid item lg={4} xs={12}>
                    <input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                    />
                  </Grid>
                  <label htmlFor="">
                    SSN The IRIS requires your Social Security Number for
                    e-filling.*
                  </label>
                  <Grid container alignItems="center">
                    <Grid item lg={3} xs={12}>
                      <div className="row">
                        <input
                          className="no_input "
                          type="number"
                          onChange={(e) => {
                            const inputVal = e.target.value;
                            if (
                              inputVal.length <= 3 &&
                              /^\d*$/.test(inputVal)
                            ) {
                              setSsn(inputVal);
                            }
                          }}
                          value={ssn}
                          required
                        />
                        -
                        <input
                          className="no_input"
                          type="number"
                          onChange={(e) => {
                            const inputVal = e.target.value;
                            if (
                              inputVal.length <= 3 &&
                              /^\d*$/.test(inputVal)
                            ) {
                              setSsnTwo(inputVal);
                            }
                          }}
                          value={ssnTwo}
                          required
                        />
                        -
                        <input
                          className="no_input"
                          type="number"
                          onChange={(e) => {
                            const inputVal = e.target.value;
                            if (
                              inputVal.length <= 3 &&
                              /^\d*$/.test(inputVal)
                            ) {
                              setSsnThree(inputVal);
                            }
                          }}
                          value={ssnThree}
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <label htmlFor="">Date of Birth</label>
                  <Grid item lg={4} xs={12}>
                    <input
                      type="date"
                      id="birthday"
                      className="nom_input "
                      onChange={(e) => setDob(e.target.value)}
                      value={dob}
                    />
                  </Grid>

                  <label htmlFor="">Occupation</label>
                  <Grid item lg={4} xs={12}>
                    <input
                      type="text"
                      onChange={(e) => setOccupation(e.target.value)}
                      value={occupation}
                    />
                  </Grid>
                </Grid>
              </Grid>
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
          <DigitalAssets />
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
                <Grid container>
                  <Grid item xs={12} lg={12}>
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
                    <Grid item xs={12} lg={4}>
                      <input
                        list="countries"
                        type="text"
                        id="country"
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        required
                      />
                    </Grid>
                    <label htmlFor="">Address (Street number & name)</label>
                    <Grid item xs={12} lg={4}>
                      <input
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                      />
                    </Grid>

                    <label htmlFor="">
                      Apartment (provide apartment number only)
                    </label>
                    <Grid item xs={12} lg={4}>
                      <input
                        className="no_input "
                        type="text"
                        onChange={(e) => setApartment(e.target.value)}
                        value={apartment}
                        required
                      />
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item lg={3} xs={12}>
                        <label htmlFor="">ZIP Code</label>
                        <div className="zip_container">
                          <input
                            type="number"
                            className="no_input "
                            onChange={(e) => {
                              const inputVal = e.target.value;
                              if (
                                inputVal.length <= 5 &&
                                /^\d*$/.test(inputVal)
                              ) {
                                setZip(inputVal);
                              }
                            }}
                            value={zip}
                            required
                          />{" "}
                        </div>
                      </Grid>
                    </Grid>

                    <label htmlFor="">City town,or post office</label>
                    <Grid item xs={12} lg={4}>
                      <input
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                      />
                    </Grid>

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
                    <Grid item xs={12} lg={4}>
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
                    </Grid>

                    <label htmlFor="residency">Residency Status*</label>
                    <Grid item xs={12} lg={4}>
                      <input
                        list="countries"
                        type="text"
                        id="residency"
                        name="country"
                        onChange={(e) => setResidency(e.target.value)}
                        value={residency}
                        required
                      />
                    </Grid>

                    <div className="spouse_box">
                      <Grid
                        container
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                      >
                        <Grid item lg={8} sm={4}>
                          <p>
                            Presidential Election Campaign Check here if you, or
                            your spouse if filing jointly, want $3 to go to this
                            fund.Checking a box below will not change your tax
                            or refund.
                          </p>
                        </Grid>
                        <Grid item lg={1}>
                          <div className="align">
                            <label>yes</label>
                            <input
                              className="status-checkbox"
                              type="checkbox"
                              checked={selectedOption === "yes"}
                              onChange={() => handleCheckboxChange("yes")}
                            />
                          </div>
                        </Grid>
                        <Grid item lg={1}>
                          <div className="align">
                            <label>No</label>
                            <input
                              className="status-checkbox"
                              type="checkbox"
                              checked={selectedOption === "no"}
                              onChange={() => handleCheckboxChange("no")}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
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
      {/* Personal Information Ends Here */}

      {/* Digital Starts Here */}
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
      {/* Digital Ends Here */}

      {/* Dependents Starts Here */}

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
      {/* Dependents Ends Here */}

      {/* Income Starts Here */}

      {formStep === 7 && (
        <div className="status_form_main">
          <div className="icome_heading">
            <h1>Income</h1>
            <Grid
              container
              justifyContent={"space-around"}
              className="income-box-top"
            >
              <Grid item lg={6}>
                <p>
                  Attach Form(s) W-2 here. Also attach Forms W-2G and 1099-R if
                  tax was withheld.
                </p>
                <p>If you did not get a Form W-2, see instructions.</p>
              </Grid>
              <Grid
                item
                lg={6}
                sm={6}
                className="income_grid"
                textAlign="center"
              >
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
          <Grid container justifyContent={"start"}>
            <Grid item lg={10} xs={12}>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  1a. Total amount from Form(s) W-2, box 1 (see instructions)
                </label>
                <input
                  type="text"
                  onChange={(e) => setAmountForm(e.target.value)}
                  value={amountForm}
                />
              </Grid>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  b. Household employee wages not reported on Form(s) W-2
                </label>
                <input
                  type="text"
                  onChange={(e) => setHousehold(e.target.value)}
                  value={household}
                />
              </Grid>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  c. Tip income not reported on line 1a (see instructions)
                </label>
                <input
                  type="text"
                  onChange={(e) => setTipIncome(e.target.value)}
                  value={tipIncome}
                />
              </Grid>
              <Grid item lg={10} xs={12} className="income_text">
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
      {/* Income Ends Here */}

      {formStep === 8 && (
        <>
          <div className="status_form_main">
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} lg={12}>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    e. Taxable dependent care benefits from Form 2441, line 26
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCareBenefits(e.target.value)}
                    value={careBenefits}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    f. Employer-provided adoption benefits from Form 8839, line
                    29
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAdoptionBenefits(e.target.value)}
                    value={adoptionBenefits}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">g. Wages from Form 8919, line 6</label>
                  <input
                    type="text"
                    onChange={(e) => setWages(e.target.value)}
                    value={wages}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    h. Other earned income (see instructions)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setEarnedIncome(e.target.value)}
                    value={earnedIncome}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
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
              <Grid item xs={12} lg={12}>
                <Grid item lg={10} xs={12} className="income_text">
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
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    Capital gain or (loss). Attach Schedule D if required.
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCapitalGain(e.target.value)}
                    value={capitalGain}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    Other income from Schedule 1, line 10
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setOtherIncome(e.target.value)}
                    value={otherIncome}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    Add lines 1z, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your
                    total income
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAddLines(e.target.value)}
                    value={addLines}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
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
        </>
      )}
      {formStep === 11 && (
        <div className="status_form_main">
          <div className="status_heading">
            <h1>Tax</h1>
            <p className="status_heading_blue">
              16. (see instructions). Check if any from Form(s):
            </p>
          </div>
          <Grid container className="tax_three_container">
            <Grid item xs={12} lg={12}>
              <Grid container>
                <Grid item lg={3} xs={12}>
                  <div className="taxform_row">
                    <label htmlFor=""></label>
                    <input
                      type="number"
                      onChange={(e) => setTaxOne(e.target.value)}
                      value={taxOne}
                    />
                    <label htmlFor="">-</label>
                    <input
                      type="number"
                      onChange={(e) => setTaxTwo(e.target.value)}
                      value={taxTwo}
                    />
                    <label htmlFor="">-</label>
                    <input
                      type="number"
                      onChange={(e) => setTaxThree(e.target.value)}
                      value={taxThree}
                    />
                  </div>
                </Grid>
              </Grid>
              <label htmlFor="" className="income_text">
                17. Amount from Schedule 2, line 3
              </label>
              <Grid item lg={10} xs={12}>
                <input
                  type="text"
                  onChange={(e) => setTaxFour(e.target.value)}
                  value={taxFour}
                />
              </Grid>
              <label htmlFor="" className="income_text">
                18.Add lines 16 and 17
              </label>
              <Grid item lg={10} xs={12}>
                <input
                  type="text"
                  onChange={(e) => setTaxFive(e.target.value)}
                  value={taxFive}
                />
              </Grid>
              <label htmlFor="" className="income_text">
                19.Child tax credit or credit for other dependents from Schedule
                8812
              </label>
              <Grid item lg={10} xs={12}>
                <input
                  type="text"
                  onChange={(e) => setTaxSix(e.target.value)}
                  value={taxSix}
                />
              </Grid>
              <label htmlFor="" className="income_text">
                20. Amount from Schedule 3, line 8
              </label>
              <Grid item lg={10} xs={12}>
                <input
                  type="text"
                  onChange={(e) => setTaxSeven(e.target.value)}
                  value={taxSeven}
                />
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
      {formStep === 12 && (
        <div className="status_form_main">
          <div className="status_heading">
            <h1>Tax</h1>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} lg={12}>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">20. Add lines 19 and 20</label>
                  <input
                    type="text"
                    onChange={(e) => setTaxEight(e.target.value)}
                    value={taxEight}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    22. Subtract line 21 from line 18. If zero or less, enter
                    -0-
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setTaxNine(e.target.value)}
                    value={taxNine}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    33.Other taxes, including self-employment tax, from Schedule
                    2, line 21
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setTaxten(e.target.value)}
                    value={taxTen}
                  />
                </Grid>
                <Grid item lg={10} xs={12} className="income_text">
                  <label htmlFor="">
                    24.Add lines 22 and 23. This is your total tax
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setTaxEleven(e.target.value)}
                    value={taxEleven}
                  />
                </Grid>
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
        </div>
      )}
      {formStep === 13 && (
        <div className="status_form_main">
          <div className="digital_heading">
            <h1>Payments</h1>
            <p className="digital_heading_blue">
              If you have a qualifying child, attach Sch. EIC (27).
            </p>
            <p className="payment_p"> 25. Federal income tax withheld from:</p>
          </div>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} lg={12}>
              <Grid
                container
                justifyContent={"start"}
                className="payment_container"
              >
                <Grid item lg={12}>
                  <Grid container>
                    <Grid item lg={4}>
                      <label htmlFor="">a Form(s) W-2</label>
                    </Grid>
                    <Grid item lg={4}>
                      <input
                        type="number"
                        onChange={(e) => setPaymentOne(e.target.value)}
                        value={paymentOne}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12}>
                  <Grid container>
                    <Grid item lg={4}>
                      <label htmlFor="">b Form(s) 1099</label>
                    </Grid>
                    <Grid item lg={4}>
                      <input
                        type="number"
                        onChange={(e) => setPaymentTwo(e.target.value)}
                        value={paymentTwo}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12}>
                  <Grid container>
                    <Grid item lg={4}>
                      <label htmlFor="">c Other forms (see instructions)</label>
                    </Grid>
                    <Grid item lg={4}>
                      <input
                        type="number"
                        onChange={(e) => setPaymentThree(e.target.value)}
                        value={paymentThree}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12}>
                  <Grid container>
                    <Grid item lg={4}>
                      <label htmlFor="">d Add lines 25a through 25c</label>
                    </Grid>
                    <Grid item lg={4}>
                      <input
                        type="number"
                        onChange={(e) => setPaymentFour(e.target.value)}
                        value={paymentFour}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grid two */}
              <Grid
                container
                justifyContent={"space-evenly"}
                className="payment_form"
              >
                <Grid item lg={12}>
                  <Grid
                    container
                    className="income_three_container"
                    justifyContent={"space-evenly"}
                  >
                    <Grid item lg={8} xs={12}>
                      <label htmlFor="">
                        {" "}
                        2022 estimated tax payments and amount applied from 2021
                        return
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPaymentFive(e.target.value)}
                        value={paymentFive}
                      />
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <label htmlFor="">Earned income credit (EIC)</label>
                      <input
                        type="text"
                        onChange={(e) => setPaymentSix(e.target.value)}
                        value={paymentSix}
                      />
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <label htmlFor="">
                        Additional child tax credit from Schedule 8812
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPaymentSeven(e.target.value)}
                        value={paymentSeven}
                      />
                    </Grid>
                  </Grid>
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
      {formStep === 14 && (
        <div className="status_form_main">
          <Grid container justifyContent={"center"}>
            <Grid item lg={12} xs={12} className="payment_text">
              <label htmlFor="">
                29. American opportunity credit from Form 8863, line 8
              </label>
              <input
                type="text"
                onChange={(e) => setPaymentEight(e.target.value)}
                value={paymentEight}
              />
            </Grid>
            <Grid item lg={12} xs={12} className="payment_text">
              <label htmlFor="">30. Reserved for future use</label>
              <input
                type="text"
                onChange={(e) => setPaymentNine(e.target.value)}
                value={paymentNine}
              />
            </Grid>
            <Grid item lg={12} xs={12} className="payment_text">
              <label htmlFor="">
                32. Add lines 27, 28, 29, and 31. These are your total other
                payments and refundable
              </label>
              <input
                type="text"
                onChange={(e) => setPaymentTen(e.target.value)}
                value={paymentTen}
              />
            </Grid>
            <Grid item lg={12} xs={12} className="payment_text">
              <label htmlFor="">
                33. Add lines 25d, 26, and 32. These are your total payments
              </label>
              <input
                type="text"
                onChange={(e) => setPaymentEleven(e.target.value)}
                value={paymentEleven}
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
      {formStep === 15 && (
        <div className="status_form_main">
          <div className="digital_heading">
            <h1>Refund</h1>
            <p className="digital_heading_blue">
              Direct deposit? See instructions.
            </p>
            <Grid container justifyContent={"center"}>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  34. If line 33 is more than line 24, subtract line 24 from
                  line 33. <br />
                  This is the amount you overpaid
                </label>
                <input
                  type="text"
                  onChange={(e) => setRefundOne(e.target.value)}
                  value={refundOne}
                />
              </Grid>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  35a. Amount of line 34 you want refunded to you. If Form 8888
                  is <br />
                  attached, check here
                </label>
                <input
                  type="text"
                  onChange={(e) => setRefundTwo(e.target.value)}
                  value={refundTwo}
                />
              </Grid>
              <Grid container justifyContent={"center"} className="refund_cont">
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">35b. Routing number</label>
                  <input
                    type="number"
                    onChange={(e) => setRefundThree(e.target.value)}
                    value={refundThree}
                  />
                </Grid>
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">35c. Type </label>
                  <input
                    type="number"
                    onChange={(e) => setRefundFour(e.target.value)}
                    value={refundFour}
                  />
                </Grid>
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">35b. Account number</label>
                  <input
                    type="number"
                    onChange={(e) => setRefundFive(e.target.value)}
                    value={refundFive}
                  />
                </Grid>
              </Grid>
              <Grid item lg={10} xs={12} className="income_text">
                <label htmlFor="">
                  36. Amount of line 34 you want applied to your 2023 estimated
                  tax
                </label>
                <input
                  type="text"
                  onChange={(e) => setRefundSix(e.target.value)}
                  value={refundSix}
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
        </div>
      )}
      {formStep === 16 && (
        <div className="status_form_main">
          <div className="icome_heading">
            <Grid container justifyContent={"space-evenly"}>
              <Grid item lg={6}>
                <h2>Amount You Owe</h2>
              </Grid>
              <Grid item lg={6} className="income_grid">
                <h3>
                  For details on how to pay, <br /> go to <br />{" "}
                  www.irs.gov/Payments <br /> or
                  <br /> see instructio
                </h3>
              </Grid>
            </Grid>
          </div>
          <Grid container justifyContent={"center"}>
            <Grid item lg={10} xs={12} className="income_text">
              <label htmlFor="">37. This is the amount you owe.</label>
              <input
                type="number"
                onChange={(e) => setAmountOne(e.target.value)}
                value={amountOne}
              />
            </Grid>
            <Grid item lg={10} xs={12} className="income_text">
              <label htmlFor="">
                38. Estimated tax penalty (see instructions)
              </label>
              <input
                type="number"
                onChange={(e) => setAmountTwo(e.target.value)}
                value={amountTwo}
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

      {formStep === 17 && (
        <div className="status_form_main">
          <div className="digital_heading">
            <h1>Third Party Designee</h1>
            <p className="payment_p">
              {" "}
              Do you want to allow another person to discuss this return with
              the IRS? <br />
              (See instructions){" "}
            </p>
          </div>
          <Grid container justifyContent={"center"}>
            <Grid item lg={5}>
              <button
                className={`third_form_one_button ${
                  selectedValueButton === "Yes" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("Yes")}
              >
                yes
              </button>
              <button
                className={`third_form_one_button ${
                  selectedValueButton === "No" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("No")}
              >
                No
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"start"}
            className="third_form_container"
          >
            <Grid item lg={12}>
              <p className="third_form_P"> If Yes, Complete below:</p>
              <Grid container>
                <Grid item lg={4} xs={12}>
                  <label htmlFor="">Designee’s name</label>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <input
                    type="text"
                    onChange={(e) => setdesigneeName(e.target.value)}
                    value={designeeName}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container>
                <Grid item lg={4} xs={12}>
                  <label htmlFor="">Phone number</label>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <input
                    type="number"
                    onChange={(e) => setdesigneeNumber(e.target.value)}
                    value={designeeNumber}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container>
                <Grid item lg={4} xs={12}>
                  <label htmlFor="">Personal identification number </label>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <input
                    type="number"
                    onChange={(e) => setdesigneeId(e.target.value)}
                    value={designeeId}
                  />
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
      {formStep === 18 && (
        <div className="status_form_main">
          <div className="digital_heading">
            <h1>Sign Here</h1>
            <p className="sign_heading_blue">
              Joint return? See instructions. Keep a copy for your records.
            </p>
            <p className="digital_heading_para">
              Under penalties of perjury, I declare that I have examined this
              return and <br /> accompanying schedules and statements, and to
              the best of my knowledge <br /> and belief, they are true,
              correct, and complete. Declaration of preparer <br /> (other than
              taxpayer) is based on all information of which preparer has any{" "}
              <br /> knowledge
            </p>
          </div>
          <Grid container>
            <Grid tem xs={12} lg={12}>
              <Grid container justifyContent={"center"} className="refund_cont">
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">Your Signature</label>
                  <input
                    type="text"
                    onChange={(e) => setUserSignature(e.target.value)}
                    value={userSignature}
                  />
                </Grid>
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">Date </label>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </Grid>
                <Grid item lg={3} xs={12}>
                  <label htmlFor="">Your occupation</label>
                  <input
                    type="text"
                    onChange={(e) => SetUserOccupation(e.target.value)}
                    value={userOccupation}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent={"space-evenly"}>
                <Grid item lg={12} className="form_sign_color">
                  <Grid container className="sign-padding">
                    <Grid item lg={6}>
                      <label htmlFor="">
                        If the IRS sent your spouse an Identity <br />{" "}
                        Protection PIN, enter it here (see inst.)
                      </label>
                    </Grid>
                    <Grid item lg={5} xs={12}>
                      <input
                        type="number"
                        onChange={(e) => SetIrsPin(e.target.value)}
                        value={irsPin}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent={"space-evenly"}>
                <Grid item lg={12} className="form_sign_color">
                  <Grid container>
                    <Grid item lg={6} xs={12}>
                      <label htmlFor="">Phone Numbr</label>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12}>
                      <input
                        type="number"
                        onChange={(e) => SetUserPhoneNumber(e.target.value)}
                        value={userPhoneNumber}
                      />
                    </Grid>
                    <Grid item lg={6} md={12} xs={12}>
                      <label htmlFor="">Email Address</label>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12}>
                      <input
                        type="email"
                        onChange={(e) => SetUserEmail(e.target.value)}
                        value={userEmail}
                      />
                    </Grid>
                  </Grid>
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
      {formStep === 19 && (
        <div className="status_form_main">
          <div className="digital_heading">
            <h1>Paid Prepare Used Only</h1>
            <p className="digital_heading_blue">
              Joint return? See instructions. Keep a copy for your records.
            </p>
          </div>
          <Grid container justifyContent="center">
            <Grid item tem xs={12} md={12} lg={12}>
              <Grid container justifyContent={"center"}>
                <Grid item className="paid_container">
                  <Grid container justifyContent="center">
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Preparer’s name </label>
                      <input
                        type="text"
                        onChange={(e) => SetPreparerName(e.target.value)}
                        value={preparerName}
                      />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Preparer’s signature</label>
                      <input
                        type="text"
                        onChange={(e) => SetPreparerSignature(e.target.value)}
                        value={preparerSignature}
                      />
                    </Grid>
                    <Grid item lg={3} md={12} xs={12}>
                      <label htmlFor="">Date</label>
                      <input
                        type="date"
                        onChange={(e) => SetPreparerDate(e.target.value)}
                        value={preparerDate}
                      />
                    </Grid>
                    <Grid item lg={3} md={12} xs={12}>
                      <label htmlFor="">PTIN</label>
                      <input
                        type="number"
                        onChange={(e) => SetPtin(e.target.value)}
                        value={ptin}
                      />
                    </Grid>
                    <Grid container className="paid_chkbox">
                      <Grid item lg={2}>
                        <label htmlFor="">Self-employed</label>
                      </Grid>

                      <Grid item lg={2}>
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"space-evenly"}
                    className="padi_container_three"
                  >
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Firm’s name</label>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <input
                        type="text"
                        onChange={(e) => SetFirmName(e.target.value)}
                        value={firmName}
                      />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Phone no.</label>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <input
                        type="number"
                        onChange={(e) => SetFirmPhNo(e.target.value)}
                        value={firmPhNo}
                      />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Firm’s address</label>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <input
                        type="text"
                        onChange={(e) => SetFirmAddress(e.target.value)}
                        value={firmAddress}
                      />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                      <label htmlFor="">Firm’s EIN</label>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <input
                        type="number"
                        onChange={(e) => SetFirmfirmEin(e.target.value)}
                        value={firmEin}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={handleSubmitForm}>
              submit
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Status;
