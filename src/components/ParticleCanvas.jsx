import { useEffect, useRef } from 'react';

/**
 * Controlled Neural Network Model Visualization.
 * Renders a structured 12-node neural network with pulsing data signals
 * contained within a dedicated product visualization card.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;

    // Structured neural node layers
    const nodes = [
      // Input Layer
      { x: 0.15, y: 0.25, layer: 0 },
      { x: 0.15, y: 0.50, layer: 0 },
      { x: 0.15, y: 0.75, layer: 0 },
      // Hidden Layer 1
      { x: 0.40, y: 0.20, layer: 1 },
      { x: 0.40, y: 0.50, layer: 1 },
      { x: 0.40, y: 0.80, layer: 1 },
      // Hidden Layer 2
      { x: 0.65, y: 0.30, layer: 2 },
      { x: 0.65, y: 0.70, layer: 2 },
      // Output Layer
      { x: 0.85, y: 0.40, layer: 3 },
      { x: 0.85, y: 0.60, layer: 3 },
    ];

    // Data pulses traveling along connections
    const pulses = [
      { from: 0, to: 3, progress: 0, speed: 0.008 },
      { from: 1, to: 4, progress: 0.3, speed: 0.006 },
      { from: 2, to: 5, progress: 0.6, speed: 0.009 },
      { from: 3, to: 6, progress: 0.2, speed: 0.007 },
      { from: 4, to: 7, progress: 0.7, speed: 0.008 },
      { from: 6, to: 8, progress: 0.4, speed: 0.010 },
      { from: 7, to: 9, progress: 0.1, speed: 0.006 },
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw Connection Lines
      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (n2.layer === n1.layer + 1) {
            ctx.beginPath();
            ctx.moveTo(n1.x * w, n1.y * h);
            ctx.lineTo(n2.x * w, n2.y * h);
            ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw Data Pulses
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];

        const px = n1.x * w + (n2.x * w - n1.x * w) * p.progress;
        const py = n1.y * h + (n2.y * h - n1.y * h) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((n) => {
        const nx = n.x * w;
        const ny = n.y * h;

        // Outer glow circle
        ctx.beginPath();
        ctx.arc(nx, ny, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#a78bfa';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="glass-panel p-6 border-violet-500/30 max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-violet-500/10 text-xs font-mono text-violet-300">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
          NEURAL ARCHITECTURE MODEL // DEEP LEARNING INFERENCE
        </span>
        <span className="text-cyan-400 font-bold">● ACTIVE PIPELINE</span>
      </div>

      <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-navy-900/80 border border-violet-500/15">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
