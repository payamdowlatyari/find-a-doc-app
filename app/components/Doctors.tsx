import { Button, Select, SelectItem, Input, Divider } from "@nextui-org/react";
import { conditions_array, doctors_array, insurance_array } from "../data/data";
import Doctor from "./Doctor";
import { useState, useEffect } from "react";
import Primary from "./Primary";
import { locationCompare } from "./utils/locationValid";

// main components that filters doctors array of objects based on condiion
// insurance plan and location
// TODO: a full list of zipcodes should be tested
// Can use an API for zipcode validation
export default function Doctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors_array);
  const [specialty, setSpecialty] = useState("");
  const [insurance, setInsurance] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setFilteredDoctors(
      doctors_array.filter((doctor) => {
        return (
          (showAll && doctor.id) ||
          (specialty === doctor.specialty &&
            doctor.insurances.includes(insurance) &&
            (location === "" || locationCompare(doctor, location)))
        );
      }),
    );

    console.log(filteredDoctors);
  }, [specialty, insurance, showAll]);

  // renders filtered list
  const renderSelectedDoctors = () => {
    return (
      <div className="flex flex-wrap items-start m-6">
        {filteredDoctors.map((doctor) => {
          return <Doctor key={doctor.id} item={doctor} />;
        })}
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full flex-wrap justify-center items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <div className="h-20 w-60 p-1 m-1">
          <Select
            label="Condition, doctor..."
            labelPlacement="outside"
            placeholder="Select a doctor"
            className="max-w-xs"
            onChange={(e) => setSpecialty(e.target.value)}
          >
            {conditions_array.map((condition) => (
              <SelectItem key={condition.doctor} value={condition.doctor}>
                {condition.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="h-20 w-60 p-1 m-1">
          <Select
            label="Insurance..."
            labelPlacement="outside"
            placeholder="Select your plan"
            className="max-w-xs"
            onChange={(e) => setInsurance(e.target.value)}
          >
            {insurance_array.map((item) => (
              <SelectItem key={item.name} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="h-20 w-48 md:w-56 p-1 m-1">
          <Input
            type="text"
            label="Location..."
            labelPlacement="outside"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="p-2 m-2 self-end">
          <Button
            color="primary"
            onPress={() => {
              setResults(true);
              setShowAll(false);
            }}
          >
            Search
          </Button>
        </div>
        <div className="p-2 m-2 self-end">
          <Button
            color="primary"
            onPress={() => {
              setResults(false);
              setShowAll(true);
            }}
          >
            Show All
          </Button>
        </div>
      </div>

      {(showAll || (results && insurance && specialty)) && (
        <div className="space-y-2 my-5">
          <Divider />
          {results ? (
            <p className="text-medium text-default-600 py-4 mx-4">
              Results for {specialty} accepting {insurance}
            </p>
          ) : (
            <p className="text-medium text-default-600 py-4 mx-4">
              Results for all doctors
            </p>
          )}
          {renderSelectedDoctors()}
        </div>
      )}
      <Primary />
    </>
  );
}
