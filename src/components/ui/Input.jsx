import { AnimatePresence, motion } from "motion/react";
import React, { forwardRef } from "react";
import { IoMdWarning } from "react-icons/io";

const Input = forwardRef(
  ({ isError, id, label, className = "", ...props }, ref) => {
    const inputId = id || Math.random(2 * 10);

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label className="font-bold" htmlFor={`iId-${inputId}`}>
            {label}
          </label>
        )}
        <div
          className={`w-full  border flex relative justify-end items-center rounded-[4px] ${
            isError ? "border-pink-700/70" : "border-[#949494]"
          }`}
        >
          <input
            id={`iId-${inputId}`}
            className="outline-0 flex  grow w-full py-2 px-3"
            ref={ref}
            {...props}
          />
          {isError && (
            <IoMdWarning
              size={25}
              className="text-pink-700/70 right-2 absolute"
            />
          )}
        </div>
        <AnimatePresence>
          {isError && (
            <motion.span
              animate={{ opacity: 1, height: "24px" }}
              initial={{ opacity: 0, height: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="text-pink-700 overflow-hidden font-medium"
            >
              {isError?.message}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default Input;
