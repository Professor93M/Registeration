import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import StageCard from "@/Components/StageCard";
import { FcAbout, FcApproval, FcDepartment, FcReadingEbook, FcEditImage, FcApprove, FcGraduationCap } from "react-icons/fc";
import { MdOutlineContactPage } from "react-icons/md";

export default function Dashboard() {
    const stages = [
        {
            title: "شروط وأسس التقديم",
            description: "عرض جميع الشروط والأسس التي يجب اتباعها للتقديم للدراستين الصباحية والمسائية",
            link: "/stages",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcAbout className="w-12 h-12" />,
        },
        {
            title: "آلية التقديم على الجامعات والكليات الاهلية",
            description: "شرح الية التقديم على الجامعات والكليات الاهلية والارشادات العامة للتقديم",
            link: "/stage2",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcDepartment className="w-12 h-12" />,
        },
        {
            title: "نظام القبول المركزي للتعليم الأهلي ",
            description: "الواجهات العامة والخاصة للتقديم",
            link: "/stage3",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcReadingEbook className="w-12 h-12" />,
        },
        {
            title: "آلية تسجيل الطلبة",
            description: "تسري الضوابط المنصوص عليها في هذا الفقرة على قنوات القبول كافة",
            link: "/stage4",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcEditImage className="w-12 h-12" />,
        },
        {
            title: "التقديم على الجامعة الامريكية",
            description: "آلية وضوابط تقديم وقبول الطلبة على الجامعة الامريكية",
            link: "/stage5",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcGraduationCap className="w-12 h-12" />,
        },
        {
            title: "المنحة المجانية للقبول في المجموعة الطبية",
            description: "آلية وضـوابط تقديم وقبول الطلبة على المنحة المجانية للقبول في المجموعة الطبية (طب عام، طب أسنان، صيدلة)",
            link: "/stage6",
            active: true,
            className: "bg-green-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcApprove className="w-12 h-12" />,
        },
    ];
    return (
        <Authenticated >
            <Head title="الصفحة الرئيسية" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                اهلا بك في صفحة دليل الطالب
                            </h1>
                        </div>
                        <div className="w-full bg-white py-8">
                            <div className="w-3/4 mx-auto grid grid-cols-3 gap-4 mt-10 h-80 shadow-sm">
                                {stages.map((stage) => (
                                    <StageCard
                                        key={stage.title}
                                        link={stage.link}
                                        title={stage.title}
                                        active={stage.active}
                                        className={stage.className}
                                        description={stage.description}
                                        duration={stage.duration}
                                        icon={stage.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
