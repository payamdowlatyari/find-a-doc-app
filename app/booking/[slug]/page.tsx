"use client";

import { doctors_array } from "../../data/data";
import { useParams } from "next/navigation";
import DoctorBooking from "@/app/components/DoctorBooking";
import Conditions from "@/app/components/Conditions";

// gets doctors id from dynamic routing url and renders doctor's booking detals
export default function BookingPage() {
  const params = useParams<{ slug: string }>();
  const realSlug = params.slug;

  const doctor = doctors_array.find((doc) => String(doc.id) === realSlug);

  return (
    <div className="flex flex-wrap items-start m-6">
      <DoctorBooking item={doctor} />
      <p className=" p-4 block">
        Other medical care by doctor {doctor?.name}:{" "}
      </p>
      <Conditions specialty={doctor?.specialty} />
    </div>
  );
}
