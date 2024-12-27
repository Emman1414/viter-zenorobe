import React from "react";
import { clothes } from "../clothes-data";
import { ChevronDown, Dot } from "lucide-react";
import IconNoData from "../partials/IconNoData";

const DashboardAccordion = ({ title, resultCloth, item, clothItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const getCardDetails = clothes.filter(
  //   (item) => item.shirt_category === filterby
  // );

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="accordion mb-5">
        <div
          className="accordion-header p-2 py-4 flex justify-between bg-secondary rounded-top-md cursor-pointer w-full "
          onClick={handleToggleOpen}
        >
          <h6 className="mb-0">{title}</h6>
          <button>
            <ChevronDown
              className={`transition-all ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <div
          className={`accordion-body border border-line rounded-b-md border-t-0 overflow-hidden h-full transition-all ${
            isOpen ? "max-h-[600px]" : "max-h-[0px]"
          }`}
        >
          <ul className="space-y-3 py-4 px-2">
            {clothItems?.length == 0 && <IconNoData />}
            {clothItems?.length > 0 &&
              clothItems.map((item, key) => (
                <li className="flex items-center" key={key}>
                  <Dot
                    size={30}
                    className={`${
                      item.clothes_is_active == 1 ? "text-success" : "text-alert"
                    }`}
                  />
                  {item.clothes_title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardAccordion;
