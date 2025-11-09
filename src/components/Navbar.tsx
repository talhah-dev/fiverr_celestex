"use client";
import * as React from "react";
import Link from "next/link";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

// Types
type Language = "en" | "es" | "fr";

export default function Navbar() {
    const [lang, setLang] = React.useState<Language>("en");
    const [open, setOpen] = React.useState(false);

    return (
        <header className="w-full absolute top-0 left-0 bg -black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3" aria-label="Home">
                        <Image src={"/weblogo.svg"} width={100} height={100} className="w-auto h-8" alt="logo" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/solutions" className="text-white/90 hover:text-white font-medium">
                            Solutions
                        </Link>
                        <Link href="/smartpackages" className="text-white/90 hover:text-white font-medium">
                            Services
                        </Link>
                        <Link href="/resources" className="text-white/90 hover:text-white font-medium">
                            Resources
                        </Link>
                        <Link href="/contact" className="text-white/90 hover:text-white font-medium">
                            Contact
                        </Link>
                        <Link href="#" className="text-white/90 hover:text-white font-medium">
                            Client Portal
                        </Link>

                        <div className="flex items-center gap-3">
                            {/* Language dropdown (EN/ES/FR) */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="text-white/90 hover:text-white hover:bg-white/10 gap-2 h-9"
                                        aria-label="Change language"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span className="text-xs uppercase tracking-wider">{lang.toUpperCase()}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="min-w-[160px]">
                                    <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLang("es")}>Spanish</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLang("fr")}>French</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* CTA */}
                            <Button size={"lg"} className="bg-[#FF7A00] hover:bg-orange-500 text-white font-semibold px-5 h-9 rounded-md">
                                Get a Demo
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile actions */}
                    <div className="flex items-center gap-2 md:hidden">
                        {/* Language (mobile quick access) */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white/90 hover:text-white hover:bg-white/10 h-9 w-9"
                                    aria-label="Change language"
                                >
                                    <Globe className="scale-125" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-[160px]">
                                <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLang("es")}>Spanish</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLang("fr")}>French</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Hamburger -> Sheet */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon-lg"
                                    aria-label="Open menu"
                                    className="text-white/90 hover:text-white hover:bg-white/10 h-10 w-10"
                                >
                                    <Menu  className="scale-125" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left">
                                        <Image src={"/weblogo.svg"} width={100} height={100} className="w-auto h-8 invert" alt="logo"  />
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 p-3 flex flex-col gap-3">
                                    <Link
                                        href="/solutions"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                                    >
                                        Solutions
                                    </Link>
                                    <Link
                                        href="/smartpackages"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href="/resources"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                                    >
                                        Resources
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        href="#"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                                    >
                                        Client Portal
                                    </Link>

                                    {/* <div className="pt-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className="w-full justify-between">
                                                    <span className="text-sm">Language</span>
                                                    <span className="text-xs font-semibold uppercase tracking-wide">{lang.toUpperCase()}</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start" className="min-w-[180px]">
                                                <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setLang("es")}>Spanish</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setLang("fr")}>French</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div> */}

                                    <Button
                                        className="mt-2 bg-[#FF7A00] hover:bg-orange-500 text-white font-semibold h-10"
                                        onClick={() => setOpen(false)}
                                    >
                                        Get a Demo
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}