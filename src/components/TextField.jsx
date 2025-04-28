const TextField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    //eslint-disable-next-line
    value,
    placeholder,
  }) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className={`${
            className ? className : ""
          } font-medium text-sm text-neutral-300`}
        >
          {label}
        </label>
  
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${
            className ? className : ""
          } px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 outline-none border transition duration-200 focus:ring-2 focus:ring-blue-500 ${
            errors[id]?.message ? "border-red-500" : "border-neutral-700"
          }`}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? { value: min, message: "Minimum 6 characters required" }
              : undefined,
            pattern:
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email",
                  }
                : type === "url"
                ? {
                    value:
                      /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                    message: "Please enter a valid URL",
                  }
                : undefined,
          })}
        />
  
        {errors[id]?.message && (
          <p className="text-sm font-medium text-red-500 mt-1">
            {errors[id]?.message}
          </p>
        )}
      </div>
    );
  };
  
  export default TextField;
  