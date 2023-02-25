import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import {BsInfoCircle, BsHouse} from 'react-icons/bs'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-14">
                        <div className="flex">
                            <div className="hidden space-x-8 sm:-my-px sm:mx-2 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    <BsHouse className="ml-2" />الرئيسية
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:mx-2 sm:flex">
                                <NavLink
                                    href={route("stages")}
                                    active={route().current("stages")}
                                >
                                    <BsInfoCircle className="ml-2" /> الشروط والاسس
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:mx-2 sm:flex">
                                <NavLink
                                    href={route("stage2")}
                                    active={route().current("stage2")}
                                >
                                    <FaChalkboardTeacher className="ml-2" /> الارشادات العامة
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:mx-2 sm:flex">
                                <NavLink
                                    href={route("stage3")}
                                    active={route().current("stage3")}
                                >
                                    <MdOutlineContactPage className="ml-2" /> الواجهات
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
