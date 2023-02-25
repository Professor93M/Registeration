import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SlideDown } from "@/animations";
import {FaChalkboardTeacher} from "react-icons/fa";

export default function Stages() {
    const [stageState, setStageState] = useState(0);
    const stg1 = () => {
        if(stageState == 0 || stageState == 2){
            setStageState(1);
        }else{
            setStageState(0);
        }
    };
    const stg2 = () => {
        if(stageState == 0 || stageState == 1){
            setStageState(2);
        }else{
            setStageState(0);
        }
    };
    
    return (
        <Authenticated >
            <Head title="نظام القبول المركزي للتعليم الأهلي" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                        {/* show h1 if click show model to show image 1.png */}
                        <div className="py-12">
                            <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                                    {/* at click on id stage1 change stageState  */}
                                    <div className="flex gap-x-2 justify-center items-center mb-2" onClick={() => stg1()}>
                                        <div id="stage1" className="text-2xl font-bold cursor-pointer">الواجهات العامة</div>
                                    </div>
                                    {stageState === 1 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-center text-lg leading-10 list-decimal list-outside space-y-3">
                                                <img src="/images/1.png" className="mx-auto" alt="1" />
                                                <p>واجهة رقم (1)</p>
                                                <img src="/images/2.png" className="mx-auto" alt="2" />
                                                <p>واجهة رقم (2)</p>
                                            </motion.ol>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                                    <div className="flex gap-x-2 justify-center items-center mb-2" onClick={() => stg2()}>
                                        <div className="text-2xl font-bold cursor-pointer">الواجهات الخاصة بتقديم الطالب</div>
                                    </div>
                                    {stageState === 2 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-center text-lg leading-10 list-decimal list-outside space-y-3">
                                                <img src="/images/3.png" className="mx-auto" alt="3" />
                                                <p>واجهة رقم (3)</p>
                                                <img src="/images/4.png" className="mx-auto" alt="4" />
                                                <p>واجهة رقم (4)</p>
                                            </motion.ol>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            نظام القبول المركزي للتعليم الأهلي
                        </h1>
                        <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-right text-lg leading-10 list-decimal list-outside space-y-3">
                            {
                                stageState === 1 && (
                                    <>
                                        <img src="/images/1.png" alt="1" />
                                    </>
                                ) 
                            }
                        </motion.ol> */}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
