import React from 'react'
import Wrapper from '../Wrapper'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, FolderCog, Settings, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";
import {
    GraduationCap,
    ClipboardList,
    Mail,
    ServerCog,
    CheckCircle2,
    FileCog,
} from "lucide-react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Award, Bot, Users, TrendingUp } from "lucide-react";
import Link from 'next/link'

const features = [
    {
        icon: Award,
        title: "Microsoft-Certified Experts",
        desc: "Industry-recognized professionals with deep Microsoft ecosystem knowledge",
    },
    {
        icon: Bot,
        title: "AI-Powered Monitoring",
        desc: "Intelligent automation and predictive optimization for peak performance",
    },
    {
        icon: Users,
        title: "Human Support",
        desc: "Dedicated experts who understand your unique business needs",
    },
    {
        icon: TrendingUp,
        title: "Flexible & Scalable",
        desc: "Solutions designed to grow with your SMB, no limits",
    },
] as const;

export default function Specialized() {
    return (
        <Wrapper>


            <section
                className="relative overflow-hidden bg-[#99d9f1]"
            >
                <div
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <Navbar />

                    <div
                        className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="140"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Specialized Intelligent Services
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
                        <path
                            d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z"
                            fill="#ffffff"
                        />
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
                    data-aos-delay="60"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                            SPECIALIZED SERVICES
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            Empower your business with secure, intelligent, and scalable Microsoft solutions — designed, deployed, and managed by CelesteIQ experts
                        </p>
                        <div
                            className="flex items-center justify-center mt-10"
                            data-aos="zoom-in"
                            data-aos-delay="180"
                        >
                            <Link href="/smartpackages">
                                <Button
                                    className="py-6 bg-[#FF7A00] rounded-full text-white hover:bg-orange-600"
                                    size={"lg"}
                                >
                                    Explore Our Audit Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="grid md:mt-16 mt-8 md:grid-cols-2 md:gap-8 gap-4 grid-cols-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {/* 1. Training Programs */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            <div className="rounded-t-2xl p-5 bg-[#EEF4FF]">
                                <div className="border inline-flex p-2.5 rounded-lg text-[#2563EB] border-[#2563EB]/20">
                                    <GraduationCap className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">1. TRAINING PROGRAMS</h2>
                                <h3 className="mt-1 text-lg text-[#2563EB] font-semibold">
                                    Empower Your Team. Master Microsoft 365.
                                </h3>
                            </div>
                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    At CelesteIQ, we help your team become Microsoft experts. Our training programs teach how to configure, automate, and manage Microsoft 365 tools to boost productivity and collaboration.
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>Duration: 4 days (28 hours) — 1 day per week over 4 weeks</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>Format: 100% remote via Microsoft Teams (max. 6 participants)</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>Outcome: Hands-on mastery + Certificate of Participation</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>Access: Open to all Microsoft 365 users</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">Why It Matters:</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Train your employees to get the most out of Microsoft tools — from Teams to Power Automate — and drive digital transformation within your organization.
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="260"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#1E63E9", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">Learn &amp; Transform</span>

                                        <span className="hidden md:inline">
                                            Learn. Apply. Transform the way your team works.
                                        </span>

                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 2. Document Migration */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#E8F6ED" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#0EA873] border-[#0EA873]/20">
                                    <FolderCog className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    2. DOCUMENT MIGRATION TO MICROSOFT 365
                                </h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#0EA873" }}
                                >
                                    Secure. Centralized. Future-Ready.
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    We make moving your documents to SharePoint, OneDrive, and Teams simple and secure. No data loss,
                                    no downtime — just a smooth transition to a smarter cloud environment.
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>Secure data transfer with full compliance</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>Migration of files, folders, and permissions</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>Continuous post-migration support</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>Improved collaboration and data accessibility</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">Why It Matters:</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Modern businesses run on seamless collaboration. We make your move to Microsoft 365 effortless —
                                        so your teams can focus on what really matters.
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="280"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#0EA873", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">Migrate with Confidence</span>
                                        <span className="hidden md:inline">
                                            Migrate with confidence. Work smarter in the cloud.
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 3. Email Migration */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#E8F6F9" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#0891B2] border-[#0891B2]/20">
                                    <Mail className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">3. EMAIL MIGRATION SERVICES</h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#0891B2" }}
                                >
                                    Stay Connected. Stay Protected.
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Upgrade your email system to Microsoft Exchange Online with zero disruption. We handle everything — setup, migration, DNS, and user training — so your communication never stops.
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>Configure users, licenses &amp; shared mailboxes</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>Migrate emails, contacts, calendars</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>Set up DNS, DKIM, DMARC, SPF &amp; AutoDiscover</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>Enable Multi-Factor Authentication for security</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>Train your team on Outlook &amp; best practices</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">Why It Matters:</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Email is the core of your business communication. We ensure it’s secure, reliable, and easy to manage.
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#0891B2", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">Simplify Email</span>
                                        <span className="hidden md:inline">
                                            Simplify your email systems with CelesteIQ
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 4. Managed IT & Cloud */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="280"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#FFF3EA" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#EA580C] border-[#EA580C]/20">
                                    <Settings className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    4. MANAGED IT &amp; CLOUD SERVICES
                                </h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#EA580C" }}
                                >
                                    Your Trusted Microsoft Ecosystem Partner.
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    From Microsoft 365 and Azure to Dynamics 365 and Power BI, we manage your IT ecosystem end-to-end.
                                    Our team ensures everything stays secure, optimized, and scalable — so you can grow without limits.
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>Full infrastructure assessment &amp; optimization</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>Microsoft 365, Azure, Dynamics 365 &amp; Power BI management</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>Real-time monitoring &amp; predictive maintenance</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>Tailored support and training for your team</span>
                                    </li>

                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>Continuous consulting and technical guidance</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">Why It Matters:</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Managed IT means peace of mind. With CelesteIQ, your systems run smoothly, securely, and
                                        strategically aligned with your business goals.
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="320"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#EA580C", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">Manage with CelesteIQ</span>
                                        <span className="hidden md:inline">
                                            Let us manage your cloud — so you can manage your growth.
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section
                className="relative overflow-hidden mb-5"
                aria-labelledby="why-celesteiq-heading"
                data-aos="fade-up"
            >
                {/* Background gradient */}
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF7A18] via-[#FF6A00] to-[#FF3E00]"
                    data-aos="fade-up"
                    data-aos-delay="60"
                />
                {/* Subtle radial glow */}
                <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_50%_at_50%_20%,_#ffffff66_0%,_transparent_60%)]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                />

                <div
                    className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24 text-white"
                    data-aos="fade-up"
                    data-aos-delay="140"
                >
                    <h2
                        id="why-celesteiq-heading"
                        className="text-center text-3xl font-bold tracking-tight md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="180"
                    >
                        Why CelesteIQ
                    </h2>
                    <p
                        className="mt-2 text-center md:text-lg md:mt-3 font-medium"
                        data-aos="fade-up"
                        data-aos-delay="210"
                    >
                        The Human + AI Advantage
                    </p>

                    {/* Feature cards */}
                    <div
                        className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4"
                        data-aos="fade-up"
                        data-aos-delay="240"
                    >
                        {features.map(({ icon: Icon, title, desc }, idx) => (
                            <Card
                                key={title}
                                className="rounded-2xl border-white/20 bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] BG-[#f5792a] transition-transform hover:-translate-y-0.5"
                                data-aos="fade-up"
                                data-aos-delay={260 + idx * 40}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start flex-col gap-4">
                                        <Icon className="h-9 w-9" />
                                        <div>
                                            <h3 className="font-bold leading-tight">{title}</h3>
                                            <p className="mt-2 text-sm text-white/80">{desc}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Quote */}
                    <p
                        className="mx-auto mt-10 max-w-4xl text-center italic font-light md:mt-12 md:text-2xl"
                        data-aos="fade-up"
                        data-aos-delay="320"
                    >
                        "Simplifying digital transformation, one intelligent solution at a time."
                    </p>

                    {/* CTA */}
                    <div
                        className="mt-6 flex justify-center md:mt-8"
                        data-aos="zoom-in"
                        data-aos-delay="360"
                    >
                        <Link href="/contact">
                            <Button
                                className="p-6 rounded-lg bg-white px-5 text-black font-semibold hover:bg-white/90"
                                type="button"
                            >
                                Start Your Transformation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


        </Wrapper>
    )
}