"use client";

import React from "react";
import {
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Bot,
  Layers,
  Database,
  Search,
  CheckCircle2,
  FileText,
  Package,
  ShieldCheck,
  Send,
} from "lucide-react";

interface ProjectMockupProps {
  type: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case "dashboard":
      return (
        <div className="w-full h-full bg-[#051E3B] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Top mock header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-cyan-tech" />
              <span className="text-[11px] font-bold text-gray-200">Revenue Analytics Hub</span>
            </div>
            <span className="text-[9px] bg-green-brand/20 text-green-brand px-1.5 py-0.5 rounded font-mono">
              +24.8% YoY
            </span>
          </div>

          {/* Mini chart visual */}
          <div className="my-2 bg-navy-dark/90 p-2.5 rounded border border-white/10">
            <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1.5">
              <span>Gross Volume</span>
              <span className="text-white font-bold font-mono">₹48.2L</span>
            </div>
            <div className="flex items-end gap-1.5 h-14 pt-2">
              <div className="w-1/6 bg-cyan-tech/30 hover:bg-cyan-tech h-[40%] rounded-t transition-all" />
              <div className="w-1/6 bg-cyan-tech/40 hover:bg-cyan-tech h-[60%] rounded-t transition-all" />
              <div className="w-1/6 bg-cyan-tech/50 hover:bg-cyan-tech h-[50%] rounded-t transition-all" />
              <div className="w-1/6 bg-cyan-tech/70 hover:bg-cyan-tech h-[80%] rounded-t transition-all" />
              <div className="w-1/6 bg-green-brand/80 hover:bg-green-brand h-[95%] rounded-t transition-all" />
              <div className="w-1/6 bg-green-brand h-[100%] rounded-t transition-all" />
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-white/5 p-1.5 rounded border border-white/5 flex justify-between">
              <span className="text-gray-400">Branches</span>
              <span className="text-white font-mono font-bold">12 Active</span>
            </div>
            <div className="bg-white/5 p-1.5 rounded border border-white/5 flex justify-between">
              <span className="text-gray-400">Sync Rate</span>
              <span className="text-green-brand font-mono font-bold">99.9%</span>
            </div>
          </div>
        </div>
      );

    case "ecommerce":
      return (
        <div className="w-full h-full bg-[#072448] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Header search bar */}
          <div className="flex items-center gap-2 bg-navy-dark/90 p-1.5 rounded border border-white/10 text-gray-300 text-[10px]">
            <Search className="w-3.5 h-3.5 text-green-brand" />
            <span className="text-gray-400">Search 2,400+ Enterprise SKUs...</span>
          </div>

          {/* Product grid mockup */}
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-navy-dark/80 p-2 rounded border border-white/10">
              <div className="w-full h-8 bg-white/5 rounded flex items-center justify-center mb-1.5">
                <ShoppingCart className="w-4 h-4 text-green-brand" />
              </div>
              <div className="text-[10px] font-bold text-white truncate">Industrial Sensors</div>
              <div className="text-[9px] text-green-brand font-mono font-bold">₹12,499</div>
            </div>

            <div className="bg-navy-dark/80 p-2 rounded border border-white/10">
              <div className="w-full h-8 bg-white/5 rounded flex items-center justify-center mb-1.5">
                <Package className="w-4 h-4 text-cyan-tech" />
              </div>
              <div className="text-[10px] font-bold text-white truncate">Control Terminal</div>
              <div className="text-[9px] text-cyan-tech font-mono font-bold">₹28,800</div>
            </div>
          </div>

          {/* Mini checkout banner */}
          <div className="bg-green-brand/20 border border-green-brand/30 p-1.5 rounded flex items-center justify-between text-[10px]">
            <span className="text-white font-medium">⚡ Instant Checkout</span>
            <span className="text-green-brand font-bold text-[9px]">0.9s Latency</span>
          </div>
        </div>
      );

    case "ai-assistant":
      return (
        <div className="w-full h-full bg-[#041D3A] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Assistant header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-cyan-tech/20 flex items-center justify-center text-cyan-tech">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold text-white">Nexify AI Copilot</span>
            </div>
            <span className="text-[9px] text-cyan-tech font-mono">Status: Online</span>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-2 my-2 text-[10px]">
            <div className="bg-white/10 p-2 rounded-r-lg rounded-tl-lg max-w-[85%] text-gray-200">
              How do I reconcile invoice #NX-8821 with GST portal?
            </div>
            <div className="bg-cyan-tech/20 border border-cyan-tech/30 p-2 rounded-l-lg rounded-tr-lg max-w-[90%] ml-auto text-white">
              ✨ Invoice verified. Matched with e-way bill. 100% compliant.
            </div>
          </div>

          {/* Input field mockup */}
          <div className="flex items-center justify-between bg-navy-dark/90 p-1.5 rounded border border-white/10 text-[9px] text-gray-400">
            <span>Type a business query...</span>
            <Send className="w-3 h-3 text-cyan-tech" />
          </div>
        </div>
      );

    case "crm-erp":
      return (
        <div className="w-full h-full bg-[#062244] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Top header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-green-brand" />
              <span className="text-[11px] font-bold text-white">ERP Lead Pipeline</span>
            </div>
            <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">
              Q3 Deals
            </span>
          </div>

          {/* Pipeline Kanban columns */}
          <div className="grid grid-cols-3 gap-1.5 my-2 text-[9px]">
            <div className="bg-navy-dark/80 p-1.5 rounded border border-white/10">
              <span className="text-gray-400 block mb-1">Prospects (4)</span>
              <div className="bg-white/5 p-1 rounded font-mono text-white text-[8px] truncate">
                Apex Corp
              </div>
            </div>
            <div className="bg-navy-dark/80 p-1.5 rounded border border-white/10">
              <span className="text-cyan-tech block mb-1">Proposal (2)</span>
              <div className="bg-cyan-tech/10 p-1 rounded font-mono text-cyan-tech text-[8px] truncate">
                ₹8.5L Deal
              </div>
            </div>
            <div className="bg-navy-dark/80 p-1.5 rounded border border-white/10">
              <span className="text-green-brand block mb-1">Won (6)</span>
              <div className="bg-green-brand/10 p-1 rounded font-mono text-green-brand text-[8px] truncate">
                Signed ✔
              </div>
            </div>
          </div>

          {/* Quick status bar */}
          <div className="bg-white/5 p-1.5 rounded flex items-center justify-between text-[9px] text-gray-300">
            <span>GST Billing Engine</span>
            <span className="text-green-brand font-mono font-bold">Auto-Generated</span>
          </div>
        </div>
      );

    case "corporate":
      return (
        <div className="w-full h-full bg-[#051C38] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Corporate browser chrome */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
              <span className="w-2 h-2 rounded-full bg-green-400/80" />
            </div>
            <span className="text-[9px] text-gray-400 font-mono">https://enterprise.portal</span>
          </div>

          {/* Corporate Hero wireframe */}
          <div className="my-2 p-2 bg-navy-dark/80 rounded border border-white/10">
            <div className="w-16 h-1.5 bg-green-brand rounded mb-1.5" />
            <div className="w-28 h-2.5 bg-white rounded mb-1" />
            <div className="w-36 h-1.5 bg-gray-400 rounded mb-2" />
            <div className="w-12 h-3.5 bg-green-brand rounded text-[7px] text-white flex items-center justify-center font-bold">
              Explore
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-between text-[9px] text-gray-300 bg-white/5 p-1 rounded">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-tech" />
              SOC2 Ready
            </span>
            <span className="text-green-brand font-mono">100 Lighthouse</span>
          </div>
        </div>
      );

    case "inventory":
      return (
        <div className="w-full h-full bg-[#072242] p-4 flex flex-col justify-between text-white font-sans select-none">
          {/* Top header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <Database className="w-4 h-4 text-cyan-tech" />
              <span className="text-[11px] font-bold text-white">Central Warehouse Hub</span>
            </div>
            <span className="text-[9px] text-green-brand font-mono">3 Warehouses</span>
          </div>

          {/* Stock inventory rows */}
          <div className="space-y-1.5 my-2 text-[9px]">
            <div className="bg-navy-dark/90 p-1.5 rounded border border-white/10 flex items-center justify-between">
              <span className="text-gray-300">SKU-9901 PCB Module</span>
              <span className="text-green-brand font-mono font-bold">1,420 in stock</span>
            </div>
            <div className="bg-navy-dark/90 p-1.5 rounded border border-white/10 flex items-center justify-between">
              <span className="text-gray-300">SKU-4402 Sensor Unit</span>
              <span className="text-cyan-tech font-mono font-bold">890 in stock</span>
            </div>
          </div>

          {/* Trigger alert */}
          <div className="bg-white/5 p-1.5 rounded flex items-center justify-between text-[9px] text-gray-300">
            <span className="text-gray-400">Auto Reorder Threshold</span>
            <span className="text-green-brand font-bold">Configured</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#06264A] p-4 flex items-center justify-center text-white">
          <FileText className="w-8 h-8 text-green-brand" />
        </div>
      );
  }
};
