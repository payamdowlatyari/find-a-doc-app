import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Chip,
  User,
  Avatar,
} from "@nextui-org/react";
import SimpleMap from "./Map";
import Calendar from "@demark-pro/react-booking-calendar";

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
      <Card className="group min-w-96 min-h-80 rounded-lg border border-transparent justify-evenly px-5 py-4 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <CardHeader className="flex gap-3 justify-evenly">
          <Avatar src={item.avatar} className="w-20 h-20 text-large" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{item.name}, MD </p>
            <p className="text-md text-default-700">{item.specialty}</p>
            <span className="text-sm py-2">{getStatus(item.status)}</span>
            <p className="text-sm text-foreground-500">
              Location: {item.address}
            </p>
            <p className="text-sm text-foreground-500">Phone: {item.phone}</p>
            <p className="text-sm text-foreground-500">Email: {item.email}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Calendar />
        </CardBody>
      </Card>
      <SimpleMap loc={"You are here"} />
    </div>
  );
}
