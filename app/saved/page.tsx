"use client";

import React from "react";
import { useFavoritesStore } from "@/store/favorites";
import BatchCard from "@/components/BatchCard";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function SavedPage() {
  const { favorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-6 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <Heart size={64} className="text-accent" />
        </motion.div>
        <h2 className="text-2xl font-bold">No Saved Batches</h2>
        <p className="text-gray-400 mt-2">Start exploring and save your favorite batches!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-accent">Saved Batches</h1>
        <p className="text-gray-400 mt-2">Your collection of premium courses</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((batch) => (
          <BatchCard key={batch._id} batch={batch} />
        ))}
      </div>
    </div>
  );
}
