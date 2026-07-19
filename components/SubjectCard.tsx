"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Video } from "lucide-react";

interface SubjectCardProps {
  subject: any;
  batchId: string;
}

const SubjectCard = ({ subject, batchId }: SubjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-card p-4 group cursor-pointer"
    >
      <Link href={`/batch/${batchId}/subject/${subject._id}`}>
        <div className="flex gap-4">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={subject.imageUrl || "https://placeholder.com/150"}
              alt={subject.subjectName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {subject.subjectName}
            </h3>
            <p className="text-gray-400 text-sm mt-1">By {subject.teacherName}</p>
            <div className="flex gap-4 mt-3 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <BookOpen size={14} className="text-secondary" />
                {subject.chapterCount} Chapters
              </span>
              <span className="flex items-center gap-1">
                <Video size={14} className="text-accent" />
                {subject.lectureCount} Lectures
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SubjectCard;
