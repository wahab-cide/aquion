"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export function PartnerOrganizations() {
  const partners = [
    {
      name: "WHO AFRO",
      description: "World Health Organization Africa",
      category: "Health",
    },
    {
      name: "WaterAid",
      description: "International WASH NGO",
      category: "Water",
    },
    {
      name: "KNUST",
      description: "Kwame Nkrumah University",
      category: "Research",
    },
    {
      name: "Ghana Water",
      description: "Ghana Water Company Limited",
      category: "Government",
    },
  ];

  return (
    <div id="partners" className="w-full mx-auto py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Partnership</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          <h2
            className={cn(
              "inline-block text-4xl md:text-6xl font-bold mb-4",
              "bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600",
              "bg-clip-text text-transparent"
            )}
          >
            Collaborative Impact
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Working with leading organizations to bring <span className="text-blue-600 font-semibold">sustainable water solutions</span> to communities across Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, idx) => (
            <div
              key={partner.name + idx}
              className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
                    {partner.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-100 via-blue-50/30 to-gray-100 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're actively seeking partnerships with organizations committed to sustainable water access
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-sm text-gray-600">Active Partnerships</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-sm text-gray-600">Countries Engaged</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
                <p className="text-sm text-gray-600">Lives to Impact</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Opportunities</h4>
                <p className="text-gray-600 mb-6">
                  Whether you're a research institution, NGO, or government agency - let's work together to expand access to clean water
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                    Partner With Us
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border-2 border-blue-500 hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}