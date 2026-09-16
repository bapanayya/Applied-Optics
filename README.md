# Course 7: Applied Optics — Semester III (Physics Major 2026-27)
### Department of Physics &bull; S.V.A. Govt. Degree College (Men), Srikalahasti
**Affiliated with Sri Venkateswara University &bull; APSCHE State Curriculum Standards**

---

## 🌟 Overview & Pedagogical Vision

The **Applied Optics Learning Portal** is an interactive, academic-grade educational web application designed specifically for undergraduate Physics Major students pursuing **Course 7: Applied Optics** during Semester-III (Academic Year 2026-27). 

Mirroring the architecture and aesthetic quality of the Department's **Python Master Portal** and **Computer Fundamentals & Office Automation Portal**, this platform provides complete, zero-placeholder coverage of all five theory units, all sixteen prescribed practical lab experiments, and end-of-unit student activities with Continuous Internal Assessment (CIA) rubrics.

Every topic features custom-crafted, theme-aware **SVG optical schematics**, rigorous mathematical formulations rendered in **KaTeX**, and interactive **Test Your Understanding** quiz exercises with instant validation, hints, and pedagogical explanations.

---

## 🔬 Curriculum Structure & Scope (61 Topics / 183 Exercises)

### Unit 1: Geometrical Optics & Matrix Methods in Paraxial Optics (9 Topics)
1. **Course Overview & Academic Framework** (`optics-intro`): Credits, syllabus map, outcomes, and assessment guidelines.
2. **Ray Optics Assumptions & Fermat's Principle** (`ray-optics-assumptions-fermat`): Extreme optical path length, derivation of reflection and Snell's refraction laws.
3. **Translation & Refraction Ray Matrices** (`matrix-methods-translation-refraction`): State vectors $(y, \alpha)$, paraxial ray tracing, unimodular determinant proofs.
4. **Reflection & Cascaded System Matrices** (`reflection-system-matrix`): Spherical mirror reflection, thick lenses, master ABCD matrix parameters.
5. **Thick & Thin Lens Matrix Formulations** (`thick-thin-lens-matrix`): Lens maker's equation, finite thickness power loss, equivalent focal length.
6. **Two-Lens Combinations & Cardinal Points** (`two-lens-combinations`): Unit and nodal planes, focal points, telephoto systems.
7. **The Ramsden Eyepiece** (`ramsden-eyepiece`): $3:2:3$ design, cross-wire placement, chromatic aberration reduction, field of view.
8. **The Huygens Eyepiece** (`huygens-eyepiece`): $3:2:1$ design, complete achromatism ($d = (f_1+f_2)/2$), virtual cross-wires, minimization of spherical aberration.
9. **Unit 1 Student Activities & CIA Rubrics** (`unit1-activities-rubrics`): Matrix bench ray tracing, focal length measurements, 10-point assessment matrix.

### Unit 2: Aberrations in Optical Systems & Achromatic Design (8 Topics)
1. **Fresnel Wavefronts & Monochromatic Aberrations** (`fresnel-reflection-refraction`): Snell's deviations, Seidel 3rd-order aberration polynomials.
2. **Spherical Aberration Mechanisms** (`spherical-aberration-mechanisms`): Longitudinal & lateral aberration, marginal vs. paraxial rays, caustic surface, circle of least confusion.
3. **Minimization of Spherical Aberration** (`spherical-aberration-minimization`): Crossed lenses ($q \approx 0.71$), separated lens pairs ($d = f_1 - f_2$), stops, aplanatic surfaces.
4. **Coma & Astigmatism** (`coma-and-astigmatism`): Off-axis skew rays, 60° comatic flare, Abbe sine condition ($n y \sin\theta = n' y' \sin\theta'$), tangential/sagittal focal lines.
5. **Curvature of Field & Distortion** (`curvature-of-field-distortion`): Petzval curvature condition ($\sum 1/(n_i f_i) = 0$), barrel vs. pincushion distortion.
6. **Chromatic Aberration (Longitudinal & Lateral)** (`chromatic-aberration-longitudinal-lateral`): Dispersion $dn/d\lambda$, Cauchy relation, Fraunhofer wavelengths (C, D, F).
7. **Achromatic Doublets in Contact & Separated** (`achromatic-combinations-contact-separated`): Contact condition ($\omega_1/f_1 + \omega_2/f_2 = 0$), crown-flint pairing, separated achromat ($d = (f_1+f_2)/2$).
8. **Unit 2 Student Activities & CIA Rubrics** (`unit2-activities-rubrics`): Bench caustic mapping, flint-crown design, 10-point assessment rubrics.

### Unit 3: Lasers & Quantum Optics (9 Topics)
1. **Fundamental Characteristics of Lasers** (`laser-fundamentals-coherence`): Spatial & temporal coherence, monochromaticity, collimation, high brilliance/radiance.
2. **Matter-Radiation Interactions** (`matter-radiation-interactions`): Induced absorption, spontaneous emission, stimulated emission, phase matching.
3. **Population Inversion & Resonant Cavities** (`population-inversion-cavity-feedback`): Boltzmann equilibrium inversion ($N_2 > N_1$), Fabry-Pérot longitudinal modes, threshold gain condition ($R_1 R_2 e^{2(\gamma - \alpha)L} = 1$).
4. **Einstein's Relations & Transition Rates** (`einstein-relations-coefficients`): Thermodynamic derivation, $B_{12} = B_{21}$, $A_{21}/B_{21} = 8\pi h \nu^3 / c^3$, high-frequency challenge.
5. **The Helium-Neon (He-Ne) Gas Laser** (`helium-neon-gas-laser`): 4-level excitation mechanism, resonant collision energy transfer, 632.8 nm red line, Brewster windows.
6. **The Ruby Solid-State Laser** (`ruby-laser-engineering`): 3-level Maiman architecture, $\text{Cr}^{3+}:\text{Al}_2\text{O}_3$, 694.3 nm emission, flashlamp pumping, pulsed dynamics.
7. **Semiconductor Injection Diode Lasers** (`semiconductor-diode-lasers`): Direct bandgap GaAs ($1.42\text{ eV}$), p-n heterostructure, cleave-facet reflection, 850 nm emission.
8. **Industrial, Medical & Scientific Laser Applications** (`laser-applications-modern`): LIDAR, CNC cutting, LASIK refractive surgery, photodynamic therapy, laser cooling.
9. **Unit 3 Student Activities & CIA Rubrics** (`unit3-activities-rubrics`): Cavity mode synthesis, beam divergence profiling, 10-point rubrics.

### Unit 4: Fiber Optics & Optical Communications (10 Topics)
1. **Total Internal Reflection & Waveguiding** (`optical-fiber-fundamentals-tir`): Snell's critical angle ($\theta_c = \sin^{-1}(n_2/n_1)$), core-cladding boundary, evanescent decay.
2. **Acceptance Angle & Numerical Aperture** (`acceptance-angle-numerical-aperture`): Derivation of $\sin\theta_a = \sqrt{n_1^2 - n_2^2} / n_0$, fractional index $\Delta$, light gathering power.
3. **Step-Index vs. Graded-Index (GRIN) Fibers** (`step-index-graded-index-fibers`): Parabolic refractive profile ($n(r) = n_1[1 - 2\Delta(r/a)^2]^{1/2}$), modal dispersion minimization.
4. **Single-Mode vs. Multimode Fibers** (`single-mode-multimode-fibers`): Normalized frequency ($V = \frac{2\pi a}{\lambda}\text{NA}$), cutoff condition ($V < 2.405$), modal dispersion elimination.
5. **Attenuation Mechanisms & Optical Loss** (`attenuation-mechanisms-fiber-loss`): Rayleigh scattering ($\propto 1/\lambda^4$), infrared phonon absorption, UV electronic absorption, $-\text{OH}$ overtone peaks.
6. **The Three Optical Telecom Transmission Windows** (`telecom-transmission-windows`): 850 nm (Window 1), 1310 nm zero-dispersion (Window 2), 1550 nm minimum attenuation (Window 3: $0.2\text{ dB/km}$).
7. **Fiber Optic Communication Systems & Sensors** (`fiber-optic-sensors-applications`): Medical endoscopes, fiber Bragg gratings (FBG), interferometric gyroscope.
8. **Holography: Principle of Wavefront Reconstruction** (`holography-principle-wavefront-reconstruction`): Dennis Gabor's 1948 concept, interference fringe recording, reference beam reconstruction.
9. **Gabor In-Line vs. Leith-Upatnieks Off-Axis Holography** (`gabor-vs-off-axis-holography`): Elimination of conjugate twin image and zero-order glare using an off-axis reference beam.
10. **Unit 4 Student Activities & CIA Rubrics** (`unit4-activities-rubrics`): NA beam projection, bending loss lab, 10-point assessment rubrics.

### Unit 5: Optical Instruments, Microscopy & Telescopes (9 Topics)
1. **Compound Microscope & Resolving Power** (`compound-microscope`): Objective + eyepiece optics, Abbe diffraction limit ($d = \lambda / (2\text{NA})$), Rayleigh criterion.
2. **Confocal Laser Scanning Microscopy (CLSM)** (`confocal-laser-scanning-microscopy`): Pinhole spatial filtering, rejection of out-of-focus background, 3D optical sectioning.
3. **Scanning Electron Microscopy (SEM)** (`scanning-electron-microscopy-sem`): De Broglie wavelength ($\lambda_e \approx 0.0037\text{ nm}$), secondary electrons (SE), backscattered electrons (BSE), EDX elemental mapping.
4. **Comparative Analysis of Advanced Microscopes** (`microscopy-comparative-framework`): Performance matrix across optical, confocal, SEM, TEM, and AFM systems.
5. **Astronomical & Terrestrial Telescopes** (`astronomical-terrestrial-optical-telescopes`): Keplerian refracting vs. Newtonian & Cassegrain reflecting architectures.
6. **Radio Telescopes & Aperture Synthesis** (`radio-telescopes-interferometry`): Parabolic dishes, Rayleigh criterion for radio wavelengths, Very Long Baseline Interferometry (VLBI), Event Horizon Telescope.
7. **Solar Telescopes & Coronagraphs** (`solar-telescopes-coronagraphs`): Heat stop mirrors, Lyot artificial solar eclipses, H-alpha ($656.3\text{ nm}$) hydrogen filters, Aditya-L1 VELC.
8. **Infrared & Space Telescopes** (`space-telescopes-multispectral`): Elimination of atmospheric seeing and absorption; JWST (L2 orbit, deployable beryllium gold mirrors, MIRI/NIRCam), Hubble Space Telescope, Astrosat.
9. **Unit 5 Student Activities & CIA Rubrics** (`unit5-activities-rubrics`): Telescopic angular resolution calculation, SEM image analysis, 10-point rubrics.

### Practical Lab Experiments Track (16 Prescribed Experiments)
Each lab experiment includes: Aim, Apparatus Required, Mathematical Principle, Step-by-Step Procedure, Precision SVG Experimental Setup Diagram, Observation Table, Calculations with Sample Data, Precautions, 5 Viva Voce Questions & Answers, and 3 Interactive Quiz Exercises.
1. **Experiment 1**: Determination of Laser Wavelength using Diffraction Grating (`lab-01-laser-wavelength-grating`).
2. **Experiment 2**: Determination of Refractive Index of Liquid using Laser (`lab-02-refractive-index-liquid-laser`).
3. **Experiment 3**: Resolving Power of a Telescope (`lab-03-resolving-power-telescope`).
4. **Experiment 4**: Resolving Power of a Transmission Grating (`lab-04-resolving-power-grating`).
5. **Experiment 5**: Determination of Angle of Minimum Deviation of Prism (`lab-05-minimum-deviation-prism`).
6. **Experiment 6**: Wavelength of Laser using a Steel Rule (Reflection Grating) (`lab-06-laser-reflection-grating-scale`).
7. **Experiment 7**: Measurement of Numerical Aperture of Optical Fiber (`lab-07-numerical-aperture-optical-fiber`).
8. **Experiment 8**: Determination of Dispersive Power of a Prism (`lab-08-dispersive-power-prism`).
9. **Experiment 9**: Determination of Cardinal Points of a Thick Lens System (`lab-09-cardinal-points-thick-lens`).
10. **Experiment 10**: Equivalent Focal Length of Two Separated Lenses (`lab-10-equivalent-focal-length-separated-lenses`).
11. **Experiment 11**: Achromatic Lens Combinations (Contact & Separated) (`lab-11-achromatic-lens-combinations`).
12. **Experiment 12**: Laser Beam Divergence and Spot Size Measurement (`lab-12-laser-beam-divergence`).
13. **Experiment 13**: Verification of Malus's Law using Polarizers and Photodetector (`lab-13-malus-law-verification`).
14. **Experiment 14**: Airy Disk Diameter and Resolving Limit of Circular Aperture (`lab-14-airy-disk-circular-aperture`).
15. **Experiment 15**: Transmission Grating Characteristics under Laser Illumination (`lab-15-transmission-grating-laser-normal`).
16. **Experiment 16**: Measurement of Bending Loss & Attenuation in Optical Fibers (`lab-16-fiber-attenuation-bending-loss`).

---

## 🛠️ Interactive Optics Simulators & Ray Tracing Canvases

The portal integrates five custom, responsive visualizers built directly in HTML5 Canvas and Vanilla JavaScript:

1. **Paraxial ABCD Matrix Optical Bench** (`optics_matrix_bench.js`):
   - Real-time ray tracing of paraxial rays through customizable optical trains (thin lenses, thick curved surfaces, dielectric media, mirror reflection).
   - Live ABCD matrix computation with display of focal length ($F = -1/C$) and unit planes.
2. **Spherical Aberration & Marginal Ray Caustic Curve** (`optics_simulators.js`):
   - Interactive lens aperture slider illustrating the divergence of paraxial vs. marginal focal points ($F_p$ vs. $F_m$), caustic envelope, and circle of least confusion ($LC$).
3. **Optical Fiber Numerical Aperture & TIR Engine** (`optics_simulators.js`):
   - Dynamic launch angle controller; traces rays entering the fiber core, demonstrates Snell's cone of acceptance ($\theta_a = \sin^{-1}(\text{NA})$), internal reflections, or refracted loss into the cladding.
4. **Laser Resonant Cavity & Population Inversion Simulator** (`optics_simulators.js`):
   - Visualizes pump photon excitation, non-radiative decay, stimulated emission cascading, and mirror reflectivity feedback ($R_1, R_2$) with real-time gain curve readout.
5. **Malus's Law Polarization Angle Analyzer** (`optics_simulators.js`):
   - 360° rotatable analyzer stage with dynamic electric field vector projection, photodetector power reading ($I = I_0 \cos^2\theta$), and live polar plot.

---

## 🚀 Quick Start & Local Execution

### Option 1: Direct File Opening
Double-click `index.html` (or `appliedopticstutorial.html`) in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari). No backend server, database, or package installation is required.

### Option 2: Local Static Web Server (Recommended)
From PowerShell or terminal in the project directory:
```powershell
cd E:\Google-AntiGravity-Projects\Python-Fundamentals\Applied-Optics-SVAGDC
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

---

## 🌐 Deploy to GitHub Pages

This project is 100% static and zero-build, making deployment to GitHub Pages straightforward:

1. Create a repository on GitHub (e.g., `Applied-Optics-SVAGDC` or publish from your master educational repository).
2. Push the files:
   ```bash
   git add .
   git commit -m "Deploy Course 7: Applied Optics learning portal"
   git push origin main
   ```
3. In GitHub repository settings:
   - Go to **Settings > Pages**.
   - Under **Source**, choose `Deploy from a branch`.
   - Select branch `main` and folder `/ (root)`.
   - Click **Save**.
4. Within 60 seconds, your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 🏛️ Institutional Credit & Affiliation

- **Institution**: S.V.A. Govt. Degree College (Men), Srikalahasti, Tirupati District, Andhra Pradesh, India.
- **Department**: Department of Physics.
- **Course**: Course 7 — Applied Optics (Semester-III, Physics Major, Curriculum 2026-27).
- **Official YouTube Channel**: [The Competitive Edge](https://www.youtube.com/@TheCompetitiveEdge-b4z) — Physics & Competitive Examination Tutorials.
