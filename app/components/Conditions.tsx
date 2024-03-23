import { Select, SelectItem } from "@nextui-org/react";
import { conditions_array } from "../data/data";

export default function DocList() {
  return (
    <Select
      label="Condition, doctor..."
      labelPlacement="outside"
      className="max-w-sm justify-start"
    >
      {conditions_array.map((condition) => (
        <SelectItem key={condition.name}>{condition.name}</SelectItem>
      ))}
    </Select>
  );
}
