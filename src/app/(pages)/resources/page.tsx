import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { BookOpen, HelpCircle, FileText } from "lucide-react";
import { Search, Compass, Workflow, GraduationCap, BarChart3 } from "lucide-react";

export default function Resources() {
    return (
        <>
            <Wrapper>
                <section className="relative overflow-hidden  bg-[#99d9f1]">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
                        <Navbar />
                        <div className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                                CelesteIQ Resources
                            </h1>
                            <p className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white">
                                Intelligent Transformation Journey. A proven methodology that takes you from where you are to where you want to be.
                            </p>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px]">
                        <svg viewBox="0 0 1440 180" className="h-[90px] w-full sm:h-[110px] md:h-[140px]" preserveAspectRatio="none">
                            <path d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z" fill="#ffffff" />
                        </svg>

                    </div>
                </section>


                <section className=" py-12 sm:py-16">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                                CelesteIQ Resources
                            </h2>
                            <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                Explore our collection of insights, answers, and information about AI-powered digital transformation.
                            </p>
                        </div>

                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:mt-14 mt-6">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {/* Blog */}
                                <article className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                                    <div className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white">
                                        <BookOpen className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">Blog</h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        Learn, explore, and get inspired by the latest trends in Artificial Intelligence and Digital
                                        Transformation.
                                    </p>
                                    <div className="mt-6 inline-block w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/blog">
                                                <Button className="w-full relative rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    Explore Articles
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>

                                {/* FAQ */}
                                <article className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                                    <div className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white">
                                        <HelpCircle className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">FAQ</h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        Find answers about CelesteIQ's AI, Microsoft solutions, and global operations.
                                        <span className='xl:block hideen select-none'>&nbsp;</span>
                                    </p>
                                    <div className="mt-6 inline-block  w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/faq">
                                                <Button className="relative w-full rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    Get Answer
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>

                                {/* Legal Notices */}
                                <article className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                                    <div className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white">
                                        <FileText className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">Legal Notices</h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        Transparency, privacy, and trust in every digital interaction.
                                        <span className='xl:block hideen select-none'>&nbsp;</span>
                                        <span className='xl:block hideen select-none'>&nbsp;</span>
                                    </p>
                                    <div className="mt-6 inline-block  w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/legalnotices">
                                                <Button className="relative w-full rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>


                    </div>
                </section>

                <section className=" py-12 sm:py-16">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                                Our Process
                            </h2>
                            <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                Intelligent Transformation Journey. A proven methodology that takes you from where you are to where you want to be.
                            </p>
                        </div>

                        <div className="relative mx-auto max-w-5xl md:mt-14 mt-6 px-4 sm:px-6 lg:px-8">
                            {/* fixed left rail for md+ */}
                            <div className="pointer-events-none absolute inset-y-0 hidden w-1 bg-slate-200 md:left-16 -z-10 md:block" />

                            {/* STEP 1 */}
                            <div className="mt-0 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start">
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        1
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Search className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">

                                                <p className="text-xl font-semibold text-slate-900">
                                                    Evaluation &amp; Diagnosis
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                We assess your infrastructure, workflows, and culture to identify gaps
                                                and opportunities for AI value. Our comprehensive analysis provides a
                                                clear picture of where you are and where you can go.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start">
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        2
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Compass className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">

                                                <p className="text-xl font-semibold text-slate-900">
                                                    Digital Strategy Design
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                Create a customized roadmap for Microsoft 365, Power Platform, and
                                                Azure AI aligned with your business goals. We design a strategy that
                                                balances quick wins with long-term transformation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start">
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        3
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Workflow className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">

                                                <p className="text-xl font-semibold text-slate-900">
                                                    Implementation &amp; Automation
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                Integrate tools, optimize performance, and ensure security and
                                                compliance. Our expert team handles the technical complexity while
                                                keeping your business running smoothly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start">
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        4
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <GraduationCap className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">

                                                <p className="text-xl font-semibold text-slate-900">
                                                    Training &amp; Adoption
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                Support your teams with comprehensive training and ensure seamless
                                                technology integration. We create champions within your organization
                                                who drive adoption and excellence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 5 */}
                            <div className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start">
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        5
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <BarChart3 className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">

                                                <p className="text-xl font-semibold text-slate-900">
                                                    Monitoring &amp; Evolution
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                Track performance, adapt strategies, and continuously innovate. We
                                                provide ongoing support and optimization to ensure your technology
                                                investment delivers lasting value.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </Wrapper>
        </>
    )
}
