import { FaMinus } from "react-icons/fa";
import { TCollups } from "../../Types/randomTypes";

const Collups = ({ question, answer }: TCollups) => {
  return (
    <div tabIndex={0} className="collapse  border-[1px] ">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-[16px]  font-poppins font-medium flex justify-between">
        <p>{question}</p>
        <FaMinus className="mt-[5px]" />
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Collups;
