import { AiOutlineBell, AiOutlineQuestionCircle } from "react-icons/ai";
import { RiIndentDecrease } from "react-icons/ri";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="flex items-center justify-between w-full h-16 bg-white px-8 border-solid border-b-2 border-myGray">
      <span className="flex flex-wrap items-center justify-evenly w-40 text-l font-semibold ">
        <RiIndentDecrease className="cursor-pointer" />
        {title}
      </span>
      <div className="w-48 flex justify-between items-center text-l">
        <span>개발</span>
        <span className="text-xl cursor-pointer">
          <AiOutlineQuestionCircle />
        </span>
        <span className="text-xl cursor-pointer">
          <AiOutlineBell />
        </span>
        <span className="bg-neutral-600 text-white px-2 py-1 rounded cursor-pointer">
          핀트
        </span>
      </div>
    </header>
  );
}
