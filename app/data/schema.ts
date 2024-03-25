// doctor details
export const Doctor = {
  id: "number",
  name: "string",
  specialty: "string",
  address: "string",
  zipcode: "string",
  status: "string",
  ratings: "number[]",
  visit: "string[]",
  phone: "string",
  avatar: "string",
  email: "string",
  insurances: "string[]",
};

// specialty categories
export const Specialty = {
  id: "number",
  title: "string",
  conditions: "string[]",
};

// different conditions with specialty requirement
export const Conditions = {
  id: "number",
  name: "string",
  doctor: "string",
};

// doctors cities
export const Cities = {
  id: "number",
  name: "string",
};

// insurances
export const Insurance = {
  id: "number",
  name: "string",
};
