import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
} from "@nextui-org/react";
import { Doctor } from "../data/schema";
import Link from "next/link";
import { Office, Video } from "./ui/Visit";
import { doctors_array } from "../data/data";
import { Acceptance } from "./ui/Acceptance";
import { Rating } from "./ui/Rating";

const columns = [
  { name: "DOCOTR", uid: "name" },
  { name: "STATUS", uid: "status" },
  { name: "VISIT", uid: "visit" },
  { name: "RATING", uid: "rating" },
  { name: "ACTIONS", uid: "actions" },
];

export default function TableView() {
  const renderCell = React.useCallback(
    (doctor: Doctor, columnKey: React.Key) => {
      const cellValue = doctor[columnKey as keyof Doctor];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: doctor.avatar }}
              description={doctor.specialty}
              name={cellValue}
            >
              {doctor.email}
            </User>
          );
        case "status":
          return <Acceptance status={doctor.status} />;
        case "rating":
          return <Rating ratings={doctor.ratings} />;
        case "visit":
          return (
            <div className="flex">
              <span className="p-1 text-lg cursor-pointer active:opacity-50">
                <Office visit={doctor.visit} />
              </span>
              <span className="p-1 text-lg text-danger cursor-pointer active:opacity-50">
                <Video visit={doctor.visit} />
              </span>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link as={`/booking/${doctor.id}`} href="/booking/[slug]">
                  <Chip color="warning" variant="shadow" radius="sm">
                    Details
                  </Chip>
                </Link>
              </span>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={doctors_array}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
