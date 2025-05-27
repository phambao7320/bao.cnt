import React from "react";

type InputAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  error_message?: string;
};

const InputArea = ({ label, rows = 4, className, ...rest }: InputAreaProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        rows={rows}
        className={`mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${className}`}
        {...rest}
      />
    </div>
  );
};

export default InputArea;
