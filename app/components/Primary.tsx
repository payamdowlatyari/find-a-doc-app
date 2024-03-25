import { Divider } from "@nextui-org/react";
import { doctors_array } from "../data/data";
import Doctor from "./Doctor";

// renders a list of non-specialized providers including family and primary care doctors
export default function Primary() {
  return (
    <>
      <div className="space-y-2 my-10">
        <Divider className="my-4" />
        <p className="text-medium text-default-600 mx-4">
          Family Physicians and Primary Care Doctors
        </p>
      </div>
      <div className="flex flex-wrap items-start m-6">
        {doctors_array
          .filter(
            (doctor) =>
              doctor.specialty === "Family Physician" ||
              doctor.specialty === "Primary Care Doctor",
          )
          .map((doctor) => {
            return <Doctor key={doctor.id} item={doctor} />;
          })}
      </div>
    </>
  );
}
