"use client";

import React, { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContents } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import NotesCard from "@/components/NotesCard";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TopicDetailsPage({ params }: { params: Promise<{ batchId: string, subjectId: string, topicId: string }> }) {
  const { batchId, subjectId, topicId } = use(params);
  const [activeTab, setActiveTab] = useState("VIDEOS");

  const { data: contents, isLoading } = useQuery({
    queryKey: ["contents", batchId, subjectId, activeTab, topicId],
    queryFn: () => getContents(batchId, subjectId, activeTab.toLowerCase(), topicId),
  });

  const tabs = ["VIDEOS", "NOTES", "DPP", "QUIZ"];

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center gap-4 glass-card p-4 sticky top-4 z-30">
        <Link href={`/batch/${batchId}/subject/${subjectId}`} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Mathematical Tools</h1>
      </header>

      {/* Modern Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full border transition-all whitespace-nowrap ${
              activeTab === tab
                ? "bg-primary text-white border-primary shadow-neon"
                : "glass-card text-gray-400 border-white/10 hover:border-white/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div key="loading" className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[1,2,3,4].map(i => <div key={i} className="h-48 glass-card animate-pulse" />)}
            </div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {activeTab === "VIDEOS" && contents?.map((video: any) => (
                <VideoCard key={video._id} video={video} />
              ))}
              {(activeTab === "NOTES" || activeTab === "DPP") && contents?.map((note: any) => (
                <NotesCard key={note._id} note={note} />
              ))}
              {activeTab === "QUIZ" && (
                <div className="col-span-full text-center py-20 glass-card">
                  <p className="text-gray-400">No Quizzes available for this topic yet.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
