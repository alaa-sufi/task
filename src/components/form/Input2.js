import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { ThreeHorizontalDots } from "assets/svg";
const Input2 = ({ label, modelHead, apiUrl }) => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [options, setOptions] = useState([]);
  axios.get(apiUrl).then((res) => setOptions(res.data));
  return (
    <>
      <li className="grid sm:grid-cols-3 grid-cols-1  gap-4 items-center mb-2">
        <label className="text-light1-color sm:text-left">{label} </label>
        <button
          onClick={() => modelHead && apiUrl && setOpenModal(true)}
          className="relative col-span-2 bg-light2-color text-white rounded-lg py-1 px-2 text-center w-full	text-sm border-light1-color border min-h-[1.7rem]"
        >
          {value.name}
          <ThreeHorizontalDots className="bg-black p-2 absolute left-[-1px] top-[-1px] h-[calc(100%_+_2px)] rounded-lg w-8 border-light1-color border" />
        </button>
      </li>
      {openModal && (
        <div className="fixed top-0 w-full h-full right-0  z-20">
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 max-w-[calc(100%_-_1rem)] w-[800px] bg-black border-2 border-white p-4 rounded-3xl ">
            <h3 className="text-center">{modelHead}</h3>
            <div className="bg-white m-4 rounded-xl p-4 text-black min-h-[330px]">
              {options.length > 0 ? (
                options.map((option) => (
                  <button
                    key={option.id}
                    className={`text-light1-color text-right hover:bg-light1-color hover:!text-white block w-full  p-1 mb-1 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-light1-color ${
                      tempValue.id === option.id
                        ? "bg-light1-color !text-white"
                        : ""
                    }`}
                    onClick={() => setTempValue(option)}
                  >
                    {option.name}
                  </button>
                ))
              ) : (
                <p>عذرا لا توجد خيارات</p>
              )}
            </div>
            <div className="flex gap-4 mx-4 mt-4">
              <Button
                className="bg-light2-color"
                onClick={() => {
                  setValue(tempValue);
                  setOpenModal(false);
                }}
              >
                موافق
              </Button>
              <Button
                className="bg-dark1-color"
                onClick={() => setOpenModal(false)}
              >
                الغاء الامر
              </Button>
            </div>
          </div>
          <div
            onClick={() => setOpenModal(false)}
            className="bg-[rgba(0,0,0,0.4)] z-[-1] absolute top-0 right-0 w-full h-full "
          ></div>
        </div>
      )}
    </>
  );
};
export default Input2;
