import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { categories } from "../utils/constants";
import { Context } from "../Context/contextApi";

import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

    const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className="w-[240px] overflow-y-auto py-4 h-full bg-black absolute z-10 translate-x-[-240] md:block md:relative  md:translate-x-0 transition-all">
      <div className="flex flex-col px-5">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                key={item.name}
                text={item.type == "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories} == item.name ? "bg-white/[0.15]" : ""
                `}
              />
              {item.divider && <hr className="my-4 border-white/[0.2]" />}
            </>
          );
        })}
        <hr className="my-4 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by : Mansi Sorathiya
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
