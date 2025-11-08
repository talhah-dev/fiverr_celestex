import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import Navbar from '@/components/Navbar';
import { Briefcase, TrendingUp, Zap } from "lucide-react";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <section className='w-full flex md:flex-row flex-col md:justify-center justify-end md:items-end items-center min-h-screen'>
                <Image src="/heroBg.png" width={1000} height={700} className='w-full select-none top-0 left-0 -z-50 h-full object-cover absolute' alt='sd' />
                <div className="">
                    <div className="w-full max-w-6xl md:text-start text-center p-5 md:py-10">
                        <div className="flex items-center md:flex-row md:mb-0 mb-3 flex-col-reverse justify-center md:gap-10 gap-4">
                            <h1 className='font-bold md:text-[5.5rem] text-4xl md:text-nowrap text-image1'>TRANSFORM YOUR <span className='md:hidden'>BUSINESS WITH AI</span></h1>
                            <div className="relative md:block hidden">
                                <p className='font-semibold md:max-w-[12rem] md:block hidden w-full'>With the Power of Artificial Intelligence and the Microsoft Ecosystem</p>
                                <Image src={"/favicon.svg"} className='absolute w-10 -top-4 lg:block hidden right-0' width={100} height={100} alt="logo" />
                            </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col-reverse justify-center md:gap-10 gap-4 md:-mt-2">
                            <p className='font-semibold md:max-w-[14rem] w-full'>Automate manual tasks, cut costs, and boost efficiency with intelligent solutions</p>
                            <h1 className='font-bold md:text-[5.5rem] md:block hidden text-4xl md:text-nowrap text-image1'>BUSINESS WITH AI</h1>
                        </div>
                        <div className="flex items-center justify-center mt-5">
                            <Button size={"lg"} className="bg-orange-500 py-5 hover:bg-orange-600 text-white font-semibold px-5 h-9 rounded-md">
                                Schedule a Free Consult
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
                <Image src="/lady.png" width={1000} height={700} className='w-full select-none max-w-[40rem] -z-40 md:absolute' alt='sd' />
            </section >

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="flex flex-col items-center text-center">
                        <Image src={"/microsoft.svg"} width={100} height={100} className="mx-auto mb-8 h-10 w-auto" alt="Microsoft" />
                        <h2 className="max-w-[890px] text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                            We transform businesses with intelligent <span className="text-orange-500">Microsoft and AI solutions</span>
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                                <Bot className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Intelligent Automation</h3>
                            <p className="mt-3 text-slate-600">Simplify workflows and minimize errors with AI-powered automation that works seamlessly with your existing systems.</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Data-Driven Insights</h3>
                            <p className="mt-3 text-slate-600">Make faster, smarter decisions with real-time analytics and predictive intelligence built into your processes.</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Enhanced Productivity</h3>
                            <p className="mt-3 text-slate-600">Equip teams with AI tools that scale growth and eliminate repetitive tasks, letting them focus on what matters.</p>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Button size={"lg"} className="bg-orange-500 py-6 text-white shadow-md hover:bg-orange-600">
                            Schedule a Free Consult <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
