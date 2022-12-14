import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { FadeIn, SlideDown, SlideUp } from "@/animations";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100  sm:items-center sm:pt-0">
                <div
                    variants={SlideUp}
                    initial="hidden"
                    animate="show"
                    className="max-w-6xl mx-auto sm:px-6 lg:px-8"
                >
                    <div
                        variants={SlideDown}
                        initial="hidden"
                        animate="show"
                        className="text-center"
                    >
                        <img className="h-52 w-52 mx-auto mb-4" src="./images/logo.png"></img>
                        <h2
                            variants={SlideDown}
                            initial="hidden"
                            animate="show"
                            className="text-2xl leading-9 font-extrabold font-tajawal-bold tracking-tight  sm:text-4xl sm:leading-10"
                        >
                            مرحبا بك في نظام التسجيل الخاص بكلية شط العرب الجامعة
                        </h2>
                        <p
                            variants={SlideDown}
                            initial="hidden"
                            animate="show"
                            className="mt-3 mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl lg:mx-0 lg:text-2xl xl:text-xl"
                        >
                            يمكنك تسجيل الدخول الى النظام او انشاء حساب جديد
                        </p>
                    </div>
                    <div className="mt-5 mx-auto sm:flex gap-10 sm:justify-center lg:mx-0">
                        <Link
                            className="mt-3
                            hover:text-gray-900
                            hover:bg-green-100

                            focus:outline-none
                            focus:shadow-outline-blue
                            focus:text-gray-900
                            transition duration-150 ease-in-out

                             bg-white text-gray-500 font-bold rounded-md px-4 py-2 ml-3 shadow-sm"
                            href="/register"
                        >
                            إنشاء حساب
                        </Link>

                        <Link
                            className="mt-3
                            hover:text-gray-900
                            hover:bg-blue-100
                            focus:outline-none
                            focus:shadow-outline-blue
                            focus:text-gray-900
                            transition duration-150 ease-in-out
                             bg-white text-gray-500 font-bold rounded-md px-4 py-2 ml-3 shadow-sm"
                            href="/login"
                        >
                            تسجيل دخول
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
