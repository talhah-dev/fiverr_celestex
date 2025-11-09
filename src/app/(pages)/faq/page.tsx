import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { Sparkles, ArrowRight } from "lucide-react";
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

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

export default function Faq() {
    return (
        <Wrapper>
            <section className="relative overflow-hidden  bg-[#99d9f1]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
                    <Navbar />
                    <div className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                            Resources/ FAQ
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
                            Frequently Asked Questions
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            Find answers about CelesteIQ's AI, Microsoft solutions, and global operations.
                        </p>
                    </div>

                    <section className="bg-white py-10 sm:py-14">
                        <div className="mx-auto max-w-6xl sm:px-4 md:px-6 lg:px-8">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="item-1"
                                className="grid gap-4 md:gap-6 md:grid-cols-2"
                            >
                                {faqs.map(({ id, q, a }, idx) => (
                                    <AccordionItem
                                        key={id}
                                        value={id}
                                        className="group relative rounded-2xl bg-white shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                    >
                                        <AccordionTrigger
                                            className="flex w-full md:items-center items-start justify-start gap-4 p-6 text-left hover:no-underline [&>svg]:hidden"
                                        >
                                            <span className="grid shrink-0 h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 shadow-sm group">
                                                <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                                                <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                                            </span>

                                            <span className="text-[17px] font-semibold leading-6 text-slate-900">
                                                {q}
                                            </span>
                                        </AccordionTrigger>

                                        <AccordionContent className="px-6 pb-6 pt-0 text-slate-600">
                                            <div className="flex flex-col gap-3 text-balance">{a}</div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>

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
