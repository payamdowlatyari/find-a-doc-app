import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Avatar,
  Chip,
} from "@nextui-org/react";
import SimpleMap from "./Map";

const getStatus = (status: string) => {
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

export default function DoctorBooking({ item }: any) {
  return (
    <div className="flex flex-row w-screen flex-wrap md:flex-nowrap">
      <Card className="group w-1/2 h-96 rounded-lg border border-transparent justify-evenly px-5 py-4 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <CardHeader className="flex gap-3 justify-evenly">
          <Avatar isBordered radius="full" size="lg" src={item.avatar} />

          <div className="flex flex-col">
            <p className="text-lg font-semibold">{item.name}, MD </p>
            <p className="text-md text-default-700">{item.specialty}</p>
            <span className="text-sm py-2">{getStatus(item.status)}</span>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-md">Location: {item.address}</p>
          <p className="text-md">Phone: {item.phone}</p>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>

      <SimpleMap />
    </div>
  );
}
