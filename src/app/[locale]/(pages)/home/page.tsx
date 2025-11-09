"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Bot, CircleCheckBig, Clock, MessageSquare, Sparkles, Users } from "lucide-react";
import Navbar from '@/components/Navbar';
import { TrendingUp, Zap } from "lucide-react";
import { Check } from "lucide-react";
import { Search } from "lucide-react";
import { Puzzle, Lightbulb, Lock } from "lucide-react";
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';
import { Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Footer from '@/components/Footer';
import { Cog } from "lucide-react";
import InfiniteScroll from '@/components/InfiniteScroll';
import Wrapper from '../Wrapper';

type NodeItem = { label: string; color: string };

const nodes: NodeItem[] = [
    { label: "Purchasing", color: "#7FBA00" },
    { label: "Customer Service", color: "#00A4EF" },
    { label: "Finance", color: "#F25022" },
    { label: "Accounting", color: "#FFB900" },
    { label: "HR", color: "#7FBA00" },
    { label: "Legal", color: "#00A4EF" },
    { label: "Operations", color: "#F25022" },
    { label: "Supply Chain", color: "#FFB900" },
];

const sources = [
    "/focus4.png",
    "/focus5.png",
    "/focus6.png",
    "/focus7.png",
    "/focus1.png",
    "/focus2.png",
    "/focus3.png",
];

export default function HomePage() {

    const [play, setPlay] = useState(false)

    const handlePlay = () => {
        console.log("Play button clicked");
    };
    const step = 360 / sources.length;


    return (
        <Wrapper>

            <section className='relative w-full flex md:flex-row flex-col md:justify-center justify-end md:items-end items-center min-h-screen'>
                <Navbar />
                <div className="absolute inset-0 -z-50">
                    <Image
                        src="/heroBg.png"
                        alt="Background"
                        fill
                        className="object-cover w-full h-full select-none"
                        priority
                    />
                </div>

                <div className="">
                    <div className="w-full max-w-6xl md:text-start text-center p-5 md:py-10">
                        <div className="flex items-center md:flex-row md:mb-0 mb-3 flex-col justify-center md:gap-10 gap-4">
                            <h1 data-aos="fade-up" className='font-extrabold mt-20 md:mt-0 md:text-8xl text-[2.6rem] leading-tight md:leading-none md:text-nowrap text-image1'>
                                TRANSFORM YOUR  
                                <span className='md:hidden'> BUSINESS WITH AI</span>
                                <span className='md:hidden'>+ MICROSOFT</span>
                            </h1>
                            <div data-aos-delay="200" className="relative " data-aos="fade" >
                                <p className='font-semibold md:max-w-[12rem]  w-full'>
                                  Automate your Workflows, and Scale with Intelligence
                                </p>
                                <Image
                                    src="/favicon.svg"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className='absolute w-10 md:-top-4 right-0'
                                />
                            </div>
                        </div>

                        <div className="flex items-center md:flex-row flex-col-reverse justify-center md:gap-10 gap-4 md:-mt-2">
                            <p data-aos-delay="200" data-aos="fade" className='font-semibold md:block hidden md:max-w-[14rem] w-full'>
                                Automate manual tasks, cut costs, and boost efficiency with intelligent solutions
                            </p>
                            <h1 data-aos="fade-up" data-aos-delay="100" className='font-extrabold md:text-8xl md:block hidden text-4xl md:text-nowrap text-image1'>
                                BUSINESS WITH AI
                            </h1>
                        </div>
                        <h1 data-aos="fade-up" data-aos-delay="100" className='font-extrabold flex items-end justify-end text-end md:text-8xl md:block hidden text-4xl md:text-nowrap text-image1'>
                            + MICROSOFT
                        </h1>

                        <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center mt-5">
                            <Link href="/contact">
                                <Button size={"lg"} className="bg-[#FF7A00] py-5 hover:bg-[#FF7A00] text-white font-semibold px-5 h-9 rounded-md">
                                    Schedule a Free Consult
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Image
                    src="/lady.png"
                    width={1000}
                    height={700}
                    alt="lady"
                    className='w-full select-none max-w-[40rem] -z-40 md:absolute'
                />
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="flex flex-col items-center text-center" data-aos="fade-up">
                        <Image
                            src={"/microsoft.svg"}
                            width={100}
                            height={100}
                            className="mx-auto mb-8 h-10 w-auto"
                            alt="Microsoft"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                        <h2
                            className="max-w-[890px] text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            We transform businesses with intelligent
                            <span className="text-[#FF7A00]"> Microsoft and AI solutions</span>
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <Bot className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Automate Processes</h3>
                            <p className="mt-3 text-slate-600">
                                Simplify workflows and minimize errors with AI-powered automation that works seamlessly with your existing systems.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Drive Decisions with Data</h3>
                            <p className="mt-3 text-slate-600">
                                Make faster, smarter decisions with real-time analytics and predictive intelligence built into your processes.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Boost Productivity</h3>
                            <p className="mt-3 text-slate-600">
                                Equip teams with AI tools that scale growth and eliminate repetitive tasks, letting them focus on what matters.
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-10 flex justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="bg-[#FF7A00] py-6 text-white shadow-md hover:bg-[#FF7A00]"
                            >
                                Schedule a Free Consult <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-b from-sky-100/70 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

                    {/* Heading Section */}
                    <div
                        className="flex items-center justify-center text-center flex-col"
                        data-aos="fade-up"
                    >
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span className="block">Most Companies Know AI Is The Future</span>
                            <span className="block mt-2 md:mt-4 text-[#FF7A00]">
                                But Don't Know Where To Start
                            </span>
                        </h2>
                        <p
                            className="mt-4 text-[#2A2D2D] text-lg max-w-3xl"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            We turn confusion into clarity with Microsoft-powered automation.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:mt-10 mt-6">

                        {/* Text Column */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <ul className="mt-8 space-y-5">
                                <li className="flex items-center md:gap-4 gap-3" data-aos="fade-up" data-aos-delay="250">
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">Eliminate repetitive work</span>
                                </li>
                                <li className="flex items-center md:gap-4 gap-3" data-aos="fade-up" data-aos-delay="300">
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">Reduce operational costs</span>
                                </li>
                                <li className="flex items-center md:gap-4 gap-3" data-aos="fade-up" data-aos-delay="350">
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">Improve accuracy & speed</span>
                                </li>
                                <li className="flex items-center md:gap-4 gap-3" data-aos="fade-up" data-aos-delay="400">
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">Empower your team</span>
                                </li>
                            </ul>

                            <div className="mt-8" data-aos="zoom-in" data-aos-delay="500">
                                <Link href="/contact">
                                    <Button
                                        size={"lg"}
                                        className="bg-[#FF7A00] px-6 py-6 text-white shadow-md hover:bg-[#FF7A00] w-full md:w-auto"
                                    >
                                        Discover
                                        <span className='md:inline hidden'>
                                            how AI can transform your business today
                                        </span>
                                        <ArrowRight />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div
                            className="mx-auto w-full max-w-xl"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="relative mx-auto w-full max-w-xl rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                                <div
                                    className="overflow-hidden rounded-2xl"
                                    data-aos="zoom-in"
                                    data-aos-delay="350"
                                >
                                    <Image
                                        src="/ai-team.png"
                                        alt="Team collaborating with AI tools"
                                        width={920}
                                        height={600}
                                        className="h-auto w-full object-cover"
                                        priority
                                    />
                                </div>

                                <div className="flex items-end md:p-5" data-aos="fade-up" data-aos-delay="400">
                                    <div className="w-full">
                                        <div className="grid grid-cols-2 gap-4 md:-mt-16 -mt-8">
                                            <div
                                                className="relative rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/5 border-l-4 border-red-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="450"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">24hrs</p>
                                                <p className="mt-2 text-xs text-slate-500">Before: Manual Processing</p>
                                            </div>
                                            <div
                                                className="relative rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/5 border-l-4 border-green-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="500"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">10min</p>
                                                <p className="mt-2 text-xs text-slate-500">After: AI Automation</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-4">
                                            <div
                                                className="rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-black/5 border-l-4 border-red-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="550"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">15%</p>
                                                <p className="mt-2 text-xs text-slate-500">Error Rate</p>
                                            </div>
                                            <div
                                                className="rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-black/5 border-l-4 border-green-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="600"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">0.5%</p>
                                                <p className="mt-2 text-xs text-slate-500">Error Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2"
                                    data-aos="zoom-in"
                                    data-aos-delay="650"
                                >
                                    <div className="grid md:h-28 h-16 md:w-28 w-16 place-items-center rounded-full bg-white shadow-[0_10px_35px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
                                        <Cog className="md:h-14 h-8 md:w-14 w-8 text-[#FF7A00]" />
                                    </div>
                                </div>

                                <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-3xl bg-gradient-to-b from-transparent to-sky-100/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">

                    {/* Heading */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Transform Every Team with AI
                        </h2>
                        <p
                            className="mt-4 text-lg text-slate-600"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            From Customer Service to Finance, unlock intelligent solutions powered by Microsoft.AI
                        </p>
                    </div>

                    {/* Mobile Grid */}
                    <div
                        className="mt-10 grid grid-cols-2 gap-4 sm:hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {nodes.map((n, i) => (
                            <div
                                key={i}
                                className="flex h-28 items-center justify-center rounded-full text-center shadow-md"
                                style={{ backgroundColor: n.color }}
                                data-aos="zoom-in"
                                data-aos-delay={100 + i * 100}
                            >
                                <span className="px-4 text-white font-semibold">{n.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Circular Layout */}
                    <div
                        className="relative mx-auto hidden aspect-square w-full max-w-[860px] sm:block [--r:170px] md:[--r:220px] lg:[--r:260px]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Center Microsoft Logo */}
                        <div
                            className="absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl ring-1 ring-black/5 flex flex-col items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src={"/microsoft2.svg"}
                                width={860}
                                height={860}
                                className="w-16"
                                alt="Microsoft"
                            />
                        </div>

                        {/* Circular Nodes */}
                        {nodes.map((n, i) => {
                            const angle = -90 + i * 45;
                            const transform = `rotate(${angle}deg) translate(var(--r)) rotate(${-angle}deg)`;
                            return (
                                <div
                                    key={i}
                                    className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg flex items-center justify-center text-center"
                                    style={{ transform, backgroundColor: n.color }}
                                    data-aos="zoom-in"
                                    data-aos-delay={500 + i * 100}
                                >
                                    <span className="px-4 text-white font-semibold leading-tight">
                                        {n.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section className="relative">
                {/* Background line image */}
                <Image
                    src={"/line.png"}
                    alt="line"
                    width={1000}
                    height={500}
                    className="absolute w-full select-none -z-10 bottom-20"
                    data-aos="fade"
                    data-aos-delay="100"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                        {/* Left Heading Section */}
                        <div data-aos="fade-up" data-aos-delay="150">
                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[0.95] text-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Our Plan /<br />How It Works
                            </h2>
                            <div
                                className="mt-4 h-0.5 rounded-full w-2/3 bg-gradient-to-r from-white to-[#c3c3c3]"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            />
                            <p
                                className="mt-6 max-w-xs text-slate-600"
                                data-aos="fade"
                                data-aos-delay="400"
                            >
                                Three Simple Steps to Transform Your Business with AI
                            </p>
                        </div>

                        {/* Steps Section */}
                        <div className="flex flex-col gap-6">
                            {/* Step 1 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="350"
                                >
                                    1
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    We Evaluate Your Business
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    We analyze your processes, pain points, and opportunities where AI can generate real impact.
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <Search className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="450"
                                >
                                    2
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    We Implement Smart Solutions
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    We design and integrate Microsoft tools — Copilot, Dynamics 365, Power Automate, Azure AI, and Fabric — tailored to your workflow.
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="500"
                                >
                                    <Zap className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="550"
                                >
                                    3
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    We Measure and Scale Results
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    We monitor KPIs, optimize processes, and expand AI to other areas for sustainable value.
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative bg-gradient-to-b from-sky-50 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

                    {/* Header Section */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-3xl sm:text-4xl max-w-3xl mx-auto md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span>You Focus On Your Business</span>
                            <span className="text-[#FF7A00] mt-2 md:mt-3 block">We Handle The Automation</span>
                        </h2>
                        <p
                            className="mx-auto mt-3 max-w-2xl md:text-2xl text-slate-600"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            You don’t need an IT team to modernize your business—just the right partner
                        </p>
                    </div>

                    {/* Mobile Grid */}
                    <div
                        className="mt-10 mb-6 grid grid-cols-2 gap-2 text-center sm:hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FCE6CF] to-[#F7D5AF] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            No Hardware Needed
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E3F2D3] to-[#D1E6BE] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            Human-in-the-Loop Ready
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E5EEF9] to-[#CFDBF3] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            Peace of Mind, Zero Risk
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FBE7EC] to-[#F3D2DD] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            Simple, Hassle-Free Setup
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FFF1D9] to-[#F7E0B8] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            No In-House IT Team Required
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E3F3F3] to-[#CDE4E3] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            ROI Within Weeks
                        </div>
                        <div
                            className="col-span-2 rounded-xl bg-gradient-to-b from-[#F2E9FB] to-[#E1D4F5] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            Minimal IT Resources Needed
                        </div>
                    </div>

                    {/* Desktop Circular Image Layout */}
                    <div
                        className="relative mx-auto hidden aspect-square w-full max-w-[820px] sm:block [--r:235px] md:[--r:270px]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Center logo */}
                        <div
                            className="absolute left-1/2 top-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1784db] shadow-2xl ring-1 ring-black/10 flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src={"/weblogo.svg"}
                                className="w-full max-w-[80%]"
                                width={100}
                                height={100}
                                alt="Celeste iQ Logo"
                            />
                        </div>

                        <Image
                            src={"/focus.png"}
                            className="w-full"
                            width={600}
                            height={600}
                            alt="Celeste iQ"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        />
                    </div>

                    {/* CTA Button */}
                    <div
                        className="flex justify-center mt-10"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="bg-[#FF7A00] px-6 py-6 text-white shadow-md hover:bg-[#FF7A00]"
                            >
                                Schedule a Free Consult <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/imagineAi.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover"
                        data-aos="fade"
                        data-aos-duration="1200"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

                    {/* Heading */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Imagine AI Working For You
                        </h2>
                        <p
                            className="mt-2 text-slate-500"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            While you focus on growing your business
                        </p>
                    </div>

                    {/* Image Cards */}
                    <div
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/ai-customer-service.png"
                                alt="Customer service with AI"
                                width={900}
                                height={560}
                                className="h-56 w-full object-cover md:h-72"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-5">
                                <p className="text-lg font-semibold text-white">Customer Service</p>
                                <p className="text-white/90 text-sm">AI handles routine inquiries 24/7</p>
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src="/ai-data-analysis.png"
                                alt="Data analysis dashboards"
                                width={900}
                                height={560}
                                className="h-56 w-full object-cover md:h-72"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-5">
                                <p className="text-lg font-semibold text-white">Data Analysis</p>
                                <p className="text-white/90 text-sm">Get insights from your data instantly</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div
                        className="mt-6 grid grid-cols-1 mx-auto max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <MessageSquare className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">Automatic responses to customers</span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <TrendingUp className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">AI-assisted sales follow-ups</span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Users className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">HR processes automated</span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Clock className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">More time for strategy</span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Award className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">Enhanced customer satisfaction</span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <CircleCheckBig className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">Consistent quality across teams</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-3xl sm:text-4xl max-w-6xl mx-auto md:text-5xl font-bold tracking-tight text-slate-900">
                            <span>From Manual Workflows to </span>
                            <span className="text-[#FF7A00]">AI-Powered Efficiency</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl md:text-xl text-slate-600" data-aos="fade" data-aos-delay="200">
                            See how intelligent automation transforms your invoicing process.
                        </p>
                    </div>

                    <div className="md:mt-16 mt-6">
                        <div className="grid-cols-2 gap-5 md:grid text-center mb-10 hidden" data-aos="fade-up" data-aos-delay="300">
                            <h2 className='text-3xl font-semibold'>Before</h2>
                            <h2 className='text-3xl font-semibold'>After</h2>
                        </div>

                        <Image
                            src={"/robot.png"}
                            width={1000}
                            height={700}
                            className='w-full md:block hidden select-none'
                            alt='compare'
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />

                        <div className="flex block md:hidden items-center flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
                            <h2 className='text-3xl font-semibold mb-4'>Before</h2>
                            <Image src={"/robot1.png"} width={1000} height={700} className='w-full select-none' alt='compare' data-aos="zoom-in" data-aos-delay="200" />
                            <Image src={"/robotline.png"} width={1000} height={700} className='w-full select-none' alt='compare' data-aos="zoom-in" data-aos-delay="300" />
                            <h2 className='text-3xl font-semibold mb-4'>After</h2>
                            <Image src={"/robot2.png"} width={1000} height={700} className='w-full select-none' alt='compare' data-aos="zoom-in" data-aos-delay="400" />
                        </div>

                        <div className="mt-6 md:mt-10 rounded-2xl bg-gradient-to-r from-[#DCFCE7] to-[#DBEAFE] px-4 py-8 text-center shadow-sm ring-1 ring-emerald-100/60" data-aos="fade-up" data-aos-delay="500">
                            <p className="flex flex-wrap items-center justify-center gap-1 font-semibold text-lg md:text-2xl text-slate-900">
                                <span className="flex items-center gap-1">
                                    <Zap className="h-5 w-5 text-yellow-400" />
                                    <span className="font-semibold text-emerald-600">Result:</span>
                                </span>
                                <span>Faster processing, fewer errors, and</span>
                                <span className="font-semibold text-[#FF7A00]">70% less manual effort</span>
                                <span>— freeing your team to focus on growth.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E3F2FD] to-white" data-aos="fade" data-aos-delay="100" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                            <span>YOUR TRUSTED PARTNER </span>
                            <span className="bg-gradient-to-r mt-3 from-[#FF7A00] md:block via-[#FF7A00] to-orange-400 bg-clip-text text-transparent">
                                IN AI TRANSFORMATION
                            </span>
                        </h2>
                    </div>

                    <div className="relative mt-8">
                        <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-4 md:mt-16" data-aos="fade-up" data-aos-delay="300">
                            <Image
                                src="/flower.png"
                                alt="flower"
                                width={300}
                                height={300}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-[15rem] select-none"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            />

                            <div className="rounded-2xl relative backdrop-blur-xl border p-6 md:py-10 text-center" data-aos="zoom-in" data-aos-delay="200">
                                <h3 className="text-2xl font-semibold text-slate-800">Automation</h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Bot className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">Control repetitive tasks easily with AI.</p>
                            </div>

                            <div className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center" data-aos="zoom-in" data-aos-delay="300">
                                <h3 className="text-2xl font-semibold text-slate-800">Intelligent Analysis</h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Puzzle className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">Apply AI to your data workflows.</p>
                            </div>

                            <div className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center" data-aos="zoom-in" data-aos-delay="400">
                                <h3 className="text-2xl font-semibold text-slate-800">Innovation</h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Lightbulb className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">Drive smarter processes through creativity.</p>
                            </div>

                            <div className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center" data-aos="zoom-in" data-aos-delay="500">
                                <h3 className="text-2xl font-semibold text-slate-800">Security</h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Lock className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">Ensure compliance with automated governance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="mt-10">
                <InfiniteScroll />
            </div>

            <div className="mx-auto w-full max-w-5xl mt-10 p-4">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        {!play ? (
                            <>
                                <Image
                                    src="/videothumb.png"
                                    alt="Video preview"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <button
                                    onClick={() => setPlay(true)}
                                    className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <Image
                                        src="/playBtn.png"
                                        alt="Play video"
                                        width={200}
                                        height={200}
                                        className="w-20 select-none transition-transform duration-300 group-hover:scale-110"
                                    />
                                </button>
                            </>
                        ) : (
                            <iframe
                                src="https://streamable.com/e/947f9d?autoplay=1"
                                allowFullScreen
                                className="absolute left-0 top-0 h-full w-full rounded-2xl"
                            />
                        )}
                    </div>
                </div>
            </div>


            <section className="relative overflow-hidden bg-white">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Heading */}
                    <div className="relative text-center">
                        <div className="text-center"> <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900">Choose Your Package</h2> <p className="mt-2 text-slate-600 font-medium" data-aos="fade-up">Flexible solutions that scale with your business</p> </div>
                    </div>

                    {/* Cards */}
                    <div data-aos="fade-up" className="relative md:mt-24 mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
                        {/* Card 1 */}
                        <div className="group relative">
                            {/* gradient border & glow */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(at_0%_0%,#ffd6a5,transparent_30%,#fecaca_60%,transparent_70%,#bfdbfe_90%)] opacity-60 blur-[6px] transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-3xl bg-white/80 p-6 sm:p-7 ring-1 ring-black/5 shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <h3 className=" text-xl font-bold text-slate-900">IT ADMINISTRATOR PACK</h3>
                                <p className="mt-2 text-slate-700">Comprehensive Microsoft 365 Management</p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Continuous monitoring of Microsoft 365, Azure, and Teams
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Early alerts powered by predictive AI
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Automated performance and availability reports
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Remote technical support and advanced administration
                                    </li>
                                </ul>

                                <p className="mt-6 text-sm">
                                    <span className="font-semibold text-orange-600">Ideal for:</span>{' '}
                                    Companies seeking operational stability and technological efficiency without expanding their IT team.
                                </p>

                                <div className="mt-7">
                                    <Link href="/contact">
                                        <Button className="group/btn relative w-full bg-[#FF7A00] text-white py-6 shadow-sm ring-1 ring-[#FF7A00]/30 transition-all hover:bg-[#FF7A00] hover:shadow-md hover:ring-[#FF7A00]/50">
                                            <span className="relative z-10 flex items-center justify-center">
                                                Get Started <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                                            </span>
                                            {/* Shine sweep */}
                                            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Featured (Most Popular) */}
                        <div className="group relative md:-mt-12">
                            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-orange-400/30 via-rose-400/30 to-sky-400/30 blur-2xl opacity-70 transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#FF7A00] via-[#FF7A00] to-rose-500 p-0.5 shadow-2xl">
                                <div className="relative rounded-[calc(2rem-2px)] bg-gradient-to-b from-[#FF7A00] via-[#FF7A00] to-rose-600 p-6 md:p-8 text-white ring-1 ring-white/15">
                                    <div aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-[inherit] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]" />
                                    <span className="absolute z-20 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                                        Most Popular
                                    </span>

                                    <h3 className="relative z-10 text-xl font-bold">POWER PLATFORM PACK</h3>
                                    <p className="relative z-10 mt-2 text-white/90 font-semibold">
                                        Automate. Analyze. Improve.
                                    </p>

                                    <ul className="relative z-10 mt-6 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            Eliminate repetitive tasks and accelerate your processes with Power Automate, Power Apps, and Power BI — all powered by AI.
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            Intelligent workflows with built-in AI
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            Full integration with Microsoft Teams and Dynamics 365
                                        </li>
                                    </ul>

                                    <p className="relative z-10 mt-6 text-sm text-orange-50">
                                        <span className="font-semibold">Ideal for:</span> Turning your data into actions and your processes into opportunities.
                                    </p>

                                    <div className="relative z-10 mt-7">
                                        <Link href="/contact">
                                            <Button
                                                variant="secondary"
                                                className="group/btn relative w-full bg-white/95 py-6 text-orange-600 shadow-sm ring-1 ring-white/40 transition-all hover:bg-white hover:shadow-lg"
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    Get Started <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                                                </span>
                                                {/* Shine sweep */}
                                                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                    <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/40 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Floating decorative dots */}
                                    <div aria-hidden="true" className="pointer-events-none absolute right-4 bottom-4 md:flex hidden gap-2 opacity-70">
                                        <span className="h-2 w-2 rounded-full bg-white/60" />
                                        <span className="h-2 w-2 rounded-full bg-white/60" />
                                        <span className="h-2 w-2 rounded-full bg-white/60" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative">
                            {/* gradient border & glow */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(at_100%_0%,#bfdbfe,transparent_30%,#ffd6a5_60%,transparent_70%,#fecaca_90%)] opacity-60 blur-[6px] transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-3xl bg-white/80 p-6 sm:p-6 ring-1 ring-black/5 shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <h3 className="text-xl font-bold text-slate-900">INTELLIGENT SECURITY PACK</h3>
                                <p className="mt-2 text-slate-700">Prevention, Protection, and Automated Response</p>
                                <p className="mt-3 text-slate-700">
                                    We combine the most powerful tools in the Microsoft ecosystem — Defender, Entra ID, and Azure Sentinel — with AI algorithms capable of detecting threats in real time.
                                </p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        AI-powered vulnerability analysis
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        24/7 incident monitoring
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Predictive alerts and continuous learning
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        Configuration of adaptive security policies
                                    </li>
                                </ul>

                                <p className="mt-6 text-slate-700">Protect your data with intelligence, not reaction.</p>

                                <div className="mt-7">
                                    <Link href="/contact">
                                        <Button className="group/btn relative w-full bg-[#FF7A00] text-white py-6 shadow-sm ring-1 ring-[#FF7A00]/30 transition-all hover:bg-[#FF7A00] hover:shadow-md hover:ring-[#FF7A00]/50">
                                            <span className="relative z-10 flex items-center justify-center">
                                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image src="/alliances-bg.png" alt="Background" fill className="object-cover" />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
                    <div
                        className="inline-flex items-center gap-3 rounded-lg bg-white px-3 py-3 shadow-lg ring-1 ring-black/5"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                    >
                        <Image src={"/microsoft.svg"} width={100} height={100} className="h-10 w-auto" alt="Microsoft" />
                        <Award className="h-7 w-7 text-[#FF7A00] animate-pulse" />
                    </div>

                    <h2
                        className="mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Certified Excellence Alliances
                    </h2>
                    <p
                        className="max-w-lg mt-3 mx-auto font-medium text-white/90"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        Microsoft Copilot Studio Certified Partner And Strategic Alliances To Deliver Reliable And Secure AI Solutions.
                    </p>
                </div>
            </section>


            <SuccessStoriesCarousel />

            <section className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                            Our Blog And Resources
                        </h2>
                        <p className="mt-3 text-slate-600 text-lg">
                            Stay informed about AI trends and best practices
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="800"
                        >
                            <div className="relative h-64 w-full sm:h-96">
                                <Image src="/blog1.png" alt="Featured post" fill className="object-cover transition-transform duration-700 ease-in-out hover:scale-105" />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white animate-pulse">
                                    AI Insights
                                </span>
                            </div>
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" /><span>Oct 25, 2025</span>
                                </div>
                                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
                                    The Future of AI in Business: 5 Trends to Watch in 2025
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.
                                </p>
                                <div className="mt-5">
                                    <Button asChild className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]">
                                        <Link href="/blog">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                                <div className="flex items-start justify-between">
                                    <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">Strategy</span>
                                </div>
                                <Link href="/blog" className="mt-3 block text-base font-medium text-slate-900 hover:underline">How to Measure ROI from AI Implementation</Link>
                                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500"><Calendar className="h-4 w-4" />Oct 20, 2025</div>
                            </div>

                            <div className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                                <div className="flex items-start justify-between">
                                    <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">Technology</span>
                                </div>
                                <Link href="/blog" className="mt-3 block text-base font-medium text-slate-900 hover:underline">Microsoft Copilot: A Complete Guide</Link>
                                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500"><Calendar className="h-4 w-4" />Oct 15, 2025</div>
                            </div>

                            <div className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5" data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                                <div className="flex items-start justify-between">
                                    <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">Case Studies</span>
                                </div>
                                <Link href="/blog" className="mt-3 block text-base font-medium text-slate-900 hover:underline">Automation Success Stories</Link>
                                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500"><Calendar className="h-4 w-4" />Oct 10, 2025</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden">
                <Image
                    src={"/orangeBg.png"}
                    alt="Background"
                    fill
                    className="absolute inset-0 -z-10 object-cover transition-transform duration-1000 ease-out scale-105 hover:scale-110"
                />

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white">
                    <div
                        className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur animate-pulse"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Limited Time Offer</span>
                    </div>

                    <h2
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="150"
                    >
                        Start Your AI Transformation
                        <br />
                        Today
                    </h2>

                    <p
                        className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        Join hundreds of businesses already leveraging AI to grow faster and work smarter
                    </p>

                    <div
                        className="mt-7 flex flex-wrap items-center justify-center gap-3 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="450"
                    >
                        <Link href="/contact">
                            <Button size={"lg"} className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50 transition-all duration-300">
                                Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size={"lg"} variant="outline" className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00] transition-all duration-300">
                                View Pricing
                            </Button>
                        </Link>
                    </div>

                    <p
                        className="mt-5 text-xs text-white/80 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        No credit card required. Get started in minutes.
                    </p>
                </div>
            </section>


            <section className="">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Get A Digital Assistant For Your Team
                        </h2>
                        <p
                            className="mt-3 text-[#4B5563] font-medium text-lg opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="150"
                        >
                            Let's discuss how AI can transform your business
                        </p>
                    </div>

                    <div className="md:mt-24 mt-28 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* AI Assistant Card */}
                        <div className="relative opacity-0 translate-y-6 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000">
                            <div className="absolute -top-28 left-8 z-10 h-58 w-52 overflow-hidden rounded-full transition-transform duration-700 ease-out hover:scale-105">
                                <Image src="/assistant-avatar.png" alt="AI Assistant" fill className="object-cover" />
                            </div>
                            <div className="rounded-3xl bg-[#1e3e9f] p-6 sm:p-8 text-white shadow-[0_24px_60px_rgba(2,6,23,0.12)] transition-transform duration-700 hover:scale-105">
                                <h3 className="mt-24 text-2xl font-semibold">24/7 AI Assistant</h3>
                                <p className="mt-3 text-white/90">
                                    Imagine having a tireless digital assistant handling customer inquiries, processing data, and managing workflows while your team focuses on strategic growth.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" /><span>Instant response times</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" /><span>Zero errors or delays</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" /><span>Scales with your business</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5 opacity-0 translate-y-6 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input id="company" placeholder="Your Company" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="needs">Tell us about your needs</Label>
                                    <Textarea id="needs" placeholder="I'm interested in..." className="min-h-[120px]" />
                                </div>
                                <Button className="w-full rounded-lg bg-[#FF7A00] text-white hover:bg-[#FF7A00] py-6 transition-transform duration-300 hover:scale-105">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
