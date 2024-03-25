// two libraries are tested here
import zipState from "zip-state"; // only gets the state based on zipcode
var zipcodes = require("zipcodes-perogi"); // provides more functionality (lat, long, state, city, ...)

export function stateByZip({ zipcode }: any) {
  return zipState(zipcode);
}
//
export function locationByZip({ zipcode }: any) {
  return zipcodes.lookup(zipcode);
}

export function cityByZip({ zipcode }: any) {
  const loc = zipcodes.lookup(zipcode);
  if (loc.city) return loc.city;
}

// comparing doctors location against user's
export function locationCompare(doctor: any, loc: any) {
  const location = zipcodes.lookup(loc);

  if (location && doctor.zipcode === location.zip) return true;
  if (
    location &&
    doctor.zipcode[0] === location.zip[0] &&
    doctor.zipcode[1] === location.zip[1]
  )
    return true;
}
