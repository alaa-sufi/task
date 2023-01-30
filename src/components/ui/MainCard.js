import carImage from "assets/images/car.webp";
import { ThreeHorizontalDots } from "assets/svg";
import { useState } from "react";
import axios from "axios";
export default function MainCard() {
  return (
    <main className="bg-dark2-color rounded-3xl text-white  p-6 sm:max-w-[calc(100%_-_4rem)] max-w-[calc(100%_-_2rem)] sm:mx-8 mx-4 w-[1000px] md:mx-auto my-8 innergrow-with-dropshadow">
      <h1 className="text-bold md:text-3xl text-lg  text-center mb-8">
        بطاقة قطعة
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1   xl:gap-28 lg:gap-12 md:gap-4 gap-8 mb-6 text-sm ">
        <ul className="order-1 md:order-[0]">
          <li className="grid sm:grid-cols-3 grid-cols-1  gap-4 items-center mb-2">
            <h4 className="text-light1-color  sm:text-left">رمز البطاقة</h4>
            <p className="bg-light2-color text-white rounded-lg py-1 px-2 text-center w-24 min-w-max	text-sm border-light1-color border ">
              123
            </p>
          </li>
          <Input label="الوصف" />
          <Input label="الاسم اللاتيني " />
          <Input2
            label="الماركة"
            modelHead={" يرجى اختيار الماركة "}
            apiUrl="https://easybooks.me/codechallenge/code-challenge.php?get=brands"
          />
          <Input2 label="الموديل" />
          <Input2 label="الرقم التسلسلي " />
          <Input2 label="معرف القطعة " />
          <Select
            label="الحالة"
            options={[
              { title: "تعمل", value: "yes" },
              { title: "لا تعمل", value: "no" },
            ]}
          />
          <Input2
            label="المالك"
            modelHead={" يرجى اختيار المالك "}
            apiUrl="https://easybooks.me/codechallenge/code-challenge.php?get=owners"
          />
          <Select label="اللون" />
          <Select label="سنة التصنيع" />
          <Select label="الفرش" />
          <Select label="الوقود" />
        </ul>
        <figure className="order-[0] md:order-[0]">
          <figcaption className="mb-1 text-light1-color">
            صورة القطعة
          </figcaption>
          <img
            src={carImage}
            alt="car 123"
            className="border-light1-color border rounded-lg w-96 mx-auto  md:mx-[initial]"
            loading="lazy"
          />
        </figure>
      </div>
      <div className="gap-4 flex justify-end">
        <Button className="bg-dark1-color">جديد</Button>
        <Button className="bg-dark1-color">حفظ</Button>
        <Button className="bg-red-700">حذف</Button>
        <Button className="bg-light2-color">اغلاق</Button>
      </div>
    </main>
  );
}

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`${className}  text-white  shadow rounded-lg  p-1 min-w-max w-32`}
      {...props}
    >
      {children}
    </button>
  );
};
const Input = ({ label }) => {
  return (
    <li className="grid sm:grid-cols-3 grid-cols-1  gap-4 items-center mb-2">
      <label className="text-light1-color sm:text-left">{label} </label>
      <input className="col-span-2 bg-light2-color text-white rounded-lg py-1 px-2 text-center w-full	text-sm border-light1-color border min-h-[1.7rem]"></input>
    </li>
  );
};
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
const Select = ({ label, options }) => {
  return (
    <li className="grid sm:grid-cols-3 grid-cols-1  gap-4 items-center mb-2">
      <label className="text-light1-color sm:text-left">{label} </label>
      <div className="col-span-2 relative after:bg-black after:p-2 after:absolute after:left-[-1px] after:top-[-1px] after:h-[calc(100%_+_2px)] after:rounded-lg after:w-8 after:border-light1-color after:border after:justify-center after:items-center after:flex  after:pointer-events-none  after:content-[_url('../assets/images/angle-down.svg')]">
        <select className=" bg-light2-color text-white rounded-lg  px-2 text-center w-full	text-sm border-light1-color border min-h-[1.7rem] appearance-none ">
          {options?.length > 0 ? (
            options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.title}
              </option>
            ))
          ) : (
            <option> </option>
          )}
        </select>
      </div>
    </li>
  );
};
