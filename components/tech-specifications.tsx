"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function TechSpecifications() {
  const specs = {
    physical: [
      { label: "Panel Dimensions", value: "1m × 1m × 0.15m" },
      { label: "Weight (dry)", value: "25 kg" },
      { label: "Tilt Angle", value: "30-35°" },
      { label: "Material", value: "Aluminum 3003" },
    ],
    performance: [
      { label: "Daily Yield", value: "15-20 L" },
      { label: "Operating Humidity", value: ">40% RH" },
      { label: "Power Consumption", value: "10W peak" },
      { label: "Water Quality", value: "WHO Standards" },
    ],
    components: [
      { label: "Condenser Surface", value: "TiO₂ IR coating" },
      { label: "Desiccant", value: "CaCl₂-clay composite" },
      { label: "Solar Panel", value: "10W monocrystalline" },
      { label: "Battery", value: "12V 2Ah LiFePO₄" },
    ],
    maintenance: [
      { label: "Surface Cleaning", value: "Monthly" },
      { label: "Desiccant Replace", value: "6 months" },
      { label: "Filter Change", value: "3 months" },
      { label: "Expected Lifetime", value: "5+ years" },
    ],
  };

  return (
    <div id="specifications" className="w-full mx-auto py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full"></div>
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Engineering</span>
            <div className="w-12 h-1 bg-gradient-to-r from-gray-500 to-slate-400 rounded-full"></div>
          </div>
          <h2 className={cn(
            "inline-block text-4xl md:text-6xl font-bold mb-4",
            "bg-gradient-to-r from-slate-700 via-gray-800 to-slate-700",
            "bg-clip-text text-transparent"
          )}>
            Technical Specifications
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Engineered for <span className="text-slate-600 font-semibold">reliability</span> and <span className="text-slate-600 font-semibold">efficiency</span> in challenging environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <SpecCard title="Physical Specifications" specs={specs.physical} category="structure" />
          <SpecCard title="Performance Metrics" specs={specs.performance} category="performance" />
          <SpecCard title="Key Components" specs={specs.components} category="components" />
          <SpecCard title="Maintenance Schedule" specs={specs.maintenance} category="maintenance" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-100 rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Design <span className="bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">Principles</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Core engineering philosophy driving every design decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PrincipleCard
                title="Simplicity"
                description="Minimal moving parts and straightforward assembly ensure reliability and ease of maintenance in remote locations"
              />
              <PrincipleCard
                title="Sustainability"
                description="90% locally-sourced materials and open-source design enable community-based production and long-term viability"
              />
              <PrincipleCard
                title="Scalability"
                description="Modular design allows multiple units to work together, scaling from household to community-level water production"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Open Technical Documentation</h4>
            <p className="text-gray-600">
              Complete technical documentation, CAD files, and construction guides available under Creative Commons license for global replication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpecCard = ({ 
  title, 
  specs, 
  category 
}: { 
  title: string; 
  specs: Array<{label: string; value: string}>; 
  category: string;
}) => {
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'structure': return 'from-blue-500 to-cyan-500';
      case 'performance': return 'from-green-500 to-emerald-500';
      case 'components': return 'from-purple-500 to-indigo-500';
      case 'maintenance': return 'from-orange-500 to-amber-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-gray-100 transition-all duration-300"
    >
      <div className="mb-6">
        <div className={`w-12 h-1 bg-gradient-to-r ${getCategoryColor(category)} rounded-full mb-3`}></div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <span className="text-gray-600">{spec.label}</span>
            <span className="font-semibold text-gray-900">{spec.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PrincipleCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="text-left bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

