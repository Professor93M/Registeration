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
            <Head title="آلية وضوابط تقديم وقبول الطلبة على الجامعة الامريكية" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                        {/* show h1 if click show model to show image 1.png */}
                        <div className="py-12">
                            <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                                    {/* at click on id stage1 change stageState  */}
                                    <div className="flex gap-x-2 justify-center items-center mb-2" onClick={() => stg1()}>
                                        <div id="stage1" className="text-2xl font-bold cursor-pointer">آلية وضوابط تقديم وقبول الطلبة على الجامعة الامريكية</div>
                                    </div>
                                    {stageState === 1 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-right text-lg leading-10 list-decimal list-outside space-y-3">
                                                <ul>
                                                    <li className="font-bold">
                                                        . يكون التقديم على الجامعة الامريكية من خلال الرابط الالكتروني الخاص بهذا الغرض ضـمن المنظومة الالكترونية للقبول المركزي في الجامعات والكليات الاهلية.                                                    </li>
                                                    <li className="font-bold">
                                                        ب. يتم اعتماد ذات القوانين والتعليمات والضوابط الخاصـة بالقبول والمعلنة في دليل القبول في الجامعات والكليات الاهلية.
                                                    </li>
                                                    <li className="font-bold">
                                                    ت. تتولى دائرة التعليم الجامعي الاهلي تدقيق المتقدمين وإظهار القبول في الجامعة اعلاه وحسـب الآلية المعتمدة.
                                                    </li>
                                                    <li className="font-bold">
                                                    ث. يخضـع الطلبة المتقدمين للقبول في الجامعة الامريكية لاختبار كفاءة اللغة الانكليزية ( TOEFL IELTS, SAT)، على ان يحقق الحد الأدنى من الدرجات للقبول.
                                                    </li>
                                                    <li className="font-bold">
                                                    ج. في حال حصـول الطالب على درجة أقل من الحد الادنى للقبول يتوجب عليه أن يخضـع لدورة تحضيرية (مقرر تعليمي) في اللغة انكليزية لمرة واحدة أو أكثر، وحسب مستوى الطالب.
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
