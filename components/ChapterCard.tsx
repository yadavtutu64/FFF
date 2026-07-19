"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Video, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ChapterCardProps {
  topic: any;
  batchId: string;
  subjectId: string;
  index: number;
}

const ChapterCard = ({ topic, batchId, subjectId, index }: ChapterCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.01, x: 5 }}
      className="glass-card p-6 relative overflow-hidden group cursor-pointer border-l-4 border-secondary"
    >
      <Link href={`/batch/${batchId}/subject/${subjectId}/topic/${topic._id}`}>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
              {topic.topicName}
            </h3>
            <p className="text-sm text-gray-400 italic">PYQ Practice Sheet || Only PDF</p>

            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <Video size={14} className="text-primary" />
                <span>{topic.lectureCount || 0} Lectures</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <FileText size={14} className="text-secondary" />
                <span>{topic.notesCount || 0} Notes</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <BookOpen size={14} className="text-accent" />
                <span>{topic.exerciseCount || 0} Exercises</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                className="h-full bg-gradient-to-r from-secondary to-primary"
              />
            </div>
          </div>
          <div className="p-3 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors">
            <ChevronRight className="text-gray-400 group-hover:text-secondary" size={24} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChapterCard;
