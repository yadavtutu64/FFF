"use client";

import { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopics } from "@/services/api";
import ChapterCard from "@/components/ChapterCard";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SubjectPage({ params }: { params: Promise<{ batchId: string, subjectId: string }> }) {
  const { batchId, subjectId } = use(params);

  const { data: topics, isLoading } = useQuery({
    queryKey: ["topics", batchId, subjectId],
    queryFn: () => getTopics(batchId, subjectId),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center gap-4 glass-card p-4 sticky top-4 z-30">
        <Link href={`/batch/${batchId}`} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <div>
          <h1 className="text-xl font-bold">Physics</h1>
          <p className="text-sm text-gray-400">Arjuna JEE 2027</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {topics?.map((topic: any, index: number) => (
          <ChapterCard
            key={topic._id}
            topic={topic}
            batchId={batchId}
            subjectId={subjectId}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
