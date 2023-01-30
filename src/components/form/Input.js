const Input = ({ label }) => {
  return (
    <li className="grid sm:grid-cols-3 grid-cols-1  gap-4 items-center mb-2">
      <label className="text-light1-color sm:text-left">{label} </label>
      <input className="col-span-2 bg-light2-color text-white rounded-lg py-1 px-2 text-center w-full	text-sm border-light1-color border min-h-[1.7rem]"></input>
    </li>
  );
};
export default Input