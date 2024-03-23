import { Button, Divider, Select, SelectItem, Input } from "@nextui-org/react";
import { conditions_array, doctors_array, insurance_array } from "../data/data";
import Doctor from "./Doctor";
import { useState, useEffect } from "react";
import Primary from "./Primary";
var zipcodes = require("zipcodes-perogi");

export default function Doctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors_array);
  const [specialty, setSpecialty] = useState("");
  const [insurance, setInsurance] = useState("");
  const [location, setLocation] = useState("95818");
  const [results, setResults] = useState(false);

  useEffect(() => {
    let myloc = zipcodes.lookup(location);

    console.log(myloc);

    setFilteredDoctors(
      doctors_array.filter((doctor) => {
        return (
          specialty === doctor.specialty &&
          doctor.insurances.includes(insurance)
        );
      }),
    );
  }, [specialty, insurance]);

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
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <div className="h-24 w-60 p-1 m-1">
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
        <div className=" h-24 w-60 p-1 m-1">
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

        <div className=" h-24 w-60 p-1 m-1">
          <Input
            type="text"
            label="Location..."
            labelPlacement="outside"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="p-2 m-2 self-center">
          <Button onPress={() => setResults(true)}>Search</Button>
        </div>
      </div>

      {results && insurance && specialty && (
        <div className="space-y-2 my-10">
          <p className="text-medium text-default-400">
            Results for {specialty} accepting {insurance}
          </p>
          {renderSelectedDoctors()}
        </div>
      )}

      <div className="space-y-2 my-10">
        <Divider className="my-4" />
        <p className="text-medium text-default-400">
          Family Physicians and Primary Care Doctors
        </p>
      </div>

      <Primary />
    </>
  );
}
