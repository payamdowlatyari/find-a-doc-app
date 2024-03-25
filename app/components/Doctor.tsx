import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Chip,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import { Acceptance } from "./ui/Acceptance";
import { Office, Video } from "./ui/Visit";
import { Rating } from "./ui/Rating";
import { MdLocationPin } from "react-icons/md";

// doctors card
export default function Doctor({ item }: any) {
  return (
    <Card className="group w-80 h-64 rounded-lg border border-transparent justify-evenly px-5 py-4 m-2">
      <CardHeader className="flex gap-3 justify-evenly">
        <User
          name={`${item.name}, MD`}
          description={item.specialty}
          avatarProps={{
            src: item.avatar,
          }}
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex gap-2 justify-evenly">
        <div className="flex flex-row flex-wrap gap-1 justify-around">
          <span className="text-xs">
            <Acceptance status={item.status} />
          </span>
          <Rating ratings={item.ratings} />
        </div>
        <div className="flex flex-row flex-wrap gap-1 justify-between">
          <div className="text-sm text-default-500 flex flex-row gap-1">
            {" "}
            <MdLocationPin /> {item.address}
          </div>
          <div className="flex flex-row flex-wrap gap-1 justify-end">
            <Office visit={item.visit} />
            <Video visit={item.visit} />
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link as={`/booking/${item.id}`} href="/booking/[slug]">
          <Chip color="warning" variant="shadow" radius="sm">
            Book Online
          </Chip>
        </Link>
      </CardFooter>
    </Card>
  );
}
