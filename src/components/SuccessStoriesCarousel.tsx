"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The automation solutions provided by Celeste iQ have revolutionized how we handle customer service. Response times improved by 75% while maintaining quality.",
    name: "Michael Chen",
    role: "Operations Director at DataSystems Inc",
    initials: "MC",
  },
  {
    quote:
      "Celeste iQ helped us connect siloed systems and unlock real-time insights. Our teams now act on data, not hunches.",
    name: "Sofia Ramirez",
    role: "Head of Analytics at Nova Group",
    initials: "SR",
  },
  {
    quote:
      "From onboarding to scale, the experience was seamless. Costs dropped and our customer NPS is at an all-time high.",
    name: "David Park",
    role: "VP Customer Experience at Helio",
    initials: "DP",
  },
];

export default function SuccessStoriesCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="bg-gradient-to-b from-[#3B82F61A] to-[#A855F71A] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 opacity-0 animate-fade-up"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Success Stories
          </h2>
          <p
            className="mt-2 text-lg text-slate-500 opacity-0 animate-fade-up"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Hear from businesses we've transformed with AI
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-5xl">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {TESTIMONIALS.map((t, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <Card
                    className="rounded-2xl opacity-0 transform scale-95 animate-fade-up"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={idx * 100} // stagger effect
                  >
                    <CardContent className="relative p-6 sm:p-8 md:p-10">
                      <Quote className="h-8 w-8 text-orange-500" />
                      <blockquote className="mx-auto mt-6 max-w-4xl text-lg md:text-xl italic leading-relaxed text-slate-700">
                        “{t.quote}”
                      </blockquote>

                      <div className="mt-8 flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-sm font-bold">
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{t.name}</div>
                          <div className="text-sm text-slate-500">{t.role}</div>
                        </div>
                      </div>

                      <CarouselPrevious className="absolute md:flex hidden left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50 transition" />
                      <CarouselNext className="absolute md:flex hidden right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50 transition" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          {count > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={
                    i === current
                      ? "h-2 w-8 rounded-full bg-orange-500 transition-all"
                      : "h-2 w-2 rounded-full bg-slate-300 transition-all"
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
