import React from "react";
import { SlideUp, Container, FadeIn } from "@/animations";
import Label from "./Label";

export default function Button({
    name,
    options,
    handleChange,
    className,
    value,
    disabled,
    label,
}) {
    return (
        <div
            className="flex flex-col items-center justify-center"
            variants={Container}
            initial="hidden"
            animate="show"
        >
            <Label
                forInput={name}
                value={label}
                className="w-full text-right mb-2"
            />
            <select
                variants={FadeIn}
                initial="hidden"
                disabled={disabled}
                animate="show"
                className={className}
                name={name}
                onChange={handleChange}
                value={value}
            >
                {/* {add && <option value="0"> {defaultValue}</option>} */}
                {options.map((option, index) => (
                    <option
                        variants={SlideUp}
                        initial="hidden"
                        animate="show"
                        key={index}
                        value={option.name}
                        label={option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
