"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CONSTRUCTION_SPARKS as SPARKS } from "@/lib/construction-sparks";

const BOLTS = ["⚡", "🔧", "⚙️", "🔨", "🪛", "🔩"];

export default function NotFound() {
  const [tick, setTick] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [helmetBlink, setHelmetBlink] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitch = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 2800 + Math.random() * 1000);
    return () => clearInterval(glitch);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => {
      setHelmetBlink(true);
      setTimeout(() => setHelmetBlink(false), 120);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blink);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 20);
    setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 10);
  };

  const scanlineOffset = (tick * 2) % 100;
  const workerBob = Math.sin(tick * 0.15) * 4;
  const armSwing = Math.sin(tick * 0.3) * 12;
  const hammerSwing = Math.sin(tick * 0.3) * 25 - 15;
  const coneFloat = Math.sin(tick * 0.08) * 3;
  const lightBlink = tick % 12 < 5;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative flex flex-col items-center justify-center"
      style={{ fontFamily: "'Courier New', monospace", cursor: "crosshair" }}
    >

      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          )`,
        }}
      />

      {/* Moving scanline */}
      <div
        className="pointer-events-none fixed left-0 right-0 h-32 z-40"
        style={{
          top: `${scanlineOffset}%`,
          background: "linear-gradient(transparent, rgba(17,215,250,0.03) 50%, transparent)",
          transition: "none",
        }}
      />

      {/* Animated grid background */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,215,250,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,215,250,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px)`,
          transition: "transform 0.1s ease",
        }}
      />

      {/* Corner warning stripes */}
      {[
        "top-0 left-0",
        "top-0 right-0 rotate-90",
        "bottom-0 left-0 -rotate-90",
        "bottom-0 right-0 rotate-180",
      ].map((pos, i) => (
        <div
          key={i}
          className={`fixed w-40 h-40 pointer-events-none z-10 ${pos}`}
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #f59e0b,
              #f59e0b 10px,
              #101010 10px,
              #101010 20px
            )`,
            opacity: 0.6,
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      ))}

      {/* Floating sparks */}
      {SPARKS.map((s) => (
        <div
          key={s.id}
          className="fixed pointer-events-none z-20"
          style={{
            left: `${s.left}%`,
            bottom: "-10px",
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: tick % 3 === 0 ? "#11d7fa" : tick % 3 === 1 ? "#f59e0b" : "#ff531a",
            boxShadow: `0 0 ${s.size * 2}px currentColor`,
            animation: `floatUp ${s.duration}s ${s.delay}s infinite linear`,
          }}
        />
      ))}

      {/* Main content */}
      <div
        className="relative z-30 flex flex-col items-center text-center px-4"
        style={{ transform: `perspective(800px) rotateX(${mouseY * 0.3}deg) rotateY(${mouseX * 0.3}deg)` }}
      >

        {/* WARNING TAPE top */}
        <div className="w-screen mb-8 overflow-hidden flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-4 py-2 font-black text-sm tracking-widest whitespace-nowrap"
              style={{
                background: i % 2 === 0 ? "#f59e0b" : "#101010",
                color: i % 2 === 0 ? "#101010" : "#f59e0b",
                transform: `skewX(-8deg)`,
              }}
            >
              ⚠ UNDER CONSTRUCTION ⚠
            </div>
          ))}
        </div>

        {/* 404 big number */}
        <div className="relative mb-2">
          <h1
            className="font-black select-none"
            style={{
              fontSize: "clamp(120px, 22vw, 280px)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              color: "transparent",
              WebkitTextStroke: "2px rgba(17,215,250,0.4)",
              textShadow: glitchActive
                ? "6px 0 #ff531a, -6px 0 #11d7fa, 0 0 40px rgba(17,215,250,0.2)"
                : "0 0 40px rgba(17,215,250,0.15)",
              transform: glitchActive ? `translate(${Math.sin(tick * 4.2) * 3}px, 0)` : "none",
            }}
          >
            404
          </h1>

          {/* Glitch clone */}
          {glitchActive && (
            <h1
              className="font-black select-none absolute inset-0 pointer-events-none"
              style={{
                fontSize: "clamp(120px, 22vw, 280px)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: "transparent",
                WebkitTextStroke: "2px #ff531a",
                opacity: 0.4,
                clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
                transform: "translate(8px, 0)",
              }}
            >
              404
            </h1>
          )}

          {/* Worker SVG — animated */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "10%",
              right: "-18%",
              transform: `translateY(${workerBob}px)`,
              transition: "none",
            }}
          >
            <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
              {/* Hard hat */}
              <ellipse cx="60" cy="38" rx="28" ry="8" fill="#f59e0b" />
              <path d="M32 38 Q60 18 88 38" fill="#f59e0b" />
              {/* Hat brim */}
              <rect x="26" y="36" width="68" height="6" rx="3" fill="#d97706" />
              {/* Hat light */}
              <circle cx="60" cy="30" r="5" fill={lightBlink ? "#11d7fa" : "#11d7fa"} />
              {lightBlink && (
                <circle cx="60" cy="30" r="10" fill="rgba(17,215,250,0.2)" />
              )}
              {/* Head */}
              <circle cx="60" cy="55" r="16" fill="#fcd9b0" />
              {/* Eyes */}
              <ellipse cx="54" cy="53" rx="3" ry={helmetBlink ? 0.5 : 3} fill="#1e293b" />
              <ellipse cx="66" cy="53" rx="3" ry={helmetBlink ? 0.5 : 3} fill="#1e293b" />
              {/* Smile */}
              <path d="M54 62 Q60 67 66 62" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Body */}
              <rect x="42" y="70" width="36" height="44" rx="4" fill="#ff531a" />
              {/* Vest stripes */}
              <rect x="57" y="70" width="6" height="44" fill="#f59e0b" opacity="0.6" />
              <rect x="46" y="80" width="28" height="4" rx="2" fill="#f59e0b" opacity="0.6" />
              {/* Left arm (static) */}
              <rect
                x="20"
                y="72"
                width="22"
                height="10"
                rx="5"
                fill="#fcd9b0"
                style={{ transformOrigin: "42px 77px", transform: `rotate(${-armSwing}deg)` }}
              />
              {/* Right arm + hammer */}
              <g style={{ transformOrigin: "78px 77px", transform: `rotate(${armSwing}deg)` }}>
                <rect x="78" y="72" width="22" height="10" rx="5" fill="#fcd9b0" />
                {/* Hammer */}
                <g style={{ transformOrigin: "100px 77px", transform: `rotate(${hammerSwing}deg)` }}>
                  <rect x="97" y="60" width="6" height="28" rx="2" fill="#78716c" />
                  <rect x="90" y="55" width="20" height="12" rx="3" fill="#44403c" />
                </g>
              </g>
              {/* Legs */}
              <rect x="44" y="112" width="14" height="30" rx="4" fill="#1e3a8a" />
              <rect x="62" y="112" width="14" height="30" rx="4" fill="#1e3a8a" />
              {/* Boots */}
              <rect x="40" y="136" width="20" height="12" rx="4" fill="#292524" />
              <rect x="60" y="136" width="20" height="12" rx="4" fill="#292524" />
            </svg>
          </div>
        </div>

        {/* Traffic cone row */}
        <div className="flex items-end gap-6 mb-8 mt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ transform: `translateY(${coneFloat * (i % 2 === 0 ? 1 : -1)}px)` }}
            >
              <svg width="36" height="52" viewBox="0 0 36 52">
                <polygon points="18,2 34,48 2,48" fill="#ff531a" />
                <rect x="4" y="30" width="28" height="5" rx="2" fill="white" opacity="0.7" />
                <rect x="8" y="20" width="20" height="4" rx="2" fill="white" opacity="0.7" />
                <rect x="0" y="46" width="36" height="6" rx="2" fill="#292524" />
              </svg>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mb-3">
          <span
            className="inline-block px-4 py-1 rounded-lg text-sm font-bold tracking-widest mb-4"
            style={{ background: "#11d7fa", color: "#0a0a0a" }}
          >
            ARTHZONE TECHNOLOGIES
          </span>
        </div>

        <h2
          className="font-black mb-3 uppercase tracking-tight"
          style={{
            fontSize: "clamp(24px, 5vw, 48px)",
            textShadow: "0 0 30px rgba(17,215,250,0.3)",
          }}
        >
          Page Under Construction
        </h2>

        <p className="text-gray-400 max-w-md mb-2 text-base leading-relaxed">
          Our crew is hard at work building something awesome here.
          This page doesn't exist yet — but it will soon.
        </p>

        <p
          className="mb-10 text-sm font-mono"
          style={{ color: "#11d7fa", opacity: 0.7 }}
        >
          {`> ERROR_CODE: 404 | PAGE_NOT_FOUND`}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl font-bold text-base transition-all duration-300"
            style={{
              background: "#4361ee",
              border: "2px solid #4361ee",
              color: "white",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.color = "#4361ee";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#4361ee";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl font-bold text-base transition-all duration-300"
            style={{
              background: "transparent",
              border: "2px solid #ff531a",
              color: "#ff531a",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ff531a";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#ff531a";
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* WARNING TAPE bottom */}
        <div className="w-screen overflow-hidden flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-4 py-2 font-black text-sm tracking-widest whitespace-nowrap"
              style={{
                background: i % 2 === 0 ? "#101010" : "#f59e0b",
                color: i % 2 === 0 ? "#f59e0b" : "#101010",
                transform: `skewX(-8deg)`,
              }}
            >
              ⚠ DO NOT ENTER ⚠
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
