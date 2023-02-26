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
            <Head title="آلية وضـوابط تقديم وقبول الطلبة على المنحة المجانية للقبول في المجموعة الطبية (طب عام، طب أسنان، صيدلة)" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                        {/* show h1 if click show model to show image 1.png */}
                        <div className="py-12">
                            <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                                    {/* at click on id stage1 change stageState  */}
                                    <div className="flex gap-x-2 justify-center items-center mb-2" onClick={() => stg1()}>
                                        <div id="stage1" className="text-2xl font-bold cursor-pointer">آلية وضـوابط تقديم وقبول الطلبة على المنحة المجانية للقبول في المجموعة الطبية (طب عام، طب أسنان، صيدلة)</div>
                                    </div>
                                    {stageState === 1 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-right text-lg leading-10 list-decimal list-outside space-y-3">
                                                <ul>
                                                    <li className="font-bold">
                                                    أ. يكون التقديم الكترونية من خلال البوابة الالكترونيـة الـخـاصـة بـدائرة التعليم الجامعي الأهلي (www.pe-gate.org)
                                                    </li>
                                                    <li className="font-bold">
                                                    ب. يجب ان لا يقل معدل الطالب المتقدم لكليات طب الاســنان والصيدلة عن (93%) والمتقدم لكليات الطب العام عن (95%).
                                                    </li>
                                                    <li className="font-bold">
                                                    ت. ان يكون الطالب من خريجي الدراسة الاعدادية للفرع الأحيائي للعام الدراسي 2021-2022 حصرا.
                                                    </li>
                                                    <li className="font-bold">
                                                    ث. يحق للطلبة المتقدمين على قنوات القبول الأخرى التقديم على القناة اعلاه.
                                                    </li>
                                                    <li className="font-bold">
                                                    ج. تحجب أسـماء المقبولين في الجامعات والكليات الحكومية في المجموعة الطبية (الطب العام، طب الأسنان، الصيدلة) من القبول على قناة المنحة المجانية.
                                                    </li>
                                                    <li className="font-bold">
                                                    ح. يكون المعدل التنافسي = (100%) من معدل الطالب في الدراسة الاعدادية + (20) درجة مضافة اخرى (كحد اعلى) ويكون توزيعها كما مبين ادناه:
                                                        <ul className=" list-inside mr-3">
                                                            <li className="font-normal">
                                                                1- يتم إضافة (15) درجة للطلبة من العوائل نوي الدخل المحدود (إذا كان أحد الوالدين او كليهما عاطل عن العمل)، ويعزز ذلك بهوية الرعاية الاجتماعية الصادرة من وزارة العمل والشؤون الاجتماعية أو مؤسسة العين (للمشمولين برعاية المؤسسة).
                                                            </li>
                                                            <li className="font-normal">
                                                            2- يتم إضافة (4-10) درجات للطلبة من ذوي الشهداء او الايتام، على ان لا يكون الطالب مشمولاً بالفقرة (1)، وكما يلي:
                                                            </li>
                                                            <li className="font-normal">
                                                            - إذا كان الطالب من ذوي الشهداء فيعزز ذلك بكتاب من مؤسسة الشهداء المركزية حصراً ويكون توزيع الدرجات كالاتي:
                                                                <ul className="list-disc list-inside mr-6">
                                                                    <li className="font-normal">
                                                                        (10) عشر درجات إذا كان الشهيد أحد الأبوين.
                                                                    </li>
                                                                    <li className="font-normal">
                                                                        (6) ست درجات إذا كان الشهيد هو أخ الطالب .
                                                                    </li>
                                                                    <li className="font-normal">
                                                                        (4) أربع درجات للفئات الأخرى المشمولة بقانون مؤسسة الشهداء.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="font-normal">
                                                            - (9) درجات إذا كان الطالب يتيم الاب او الام او كليهما، ويعزز ذلك بتقديم شهادة الوفاة الاصلية.
                                                            </li>
                                                            <li className="font-normal">
                                                            3- يتم إضافة (3-5) درجات إذا كان الطالب أو أحد ذويه متطوع في صفوف الحشد الشعبي، ويعزز ذلك بكتاب من هيئة الحشد الشعبي/الادارة المركزية حصراً، ويكون توزيع الدرجات كالاتي:
                                                                <ul className="list-disc list-inside mr-6">
                                                                    <li className="font-normal">
                                                                        (5) خمس درجات إذا كان الطالب هو من شارك في صفوف الحشد الشعبي.
                                                                    </li>
                                                                    <li className="font-normal">
                                                                        (3) ثلاث درجات إذا كان والد الطالب في صفوف الحشد الشعبي.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </motion.ol>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
