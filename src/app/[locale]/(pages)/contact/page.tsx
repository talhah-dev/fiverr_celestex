"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function Contact() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const t = useTranslations("contact");
    const h = useTranslations("ctaHero");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
    }

    return (
        <Wrapper>


            <section className="relative overflow-hidden bg-[#99d9f1]">
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
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            {t("heroTitle")}
                        </h1>

                        <p
                            className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            {t("heroSubtitle")}
                        </p>
                    </div>
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                    data-aos="fade-up"
                    data-aos-delay="300"
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
                className="bg-white py-12 sm:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Left side: text + contact details */}
                        <div data-aos="fade-up" data-aos-delay="140">
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                                {t("sectionTitle")}
                            </h2>
                            <p className="mt-3 max-w-md text-[#494949] text-lg">
                                {t("sectionDescription")}
                            </p>

                            <ul className="mt-8 space-y-5 text-slate-700">
                                <li
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="180"
                                >
                                    <Mail className="h-5 w-5 text-[#FF7A00]" />
                                    <a
                                        href="mailto:support@celesteiq.com"
                                        className="hover:text-orange-600 transition-colors"
                                    >
                                        {t("emailLabel")}
                                    </a>
                                </li>

                                <li
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="210"
                                >
                                    <Home className="h-5 w-5 text-[#FF7A00]" />
                                    <a
                                        href="https://www.google.com/maps?q=60+Avenue+Victor+Hugo,+75116+Paris,+France"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-orange-600 transition-colors whitespace-pre-line"
                                    >
                                        {t("addressLabel")}
                                    </a>
                                </li>

                                <li
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="240"
                                >
                                    <Phone className="h-5 w-5 text-[#FF7A00]" />
                                    <a
                                        href="tel:+33142389811"
                                        className="hover:text-orange-600 transition-colors"
                                    >
                                        {t("phoneLabel")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Right side: form */}
                        <form
                            className="space-y-4"
                            onSubmit={(e) => e.preventDefault()}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Input
                                required
                                placeholder={t("form.namePlaceholder")}
                                className="border-slate-200 py-6"
                            />

                            <Input
                                required
                                type="email"
                                placeholder={t("form.emailPlaceholder")}
                                className="border-slate-200 py-6"
                            />

                            <Input
                                required
                                placeholder={t("form.websitePlaceholder")}
                                className="border-slate-200 py-6"
                            />

                            <Textarea
                                placeholder={t("form.messagePlaceholder")}
                                rows={6}
                                className="border-slate-200 py-6"
                            />

                            <Button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-[#FF7A00] py-6 text-white"
                            >
                                {t("form.submit")}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>


            <div
                className="p-5"
                data-aos="fade-up"
            >
                <div
                    className="rounded-2xl border max-w-5xl mx-auto border-orange-200 bg-orange-50 p-6 sm:p-7 text-slate-900 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="text-xl font-semibold">
                        {t("whyChoose.title")}
                    </h3>

                    <ul
                        className="mt-4 space-y-3"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {[0, 1, 2, 3].map((index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2.5"
                                data-aos="fade-up"
                                data-aos-delay="180"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                                <span className="text-[15px] leading-6">
                                    {t(`whyChoose.items.${index}`)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            <section
                className="relative overflow-hidden mb-5 md:mt-16 mt-10"
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
                        <span>{h("badge")}</span>
                    </div>

                    <h2
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {h("titleLine1")}
                        <br />
                        {h("titleLine2")}
                    </h2>

                    <p
                        className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90"
                        data-aos="fade-up"
                        data-aos-delay="240"
                    >
                        {h("subtitle")}
                    </p>

                    <div
                        className="mt-7 flex flex-wrap items-center justify-center gap-3"
                        data-aos="fade-up"
                        data-aos-delay="280"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                {h("primaryButton")} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                variant="outline"
                                className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00]"
                                data-aos="zoom-in"
                                data-aos-delay="330"
                            >
                                {h("secondaryButton")}
                            </Button>
                        </Link>
                    </div>

                    <p
                        className="mt-5 text-xs text-white/80"
                        data-aos="fade-up"
                        data-aos-delay="360"
                    >
                        {h("note")}
                    </p>
                </div>
            </section>



        </Wrapper>
    )
}
