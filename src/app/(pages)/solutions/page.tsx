import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, Cloud, Bot, Landmark, HeartPulse, Sparkles, Brain } from "lucide-react";
import Wrapper from '../Wrapper';



export default function SmartPackages() {
    return (
        <>
            <Wrapper>
                <section
                    className="relative overflow-hidden bg-[#99d9f1]"
                >
                    <div
                        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <Navbar />

                        <div
                            className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                Microsoft Solutions Powered by Artificial Intelligence
                            </h1>

                            <p
                                className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                CelesteIQ helps businesses become more productive, automated, and profitable through seamless integration of
                                Microsoft's ecosystem and AI-driven innovation.
                            </p>

                            <Link href="/contact">
                                <Button
                                    className="bg-[#FF7A00] py-6 hover:bg-[#ea580c] text-white font-semibold mt-6"
                                    size={"lg"}
                                    data-aos="zoom-in"
                                    data-aos-delay="350"
                                >
                                    Schedule a Free Consult
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <svg
                            viewBox="0 0 1440 180"
                            className="h-[90px] w-full sm:h-[110px] md:h-[140px]"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z" fill="#ffffff" />
                        </svg>
                    </div>
                </section>



                <section
                    className="py-12 sm:py-16"
                    data-aos="fade-up"
                >
                    <div
                        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                                Our Areas of Solution
                            </h2>
                            <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                Explore the solutions we offer to digitize, automate, and make every
                                part of your company smarter.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="250"
                                    >
                                        <Cloud className="h-7 w-7" />
                                    </span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-[#0F0F0F]">
                                            Intelligent Digital Transformation
                                        </h3>
                                        <p className="mt-1 md:text-lg text-slate-600">
                                            Microsoft 365, Teams, and Copilot integration to modernize
                                            your workplace and empower your teams with AI-driven
                                            collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <Image
                                            src={"/LineChart.svg"}
                                            width={28}
                                            height={28}
                                            className="h-9 w-9"
                                            alt="LineChart"
                                        />
                                    </span>
                                    <div>
                                        <h3 className="md:text-2xl text-xl font-semibold text-[#0F0F0F]">
                                            Data Analytics & Automation
                                        </h3>
                                        <p className="mt-1 md:text-lg text-slate-600">
                                            Power BI, Power Automate, and Azure AI to turn data into
                                            actionable insights and automate repetitive processes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="350"
                                    >
                                        <Image
                                            src={"/Servericon.svg"}
                                            width={28}
                                            height={28}
                                            className="h-9 w-9"
                                            alt="Icon"
                                        />
                                    </span>
                                    <div>
                                        <h3 className="md:text-2xl text-xl font-semibold text-[#0F0F0F]">
                                            Cloud Infrastructure & Virtualization
                                        </h3>
                                        <p className="mt-1 md:text-lg text-slate-600">
                                            Azure Cloud solutions for scalable, secure, and
                                            high-performance infrastructure that grows with your business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="350"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        <Image
                                            src={"/famicons_business-outline-icon.svg"}
                                            width={28}
                                            height={28}
                                            className="h-8 w-8"
                                            alt="Icon"
                                        />
                                    </span>
                                    <div>
                                        <h3 className="md:text-2xl text-xl font-semibold text-[#0F0F0F]">
                                            Intelligent Business Applications
                                        </h3>
                                        <p className="mt-1 md:text-lg text-slate-600">
                                            Dynamics 365 and Power Apps to build custom business
                                            applications that adapt to your unique workflows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section
                    className="py-12 sm:py-16"
                    data-aos="fade-up"
                >
                    <div
                        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                                Specialized and Advanced Solutions
                            </h2>
                            <p className="mx-auto mt-2 md:mt-4 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                We combine the power of Microsoft AI with our integration capabilities to develop tailor-made solutions:
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div
                                className="rounded-2xl bg-white p-6 text-center shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <span
                                    className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                    data-aos="zoom-in"
                                    data-aos-delay="230"
                                >
                                    <Brain className="h-7 w-7" />
                                </span>
                                <p className="mt-4 font-semibold text-slate-800">Custom Virtual Assistants</p>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 text-center shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                <span
                                    className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                    data-aos="zoom-in"
                                    data-aos-delay="280"
                                >
                                    <ChartBar className="h-7 w-7" />
                                </span>
                                <p className="mt-4 font-semibold text-slate-800">Predictive Analytics</p>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 text-center shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <span
                                    className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                    data-aos="zoom-in"
                                    data-aos-delay="330"
                                >
                                    <Image
                                        src={"/chatgpt-icon.svg"}
                                        width={28}
                                        height={28}
                                        className="h-9 w-9"
                                        alt="Icon"
                                    />
                                </span>
                                <p className="mt-4 font-semibold text-slate-800">Process Automation</p>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 text-center shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="350"
                            >
                                <span
                                    className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                    data-aos="zoom-in"
                                    data-aos-delay="380"
                                >
                                    <Bot className="h-7 w-7" />
                                </span>
                                <p className="mt-4 font-semibold text-slate-800">Enterprise Copilots</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="py-12 sm:py-16"
                    data-aos="fade-up"
                >
                    <div
                        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                                Industry-Specific Solutions
                            </h2>
                            <p className="mx-auto mt-2 md:mt-5 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                Every sector has its challenges.
                                <br className="hidden sm:block" />
                                At CelesteIQ, we apply AI and Microsoft technology to solve them with precision.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="230"
                                    >
                                        <Landmark className="h-7 w-7" />
                                    </span>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-lg">Finance &amp; Insurance</p>
                                        <p className="mt-1 text-slate-600">
                                            Secure, compliant, and intelligent solutions for financial services.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="280"
                                    >
                                        <HeartPulse className="h-7 w-7" />
                                    </span>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-lg">Healthcare &amp; Wellness</p>
                                        <p className="mt-1 text-slate-600">
                                            HIPAA-compliant systems with AI-powered patient care.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="flex items-start gap-4 flex-col">
                                    <span
                                        className="grid h-14 w-14 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="330"
                                    >
                                        <Image
                                            src={"/manufacture-icon.svg"}
                                            width={28}
                                            height={28}
                                            className="h-8 w-8"
                                            alt="LineChart"
                                        />
                                    </span>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-lg">Manufacturing &amp; Real Estate</p>
                                        <p className="mt-1 text-slate-600">
                                            Optimize operations and enhance productivity with smart automation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section
                    className="relative overflow-hidden mb-5"
                    data-aos="fade-up"
                >
                    <Image
                        src={"/orangeBg.png"}
                        alt="Background"
                        fill
                        className="absolute inset-0 -z-10 object-cover"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                    />

                    <div
                        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div
                            className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Limited Time Offer</span>
                        </div>

                        <h2
                            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Start Your AI Transformation
                            <br />
                            Today
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90"
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            Join hundreds of businesses already leveraging AI to grow faster and work smarter
                        </p>

                        <div
                            className="mt-7 flex flex-wrap items-center justify-center gap-3"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Link href="/contact">
                                <Button
                                    size={"lg"}
                                    className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50"
                                    data-aos="zoom-in"
                                    data-aos-delay="320"
                                >
                                    Schedule Free Consultation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link href="/contact">
                                <Button
                                    size={"lg"}
                                    variant="outline"
                                    className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00]"
                                    data-aos="zoom-in"
                                    data-aos-delay="360"
                                >
                                    View Pricing
                                </Button>
                            </Link>
                        </div>

                        <p
                            className="mt-5 text-xs text-white/80"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            No credit card required. Get started in minutes.
                        </p>
                    </div>
                </section>

            </Wrapper>
        </>
    )
}
