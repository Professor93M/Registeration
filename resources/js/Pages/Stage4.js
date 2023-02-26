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
            <Head title="آلية تسجيل الطلبة" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                        {/* show h1 if click show model to show image 1.png */}
                        <div className="py-12">
                            <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-16">
                                    {/* at click on id stage1 change stageState  */}
                                    <div className="flex gap-x-2 justify-center items-center mb-2" onClick={() => stg1()}>
                                        <div id="stage1" className="text-2xl font-bold cursor-pointer">الوثائق المطلوبة للتسجيل وآلية التسجيل</div>
                                    </div>
                                    {stageState === 1 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-right text-lg leading-10 list-decimal list-outside space-y-3">
                                                <ul>
                                                    <li className="font-bold">
                                                         أ - يقدم الطالب إلى الجهة التي يرشح إليها المستمسكات الآتية:
                                                         <ol className="font-light mr-2">
                                                            <li>
                                                                - أصل وثيقة الدراسة الإعدادية المعززة بتصديق المديرية العامة للتربية في المحافظة أو أصول الوثائق الأخرى (وبحسب قناة القبول) مصدقة أصولياً في موعد لا يتجاوز 2023/5/19 ويقدم تعهداً خطياً بذلك الى تسجيل الكلية وبخلافه يلغي قبوله.
                                                            </li>
                                                            <li>
                                                                - نسخة ملونة عن شهادة الجنسية وهوية الأحوال المدنية العراقية أو البطاقة الوطنية الموحدة.
                                                            </li>
                                                            <li>
                                                                - صور حديثة عددها (3).
                                                            </li>
                                                            <li>
                                                                - استمارة الفحص الطبي (على وفق نظام اللياقة الصحية رقم 5 لسنة 1992 والضوابط والشروط الخاصة به) مع مراعاة الآتي:
                                                                <ol className="font-light mr-5">
                                                                    <li>
                                                                        - لا يسجل الطالب في حالة عدم تقديم الاستمارة المذكورة مطلقاً.
                                                                    </li>
                                                                    <li>
                                                                        - يجب تسليم أصل الاستمارة ولا تقبل نسخة عنها.
                                                                    </li>
                                                                    <li>
                                                                        - تلاحظ نتيجة الفحص مباشرة من الجهة المرشح إليها الطالب للتسجيل، وفي حال عدم لياقته للدراسة المرشح إليها يتم مفاتحة " دائرة التعليم الجامعي الأهلي" للنظر في قبوله على وفق لياقته الصحية.
                                                                    </li>
                                                                    <li>
                                                                        - يحق للطالب استئناف نتيجة الفحص لدى قسم اللجان / اللجنة الاستئنافية في وزارة الصحة عن طريق الجهة المرشح للقبول/ التسجيل فيها.
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li className="font-bold">
                                                    ب. يتعهد الطلبة المقبولين بأنهم لم يســــــبق لهم ترقين قيدهم بســـــــب الغش أو المحاولة فيه أو العقوبات الانضباطية.
                                                    </li>
                                                </ul>
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
                                        <div className="text-2xl font-bold cursor-pointer">حالات التأجيل والرسوب وإلغاء القبـول</div>
                                    </div>
                                    {stageState === 2 && (
                                        <>
                                            <div className="w-1/3 h-1 bg-gray-700 rounded-md mx-auto mb-7"></div>
                                            <motion.ol variants={SlideDown} initial="hidden" animate="show" dir="rtl" className="text-right text-lg leading-10 list-decimal list-outside space-y-3">
                                                <ul>
                                                    <li className="font-bold">
                                                        أ- إذا لم يسجل الطالب في (الجامعة/ الكلية الاهلية) المرشح للقبول فيها خلال (10) ايام عمل من بعد اعلان نتائج المفاضلة و بدء مرحلة التسجيل
                                                    </li>
                                                    <li className="font-bold">
                                                        ب- في حال ثبوت عدم توافر أي من الشروط العامة أو الخاصة للقبول في الدراسة.
                                                    </li>
                                                    <li className="font-bold">
                                                        ت- إذا قدم الطالب معلومات أو وثائق غير صحيحة أو مزورة أو محرفة إلى (الجامعة/ الكلية الاهلية) ويكتب إلى الوزارة لإلغاء قبوله حتى وإن كان في صفوف متقدمة أو متخرجاً من الجامعة او الكلية وتتخذ بحقه الإجراءات القانونية كافة.
                                                    </li>
                                                    <li className="font-bold">
                                                        ث- إذا لم يقدم الطالب أصل وثيقة الدراسة الإعدادية المعززة بتصديق المديرية العامة للتربية في المحافظة إلى تسجيل الكلية لما بعد 2023/5/19 على ان يقوم قسم التسجيل بتبليغ الطالب بما لا يقل عن (3) ثلاث مرات وتكون المدة بين تبليغ وآخر (من 15-30) يوماً.
                                                    </li>
                                                    <li className="font-bold">
                                                        ج- إصدار اوامر الطلبة الملغي قبولهم حال استحقاقهم وعدم تأخير اصدار الامر أكثر من شهر من تاريخ الاستحقاق.
                                                    </li>
                                                    <img src="/images/5.png" alt="5" width="100%" />
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
