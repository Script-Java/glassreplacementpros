import Image from "next/image";
import satisfaction from "../assets/img/satisfaction.png";
import Link from "next/link";

export default function Satisfaction() {
  return (
    <div className="">
      <div className="flex items-center mx-auto w-64 justify-center flex-col">
        <Image src={satisfaction} alt="glassgo 100% satisfaction"></Image>
      </div>

    </div>
  );
}
