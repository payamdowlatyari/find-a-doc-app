import { Chip } from "@nextui-org/react";
import { specialties_array } from "../data/data";

// other conditions that specialty provides treatment
export default function Conditions({ specialty }: any) {
  return (
    <div className="flex flex-wrap gap-4 max-w-sm justify-start p-4">
      {specialties_array
        .filter((item) => item.title === specialty)
        .map((condition) => (
          <>
            {condition.conditions.map((i) => {
              return <Chip key={i}>{i}</Chip>;
            })}
          </>
        ))}
    </div>
  );
}
