import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home, Sparkles, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import Image from 'next/image';
import { Building2, ShieldCheck, Cookie, FileText } from "lucide-react";

export default function Legalnotices() {
    return (
        <Wrapper>
            <section className="relative overflow-hidden  bg-[#99d9f1]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
                    <Navbar />
                    <div className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                            Legal Notes
                        </h1>
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
                            Legal Notices

                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            Transparency, privacy, and trust in every digital interaction.
                            <span className='block'>
                                Official legal reference:&nbsp;
                                <a
                                    href="https://air-cloud.fr/es/notas-legales/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline hover:text-blue-700"
                                >
                                    https://air-cloud.fr/es/notas-legales/
                                </a>
                            </span>

                        </p>
                    </div>

                    <div className="bg-white py-10 sm:py-14">
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Site Owner */}
                                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Globe className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">Site Owner</h3>
                                            <dl className="mt-4 space-y-2 text-[15px] text-slate-700">
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">Company:</dt>
                                                    <dd>CelesteIQ</dd>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">Legal Name:</dt>
                                                    <dd>CelesteIQ Technologies, Inc.</dd>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">Business Type:</dt>
                                                    <dd>Technology Consulting and Digital Transformation Services</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </article>

                                {/* Data Protection */}
                                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <ShieldCheck className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">Data Protection</h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>
                                                    CelesteIQ is committed to protecting the privacy of its clients and visitors. Data collected is
                                                    used solely for contact and service improvement, in compliance with GDPR.
                                                </p>
                                                <p>
                                                    We implement industry‑standard security measures to safeguard your information and ensure it is
                                                    processed lawfully, fairly, and transparently.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Intellectual Property */}
                                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <FileText className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">Intellectual Property</h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>
                                                    All content on this website, including but not limited to logos, text, graphics, images, and
                                                    software, is the property of CelesteIQ and protected by international copyright laws.
                                                </p>
                                                <p>
                                                    Unauthorized reproduction, distribution, or modification of any materials from this website is
                                                    strictly prohibited without express written permission from CelesteIQ.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Cookie Policy */}
                                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Cookie className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">Cookie Policy</h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>
                                                    This site uses technical and analytical cookies to enhance your browsing experience. These cookies
                                                    help us understand how visitors interact with our website and allow us to improve our services.
                                                </p>
                                                <p>
                                                    By continuing to use this site, you consent to our use of cookies in accordance with our privacy
                                                    policy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Contact */}
                                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:col-span-2">
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Building2 className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
                                            <p className="mt-3 text-[15px] leading-6 text-slate-700">
                                                For any legal or privacy-related inquiries, please contact:
                                                <a href="mailto:legal@celesteiq.com" className="ml-1 font-medium text-blue-500 hover:underline">
                                                    legal@celesteiq.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="relative overflow-hidden mb-5 md:mt-16 mt-10">
                <Image src={"/orangeBg.png"} alt="Background" fill className="absolute inset-0 -z-10 object-cover" />

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Limited Time Offer</span>
                    </div>

                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                        Start Your AI Transformation
                        <br />
                        Today
                    </h2>
                    <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90">
                        Join hundreds of businesses already leveraging AI to grow faster and work smarter
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/contact">
                            <Button size={"lg"} className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50">
                                Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size={"lg"} variant="outline" className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00]">
                                View Pricing
                            </Button>
                        </Link>
                    </div>

                    <p className="mt-5 text-xs text-white/80">
                        No credit card required. Get started in minutes.
                    </p>
                </div>
            </section>



        </Wrapper>
    )
}
