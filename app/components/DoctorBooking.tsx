import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Avatar,
} from "@nextui-org/react";
import SimpleMap from "./Map";
import { Acceptance } from "./ui/Acceptance";
import { Rating } from "./ui/Rating";
import { Office, Video } from "./ui/Visit";
import { FcPhone, FcFeedback } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import TimeSlots from "./TimeSlots";

// booking details including map and calendar
// TODO: doctors' locations should be implemented in the map
// TODO: booking functionality needs to be added
export default function DoctorBooking({ item }: any) {
  return (
    <div className="flex flex-row w-screen flex-wrap md:flex-nowrap">
      <Card className="group min-w-96 min-h-80 rounded-lg border border-transparent justify-evenly px-5 py-4 m-2">
        <CardHeader className="flex gap-3 justify-evenly">
          <Avatar src={item.avatar} className="w-20 h-20 text-large" />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">{item.name}, MD </p>
            <p className="text-md text-default-700">{item.specialty}</p>
            <div className="flex flex-row flex-wrap gap-1 justify-evenly">
              <div className="flex flex-row flex-wrap gap-1">
                <Office visit={item.visit} />
                <Video visit={item.visit} />
                <Rating ratings={item.ratings} />
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-1 justify-around">
              <span className="text-xs">
                <Acceptance status={item.status} />
              </span>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <TimeSlots />
        </CardBody>
        <CardFooter>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-foreground-800 flex flex-row gap-1">
              <MdLocationPin /> {item.address}, {item.zipcode}
            </div>
            <div className="text-sm text-foreground-600 flex flex-row gap-1">
              <FcPhone /> {item.phone}
            </div>
            <div className="text-sm text-foreground-600 flex flex-row gap-1">
              <FcFeedback /> {item.email}
            </div>
          </div>
        </CardFooter>
      </Card>
      <SimpleMap />
    </div>
  );
}
