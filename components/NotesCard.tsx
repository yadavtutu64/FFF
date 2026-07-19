"use client";

import React from "react";
import { FileText, Download, Eye, Printer, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const NotesCard = ({ note }: { note: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-5 flex items-start gap-4"
    >
      <div className="p-3 bg-secondary/10 rounded-2xl">
        <FileText className="text-secondary" size={28} />
      </div>
      <div className="flex-grow space-y-3">
        <div>
          <h3 className="font-bold text-white line-clamp-1">{note.topic}</h3>
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <Calendar size={12} />
            Uploaded on {new Date(note.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-2 glass-card border-white/5 flex items-center justify-center gap-2 text-xs font-bold hover:bg-white/5 transition-colors">
            <Eye size={14} /> Open
          </button>
          <button className="p-2 glass-card border-white/5 hover:bg-white/5 transition-colors">
            <Download size={16} />
          </button>
          <button className="p-2 glass-card border-white/5 hover:bg-white/5 transition-colors">
            <Printer size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotesCard;
