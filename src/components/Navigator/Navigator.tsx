import { GiDirectionSign } from "react-icons/gi";
import { Link } from "react-router-dom";
type NavigatorProps = {
  pageName: string;
  page: string;
};
const Navigator = ({ pageName, page }: NavigatorProps) => {
  return (
    <div className="h-16 bg-[#f8f8fb] flex items-center border-b-[1px]">
      <div className="w-full lg:mx-0 mx-5 lg:flex px-24 justify-between items-center">
        <h1 className="text-lg font-bold">{pageName}</h1>

        <div className="flex gap-5">
          <Link to="/">
            <h1 className="text-[14px] font-semibold hover:text-primary">
              Home
            </h1>
          </Link>
          <GiDirectionSign />
          <p className="text-[14px] font-thin">{page}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
