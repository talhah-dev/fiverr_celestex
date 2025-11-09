"use client"
import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { ArrowRight, Calendar } from "lucide-react";
import Image from 'next/image';

type QA = {
    id: string;
    q: string;
    a: React.ReactNode;
};

const faqs: QA[] = [
    {
        id: "item-1",
        q: "What makes CelesteIQ different from other technology providers?",
        a: (
            <p>
                We specialize in connecting Artificial Intelligence with the real needs
                of your business, creating complete solutions within the Microsoft
                ecosystem (Azure, Power BI, Copilot, Dynamics, etc.).
            </p>
        ),
    },
    {
        id: "item-2",
        q: "Do I need prior AI experience to implement your solutions?",
        a: (
            <p>
                No—our team guides you through strategy, design, and implementation.
                We’ll identify the best use cases and deliver value quickly.
            </p>
        ),
    },
    {
        id: "item-3",
        q: "Which sectors do you serve?",
        a: (
            <p>
                Finance, Healthcare, Manufacturing, Real Estate, and more. We tailor
                solutions to your industry’s compliance and operational needs.
            </p>
        ),
    },
    {
        id: "item-4",
        q: "Do you offer subscription-based or project-based services?",
        a: (
            <p>
                Both. Choose ongoing subscription for continuous optimization or a
                fixed-scope project for targeted outcomes—whichever fits your goals.
            </p>
        ),
    },
    {
        id: "item-5",
        q: "Where do you operate?",
        a: (
            <p>
                We support clients globally with remote delivery and regional partners
                when on-site presence is required.
            </p>
        ),
    },
];

export default function Blog() {
    return (
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
                        data-aos-delay="180"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            Resources/ Blogs
                        </h1>
                    </div>
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                    data-aos="fade-up"
                    data-aos-delay="260"
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
                    data-aos-delay="80"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                            BLOG
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            Learn, explore, and get inspired by the latest trends in Artificial Intelligence and Digital Transformation.
                        </p>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl max-w-2xl text-[#374151]">
                            Our blog is a space where we share real case studies, implementation strategies, updates from the Microsoft ecosystem, and practical tips for leaders looking to embrace intelligent automation.
                        </p>
                    </div>

                    <div
                        className="grid md:mt-16 mt-8 md:grid-cols-2 md:gap-8 gap-4 grid-cols-1"
                        data-aos="fade-up"
                        data-aos-delay="160"
                    >
                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="relative w-full sm:h-96">
                                <Image
                                    src="/blog1.png"
                                    alt="Featured post"
                                    width={500}
                                    height={300}
                                    className="object-cover w-full sm:h-96"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white">
                                    AI Insights
                                </span>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>Oct 25, 2025</span>
                                </div>
                                <h3 className="mt-2 text-xl font-medium text-slate-900">
                                    The Future of AI in Business: 5 Trends to Watch in 2025
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.
                                </p>
                                <div className="mt-5">
                                    <Button asChild className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]">
                                        <Link href="/blog">
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="230"
                        >
                            <div className="relative w-full sm:h-96">
                                <Image
                                    src="/blog1.png"
                                    alt="Featured post"
                                    width={500}
                                    height={300}
                                    className="object-cover w-full sm:h-96"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white">
                                    AI Insights
                                </span>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>Oct 25, 2025</span>
                                </div>
                                <h3 className="mt-2 text-xl font-medium text-slate-900">
                                    The Future of AI in Business: 5 Trends to Watch in 2025
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.
                                </p>
                                <div className="mt-5">
                                    <Button asChild className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]">
                                        <Link href="/blog">
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            <div className="relative w-full sm:h-96">
                                <Image
                                    src="/blog1.png"
                                    alt="Featured post"
                                    width={500}
                                    height={300}
                                    className="object-cover w-full sm:h-96"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white">
                                    AI Insights
                                </span>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>Oct 25, 2025</span>
                                </div>
                                <h3 className="mt-2 text-xl font-medium text-slate-900">
                                    The Future of AI in Business: 5 Trends to Watch in 2025
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.
                                </p>
                                <div className="mt-5">
                                    <Button asChild className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]">
                                        <Link href="/blog">
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="290"
                        >
                            <div className="relative w-full sm:h-96">
                                <Image
                                    src="/blog1.png"
                                    alt="Featured post"
                                    width={500}
                                    height={300}
                                    className="object-cover w-full sm:h-96"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white">
                                    AI Insights
                                </span>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>Oct 25, 2025</span>
                                </div>
                                <h3 className="mt-2 text-xl font-medium text-slate-900">
                                    The Future of AI in Business: 5 Trends to Watch in 2025
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.
                                </p>
                                <div className="mt-5">
                                    <Button asChild className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]">
                                        <Link href="/blog">
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center mt-10"
                        data-aos="fade-up"
                        data-aos-delay="320"
                    >
                        <Button
                            className="py-6 bg-[#FF7A00] rounded-full text-white hover:bg-orange-600"
                            size={"lg"}
                        >
                            Explore Articles
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

        </Wrapper>
    )
}
