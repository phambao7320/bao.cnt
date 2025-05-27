import React from "react";

type InputFieldProps = React.HTMLProps<HTMLInputElement> & {
  error_message?: string;
};

const InputField = ({
  label,
  type = "text",
  placeholder,
  error_message = "",
  className,
  ...rest
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
        {...rest}
      />
      {error_message && <p className="text-red-500 text-sm">{error_message}</p>}
    </div>
  );
};

export default InputField;
