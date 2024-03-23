import zipState from "zip-state";
var zipcodes = require("zipcodes-perogi");

export function StateByZip({ zipcode }: any) {
  return zipState(zipcode);
}

export function LocationByZip({ zipcode }: any) {
  return zipcodes.lookup(zipcode);
}
