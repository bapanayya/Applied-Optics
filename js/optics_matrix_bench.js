/**
 * Applied-Optics-SVAGDC: Interactive ABCD Ray Matrix & Optical Bench Simulator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  function initMatrixBench(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    mount.innerHTML = `
      <div class="simulator-widget">
        <div class="simulator-header">
          <div class="simulator-title">
            <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--primary);"></i>
            Interactive ABCD Ray Matrix & Optical Bench Bench
          </div>
          <div class="simulator-tag">
            <i class="fa-solid fa-microchip"></i> Live Paraxial Ray Tracer
          </div>
        </div>

        <div class="simulator-canvas-box">
          <canvas id="matrix_canvas_${mountId}"></canvas>
        </div>

        <div class="simulator-controls-grid">
          <div class="control-item">
            <label>Focal Length Lens 1 (<i>f</i><sub>1</sub>): <span class="val" id="f1_val_${mountId}">+100 mm</span></label>
            <input type="range" id="f1_range_${mountId}" min="40" max="250" value="100" step="5">
          </div>
          <div class="control-item">
            <label>Focal Length Lens 2 (<i>f</i><sub>2</sub>): <span class="val" id="f2_val_${mountId}">+100 mm</span></label>
            <input type="range" id="f2_range_${mountId}" min="40" max="250" value="100" step="5">
          </div>
          <div class="control-item">
            <label>Inter-Lens Distance (<i>d</i>): <span class="val" id="d_val_${mountId}">60 mm</span></label>
            <input type="range" id="d_range_${mountId}" min="0" max="200" value="60" step="2">
          </div>
          <div class="control-item">
            <label>Ray Launch Height (<i>y</i><sub>0</sub>): <span class="val" id="y_val_${mountId}">25 mm</span></label>
            <input type="range" id="y_range_${mountId}" min="-40" max="40" value="25" step="1">
          </div>
        </div>

        <div class="simulator-readout">
          <div class="readout-pill"><span class="label">Matrix A:</span> <span class="data" id="mat_a_${mountId}">0.400</span></div>
          <div class="readout-pill"><span class="label">Matrix B:</span> <span class="data" id="mat_b_${mountId}">60.0 mm</span></div>
          <div class="readout-pill"><span class="label">Matrix C:</span> <span class="data" id="mat_c_${mountId}">-0.014 mm⁻¹</span></div>
          <div class="readout-pill"><span class="label">Matrix D:</span> <span class="data" id="mat_d_${mountId}">0.400</span></div>
          <div class="readout-pill"><span class="label">Equivalent Focal Length (<i>F</i>):</span> <span class="data" id="f_eq_${mountId}">+71.4 mm</span></div>
          <div class="readout-pill"><span class="label">Determinant (<i>AD</i> − <i>BC</i>):</span> <span class="data" id="det_${mountId}">1.000</span></div>
        </div>
      </div>
    `;

    const canvas = document.getElementById(`matrix_canvas_${mountId}`);
    const ctx = canvas.getContext('2d');
    const f1Slider = document.getElementById(`f1_range_${mountId}`);
    const f2Slider = document.getElementById(`f2_range_${mountId}`);
    const dSlider = document.getElementById(`d_range_${mountId}`);
    const ySlider = document.getElementById(`y_range_${mountId}`);

    const f1Disp = document.getElementById(`f1_val_${mountId}`);
    const f2Disp = document.getElementById(`f2_val_${mountId}`);
    const dDisp = document.getElementById(`d_val_${mountId}`);
    const yDisp = document.getElementById(`y_val_${mountId}`);

    const matA = document.getElementById(`mat_a_${mountId}`);
    const matB = document.getElementById(`mat_b_${mountId}`);
    const matC = document.getElementById(`mat_c_${mountId}`);
    const matD = document.getElementById(`mat_d_${mountId}`);
    const fEq = document.getElementById(`f_eq_${mountId}`);
    const detDisp = document.getElementById(`det_${mountId}`);

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 750;
      canvas.height = 280;
    }

    function update() {
      const f1 = parseFloat(f1Slider.value);
      const f2 = parseFloat(f2Slider.value);
      const d = parseFloat(dSlider.value);
      const y0 = parseFloat(ySlider.value);

      f1Disp.textContent = `+${f1} mm`;
      f2Disp.textContent = `+${f2} mm`;
      dDisp.textContent = `${d} mm`;
      yDisp.textContent = `${y0} mm`;

      // ABCD Matrix Computation:
      // M1 = [1, 0; -1/f1, 1]
      // T = [1, d; 0, 1]
      // M2 = [1, 0; -1/f2, 1]
      // M_sys = M2 * T * M1
      const A = 1 - (d / f1);
      const B = d;
      const C = -(1 / f1 + 1 / f2 - d / (f1 * f2));
      const D = 1 - (d / f2);
      const det = A * D - B * C;
      const F = Math.abs(C) > 1e-6 ? -1 / C : Infinity;

      matA.textContent = A.toFixed(3);
      matB.textContent = `${B.toFixed(1)} mm`;
      matC.textContent = `${C.toFixed(5)} mm⁻¹`;
      matD.textContent = D.toFixed(3);
      fEq.textContent = isFinite(F) ? `${F > 0 ? '+' : ''}${F.toFixed(1)} mm` : '∞ (Afocal)';
      detDisp.textContent = det.toFixed(3);

      draw(f1, f2, d, y0, A, B, C, D, F);
    }

    function draw(f1, f2, d, y0, A, B, C, D, F) {
      const w = canvas.width;
      const h = canvas.height;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Background grid
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 0.6;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Optical Axis
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 5]);
      ctx.beginPath();
      ctx.moveTo(10, cy);
      ctx.lineTo(w - 10, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Axis label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('Optical Axis', 20, cy - 10);

      // Scale factors: mm to pixels
      const scaleX = (w - 200) / 350;
      const l1_x = 160;
      const l2_x = l1_x + d * scaleX;

      // Draw Lens 1
      drawLens(ctx, l1_x, cy, 90, '#38bdf8', 'L₁');
      // Draw Lens 2
      drawLens(ctx, l2_x, cy, 90, '#818cf8', 'L₂');

      // Distance indicator d
      if (d > 5) {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(l1_x, cy + 95);
        ctx.lineTo(l2_x, cy + 95);
        ctx.stroke();
        // Arrow ticks
        ctx.beginPath();
        ctx.moveTo(l1_x, cy + 90); ctx.lineTo(l1_x, cy + 100);
        ctx.moveTo(l2_x, cy + 90); ctx.lineTo(l2_x, cy + 100);
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(`d = ${d} mm`, (l1_x + l2_x) / 2 - 25, cy + 112);
      }

      // Draw paraxial rays: Ray 1 (user defined y0), Ray 2 (opposite -y0), Ray 3 (0.5*y0)
      const rayHeights = [y0, y0 * 0.5, -y0 * 0.5, -y0];
      const rayColors = ['#f43f5e', '#38bdf8', '#38bdf8', '#f43f5e'];

      rayHeights.forEach((y_init, rIdx) => {
        if (Math.abs(y_init) < 0.5) return;
        const color = rayColors[rIdx];
        const ray_y_px = cy - y_init * 1.5;

        // Trace to Lens 1 (incident parallel)
        ctx.strokeStyle = color;
        ctx.lineWidth = rIdx === 0 ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.moveTo(20, ray_y_px);
        ctx.lineTo(l1_x, ray_y_px);
        ctx.stroke();

        // Arrowhead on incoming ray
        drawArrow(ctx, (20 + l1_x) / 2, ray_y_px, 0);

        // After Lens 1: alpha1 = -y0 / f1
        const alpha1 = -y_init / f1;
        const y_at_l2 = y_init + alpha1 * d;
        const ray_l2_px = cy - y_at_l2 * 1.5;

        ctx.beginPath();
        ctx.moveTo(l1_x, ray_y_px);
        ctx.lineTo(l2_x, ray_l2_px);
        ctx.stroke();

        // After Lens 2: alpha2 = alpha1 - y_at_l2 / f2
        const alpha2 = alpha1 - (y_at_l2 / f2);

        // Project ray to right side of bench
        const remaining_dist = (w - 20 - l2_x) / scaleX;
        const y_final = y_at_l2 + alpha2 * remaining_dist;
        const final_px_x = w - 20;
        const final_px_y = cy - y_final * 1.5;

        ctx.beginPath();
        ctx.moveTo(l2_x, ray_l2_px);
        ctx.lineTo(final_px_x, final_px_y);
        ctx.stroke();

        // Arrowhead on emergent ray
        drawArrow(ctx, (l2_x + final_px_x) / 2, (ray_l2_px + final_px_y) / 2, Math.atan2(final_px_y - ray_l2_px, final_px_x - l2_x));
      });

      // System focal point F mark
      if (isFinite(F) && F > 0) {
        // Distance of back focal point from L2: f_back = D / (-C) = D * F
        const f_back = D * F;
        const focal_px_x = l2_x + f_back * scaleX;
        if (focal_px_x < w - 20 && focal_px_x > l2_x) {
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(focal_px_x, cy, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = 'bold 11px JetBrains Mono, monospace';
          ctx.fillText(`F' (focal point)`, focal_px_x - 40, cy - 14);
        }
      }
    }

    function drawLens(ctx, x, cy, lensHeight, strokeColor, label) {
      ctx.save();
      ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.2;

      // Double convex lens curvature
      ctx.beginPath();
      ctx.ellipse(x, cy, 9, lensHeight / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Top and bottom apex markers
      ctx.fillStyle = strokeColor;
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText(label, x - 8, cy - lensHeight / 2 - 8);
      ctx.restore();
    }

    function drawArrow(ctx, x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-7, -4);
      ctx.lineTo(-7, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    [f1Slider, f2Slider, dSlider, ySlider].forEach(inp => {
      inp.addEventListener('input', update);
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      update();
    });

    resizeCanvas();
    update();
  }

  window.OpticsMatrixBench = {
    mount: initMatrixBench
  };

})(window);
