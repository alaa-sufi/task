import carImage from "assets/images/car.webp";
import { Button, Input, Input2, Select } from "components/form";
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
