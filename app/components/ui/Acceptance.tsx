import { Chip } from "@nextui-org/react";

// checks if doctor accepts new patients
export const Acceptance = ({ status }: any) => {
  if (status === "active")
    return (
      <Chip size="sm" variant="flat" color="success">
        Accepting new patients
      </Chip>
    );
  else
    return (
      <Chip size="sm" variant="flat" color="default">
        Only exsiting patients
      </Chip>
    );
};
