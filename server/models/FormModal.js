const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFormSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    combineSsn: {
      type: Number,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: true,
    },
    combineZip: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    residency: {
      type: String,
      required: true,
    },
    filingJointly: {
      type: String,
      required: true,
    },
    fillingStatus: {
      type: String,
      required: true,
    },
    digitalAssets: {
      type: String,
      required: true,
    },
    canClaim: {
      type: String,
      required: true,
    },
    ageBlindness: {
      type: String,
      required: true,
    },
    dependentFirstName: {
      type: String,
      required: false,
    },
    dependentTwoFirstName: {
      type: String,
      required: false,
    },
    dependentThreeFirstName: {
      type: String,
      required: false,
    },
    dependentFourFirstName: {
      type: String,
      required: false,
    },
    dependentLastName: {
      type: String,
      required: false,
    },
    dependentTwoLastName: {
      type: String,
      required: false,
    },
    dependentThreeLastName: {
      type: String,
      required: false,
    },
    dependentFourLastName: {
      type: String,
      required: false,
    },
    dependentSsn: {
      type: Number,
      required: false,
    },
    dependentTwoSsn: {
      type: Number,
      required: false,
    },
    dependentThreeSsn: {
      type: Number,
      required: false,
    },
    dependentFourSsn: {
      type: Number,
      required: false,
    },
    dependentRelationship: {
      type: String,
      required: false,
    },
    dependentTwoRelationship: {
      type: String,
      required: false,
    },
    dependentThreeRelationship: {
      type: String,
      required: false,
    },
    dependentFourRelationship: {
      type: String,
      required: false,
    },
    taxCredit: {
      type: String,
      required: false,
    },
    taxCreditTwo: {
      type: String,
      required: false,
    },
    taxCreditThree: {
      type: String,
      required: false,
    },
    taxCreditFour: {
      type: String,
      required: false,
    },
    dependentsCredit: {
      type: String,
      required: false,
    },
    dependentsCreditTwo: {
      type: String,
      required: false,
    },
    dependentsCreditThree: {
      type: String,
      required: false,
    },
    dependentsCreditFour: {
      type: String,
      required: false,
    },
    careBenefits: {
      type: String,
      required: true,
    },
    adoptionBenefits: {
      type: String,
      required: true,
    },
    wages: {
      type: String,
      required: true,
    },
    earnedIncome: {
      type: String,
      required: true,
    },
    combatPay: {
      type: String,
      required: true,
    },
    amountForm: {
      type: String,
      required: true,
    },
    household: {
      type: String,
      required: true,
    },
    tipIncome: {
      type: String,
      required: true,
    },
    medicaidWaiver: {
      type: String,
      required: true,
    },
    taxExempt: {
      type: String,
      required: true,
    },
    taxableInterest: {
      type: String,
      required: true,
    },
    qualifiedDividends: {
      type: String,
      required: true,
    },
    ordinaryDividends: {
      type: String,
      required: true,
    },
    iraDistributions: {
      type: String,
      required: true,
    },
    taxableAmount: {
      type: String,
      required: true,
    },
    pensions: {
      type: String,
      required: true,
    },
    ssBenefits: {
      type: String,
      required: true,
    },
    lumpSum: {
      type: String,
      required: true,
    },
    capitalGain: {
      type: String,
      required: true,
    },
    otherIncome: {
      type: String,
      required: true,
    },
    addLines: {
      type: String,
      required: true,
    },
    adjustments: {
      type: String,
      required: true,
    },
    taxOne: {
      type: Number,
      required: true,
    },
    taxTwo: {
      type: Number,
      required: true,
    },
    taxThree: {
      type: Number,
      required: true,
    },
    taxFour: {
      type: String,
      required: true,
    },
    taxFive: {
      type: String,
      required: true,
    },
    taxSix: {
      type: String,
      required: true,
    },
    taxSeven: {
      type: String,
      required: true,
    },
    taxEight: {
      type: String,
      required: true,
    },
    taxNine: {
      type: String,
      required: true,
    },
    taxTen: {
      type: String,
      required: true,
    },
    taxEleven: {
      type: String,
      required: true,
    },
    paymentOne: {
      type: Number,
      required: true,
    },
    paymentTwo: {
      type: Number,
      required: true,
    },
    paymentThree: {
      type: Number,
      required: true,
    },
    paymentFour: {
      type: Number,
      required: true,
    },
    paymentFive: {
      type: String,
      required: true,
    },
    paymentSix: {
      type: String,
      required: true,
    },
    paymentSeven: {
      type: String,
      required: true,
    },
    paymentEight: {
      type: String,
      required: true,
    },
    paymentNine: {
      type: String,
      required: true,
    },
    paymentTen: {
      type: String,
      required: true,
    },
    paymentEleven: {
      type: String,
      required: true,
    },
    refundOne: {
      type: String,
      required: true,
    },
    refundTwo: {
      type: String,
      required: true,
    },
    refundThree: {
      type: Number,
      required: true,
    },
    refundFive: {
      type: Number,
      required: true,
    },
    refundSix: {
      type: String,
      required: true,
    },
    amountOne: {
      type: Number,
      required: true,
    },
    amountTwo: {
      type: Number,
      required: true,
    },
    selectedValueButton: {
      type: String,
      required: true,
    },
    designeeName: {
      type: String,
      required: true,
    },
    designeeNumber: {
      type: Number,
      required: true,
    },
    designeeId: {
      type: Number,
      required: true,
    },
    userSignature: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    userOccupation: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    irsPin: {
      type: Number,
      required: true,
    },
    userPhoneNumber: {
      type: Number,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    preparerName: {
      type: String,
      required: true,
    },
    preparerSignature: {
      type: String,
      required: true,
    },
    preparerDate: {
      type: Date,
      required: true,
    },
    ptin: {
      type: Number,
      required: true,
    },
    firmName: {
      type: String,
      required: true,
    },
    firmPhNo: {
      type: Number,
      required: true,
    },
    firmAddress: {
      type: String,
      required: true,
    },
    firmEin: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userForm", userFormSchema);
