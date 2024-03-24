import { Chip } from "@nextui-org/react";
import { specialties_array } from "../data/data";

export default function Conditions({ specialty }: any) {
  return (
    <div className="flex gap-4 max-w-sm justify-start p-4">
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
