"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Batch } from "@/types";
import { useFavoritesStore } from "@/store/favorites";

interface BatchCardProps {
  batch: Batch;
}

const BatchCard = ({ batch }: BatchCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(batch._id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(batch._id);
    } else {
      addFavorite(batch);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card overflow-hidden group relative"
    >
      <Link href={`/batch/${batch._id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={batch.previewImage}
            alt={batch.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 z-10"
          >
            <Heart
              size={20}
              className={`transition-colors ${favorite ? "fill-accent text-accent" : "text-white"}`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold truncate group-hover:text-primary transition-colors">
            {batch.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">JEE 2027</span>
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
              View Batch
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default BatchCard;
