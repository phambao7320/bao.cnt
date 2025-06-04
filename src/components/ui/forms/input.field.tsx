import { cn } from "@/utils/cn";
import React from "react";

type InputFieldProps = React.HTMLProps<HTMLInputElement> & {
  error_message?: string;
  rootClass?: string;
};

const InputField = ({
  label,
  type = "text",
  placeholder,
  error_message = "",
  className,
  rootClass,
  ...rest
}: InputFieldProps) => {
  return (
    <div className={cn("mb-4", rootClass)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
          className
        )}
        {...rest}
      />
      {error_message && <p className="text-red-500 text-sm">{error_message}</p>}
    </div>
  );
};

export default InputField;
