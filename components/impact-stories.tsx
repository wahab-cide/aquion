"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function ImpactStories() {
  const stories = [
    {
      location: "Cape Coast, Ghana",
      impact: "15 households",
      story: "Our pilot hydropanel has been providing consistent clean water for three months, eliminating the need for daily water collection trips that previously took 2-3 hours.",
      metric: "45 hours/week saved",
      category: "Time Savings"
    },
    {
      location: "Ho, Ghana",
      impact: "School of 200 students",
      story: "Installation at a rural primary school ensures students have access to safe drinking water throughout the day, improving attendance and reducing waterborne illness.",
      metric: "30% reduction in absences",
      category: "Health Impact"
    },
    {
      location: "Volta Region",
      impact: "Women's cooperative",
      story: "Local women trained in hydropanel maintenance have started a water kiosk business, creating sustainable income while serving their community.",
      metric: "5 jobs created",
      category: "Economic Growth"
    }
  ];

  return (
    <div id="impact" className="w-full mx-auto py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-green-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Community</span>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"></div>
          </div>
          <h2 className={cn(
            "inline-block text-4xl md:text-6xl font-bold mb-4",
            "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600",
            "bg-clip-text text-transparent"
          )}>
            Real Impact, Real Communities
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Every hydropanel represents <span className="text-green-600 font-semibold">transformed lives</span>. Stories from our pilot communities in Ghana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">
                    {story.category}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {story.location}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {story.story}
                  </p>
                  
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Impact</span>
                      <span className="text-sm font-semibold text-gray-900">{story.impact}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Key Metric</span>
                      <span className="text-sm font-bold text-green-600">{story.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-100 via-green-50/30 to-gray-100 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Scaling Impact Across <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Africa</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our vision extends beyond pilot projects - transforming lives one drop at a time
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">1,000+</div>
                    <p className="text-sm text-gray-600">Target households by 2026</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
                    <p className="text-sm text-gray-600">Lives to be impacted</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Community Feedback</h4>
                <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                  &quot;Before the hydropanel, my daughters spent hours fetching water every morning. 
                  Now they go to school on time and have more time to study. This technology is 
                  changing our future.&quot;
                </blockquote>
                <p className="text-sm text-gray-600">
                  — Akosua M., Cape Coast resident
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

