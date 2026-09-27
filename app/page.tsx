"use client";

import { useState } from "react";
import { Tldraw, Editor } from "tldraw";
import { Code2, Play, Sparkles, Download, Flame, Monitor, RefreshCw, Hexagon } from "lucide-react";

export default function Workspace() {
  const [tldrawEditor, setTldrawEditor] = useState<Editor | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>(`<!-- Your AI Generated Preview Will Render Live Here -->
<div class="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white rounded-2xl p-8 border-2 border-pink-500/30 text-center shadow-[0_0_50px_rgba(236,72,153,0.15)] animate-pulse">
  
  <!-- Core Logo Accent -->
  <div class="relative w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-slate-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.4)] overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 animate-spin opacity-80 mix-blend-screen" style="animation-duration: 6s;"></div>
    <svg xmlns="http://w3.org" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="relative text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14 4l-4 16"/></svg>
  </div>

  <h2 class="text-3xl font-black mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">PRISMCODE ENGINE WORKSPACE</h2>
  <p class="text-purple-200/70 max-w-md text-sm font-medium">Draw a structural UI interface mockup layout grid on the canvas panel workspace layout to compile dynamic production files.</p>
</div>`);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!tldrawEditor) return;
    setIsGenerating(true);
    
    const shapeIds = Array.from(tldrawEditor.getCurrentPageShapeIds());
    if (shapeIds.length === 0) {
      alert("Draw your epic visual concept mockup onto the layout engine board first!");
      setIsGenerating(false);
      return;
    }

    setTimeout(() => {
      setGeneratedCode(`<div class="p-8 max-w-md mx-auto bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl border-4 border-cyan-400 transform hover:scale-105 transition-all duration-300 text-white text-center">
  <span class="px-4 py-1 text-xs font-black tracking-widest bg-cyan-400 text-slate-950 rounded-full uppercase shadow-md shadow-cyan-400/50">LIVE COMPLIANCE</span>
  <h1 class="text-4xl font-extrabold mt-4 mb-2 tracking-tighter drop-shadow-md">Cyber UI Widget</h1>
  <p class="text-cyan-200 text-sm opacity-90 mb-6 font-medium">This responsive module layout template was created dynamically using OpenAI multimodal vision pipelines inside PrismCode.</p>
  <button class="w-full py-3.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transform active:scale-95 transition-all">LAUNCH SYSTEM</button>
</div>`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#05050c] text-zinc-50 select-none overflow-hidden font-sans">
      
      {/* Top Navigation Header */}
      <header className="flex items-center justify-between px-6 h-16 border-b-2 border-purple-500/20 bg-gradient-to-r from-[#0b0b22] via-[#120a2b] to-[#0b0b22] shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-10 relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-yellow-500" />
        
        {/* LOGO: Colorful Code Icon inside Glowing Animated Prism Box */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.4)] overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 animate-spin opacity-80 mix-blend-screen" style={{ animationDuration: '4s' }} />
            <Hexagon className="w-6 h-6 text-white relative fill-slate-950/40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" strokeWidth={2.5} />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tight text-white m-0 leading-none">
              PRISM<span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">CODE</span>
            </h1>
            <span className="text-[9px] font-black tracking-widest text-cyan-400 uppercase mt-1 opacity-90 font-mono">
              ⚡ SPECTRUM AI ENGINE
            </span>
          </div>
        </div>

        {/* Dynamic Trigger Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 active:scale-95 transition-all text-sm font-black tracking-wider uppercase rounded-xl text-white disabled:opacity-40 shadow-[0_0_25px_rgba(236,72,153,0.5)] cursor-pointer"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Compiling...
            </>
          ) : (
            <>
              <Flame className="w-4 h-4 animate-bounce text-yellow-300" />
              Generate Code Rocket 🚀
            </>
          )}
        </button>
      </header>

      {/* Main Workspace Layout */}
      <main className="flex flex-1 overflow-hidden p-3 gap-3 bg-[#020207]">
        
        {/* Left Side Drawing Canvas */}
        <section className="w-1/2 h-full rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl shadow-indigo-950/50 relative">
          <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-indigo-400/30 z-50 pointer-events-none shadow-md">
            Interactive Drawing Engine Grid
          </div>
          <Tldraw onMount={(editor) => setTldrawEditor(editor)} inferDarkMode={true} />
        </section>

        {/* Right Side Sandbox Display */}
        <section className="w-1/2 h-full flex flex-col bg-[#0b0b1e]/90 rounded-2xl border-2 border-pink-500/20 shadow-2xl overflow-hidden neon-glow-card">
          
          <div className="flex items-center justify-between px-4 h-14 border-b border-purple-500/10 bg-[#070714]/80">
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-purple-500/20">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === "preview" 
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg" 
                    : "text-purple-300/60 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Live Preview Frame
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === "code" 
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg" 
                    : "text-purple-300/60 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Raw Source Code
              </button>
            </div>

            <button className="p-2 bg-slate-950 hover:bg-purple-950/50 border border-purple-500/20 rounded-xl text-pink-400 hover:text-pink-300 transition-all cursor-pointer">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden p-4 bg-gradient-to-b from-[#080816] to-[#04040a]">
            {activeTab === "preview" ? (
              <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden border border-slate-300/50 shadow-inner">
                <iframe
                  title="Dynamic Sandbox Engine Layout Preview Window"
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link href="https://googleapis.com" rel="stylesheet">
                        <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
                      </head>
                      <body class="bg-slate-950 p-6 min-h-screen flex items-center justify-center">
                        \${generatedCode}
                      </body>
                    </html>
                  `}
                  className="w-full h-full border-none"
                />
              </div>
            ) : (
              <div className="w-full h-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <pre className="relative w-full h-full bg-slate-950/95 p-5 rounded-xl font-mono text-xs text-cyan-300 border border-purple-500/30 overflow-auto whitespace-pre-wrap selection:bg-pink-500 selection:text-white">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}