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
    digitalAssets:{
      type:String,
      required:true,
    },
    canClaim:{
      type:String,
      required:true,
    },
    ageBlindness:{
      type:String,
      required:true,
    },
    dependentFirstName:{
      type:String,
      required:false,
    },
    dependentTwoFirstName:{
      type:String,
      required:false,
    },
    dependentThreeFirstName:{
      type:String,
      required:false,
    },
    dependentFourFirstName:{
      type:String,
      required:false,
    },
    dependentLastName:{
      type:String,
      required:false,
    },
    dependentTwoLastName:{
      type:String,
      required:false,
    },
    dependentThreeLastName:{
      type:String,
      required:false,
    },
    dependentFourLastName:{
      type:String,
      required:false,
    },
    dependentSsn:{
      type:Number,
      required:false,
    },
    dependentTwoSsn:{
      type:Number,
      required:false,
    },
    dependentThreeSsn:{
      type:Number,
      required:false,
    },
    dependentFourSsn:{
      type:Number,
      required:false,
    },
    dependentRelationship:{
      type:String,
      required:false,
    },
    dependentTwoRelationship:{
      type:String,
      required:false,
    },
    dependentThreeRelationship:{
      type:String,
      required:false,
    },
    dependentFourRelationship:{
      type:String,
      required:false,
    },
    taxCredit:{
      type:String,
      required:false,
    },
    taxCreditTwo:{
      type:String,
      required:false,
    },
    taxCreditThree:{
      type:String,
      required:false,
    },
    taxCreditFour:{
      type:String,
      required:false,
    },
    dependentsCredit:{
      type:String,
      required:false,
    },
    dependentsCreditTwo:{
      type:String,
      required:false,
    },
    dependentsCreditThree:{
      type:String,
      required:false,
    },
    dependentsCreditFour:{
      type:String,
      required:false,
    },
    careBenefits:{
      type:String,
      required:true,
    },
    adoptionBenefits:{
      type:String,
      required:true,
    },
    wages:{
      type:String,
      required:true,
    },
    earnedIncome:{
      type:String,
      required:true,
    },
    combatPay:{
      type:String,
      required:true,
    },
    amountForm:{
      type:String,
      required:true,
    },
    household:{
      type:String,
      required:true,
    },
    tipIncome:{
      type:String,
      required:true,
    },
    medicaidWaiver:{
      type:String,
      required:true,
    },
    taxExempt:{
      type:String,
      required:true,
    },
    taxableInterest:{
      type:String,
      required:true,
    },
    qualifiedDividends:{
      type:String,
      required:true,
    },
    ordinaryDividends:{
      type:String,
      required:true,
    },
    iraDistributions:{
      type:String,
      required:true,
    },
    taxableAmount:{
      type:String,
      required:true,
    },
    pensions:{
      type:String,
      required:true,
    },
    ssBenefits:{
      type:String,
      required:true,
    },
    lumpSum:{
      type:String,
      required:true,
    },
    capitalGain:{
      type:String,
      required:true,
    },
    otherIncome:{
      type:String,
      required:true,
    },
    addLines:{
      type:String,
      required:true,
    },
    adjustments:{
      type:String,
      required:true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userForm", userFormSchema);
