import { cn } from "@/utils/cn";
import React, { useEffect } from "react";

type CheckboxProps = React.HTMLProps<HTMLInputElement> & {
  error_message?: string;
  rootClass?: string;
  indeterminate?: boolean;
};

const Checkbox = ({
  label,
  placeholder,
  error_message = "",
  className,
  rootClass,
  indeterminate,
  ...rest
}: CheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean" && ref.current) {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div className={cn(rootClass)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={"checkbox"}
        placeholder={placeholder}
        className={cn(
          "border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500",
          className
        )}
        {...rest}
      />
      {error_message && <p className="text-red-500 text-sm">{error_message}</p>}
    </div>
  );
};

export default Checkbox;
