"use client";

import React, { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBatchDetails, getAnnouncements } from "@/services/api";
import Image from "next/image";
import { Share2, Bell } from "lucide-react";
import SubjectCard from "@/components/SubjectCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import { motion, AnimatePresence } from "framer-motion";

export default function BatchDetailsPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = use(params);
  const [activeTab, setActiveTab] = useState("Subjects");

  const { data: batchData, isLoading: isBatchLoading } = useQuery({
    queryKey: ["batch", batchId],
    queryFn: () => getBatchDetails(batchId),
  });

  const { data: announcements, isLoading: isAnnouncementsLoading } = useQuery({
    queryKey: ["announcements", batchId],
    queryFn: () => getAnnouncements(batchId),
    enabled: activeTab === "Announcements",
  });

  if (isBatchLoading) return <div className="animate-pulse">Loading...</div>;

  return (
    <div className="space-y-8 pb-20">
      {/* Hero Header */}
      <div className="relative h-64 rounded-3xl overflow-hidden shadow-neon">
        <Image
          src={batchData?.previewImage || ""}
          alt={batchData?.name || "Batch"}
          fill
          className="object-cover blur-sm brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold">{batchData?.name}</h1>
              <p className="text-primary font-medium mt-1">JEE Premium Batch</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 glass-card hover:bg-white/10 transition-colors">
                <Share2 size={24} />
              </button>
              <button className="p-3 glass-card hover:bg-white/10 transition-colors">
                <Bell size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 p-2 glass-card w-max mx-auto">
        {["Subjects", "Announcements"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-2xl transition-all relative ${
              activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-neon"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "Subjects" ? (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {batchData?.subjects?.map((subject: any) => (
                <SubjectCard key={subject._id} subject={subject} batchId={batchId} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="announcements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {announcements?.map((ann: any) => (
                <AnnouncementCard key={ann._id} announcement={ann} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
