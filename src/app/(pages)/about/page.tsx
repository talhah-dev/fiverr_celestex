import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Wrapper from '../Wrapper';

export default function About() {
    return (
        <>
            <Wrapper>
                <section className="relative overflow-hidden  bg-[#99d9f1]">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
                        <Navbar />
                        <div className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                                Empowering Businesses Through Intelligent Automation
                            </h1>
                            <Link href="/contact">
                                <Button className='bg-[#FF7A00] py-6 hover:bg-[#ea580c] text-white font-semibold mt-6' size={"lg"}>Schedule a Free Consult
                                    <ArrowRight />
                                </Button>
                            </Link>

                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px]">
                        <svg viewBox="0 0 1440 180" className="h-[90px] w-full sm:h-[110px] md:h-[140px]" preserveAspectRatio="none">
                            <path d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z" fill="#ffffff" />
                        </svg>

                    </div>
                </section>



                <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                        {/* Left column */}
                        <div>
                            <p className="text-sm font-semibold tracking-[0.2em] text-[#E65300]">ABOUT US</p>
                            <h1 className="mt-3 md:text-4xl font-semibold leading-tight text-[#0F0F0F] text-3xl ">
                                We provide enterprises
                                with innovative technology
                                for small to space
                                enterprises
                            </h1>

                            <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-black/5">
                                {/* Replace imageSrc with your asset. For static export, place file under /public. */}
                                <Image
                                    src={"/about-us-hero.jpg"}
                                    alt={"image"}
                                    width={940}
                                    height={720}
                                    className="h-auto w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="max-w-prose text-lg text-[#000000]">
                            <p>
                                At CELESTE IQ, we believe lead generation should be intelligent,
                                scalable, and effortless.
                            </p>
                            <p className="mt-5">
                                We are not just another outreach platform—we are your AI-powered
                                growth engine. Built for recruiters, consultants, and B2B service
                                providers, CELESTE IQ helps you automate 90% of your prospecting
                                while maintaining real, human-like conversations that drive results.
                            </p>
                            <p className="mt-5">
                                Our smart agents don’t just send messages. They research,
                                personalize, respond, follow up, and book meetings—so you can focus
                                on closing deals, not chasing leads.
                            </p>
                            <p className="mt-5">
                                With access to over 300 million verified contacts, multi-channel
                                outreach (Email, LinkedIn, SMS), and behavior-based engagement, we
                                deliver high-converting campaigns that feel personal—because they
                                are.
                            </p>
                            <p className="mt-5">
                                Whether you’re a solo operator or a scaling team, CELESTE IQ will
                                help you turn outreach into outcomes—without the stress, spam, or
                                guesswork.
                            </p>
                            <p className="mt-5">Welcome to the future of smart B2B growth</p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Our values</h2>
                        <p className="mx-auto mt-3 max-w-2xl font-medium text-slate-600 md:text-base">We strive to redefine the standard of excellence.</p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
                        <div className="text-center">
                            <div className="mx-auto h-14 w-14">
                                <Image src="/values-collaboration.png" alt="Collaboration" width={56} height={56} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">Collaboration</h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-14 w-14">
                                <Image src="/values-transparency.png" alt="Transparency" width={56} height={56} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">Transparency</h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-14 w-14">
                                <Image src="/values-trust.png" alt="Trust" width={56} height={56} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">Trust</h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">Trust will help us foster a positive and productive environment that delivers value to our users and customers.</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-14 w-14">
                                <Image src="/values-integrity.png" alt="Integrity" width={56} height={56} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">Integrity</h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.</p>
                        </div>
                    </div>
                </section>

                <section className="relative">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-10 md:grid-cols-2 md:gap-6 md:pt-16">
                        <div>
                            <p className="text-sm font-semibold tracking-[0.22em] text-[#E65300]">OUR TEAM</p>
                            <h2 className="mt-3 md:text-4xl text-3xl font-semibold text-[#183B56] ">Experience and integrity<br />by our team</h2>
                            <p className="mt-5 max-w-xl text-lg text-slate-600">The right tools wielded by the right people to make anything possible. From year to year we strive to invent the most innovative technology produced by our creative people</p>
                            <Link href="/contact">
                                <button className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1E63E9] px-5 py-3 text-sm font-semibold text-[#1E63E9] shadow-sm transition-colors hover:bg-[#1E63E9]/5">
                                    Meet our team <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>

                        <div className="relative w-full">
                            <Image src="/team-hero.png" alt="Team member" width={500} height={500}
                                className="w-full" />
                        </div>
                    </div>
                </section>

                <section className="relative mb-5">
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
        </>
    )
}
