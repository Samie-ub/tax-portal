const Workout = require("../models/FormModal");
const mongoose = require("mongoose");

// create a new workout
const createWorkout = async (req, res) => {
  // add doc to db
  const {
    firstName,
    middleName,
    combineSsn,
    dob,
    occupation,
    address,
    apartment,
    combineZip,
    city,
    state,
    country,
    residency,
    filingJointly,
    fillingStatus,
    digitalAssets,
    canClaim,
    ageBlindness,
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
  } = req.body;

  let emptyFields = [];

  if (!firstName) {
    emptyFields.push("firstName");
  }
  if (!middleName) {
    emptyFields.push("middleName");
  }
  if (!combineSsn) {
    emptyFields.push("combineSsn");
  }
  if (!dob) {
    emptyFields.push("dob");
  }
  if (!occupation) {
    emptyFields.push("occupation");
  }
  if (!address) {
    emptyFields.push("address");
  }
  if (!combineZip) {
    emptyFields.push("combineZip");
  }
  if (!apartment) {
    emptyFields.push("apartment");
  }
  if (!city) {
    emptyFields.push("city");
  }
  if (!country) {
    emptyFields.push("country");
  }
  if (!state) {
    emptyFields.push("country");
  }
  if (!residency) {
    emptyFields.push("residency");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the feilds", emptyFields });
  }
  try {
    const workout = await Workout.create({
      firstName,
      middleName,
      combineSsn,
      dob,
      occupation,
      address,
      combineZip,
      apartment,
      city,
      country,
      residency,
      state,
      filingJointly,
      fillingStatus,
      digitalAssets,
      canClaim,
      ageBlindness,
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
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
};
