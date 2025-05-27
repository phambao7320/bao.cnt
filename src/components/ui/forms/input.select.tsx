import React from "react";

type SelectOptions = {
  label: string | number;
  value: string | number;
};

type InputSelectProps = React.HTMLProps<HTMLSelectElement> & {
  options: SelectOptions[];
};

const InputSelect = ({
  label,
  options,
  className,
  ...rest
}: InputSelectProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className={`mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none  ${className}`}
        {...rest}
      >
        {options.map((each) => (
          <option key={each.value} value={each.value}>
            {each.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
