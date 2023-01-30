import {
  TechnicianIcon,
  IdentityIcon,
  SectionIcon,
  RepairFixIcon,
  LogoIcon,
  LogoIconSmall,
  ToggleIcon,
} from "assets/svg";
import { useState } from "react";
export default function Aside() {
  const [toggleAside, setToggleAside] = useState(true);
  const links = [
    { title: "بطاقة ماركة", icon: IdentityIcon },
    { title: "بطاقة موديل ", icon: IdentityIcon },
    { title: "بطاقة قطعة", icon: IdentityIcon },
    { title: "بطاقة فني", icon: TechnicianIcon },
    { title: "بطاقة قسم", icon: SectionIcon },
    { title: "بطاقة خدمة", icon: RepairFixIcon },
  ];
  return (
    <aside
      className={` z-10 w-[250px] top:8 md:top-1/2 sm:h-[90vh]  max-h-[100vh] overflow-auto md:-translate-y-1/2  transform bg-dark2-color rounded-3xl text-white fixed  shadow innergrow-with-dropshadow p-4 transition-all  duration-300 ease-in-out  ${
        toggleAside ? "translate-x-2/3" : ""
      }`}
    >
      <button
        className="mr-auto block"
        onClick={() => setToggleAside(!toggleAside)}
      >
        <ToggleIcon className="w-6" />
      </button>
      <a href="/" className={`mb-8 mt-3 ${toggleAside ? "hidden" : ""} sm:block`}>
        {toggleAside ? (
          <LogoIconSmall className="mr-auto py-4 p-2 block w-[4rem] " />
        ) : (
          <LogoIcon className="w-full p-4 " />
        )}
      </a>
      <ul className={`${toggleAside ? "hidden" : ""} sm:block`}>
        {links.map(function (link, index) {
          const Icon = link.icon;
          return (
            <li key={index}>
              <a
                href="/"
                className="bg-dark1-color text-white rounded-xl flex items-center justify-between m-2 px-3 py-1 innergrow-with-dropshadow"
              >
                <span>{link.title}</span>
                <Icon className="w-8" />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
