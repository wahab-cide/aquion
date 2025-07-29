"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function HydropanelFeatures() {
  return (
    <div
      id="technology"
      className="w-full mx-auto py-16 px-4 md:px-8 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="text-balance relative z-20 mx-auto mb-6 max-w-5xl text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Innovation</span>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
        <h2
          className={cn(
            "inline-block text-4xl md:text-6xl font-bold mb-2",
            "bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600",
            "bg-clip-text text-transparent"
          )}
        >
          Revolutionary Water Technology
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <p className="max-w-3xl text-lg md:text-xl text-center mx-auto mt-6 text-gray-700 leading-relaxed">
        Our innovative hydropanel system combines <span className="text-blue-600 font-semibold">radiative cooling</span> and <span className="text-orange-500 font-semibold">solar regeneration</span> 
        to harvest clean drinking water from atmospheric humidity, requiring <span className="text-green-600 font-semibold">zero grid power</span>.
      </p>
      
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="grid cols-1 lg:grid-cols-3 gap-10">
        <FeatureCard 
          title="Night Cycle: Radiative Cooling"
          description="Advanced IR-emissive coating cools the panel 5°C below ambient temperature, causing atmospheric moisture to condense as pure water droplets."
          icon={<MoonIcon />}
          gradient="from-indigo-600 to-blue-700"
          accentColor="indigo"
        />
        
        <FeatureCard 
          title="Day Cycle: Solar Regeneration"
          description="Solar heating drives moisture from desiccant bricks at 70°C. A small fan circulates vapor to the cooled surface for condensation."
          icon={<SunIcon />}
          gradient="from-amber-400 to-orange-600"
          accentColor="orange"
        />
        
        <FeatureCard 
          title="Smart Collection System"
          description="V-groove channels guide condensed water to a central collection point. Food-grade pump lifts water to storage with mineral conditioning."
          icon={<WaterIcon />}
          gradient="from-cyan-400 to-teal-600"
          accentColor="teal"
        />
        </div>
      </div>

      <div className="mt-24 max-w-7xl mx-auto">
        <div className="grid cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Performance</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Performance Metrics
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">Daily Water Output</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">15-20L</div>
                    <p className="text-sm text-gray-600">Per 1m² panel in optimal conditions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-yellow-600 font-semibold uppercase tracking-wide mb-1">Power Requirement</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">10W</div>
                    <p className="text-sm text-gray-600">Small PV panel for fan and pump only</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">Unit Cost Target</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">$130</div>
                    <p className="text-sm text-gray-600">90% locally-sourced materials</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide mb-1">Operational Lifetime</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">5+ years</div>
                    <p className="text-sm text-gray-600">With minimal maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
                
                {/* Hydropanel Diagram */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <div className="w-3/4 h-2/3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl border-4 border-blue-300 relative mb-4 shadow-lg">
                    {/* Panel Surface */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-200">
                      {/* Dew droplets */}
                      <div className="absolute top-3 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
                      <div className="absolute top-6 right-5 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                      <div className="absolute bottom-8 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-50"></div>
                      
                      {/* V-grooves indication */}
                      <div className="absolute inset-x-4 bottom-3 h-0.5 bg-blue-300 rounded opacity-70"></div>
                      <div className="absolute inset-x-6 bottom-5 h-0.5 bg-blue-300 rounded opacity-50"></div>
                    </div>
                    
                    {/* Solar indicator */}
                    <div className="absolute -top-8 right-4 w-6 h-6 text-yellow-500">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93M12 8A4 4 0 1 0 12 16A4 4 0 0 0 12 8Z"/>
                      </svg>
                    </div>
                    
                    {/* Moon indicator */}
                    <div className="absolute -top-8 left-4 w-5 h-5 text-indigo-500">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Collection system */}
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-6 h-3 bg-blue-200 rounded-sm"></div>
                    <span>Collection Tank</span>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Aquion Hydropanel</h4>
                    <p className="text-xs text-gray-600">Atmospheric Water Generator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Community First</span>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">African Communities</span>
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Designed with sustainability, accessibility, and local empowerment at its core
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ y: -3 }}
            className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Local Manufacturing</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Designed for production using materials and skills available in-country, creating jobs and reducing transportation costs while building local expertise.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Open Source Design</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  All construction plans, CAD files, and technical documentation freely available under CC BY-SA license for global replication and community adaptation.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Community Owned</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Empowering women-run cooperatives to manage water infrastructure, providing technical training and creating sustainable local businesses.
                </p>
              </div>
            </div>
          </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  gradient,
  accentColor 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
}) => {
  const accentColors = {
    indigo: "border-indigo-200 shadow-indigo-100/50",
    orange: "border-orange-200 shadow-orange-100/50",
    teal: "border-teal-200 shadow-teal-100/50"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className={cn(
        "relative bg-white rounded-3xl p-8 shadow-xl border-2 overflow-hidden group cursor-pointer transition-all duration-300",
        accentColors[accentColor as keyof typeof accentColors] || "border-gray-200"
      )}
    >
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br transition-opacity duration-500",
        gradient
      )} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
      <div className="relative z-10">
        <div className={cn(
          "w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg",
          gradient
        )}>
          <div className="w-8 h-8 text-white">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">{description}</p>
      </div>
    </motion.div>
  );
};

// Icon components
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-blue-600"
    />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" className="text-orange-500"/>
    <path d="M12 1v6m0 6v6m-9-9h6m6 0h6m-3.5-6.5L12 7m0 5l4.5 4.5m-9 0L12 12m0-5L7.5 2.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      className="text-orange-500"
    />
  </svg>
);

const WaterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 5 10 5 14a7 7 0 0 0 14 0c0-4-7-12-7-12z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-blue-500"
    />
  </svg>
);

