import React from "react";
import { SlideUp } from "@/animations";

export default function Label({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ` + className}
            variants={SlideUp}
            animate="show"
            initial="hidden"
        >
            {value ? value : children}
        </label>
    );
}
