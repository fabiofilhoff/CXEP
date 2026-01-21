"use client";

import { useEffect, useRef } from "react";
import { Lock } from "lucide-react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Partículas lentas para fundo
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = `rgba(168, 85, 247, ${Math.random() * 0.4 + 0.1})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas de partículas lentas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-40"
      />

      {/* Gradiente de fundo roxo profundo e azul escuro */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/60 via-black to-blue-950/60 pointer-events-none" />

      {/* Grid futurista sutil */}
      <div 
        className="fixed inset-0 opacity-[0.08] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }} 
      />

      {/* Personagem LUX no fundo - extremamente discreta */}
      <div 
        className="fixed inset-0 opacity-[0.08] blur-sm pointer-events-none"
        style={{
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b399e844-5a46-47b8-ba84-6238f5e0b195.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) brightness(0.4)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16 sm:pt-20">
        <div className="max-w-3xl w-full mx-auto text-center space-y-12">
          {/* Indicador de sistema ativo - MOVIDO PARA O TOPO */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-pulse" />
            <span className="text-[10px] text-purple-500/50 uppercase tracking-[0.4em] font-mono">
              SISTEMA ATIVO
            </span>
            <div className="w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Logo/Título do evento */}
          <div className="space-y-2 mb-16">
            <h1 className="text-sm sm:text-base uppercase tracking-[0.3em] text-purple-400/60 font-mono">
              Conecx Experience
            </h1>
            <div className="text-xs text-purple-500/40 uppercase tracking-[0.4em] font-mono">
              Protocol 001
            </div>
          </div>

          {/* Ícone de cadeado minimalista - ANIMADO COM PISCAR ROXO */}
          <div className="flex justify-center">
            <div className="relative animate-lock-glow">
              {/* Glow sutil animado */}
              <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full animate-lock-pulse" />
              
              {/* Container do ícone */}
              <div className="relative p-6 rounded-full border border-purple-500/40 animate-lock-border">
                <Lock 
                  className="w-10 h-10 text-purple-400 animate-lock-icon" 
                  strokeWidth={1.5} 
                />
              </div>
            </div>
          </div>
          
          {/* Texto principal em destaque */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              <span className="block text-white">
                Nem todo acesso
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                é permitido.
              </span>
            </h2>
            
            {/* Subtexto */}
            <div className="max-w-xl mx-auto space-y-2">
              <p className="text-lg sm:text-xl text-gray-400">
                O sistema foi ativado.
              </p>
              <p className="text-base sm:text-lg text-gray-500">
                O acesso será liberado por fases.
              </p>
            </div>
          </div>
          
          {/* Botão central BLOQUEADO - SUBIDO e com efeito pulsante + cadeado */}
          <div className="pt-4 space-y-4">
            <div
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent backdrop-blur-sm rounded-full font-bold uppercase tracking-[0.2em] text-sm cursor-not-allowed overflow-hidden border border-white/30 animate-button-pulse"
            >
              {/* Cadeado */}
              <Lock className="w-4 h-4 text-white/70" strokeWidth={2} />
              
              {/* Texto */}
              <span className="relative z-10 text-white/70">
                ACESSO BLOQUEADO
              </span>
            </div>
            
            {/* Aviso discreto - SUBIDO */}
            <p className="text-xs text-gray-600 uppercase tracking-[0.3em] font-mono">
              Estar na lista não garante entrada.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes lockPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes lockIcon {
          0%, 100% {
            opacity: 0.7;
            filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.8));
          }
        }

        @keyframes lockBorder {
          0%, 100% {
            border-color: rgba(168, 85, 247, 0.4);
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
          }
          50% {
            border-color: rgba(168, 85, 247, 0.7);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-lock-pulse {
          animation: lockPulse 3s ease-in-out infinite;
        }

        .animate-lock-icon {
          animation: lockIcon 3s ease-in-out infinite;
        }

        .animate-lock-border {
          animation: lockBorder 3s ease-in-out infinite;
        }

        .animate-button-pulse {
          animation: buttonPulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
