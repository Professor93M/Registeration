import React from "react";
import { Container, FadeIn, SlideUp } from "@/animations";
import Input from "./Input";
import Label from "./Label";

const FormItem = ({
    label,
    name,
    type,
    max,
    min,
    maxLength,
    value,
    pattern,
    handleChange,
    className,
    children,
    disabled,
    error,
}) => {
    return (
        <div
            variants={Container}
            initial="hidden"
            animate="show"
            className={`${className}  mb-6`}
        >
            <Label
                forInput={name}
                value={label}
                className="w-full text-right mb-2"
            />
            {children ? (
                children
            ) : (
                <Input
                    name={name}
                    type={type}
                    max={max}
                    min={min}
                    value={value}
                    maxLength={maxLength}
                    pattern={pattern}
                    handleChange={handleChange}
                    disabled={disabled}
                />
            )}
            <small className="text-red-500 text-sm">{error}</small>
        </div>
    );
};

export default FormItem;
