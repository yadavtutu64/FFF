"use client";

import { motion } from "framer-motion";
import { Bell, Calendar } from "lucide-react";
import Image from "next/image";

const AnnouncementCard = ({ announcement }: { announcement: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div className="flex gap-4">
        <div className="p-3 bg-primary/20 rounded-2xl h-fit">
          <Bell className="text-primary" size={24} />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white">{announcement.heading}</h3>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar size={12} />
              {new Date(announcement.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-300 mt-2 text-sm leading-relaxed">
            {announcement.message}
          </p>
          {announcement.attachment && (
            <div className="mt-4 relative h-48 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={announcement.attachment.baseUrl + announcement.attachment.key}
                alt="Announcement"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
    </motion.div>
  );
};

export default AnnouncementCard;
