"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { ChevronLeft, Share2, Download, MoreVertical } from "lucide-react";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function PlayerContent() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <header className="flex items-center justify-between">
        <Link href="#" onClick={() => window.history.back()} className="p-2 glass-card hover:bg-white/10 rounded-xl">
          <ChevronLeft size={24} />
        </Link>
        <div className="flex gap-3">
          <button className="p-2 glass-card hover:bg-white/10 rounded-xl"><Share2 size={20} /></button>
          <button className="p-2 glass-card hover:bg-white/10 rounded-xl"><Download size={20} /></button>
          <button className="p-2 glass-card hover:bg-white/10 rounded-xl"><MoreVertical size={20} /></button>
        </div>
      </header>

      <div className="aspect-video w-full glass-card overflow-hidden relative shadow-neon">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
          width="100%"
          height="100%"
          controls
          playing
          config={{
            youtube: { playerVars: { showinfo: 1 } },
          }}
        />
      </div>

      <div className="glass-card p-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Lecture 01 : Mathematical Tools & Vectors</h1>
          <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
            <span>Rajwant Singh Sir</span>
            <span>•</span>
            <span>Physics</span>
            <span>•</span>
            <span>Oct 24, 2024</span>
          </div>
        </div>

        <hr className="border-white/5" />

        <div className="space-y-3">
          <h3 className="font-bold text-lg">Description</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            In this lecture, Rajwant Singh Sir discusses the fundamentals of Mathematical Tools
            required for Physics, including basic differentiation and integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PlayerPage() {
  return (
    <Suspense fallback={<div className="animate-pulse">Loading Player...</div>}>
      <PlayerContent />
    </Suspense>
  );
}
