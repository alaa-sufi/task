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
export default Select;
