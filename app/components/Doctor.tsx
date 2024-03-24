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

export default function Doctor({ item }: any) {
  return (
    <Card className="group w-80 h-60 rounded-lg border border-transparent justify-evenly px-5 py-4 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
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
      <CardBody>
        <p className="text-small text-default-500">{item.address}</p>
        <span className="text-xs py-2">{getStatus(item.status)}</span>
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
