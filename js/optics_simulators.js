/**
 * Applied-Optics-SVAGDC: Interactive Optical Physics Simulators
 * (Aberrations, Optical Fiber NA & TIR, Laser Cavity, and Malus's Law)
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  // =========================================================================
  // 1. ABERRATION VISUALIZER (Spherical Aberration & Circle of Least Confusion)
  // =========================================================================
  function initAberrationVisualizer(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    mount.innerHTML = `
      <div class="simulator-widget">
        <div class="simulator-header">
          <div class="simulator-title">
            <i class="fa-solid fa-circle-nodes" style="color: var(--accent-rose);"></i>
            Interactive Spherical Aberration &amp; Caustic Curve Analyzer
          </div>
          <div class="simulator-tag" style="background: rgba(225, 29, 72, 0.1); color: var(--accent-rose); border-color: rgba(225, 29, 72, 0.25);">
            <i class="fa-solid fa-eye"></i> Seidel Aberration
          </div>
        </div>

        <div class="simulator-canvas-box">
          <canvas id="aberration_canvas_${mountId}"></canvas>
        </div>

        <div class="simulator-controls-grid">
          <div class="control-item">
            <label>Aperture Diameter / Ray Height: <span class="val" id="ap_val_${mountId}">60 mm</span></label>
            <input type="range" id="ap_range_${mountId}" min="15" max="85" value="60" step="1">
          </div>
          <div class="control-item">
            <label>Lens Refractive Index (n): <span class="val" id="n_val_${mountId}">1.52 (Crown)</span></label>
            <input type="range" id="n_range_${mountId}" min="1.45" max="1.75" value="1.52" step="0.01">
          </div>
          <div class="control-item">
            <label>Shape Factor / Stop Mode: <span class="val" id="stop_val_${mountId}">Full Aperture</span></label>
            <select id="stop_select_${mountId}" style="padding: 0.4rem; border-radius: var(--radius-sm); background: var(--bg-surface); color: var(--text-primary); border: 1px solid var(--border-medium); font-size: 0.85rem;">
              <option value="full">Full Open Aperture (Maximum Aberration)</option>
              <option value="stopped">With Central Aperture Stop (Stops Marginal Rays)</option>
              <option value="planoconvex">Planoconvex (Curved Surface to Incident Parallel Rays)</option>
            </select>
          </div>
        </div>

        <div class="simulator-readout">
          <div class="readout-pill"><span class="label">Paraxial Focus (F_p):</span> <span class="data" id="fp_disp_${mountId}">200.0 mm</span></div>
          <div class="readout-pill"><span class="label">Marginal Focus (F_m):</span> <span class="data" id="fm_disp_${mountId}">174.5 mm</span></div>
          <div class="readout-pill"><span class="label">Longitudinal SA (LSA):</span> <span class="data" id="lsa_disp_${mountId}">25.5 mm</span></div>
          <div class="readout-pill"><span class="label">Circle of Least Confusion:</span> <span class="data" id="clc_disp_${mountId}">187.2 mm</span></div>
        </div>
      </div>
    `;

    const canvas = document.getElementById(`aberration_canvas_${mountId}`);
    const ctx = canvas.getContext('2d');
    const apSlider = document.getElementById(`ap_range_${mountId}`);
    const nSlider = document.getElementById(`n_range_${mountId}`);
    const stopSelect = document.getElementById(`stop_select_${mountId}`);

    const apDisp = document.getElementById(`ap_val_${mountId}`);
    const nDisp = document.getElementById(`n_val_${mountId}`);
    const stopDisp = document.getElementById(`stop_val_${mountId}`);

    const fpDisp = document.getElementById(`fp_disp_${mountId}`);
    const fmDisp = document.getElementById(`fm_disp_${mountId}`);
    const lsaDisp = document.getElementById(`lsa_disp_${mountId}`);
    const clcDisp = document.getElementById(`clc_disp_${mountId}`);

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 750;
      canvas.height = 280;
    }

    function update() {
      const ap = parseFloat(apSlider.value);
      const n = parseFloat(nSlider.value);
      const mode = stopSelect.value;

      apDisp.textContent = `${ap} mm`;
      nDisp.textContent = `${n.toFixed(2)} (${n > 1.6 ? 'Dense Flint' : 'Crown Glass'})`;
      stopDisp.textContent = stopSelect.options[stopSelect.selectedIndex].text.split('(')[0];

      // Base paraxial focal length
      const R1 = 120;
      const R2 = 120;
      const fp = (R1 * R2) / ((n - 1) * (R1 + R2)); // approx 125 mm

      // Aberration scaling
      let sa_factor = 0.007 * (ap * ap) / fp;
      if (mode === 'stopped') sa_factor *= 0.22;
      if (mode === 'planoconvex') sa_factor *= 0.55;

      const fm = fp * (1 - sa_factor);
      const lsa = fp - fm;
      const clc = fm + lsa * 0.5;

      fpDisp.textContent = `${fp.toFixed(1)} mm`;
      fmDisp.textContent = `${fm.toFixed(1)} mm`;
      lsaDisp.textContent = `${lsa.toFixed(1)} mm`;
      clcDisp.textContent = `${clc.toFixed(1)} mm`;

      draw(ap, fp, fm, lsa, clc, mode);
    }

    function draw(ap, fp, fm, lsa, clc, mode) {
      const w = canvas.width;
      const h = canvas.height;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Optical Axis
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.moveTo(10, cy);
      ctx.lineTo(w - 10, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      const lx = 140; // Lens position
      const scale = (w - 220) / 250;

      // Draw Lens
      ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(lx, cy, 12, 100, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // If aperture stop is active
      if (mode === 'stopped') {
        ctx.fillStyle = '#475569';
        ctx.fillRect(lx - 20, cy - 110, 8, 70);
        ctx.fillRect(lx - 20, cy + 40, 8, 70);
        ctx.fillStyle = '#fbbf24';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText('Aperture Stop', lx - 50, cy - 115);
      }

      // Draw multiple ray zones
      const numRays = 7;
      for (let i = 1; i <= numRays; i++) {
        let frac = i / numRays;
        let y = frac * ap;
        if (mode === 'stopped' && y > 35) continue; // blocked by stop

        // Calculate focus for this ray height: f(y) = fp - (y/ap)^2 * lsa
        const ray_f = fp - (Math.pow(y / ap, 2) * lsa);
        const focal_x = lx + ray_f * scale;

        // Color coding: marginal (outer) = rose/red, paraxial (inner) = cyan
        const isMarginal = frac > 0.75;
        const color = isMarginal ? '#f43f5e' : (frac < 0.35 ? '#38bdf8' : '#818cf8');

        // Upper ray
        ctx.strokeStyle = color;
        ctx.lineWidth = isMarginal ? 2 : 1.2;
        ctx.beginPath();
        ctx.moveTo(15, cy - y);
        ctx.lineTo(lx, cy - y);
        ctx.lineTo(focal_x, cy);
        ctx.lineTo(w - 20, cy + (w - 20 - focal_x) * (y / (focal_x - lx)));
        ctx.stroke();

        // Lower symmetric ray
        ctx.beginPath();
        ctx.moveTo(15, cy + y);
        ctx.lineTo(lx, cy + y);
        ctx.lineTo(focal_x, cy);
        ctx.lineTo(w - 20, cy - (w - 20 - focal_x) * (y / (focal_x - lx)));
        ctx.stroke();
      }

      // Draw Focus Markers
      const fp_x = lx + fp * scale;
      const fm_x = lx + fm * scale;
      const clc_x = lx + clc * scale;

      // Paraxial focus dot
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.arc(fp_x, cy, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.fillText("F_p (Paraxial)", fp_x - 30, cy + 22);

      // Marginal focus dot
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath(); ctx.arc(fm_x, cy, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillText("F_m (Marginal)", fm_x - 30, cy - 14);

      // Circle of Least Confusion line
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(clc_x, cy - 22);
      ctx.lineTo(clc_x, cy + 22);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText("Least Confusion (CLC)", clc_x - 55, cy - 28);
    }

    [apSlider, nSlider, stopSelect].forEach(inp => {
      inp.addEventListener('input', update);
      inp.addEventListener('change', update);
    });

    window.addEventListener('resize', () => { resize(); update(); });
    resize();
    update();
  }

  // =========================================================================
  // 2. OPTICAL FIBER NA & TOTAL INTERNAL REFLECTION (TIR) SIMULATOR
  // =========================================================================
  function initFiberNASimulator(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    mount.innerHTML = `
      <div class="simulator-widget">
        <div class="simulator-header">
          <div class="simulator-title">
            <i class="fa-solid fa-bolt" style="color: var(--accent-emerald);"></i>
            Interactive Optical Fiber: Numerical Aperture &amp; Light Guiding
          </div>
          <div class="simulator-tag">
            <i class="fa-solid fa-wave-square"></i> Snell's Law &amp; TIR
          </div>
        </div>

        <div class="simulator-canvas-box">
          <canvas id="fiber_canvas_${mountId}"></canvas>
        </div>

        <div class="simulator-controls-grid">
          <div class="control-item">
            <label>Core Index (<i>n</i><sub>1</sub>): <span class="val" id="n1_val_${mountId}">1.500</span></label>
            <input type="range" id="n1_range_${mountId}" min="1.450" max="1.620" value="1.500" step="0.005">
          </div>
          <div class="control-item">
            <label>Cladding Index (<i>n</i><sub>2</sub>): <span class="val" id="n2_val_${mountId}">1.460</span></label>
            <input type="range" id="n2_range_${mountId}" min="1.400" max="1.495" value="1.460" step="0.005">
          </div>
          <div class="control-item">
            <label>Incident Ray Launch Angle (<i>θ</i><sub>in</sub>): <span class="val" id="ang_val_${mountId}">18.0°</span></label>
            <input type="range" id="ang_range_${mountId}" min="0" max="50" value="18" step="1">
          </div>
        </div>

        <div class="simulator-readout">
          <div class="readout-pill"><span class="label">Fractional Index Change (Δ):</span> <span class="data" id="delta_disp_${mountId}">0.0267</span></div>
          <div class="readout-pill"><span class="label">Critical Angle (<i>θ</i><sub>c</sub>):</span> <span class="data" id="thetac_disp_${mountId}">76.7°</span></div>
          <div class="readout-pill"><span class="label">Numerical Aperture (NA):</span> <span class="data" id="na_disp_${mountId}">0.344</span></div>
          <div class="readout-pill"><span class="label">Acceptance Angle (<i>θ</i><sub>a</sub>):</span> <span class="data" id="thetaa_disp_${mountId}">20.1°</span></div>
          <div class="readout-pill"><span class="label">Status:</span> <span class="data" id="status_disp_${mountId}">GUIDED BY TIR ✓</span></div>
        </div>
      </div>
    `;

    const canvas = document.getElementById(`fiber_canvas_${mountId}`);
    const ctx = canvas.getContext('2d');

    const n1Slider = document.getElementById(`n1_range_${mountId}`);
    const n2Slider = document.getElementById(`n2_range_${mountId}`);
    const angSlider = document.getElementById(`ang_range_${mountId}`);

    const n1Disp = document.getElementById(`n1_val_${mountId}`);
    const n2Disp = document.getElementById(`n2_val_${mountId}`);
    const angDisp = document.getElementById(`ang_val_${mountId}`);

    const deltaDisp = document.getElementById(`delta_disp_${mountId}`);
    const thetacDisp = document.getElementById(`thetac_disp_${mountId}`);
    const naDisp = document.getElementById(`na_disp_${mountId}`);
    const thetaaDisp = document.getElementById(`thetaa_disp_${mountId}`);
    const statusDisp = document.getElementById(`status_disp_${mountId}`);

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 750;
      canvas.height = 280;
    }

    function update() {
      let n1 = parseFloat(n1Slider.value);
      let n2 = parseFloat(n2Slider.value);
      if (n2 >= n1) {
        n2 = n1 - 0.005;
        n2Slider.value = n2.toFixed(3);
      }
      const theta_in_deg = parseFloat(angSlider.value);
      const theta_in_rad = (theta_in_deg * Math.PI) / 180;

      n1Disp.textContent = n1.toFixed(3);
      n2Disp.textContent = n2.toFixed(3);
      angDisp.textContent = `${theta_in_deg.toFixed(1)}°`;

      // NA = sqrt(n1^2 - n2^2)
      const na = Math.sqrt(Math.max(0, n1 * n1 - n2 * n2));
      const theta_a_rad = Math.asin(Math.min(1.0, na));
      const theta_a_deg = (theta_a_rad * 180) / Math.PI;

      const delta = (n1 - n2) / n1;
      const theta_c_rad = Math.asin(n2 / n1);
      const theta_c_deg = (theta_c_rad * 180) / Math.PI;

      const isGuided = theta_in_deg <= theta_a_deg;

      deltaDisp.textContent = delta.toFixed(4);
      thetacDisp.textContent = `${theta_c_deg.toFixed(1)}°`;
      naDisp.textContent = na.toFixed(3);
      thetaaDisp.textContent = `${theta_a_deg.toFixed(1)}°`;

      if (isGuided) {
        statusDisp.innerHTML = '<span style="color: #10b981;"><i class="fa-solid fa-circle-check"></i> TOTAL INTERNAL REFLECTION (GUIDED)</span>';
      } else {
        statusDisp.innerHTML = '<span style="color: #f43f5e;"><i class="fa-solid fa-circle-xmark"></i> LEAKAGE INTO CLADDING (LOSS)</span>';
      }

      draw(n1, n2, theta_in_deg, theta_a_deg, isGuided);
    }

    function draw(n1, n2, theta_in, theta_a, isGuided) {
      const w = canvas.width;
      const h = canvas.height;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const fiberX = 220;
      const coreHalfH = 45;
      const cladHalfH = 95;

      // Draw Cladding (Top & Bottom)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(fiberX, cy - cladHalfH, w - fiberX, cladHalfH - coreHalfH);
      ctx.fillRect(fiberX, cy + coreHalfH, w - fiberX, cladHalfH - coreHalfH);

      // Draw Core
      ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.fillRect(fiberX, cy - coreHalfH, w - fiberX, coreHalfH * 2);

      // Core-Cladding boundaries
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(fiberX, cy - coreHalfH); ctx.lineTo(w, cy - coreHalfH);
      ctx.moveTo(fiberX, cy + coreHalfH); ctx.lineTo(w, cy + coreHalfH);
      ctx.stroke();

      // Outer cladding boundary
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(fiberX, cy - cladHalfH); ctx.lineTo(w, cy - cladHalfH);
      ctx.moveTo(fiberX, cy + cladHalfH); ctx.lineTo(w, cy + cladHalfH);
      ctx.stroke();

      // Fiber Entrance Face
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(fiberX, cy - cladHalfH);
      ctx.lineTo(fiberX, cy + cladHalfH);
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText(`Cladding (n₂ = ${n2.toFixed(2)})`, fiberX + 20, cy - cladHalfH + 20);
      ctx.fillText(`Core (n₁ = ${n1.toFixed(2)})`, fiberX + 20, cy + 5);
      ctx.fillText(`Cladding (n₂ = ${n2.toFixed(2)})`, fiberX + 20, cy + cladHalfH - 15);

      // Draw Acceptance Cone
      const coneLength = 160;
      const coneHalfY = coneLength * Math.tan((theta_a * Math.PI) / 180);

      ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.beginPath();
      ctx.moveTo(fiberX, cy);
      ctx.lineTo(fiberX - coneLength, cy - coneHalfY);
      ctx.lineTo(fiberX - coneLength, cy + coneHalfY);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(fiberX, cy); ctx.lineTo(fiberX - coneLength, cy - coneHalfY);
      ctx.moveTo(fiberX, cy); ctx.lineTo(fiberX - coneLength, cy + coneHalfY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#10b981';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(`Acceptance Cone (θₐ = ${theta_a.toFixed(1)}°)`, fiberX - coneLength + 10, cy - coneHalfY - 8);

      // Draw Optical Axis
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(20, cy); ctx.lineTo(w - 20, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Ray Tracing
      const theta_in_rad = (theta_in * Math.PI) / 180;
      const rayStartY = cy - coneLength * Math.sin(theta_in_rad);
      const rayStartX = fiberX - coneLength * Math.cos(theta_in_rad);

      const rayColor = isGuided ? '#10b981' : '#f43f5e';
      ctx.strokeStyle = rayColor;
      ctx.lineWidth = 2.5;

      // Incident ray
      ctx.beginPath();
      ctx.moveTo(rayStartX, rayStartY);
      ctx.lineTo(fiberX, cy);
      ctx.stroke();

      // Refraction into core: Snell's law n0 sin(theta_in) = n1 sin(r)
      const r_rad = Math.asin(Math.sin(theta_in_rad) / n1);
      const bounceAngle = r_rad; // angle with horizontal

      if (isGuided) {
        // Guided zig-zag TIR path
        let currX = fiberX;
        let currY = cy;
        let direction = -1; // heading up

        for (let b = 0; b < 6; b++) {
          const dy = direction * coreHalfH;
          const targetY = cy + dy;
          const dx = Math.abs(dy - (currY - cy)) / Math.tan(bounceAngle || 0.01);
          const nextX = currX + Math.min(dx, 90);

          ctx.beginPath();
          ctx.moveTo(currX, currY);
          ctx.lineTo(nextX, targetY);
          ctx.stroke();

          // TIR reflection spark
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath(); ctx.arc(nextX, targetY, 3, 0, Math.PI * 2); ctx.fill();

          currX = nextX;
          currY = targetY;
          direction *= -1;
          if (currX >= w) break;
        }
      } else {
        // Leaking refracted ray into cladding
        const leakX = fiberX + coreHalfH / Math.tan(bounceAngle || 0.1);
        ctx.beginPath();
        ctx.moveTo(fiberX, cy);
        ctx.lineTo(leakX, cy - coreHalfH);
        ctx.stroke();

        // Leaks out through cladding boundary
        ctx.strokeStyle = '#f43f5e';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(leakX, cy - coreHalfH);
        ctx.lineTo(leakX + 110, cy - cladHalfH - 20);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#f43f5e';
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText('Refracts into Cladding (Lost Power)', leakX + 20, cy - cladHalfH + 15);
      }
    }

    [n1Slider, n2Slider, angSlider].forEach(inp => {
      inp.addEventListener('input', update);
    });

    window.addEventListener('resize', () => { resize(); update(); });
    resize();
    update();
  }

  // =========================================================================
  // 3. LASER CAVITY & POPULATION INVERSION SIMULATOR
  // =========================================================================
  function initLaserCavitySimulator(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    mount.innerHTML = `
      <div class="simulator-widget">
        <div class="simulator-header">
          <div class="simulator-title">
            <i class="fa-solid fa-laser" style="color: #ef4444;"></i>
            Interactive Laser Cavity &amp; Population Inversion Simulator
          </div>
          <div class="simulator-tag" style="background: rgba(239, 68, 68, 0.12); color: #ef4444; border-color: rgba(239, 68, 68, 0.25);">
            <i class="fa-solid fa-atom"></i> Stimulated Emission
          </div>
        </div>

        <div class="simulator-canvas-box">
          <canvas id="laser_canvas_${mountId}"></canvas>
        </div>

        <div class="simulator-controls-grid">
          <div class="control-item">
            <label>Optical Pump Power (<i>P</i><sub>in</sub>): <span class="val" id="pump_val_${mountId}">65%</span></label>
            <input type="range" id="pump_range_${mountId}" min="0" max="100" value="65" step="1">
          </div>
          <div class="control-item">
            <label>Output Mirror Reflectivity (<i>R</i><sub>2</sub>): <span class="val" id="r2_val_${mountId}">95%</span></label>
            <input type="range" id="r2_range_${mountId}" min="70" max="99" value="95" step="1">
          </div>
        </div>

        <div class="simulator-readout">
          <div class="readout-pill"><span class="label">Ground State (<i>N</i><sub>1</sub>):</span> <span class="data" id="n1_pop_${mountId}">30%</span></div>
          <div class="readout-pill"><span class="label">Metastable Level (<i>N</i><sub>2</sub>):</span> <span class="data" id="n2_pop_${mountId}">60%</span></div>
          <div class="readout-pill"><span class="label">Inversion (Δ<i>N</i> = <i>N</i><sub>2</sub> − <i>N</i><sub>1</sub>):</span> <span class="data" id="dn_disp_${mountId}">+30%</span></div>
          <div class="readout-pill"><span class="label">Laser Output:</span> <span class="data" id="laser_stat_${mountId}">LASING ACTIVE (632.8 nm)</span></div>
        </div>
      </div>
    `;

    const canvas = document.getElementById(`laser_canvas_${mountId}`);
    const ctx = canvas.getContext('2d');
    const pumpSlider = document.getElementById(`pump_range_${mountId}`);
    const r2Slider = document.getElementById(`r2_range_${mountId}`);

    const pumpDisp = document.getElementById(`pump_val_${mountId}`);
    const r2Disp = document.getElementById(`r2_val_${mountId}`);

    const n1Pop = document.getElementById(`n1_pop_${mountId}`);
    const n2Pop = document.getElementById(`n2_pop_${mountId}`);
    const dnDisp = document.getElementById(`dn_disp_${mountId}`);
    const laserStat = document.getElementById(`laser_stat_${mountId}`);

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 750;
      canvas.height = 280;
    }

    let photonPhase = 0;

    function update() {
      const pump = parseFloat(pumpSlider.value);
      const r2 = parseFloat(r2Slider.value);

      pumpDisp.textContent = `${pump}%`;
      r2Disp.textContent = `${r2}%`;

      // Simplified rate equation steady state
      const n2 = Math.min(85, Math.max(5, pump * 0.85));
      const n1 = Math.max(10, 95 - n2);
      const dn = n2 - n1;
      const isLasing = dn > 5;

      n1Pop.textContent = `${n1.toFixed(0)}%`;
      n2Pop.textContent = `${n2.toFixed(0)}%`;
      dnDisp.textContent = `${dn > 0 ? '+' : ''}${dn.toFixed(0)}%`;

      if (isLasing) {
        laserStat.innerHTML = '<span style="color: #ef4444; font-weight: bold;"><i class="fa-solid fa-burst"></i> LASING EMISSION ON (λ = 632.8 nm)</span>';
      } else {
        laserStat.innerHTML = '<span style="color: #64748b;">BELOW THRESHOLD (Spontaneous Only)</span>';
      }

      draw(pump, r2, n1, n2, dn, isLasing);
    }

    function draw(pump, r2, n1, n2, dn, isLasing) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Draw Energy Level Diagram on Left (x: 40 to 220)
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;

      // E1 (Ground)
      ctx.beginPath(); ctx.moveTo(40, 230); ctx.lineTo(200, 230); ctx.stroke();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText(`E₁ Ground (${n1.toFixed(0)}%)`, 40, 248);

      // E2 (Metastable)
      ctx.strokeStyle = '#ef4444';
      ctx.beginPath(); ctx.moveTo(40, 130); ctx.lineTo(200, 130); ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.fillText(`E₂ Metastable (${n2.toFixed(0)}%)`, 40, 122);

      // E3 (Pump Level)
      ctx.strokeStyle = '#10b981';
      ctx.beginPath(); ctx.moveTo(40, 60); ctx.lineTo(200, 60); ctx.stroke();
      ctx.fillStyle = '#10b981';
      ctx.fillText('E₃ Pump Band', 40, 52);

      // Pump Arrow E1 -> E3
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath(); ctx.moveTo(70, 230); ctx.lineTo(70, 60); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#10b981';
      ctx.fillText('Optical/Elec Pump', 75, 175);

      // Fast Radiationless Decay E3 -> E2
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(150, 60); ctx.lineTo(150, 130); ctx.stroke();
      ctx.fillText('Fast Decay', 155, 95);

      // Laser Transition E2 -> E1
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = isLasing ? 3 : 1.5;
      ctx.beginPath(); ctx.moveTo(110, 130); ctx.lineTo(110, 230); ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.fillText(isLasing ? 'hν (Laser)' : 'Spontaneous', 115, 185);

      // Draw Laser Tube on Right (x: 270 to w - 70)
      const tx = 270;
      const tw = w - tx - 110;
      const ty = 90;
      const th = 100;

      // Discharge tube body
      ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(tx, ty, tw, th);
      ctx.fillRect(tx, ty, tw, th);

      // 100% Mirror on left
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(tx - 12, ty - 10, 12, th + 20);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText('R₁=100%', tx - 25, ty + th + 25);

      // R2 Output Coupler on right
      ctx.fillStyle = '#818cf8';
      ctx.fillRect(tx + tw, ty - 10, 12, th + 20);
      ctx.fillStyle = '#818cf8';
      ctx.fillText(`R₂=${r2}%`, tx + tw - 5, ty + th + 25);

      // Active Medium label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('He-Ne Active Gas Discharge / Laser Medium', tx + 20, ty + th / 2 - 25);

      // Laser beam inside and outside
      if (isLasing) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 12;

        // Inside resonant standing wave
        ctx.beginPath();
        ctx.moveTo(tx, ty + th / 2);
        ctx.lineTo(tx + tw, ty + th / 2);
        ctx.stroke();

        // Emerging laser beam out the right
        ctx.beginPath();
        ctx.moveTo(tx + tw + 12, ty + th / 2);
        ctx.lineTo(w - 10, ty + th / 2);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText('Laser Beam Output', tx + tw + 15, ty + th / 2 - 12);
      }
    }

    [pumpSlider, r2Slider].forEach(inp => inp.addEventListener('input', update));
    window.addEventListener('resize', () => { resize(); update(); });
    resize();
    update();
  }

  // =========================================================================
  // 4. MALUS'S LAW INTERACTIVE POLARIZATION SIMULATOR
  // =========================================================================
  function initMalusLawSimulator(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    mount.innerHTML = `
      <div class="simulator-widget">
        <div class="simulator-header">
          <div class="simulator-title">
            <i class="fa-solid fa-compass-drafting" style="color: var(--accent-purple);"></i>
            Interactive Malus's Law &amp; Polarization Photometer
          </div>
          <div class="simulator-tag" style="background: rgba(124, 58, 237, 0.1); color: var(--accent-purple); border-color: rgba(124, 58, 237, 0.25);">
            <i class="fa-solid fa-arrows-split-up-and-left"></i> I = I₀ cos²(θ)
          </div>
        </div>

        <div class="simulator-canvas-box">
          <canvas id="malus_canvas_${mountId}"></canvas>
        </div>

        <div class="simulator-controls-grid">
          <div class="control-item">
            <label>Analyzer Angle (<i>θ</i>): <span class="val" id="angle_val_${mountId}">45.0°</span></label>
            <input type="range" id="angle_range_${mountId}" min="0" max="180" value="45" step="1">
          </div>
          <div class="control-item">
            <label>Incident Intensity (<i>I</i><sub>0</sub>): <span class="val" id="i0_val_${mountId}">100 mW</span></label>
            <input type="range" id="i0_range_${mountId}" min="20" max="200" value="100" step="5">
          </div>
        </div>

        <div class="simulator-readout">
          <div class="readout-pill"><span class="label">Relative Transmission:</span> <span class="data" id="trans_disp_${mountId}">50.0%</span></div>
          <div class="readout-pill"><span class="label">Transmitted Intensity (<i>I</i>):</span> <span class="data" id="i_disp_${mountId}">50.0 mW</span></div>
          <div class="readout-pill"><span class="label">Polarization State:</span> <span class="data" id="state_disp_${mountId}">Linear at 45°</span></div>
        </div>
      </div>
    `;

    const canvas = document.getElementById(`malus_canvas_${mountId}`);
    const ctx = canvas.getContext('2d');
    const angleSlider = document.getElementById(`angle_range_${mountId}`);
    const i0Slider = document.getElementById(`i0_range_${mountId}`);

    const angleDisp = document.getElementById(`angle_val_${mountId}`);
    const i0Disp = document.getElementById(`i0_val_${mountId}`);

    const transDisp = document.getElementById(`trans_disp_${mountId}`);
    const iDisp = document.getElementById(`i_disp_${mountId}`);
    const stateDisp = document.getElementById(`state_disp_${mountId}`);

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 750;
      canvas.height = 280;
    }

    function update() {
      const theta_deg = parseFloat(angleSlider.value);
      const i0 = parseFloat(i0Slider.value);
      const theta_rad = (theta_deg * Math.PI) / 180;

      angleDisp.textContent = `${theta_deg.toFixed(1)}°`;
      i0Disp.textContent = `${i0.toFixed(0)} mW`;

      const cosTheta = Math.cos(theta_rad);
      const transFrac = cosTheta * cosTheta;
      const I_trans = i0 * transFrac;

      transDisp.textContent = `${(transFrac * 100).toFixed(1)}%`;
      iDisp.textContent = `${I_trans.toFixed(1)} mW`;
      stateDisp.textContent = theta_deg === 90 ? 'Crossed (Extinction / 0 mW)' : `Linear at ${theta_deg.toFixed(0)}°`;

      draw(theta_deg, i0, transFrac, I_trans);
    }

    function draw(theta_deg, i0, transFrac, I_trans) {
      const w = canvas.width;
      const h = canvas.height;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Light beam axis
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(15, cy);
      ctx.lineTo(w - 180, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      const polX = 140;
      const anaX = 320;

      // 1. Unpolarized Incident Beam (x: 15 to polX)
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(15, cy); ctx.lineTo(polX, cy); ctx.stroke();

      // Draw unpolarized radial arrows
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.2;
      for (let x = 40; x < polX; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, cy - 25); ctx.lineTo(x, cy + 25); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x - 20, cy - 12); ctx.lineTo(x + 20, cy + 12); ctx.stroke();
      }

      // 2. Polarizer Disc (Vertical transmission axis 0°)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.ellipse(polX, cy, 14, 75, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // Polarizer axis line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(polX, cy - 70); ctx.lineTo(polX, cy + 70); ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Polarizer (0°)', polX - 35, cy - 85);

      // 3. Linearly Polarized Beam (Vertical) between Polarizer & Analyzer
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(polX, cy); ctx.lineTo(anaX, cy); ctx.stroke();
      for (let x = polX + 35; x < anaX; x += 35) {
        ctx.beginPath(); ctx.moveTo(x, cy - 22); ctx.lineTo(x, cy + 22); ctx.stroke();
      }

      // 4. Analyzer Disc (Rotated by theta)
      ctx.fillStyle = 'rgba(124, 58, 237, 0.2)';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.ellipse(anaX, cy, 14, 75, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      // Rotated axis line
      const theta_rad = (theta_deg * Math.PI) / 180;
      const dx = 70 * Math.sin(theta_rad) * 0.18;
      const dy = 70 * Math.cos(theta_rad);
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(anaX - dx, cy - dy); ctx.lineTo(anaX + dx, cy + dy); ctx.stroke();
      ctx.fillStyle = '#a855f7';
      ctx.fillText(`Analyzer (${theta_deg.toFixed(0)}°)`, anaX - 35, cy - 85);

      // 5. Transmitted Beam (Intensity modulated)
      const transWidth = Math.max(0.5, 4 * transFrac);
      ctx.strokeStyle = transFrac > 0.05 ? '#a855f7' : '#475569';
      ctx.lineWidth = transWidth;
      ctx.beginPath(); ctx.moveTo(anaX, cy); ctx.lineTo(w - 180, cy); ctx.stroke();

      // 6. Right Side: Analytical cos²(θ) Polar Plot
      const plotX = w - 90;
      const plotY = cy;
      const plotR = 60;

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(plotX, plotY, plotR, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(plotX - plotR, plotY); ctx.lineTo(plotX + plotR, plotY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(plotX, plotY - plotR); ctx.lineTo(plotX, plotY + plotR); ctx.stroke();

      // Draw cos² curve in polar coordinates
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let a = 0; a <= 360; a += 4) {
        let arad = (a * Math.PI) / 180;
        let r = plotR * Math.pow(Math.cos(arad), 2);
        let px = plotX + r * Math.sin(arad);
        let py = plotY - r * Math.cos(arad);
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Current angle vector dot
      const curR = plotR * transFrac;
      const curPx = plotX + curR * Math.sin(theta_rad);
      const curPy = plotY - curR * Math.cos(theta_rad);
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath(); ctx.arc(curPx, curPy, 4.5, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('Polar Plot I(θ)', plotX - 35, plotY + plotR + 18);
    }

    [angleSlider, i0Slider].forEach(inp => inp.addEventListener('input', update));
    window.addEventListener('resize', () => { resize(); update(); });
    resize();
    update();
  }

  window.OpticsSimulators = {
    initAberrationVisualizer,
    initFiberNASimulator,
    initLaserCavitySimulator,
    initMalusLawSimulator
  };

})(window);
