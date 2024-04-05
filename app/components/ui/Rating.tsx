import { RiStarFill } from "react-icons/ri";

// calculates doctors score based on patients' rates
export const Rating = ({ ratings }: any) => {
  const count = ratings.length;
  const initial = 0;
  const sum = ratings.reduce((acc: number, val: number) => acc + val, initial);

  let average = 0;

  if (count > 0) average = parseFloat((sum / count).toFixed(2));
  return (
    <div className="text-sm flex flex-row gap-1">
      <span className="text-sm text-yellow-500">
        <RiStarFill />{" "}
      </span>
      {average} {"("} {count} {")"}{" "}
    </div>
  );
};
