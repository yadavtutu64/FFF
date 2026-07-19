"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, User } from "lucide-react";
import { motion } from "framer-motion";

const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Saved", icon: Heart, path: "/saved" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <div className="glass-card flex justify-around items-center py-4 px-6 shadow-neon">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className="relative group">
              <div className={`flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-400 group-hover:text-white"}`}>
                <item.icon size={24} fill={isActive ? "currentColor" : "none"} />
                <span className="text-xs font-medium">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
