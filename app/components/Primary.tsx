import { doctors_array } from "../data/data";
import Doctor from "./Doctor";

export default function Primary() {
  return (
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
  );
}
