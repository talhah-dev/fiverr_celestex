import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Lock, MessageSquare, Shield, Users } from "lucide-react";
import { Brain, Layers } from "lucide-react";
import { CheckCircle2, Info } from "lucide-react";
import { ShieldCheck, Activity, AlertTriangle, Database } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Zap, TrendingUp, Box, Users2 } from "lucide-react";
import Footer from '@/components/Footer';

export default function SmartPackages() {
    return (
        <>
            <section className="relative overflow-hidden  bg-[#99d9f1]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
                    <Navbar />
                    <div className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                            <span className="block">Intelligent Solutions to</span>
                            <span className="block text-orange-500">Boost Your Business</span>
                            <span className="block">with AI and Microsoft</span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white">
                            At CelesteIQ, we combine the strength of the Microsoft
                            ecosystem with the power of
                            Artificial Intelligence to deliver services that truly make an
                            impact.
                        </p>

                    </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-[-1px]">
                    <svg viewBox="0 0 1440 180" className="h-[90px] w-full sm:h-[110px] md:h-[140px]" preserveAspectRatio="none">
                        <path d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z" fill="#ffffff" />
                    </svg>

                </div>
            </section>

            <section className="">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
                    <p className="mx-auto max-w-3xl text-center text-2xl text-black">
                        Our packages, audits, and specialized solutions accompany you from strategy to implementation—helping you build a more efficient,
                        connected, and future‑ready company.
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <Button asChild size={"lg"} className="py-6 bg-orange-500 md:w-auto w-full px-5 text-white hover:bg-orange-600">
                            <Link href="#packages">Explore Packages</Link>
                        </Button>
                        <Button variant="outline" asChild size={"lg"} className="py-6 border-orange-500 md:w-auto w-full text-orange-600 hover:bg-orange-50">
                            <Link href="#contact" className="inline-flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" />
                                <span>Contact an Expert</span>
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-6 md:mt-10 rounded-3xl max-w-3xl mx-auto bg-white p-5 py-14 shadow-[0_24px_60px_rgba(2,6,23,0.12)] ring-1 ring-black/5">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                            <div className="flex flex-col items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image src="/pkg-ai.png" alt="AI Assistant" width={48} height={48} className="h-12 w-12 object-cover" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">AI Assistant</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image src="/pkg-m365.png" alt="Microsoft 365" width={48} height={48} className="h-12 w-12 object-cover" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">Microsoft 365</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image src="/pkg-azure.png" alt="Azure" width={48} height={48} className="h-12 w-12 object-cover" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">Azure</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image src="/pkg-power.png" alt="Power Platform" width={48} height={48} className="h-12 w-12 object-cover" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">Power Platform</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-slate-900">
                                <span className="block">Implement. Automate.</span>
                                <span className="block">Evolve.</span>
                                <span className="block text-orange-500">with Microsoft + AI</span>
                            </h2>
                            <p className="mt-4 text-slate-600">At CelesteIQ, we understand that every company has a different starting point in its digital transformation journey. That's why we've designed intelligent packages that integrate the tools of the Microsoft ecosystem with applied Artificial Intelligence capabilities — helping you move forward with speed, security, and clarity.</p>
                            <p className="mt-5 font-medium text-lg text-slate-900">Our goal: to make technology work for you — not the other way around.</p>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#E97132]"><Zap className="h-5 w-5" /></span>
                                    <div>
                                        <p className="font-medium text-slate-900">Speed & Agility</p>
                                        <p className="text-sm text-slate-500">Rapid implementation with measurable results</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#E97132]"><Brain className="h-5 w-5" /></span>
                                    <div>
                                        <p className="font-medium text-slate-900">AI‑Powered Intelligence</p>
                                        <p className="text-sm text-slate-500">Smart automation and predictive insights</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#E97132]"><Layers className="h-5 w-5" /></span>
                                    <div>
                                        <p className="font-medium text-slate-900">Continuous Evolution</p>
                                        <p className="text-sm text-slate-500">Scalable solutions that grow with you</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-[#FBEADA] p-5 sm:p-6 md:p-7 ring-1 ring-orange-100 shadow-sm">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">Az</span>
                                        <div>
                                            <p className=" text-slate-900">Azure</p>
                                            <p className="text-xs text-slate-500">Cloud Infrastructure</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">M</span>
                                        <div>
                                            <p className=" text-slate-900">Microsoft 365</p>
                                            <p className="text-xs text-slate-500">Productivity Suite</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">P</span>
                                        <div>
                                            <p className=" text-slate-900">Power Platform</p>
                                            <p className="text-xs text-slate-500">Low‑Code Tools</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white"><Brain className="h-4 w-4" /></span>
                                        <div>
                                            <p className=" text-slate-900">Copilot</p>
                                            <p className="text-xs text-slate-500">AI Assistant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 rounded-xl bg-[#fdf7f0] p-4 ring-1 ring-black/5">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="flex justify-center items-center">
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">1</span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">2</span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">3</span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">4</span>
                                    </span>
                                    <span className="text-sm text-slate-700">Integrated Ecosystem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] bg-white md:p-8 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                        <div className="grid grid-cols-1  items-center gap-8 md:grid-cols-2">
                            <div className="order-2 md:order-1">
                                <Image src="/it-pack-dashboard.png" alt="IT Pack dashboard" width={760} height={520} className="h-auto w-full object-cover" />
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-orange-600">PACK 1</div>
                                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">IT Administrator Pack</h2>
                                <p className="text-3xl sm:text-4xl font-semibold leading-snug text-orange-500">Comprehensive Management<br className="hidden sm:block" /> with Predictive Vision</p>
                                <p className="mt-3 max-w-xl text-slate-600">Keep your Microsoft 365 environment always optimized, secure, and under control. With the Intelligent IT Administrator Pack, we combine human supervision and AI‑powered automation to detect issues before they affect productivity.</p>

                                <ul className="mt-5 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        Continuous monitoring of Microsoft 365, Azure, and Teams</li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        Early alerts generated by predictive AI</li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        Automated performance and availability reports</li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        Remote technical support and advanced administration</li>
                                </ul>

                                <div className="mt-6">
                                    <Button className="h-11 w-full rounded-lg bg-orange-500 text-white sm:px-6">Request your free IT environment <span className='md:inline hidden'>evaluation</span></Button>
                                </div>

                                <div className="mt-4 rounded-xl bg-[#eff6ff] p-4 text-[#1E3A8A] ring-1 ring-sky-100">
                                    <div className="flex items-start gap-3">
                                        <p className="text-sm">Ideal for companies seeking operational stability and technological efficiency without expanding their IT team.</p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >

            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 -z-10 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                        backgroundSize: "48px 48px, 48px 48px",
                        backgroundPosition: "-24px -24px",
                    }}
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <Image
                                src="/power-pack-dashboard.png"
                                alt="Power Platform dashboard"
                                width={920}
                                height={600}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-orange-600">PACK 2</div>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Power Platform Pack</h2>
                            <p className="mt-1 text-2xl sm:text-4xl font-semibold leading-snug text-orange-500">Automate. Analyze. Improve.</p>
                            <p className="mt-3 max-w-xl text-slate-600">Eliminate repetitive tasks and accelerate your processes with Power Automate, Power Apps, and Power BI — enhanced with AI. We help you connect your applications, visualize key data, and make faster, data‑driven decisions.</p>

                            <ul className="mt-5 space-y-3 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Intelligent workflows with integrated AI</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Real‑time dashboards with Power BI</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Custom applications with Power Apps</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Full integration with Microsoft Teams and Dynamics 365</span>
                                </li>
                            </ul>

                            <div className="mt-5 rounded-xl border border-orange-300 bg-orange-50 p-4 sm:p-5">
                                <p className="text-center text-lg text-slate-800">Turn your data into actions and your processes into opportunities.</p>
                            </div>

                            <div className="mt-5">
                                <Button size={"lg"} className="py-6 md:w-auto w-full rounded-lg bg-orange-500 px-6 text-white hover:bg-orange-600">Schedule a personalized demonstration</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-[#f2f8ff] to-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 sm:p-8 md:p-10">
                                <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-orange-600">PACK 3</span>
                                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Modern Workplace Pack</h2>
                                <p className="mt-1 text-2xl sm:text-4xl font-semibold leading-snug text-orange-500">Enhanced Productivity with<br className="hidden sm:block" /> Copilot</p>
                                <p className="mt-3 max-w-xl text-slate-600">Reinvent collaboration in your company with Microsoft 365, Teams, SharePoint, and Copilot. We create digital environments where your teams can communicate, create, and make better decisions thanks to integrated AI support.</p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div><span>Complete implementation of Microsoft 365</span></li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div><span>Integration of Copilot and customized virtual assistants</span></li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div><span>Automation of communication workflows</span></li>
                                    <li className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                        </div><span>Advanced data security</span></li>
                                </ul>

                                <div className="mt-6 rounded-xl bg-[#eff7ff] p-4 text-slate-700 ring-2 ring-[#bae6fd]">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 text-[#FF7A00]"><Sparkles className="h-5 w-5" /></span>
                                        <p className="text-sm">“Artificial intelligence that enhances human creativity.”</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <Button size={"lg"} className="py-6 w-full rounded-lg  bg-orange-500 text-white hover:bg-orange-600 sm:px-6">Speak with a Modern Workplace specialist</Button>
                                </div>
                            </div>

                            <div className="relative bg-[#eff7ff] p-6 sm:p-8 md:p-10 md:border-l md:border-slate-200/70">
                                <div className="mx-auto space-y-5">
                                    <div className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5">
                                        <div className="">
                                            <div className="flex items-center gap-3">
                                                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF7A00] text-white text-sm font-semibold">
                                                    <MessageSquare className="h-4 w-4" />
                                                </span>
                                                <div className="">
                                                    <p className=" text-slate-900">Team Collaboration</p>
                                                    <p className="text-xs text-slate-500">Microsoft Teams</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 rounded-lg bg-[#f0f9ff] p-3 text-sm">
                                                Meeting scheduled with AI summary
                                                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                                                    <span className="inline-flex -space-x-2 overflow-hidden rounded-full">
                                                        <Image src="/user1.png" alt="User" width={100} height={100} className="h-6 w-6 " />
                                                        <Image src="/user2.png" alt="User" width={100} height={100} className="h-6 w-6 " />
                                                        <Image src="/user3.png" alt="User" width={100} height={100} className="h-6 w-6 " />
                                                    </span>+5 participants</div>
                                            </div>
                                            <div className="mt-3 flex items-center gap-1 text-xs text-slate-600">
                                                <Users size={14} />
                                                Active collaboration space</div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-4 text-white shadow-[0_18px_40px_rgba(2,6,23,0.12)]">
                                        <div className="flex items-start gap-3">
                                            <span className="grid h-12 w-12 place-items-center rounded-md bg-[#8a4c36] text-white text-sm font-semibold">
                                                <Brain className="h-6 w-6" />
                                            </span>
                                            <div className="">
                                                <p className="font-medium">Copilot Assistant</p>
                                                <p className="text-xs text-[#FF7A00]">AI‑Powered Productivity</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 rounded-lg border border-white/20 bg-white/5 p-3 text-sm">
                                            <p className="text-white/90">How can I help you today?</p>
                                            <ul className="mt-2 space-y-2 text-white/80">
                                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#E97132]" />Summarize this document</li>
                                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#E97132]" />Draft email response</li>
                                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#E97132]" />Create presentation</li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-xs text-white/80"><span className="h-2 w-2 rounded-full bg-emerald-400" />AI Assistant Active</div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">95%</p>
                                            <p className="text-xs text-slate-500">Efficiency</p>
                                        </div>
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">3.2h</p>
                                            <p className="text-xs text-slate-500">Saved/Day</p>
                                        </div>
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">100%</p>
                                            <p className="text-xs text-slate-500">Adoption</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_75%_20%,#1e4bbf33,transparent_60%),radial-gradient(900px_500px_at_70%_60%,#0ea5e933,transparent_60%)]" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b1e3b] via-[#0a2250] to-[#0b203f]" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-32 text-white">
                    <div className="grid grid-cols-1 items-start md:gap-10 gap-20 md:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center rounded-full bg-[#ffedd5] px-3 py-1 text-[11px] font-semibold text-[#E97132] ring-1 ring-orange-300/30">PACK 4</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">Intelligent Security Pack</h2>
                            <p className="mt-1 text-2xl sm:text-4xl leading-snug text-orange-400">Prevention, Protection, and<br className="hidden sm:block" /> Automated Response</p>
                            <p className="mt-3 max-w-xl text-white/85">Your security should never depend on luck. With this package, we combine the most powerful tools of the Microsoft ecosystem — Defender, Entra ID, Azure Sentinel — with AI algorithms capable of detecting threats in real time.</p>

                            <ul className="mt-6 space-y-3 text-white/90">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Vulnerability analysis with AI</span></li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>24/7 incident monitoring</span></li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Predictive alerts and continuous learning</span></li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className=" h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>Configuration of adaptive security policies</span></li>
                            </ul>

                            <div className="mt-6 rounded-xl bg-[#2257a5] p-4 ring-2 ring-[#346abb]">
                                <p className="text-sm sm:text-base text-white/90">Protect your data with intelligence, not reaction.</p>
                            </div>

                            <div className="mt-5">
                                <Button className="h-11 w-full md:w-auto rounded-lg bg-orange-500 px-6 py-6 text-white hover:bg-orange-600">Request your AI security diagnosis</Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
                                <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-b from-[#2563EB] to-[#0891B2] shadow-2xl ring-1 ring-white/20">
                                    <Shield className="h-14 w-14 text-white" />
                                    <span className="absolute right-3 -top-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-[10px] font-bold text-white ring-2 ring-[#0a2250]">✓</span>
                                </div>
                            </div>

                            <div className="relative mt-24 space-y-4">
                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90"><Eye className="h-4 w-4 text-emerald-400" /><span>Threat Detection</span><span className="ml-auto text-emerald-400">Active</span></div>
                                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
                                    </div>
                                    <div className="mt-1 text-right text-[11px] text-white/60">100%</div>
                                </div>

                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-amber-300/30 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90"><AlertTriangle className="h-4 w-4 text-amber-300" /><span>AI Threat Analysis</span><span className="ml-auto text-amber-300">Medium</span></div>
                                    <p className="mt-2 text-xs text-white/75">Suspicious login attempt detected</p>
                                    <p className="text-[11px] text-white/60">Location: Unknown IP • Blocked automatically</p>
                                </div>

                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90"><Lock className="h-4 w-4 text-sky-300" /><span>Security Policies</span></div>
                                    <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                                        <div className="rounded-lg bg-white/5 p-3"><p className="text-lg font-semibold">247</p><p className="text-[11px] text-white/70">Rules</p></div>
                                        <div className="rounded-lg bg-white/5 p-3"><p className="text-lg font-semibold">0</p><p className="text-[11px] text-white/70">Breaches</p></div>
                                        <div className="rounded-lg bg-white/5 p-3"><p className="text-lg font-semibold">24/7</p><p className="text-[11px] text-white/70">Monitor</p></div>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0891B2] p-4 ring-1 ring-white/20">
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-white/20">
                                            <Zap className="h-6 w-6" />
                                        </span>
                                        <div className="">
                                            <span>Automated Response</span>
                                            <span className="text-white/90 block">AI‑powered threat mitigation active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                            Why Choose
                            <br className="block sm:hidden" />
                            <span className="ml-2 text-orange-500 block mt-2 md:mt-3">CelesteIQ Packages</span>
                        </h2>
                        <p className="mt-3 font-semibold text-slate-600">We deliver intelligent solutions that transform how you work</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-yellow-200">
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-50 text-yellow-600"><Zap className="h-5 w-5" /></span>
                                <div>
                                    <p className="font-semibold text-slate-900">Intelligent Automation</p>
                                    <p className="text-sm text-slate-500">Fewer manual tasks, more results</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-emerald-200">
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-emerald-50 text-emerald-600"><TrendingUp className="h-5 w-5" /></span>
                                <div>
                                    <p className="font-semibold text-slate-900">Continuous AI Analysis</p>
                                    <p className="text-sm text-slate-500">Data‑driven decisions, not assumptions</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-sky-200">
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-sky-50 text-sky-600"><Box className="h-5 w-5" /></span>
                                <div>
                                    <p className="font-semibold text-slate-900">Full Microsoft Integration</p>
                                    <p className="text-sm text-slate-500">Unified productivity, security, and collaboration</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-purple-200">
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-purple-50 text-purple-600"><Users2 className="h-5 w-5" /></span>
                                <div>
                                    <p className="font-semibold text-slate-900">Expert Guidance</p>
                                    <p className="text-sm text-slate-500">From implementation to daily support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-8 max-w-4xl rounded-2xl border-2 border-[#e97132] bg-[#ffedd5] p-6 md:py-8 text-center">
                        <p className="text-xl font-medium text-slate-900">Innovation is not improvised.</p>
                        <p className="mt-1 text-orange-600">It is designed, trained, and measured.</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <Button size={"lg"} className="py-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 text-white hover:from-orange-500 hover:to-orange-500 text-wrap">
                            Talk to us <span className='md:inline hidden'>and discover which package best fits your company</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
