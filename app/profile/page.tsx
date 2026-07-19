"use client";

import React from "react";
import { useFavoritesStore } from "@/store/favorites";
import { User, Settings, Shield, Info, LogOut, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { favorites } = useFavoritesStore();

  const menuItems = [
    { icon: Heart, label: "My Favorites", count: favorites.length, color: "text-accent" },
    { icon: Settings, label: "Settings", color: "text-primary" },
    { icon: Shield, label: "Privacy Policy", color: "text-secondary" },
    { icon: Info, label: "About Us", color: "text-gray-400" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      <header className="text-center space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-glass overflow-hidden">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              fill
              className="bg-glass-card"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Tutu Kumar</h1>
          <p className="text-gray-400">JEE aspirant 2027</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-5 flex items-center justify-between group hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <span className="font-bold text-lg">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.count !== undefined && (
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {item.count}
                </span>
              )}
              <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
            </div>
          </motion.button>
        ))}

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-5 flex items-center gap-4 text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <div className="p-3 rounded-2xl bg-red-500/10">
            <LogOut size={24} />
          </div>
          <span className="font-bold text-lg">Logout</span>
        </motion.button>
      </div>
    </div>
  );
}
