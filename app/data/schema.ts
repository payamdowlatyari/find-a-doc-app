// doctor details
export type Doctor = {
  id: number;
  name?: string;
  specialty?: string;
  address?: string;
  zipcode?: string;
  status?: string;
  ratings?: number[];
  visit?: string[];
  phone?: string;
  avatar?: string;
  email?: string;
  insurances?: string[];
};

// specialty categories
export type Specialty = {
  id: number;
  title?: string;
  conditions?: string[];
};

// different conditions with specialty requirement
export type Conditions = {
  id: number;
  name?: string;
  doctor?: string;
};

// doctors cities
export type Cities = {
  id: number;
  name?: string;
};

// insurances
export type Insurance = {
  id: number;
  name?: string;
};
