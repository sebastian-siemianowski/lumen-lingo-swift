import React from "react";
import { motion } from "framer-motion";

export default function StatsCard({ title, value, icon: Icon, gradient }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-white/70 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}