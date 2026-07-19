"use client";

import React from "react";
import Image from "next/image";
import { Play, Clock, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const VideoCard = ({ video }: { video: any }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group"
    >
      <Link href={`/player?v=${video._id}`}>
        <div className="relative aspect-video">
          <Image
            src={video.videoDetails?.image || "https://placeholder.com/640x360"}
            alt={video.topic}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="p-4 rounded-full bg-primary/80 backdrop-blur-md scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play fill="white" size={32} className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold">
            {video.videoDetails?.duration || "1:20:30"}
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {video.topic}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <User size={12} />
              Rajwant Singh Sir
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(video.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
