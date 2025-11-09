// app/components/chat-widget.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  Send,
  X,
  Bot,
  User,
  Minus,
} from "lucide-react";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  time?: string;
};

const seedMessages: Message[] = [
  {
    id: "m1",
    role: "bot",
    content:
      "Hi! I’m the CelesteIQ assistant. Ask me anything about our packages, audits, or Microsoft + AI solutions.",
    time: "Now",
  },
  {
    id: "m2",
    role: "user",
    content: "What’s included in the Modern Workplace Pack?",
    time: "Now",
  },
  {
    id: "m3",
    role: "bot",
    content:
      "It includes Microsoft 365 implementation, Copilot integration, workflow automation, and security best practices.",
    time: "Now",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);
  const [messages] = React.useState<Message[]>(seedMessages);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat panel */}
      {open && !minimized && (
        <div className="mb-3 w-[min(380px,calc(100vw-2rem))] sm:w-[380px]">
          <Card className="overflow-hidden rounded-2xl py-0 border border-orange-200 shadow-[0_24px_60px_rgba(2,6,23,0.18)]">
            <CardHeader className="space-y-0 border-b bg-gradient-to-r from-orange-100 to-orange-50 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FF7A00] text-white">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-base leading-tight">
                      CelesteIQ Assistant
                    </CardTitle>
                    <p className="text-xs text-slate-600">
                      Online • UI preview
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Minimize chat"
                    onClick={() => setMinimized(true)}
                    className="h-8 w-8 text-slate-600 hover:bg-orange-100"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close chat"
                    onClick={() => setOpen(false)}
                    className="h-8 w-8 text-slate-600 hover:bg-orange-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <ScrollArea className="h-[360px] px-4">
                <div className="space-y-4">
                  {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} />
                  ))}
                </div>
              </ScrollArea>

              <Separator />

              {/* Composer (UI only) */}
              <form
                className="flex items-end gap-2 p-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <Textarea
                  placeholder="Type your message…"
                  className="min-h-[44px] max-h-[120px] resize-none"
                />
                <Button
                  type="submit"
                  className="bg-[#FF7A00] hover:bg-[#ea580c]"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Minimized bar */}
      {open && minimized && (
        <div className="mb-3 w-[min(380px,calc(100vw-2rem))] sm:w-[380px]">
          <button
            aria-label="Restore chat"
            onClick={() => setMinimized(false)}
            className="
              flex w-full items-center justify-between
              rounded-xl border border-orange-200 bg-white/90 px-3 py-2
              text-left shadow-sm backdrop-blur transition hover:bg-white
            "
          >
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF7A00] text-white">
                <Bot className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <p className="font-medium leading-tight">
                  CelesteIQ Assistant
                </p>
                <p className="text-xs text-slate-500">Click to reopen chat</p>
              </div>
            </div>
            <X
              className="h-4 w-4 text-slate-500"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                setMinimized(false);
              }}
            />
          </button>
        </div>
      )}

      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open chat"
          className="
            relative grid h-14 w-14 place-items-center rounded-full
            bg-[#FF7A00] text-white shadow-[0_18px_40px_rgba(2,6,23,0.22)]
            ring-1 ring-white/20 transition hover:scale-105 hover:bg-[#ea580c]
            focus:outline-none focus:ring-4 focus:ring-orange-200
          "
        >
          <Bot className="h-6 w-6" />
          {/* animate-ping */}
          <span className="pointer-events-none absolute -z-10 h-full w-full  rounded-full bg-[#FF7A00]/40" />
        </button>
      )}
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isBot = message.role === "bot";

  return (
    <div
      className={`flex items-start gap-2 ${
        isBot ? "" : "justify-end text-right"
      }`}
    >
      {/* Avatar */}
      {isBot ? (
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-orange-100 text-[#FF7A00]">
          <Bot className="h-4 w-4" />
        </span>
      ) : (
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-slate-700">
          <User className="h-4 w-4" />
        </span>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
          isBot
            ? "bg-orange-50 text-slate-800 ring-1 ring-orange-200"
            : "bg-white text-slate-900 ring-1 ring-slate-200"
        }`}
      >
        <p className="text-[13.5px]">{message.content}</p>
        {message.time && (
          <div className="mt-1.5 text-[11px] text-slate-500">
            {message.time}
          </div>
        )}
      </div>
    </div>
  );
}
