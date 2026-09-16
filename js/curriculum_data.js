/**
 * Applied-Optics-SVAGDC: Complete Structured Curriculum Repository
 * Course 7: Applied Optics (Semester-III, Physics Major 2026-27)
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DATA = {
  "tracks": [
    {
      "id": "track-unit1",
      "title": "Unit 1: Geometrical Optics & Matrices",
      "icon": "fa-solid fa-compass-drafting"
    },
    {
      "id": "track-unit2",
      "title": "Unit 2: Aberrations in Optical Systems",
      "icon": "fa-solid fa-bullseye"
    },
    {
      "id": "track-unit3",
      "title": "Unit 3: Lasers & Quantum Optics",
      "icon": "fa-solid fa-bolt-lightning"
    },
    {
      "id": "track-unit4",
      "title": "Unit 4: Fiber Optics & Holography",
      "icon": "fa-solid fa-wave-square"
    },
    {
      "id": "track-unit5",
      "title": "Unit 5: Optical Instruments & Telescopes",
      "icon": "fa-solid fa-microscope"
    },
    {
      "id": "track-practicals",
      "title": "Practical Lab Experiments",
      "icon": "fa-solid fa-flask-vial"
    }
  ],
  "categories": [
    {
      "id": "cat-unit1",
      "title": "Unit 1: Geometrical Optics & Matrices",
      "track": "track-unit1",
      "icon": "fa-solid fa-compass-drafting",
      "topics": [
        "optics-intro",
        "ray-optics-assumptions-fermat",
        "matrix-methods-translation-refraction",
        "reflection-system-matrix",
        "thick-thin-lens-matrix",
        "two-lens-combinations",
        "ramsden-eyepiece",
        "huygens-eyepiece",
        "unit1-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit2",
      "title": "Unit 2: Aberrations & Achromatism",
      "track": "track-unit2",
      "icon": "fa-solid fa-bullseye",
      "topics": [
        "fresnel-reflection-refraction",
        "monochromatic-aberrations-intro",
        "spherical-aberration-minimization",
        "coma-astigmatism",
        "curvature-field-distortion",
        "chromatic-aberration-longitudinal-lateral",
        "achromatic-combinations",
        "unit2-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit3",
      "title": "Unit 3: Lasers & Quantum Optics",
      "track": "track-unit3",
      "icon": "fa-solid fa-bolt-lightning",
      "topics": [
        "laser-fundamentals-coherence",
        "absorption-spontaneous-stimulated-emission",
        "population-inversion-pumping",
        "einstein-coefficients-relations",
        "he-ne-laser",
        "ruby-laser",
        "semiconductor-laser",
        "laser-applications-industry-medicine",
        "unit3-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit4",
      "title": "Unit 4: Fiber Optics & Holography",
      "track": "track-unit4",
      "icon": "fa-solid fa-wave-square",
      "topics": [
        "optical-fiber-fundamentals-tir",
        "acceptance-angle-cone-na",
        "types-of-optical-fibers",
        "signal-attenuation-mechanisms",
        "optical-transmission-windows",
        "fiber-optic-applications-sensors",
        "holography-principles-recording-reconstruction",
        "gabor-hologram-limitations-off-axis",
        "holography-applications",
        "unit4-activities-rubrics"
      ]
    },
    {
      "id": "cat-unit5",
      "title": "Unit 5: Instruments & Telescopes",
      "track": "track-unit5",
      "icon": "fa-solid fa-microscope",
      "topics": [
        "compound-microscope",
        "confocal-microscope",
        "electron-microscopy-sem",
        "microscopy-comparative-analysis",
        "optical-telescopes",
        "radio-telescopes",
        "solar-telescopes",
        "ir-uv-telescopes",
        "unit5-activities-rubrics"
      ]
    },
    {
      "id": "cat-practicals-part1",
      "title": "Labs Part 1: Laser, Grating & Resolving (Ex 1-5)",
      "track": "track-practicals",
      "icon": "fa-solid fa-flask",
      "topics": [
        "lab-01-laser-wavelength-grating",
        "lab-02-refractive-index-hollow-prism",
        "lab-03-resolving-power-telescope",
        "lab-04-resolving-power-grating",
        "lab-05-spectrometer-id-curve"
      ]
    },
    {
      "id": "cat-practicals-part2",
      "title": "Labs Part 2: Fibers & System Matrices (Ex 6-10)",
      "track": "track-practicals",
      "icon": "fa-solid fa-sliders",
      "topics": [
        "lab-06-laser-reflection-grating-scale",
        "lab-07-fiber-numerical-aperture",
        "lab-08-rabi-oscillations-simulation",
        "lab-09-two-lens-power-pairs-plot",
        "lab-10-thick-thin-lens-matrix-focal"
      ]
    },
    {
      "id": "cat-practicals-part3",
      "title": "Labs Part 3: Polarization & Wave Optics (Ex 11-16)",
      "track": "track-practicals",
      "icon": "fa-solid fa-vial-circle-check",
      "topics": [
        "lab-11-achromatic-lens-combinations",
        "lab-12-laser-beam-divergence-spot-size",
        "lab-13-malus-law-polarization",
        "lab-14-circular-aperture-airy-disk",
        "lab-15-youngs-double-slit-laser",
        "lab-16-optical-fiber-bending-losses"
      ]
    }
  ],
  "topics": {
    "optics-intro": {
      "id": "optics-intro",
      "title": "Course Overview & Academic Framework",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "5 min read",
      "lead": "Welcome to Course 7: Applied Optics (Semester-III, Physics Major). Explore the curricular objectives, learning competencies, credit structure, textbooks, and assessment guidelines.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-graduation-cap\"></i> Course Overview & Institutional Framework</h2>\n            <p><strong>Course Code & Title:</strong> Semester-III, Course 7: Applied Optics (Physics Major)<br>\n            <strong>Academic Department:</strong> Department of Physics, S.V.A. Govt. Degree College, Srikalahasti<br>\n            <strong>Instructional Scheme:</strong> Theory: 3 Credits (3 Hours/Week) | Practical Lab: 1 Credit (2 Hours/Week)</p>\n            \n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Curricular Vision & Academic Alignment</div>\n                    <div class=\"callout-text\">Applied Optics bridges classical geometrical ray optics and contemporary photonics. It equips undergraduate physics majors with mathematical matrix formulations, aberration analysis, laser physics, optical fiber communication, holography, and cutting-edge optical and electron instrumentation.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Course Learning Outcomes (COs)</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Outcome ID</th><th>Competency Statement</th><th>Cognitive Domain</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>CO 1</strong></td><td>Master geometrical optics via $2\\times 2$ ray transfer matrices (ABCD) and apply them to thick/thin lens combinations and eyepieces.</td><td>Understand &amp; Apply</td></tr>\n                        <tr><td><strong>CO 2</strong></td><td>Evaluate Fresnel reflection/refraction, diagnose monochromatic Seidel aberrations and chromatic aberrations, and design achromatic systems.</td><td>Analyze &amp; Evaluate</td></tr>\n                        <tr><td><strong>CO 3</strong></td><td>Comprehend stimulated emission, Einstein coefficients, population inversion, and operational dynamics of He-Ne, Ruby, and semiconductor lasers.</td><td>Understand &amp; Analyze</td></tr>\n                        <tr><td><strong>CO 4</strong></td><td>Derive fiber acceptance angle, numerical aperture (NA), attenuation, and formulate wavefront reconstruction in holography.</td><td>Apply &amp; Evaluate</td></tr>\n                        <tr><td><strong>CO 5</strong></td><td>Examine resolution limits and operational principles of Compound, Confocal, and Scanning Electron Microscopes (SEM), and multi-wavelength telescopes.</td><td>Analyze &amp; Synthesize</td></tr>\n                        <tr><td><strong>CO 6</strong></td><td>Conduct hands-on experimental measurements with lasers, gratings, hollow prisms, optical fibers, and computational simulations.</td><td>Practical Skills</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-sitemap\"></i> Applied Optics Curriculum Architecture</div>\n                <span class=\"optics-diagram-badge\">Syllabus Roadmap</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"10\" y=\"20\" width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"80\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">UNIT 1</text>\n                    <text x=\"80\" y=\"75\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Geometrical</text>\n                    <text x=\"80\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Optics &amp; Matrices</text>\n\n                    <rect x=\"170\" y=\"20\" width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                    <text x=\"240\" y=\"55\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">UNIT 2</text>\n                    <text x=\"240\" y=\"75\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Optical</text>\n                    <text x=\"240\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Aberrations</text>\n\n                    <rect x=\"330\" y=\"20\" width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <text x=\"400\" y=\"55\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">UNIT 3</text>\n                    <text x=\"400\" y=\"75\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Lasers &amp;</text>\n                    <text x=\"400\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Quantum Optics</text>\n\n                    <rect x=\"490\" y=\"20\" width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"560\" y=\"55\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">UNIT 4</text>\n                    <text x=\"560\" y=\"75\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Optical Fibers &amp;</text>\n                    <text x=\"560\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Holography</text>\n\n                    <rect x=\"650\" y=\"20\" width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n                    <text x=\"720\" y=\"55\" fill=\"#a855f7\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">UNIT 5</text>\n                    <text x=\"720\" y=\"75\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Optical &amp; SEM</text>\n                    <text x=\"720\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Instruments</text>\n\n                    <!-- Connecting Bus to Practical Labs -->\n                    <path d=\"M 80 110 L 80 150 L 400 150 M 240 110 L 240 150 M 400 110 L 400 150 M 560 110 L 560 150 M 720 110 L 720 150 L 400 150 L 400 170\" stroke=\"#64748b\" stroke-width=\"2\" fill=\"none\"/>\n                    \n                    <rect x=\"220\" y=\"170\" width=\"360\" height=\"50\" rx=\"8\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"400\" y=\"200\" fill=\"#a7f3d0\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">16 HANDS-ON PRACTICAL LAB EXPERIMENTS &amp; SIMULATIONS</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.1:</strong> Five theoretical core modules integrated with 16 practical laboratory experiments.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Prescribed Reference Literature</h2>\n            <ul>\n                <li><strong>B.Sc. Physics, Vol. 2:</strong> Telugu Akademi, Hyderabad.</li>\n                <li><strong>Optics: Principles and Applications:</strong> Kailash K. Sharma, Academic Press.</li>\n                <li><strong>Lasers: Theory and Applications:</strong> K. Thyagarajan &amp; A. K. Ghatak, 2nd Edition.</li>\n                <li><strong>Introduction to Fiber Optics:</strong> A. K. Ghatak &amp; K. Thyagarajan, Cambridge University Press.</li>\n                <li><strong>An Introduction to Lasers:</strong> M. N. Avadhanulu, S. Chand &amp; Company.</li>\n                <li><strong>Quantum Optics: An Introduction:</strong> Mark Fox, Oxford University Press.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the total credit weighting allocated to Course 7 (Applied Optics)?",
          "options": [
            "2 Theory + 2 Practical",
            "3 Theory + 1 Practical",
            "4 Theory + 0 Practical",
            "3 Theory + 2 Practical"
          ],
          "correctIndex": 1,
          "explanation": "Applied Optics carries 4 credits total: 3 credits for Theory (3 hours/week) and 1 credit for Practical Lab (2 hours/week)."
        },
        {
          "type": "multiple-choice",
          "question": "Which mathematical technique is utilized in Unit 1 to analyze paraxial ray propagation through multi-element optical systems?",
          "options": [
            "Differential Calculus",
            "2x2 ABCD Transfer Matrices",
            "Fourier Transform Spectroscopy",
            "Variational Finite Element Method"
          ],
          "correctIndex": 1,
          "explanation": "Unit 1 introduces $2\\times 2$ ray transfer matrices (ABCD matrices) for translating, reflecting, and refracting paraxial rays."
        },
        {
          "type": "multiple-choice",
          "question": "What minimum number of practical lab experiments must be performed and recorded by students?",
          "options": [
            "4 experiments",
            "6 experiments",
            "10 experiments",
            "All 16 experiments"
          ],
          "correctIndex": 1,
          "explanation": "As prescribed in the university syllabus, a minimum of 6 experiments must be conducted and formally recorded."
        }
      ]
    },
    "ray-optics-assumptions-fermat": {
      "id": "ray-optics-assumptions-fermat",
      "title": "Ray Optics Assumptions & Fermat's Principle",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "7 min read",
      "lead": "Understand the paraxial ray approximation, Snell's small-angle laws, and Pierre de Fermat's revolutionary Principle of Least Time governing reflection and refraction.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Geometrical Ray Optics &amp; The Paraxial Approximation</h2>\n            <p>Geometrical optics represents the short-wavelength limit ($\\lambda \\to 0$) of electromagnetic wave optics. Light is treated as propagating along rectilinear trajectories termed <strong>light rays</strong>, perpendicular to optical wavefronts.</p>\n\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Paraxial (Gaussian) Approximation</div>\n                    <div class=\"callout-text\">Rays make very small inclinations $\\alpha$ with the central optical axis such that:\n                    $$\\sin \\alpha \\approx \\tan \\alpha \\approx \\alpha, \\quad \\cos \\alpha \\approx 1 - \\frac{\\alpha^2}{2} \\approx 1$$\n                    Under this first-order approximation, Snell's law at an interface simplifies from $n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$ to linear form: $n_1 \\theta_1 = n_2 \\theta_2$.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Fermat's Principle of Least Time</h2>\n            <p>Formulated by Pierre de Fermat in 1662, the principle states that <em>the actual path taken by a light ray traversing between two points is the path that requires an extremum (minimum, maximum, or stationary) optical path length (OPL) and transit time</em>.</p>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-square-root-variable\"></i> Optical Path Length (OPL) Formulation</div>\n                <div class=\"formula-math-display\">\n                    OPL = \\int_{A}^{B} n(s)\\, ds, \\quad \\text{Transit Time } t = \\frac{1}{c}\\int_{A}^{B} n(s)\\, ds\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n(s)</span>: Local refractive index</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">ds</span>: Infinitesimal arc length</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">c</span>: Vacuum speed of light</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Fermat's Principle: Reflection and Refraction</div>\n                <span class=\"optics-diagram-badge\">Ray Tracing</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 300\" width=\"800\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Law of Reflection -->\n                    <g transform=\"translate(40, 20)\">\n                        <text x=\"140\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Law of Reflection: θ₁ = θ₁'</text>\n                        <!-- Mirror Surface -->\n                        <line x1=\"10\" y1=\"180\" x2=\"270\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n                        <line x1=\"140\" y1=\"60\" x2=\"140\" y2=\"220\" stroke=\"#64748b\" stroke-dasharray=\"5,4\" stroke-width=\"1.5\"/>\n                        <text x=\"145\" y=\"75\" fill=\"#94a3b8\" font-size=\"11\">Normal</text>\n                        \n                        <!-- Incident Ray -->\n                        <line x1=\"40\" y1=\"80\" x2=\"140\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <circle cx=\"40\" cy=\"80\" r=\"4\" fill=\"#38bdf8\"/>\n                        <text x=\"25\" y=\"75\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"bold\">A (h₁)</text>\n                        \n                        <!-- Reflected Ray -->\n                        <line x1=\"140\" y1=\"180\" x2=\"240\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <circle cx=\"240\" cy=\"80\" r=\"4\" fill=\"#38bdf8\"/>\n                        <text x=\"245\" y=\"75\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"bold\">B (h₂)</text>\n                        \n                        <!-- Angle Arcs -->\n                        <path d=\"M 125 155 A 25 25 0 0 1 140 155\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"120\" y=\"145\" fill=\"#fbbf24\" font-size=\"11\">θ₁</text>\n                        <path d=\"M 140 155 A 25 25 0 0 1 155 155\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"155\" y=\"145\" fill=\"#fbbf24\" font-size=\"11\">θ₁'</text>\n                        <text x=\"140\" y=\"205\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Point of incidence P(x)</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"280\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Law of Refraction (Snell's Law) -->\n                    <g transform=\"translate(420, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</text>\n                        <!-- Interface -->\n                        <rect x=\"10\" y=\"140\" width=\"320\" height=\"120\" fill=\"rgba(56, 189, 248, 0.08)\"/>\n                        <line x1=\"10\" y1=\"140\" x2=\"330\" y2=\"140\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <text x=\"290\" y=\"125\" fill=\"#94a3b8\" font-size=\"11\">Medium 1 (n₁)</text>\n                        <text x=\"290\" y=\"165\" fill=\"#38bdf8\" font-size=\"11\">Medium 2 (n₂)</text>\n\n                        <!-- Normal Line -->\n                        <line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"260\" stroke=\"#64748b\" stroke-dasharray=\"5,4\" stroke-width=\"1.5\"/>\n                        <text x=\"165\" y=\"55\" fill=\"#94a3b8\" font-size=\"11\">Normal</text>\n\n                        <!-- Ray from A to P -->\n                        <line x1=\"50\" y1=\"60\" x2=\"160\" y2=\"140\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                        <circle cx=\"50\" cy=\"60\" r=\"4\" fill=\"#10b981\"/>\n                        <text x=\"35\" y=\"55\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"bold\">A (0, h₁)</text>\n\n                        <!-- Refracted Ray P to B -->\n                        <line x1=\"160\" y1=\"140\" x2=\"250\" y2=\"250\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                        <circle cx=\"250\" cy=\"250\" r=\"4\" fill=\"#10b981\"/>\n                        <text x=\"255\" y=\"255\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"bold\">B (d, -h₂)</text>\n\n                        <!-- Incident and Refracted Angles -->\n                        <path d=\"M 145 115 A 25 25 0 0 1 160 115\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"140\" y=\"105\" fill=\"#fbbf24\" font-size=\"11\">θ₁</text>\n                        <path d=\"M 160 170 A 30 30 0 0 0 175 165\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"175\" y=\"185\" fill=\"#fbbf24\" font-size=\"11\">θ₂</text>\n                        <text x=\"160\" y=\"132\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">P(x, 0)</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.2:</strong> Fermat's Principle geometric derivations. Setting $d(OPL)/dx = 0$ yields $\\theta_1 = \\theta_1'$ for reflection and $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$ for refraction.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Derivation of Snell's Law via Fermat's Principle</h2>\n            <p>Consider a light ray traveling from point $A(0, h_1)$ in medium $n_1$ to point $B(d, -h_2)$ in medium $n_2$, intersecting the boundary at point $P(x, 0)$:</p>\n            <ol>\n                <li>The Optical Path Length is:\n                $$OPL = n_1 \\sqrt{x^2 + h_1^2} + n_2 \\sqrt{(d - x)^2 + h_2^2}$$</li>\n                <li>According to Fermat's principle, $\\frac{d(OPL)}{dx} = 0$:\n                $$\\frac{d(OPL)}{dx} = n_1 \\frac{x}{\\sqrt{x^2 + h_1^2}} - n_2 \\frac{d - x}{\\sqrt{(d - x)^2 + h_2^2}} = 0$$</li>\n                <li>Recognizing that $\\sin \\theta_1 = \\frac{x}{\\sqrt{x^2 + h_1^2}}$ and $\\sin \\theta_2 = \\frac{d - x}{\\sqrt{(d - x)^2 + h_2^2}}$:\n                $$n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2 \\quad \\text{(Snell's Law)}$$</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Under the paraxial (Gaussian) approximation, how is the angle of ray inclination α simplified?",
          "options": [
            "sin α ≈ α, cos α ≈ 1, tan α ≈ α",
            "sin α ≈ 1, cos α ≈ 0",
            "sin α ≈ α², tan α ≈ α/2",
            "sin α ≈ 0, cos α ≈ α"
          ],
          "correctIndex": 0,
          "explanation": "In paraxial optics, small angles allow replacing sin α and tan α by α in radians, and cos α by 1."
        },
        {
          "type": "multiple-choice",
          "question": "What mathematical condition represents Fermat's principle of stationary optical path length?",
          "options": [
            "d(OPL)/dx = 0",
            "d(OPL)/dx = c",
            "OPL = 0",
            "d²(OPL)/dx² = 0 always"
          ],
          "correctIndex": 0,
          "explanation": "The first derivative of the optical path length with respect to the coordinate parameter vanishes: d(OPL)/dx = 0."
        },
        {
          "type": "multiple-choice",
          "question": "If a light ray passes from air (n = 1.0) into glass (n = 1.5) at an incident angle θ₁ = 30°, what is sin θ₂?",
          "options": [
            "0.333",
            "0.500",
            "0.750",
            "0.250"
          ],
          "correctIndex": 0,
          "explanation": "By Snell's Law: 1.0 * sin(30°) = 1.5 * sin θ₂ => sin θ₂ = 0.5 / 1.5 = 1/3 ≈ 0.333."
        }
      ]
    },
    "matrix-methods-translation-refraction": {
      "id": "matrix-methods-translation-refraction",
      "title": "Paraxial Matrix Methods: Translation & Refraction",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Discover how paraxial ray propagation is cast into elegant 2x2 matrix transformations. Master the ray coordinate vector, translation matrix T, and refraction matrix R.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Ray Vector Representation</h2>\n            <p>In a rotationally symmetric optical system, any paraxial ray at a given reference plane $z$ is uniquely characterized by two coordinates packed into a column vector:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-vector-square\"></i> Ray Coordinate Vector</div>\n                <div class=\"formula-math-display\">\n                    \\mathbf{r} = \\begin{pmatrix} y \\\\ \\alpha \\end{pmatrix} \\quad \\text{or reduced angle} \\quad \\mathbf{r}' = \\begin{pmatrix} y \\\\ n\\alpha \\end{pmatrix}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">y</span>: Distance of ray above optical axis</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α</span>: Ray slope angle in radians (α ≈ dy/dz)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n</span>: Refractive index of surrounding medium</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>1. Translation Matrix ($T$)</h2>\n            <p>When a ray propagates through a distance $d$ in a homogeneous medium of refractive index $n$ without encountering any boundary:</p>\n            <ul>\n                <li>The angle does not change: $\\alpha_2 = \\alpha_1$</li>\n                <li>The height changes: $y_2 = y_1 + d \\tan \\alpha_1 \\approx y_1 + d\\alpha_1$</li>\n            </ul>\n            <p>In matrix notation:</p>\n            $$\\begin{pmatrix} y_2 \\\\ \\alpha_2 \\end{pmatrix} = \\begin{pmatrix} 1 & d \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ \\alpha_1 \\end{pmatrix} \\implies \\mathbf{T} = \\begin{pmatrix} 1 & d \\\\ 0 & 1 \\end{pmatrix}, \\quad \\det(\\mathbf{T}) = 1$$\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-arrows-split-up-and-left\"></i> Translation and Refraction Ray Geometries</div>\n                <span class=\"optics-diagram-badge\">Coordinate Geometry</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Translation Matrix -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Translation Through Distance d</text>\n                        <line x1=\"20\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n                        <text x=\"25\" y=\"150\" fill=\"#94a3b8\" font-size=\"11\">Axis</text>\n\n                        <!-- Plane 1 -->\n                        <line x1=\"70\" y1=\"50\" x2=\"70\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n                        <text x=\"70\" y=\"245\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Plane 1</text>\n                        <!-- Plane 2 -->\n                        <line x1=\"230\" y1=\"50\" x2=\"230\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n                        <text x=\"230\" y=\"245\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Plane 2</text>\n\n                        <!-- Ray Path -->\n                        <line x1=\"70\" y1=\"110\" x2=\"230\" y2=\"70\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <circle cx=\"70\" cy=\"110\" r=\"4\" fill=\"#38bdf8\"/>\n                        <circle cx=\"230\" cy=\"70\" r=\"4\" fill=\"#38bdf8\"/>\n\n                        <!-- Heights y1 and y2 -->\n                        <line x1=\"60\" y1=\"160\" x2=\"60\" y2=\"110\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"50\" y=\"135\" fill=\"#fbbf24\" font-size=\"11\">y₁</text>\n                        <line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"70\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"245\" y=\"115\" fill=\"#fbbf24\" font-size=\"11\">y₂</text>\n\n                        <!-- Angle alpha -->\n                        <line x1=\"70\" y1=\"110\" x2=\"140\" y2=\"110\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                        <text x=\"120\" y=\"105\" fill=\"#38bdf8\" font-size=\"11\">α₁ = α₂</text>\n\n                        <!-- Distance d -->\n                        <line x1=\"70\" y1=\"210\" x2=\"230\" y2=\"210\" stroke=\"#e2e8f0\" stroke-width=\"1.2\"/>\n                        <text x=\"150\" y=\"205\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Distance d</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Refraction Matrix -->\n                    <g transform=\"translate(400, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Refraction at Spherical Surface (R)</text>\n                        <line x1=\"20\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n                        <text x=\"25\" y=\"150\" fill=\"#94a3b8\" font-size=\"11\">Axis</text>\n\n                        <!-- Curved Surface -->\n                        <path d=\"M 120 50 A 150 150 0 0 1 120 230\" stroke=\"#10b981\" stroke-width=\"3\" fill=\"none\"/>\n                        <path d=\"M 120 50 A 150 150 0 0 1 120 230 L 320 230 L 320 50 Z\" fill=\"rgba(16, 185, 129, 0.08)\"/>\n                        <text x=\"70\" y=\"60\" fill=\"#94a3b8\" font-size=\"11\">Medium n₁</text>\n                        <text x=\"200\" y=\"60\" fill=\"#10b981\" font-size=\"11\">Medium n₂</text>\n\n                        <!-- Center of Curvature C -->\n                        <circle cx=\"270\" cy=\"160\" r=\"3.5\" fill=\"#fbbf24\"/>\n                        <text x=\"265\" y=\"178\" fill=\"#fbbf24\" font-size=\"11\">C</text>\n\n                        <!-- Incident Ray -->\n                        <line x1=\"30\" y1=\"100\" x2=\"135\" y2=\"100\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <!-- Refracted Ray -->\n                        <line x1=\"135\" y1=\"100\" x2=\"290\" y2=\"160\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                        <circle cx=\"135\" cy=\"100\" r=\"4\" fill=\"#fbbf24\"/>\n                        <text x=\"110\" y=\"95\" fill=\"#fbbf24\" font-size=\"11\">y₁ = y₂</text>\n\n                        <!-- Normal Line from C through point of incidence -->\n                        <line x1=\"135\" y1=\"100\" x2=\"270\" y2=\"160\" stroke=\"#64748b\" stroke-dasharray=\"4,3\"/>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.3:</strong> Ray coordinate transformations for pure translation across free space $d$ and refraction at a spherical dielectric boundary of curvature radius $R$.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Refraction Matrix ($R$)</h2>\n            <p>At a curved spherical interface between media of refractive indices $n_1$ and $n_2$ with radius of curvature $R$:</p>\n            <ul>\n                <li>The height does not change across an infinitesimally thin boundary: $y_2 = y_1$</li>\n                <li>Snell's paraxial law gives: $n_1(\\alpha_1 + y_1/R) = n_2(\\alpha_2 + y_1/R)$</li>\n                <li>Rearranging for $\\alpha_2$: $\\alpha_2 = -\\left(\\frac{n_2 - n_1}{n_2 R}\\right) y_1 + \\left(\\frac{n_1}{n_2}\\right) \\alpha_1$</li>\n            </ul>\n            <p>Defining the surface optical power as $P = \\frac{n_2 - n_1}{R}$:</p>\n            $$\\begin{pmatrix} y_2 \\\\ \\alpha_2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{P}{n_2} & \\frac{n_1}{n_2} \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ \\alpha_1 \\end{pmatrix}$$\n            <p>If using reduced angles $\\hat{\\alpha} = n\\alpha$, the refraction matrix becomes symmetric with unit determinant:</p>\n            $$\\begin{pmatrix} y_2 \\\\ n_2 \\alpha_2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -P & 1 \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ n_1 \\alpha_1 \\end{pmatrix}, \\quad \\det(\\mathbf{R}) = 1$$\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the determinant of the paraxial translation matrix T for free-space propagation?",
          "options": [
            "0",
            "1",
            "d",
            "n₁ / n₂"
          ],
          "correctIndex": 1,
          "explanation": "For translation matrix T = [1, d; 0, 1], det(T) = (1)(1) - (d)(0) = 1."
        },
        {
          "type": "multiple-choice",
          "question": "At a spherical refracting boundary, what property remains strictly unchanged as the ray crosses the interface?",
          "options": [
            "Ray inclination angle α",
            "Ray height y",
            "Wavelength λ",
            "Wave velocity v"
          ],
          "correctIndex": 1,
          "explanation": "Because the refraction boundary is treated as infinitesimally thin, the transverse ray height y₂ = y₁."
        },
        {
          "type": "multiple-choice",
          "question": "For a plane refracting interface (R = ∞), what does the optical surface power P = (n₂ - n₁) / R become?",
          "options": [
            "Infinity",
            "Zero",
            "n₂ - n₁",
            "1.0"
          ],
          "correctIndex": 1,
          "explanation": "When R approaches infinity for a flat/plane interface, P = 0, so the refraction matrix reduces to [1, 0; 0, n₁/n₂]."
        }
      ]
    },
    "reflection-system-matrix": {
      "id": "reflection-system-matrix",
      "title": "Reflection Matrix & The ABCD System Matrix",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Formulate paraxial reflection at curved and plane mirrors, cascade elementary optical matrices into the master ABCD system matrix, and interpret its four parameters.",
      "toolType": "matrix-bench",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Reflection Matrix ($R_{ref}$)</h2>\n            <p>When a paraxial ray reflects from a spherical mirror of radius of curvature $R$ (concave: $R < 0$, convex: $R > 0$ under Cartesian convention):</p>\n            <ul>\n                <li>Ray height remains unchanged: $y_2 = y_1$</li>\n                <li>Law of reflection gives the emergent ray angle: $\\alpha_2 = \\frac{2}{R} y_1 - \\alpha_1$</li>\n                <li>In matrix form with focal length $f = -R/2$:</li>\n            </ul>\n            $$\\mathbf{R}_{ref} = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{2}{R} & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{1}{f} & 1 \\end{pmatrix}$$\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Master ABCD System Matrix</h2>\n            <p>An arbitrary optical train composed of $N$ successive refractive surfaces, lenses, and transit spaces has an overall transfer matrix given by reverse matrix multiplication:</p>\n            $$\\mathbf{M}_{sys} = \\mathbf{M}_N \\mathbf{M}_{N-1} \\dots \\mathbf{M}_2 \\mathbf{M}_1 = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix}$$\n            <p>The emergent coordinates $(y_{out}, \\alpha_{out})$ relate to input coordinates $(y_{in}, \\alpha_{in})$ by:</p>\n            $$\\begin{pmatrix} y_{out} \\\\ \\alpha_{out} \\end{pmatrix} = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} \\begin{pmatrix} y_{in} \\\\ \\alpha_{in} \\end{pmatrix} \\implies \\begin{aligned} y_{out} &= A y_{in} + B \\alpha_{in} \\\\ \\alpha_{out} &= C y_{in} + D \\alpha_{in} \\end{aligned}$$\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-layer-group\"></i> Optical System Block Diagram &amp; ABCD Transfer</div>\n                <span class=\"optics-diagram-badge\">System Architecture</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"120\" x2=\"780\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n                    \n                    <!-- Input Reference Plane -->\n                    <line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"210\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"160\" y=\"225\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Input Plane (RP₁)</text>\n                    \n                    <!-- System Blackbox -->\n                    <rect x=\"250\" y=\"40\" width=\"300\" height=\"160\" rx=\"10\" fill=\"#1e293b\" stroke=\"#818cf8\" stroke-width=\"2.5\"/>\n                    <text x=\"400\" y=\"85\" fill=\"#818cf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">OPTICAL SYSTEM</text>\n                    <text x=\"400\" y=\"115\" fill=\"#e2e8f0\" font-size=\"16\" font-family=\"JetBrains Mono\" text-anchor=\"middle\">M = [ A  B ; C  D ]</text>\n                    <text x=\"400\" y=\"145\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">det(M) = AD - BC = n₁ / n₂ = 1</text>\n                    \n                    <!-- Output Reference Plane -->\n                    <line x1=\"640\" y1=\"30\" x2=\"640\" y2=\"210\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"640\" y=\"225\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Output Plane (RP₂)</text>\n                    \n                    <!-- Input Ray -->\n                    <line x1=\"60\" y1=\"70\" x2=\"160\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                    <circle cx=\"160\" cy=\"90\" r=\"4\" fill=\"#f43f5e\"/>\n                    <text x=\"110\" y=\"65\" fill=\"#f43f5e\" font-size=\"11\">Ray (y_in, α_in)</text>\n\n                    <!-- Arrow through box -->\n                    <line x1=\"160\" y1=\"90\" x2=\"250\" y2=\"105\" stroke=\"#f43f5e\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n                    <line x1=\"550\" y1=\"135\" x2=\"640\" y2=\"150\" stroke=\"#f43f5e\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n\n                    <!-- Output Ray -->\n                    <line x1=\"640\" y1=\"150\" x2=\"740\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                    <circle cx=\"640\" cy=\"150\" r=\"4\" fill=\"#f43f5e\"/>\n                    <text x=\"680\" y=\"140\" fill=\"#f43f5e\" font-size=\"11\">Ray (y_out, α_out)</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.4:</strong> General optical system transfer matrix $\\mathbf{M}$ operating on input ray vectors.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Physical Significance of Matrix Elements A, B, C, D</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Element</th><th>Mathematical Definition</th><th>Physical Meaning</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>A</strong></td><td>$A = \\left(\\frac{y_{out}}{y_{in}}\\right)_{\\alpha_{in}=0}$</td><td>Spatial magnification for parallel input rays. If $A = 0$, input parallel rays converge to a focus on the output plane.</td></tr>\n                        <tr><td><strong>B</strong></td><td>$B = \\left(\\frac{y_{out}}{\\alpha_{in}}\\right)_{y_{in}=0}$</td><td>If $B = 0$, all rays departing from a point on the optical axis ($y_{in}=0$) converge to a conjugate focus ($y_{out}=0$) on the output plane (imaging condition).</td></tr>\n                        <tr><td><strong>C</strong></td><td>$C = \\left(\\frac{\\alpha_{out}}{y_{in}}\\right)_{\\alpha_{in}=0}$</td><td>Proportional to negative optical power of system ($C = -1/F$). If $C = 0$, the system is afocal (telescopic).</td></tr>\n                        <tr><td><strong>D</strong></td><td>$D = \\left(\\frac{\\alpha_{out}}{\\alpha_{in}}\\right)_{y_{in}=0}$</td><td>Angular magnification of rays passing through the center of the input plane.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the condition on the ABCD system matrix elements for the output plane to be the optical conjugate (image plane) of the input plane?",
          "options": [
            "A = 0",
            "B = 0",
            "C = 0",
            "D = 0"
          ],
          "correctIndex": 1,
          "explanation": "When B = 0, y_out = A * y_in independent of the launch angle α_in, which means every ray originating at y_in focuses at the same image point y_out."
        },
        {
          "type": "multiple-choice",
          "question": "How is the equivalent focal length F of an optical system related to matrix element C?",
          "options": [
            "F = B",
            "F = -1 / C",
            "F = A / D",
            "F = C²"
          ],
          "correctIndex": 1,
          "explanation": "The optical power of the system is P = -C, hence the equivalent focal length is F = -1/C."
        },
        {
          "type": "multiple-choice",
          "question": "If an optical system has C = 0, what kind of optical system is it?",
          "options": [
            "Microscope",
            "Afocal (Telescopic) system",
            "High-power convex lens",
            "Immersion objective"
          ],
          "correctIndex": 1,
          "explanation": "When C = 0, the system optical power is zero (F = ∞), meaning parallel input rays emerge parallel (an afocal telescopic system)."
        }
      ]
    },
    "thick-thin-lens-matrix": {
      "id": "thick-thin-lens-matrix",
      "title": "Thick & Thin Lens Matrix Formulations",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Derive the transfer matrix of a thick lens by cascading refraction and translation matrices. Identify cardinal points (principal planes, nodal points, focal points) and deduce the thin lens formula.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Derivation of the Thick Lens System Matrix</h2>\n            <p>A thick lens of central thickness $t$ and refractive index $n$ bounded by air ($n=1$) consists of three successive operations:</p>\n            <ol>\n                <li>Refraction at the first surface with radius $R_1$ (Power $P_1 = \\frac{n-1}{R_1}$):\n                $$\\mathbf{R}_1 = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{P_1}{n} & \\frac{1}{n} \\end{pmatrix}$$</li>\n                <li>Translation through thickness $t$ inside glass ($n$):\n                $$\\mathbf{T} = \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$$</li>\n                <li>Refraction at the second surface with radius $R_2$ (Power $P_2 = \\frac{1-n}{R_2}$):\n                $$\\mathbf{R}_2 = \\begin{pmatrix} 1 & 0 \\\\ -P_2 & n \\end{pmatrix}$$</li>\n            </ol>\n            <p>Using reduced angles, the system matrix $\\mathbf{M}_{thick} = \\mathbf{R}_2 \\mathbf{T} \\mathbf{R}_1$ evaluates to:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-glasses\"></i> Thick Lens System Matrix</div>\n                <div class=\"formula-math-display\">\n                    \\mathbf{M}_{thick} = \\begin{pmatrix} 1 - \\frac{t}{n}P_1 & \\frac{t}{n} \\\\ -P_{thick} & 1 - \\frac{t}{n}P_2 \\end{pmatrix}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P_thick</span>: $P_1 + P_2 - \\frac{t}{n}P_1 P_2$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">1/F</span>: $\\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{t}{n f_1 f_2}$</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-shapes\"></i> Thick Lens Cardinal Points &amp; Principal Planes</div>\n                <span class=\"optics-diagram-badge\">Anatomy of Thick Lens</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"140\" x2=\"780\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n                    <text x=\"30\" y=\"130\" fill=\"#94a3b8\" font-size=\"11\">Axis</text>\n\n                    <!-- Lens Body -->\n                    <path d=\"M 330 40 A 240 240 0 0 1 330 240 L 450 240 A 240 240 0 0 1 450 40 Z\" fill=\"rgba(56, 189, 248, 0.16)\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                    <!-- Vertices V1 and V2 -->\n                    <circle cx=\"342\" cy=\"140\" r=\"3.5\" fill=\"#e2e8f0\"/>\n                    <text x=\"335\" y=\"158\" fill=\"#e2e8f0\" font-size=\"11\">V₁</text>\n                    <circle cx=\"438\" cy=\"140\" r=\"3.5\" fill=\"#e2e8f0\"/>\n                    <text x=\"442\" y=\"158\" fill=\"#e2e8f0\" font-size=\"11\">V₂</text>\n\n                    <!-- Thickness t -->\n                    <line x1=\"342\" y1=\"210\" x2=\"438\" y2=\"210\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                    <text x=\"390\" y=\"205\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Thickness t</text>\n\n                    <!-- Principal Planes H1 and H2 -->\n                    <line x1=\"365\" y1=\"30\" x2=\"365\" y2=\"250\" stroke=\"#a855f7\" stroke-dasharray=\"4,3\" stroke-width=\"2\"/>\n                    <circle cx=\"365\" cy=\"140\" r=\"4\" fill=\"#a855f7\"/>\n                    <text x=\"355\" y=\"25\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\">H₁</text>\n\n                    <line x1=\"415\" y1=\"30\" x2=\"415\" y2=\"250\" stroke=\"#a855f7\" stroke-dasharray=\"4,3\" stroke-width=\"2\"/>\n                    <circle cx=\"415\" cy=\"140\" r=\"4\" fill=\"#a855f7\"/>\n                    <text x=\"415\" y=\"25\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\">H₂</text>\n\n                    <!-- Focal Points F1 and F2 -->\n                    <circle cx=\"150\" cy=\"140\" r=\"4.5\" fill=\"#f43f5e\"/>\n                    <text x=\"145\" y=\"160\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">F₁</text>\n                    <circle cx=\"630\" cy=\"140\" r=\"4.5\" fill=\"#10b981\"/>\n                    <text x=\"625\" y=\"160\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">F₂</text>\n\n                    <!-- Equivalent Focal Lengths -->\n                    <line x1=\"415\" y1=\"100\" x2=\"630\" y2=\"100\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n                    <text x=\"520\" y=\"92\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Equivalent Focal Length F</text>\n\n                    <line x1=\"150\" y1=\"100\" x2=\"365\" y2=\"100\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n                    <text x=\"257\" y=\"92\" fill=\"#f43f5e\" font-size=\"11\" text-anchor=\"middle\">Equivalent Focal Length F</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.5:</strong> Thick lens cardinal points showing principal planes $H_1, H_2$, focal points $F_1, F_2$, and vertices $V_1, V_2$. All focal lengths are measured from the respective principal planes.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Thin Lens Limit ($t \\to 0$)</h2>\n            <p>Setting lens thickness $t = 0$ removes the internal translation distance ($t/n \\to 0$):</p>\n            $$\\mathbf{M}_{thin} = \\begin{pmatrix} 1 & 0 \\\\ -P & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{1}{f} & 1 \\end{pmatrix}$$\n            <p>Where the thin lens focal length is given by the <strong>Lens Maker's Formula</strong>:</p>\n            $$\\frac{1}{f} = (n - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$$\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "From which reference planes are the equivalent focal lengths of a thick lens measured?",
          "options": [
            "Lens front and back vertices V₁ and V₂",
            "Principal planes H₁ and H₂",
            "Center of the lens",
            "Nodal points only"
          ],
          "correctIndex": 1,
          "explanation": "In Gaussian thick lens theory, the true focal lengths F are measured from the first and second principal planes H₁ and H₂."
        },
        {
          "type": "multiple-choice",
          "question": "What is the equivalent focal length of a thin lens having R₁ = +20 cm, R₂ = -20 cm, and n = 1.5?",
          "options": [
            "+10 cm",
            "+20 cm",
            "+40 cm",
            "-20 cm"
          ],
          "correctIndex": 1,
          "explanation": "1/f = (1.5 - 1) * (1/20 - (-1/20)) = 0.5 * (2/20) = 0.5 * 0.1 = 0.05 cm⁻¹ => f = +20 cm."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the principal planes H₁ and H₂ in the thin lens limit as t approaches 0?",
          "options": [
            "They separate to infinity",
            "They coincide at the center of the thin lens",
            "They flip positions",
            "They become imaginary"
          ],
          "correctIndex": 1,
          "explanation": "As thickness t -> 0, both principal planes H₁ and H₂ converge to coincide at the pole of the thin lens."
        }
      ]
    },
    "two-lens-combinations": {
      "id": "two-lens-combinations",
      "title": "Two-Lens Combinations: Separated & In Contact",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "7 min read",
      "lead": "Formulate the equivalent optical matrix and focal length for two coaxial thin lenses separated by a finite distance d and in direct physical contact.",
      "toolType": "matrix-bench",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Two Lenses Separated by Distance $d$</h2>\n            <p>Consider two thin lenses $L_1$ and $L_2$ with focal lengths $f_1$ and $f_2$ separated along their common optical axis by distance $d$. The composite system matrix is:</p>\n            $$\\mathbf{M} = \\mathbf{L}_2 \\mathbf{T}(d) \\mathbf{L}_1 = \\begin{pmatrix} 1 & 0 \\\\ -\\frac{1}{f_2} & 1 \\end{pmatrix} \\begin{pmatrix} 1 & d \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ -\\frac{1}{f_1} & 1 \\end{pmatrix}$$\n            <p>Multiplying the matrices yields:</p>\n            $$\\mathbf{M} = \\begin{pmatrix} 1 - \\frac{d}{f_1} & d \\\\ -\\left( \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2} \\right) & 1 - \\frac{d}{f_2} \\end{pmatrix}$$\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Equivalent Focal Length Formula</div>\n                <div class=\"formula-math-display\">\n                    \\frac{1}{F} = -C = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}, \\quad P = P_1 + P_2 - d P_1 P_2\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Two Lenses in Contact ($d = 0$)</h2>\n            <p>When two thin lenses are placed in direct physical contact, the separation distance vanishes ($d = 0$). The system matrix simplifies to:</p>\n            $$\\mathbf{M} = \\begin{pmatrix} 1 & 0 \\\\ -\\left( \\frac{1}{f_1} + \\frac{1}{f_2} \\right) & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -P & 1 \\end{pmatrix}$$\n            <p>The powers simply add algebraically: $P = P_1 + P_2 \\implies \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$.</p>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-arrows-to-dot\"></i> Ray Tracing Through Separated Two-Lens System</div>\n                <span class=\"optics-diagram-badge\">Focal Shift</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 260\" width=\"800\" height=\"260\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"130\" x2=\"780\" y2=\"130\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Lens 1 -->\n                    <path d=\"M 220 50 A 100 100 0 0 1 220 210 A 100 100 0 0 1 220 50 Z\" fill=\"rgba(56, 189, 248, 0.18)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"220\" y=\"40\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">L₁ (f₁)</text>\n\n                    <!-- Lens 2 -->\n                    <path d=\"M 420 50 A 100 100 0 0 1 420 210 A 100 100 0 0 1 420 50 Z\" fill=\"rgba(129, 140, 248, 0.18)\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n                    <text x=\"420\" y=\"40\" fill=\"#818cf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">L₂ (f₂)</text>\n\n                    <!-- Distance d -->\n                    <line x1=\"220\" y1=\"225\" x2=\"420\" y2=\"225\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                    <text x=\"320\" y=\"242\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Separation d</text>\n\n                    <!-- Parallel incident ray -->\n                    <line x1=\"40\" y1=\"80\" x2=\"220\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                    <!-- Ray between lenses -->\n                    <line x1=\"220\" y1=\"80\" x2=\"420\" y2=\"105\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                    <!-- Emergent ray to composite focus -->\n                    <line x1=\"420\" y1=\"105\" x2=\"620\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                    \n                    <!-- Virtual extension to unrefracted focus of L1 -->\n                    <line x1=\"220\" y1=\"80\" x2=\"520\" y2=\"130\" stroke=\"#64748b\" stroke-dasharray=\"3,3\" stroke-width=\"1.2\"/>\n                    <circle cx=\"520\" cy=\"130\" r=\"3.5\" fill=\"#94a3b8\"/>\n                    <text x=\"520\" y=\"148\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">F₁ alone</text>\n\n                    <!-- Composite focus F' -->\n                    <circle cx=\"620\" cy=\"130\" r=\"4.5\" fill=\"#10b981\"/>\n                    <text x=\"620\" y=\"152\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Composite Focus F'</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.6:</strong> Paraxial ray propagation through a two-lens separated system showing focal position shifting.\n            </div>\n        </div>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Two thin convex lenses of focal lengths f₁ = 20 cm and f₂ = 20 cm are separated by d = 10 cm. What is the equivalent focal length F?",
          "options": [
            "10.0 cm",
            "+13.33 cm",
            "+15.0 cm",
            "+25.0 cm"
          ],
          "correctIndex": 1,
          "explanation": "1/F = 1/20 + 1/20 - 10/(20*20) = 2/20 - 10/400 = 0.1 - 0.025 = 0.075 cm⁻¹ => F = 1/0.075 = +13.33 cm."
        },
        {
          "type": "multiple-choice",
          "question": "What is the equivalent power of two thin lenses in contact having powers P₁ = +5 D and P₂ = -2 D?",
          "options": [
            "+3 D",
            "+7 D",
            "-10 D",
            "+2.5 D"
          ],
          "correctIndex": 0,
          "explanation": "For thin lenses in contact (d = 0), optical powers add directly: P = P₁ + P₂ = 5 D - 2 D = +3 D."
        },
        {
          "type": "multiple-choice",
          "question": "Under what condition does a two-lens system become an afocal telescope (equivalent focal length F = ∞)?",
          "options": [
            "d = f₁ - f₂",
            "d = f₁ + f₂",
            "d = 0",
            "d = f₁ * f₂"
          ],
          "correctIndex": 1,
          "explanation": "When d = f₁ + f₂, 1/F = 1/f₁ + 1/f₂ - (f₁+f₂)/(f₁f₂) = 0, so F = ∞ (an afocal telescopic combination)."
        }
      ]
    },
    "ramsden-eyepiece": {
      "id": "ramsden-eyepiece",
      "title": "Ramsden Eyepiece: Optical Design & Ray Tracing",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Explore the Ramsden (positive) eyepiece. Analyze its optical construction, equivalent focal length, external crosswire placement, cardinal points, and aberration characteristics.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Optical Construction of Ramsden Eyepiece</h2>\n            <p>Invented by Jesse Ramsden in 1782, the Ramsden eyepiece is a <strong>positive eyepiece</strong> consisting of two identical plano-convex lenses made of the same optical glass:</p>\n            <ul>\n                <li><strong>Field Lens ($L_1$):</strong> Plano-convex lens of focal length $f$.</li>\n                <li><strong>Eye Lens ($L_2$):</strong> Plano-convex lens of focal length $f$.</li>\n                <li><strong>Separation ($d$):</strong> $d = \\frac{2}{3}f$.</li>\n                <li><strong>Orientation:</strong> Both convex surfaces face inward towards each other, minimizing spherical aberration.</li>\n            </ul>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Equivalent Focal Length of Ramsden Eyepiece</div>\n                <div class=\"formula-math-display\">\n                    \\frac{1}{F} = \\frac{1}{f} + \\frac{1}{f} - \\frac{2f/3}{f^2} = \\frac{2}{f} - \\frac{2}{3f} = \\frac{4}{3f} \\implies F = \\frac{3}{4}f = 0.75f\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-eye\"></i> Ramsden Eyepiece: Crosswires &amp; Ray Tracing</div>\n                <span class=\"optics-diagram-badge\">Positive Eyepiece</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"140\" x2=\"780\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Crosswire Line (External) -->\n                    <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"230\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <text x=\"160\" y=\"40\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Crosswires / Real Image</text>\n                    <text x=\"160\" y=\"245\" fill=\"#ef4444\" font-size=\"10\" text-anchor=\"middle\">d = f/4 in front of L₁</text>\n\n                    <!-- Field Lens L1 (Convex surface facing right) -->\n                    <path d=\"M 280 50 L 280 230 A 120 120 0 0 1 280 50 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"280\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Field Lens (f)</text>\n\n                    <!-- Eye Lens L2 (Convex surface facing left) -->\n                    <path d=\"M 520 50 A 120 120 0 0 1 520 230 L 520 50 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"520\" y=\"35\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Eye Lens (f)</text>\n\n                    <!-- Separation distance 2f/3 -->\n                    <line x1=\"280\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                    <text x=\"400\" y=\"202\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Separation d = 2f/3</text>\n\n                    <!-- Rays departing crosswires -->\n                    <line x1=\"160\" y1=\"100\" x2=\"280\" y2=\"85\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"160\" y1=\"100\" x2=\"280\" y2=\"135\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Rays between lenses -->\n                    <line x1=\"280\" y1=\"85\" x2=\"520\" y2=\"95\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"280\" y1=\"135\" x2=\"520\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Emergent parallel rays into observer's eye -->\n                    <line x1=\"520\" y1=\"95\" x2=\"680\" y2=\"95\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"520\" y1=\"120\" x2=\"680\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Observer Eye Icon -->\n                    <path d=\"M 700 120 Q 730 95 760 120 Q 730 145 700 120 Z\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                    <circle cx=\"730\" cy=\"120\" r=\"10\" fill=\"#38bdf8\"/>\n                    <circle cx=\"730\" cy=\"120\" r=\"5\" fill=\"#0f172a\"/>\n                    <text x=\"730\" y=\"85\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Observer Eye</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.7:</strong> Optical setup of Ramsden eyepiece. The crosswires sit outside at distance $f/4$ in front of the field lens, allowing physical micrometer measurements.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Position of Crosswires &amp; Cardinal Points</h2>\n            <ul>\n                <li><strong>Crosswire Position:</strong> For the final image to be at infinity, rays must emerge parallel from the eye lens. Light must enter the eye lens as if originating from its focal point ($f$). The field lens brings rays from a point $u = -f/4$ in front of it to a virtual focus at $f$. Thus, crosswires are placed <strong>$f/4$ in front of the field lens</strong>.</li>\n                <li><strong>Principal Planes:</strong> $H_1$ lies at distance $+f/2$ behind the field lens; $H_2$ lies at distance $-f/2$ in front of the eye lens.</li>\n                <li><strong>Advantages:</strong> Ideal for precision optical instruments (spectrometers, traveling microscopes) requiring a crosswire or micrometer reticle.</li>\n                <li><strong>Limitations:</strong> Chromatic aberration is not completely eliminated because $d = 2f/3 \\neq (f+f)/2 = f$. However, spherical aberration is well minimized.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the equivalent focal length of a Ramsden eyepiece constructed from two equal lenses of focal length f = 12 cm?",
          "options": [
            "6.0 cm",
            "+9.0 cm",
            "12.0 cm",
            "16.0 cm"
          ],
          "correctIndex": 1,
          "explanation": "F = (3/4) f = 0.75 * 12 cm = +9.0 cm."
        },
        {
          "type": "multiple-choice",
          "question": "Where are the crosswires positioned in a Ramsden eyepiece?",
          "options": [
            "Inside between the two lenses",
            "Outside, at a distance f/4 in front of the field lens",
            "At the back of the eye lens",
            "At the center of curvature"
          ],
          "correctIndex": 1,
          "explanation": "Because Ramsden is a positive eyepiece, crosswires are located outside at distance f/4 in front of the field lens."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the Ramsden eyepiece preferred in measuring instruments (such as spectrometers and traveling microscopes)?",
          "options": [
            "It has zero chromatic aberration",
            "The crosswires are accessible outside the optical train and both image and reticle are equally magnified",
            "It has higher magnification than any other eyepiece",
            "It uses concave mirrors"
          ],
          "correctIndex": 1,
          "explanation": "Because the reticle/crosswire is situated outside, both the real image and crosswire scale are simultaneously viewed and magnified by the complete optical system without parallax."
        }
      ]
    },
    "huygens-eyepiece": {
      "id": "huygens-eyepiece",
      "title": "Huygens Eyepiece: Virtual Object Ray Tracing & Aberration Elimination",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "8 min read",
      "lead": "Master the Huygens (negative) eyepiece. Understand how the 3f, f lens combination satisfies conditions for eliminating both chromatic and spherical aberrations.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Optical Construction of Huygens Eyepiece</h2>\n            <p>Designed by Christiaan Huygens in the 17th century, this <strong>negative eyepiece</strong> is engineered to eliminate both chromatic and spherical aberrations using lenses of the same glass:</p>\n            <ul>\n                <li><strong>Field Lens ($L_1$):</strong> Plano-convex lens of focal length $f_1 = 3f$.</li>\n                <li><strong>Eye Lens ($L_2$):</strong> Plano-convex lens of focal length $f_2 = f$.</li>\n                <li><strong>Separation ($d$):</strong> $d = 2f$.</li>\n                <li><strong>Orientation:</strong> Both convex surfaces face the incident light from the objective.</li>\n            </ul>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Equivalent Focal Length of Huygens Eyepiece</div>\n                <div class=\"formula-math-display\">\n                    \\frac{1}{F} = \\frac{1}{3f} + \\frac{1}{f} - \\frac{2f}{(3f)(f)} = \\frac{4}{3f} - \\frac{2}{3f} = \\frac{2}{3f} \\implies F = \\frac{3}{2}f = 1.5f\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Fulfillment of Aberration Elimination Conditions</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Aberration Type</th><th>Condition for Elimination</th><th>Huygens Eyepiece Value</th><th>Result</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Chromatic Aberration</strong></td><td>$d = \\frac{f_1 + f_2}{2}$</td><td>$d = \\frac{3f + f}{2} = 2f$</td><td><span style=\"color: #10b981; font-weight: bold;\">Perfect Achromatism</span></td></tr>\n                        <tr><td><strong>Spherical Aberration</strong></td><td>$d = f_1 - f_2$</td><td>$d = 3f - f = 2f$</td><td><span style=\"color: #10b981; font-weight: bold;\">Minimum Spherical Aberration</span></td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-magnifying-glass\"></i> Huygens Eyepiece: Internal Crosswires &amp; Ray Tracing</div>\n                <span class=\"optics-diagram-badge\">Negative Eyepiece</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"140\" x2=\"780\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Field Lens L1 (f1 = 3f, convex facing left) -->\n                    <path d=\"M 220 40 A 150 150 0 0 1 220 240 L 220 40 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"220\" y=\"30\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Field Lens (3f)</text>\n\n                    <!-- Crosswire Line (Internal between lenses) -->\n                    <line x1=\"420\" y1=\"65\" x2=\"420\" y2=\"215\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <text x=\"420\" y=\"55\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Internal Crosswires / Real Image</text>\n                    <text x=\"420\" y=\"235\" fill=\"#ef4444\" font-size=\"10\" text-anchor=\"middle\">f/2 in front of L₂</text>\n\n                    <!-- Eye Lens L2 (f2 = f, convex facing left) -->\n                    <path d=\"M 500 65 A 90 90 0 0 1 500 215 L 500 65 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"500\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Eye Lens (f)</text>\n\n                    <!-- Separation distance 2f -->\n                    <line x1=\"220\" y1=\"210\" x2=\"500\" y2=\"210\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                    <text x=\"360\" y=\"202\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Separation d = 2f</text>\n\n                    <!-- Converging rays from objective entering L1 -->\n                    <line x1=\"40\" y1=\"70\" x2=\"220\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                    <line x1=\"40\" y1=\"210\" x2=\"220\" y2=\"185\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n\n                    <!-- Rays refracted by L1 to form real intermediate image at crosswires -->\n                    <line x1=\"220\" y1=\"95\" x2=\"420\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                    <line x1=\"220\" y1=\"185\" x2=\"420\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n\n                    <!-- Diverging rays from intermediate image to eye lens -->\n                    <line x1=\"420\" y1=\"120\" x2=\"500\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"420\" y1=\"120\" x2=\"500\" y2=\"135\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Emergent parallel rays to observer eye -->\n                    <line x1=\"500\" y1=\"105\" x2=\"680\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"500\" y1=\"135\" x2=\"680\" y2=\"135\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Observer Eye -->\n                    <path d=\"M 700 120 Q 730 95 760 120 Q 730 145 700 120 Z\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                    <circle cx=\"730\" cy=\"120\" r=\"10\" fill=\"#38bdf8\"/>\n                    <circle cx=\"730\" cy=\"120\" r=\"5\" fill=\"#0f172a\"/>\n                    <text x=\"730\" y=\"85\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Observer Eye</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.8:</strong> Huygens eyepiece ray tracing. Converging light from the objective is intercepted by the field lens to form an internal real image at distance $f/2$ before the eye lens.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Comparison: Ramsden vs. Huygens Eyepieces</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Feature</th><th>Ramsden Eyepiece</th><th>Huygens Eyepiece</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Classification</strong></td><td>Positive eyepiece (Focal point outside)</td><td>Negative eyepiece (Focal point between lenses)</td></tr>\n                        <tr><td><strong>Focal Lengths</strong></td><td>$f_1 = f, \\; f_2 = f$</td><td>$f_1 = 3f, \\; f_2 = f$</td></tr>\n                        <tr><td><strong>Separation $d$</strong></td><td>$d = \\frac{2}{3}f$</td><td>$d = 2f$</td></tr>\n                        <tr><td><strong>Equivalent Focal Length</strong></td><td>$F = \\frac{3}{4}f$</td><td>$F = \\frac{3}{2}f$</td></tr>\n                        <tr><td><strong>Crosswire Placement</strong></td><td>External ($f/4$ in front of field lens)</td><td>Internal ($f/2$ in front of eye lens)</td></tr>\n                        <tr><td><strong>Chromatic Correction</strong></td><td>Partially corrected (not completely achromatic)</td><td>Completely achromatic ($d = (f_1+f_2)/2$)</td></tr>\n                        <tr><td><strong>Primary Application</strong></td><td>Measuring instruments, spectrometers, micrometer eyepieces</td><td>Biological microscopes, astronomical telescopes (qualitative viewing)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the ratio of focal lengths (f₁ : f₂) and separation d in a Huygens eyepiece?",
          "options": [
            "f₁ : f₂ = 1 : 1, d = 2f/3",
            "f₁ : f₂ = 3 : 1, d = 2f",
            "f₁ : f₂ = 2 : 1, d = f",
            "f₁ : f₂ = 3 : 1, d = 3f"
          ],
          "correctIndex": 1,
          "explanation": "A standard Huygens eyepiece has f₁ = 3f, f₂ = f, and inter-lens separation d = 2f."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the Huygens eyepiece called a 'negative' eyepiece?",
          "options": [
            "It produces a virtual inverted image",
            "Its equivalent focal length is negative",
            "Its first focal plane lies inside the eyepiece between the two lenses, so it cannot be used as a simple hand magnifier",
            "It only accepts concave lenses"
          ],
          "correctIndex": 2,
          "explanation": "Because its first focal plane lies internally between the field lens and eye lens, it requires a converging beam from an external objective and cannot act as a standalone reading glass."
        },
        {
          "type": "multiple-choice",
          "question": "If f₂ = 4 cm for the eye lens of a Huygens eyepiece, what is the equivalent focal length F?",
          "options": [
            "2.0 cm",
            "4.0 cm",
            "6.0 cm",
            "8.0 cm"
          ],
          "correctIndex": 2,
          "explanation": "F = (3/2) f = 1.5 * 4 cm = 6.0 cm."
        }
      ]
    },
    "unit1-activities-rubrics": {
      "id": "unit1-activities-rubrics",
      "title": "Unit 1 Student Activity & Assessment Rubric",
      "category": "cat-unit1",
      "track": "track-unit1",
      "readTime": "5 min read",
      "lead": "Student computational activity guide for lens matrix simulations in Python/Octave, comparative analysis between Ramsden and Huygens eyepieces, and 10-point assessment rubric.",
      "toolType": "matrix-bench",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Student Activity: Computational Matrix Simulation &amp; Eyepiece Comparison</h2>\n            <p><strong>Activity Scope:</strong> Students will write a Python or GNU Octave script to model ray transfer through arbitrary optical trains using $2 \\times 2$ ABCD matrices, simulate single/double lens systems, plot ray fan diagrams, and present a comparative report contrasting Ramsden and Huygens eyepieces.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-code\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Python Ray Matrix Simulation Script Template</div>\n                    <div class=\"callout-text\">\n                        <pre><code>import numpy as np\n\ndef make_translation(d):\n    return np.array([[1.0, d], [0.0, 1.0]])\n\ndef make_thin_lens(f):\n    return np.array([[1.0, 0.0], [-1.0 / f, 1.0]])\n\n# Ramsden Eyepiece: f1 = f, f2 = f, d = 2f/3\nf = 100.0  # mm\nM_ramsden = make_thin_lens(f) @ make_translation(2*f/3) @ make_thin_lens(f)\nF_eq = -1.0 / M_ramsden[1, 0]\nprint(f\"Ramsden ABCD Matrix:\n{M_ramsden}\")\nprint(f\"Equivalent Focal Length: {F_eq:.2f} mm (Expected: {0.75*f:.2f} mm)\")</code></pre>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>10-Point Student Assessment Rubric</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Criteria</th><th>Excellent (9-10 Marks)</th><th>Proficient (7-8 Marks)</th><th>Basic (4-6 Marks)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Mathematical Rigor (3 Marks)</strong></td>\n                            <td>Accurate derivation of ABCD matrices for translation, refraction, thick lenses, and cardinal points with zero errors.</td>\n                            <td>Minor algebraic slips; correct matrix multiplication logic.</td>\n                            <td>Incomplete derivations or erroneous matrix orders.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Computational Simulation (4 Marks)</strong></td>\n                            <td>Functional Python/Octave code computing system matrix, ray traces, and equivalent focal length correctly across various lens geometries.</td>\n                            <td>Code executes with fixed inputs; minor visualization issues.</td>\n                            <td>Non-functional script or conceptual bugs in matrix cascade.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Eyepiece Comparative Report (3 Marks)</strong></td>\n                            <td>Comprehensive comparative analysis contrasting Ramsden vs. Huygens (optical design, focal length, crosswires, aberrations, applications).</td>\n                            <td>Good comparison but misses detailed aberration elimination conditions.</td>\n                            <td>Superficial comparison table lacking optical depth.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In Python NumPy, which operator performs matrix multiplication for cascading optical matrices?",
          "options": [
            "*",
            "@",
            "^",
            "&"
          ],
          "correctIndex": 1,
          "explanation": "In Python 3.5+, the @ operator performs true matrix multiplication on NumPy 2D arrays (e.g., M2 @ T @ M1)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the correct matrix cascade order to propagate a ray through Lens 1, then space d, then Lens 2?",
          "options": [
            "M = L1 @ T @ L2",
            "M = L2 @ T @ L1",
            "M = T @ L1 @ L2",
            "M = L1 @ L2 @ T"
          ],
          "correctIndex": 1,
          "explanation": "Because matrices act on column vectors from the left, transformations are ordered from right to left: M = L2 @ T @ L1."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the determinant of the overall cascaded system matrix in air always equal to 1.0?",
          "options": [
            "It reflects conservation of phase-space volume (Liouville's theorem) in paraxial optics",
            "It is purely a mathematical coincidence",
            "Because all lenses have negative focal length",
            "Because light travels at infinite speed"
          ],
          "correctIndex": 0,
          "explanation": "The conservation of optical invariant (Lagrange invariant / Liouville's theorem) ensures det(M) = n_in / n_out = 1 in air."
        }
      ]
    },
    "fresnel-reflection-refraction": {
      "id": "fresnel-reflection-refraction",
      "title": "Fresnel Theory of Reflection & Refraction",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "8 min read",
      "lead": "Understand the electromagnetic boundary conditions governing optical reflection and refraction. Derive Fresnel amplitude coefficients, Brewster's angle, and polarization states.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Electromagnetic Boundary Conditions at Dielectric Interfaces</h2>\n            <p>Classical geometrical optics treats reflection and refraction using ray trajectories, but Fresnel's electromagnetic theory explains <em>how much</em> energy is reflected or transmitted and describes the polarization states of light.</p>\n            <p>From Maxwell's equations, the tangential components of electric field $\\mathbf{E}$ and magnetic field $\\mathbf{H}$, and normal components of displacement $\\mathbf{D}$ and flux $\\mathbf{B}$ must be continuous across an uncharged non-magnetic boundary:</p>\n            $$E_{1\\parallel} = E_{2\\parallel}, \\quad H_{1\\parallel} = H_{2\\parallel}, \\quad D_{1\\perp} = D_{2\\perp}, \\quad B_{1\\perp} = B_{2\\perp}$$\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Fresnel Equations for Parallel ($p$) and Perpendicular ($s$) Polarizations</h2>\n            <p>Light is decomposed into two orthogonal linear polarization states relative to the plane of incidence:</p>\n            <ul>\n                <li><strong>s-Polarization (TE mode):</strong> Electric field $\\mathbf{E}$ is perpendicular (senkrecht) to the plane of incidence.</li>\n                <li><strong>p-Polarization (TM mode):</strong> Electric field $\\mathbf{E}$ is parallel to the plane of incidence.</li>\n            </ul>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-square-root-variable\"></i> Fresnel Amplitude Reflection &amp; Transmission Coefficients</div>\n                <div class=\"formula-math-display\">\n                    r_s = \\frac{n_1 \\cos\\theta_1 - n_2 \\cos\\theta_2}{n_1 \\cos\\theta_1 + n_2 \\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}\n                </div>\n                <div class=\"formula-math-display\">\n                    r_p = \\frac{n_2 \\cos\\theta_1 - n_1 \\cos\\theta_2}{n_2 \\cos\\theta_1 + n_1 \\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">r_s, r_p</span>: Amplitude reflection coefficients</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">R_s, R_p</span>: Reflectance powers ($R = |r|^2$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ_1, θ_2</span>: Incident and refracted angles</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-wave-square\"></i> Fresnel Reflectance &amp; Brewster's Polarization Angle</div>\n                <span class=\"optics-diagram-badge\">Electromagnetic Optics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 300\" width=\"800\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Interface with p and s polarization rays -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Polarization at Brewster's Angle</text>\n                        <!-- Interface -->\n                        <rect x=\"20\" y=\"150\" width=\"290\" height=\"110\" fill=\"rgba(56, 189, 248, 0.08)\"/>\n                        <line x1=\"10\" y1=\"150\" x2=\"310\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"250\" stroke=\"#64748b\" stroke-dasharray=\"5,4\" stroke-width=\"1.5\"/>\n                        <text x=\"165\" y=\"65\" fill=\"#94a3b8\" font-size=\"11\">Normal</text>\n\n                        <!-- Unpolarized Incident Beam (Brewster angle ~56.3° for glass) -->\n                        <line x1=\"50\" y1=\"75\" x2=\"160\" y2=\"150\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                        <!-- E-field dots (s) and double arrows (p) -->\n                        <circle cx=\"95\" cy=\"105\" r=\"3.5\" fill=\"#38bdf8\"/>\n                        <line x1=\"110\" y1=\"110\" x2=\"125\" y2=\"130\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <text x=\"50\" y=\"65\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Incident (s + p)</text>\n\n                        <!-- Reflected Beam (100% s-polarized, p vanishes!) -->\n                        <line x1=\"160\" y1=\"150\" x2=\"270\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <circle cx=\"215\" cy=\"112\" r=\"3.5\" fill=\"#38bdf8\"/>\n                        <circle cx=\"245\" cy=\"92\" r=\"3.5\" fill=\"#38bdf8\"/>\n                        <text x=\"210\" y=\"65\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Reflected (100% s-pol)</text>\n\n                        <!-- Refracted Beam (mostly p, some s) -->\n                        <line x1=\"160\" y1=\"150\" x2=\"230\" y2=\"245\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                        <text x=\"235\" y=\"240\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">Refracted Beam</text>\n\n                        <!-- Right Angle Marker between Reflected and Refracted -->\n                        <path d=\"M 180 135 L 195 155 L 175 170\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n                        <text x=\"195\" y=\"145\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">90°</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"280\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Reflectance Curves Graph R_s and R_p vs Incident Angle -->\n                    <g transform=\"translate(410, 20)\">\n                        <text x=\"180\" y=\"20\" fill=\"#e2e8f0\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Reflectance Curves: R_p vs R_s</text>\n                        <!-- Axes -->\n                        <line x1=\"50\" y1=\"230\" x2=\"330\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                        <text x=\"335\" y=\"235\" fill=\"#94a3b8\" font-size=\"11\">θ₁ (deg)</text>\n                        <line x1=\"50\" y1=\"230\" x2=\"50\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                        <text x=\"20\" y=\"45\" fill=\"#94a3b8\" font-size=\"11\">R (%)</text>\n\n                        <!-- 100% line -->\n                        <line x1=\"45\" y1=\"70\" x2=\"330\" y2=\"70\" stroke=\"#334155\" stroke-dasharray=\"3,3\"/>\n                        <text x=\"22\" y=\"75\" fill=\"#64748b\" font-size=\"10\">100%</text>\n\n                        <!-- 0% line marker -->\n                        <text x=\"35\" y=\"235\" fill=\"#64748b\" font-size=\"10\">0°</text>\n                        <text x=\"180\" y=\"245\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">θ_B ≈ 56°</text>\n                        <text x=\"315\" y=\"245\" fill=\"#64748b\" font-size=\"10\">90°</text>\n\n                        <!-- R_s Curve (monotonically rising from ~4% to 100%) -->\n                        <path d=\"M 50 223 C 120 220, 240 180, 320 70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <text x=\"250\" y=\"140\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">R_s (TE)</text>\n\n                        <!-- R_p Curve (drops from 4% to 0 at Brewster angle, then climbs to 100%) -->\n                        <path d=\"M 50 223 Q 120 226 195 230 Q 250 225 320 70\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                        <text x=\"200\" y=\"215\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">R_p (TM)</text>\n                        \n                        <!-- Brewster minimum dot -->\n                        <circle cx=\"195\" cy=\"230\" r=\"4\" fill=\"#fbbf24\"/>\n                        <text x=\"160\" y=\"210\" fill=\"#fbbf24\" font-size=\"10\">R_p = 0</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.1:</strong> Fresnel reflection at a dielectric boundary. At Brewster's angle $\\theta_B = \\arctan(n_2/n_1)$, $R_p = 0$ because the reflected and refracted rays are perpendicular ($90^\\circ$), yielding linearly polarized reflected light.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Brewster's Law &amp; Complete Polarization</h2>\n            <p>From the Fresnel formula for $r_p = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}$, when $\\theta_1 + \\theta_2 = 90^\\circ$, $\\tan(\\theta_1 + \\theta_2) \\to \\infty$, causing $r_p = 0$. Hence, the parallel polarization component is not reflected at all.</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-angle-right\"></i> Brewster's Angle Formula</div>\n                <div class=\"formula-math-display\">\n                    \\tan \\theta_B = \\frac{n_2}{n_1} \\implies \\text{For air-glass } (n=1.5): \\theta_B = \\arctan(1.5) \\approx 56.3^\\circ\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "At Brewster's angle of incidence, what is the angle between the reflected ray and the refracted ray?",
          "options": [
            "0°",
            "45°",
            "90°",
            "180°"
          ],
          "correctIndex": 2,
          "explanation": "At Brewster's angle, θ₁ + θ₂ = 90°, so the angle between the reflected ray and refracted ray is exactly 90°."
        },
        {
          "type": "multiple-choice",
          "question": "Which polarization component of incident light has zero reflectance at Brewster's angle?",
          "options": [
            "s-polarization (TE)",
            "p-polarization (TM)",
            "Circular polarization",
            "Both s and p components"
          ],
          "correctIndex": 1,
          "explanation": "At Brewster's angle, r_p = 0, so the p-polarized (parallel) electric field is completely transmitted with zero reflection."
        },
        {
          "type": "multiple-choice",
          "question": "What is Brewster's angle for light incident from air (n = 1) onto water (n = 1.333)?",
          "options": [
            "45.0°",
            "53.1°",
            "56.3°",
            "60.0°"
          ],
          "correctIndex": 1,
          "explanation": "tan θ_B = 1.333 / 1.0 = 1.333 => θ_B = arctan(1.333) ≈ 53.1°."
        }
      ]
    },
    "monochromatic-aberrations-intro": {
      "id": "monochromatic-aberrations-intro",
      "title": "Monochromatic Aberrations: Seidel 3rd-Order Theory",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "7 min read",
      "lead": "Depart from idealized Gaussian paraxial optics. Examine Ludwig von Seidel's third-order monochromatic aberration polynomial classifying the five classical optical defects.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Departure from Gaussian Paraxial Optics</h2>\n            <p>Gaussian paraxial optics is a first-order approximation where $\\sin \\theta \\approx \\theta$. In actual optical systems with finite aperture stops and broad fields of view, the third-order terms in the Taylor series expansion cannot be neglected:</p>\n            $$\\sin \\theta = \\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\dots$$\n            <p>Retaining the $-\\theta^3/6$ term yields <strong>third-order aberration theory</strong>, formulated by Ludwig von Seidel in 1857.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Five Seidel Primary Aberrations</h2>\n            <p>For monochromatic light traversing a rotationally symmetric optical system, the wavefront aberration function $W(r, \\theta, h)$ expands as:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-list-ol\"></i> Seidel Wavefront Aberration Polynomial</div>\n                <div class=\"formula-math-display\">\n                    W = \\underbrace{C_{040} r^4}_{\\text{Spherical}} + \\underbrace{C_{131} h r^3 \\cos\\theta}_{\\text{Coma}} + \\underbrace{C_{222} h^2 r^2 \\cos^2\\theta}_{\\text{Astigmatism}} + \\underbrace{C_{220} h^2 r^2}_{\\text{Curvature of Field}} + \\underbrace{C_{311} h^3 r \\cos\\theta}_{\\text{Distortion}}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">r</span>: Radial distance in pupil plane</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">h</span>: Off-axis object height</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ</span>: Azimuthal pupil angle</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-sitemap\"></i> Taxonomy of the Five Seidel Monochromatic Aberrations</div>\n                <span class=\"optics-diagram-badge\">Seidel Classification</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Root Node -->\n                    <rect x=\"270\" y=\"15\" width=\"260\" height=\"40\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"400\" y=\"40\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Seidel 3rd-Order Aberrations</text>\n\n                    <!-- Trunk Lines -->\n                    <path d=\"M 400 55 L 400 90 M 100 90 L 700 90 M 100 90 L 100 120 M 250 90 L 250 120 M 400 90 L 400 120 M 550 90 L 550 120 M 700 90 L 700 120\" stroke=\"#64748b\" stroke-width=\"2\" fill=\"none\"/>\n\n                    <!-- Node 1: Spherical -->\n                    <rect x=\"30\" y=\"120\" width=\"140\" height=\"85\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                    <text x=\"100\" y=\"145\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. Spherical</text>\n                    <text x=\"100\" y=\"165\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">W ∝ r⁴</text>\n                    <text x=\"100\" y=\"185\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">On &amp; Off-Axis</text>\n\n                    <!-- Node 2: Coma -->\n                    <rect x=\"180\" y=\"120\" width=\"140\" height=\"85\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                    <text x=\"250\" y=\"145\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. Coma</text>\n                    <text x=\"250\" y=\"165\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">W ∝ h r³ cos θ</text>\n                    <text x=\"250\" y=\"185\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Cometic Flare</text>\n\n                    <!-- Node 3: Astigmatism -->\n                    <rect x=\"330\" y=\"120\" width=\"140\" height=\"85\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"400\" y=\"145\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. Astigmatism</text>\n                    <text x=\"400\" y=\"165\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">W ∝ h² r² cos² θ</text>\n                    <text x=\"400\" y=\"185\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Sturm's Conoid</text>\n\n                    <!-- Node 4: Field Curvature -->\n                    <rect x=\"480\" y=\"120\" width=\"140\" height=\"85\" rx=\"6\" fill=\"#1e293b\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n                    <text x=\"550\" y=\"145\" fill=\"#818cf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. Field Curvature</text>\n                    <text x=\"550\" y=\"165\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">W ∝ h² r²</text>\n                    <text x=\"550\" y=\"185\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Petzval Surface</text>\n\n                    <!-- Node 5: Distortion -->\n                    <rect x=\"630\" y=\"120\" width=\"140\" height=\"85\" rx=\"6\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n                    <text x=\"700\" y=\"145\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">5. Distortion</text>\n                    <text x=\"700\" y=\"165\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">W ∝ h³ r cos θ</text>\n                    <text x=\"700\" y=\"185\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Barrel vs Pincushion</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.2:</strong> Ludwig von Seidel's five primary monochromatic aberrations, ordered by pupil radius $r$ and field height $h$ dependence.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Classification by Symmetry &amp; Field Dependence</h2>\n            <ul>\n                <li><strong>Spherical Aberration ($r^4$):</strong> The only monochromatic aberration present for points directly on the optical axis ($h = 0$).</li>\n                <li><strong>Coma &amp; Astigmatism ($h r^3, h^2 r^2$):</strong> Off-axis point defects that blur point sources into flares or dual focal lines.</li>\n                <li><strong>Curvature of Field &amp; Distortion:</strong> Defects affecting image geometry and field planarity rather than point sharpness.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the five Seidel monochromatic aberrations exists even for points located on the optical axis (h = 0)?",
          "options": [
            "Coma",
            "Spherical Aberration",
            "Astigmatism",
            "Distortion"
          ],
          "correctIndex": 1,
          "explanation": "Spherical aberration has no dependence on object height h (W ∝ r⁴), meaning it affects axial object points as well as off-axis points."
        },
        {
          "type": "multiple-choice",
          "question": "In what year did Ludwig von Seidel formulate the third-order aberration theory?",
          "options": [
            "1662",
            "1782",
            "1857",
            "1905"
          ],
          "correctIndex": 2,
          "explanation": "Ludwig von Seidel published his foundational third-order aberration theory in 1857."
        },
        {
          "type": "multiple-choice",
          "question": "How does the wavefront distortion in Coma depend on the off-axis object height h and pupil aperture radius r?",
          "options": [
            "∝ h⁰ r⁴",
            "∝ h¹ r³",
            "∝ h² r²",
            "∝ h³ r¹"
          ],
          "correctIndex": 1,
          "explanation": "Coma scales linearly with object height h and cubically with pupil radius r: W_coma ∝ h r³ cos θ."
        }
      ]
    },
    "spherical-aberration-minimization": {
      "id": "spherical-aberration-minimization",
      "title": "Spherical Aberration: Analysis & 5 Practical Minimization Methods",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "9 min read",
      "lead": "Analyze longitudinal and lateral spherical aberration, the caustic curve, and the circle of least confusion. Master the 5 industrial methods used to minimize spherical aberration.",
      "toolType": "aberration-visualizer",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Physical Origin of Spherical Aberration</h2>\n            <p>Spherical lenses possess spherical surfaces because they are easiest to grind and polish. However, a spherical surface is mathematically unable to focus all parallel incoming rays to a single point:</p>\n            <ul>\n                <li><strong>Marginal Rays (Outer Zones):</strong> Strike the lens near its periphery, undergo greater refraction, and intersect the optical axis at marginal focus $F_m$ closer to the lens.</li>\n                <li><strong>Paraxial Rays (Central Zones):</strong> Strike near the axis, undergo gentle refraction, and intersect the axis at paraxial focus $F_p$ farther from the lens.</li>\n            </ul>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-ruler-horizontal\"></i> Longitudinal &amp; Lateral Spherical Aberration</div>\n                <div class=\"formula-math-display\">\n                    LSA = f_p - f_m, \\quad TSA = y_m = (f_p - f_m) \\tan \\alpha_m\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">LSA</span>: Longitudinal axial distance between focuses</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">TSA</span>: Transverse radius of circle of least confusion</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>5 Methods of Minimizing Spherical Aberration</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Method</th><th>Mechanism</th><th>Optical Principle</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. Using Aperture Stops</strong></td>\n                            <td>Placing a circular stop in front of or behind the lens blocks peripheral marginal rays.</td>\n                            <td>Limits aperture diameter $D$, drastically reducing aberration ($LSA \\propto D^2$), at the trade-off of reduced image brightness.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. Using Plano-Convex Lenses</strong></td>\n                            <td>Orienting the curved convex surface towards parallel incident rays.</td>\n                            <td>Deviations are shared across both surfaces: curved surface refracts parallel rays, flat surface refracts converging rays with near-zero deviation. Reversing the orientation increases aberration by $4\\times$!</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Using Crossed Lenses (Optimum Shape Factor)</strong></td>\n                            <td>Choosing radii $R_1, R_2$ satisfying Coddington shape factor $q = \\frac{R_2 + R_1}{R_2 - R_1} = -\\frac{2(n^2 - 1)}{n + 2}$.</td>\n                            <td>For crown glass ($n = 1.5$), $q = +0.71$, giving $R_2 = -6 R_1$, distributing refraction evenly between front and back surfaces.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>4. Two Lenses Separated by Distance $d$</strong></td>\n                            <td>Placing two thin convex lenses at separation $d = f_1 - f_2$.</td>\n                            <td>Equalizes total ray deviation across both lenses, eliminating spherical aberration (as in Huygens eyepiece).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>5. Using Aplanatic Surfaces</strong></td>\n                            <td>Using Cartesian aplanatic spheres (e.g., in microscope oil immersion objectives).</td>\n                            <td>Rays departing from point $O$ at distance $R/n$ from center emerge without any spherical aberration or coma.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which rays intersect the optical axis closest to a convex lens in spherical aberration?",
          "options": [
            "Paraxial rays",
            "Marginal rays",
            "Rays through optical center",
            "Infrared rays only"
          ],
          "correctIndex": 1,
          "explanation": "Marginal rays strike the lens near its perimeter where the surface curvature deviates most sharply, causing them to converge at F_m, closer than the paraxial focus F_p."
        },
        {
          "type": "multiple-choice",
          "question": "What is the optimal Coddington shape factor q for minimizing spherical aberration in a single lens made of glass with n = 1.5?",
          "options": [
            "0.00",
            "+0.71",
            "-1.00",
            "+2.50"
          ],
          "correctIndex": 1,
          "explanation": "q = -2(n² - 1)/(n + 2) = -2(2.25 - 1)/(1.5 + 2) = -2(1.25)/3.5 = -2.5/3.5 ≈ -0.71 (or +0.71 depending on sign convention for R₁)."
        },
        {
          "type": "multiple-choice",
          "question": "What separation distance d between two thin lenses of focal lengths f₁ and f₂ minimizes spherical aberration?",
          "options": [
            "d = f₁ + f₂",
            "d = f₁ - f₂",
            "d = (f₁ + f₂) / 2",
            "d = f₁ * f₂"
          ],
          "correctIndex": 1,
          "explanation": "Spherical aberration is minimized when the total ray deviation is divided equally, requiring lens separation d = f₁ - f₂."
        }
      ]
    },
    "coma-astigmatism": {
      "id": "coma-astigmatism",
      "title": "Coma, Abbe Sine Condition, Astigmatism & Sturm's Conoid",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "8 min read",
      "lead": "Examine the off-axis point aberrations Coma and Astigmatism. Understand the Abbe sine condition for aplanatic imaging and trace Sturm's conoid.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>1. Coma (Cometic Aberration)</h2>\n            <p>Coma arises for off-axis object points when different annular zones of a lens produce different transverse magnifications. Rays passing through outer annular zones form circular patches of light shifted progressively further from the Gaussian image point:</p>\n            <ul>\n                <li>The overlapping circular zones create an asymmetric flare resembling a <strong>comet with a bright head and spreading tail</strong>.</li>\n                <li>The flare angle of the cometic envelope is always <strong>$60^\\circ$</strong>.</li>\n            </ul>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-certificate\"></i> Ernst Abbe's Sine Condition for Aplanatic Systems</div>\n                <div class=\"formula-math-display\">\n                    n y \\sin \\alpha = n' y' \\sin \\alpha' \\implies \\frac{\\sin \\alpha}{\\sin \\alpha'} = \\text{constant} = M_T \\frac{n'}{n}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α, α'</span>: Launch and convergence ray angles</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">y, y'</span>: Object and image heights</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Aplanatic</span>: Free from both Spherical Aberration and Coma</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-shapes\"></i> Coma Patch Geometry &amp; Astigmatic Sturm's Conoid</div>\n                <span class=\"optics-diagram-badge\">Off-Axis Aberrations</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Coma Circles Flare -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#fbbf24\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Coma 60° Flare Envelope</text>\n                        <!-- Coma circles -->\n                        <circle cx=\"90\" cy=\"140\" r=\"10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                        <circle cx=\"120\" cy=\"140\" r=\"22\" fill=\"none\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n                        <circle cx=\"160\" cy=\"140\" r=\"38\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n                        <circle cx=\"210\" cy=\"140\" r=\"58\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n\n                        <!-- Gaussian Image Point -->\n                        <circle cx=\"80\" cy=\"140\" r=\"4.5\" fill=\"#fbbf24\"/>\n                        <text x=\"65\" y=\"160\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">Head</text>\n\n                        <!-- Tangent Envelope Lines (60 deg) -->\n                        <line x1=\"80\" y1=\"140\" x2=\"265\" y2=\"85\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <line x1=\"80\" y1=\"140\" x2=\"265\" y2=\"195\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"275\" y=\"145\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">60° Tail</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Astigmatism & Sturm's Conoid -->\n                    <g transform=\"translate(410, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Astigmatism: Sturm's Conoid</text>\n                        <line x1=\"20\" y1=\"140\" x2=\"330\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                        <!-- Primary Tangential Focal Line (Vertical) -->\n                        <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"200\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n                        <text x=\"120\" y=\"70\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tangential Focus (T)</text>\n\n                        <!-- Circle of Least Confusion -->\n                        <circle cx=\"200\" cy=\"140\" r=\"18\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                        <text x=\"200\" y=\"115\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Circle of Least Confusion</text>\n\n                        <!-- Secondary Sagittal Focal Line (Horizontal) -->\n                        <line x1=\"250\" y1=\"140\" x2=\"310\" y2=\"140\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n                        <text x=\"280\" y=\"165\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sagittal Focus (S)</text>\n\n                        <!-- Astigmatic Difference -->\n                        <line x1=\"120\" y1=\"225\" x2=\"280\" y2=\"225\" stroke=\"#e2e8f0\" stroke-width=\"1.2\"/>\n                        <text x=\"200\" y=\"242\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">Astigmatic Focal Difference Δf</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.3:</strong> Coma circular flare envelope of $60^\\circ$ (left), and Astigmatism (right) producing two perpendicular focal lines separated by Sturm's conoid.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Astigmatism &amp; Sturm's Conoid</h2>\n            <p>Astigmatism occurs when light from an off-axis point falls obliquely on a lens, encountering different curvatures along two mutually perpendicular planes:</p>\n            <ul>\n                <li><strong>Tangential (Meridional) Plane:</strong> Contains both the optical axis and the chief ray. Refracted rays focus at the <em>primary tangential focal line ($T$)</em>.</li>\n                <li><strong>Sagittal Plane:</strong> Perpendicular to the tangential plane. Refracted rays focus at the <em>secondary sagittal focal line ($S$)</em>.</li>\n                <li><strong>Sturm's Conoid:</strong> The 3D bundle of rays between the tangential and sagittal focal lines. At an intermediate plane between them, the cross-section is circular, termed the <strong>Circle of Least Confusion</strong> (best compromise image).</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the characteristic flare angle subtended by the triangular envelope of Coma?",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          "correctIndex": 2,
          "explanation": "Geometrical analysis of Seidel coma shows that the circular flare patches are tangent to an envelope subtending an angle of exactly 60°."
        },
        {
          "type": "multiple-choice",
          "question": "What is an optical system called when it is simultaneously corrected for both Spherical Aberration and Coma?",
          "options": [
            "Achromatic system",
            "Aplanatic system",
            "Anastigmatic system",
            "Afocal system"
          ],
          "correctIndex": 1,
          "explanation": "An optical system that simultaneously satisfies the Abbe Sine Condition and has zero spherical aberration is defined as aplanatic."
        },
        {
          "type": "multiple-choice",
          "question": "In Astigmatism, what is the region of ray bundle between the tangential and sagittal focal lines called?",
          "options": [
            "Airy disk",
            "Sturm's Conoid",
            "Petzval bowl",
            "Caustic envelope"
          ],
          "correctIndex": 1,
          "explanation": "The astigmatic ray bundle passing between the primary and secondary line foci forms a geometrical volume termed Sturm's conoid."
        }
      ]
    },
    "curvature-field-distortion": {
      "id": "curvature-field-distortion",
      "title": "Curvature of Field (Petzval Surface) & Optical Distortion",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "8 min read",
      "lead": "Understand why flat planar objects focus onto curved Petzval surfaces. Master the Petzval condition, and compare Barrel vs. Pincushion distortion in imaging lenses.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>1. Curvature of Field &amp; The Petzval Condition</h2>\n            <p>Even when spherical aberration, coma, and astigmatism are corrected, the image of a flat planar object perpendicular to the optical axis is formed not on a flat plane, but on a curved, bowl-shaped surface known as the <strong>Petzval Surface</strong>.</p>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Petzval Field-Flattening Condition</div>\n                <div class=\"formula-math-display\">\n                    \\frac{1}{R_p} = \\sum_{i} \\frac{1}{n_i f_i} = 0 \\implies \\frac{1}{n_1 f_1} + \\frac{1}{n_2 f_2} = 0\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">R_p</span>: Radius of curvature of Petzval surface</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n_i, f_i</span>: Refractive index and focal length of i-th lens</div>\n                </div>\n            </div>\n            <p>To eliminate curvature of field in a two-lens system, one lens must be positive ($f_1 > 0$) and the other negative ($f_2 < 0$) such that $n_1 f_1 + n_2 f_2 = 0$. An optical system corrected for spherical aberration, coma, astigmatism, and field curvature is termed an <strong>anastigmat</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Optical Distortion: Barrel vs. Pincushion</h2>\n            <p>Distortion arises when the transverse lateral magnification $M_T$ is not uniform across the entire field of view, but varies with radial distance $h$ from the optical axis. Because distortion does not blur points, sharp points are imaged as sharp points, but the geometry of extended objects is warped.</p>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-border-none\"></i> Optical Distortion: Barrel, Undistorted, and Pincushion Grids</div>\n                <span class=\"optics-diagram-badge\">Field Aberration</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Barrel Distortion (Left) -->\n                    <g transform=\"translate(60, 20)\">\n                        <text x=\"90\" y=\"20\" fill=\"#f43f5e\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Barrel Distortion (M decreases)</text>\n                        <!-- Bulging Barrel Grid -->\n                        <path d=\"M 30 50 Q 90 35 150 50 Q 165 110 150 170 Q 90 185 30 170 Q 15 110 30 50 Z\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <path d=\"M 60 43 Q 90 38 120 43 Q 132 110 120 177 Q 90 182 60 177 Q 48 110 60 43 Z\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n                        <line x1=\"90\" y1=\"36\" x2=\"90\" y2=\"184\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n                        <line x1=\"16\" y1=\"110\" x2=\"164\" y2=\"110\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n                        <text x=\"90\" y=\"205\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Stop placed IN FRONT of lens</text>\n                    </g>\n\n                    <!-- Undistorted Ideal Grid (Center) -->\n                    <g transform=\"translate(310, 20)\">\n                        <text x=\"90\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Ideal Orthoscopic Grid</text>\n                        <rect x=\"30\" y=\"50\" width=\"120\" height=\"120\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                        <line x1=\"60\" y1=\"50\" x2=\"60\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"1.2\"/>\n                        <line x1=\"90\" y1=\"50\" x2=\"90\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n                        <line x1=\"120\" y1=\"50\" x2=\"120\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"1.2\"/>\n                        <line x1=\"30\" y1=\"80\" x2=\"150\" y2=\"80\" stroke=\"#10b981\" stroke-width=\"1.2\"/>\n                        <line x1=\"30\" y1=\"110\" x2=\"150\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n                        <line x1=\"30\" y1=\"140\" x2=\"150\" y2=\"140\" stroke=\"#10b981\" stroke-width=\"1.2\"/>\n                        <text x=\"90\" y=\"205\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Zero Distortion (Symmetric)</text>\n                    </g>\n\n                    <!-- Pincushion Distortion (Right) -->\n                    <g transform=\"translate(560, 20)\">\n                        <text x=\"90\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Pincushion Distortion (M increases)</text>\n                        <!-- Inward Pinching Grid -->\n                        <path d=\"M 30 50 Q 90 65 150 50 Q 135 110 150 170 Q 90 155 30 170 Q 45 110 30 50 Z\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        <path d=\"M 60 57 Q 90 62 120 57 Q 108 110 120 163 Q 90 158 60 163 Q 72 110 60 57 Z\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                        <line x1=\"90\" y1=\"65\" x2=\"90\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                        <line x1=\"45\" y1=\"110\" x2=\"135\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                        <text x=\"90\" y=\"205\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Stop placed BEHIND lens</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.4:</strong> Comparison of optical distortion patterns. A stop in front produces barrel distortion (corners compressed); a stop behind produces pincushion distortion (corners stretched).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Elimination of Distortion: The Orthoscopic Doublet</h2>\n            <p>Distortion is completely eliminated in a <strong>symmetrical doublet</strong> consisting of two identical lenses placed symmetrically on either side of a central aperture stop. The barrel distortion of the first half is precisely canceled by the equal and opposite pincushion distortion of the second half.</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the Petzval condition for flattening the curved image surface in a two-lens combination?",
          "options": [
            "n₁/f₁ + n₂/f₂ = 0",
            "1/(n₁ f₁) + 1/(n₂ f₂) = 0",
            "f₁ + f₂ = 0",
            "n₁ f₁ = n₂ f₂"
          ],
          "correctIndex": 1,
          "explanation": "The Petzval condition states that the sum of the inverse products of refractive index and focal length must vanish: 1/(n₁ f₁) + 1/(n₂ f₂) = 0."
        },
        {
          "type": "multiple-choice",
          "question": "Where must an aperture stop be located relative to a single convex lens to produce Barrel Distortion?",
          "options": [
            "In front of the lens",
            "Behind the lens",
            "At the back focal plane",
            "Inside the glass"
          ],
          "correctIndex": 0,
          "explanation": "When an aperture stop is positioned in front of a convex lens, marginal rays are displaced closer to the axis, reducing magnification at the edges (Barrel distortion)."
        },
        {
          "type": "multiple-choice",
          "question": "How does a symmetric doublet lens system achieve zero distortion (orthoscopic imaging)?",
          "options": [
            "By using monochromatic laser light",
            "The front lens barrel distortion is exactly canceled by the rear lens pincushion distortion",
            "By increasing lens thickness",
            "By using concave mirrors"
          ],
          "correctIndex": 1,
          "explanation": "Symmetry about a central aperture stop causes the barrel distortion produced before the stop to be cancelled by the pincushion distortion produced after the stop."
        }
      ]
    },
    "chromatic-aberration-longitudinal-lateral": {
      "id": "chromatic-aberration-longitudinal-lateral",
      "title": "Chromatic Aberration: Longitudinal & Lateral Dispersion",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "8 min read",
      "lead": "Analyze the physical mechanism of chromatic aberration resulting from optical dispersion. Differentiate between longitudinal (axial) and lateral (transverse) chromatic aberration.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Material Dispersion &amp; Fraunhofer Spectral Lines</h2>\n            <p>The refractive index $n$ of transparent optical glass is not constant, but varies inversely with wavelength $\\lambda$ according to Cauchy's empirical formula: $n(\\lambda) = A + \\frac{B}{\\lambda^2} + \\frac{C}{\\lambda^4}$.</p>\n            <p>Because violet light ($\\lambda_v \\approx 400\\text{ nm}$) experiences a higher refractive index than red light ($\\lambda_r \\approx 700\\text{ nm}$), a simple convex lens has a shorter focal length for violet than for red ($f_v < f_r$).</p>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-palette\"></i> Dispersive Power (ω) &amp; Fraunhofer Lines</div>\n                <div class=\"formula-math-display\">\n                    \\omega = \\frac{n_F - n_C}{n_D - 1} = \\frac{df}{f} = \\frac{f_r - f_v}{f}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n_C</span>: Red Hydrogen line ($\\lambda = 656.3\\text{ nm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n_D</span>: Yellow Sodium line ($\\lambda = 589.3\\text{ nm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n_F</span>: Blue Hydrogen line ($\\lambda = 486.1\\text{ nm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">ω</span>: Dispersive power of the lens material</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-rainbow\"></i> Longitudinal (Axial) &amp; Lateral Chromatic Aberration</div>\n                <span class=\"optics-diagram-badge\">Chromatic Dispersion</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"140\" x2=\"780\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Convex Lens -->\n                    <path d=\"M 220 40 A 160 160 0 0 1 220 240 A 160 160 0 0 1 220 40 Z\" fill=\"rgba(56, 189, 248, 0.18)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"220\" y=\"30\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Dispersive Lens</text>\n\n                    <!-- Incident White Light -->\n                    <line x1=\"30\" y1=\"75\" x2=\"220\" y2=\"75\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n                    <line x1=\"30\" y1=\"205\" x2=\"220\" y2=\"205\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n                    <text x=\"100\" y=\"65\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">White Light</text>\n\n                    <!-- Violet Rays (Strong refraction, focus F_v) -->\n                    <line x1=\"220\" y1=\"75\" x2=\"440\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n                    <line x1=\"220\" y1=\"205\" x2=\"440\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n                    <!-- Extension past focus -->\n                    <line x1=\"440\" y1=\"140\" x2=\"650\" y2=\"205\" stroke=\"#a855f7\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n                    <line x1=\"440\" y1=\"140\" x2=\"650\" y2=\"75\" stroke=\"#a855f7\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n\n                    <circle cx=\"440\" cy=\"140\" r=\"4.5\" fill=\"#a855f7\"/>\n                    <text x=\"440\" y=\"160\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">F_v (Violet)</text>\n\n                    <!-- Red Rays (Weaker refraction, focus F_r) -->\n                    <line x1=\"220\" y1=\"75\" x2=\"580\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                    <line x1=\"220\" y1=\"205\" x2=\"580\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                    <circle cx=\"580\" cy=\"140\" r=\"4.5\" fill=\"#ef4444\"/>\n                    <text x=\"580\" y=\"160\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">F_r (Red)</text>\n\n                    <!-- Longitudinal Chromatic Aberration (LCA) Bracket -->\n                    <line x1=\"440\" y1=\"185\" x2=\"580\" y2=\"185\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/>\n                    <line x1=\"440\" y1=\"178\" x2=\"440\" y2=\"192\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/>\n                    <line x1=\"580\" y1=\"178\" x2=\"580\" y2=\"192\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/>\n                    <text x=\"510\" y=\"205\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">LCA = f_r - f_v = ω f_D</text>\n\n                    <!-- Circle of Least Chromatic Confusion -->\n                    <line x1=\"495\" y1=\"115\" x2=\"495\" y2=\"165\" stroke=\"#10b981\" stroke-dasharray=\"4,3\" stroke-width=\"2\"/>\n                    <text x=\"495\" y=\"105\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Least Confusion</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.5:</strong> Longitudinal (axial) chromatic aberration. Shorter violet wavelengths converge at $F_v$, while longer red wavelengths converge at $F_r$, producing color fringing along the axis.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Longitudinal vs. Lateral Chromatic Aberration</h2>\n            <ul>\n                <li><strong>Longitudinal Chromatic Aberration (LCA):</strong> The axial distance along the optical axis separating red and violet focal points: $LCA = f_r - f_v = \\omega f_D$.</li>\n                <li><strong>Lateral Chromatic Aberration (TCA):</strong> The difference in physical image height ($y_r' - y_v'$) produced for an off-axis object, caused by the difference in focal lengths and magnifications.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why does violet light focus closer to a convex lens than red light?",
          "options": [
            "Violet light has higher frequency and higher refractive index (n_v > n_r)",
            "Violet light travels faster in glass",
            "Red light has higher energy",
            "Violet light undergoes diffraction"
          ],
          "correctIndex": 0,
          "explanation": "According to dispersion theory (Cauchy's relation), optical glass exhibits a higher refractive index for shorter wavelengths (n_v > n_r), refracting violet light more strongly."
        },
        {
          "type": "multiple-choice",
          "question": "A convex lens of mean focal length f = 20 cm is made of glass with dispersive power ω = 0.03. What is the longitudinal chromatic aberration?",
          "options": [
            "0.30 cm",
            "0.60 cm",
            "1.20 cm",
            "6.67 cm"
          ],
          "correctIndex": 1,
          "explanation": "LCA = f_r - f_v = ω * f_D = 0.03 * 20 cm = 0.60 cm."
        },
        {
          "type": "multiple-choice",
          "question": "What spectral Fraunhofer lines are standardly used to compute the dispersive power ω?",
          "options": [
            "Alpha, Beta, Gamma",
            "C (Red 656.3 nm), D (Yellow 589.3 nm), F (Blue 486.1 nm)",
            "Infrared and Ultraviolet bounds",
            "Lyman-alpha and Balmer lines"
          ],
          "correctIndex": 1,
          "explanation": "Dispersive power is defined using C (hydrogen red), D (sodium yellow), and F (hydrogen blue) Fraunhofer lines: ω = (n_F - n_C) / (n_D - 1)."
        }
      ]
    },
    "achromatic-combinations": {
      "id": "achromatic-combinations",
      "title": "Achromatism: Achromatic Doublet & Separated Combinations",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "8 min read",
      "lead": "Derive the conditions for achromatism for two lenses in direct contact and two lenses separated by a finite distance. Understand the engineering of cemented achromatic doublets.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>1. Achromatism for Two Lenses in Contact</h2>\n            <p>An optical system is <strong>achromatic</strong> if its composite focal length is identical for two selected wavelengths (typically red $\\lambda_C$ and blue $\\lambda_F$):</p>\n            $$d\\left(\\frac{1}{F}\\right) = 0 \\implies d\\left(\\frac{1}{f_1} + \\frac{1}{f_2}\\right) = 0$$\n            <p>Since $\\frac{df_1}{f_1^2} = -\\frac{\\omega_1}{f_1}$ and $\\frac{df_2}{f_2^2} = -\\frac{\\omega_2}{f_2}$:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-link\"></i> Condition for Achromatism in Contact</div>\n                <div class=\"formula-math-display\">\n                    \\frac{\\omega_1}{f_1} + \\frac{\\omega_2}{f_2} = 0 \\implies \\frac{f_1}{f_2} = -\\frac{\\omega_1}{\\omega_2}\n                </div>\n            </div>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-lightbulb\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Engineering Crown and Flint Doublets</div>\n                    <div class=\"callout-text\">Because dispersive powers $\\omega_1$ and $\\omega_2$ are always positive, $f_1$ and $f_2$ must have <strong>opposite signs</strong> (one convex, one concave). To obtain a net converging doublet ($F > 0$):\n                    $$\\text{Convex Lens: Crown Glass (Lower }\\omega_1\\text{, shorter }f_1) \\quad + \\quad \\text{Concave Lens: Flint Glass (Higher }\\omega_2\\text{, longer }f_2)$$</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-circle-notch\"></i> Cemented Achromatic Doublet</div>\n                <span class=\"optics-diagram-badge\">Achromatic Design</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"140\" x2=\"780\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Crown Convex Lens (Left) -->\n                    <path d=\"M 240 50 A 150 150 0 0 1 240 230 L 290 230 A 150 150 0 0 0 290 50 Z\" fill=\"rgba(56, 189, 248, 0.22)\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                    <text x=\"250\" y=\"38\" fill=\"#0284c7\" font-size=\"11\" font-weight=\"bold\">Crown Glass (Convex, ω₁)</text>\n\n                    <!-- Flint Concave Lens (Cemented on Right) -->\n                    <path d=\"M 290 50 A 150 150 0 0 1 290 230 L 330 230 L 330 50 Z\" fill=\"rgba(168, 85, 247, 0.22)\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n                    <text x=\"340\" y=\"38\" fill=\"#7c3aed\" font-size=\"11\" font-weight=\"bold\">Flint Glass (Concave, ω₂)</text>\n\n                    <!-- Canada Balsam Cement Line -->\n                    <line x1=\"290\" y1=\"50\" x2=\"290\" y2=\"230\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/>\n                    <text x=\"290\" y=\"248\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">Canada Balsam Cement Layer</text>\n\n                    <!-- Incident White Light -->\n                    <line x1=\"40\" y1=\"80\" x2=\"240\" y2=\"80\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n                    <line x1=\"40\" y1=\"200\" x2=\"240\" y2=\"200\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n                    <text x=\"120\" y=\"70\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">Incident White Light</text>\n\n                    <!-- Combined Refracted Red & Violet Rays converging to common focus! -->\n                    <line x1=\"330\" y1=\"92\" x2=\"620\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <line x1=\"330\" y1=\"92\" x2=\"620\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/>\n                    <line x1=\"330\" y1=\"188\" x2=\"620\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <line x1=\"330\" y1=\"188\" x2=\"620\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/>\n\n                    <!-- Common Achromatic Focal Point -->\n                    <circle cx=\"620\" cy=\"140\" r=\"5\" fill=\"#10b981\"/>\n                    <text x=\"620\" y=\"165\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Common Focus F_ach (Red &amp; Blue Unified)</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.6:</strong> Cemented achromatic doublet combining a low-dispersion Crown convex lens with a high-dispersion Flint concave lens. Both red and blue wavelengths meet at a unified focal point.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Achromatism for Two Lenses Separated by Distance $d$</h2>\n            <p>For two thin lenses of focal lengths $f_1, f_2$ separated by distance $d$:</p>\n            $$\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}$$\n            <p>Differentiating with respect to refractive index and setting $d(1/F) = 0$ yields the general condition:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-arrows-left-right\"></i> Achromatism Condition for Separated Lenses</div>\n                <div class=\"formula-math-display\">\n                    d = \\frac{\\omega_1 f_2 + \\omega_2 f_1}{\\omega_1 + \\omega_2}\n                </div>\n            </div>\n            <p><strong>Crucial Special Case:</strong> If both lenses are fabricated from the <em>same glass material</em> ($\\omega_1 = \\omega_2$):</p>\n            $$d = \\frac{\\omega(f_2 + f_1)}{2\\omega} \\implies d = \\frac{f_1 + f_2}{2}$$\n            <p>This explains why the Huygens eyepiece ($f_1 = 3f, f_2 = f, d = 2f$) achieves complete achromatism using lenses of the identical glass!</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What must be the nature of two lenses in contact to form an achromatic doublet?",
          "options": [
            "Both must be convex lenses",
            "Both must be concave lenses",
            "One must be convex and one must be concave made of different glasses",
            "Both must be identical plano-convex lenses"
          ],
          "correctIndex": 2,
          "explanation": "Because ω₁/f₁ + ω₂/f₂ = 0 and both dispersive powers ω > 0, the focal lengths must have opposite signs, requiring one convex and one concave lens."
        },
        {
          "type": "multiple-choice",
          "question": "What separation distance d achieves achromatism for two lenses of the same glass material with focal lengths f₁ = 15 cm and f₂ = 5 cm?",
          "options": [
            "5.0 cm",
            "10.0 cm",
            "20.0 cm",
            "7.5 cm"
          ],
          "correctIndex": 1,
          "explanation": "For identical material, d = (f₁ + f₂) / 2 = (15 + 5) / 2 = 20 / 2 = 10.0 cm."
        },
        {
          "type": "multiple-choice",
          "question": "Why is Canada balsam commonly used to cement the crown and flint lenses in an achromatic doublet?",
          "options": [
            "It is opaque to ultraviolet rays",
            "Its refractive index (n ≈ 1.54) closely matches optical crown glass, minimizing reflection losses at the interface",
            "It acts as a polarizing filter",
            "It has negative dispersion"
          ],
          "correctIndex": 1,
          "explanation": "Canada balsam has a refractive index of approximately 1.54, virtually identical to crown glass, eliminating internal reflection and air-gap losses."
        }
      ]
    },
    "unit2-activities-rubrics": {
      "id": "unit2-activities-rubrics",
      "title": "Unit 2 Student Activity & Assessment Rubric",
      "category": "cat-unit2",
      "track": "track-unit2",
      "readTime": "5 min read",
      "lead": "Student lab observation activity on lens aberrations, image sketching at variable distances, thin glass plate dispersion testing, and 10-point rubric.",
      "toolType": "aberration-visualizer",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Student Activity: Observation &amp; Sketching of Lens Aberrations</h2>\n            <p><strong>Activity Protocol:</strong></p>\n            <ol>\n                <li>Mount a large-aperture bi-convex lens on an optical bench and illuminate with a bright point source. Place an observation screen at varying distances from the lens to locate and sketch:\n                    <ul>\n                        <li>The marginal focal plane (sharp perimeter spot, foggy center).</li>\n                        <li>The circle of least confusion (minimum overall blur radius).</li>\n                        <li>The paraxial focal plane (sharp central point, surrounding flare ring).</li>\n                    </ul>\n                </li>\n                <li>Mount two thin lenses in contact, calculate composite focal length and transverse magnification, then introduce a thin tilted glass plate between lenses to observe chromatic fringing and coma distortion.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>10-Point Student Assessment Rubric</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Assessment Criteria</th><th>Excellent (9-10 Marks)</th><th>Proficient (7-8 Marks)</th><th>Basic (4-6 Marks)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Ray Sketching &amp; Diagram Accuracy (4 Marks)</strong></td>\n                            <td>Accurately drawn and labeled caustic curves, marginal/paraxial foci, circle of least confusion, and coma flare.</td>\n                            <td>Sketches clear but lacking exact caustic envelope markers.</td>\n                            <td>Inaccurate or unlabelled ray paths.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Achromatic Doublet Calculations (3 Marks)</strong></td>\n                            <td>Flawless derivation and numerical verification of $\\omega_1/f_1 + \\omega_2/f_2 = 0$ and separated doublet $d = (f_1+f_2)/2$.</td>\n                            <td>Minor numerical calculation error; formulas applied properly.</td>\n                            <td>Incorrect condition or sign conventions violated.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Experimental Analysis &amp; Viva Voce (3 Marks)</strong></td>\n                            <td>Articulate explanation of aberration minimization methods and clear understanding of Abbe sine condition.</td>\n                            <td>Sound understanding of spherical aberration; partial clarity on Seidel polynomials.</td>\n                            <td>Unable to explain physical causes of coma or astigmatism.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "At the plane of the circle of least confusion, what is the appearance of the image formed by a lens with spherical aberration?",
          "options": [
            "A sharp infinite point",
            "The smallest, most compact circular patch of illumination",
            "A pair of orthogonal lines",
            "A 60-degree cometic flare"
          ],
          "correctIndex": 1,
          "explanation": "The circle of least confusion represents the cross-section along the caustic horn where the overall diameter of the ray bundle reaches its absolute minimum."
        },
        {
          "type": "multiple-choice",
          "question": "If a flat glass plate is placed obliquely in a converging beam of light, what aberrations does it introduce?",
          "options": [
            "Only spherical aberration",
            "Astigmatism, coma, and longitudinal chromatic shift",
            "No aberration whatsoever",
            "Only pincushion distortion"
          ],
          "correctIndex": 1,
          "explanation": "An oblique plane parallel glass plate introduces astigmatism (different optical path lengths in sagittal and tangential planes), coma, and chromatic dispersion."
        },
        {
          "type": "multiple-choice",
          "question": "Why is an achromatic doublet preferred over a single thick lens in astronomical telescope objectives?",
          "options": [
            "It prevents light absorption",
            "It eliminates chromatic color fringing and sharply focuses multiple wavelengths onto the same focal plane",
            "It weighs less than a single lens",
            "It does not require optical glass"
          ],
          "correctIndex": 1,
          "explanation": "An achromatic doublet unifies red and blue focal points, eliminating rainbow halos around bright stars and planets."
        }
      ]
    },
    "laser-fundamentals-coherence": {
      "id": "laser-fundamentals-coherence",
      "title": "Laser Fundamentals & Coherence Properties",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Understand the quantum origin and foundational properties of LASER light: high monochromaticity, spatial and temporal coherence, extreme directionality, and giant brightness.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>What is a Laser?</h2>\n            <p><strong>LASER</strong> is an acronym for <strong>L</strong>ight <strong>A</strong>mplification by <strong>S</strong>timulated <strong>E</strong>mission of <strong>R</strong>adiation. Unlike conventional thermal light sources (incandescent lamps, LEDs) which emit light through independent, spontaneous, out-of-phase wave packets, a laser generates an orderly, coherent avalanche of photons.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Four Hallmark Characteristics of Laser Light</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Property</th><th>Physical Definition</th><th>Quantitative Metric &amp; Comparison</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. High Monochromaticity</strong></td>\n                            <td>Light consisting of essentially a single wavelength with near-zero spectral linewidth $\\Delta\\lambda$.</td>\n                            <td>For He-Ne laser: $\\Delta\\lambda \\sim 10^{-5}\\text{ nm}$, compared to sodium lamp $\\Delta\\lambda \\sim 0.6\\text{ nm}$ ($10,000\\times$ narrower!).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. High Coherence</strong></td>\n                            <td>Constant, deterministic phase relationship between wave components across space and time.</td>\n                            <td>Temporal coherence length $L_c = c \\tau_c = \\frac{\\lambda^2}{\\Delta\\lambda}$ reaches kilometres for stabilized lasers vs. millimetres for thermal lamps.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Extreme Directionality</strong></td>\n                            <td>Negligible beam divergence angle $\\theta$ as the beam propagates over astronomical distances.</td>\n                            <td>$\\theta \\approx 1.22 \\frac{\\lambda}{D} \\sim 1\\text{ milliradian}$. A laser shone at the Moon spreads to only $\\sim 3\\text{ km}$ across $384,000\\text{ km}$!</td>\n                        </tr>\n                        <tr>\n                            <td><strong>4. Gigantic Brightness</strong></td>\n                            <td>Extreme optical power concentrated into an extraordinarily small beam area and solid angle.</td>\n                            <td>Intensity exceeds $10^{12}\\text{ W/m}^2$, millions of times brighter than the surface of the Sun!</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-wave-square\"></i> Coherence Comparison &amp; Laser Beam Divergence</div>\n                <span class=\"optics-diagram-badge\">Laser Characteristics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Incoherent vs Coherent Waves -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#94a3b8\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Incoherent Light (Chaotic Wave Packets)</text>\n                        <!-- Random disconnected wave packets -->\n                        <path d=\"M 20 60 Q 40 40 60 60 Q 80 80 100 60\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <path d=\"M 120 75 Q 140 95 160 75 Q 180 55 200 75\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <path d=\"M 50 100 Q 75 120 100 100 Q 125 80 150 100 Q 175 120 200 100\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        <text x=\"160\" y=\"125\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Random phases, random directions, short L_c</text>\n\n                        <text x=\"160\" y=\"165\" fill=\"#ef4444\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Laser Coherent Light (Continuous Sine Wave)</text>\n                        <!-- Long in-phase sinusoidal laser waves -->\n                        <path d=\"M 20 195 Q 50 170 80 195 Q 110 220 140 195 Q 170 170 200 195 Q 230 220 260 195 Q 290 170 320 195\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" filter=\"drop-shadow(0 0 4px #ef4444)\"/>\n                        <path d=\"M 20 225 Q 50 200 80 225 Q 110 250 140 225 Q 170 200 200 225 Q 230 250 260 225 Q 290 200 320 225\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"160\" y=\"255\" fill=\"#ef4444\" font-size=\"10\" text-anchor=\"middle\">Locked in-phase over kilometers (Long L_c)</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Beam Divergence Angle -->\n                    <g transform=\"translate(420, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"13\" text-anchor=\"middle\">Laser Beam Divergence θ ≈ 1.22 λ / D</text>\n                        <!-- Laser Source Aperture -->\n                        <rect x=\"20\" y=\"100\" width=\"18\" height=\"80\" rx=\"4\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        <circle cx=\"29\" cy=\"140\" r=\"4\" fill=\"#ef4444\"/>\n                        <text x=\"29\" y=\"90\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Aperture D</text>\n\n                        <!-- Expanding Beam Cone -->\n                        <path d=\"M 38 135 L 320 80 L 320 200 L 38 145 Z\" fill=\"rgba(239, 68, 68, 0.12)\"/>\n                        <line x1=\"38\" y1=\"135\" x2=\"320\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <line x1=\"38\" y1=\"145\" x2=\"320\" y2=\"200\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        \n                        <!-- Center Axis -->\n                        <line x1=\"38\" y1=\"140\" x2=\"340\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.2\"/>\n\n                        <!-- Divergence angle theta arc -->\n                        <path d=\"M 120 125 A 30 30 0 0 1 120 155\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"135\" y=\"145\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">θ</text>\n\n                        <!-- Spot size at distance z -->\n                        <line x1=\"320\" y1=\"80\" x2=\"320\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"320\" y=\"220\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Spot Diameter w(z)</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.1:</strong> Contrast between chaotic incoherent wave packets (left) and temporally locked coherent laser waves, along with paraxial diffraction-limited beam divergence $\\theta = 1.22 \\lambda/D$.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Spatial vs. Temporal Coherence</h2>\n            <ul>\n                <li><strong>Spatial (Transverse) Coherence:</strong> Correlation between phase values at two separate points across the transverse wavefront at the same instant $t$. Characterized by Young's double pinhole experiment.</li>\n                <li><strong>Temporal (Longitudinal) Coherence:</strong> Correlation between the phase of a light wave at a given point at time $t$ and at time $t + \\tau$. Characterized by the Michelson interferometer and coherence time $\\tau_c = \\frac{1}{\\Delta\\nu}$.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does the acronym LASER stand for?",
          "options": [
            "Light Amplification by Stimulated Emission of Radiation",
            "Linear Acceleration of Spontaneous Electron Radiations",
            "Light Absorption and Stimulated Energy Recombination",
            "Laser Amplified Source of Electromagnetic Rays"
          ],
          "correctIndex": 0,
          "explanation": "LASER is the internationally recognized acronym for Light Amplification by Stimulated Emission of Radiation."
        },
        {
          "type": "multiple-choice",
          "question": "If a laser has a coherence time τ_c = 10⁻⁸ s, what is its coherence length L_c in vacuum?",
          "options": [
            "3.0 cm",
            "30 cm",
            "3.0 meters",
            "300 meters"
          ],
          "correctIndex": 2,
          "explanation": "L_c = c * τ_c = (3 * 10⁸ m/s) * (10⁻⁸ s) = 3.0 meters."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following optical phenomena is directly demonstrated by the high spatial coherence of laser beams?",
          "options": [
            "Photoelectric effect",
            "Sharp high-contrast Young's double-slit interference fringes",
            "Total internal reflection in glass",
            "Blackbody spectrum"
          ],
          "correctIndex": 1,
          "explanation": "High spatial coherence ensures constant phase across the wavefront, generating sharp, high-contrast interference fringes."
        }
      ]
    },
    "absorption-spontaneous-stimulated-emission": {
      "id": "absorption-spontaneous-stimulated-emission",
      "title": "Interaction of Radiation with Matter: Absorption, Spontaneous & Stimulated Emission",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Examine the three fundamental quantum radiation processes formulated by Albert Einstein in 1917: stimulated absorption, spontaneous emission, and stimulated emission.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Three Quantum Radiation Processes</h2>\n            <p>Consider an idealized two-level atomic system with lower energy state $E_1$ (population $N_1$) and upper state $E_2$ (population $N_2$), separated by energy gap $E_2 - E_1 = h\\nu$:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Process</th><th>Quantum Mechanism</th><th>Transition Rate Equation</th><th>Coherence Properties</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. Stimulated Absorption</strong></td>\n                            <td>An incident resonant photon $h\\nu$ is absorbed, exciting an electron from $E_1 \\to E_2$.</td>\n                            <td>$R_{abs} = B_{12} N_1 \\rho(\\nu)$</td>\n                            <td>Decreases photon count; proportional to radiation energy density $\\rho(\\nu)$.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. Spontaneous Emission</strong></td>\n                            <td>An excited electron in $E_2$ drops naturally to $E_1$ without external influence after lifetime $\\tau_{sp} \\sim 10^{-8}\\text{ s}$.</td>\n                            <td>$R_{sp} = A_{21} N_2$</td>\n                            <td>Photons have random phase, random direction, and random polarization (incoherent thermal light).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Stimulated Emission</strong></td>\n                            <td>An incident resonant photon $h\\nu$ perturbs an excited electron in $E_2$, triggering its transition to $E_1$ with the emission of a <em>second identical photon</em>.</td>\n                            <td>$R_{stim} = B_{21} N_2 \\rho(\\nu)$</td>\n                            <td>Emitted photon has <strong>identical phase, frequency, direction, and polarization</strong> as the incident photon (coherent optical amplification!).</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-atom\"></i> The Three Einstein Radiation Interactions</div>\n                <span class=\"optics-diagram-badge\">Quantum Optics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 260\" width=\"800\" height=\"260\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Panel 1: Stimulated Absorption -->\n                    <g transform=\"translate(20, 20)\">\n                        <rect x=\"0\" y=\"0\" width=\"230\" height=\"220\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                        <text x=\"115\" y=\"30\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1. Stimulated Absorption</text>\n                        \n                        <!-- Energy Levels -->\n                        <line x1=\"30\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"75\" fill=\"#94a3b8\" font-size=\"11\">E₂</text>\n                        <line x1=\"30\" y1=\"160\" x2=\"200\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"165\" fill=\"#94a3b8\" font-size=\"11\">E₁</text>\n\n                        <!-- Electron in E1 -->\n                        <circle cx=\"115\" cy=\"160\" r=\"6\" fill=\"#38bdf8\"/>\n                        <!-- Upward Transition Arrow -->\n                        <line x1=\"115\" y1=\"150\" x2=\"115\" y2=\"80\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n                        \n                        <!-- Incoming Photon Wave -->\n                        <path d=\"M 35 115 Q 50 95 65 115 Q 80 135 95 115\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"65\" y=\"90\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">hν in</text>\n                        <text x=\"115\" y=\"200\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">R_abs = B₁₂ N₁ ρ(ν)</text>\n                    </g>\n\n                    <!-- Panel 2: Spontaneous Emission -->\n                    <g transform=\"translate(285, 20)\">\n                        <rect x=\"0\" y=\"0\" width=\"230\" height=\"220\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"115\" y=\"30\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2. Spontaneous Emission</text>\n                        \n                        <!-- Energy Levels -->\n                        <line x1=\"30\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"75\" fill=\"#94a3b8\" font-size=\"11\">E₂</text>\n                        <line x1=\"30\" y1=\"160\" x2=\"200\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"165\" fill=\"#94a3b8\" font-size=\"11\">E₁</text>\n\n                        <!-- Electron dropping -->\n                        <circle cx=\"115\" cy=\"70\" r=\"6\" fill=\"#fbbf24\"/>\n                        <line x1=\"115\" y1=\"80\" x2=\"115\" y2=\"150\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n                        \n                        <!-- Outgoing Random Photon -->\n                        <path d=\"M 135 115 Q 150 95 165 115 Q 180 135 195 115\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"165\" y=\"90\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">hν out (random)</text>\n                        <text x=\"115\" y=\"200\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">R_sp = A₂₁ N₂</text>\n                    </g>\n\n                    <!-- Panel 3: Stimulated Emission (Laser Action) -->\n                    <g transform=\"translate(550, 20)\">\n                        <rect x=\"0\" y=\"0\" width=\"230\" height=\"220\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"115\" y=\"30\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3. Stimulated Emission</text>\n                        \n                        <!-- Energy Levels -->\n                        <line x1=\"30\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"75\" fill=\"#94a3b8\" font-size=\"11\">E₂</text>\n                        <line x1=\"30\" y1=\"160\" x2=\"200\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <text x=\"20\" y=\"165\" fill=\"#94a3b8\" font-size=\"11\">E₁</text>\n\n                        <!-- Electron in E2 triggered -->\n                        <circle cx=\"115\" cy=\"70\" r=\"6\" fill=\"#ef4444\"/>\n                        <line x1=\"115\" y1=\"80\" x2=\"115\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n\n                        <!-- Incoming Trigger Photon -->\n                        <path d=\"M 30 100 Q 45 80 60 100 Q 75 120 90 100\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"60\" y=\"75\" fill=\"#ef4444\" font-size=\"9\" text-anchor=\"middle\">Trigger hν</text>\n\n                        <!-- Two In-Phase Output Photons -->\n                        <path d=\"M 130 90 Q 145 70 160 90 Q 175 110 190 90\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <path d=\"M 130 130 Q 145 110 160 130 Q 175 150 190 130\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"175\" y=\"65\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">2 Identical hν</text>\n                        <text x=\"115\" y=\"200\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">R_stim = B₂₁ N₂ ρ(ν)</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.2:</strong> Comparison of the three fundamental radiation processes. Stimulated emission produces two identical clone photons possessing the exact same phase, energy, direction, and polarization.\n            </div>\n        </div>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which quantum process is solely responsible for optical amplification in a laser?",
          "options": [
            "Stimulated Absorption",
            "Spontaneous Emission",
            "Stimulated Emission",
            "Rayleigh Scattering"
          ],
          "correctIndex": 2,
          "explanation": "Stimulated emission produces clone photons in identical quantum states (same phase, polarization, frequency, direction), amplifying the light wave coherently."
        },
        {
          "type": "multiple-choice",
          "question": "How are the properties of a photon emitted via stimulated emission related to the incident trigger photon?",
          "options": [
            "Opposite phase and double frequency",
            "Random phase and direction",
            "Identical phase, frequency, direction, and polarization",
            "Orthogonal polarization"
          ],
          "correctIndex": 2,
          "explanation": "The newly emitted photon is an exact twin of the triggering photon in every physical parameter."
        },
        {
          "type": "multiple-choice",
          "question": "Why does spontaneous emission produce incoherent light?",
          "options": [
            "It occurs in vacuum",
            "Each excited atom decays independently at a random time, emitting with random phase and random spatial direction",
            "It absorbs energy from the cavity",
            "It operates only at zero Kelvin"
          ],
          "correctIndex": 1,
          "explanation": "Spontaneous decays occur independently without phase coordination, generating chaotic incoherent wave packets."
        }
      ]
    },
    "population-inversion-pumping": {
      "id": "population-inversion-pumping",
      "title": "Population Inversion, Pumping Schemes & Optical Cavities",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "9 min read",
      "lead": "Understand why optical amplification requires population inversion. Compare 3-level vs. 4-level pumping systems and examine optical feedback in resonant cavities.",
      "toolType": "laser-cavity",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Need for Population Inversion</h2>\n            <p>Under thermal equilibrium at temperature $T$, the ratio of atomic populations in states $E_1$ and $E_2$ is governed by the Boltzmann distribution:</p>\n            $$\\frac{N_2}{N_1} = e^{-(E_2 - E_1)/kT}$$\n            <p>For visible light ($h\\nu \\approx 2\\text{ eV}$) at room temperature ($kT \\approx 0.025\\text{ eV}$), $N_2/N_1 \\approx e^{-80} \\approx 10^{-35}$. Ground state $N_1$ overwhelmingly dominates!</p>\n            <p>Because the stimulated absorption rate ($B_{12} N_1 \\rho$) and stimulated emission rate ($B_{21} N_2 \\rho$) share the identical Einstein coefficient ($B_{12} = B_{21}$), optical amplification requires:</p>\n            $$R_{stim} > R_{abs} \\iff N_2 > N_1 \\quad \\text{(Population Inversion)}$$\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Why a 2-Level System Cannot Lase</h2>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Two-Level Limitation</div>\n                    <div class=\"callout-text\">If intense resonant optical pumping is applied to a 2-level system, absorption drives $N_2$ upward while stimulated emission immediately depopulates $N_2$ back downward at the same rate. At best, saturation is reached where $N_2 = N_1$. Steady-state population inversion ($N_2 > N_1$) is <strong>physically impossible</strong> in a two-level system!</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>3-Level (Ruby) vs. 4-Level (He-Ne) Pumping Schemes</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Pumping Architecture</th><th>Energy Level Hierarchy</th><th>Threshold Energy Requirement</th><th>Typical Example</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>3-Level System</strong></td>\n                            <td>$E_1$ (Ground) $\\to$ Pump to $E_3$ $\\to$ Fast non-radiative decay to $E_2$ (Metastable) $\\to$ Laser transition $E_2 \\to E_1$.</td>\n                            <td><strong>High Threshold:</strong> Terminal laser level is the ground state $E_1$. Over 50% of <em>all</em> atoms in the crystal must be pumped just to reach inversion! Usually operates in pulsed mode.</td>\n                            <td>Ruby Laser ($\\lambda = 694.3\\text{ nm}$)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>4-Level System</strong></td>\n                            <td>$E_1$ (Ground) $\\to$ Pump to $E_4$ $\\to$ Fast decay to $E_3$ (Metastable) $\\to$ Laser transition $E_3 \\to E_2$ $\\to$ Fast depopulation to $E_1$.</td>\n                            <td><strong>Very Low Threshold:</strong> Terminal level $E_2$ is well above ground and naturally unpopulated ($N_2 \\approx 0$). Any small pump population into $E_3$ immediately establishes $N_3 > N_2$. Ideal for continuous-wave (CW) operation.</td>\n                            <td>He-Ne Laser ($\\lambda = 632.8\\text{ nm}$), Nd:YAG</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Optical Resonant Cavity &amp; Threshold Gain</h2>\n            <p>An active medium with gain coefficient $\\gamma(\\nu)$ placed between two parallel mirrors separated by distance $L$ with reflectivities $R_1$ and $R_2$ forms a Fabry-Pérot resonant cavity. For round-trip oscillation:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-arrows-split-up-and-left\"></i> Threshold Gain Condition</div>\n                <div class=\"formula-math-display\">\n                    R_1 R_2 e^{2(\\gamma_{th} - \\alpha)L} = 1 \\implies \\gamma_{th} = \\alpha + \\frac{1}{2L}\\ln\\left(\\frac{1}{R_1 R_2}\\right)\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">γ_th</span>: Threshold optical gain per unit length</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α</span>: Cavity internal loss coefficient (scattering, absorption)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">R_1, R_2</span>: Mirror power reflection coefficients</div>\n                </div>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why can steady-state population inversion NEVER be achieved in a simple 2-level atomic system?",
          "options": [
            "Light speed is too fast",
            "The stimulated absorption coefficient B₁₂ equals the stimulated emission coefficient B₂₁, causing population saturation at N₁ = N₂",
            "Atoms spontaneously ionize",
            "Two-level atoms have zero dipole moment"
          ],
          "correctIndex": 1,
          "explanation": "Because B₁₂ = B₂₁, once N₂ reaches N₁, stimulated emission de-excites atoms at the exact same rate as pump absorption, making N₂ > N₁ impossible."
        },
        {
          "type": "multiple-choice",
          "question": "Why does a 4-level laser require vastly less pumping power to reach threshold than a 3-level laser?",
          "options": [
            "It uses four flash lamps instead of one",
            "The lower lasing state E₂ is situated well above ground and is naturally virtually empty (N₂ ≈ 0), so any small N₃ creates inversion",
            "Four-level lasers only emit in the ultraviolet",
            "It has zero mirror loss"
          ],
          "correctIndex": 1,
          "explanation": "Because the terminal lasing state E₂ is an excited level depopulated rapidly, N₂ ≈ 0 thermally, so population inversion N₃ > N₂ is achieved effortlessly with minimal pump power."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary role of the optical resonant cavity in a laser?",
          "options": [
            "To cool the active gas discharge",
            "To provide positive optical feedback, confining photons to pass back and forth through the gain medium multiple times to build amplification",
            "To prevent spontaneous emission from occurring",
            "To measure the refractive index"
          ],
          "correctIndex": 1,
          "explanation": "The mirrors bounce stimulated photons repeatedly through the inverted medium, building exponential gain and selecting standing wave cavity modes."
        }
      ]
    },
    "einstein-coefficients-relations": {
      "id": "einstein-coefficients-relations",
      "title": "Einstein's Coefficients & Thermodynamic Derivation",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Follow Albert Einstein's 1917 thermodynamic derivation connecting microscopic transition probabilities to Max Planck's blackbody radiation law.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Thermodynamic Equilibrium in a Radiation Cavity</h2>\n            <p>In 1917, Albert Einstein considered an assembly of identical atoms in thermal equilibrium with blackbody electromagnetic radiation of spectral energy density $\\rho(\\nu)$ at temperature $T$.</p>\n            <p>At equilibrium, the rate of upward transitions ($E_1 \\to E_2$) must exactly balance the rate of downward transitions ($E_2 \\to E_1$):</p>\n            $$\\text{Rate Up} = \\text{Rate Down} \\implies B_{12} N_1 \\rho(\\nu) = A_{21} N_2 + B_{21} N_2 \\rho(\\nu)$$\n            <p>Solving for the spectral energy density $\\rho(\\nu)$:</p>\n            $$\\rho(\\nu) = \\frac{A_{21} N_2}{B_{12} N_1 - B_{21} N_2} = \\frac{A_{21}/B_{21}}{\\frac{B_{12}}{B_{21}}\\left(\\frac{N_1}{N_2}\\right) - 1}$$\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Connection with Boltzmann &amp; Planck Laws</h2>\n            <p>According to the Maxwell-Boltzmann distribution, the equilibrium population ratio is $\\frac{N_1}{N_2} = e^{h\\nu/kT}$. Substituting this yields:</p>\n            $$\\rho(\\nu) = \\frac{A_{21}/B_{21}}{\\frac{B_{12}}{B_{21}} e^{h\\nu/kT} - 1}$$\n            <p>This expression must be strictly identical to <strong>Planck's Blackbody Radiation Formula</strong> at all temperatures $T$ and frequencies $\\nu$:</p>\n            $$\\rho(\\nu) = \\frac{8\\pi h \\nu^3}{c^3} \\frac{1}{e^{h\\nu/kT} - 1}$$\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-equals\"></i> The Two Fundamental Einstein Relations</div>\n                <div class=\"formula-math-display\">\n                    \\mathbf{Relation\\ 1:} \\quad B_{12} = B_{21} \\quad \\text{(Absorption probability = Stimulated emission probability)}\n                </div>\n                <div class=\"formula-math-display\">\n                    \\mathbf{Relation\\ 2:} \\quad \\frac{A_{21}}{B_{21}} = \\frac{8\\pi h \\nu^3}{c^3} \\quad \\text{(Ratio of spontaneous to stimulated coefficients)}\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Physical Interpretation: Optical vs. Microwave Frequencies</h2>\n            <p>The ratio of spontaneous emission rate to stimulated emission rate under thermal equilibrium is:</p>\n            $$\\frac{R_{sp}}{R_{stim}} = \\frac{A_{21} N_2}{B_{21} N_2 \\rho(\\nu)} = e^{h\\nu/kT} - 1$$\n            <ul>\n                <li><strong>Microwave Frequencies ($\\nu \\sim 10^9\\text{ Hz}$, Masers):</strong> $h\\nu \\ll kT$, so $e^{h\\nu/kT} - 1 \\ll 1$. Spontaneous emission is negligible; stimulated emission dominates naturally!</li>\n                <li><strong>Optical Frequencies ($\\nu \\sim 5 \\times 10^{14}\\text{ Hz}$, Lasers):</strong> $h\\nu \\gg kT$, so $e^{h\\nu/kT} - 1 \\approx 10^{35}$. Spontaneous emission completely swamped early attempts until Townes, Schawlow, and Maiman introduced optical cavities and intense non-equilibrium pumping.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the relation between Einstein's coefficient of stimulated absorption B₁₂ and stimulated emission B₂₁?",
          "options": [
            "B₁₂ = 2 B₂₁",
            "B₁₂ = B₂₁",
            "B₁₂ = A₂₁ / B₂₁",
            "B₁₂ = 0"
          ],
          "correctIndex": 1,
          "explanation": "Comparing the atomic equilibrium rate balance with Planck's radiation law proves that B₁₂ = B₂₁."
        },
        {
          "type": "multiple-choice",
          "question": "How does the ratio A₂₁ / B₂₁ depend on the optical transition frequency ν?",
          "options": [
            "∝ ν",
            "∝ ν²",
            "∝ ν³",
            "Independent of ν"
          ],
          "correctIndex": 2,
          "explanation": "From Planck's law comparison, A₂₁ / B₂₁ = (8π h ν³) / c³, scaling cubically with frequency ν³."
        },
        {
          "type": "multiple-choice",
          "question": "Why did masers (microwave amplification) succeed before optical lasers?",
          "options": [
            "Because mirrors only reflect microwaves",
            "Because A₂₁ / B₂₁ ∝ ν³, meaning spontaneous emission is extraordinarily weak at low microwave frequencies compared to optical frequencies",
            "Microwaves travel faster than light",
            "Microwave tubes do not require pumping"
          ],
          "correctIndex": 1,
          "explanation": "Because spontaneous noise scales with ν³, microwave transitions have negligible spontaneous loss, making maser amplification much easier to sustain."
        }
      ]
    },
    "he-ne-laser": {
      "id": "he-ne-laser",
      "title": "Helium-Neon (He-Ne) Gas Laser: Energy Transfers & Cavity Optics",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "9 min read",
      "lead": "Study the continuous-wave (CW) Helium-Neon gas laser. Explore collision excitation transfer, Brewster windows for linear polarization, and the classic 632.8 nm red emission.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Operational Overview of the He-Ne Laser</h2>\n            <p>Developed in 1960 by Ali Javan, William Bennett, and Donald Herriott at Bell Labs, the <strong>Helium-Neon (He-Ne) laser</strong> was the world's first continuous-wave (CW) gas laser. It emits a highly directional, narrow-linewidth red beam at <strong>$\\lambda = 632.8\\text{ nm}$</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Laser Construction &amp; Structural Components</h2>\n            <ul>\n                <li><strong>Discharge Tube:</strong> Fused quartz capillary tube ($L \\approx 30\\text{-}50\\text{ cm}$, narrow bore $\\sim 1\\text{-}2\\text{ mm}$ diameter).</li>\n                <li><strong>Active Medium:</strong> Low-pressure gas mixture of Helium and Neon in an approximate ratio of <strong>$10 : 1$</strong> at total pressure $\\sim 1\\text{ Torr}$. Neon provides the lasing energy levels; Helium acts as an efficient pumping transfer catalyst.</li>\n                <li><strong>Electrical Discharge (DC Excitation):</strong> High voltage ($1\\text{-}2\\text{ kV}$, $\\sim 5\\text{-}10\\text{ mA}$) produces energetic electron impacts.</li>\n                <li><strong>Brewster Windows:</strong> Sealed quartz windows cut at Brewster's angle ($\\theta_B \\approx 56.3^\\circ$), eliminating reflection losses for $p$-polarization and producing a <strong>100% linearly polarized output</strong>.</li>\n                <li><strong>Dielectric Cavity Mirrors:</strong> High reflector mirror ($R_1 = 100\\%$) and output coupler mirror ($R_2 \\approx 98.5\\text{-}99\\%$) tuned for 632.8 nm.</li>\n            </ul>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-plug-circle-bolt\"></i> Helium-Neon Laser Mechanical &amp; Optical Schematic</div>\n                <span class=\"optics-diagram-badge\">Laser Construction</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Laser Tube Enclosure -->\n                    <rect x=\"120\" y=\"80\" width=\"540\" height=\"90\" rx=\"8\" fill=\"rgba(239, 68, 68, 0.06)\" stroke=\"#475569\" stroke-width=\"2\"/>\n                    <text x=\"390\" y=\"70\" fill=\"#94a3b8\" font-size=\"11\" font-family=\"JetBrains Mono\" text-anchor=\"middle\">Capillary Discharge Tube: He + Ne (10:1 Mixture)</text>\n\n                    <!-- Brewster Windows (Slanted at 56 deg) -->\n                    <line x1=\"125\" y1=\"80\" x2=\"145\" y2=\"170\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n                    <text x=\"110\" y=\"200\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Brewster Window (56°)</text>\n                    \n                    <line x1=\"635\" y1=\"80\" x2=\"655\" y2=\"170\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n                    <text x=\"655\" y=\"200\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Brewster Window (56°)</text>\n\n                    <!-- Cavity Mirror Left (100% R) -->\n                    <rect x=\"70\" y=\"70\" width=\"14\" height=\"110\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                    <text x=\"77\" y=\"60\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">R₁ = 100%</text>\n\n                    <!-- Cavity Mirror Right (Output Coupler 99% R) -->\n                    <rect x=\"690\" y=\"70\" width=\"14\" height=\"110\" rx=\"3\" fill=\"#818cf8\" stroke=\"#4338ca\" stroke-width=\"2\"/>\n                    <text x=\"697\" y=\"60\" fill=\"#818cf8\" font-size=\"10\" text-anchor=\"middle\">R₂ = 99%</text>\n\n                    <!-- Electrodes: Anode & Cathode -->\n                    <circle cx=\"220\" cy=\"80\" r=\"7\" fill=\"#fbbf24\"/>\n                    <line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"80\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                    <text x=\"220\" y=\"32\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Anode (+)</text>\n\n                    <circle cx=\"560\" cy=\"80\" r=\"7\" fill=\"#38bdf8\"/>\n                    <line x1=\"560\" y1=\"40\" x2=\"560\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"560\" y=\"32\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Cathode (-)</text>\n\n                    <!-- Laser Standing Wave Inside -->\n                    <line x1=\"84\" y1=\"125\" x2=\"690\" y2=\"125\" stroke=\"#ef4444\" stroke-width=\"4\" filter=\"drop-shadow(0 0 6px #ef4444)\"/>\n\n                    <!-- Emerging Laser Output Beam -->\n                    <line x1=\"704\" y1=\"125\" x2=\"780\" y2=\"125\" stroke=\"#ef4444\" stroke-width=\"3\" filter=\"drop-shadow(0 0 8px #ef4444)\"/>\n                    <polygon points=\"780,125 765,120 765,130\" fill=\"#ef4444\"/>\n                    <text x=\"740\" y=\"112\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">632.8 nm Red Beam</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.3:</strong> Mechanical and optical assembly of the Helium-Neon continuous-wave laser, showing the quartz capillary, discharge electrodes, Brewster-angle windows, and dielectric cavity mirrors.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Quantum Energy Level Transfers in He-Ne</h2>\n            <ol>\n                <li><strong>Electron Collision Pumping:</strong> Fast electrons in the gas discharge collide with ground-state Helium atoms:\n                $$e^- + \\text{He}(1^1S) \\to \\text{He}^*(2^3S_1 \\text{ at } 19.82\\text{ eV and } 2^1S_0 \\text{ at } 20.61\\text{ eV}) + e^-$$\n                These Helium states are <em>metastable</em> because selection rules forbid dipole transitions to ground.</li>\n                <li><strong>Resonant Collision Energy Transfer:</strong> Excited Helium atoms collide with ground-state Neon atoms. Due to a near-exact energy resonance ($\\Delta E < 0.05\\text{ eV}$), energy is transferred directly to Neon:\n                $$\\text{He}^*(2^1S_0) + \\text{Ne}(1s) \\to \\text{He}(1^1S) + \\text{Ne}^*(3s_2) \\quad (\\Delta E = 0.05\\text{ eV})$$\n                $$\\text{He}^*(2^3S_1) + \\text{Ne}(1s) \\to \\text{He}(1^1S) + \\text{Ne}^*(2s_2) \\quad (\\Delta E = 0.04\\text{ eV})$$</li>\n                <li><strong>Lasing Transitions in Neon:</strong> Population inversion builds up between the populated $3s$ levels and lower $2p$ levels:\n                $$\\mathbf{3s_2 \\to 2p_4 \\implies \\lambda = 632.8\\text{ nm (Bright Red Laser)}}$$\n                $$3s_2 \\to 3p_4 \\implies \\lambda = 3.39\\text{ }\\mu\\text{m (Mid-IR)}$$\n                $$2s_2 \\to 2p_4 \\implies \\lambda = 1.15\\text{ }\\mu\\text{m (Near-IR)}$$</li>\n                <li><strong>Depopulation to Ground:</strong> Atoms in $2p_4$ decay rapidly via spontaneous emission to the $1s$ state ($\\sim 10^{-8}\\text{ s}$), maintaining the inversion. Finally, $1s$ atoms lose energy by colliding with the capillary tube walls, resetting to ground. (This is why narrow bore tubes are essential!).</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary wavelength of the visible beam emitted by a standard Helium-Neon laser?",
          "options": [
            "532.0 nm (Green)",
            "632.8 nm (Red)",
            "694.3 nm (Deep Red)",
            "1064 nm (Infrared)"
          ],
          "correctIndex": 1,
          "explanation": "The standard visible He-Ne laser line transitions from 3s₂ to 2p₄ in Neon at exactly 632.8 nm in air."
        },
        {
          "type": "multiple-choice",
          "question": "What role does Helium play in the He-Ne gas laser?",
          "options": [
            "Helium atoms emit the laser photons directly",
            "Helium atoms are excited by electron collision and transfer their excitation energy to Neon via resonant collisions",
            "Helium acts solely as a cooling fluid",
            "Helium absorbs stray ultraviolet rays"
          ],
          "correctIndex": 1,
          "explanation": "Helium does not emit the laser light; its metastable 2s states efficiently absorb electrical energy and pump Neon atoms via resonant collisions."
        },
        {
          "type": "multiple-choice",
          "question": "Why are the end windows of a He-Ne laser cut at Brewster's angle?",
          "options": [
            "To magnify the beam",
            "To eliminate reflection losses for p-polarized light, creating a completely linearly polarized laser beam",
            "To prevent gas from escaping",
            "To focus the beam onto the mirror"
          ],
          "correctIndex": 1,
          "explanation": "Brewster's angle ensures zero reflection loss for p-polarization, yielding maximum gain and pure linear polarization."
        }
      ]
    },
    "ruby-laser": {
      "id": "ruby-laser",
      "title": "Ruby Crystal Laser: Solid-State 3-Level Operation",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Examine the historic first working laser: Theodore Maiman's 1960 Ruby laser. Understand 3-level optical pumping, chromium ion energy dynamics, and pulsed 694.3 nm emission.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The First Working Laser in History (1960)</h2>\n            <p>Constructed on May 16, 1960, by Theodore H. Maiman at Hughes Research Laboratories, the <strong>Ruby Laser</strong> was the first optical laser ever operated. It is a solid-state three-level optically pumped system generating intense pulses of deep-red light at <strong>$\\lambda = 694.3\\text{ nm}$</strong>.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Structure &amp; Components of Ruby Laser</h2>\n            <ul>\n                <li><strong>Active Medium:</strong> Synthetic pink ruby crystal cylindrical rod (corundum $Al_2O_3$ doped with approximately <strong>$0.05\\%$ Chromium ions $Cr^{3+}$</strong> by weight). Typically $2\\text{-}10\\text{ cm}$ long and $0.5\\text{-}1\\text{ cm}$ in diameter.</li>\n                <li><strong>Resonant Cavity:</strong> The two ends of the ruby rod are ground flat, parallel to within fractions of a wavelength, and optically polished. One end is heavily silvered ($100\\%$ reflection), while the opposite output end is partially silvered ($\\sim 90\\text{-}95\\%$ reflection).</li>\n                <li><strong>Optical Pumping Source:</strong> A helical Xenon flash tube surrounding the ruby rod, energized by a high-voltage capacitor bank ($1\\text{-}2\\text{ kV}$).</li>\n                <li><strong>Cooling System:</strong> Liquid nitrogen or circulating chilled water to dissipate intense flash heat.</li>\n            </ul>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-gem\"></i> Ruby Laser Assembly &amp; 3-Level Quantum Energy Dynamics</div>\n                <span class=\"optics-diagram-badge\">Solid-State Laser</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Physical Assembly -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#f43f5e\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Ruby Crystal &amp; Helical Xenon Flash Tube</text>\n\n                        <!-- Ruby Rod -->\n                        <rect x=\"50\" y=\"95\" width=\"220\" height=\"40\" rx=\"4\" fill=\"rgba(244, 63, 94, 0.3)\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <text x=\"160\" y=\"120\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Al₂O₃ : Cr³⁺ (Pink Ruby)</text>\n\n                        <!-- 100% Mirror Left -->\n                        <rect x=\"42\" y=\"90\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <text x=\"46\" y=\"80\" fill=\"#38bdf8\" font-size=\"9\" text-anchor=\"middle\">100%</text>\n\n                        <!-- 90% Mirror Right -->\n                        <rect x=\"270\" y=\"90\" width=\"8\" height=\"50\" fill=\"#818cf8\"/>\n                        <text x=\"274\" y=\"80\" fill=\"#818cf8\" font-size=\"9\" text-anchor=\"middle\">90%</text>\n\n                        <!-- Helical Xenon Lamp Coil -->\n                        <path d=\"M 60 70 Q 75 50 90 70 Q 105 90 120 70 Q 135 50 150 70 Q 165 90 180 70 Q 195 50 210 70 Q 225 90 240 70 Q 255 50 270 70\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"4\"/>\n                        <path d=\"M 60 160 Q 75 180 90 160 Q 105 140 120 160 Q 135 180 150 160 Q 165 140 180 160 Q 195 180 210 160 Q 225 140 240 160 Q 255 180 270 160\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"4\"/>\n                        <text x=\"160\" y=\"215\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Xenon Helical Flash Lamp</text>\n\n                        <!-- Emitted Laser Beam -->\n                        <line x1=\"278\" y1=\"115\" x2=\"340\" y2=\"115\" stroke=\"#ef4444\" stroke-width=\"3.5\" filter=\"drop-shadow(0 0 6px #ef4444)\"/>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"390\" y1=\"20\" x2=\"390\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Cr3+ Energy Level Diagram -->\n                    <g transform=\"translate(420, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#e2e8f0\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">3-Level Energy Diagram of Cr³⁺</text>\n\n                        <!-- Ground State E1 (^4A_2) -->\n                        <line x1=\"40\" y1=\"210\" x2=\"300\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n                        <text x=\"40\" y=\"230\" fill=\"#94a3b8\" font-size=\"11\">E₁ : Ground State (⁴A₂)</text>\n\n                        <!-- Metastable State E2 (^2E) -->\n                        <line x1=\"40\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                        <text x=\"40\" y=\"110\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">E₂ : Metastable State (²E, τ ~ 3 ms)</text>\n\n                        <!-- Broad Pump Bands E3 (^4F_1, ^4F_2) -->\n                        <rect x=\"40\" y=\"45\" width=\"260\" height=\"25\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n                        <text x=\"170\" y=\"62\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">E₃ : Pump Bands (⁴F₁, ⁴F₂)</text>\n\n                        <!-- Optical Pumping Flash (Green 550nm / Blue 400nm) -->\n                        <line x1=\"90\" y1=\"210\" x2=\"90\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n                        <text x=\"95\" y=\"165\" fill=\"#10b981\" font-size=\"10\">Flash Pump</text>\n\n                        <!-- Non-radiative fast decay (phonon relaxation) -->\n                        <path d=\"M 180 70 L 180 120\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"190\" y=\"95\" fill=\"#fbbf24\" font-size=\"10\">Fast Decay (~10⁻¹¹ s)</text>\n\n                        <!-- Stimulated Laser Transition 694.3 nm -->\n                        <line x1=\"250\" y1=\"120\" x2=\"250\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"3\" filter=\"drop-shadow(0 0 4px #ef4444)\"/>\n                        <text x=\"255\" y=\"170\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">λ = 694.3 nm</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.4:</strong> Construction of the pulsed Ruby laser (left) and the 3-level energy scheme of $Cr^{3+}$ ions in $Al_2O_3$ (right).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Pumping Mechanism &amp; Why the Ruby Laser is Pulsed</h2>\n            <ol>\n                <li><strong>Optical Pumping:</strong> Intense white flash from the Xenon tube excites $Cr^{3+}$ ions from ground state $^4A_2$ into the broad absorption bands $^4F_1$ (blue, $\\sim 400\\text{ nm}$) and $^4F_2$ (green, $\\sim 550\\text{ nm}$).</li>\n                <li><strong>Rapid Non-Radiative Decay:</strong> Excited ions relax within $\\sim 10^{-11}\\text{ s}$ to the metastable state $^2E$ by transferring energy to the crystal lattice vibrations (phonons).</li>\n                <li><strong>Metastable Accumulation:</strong> State $^2E$ has a long spontaneous lifetime ($\\tau \\approx 3\\text{ ms}$, about $10^5\\times$ longer than normal states), allowing huge numbers of chromium ions to accumulate.</li>\n                <li><strong>Population Inversion &amp; Lasing:</strong> Once $>50\\%$ of the chromium ions leave ground state $^4A_2$ and reside in $^2E$, population inversion ($N_2 > N_1$) is achieved. Stimulated emission produces a 694.3 nm laser pulse.</li>\n                <li><strong>Why Pulsed?</strong> Because the terminal level is the ground state, pumping requires gigantic flash lamp energy that rapidly overheats the rod, necessitating pulsed operation.</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the active dopant ion responsible for laser action in a synthetic ruby crystal?",
          "options": [
            "Neodymium (Nd³⁺)",
            "Chromium (Cr³⁺)",
            "Titanium (Ti³⁺)",
            "Helium (He)"
          ],
          "correctIndex": 1,
          "explanation": "Pink ruby is aluminum oxide (Al₂O₃) doped with approximately 0.05% trivalent chromium ions (Cr³⁺)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the emission wavelength of a Ruby laser at room temperature?",
          "options": [
            "532.0 nm",
            "632.8 nm",
            "694.3 nm",
            "1064 nm"
          ],
          "correctIndex": 2,
          "explanation": "The Ruby laser emits characteristic deep-red pulses at λ = 694.3 nm (the R₁ transition of Cr³⁺)."
        },
        {
          "type": "multiple-choice",
          "question": "Why does a ruby laser operate predominantly in pulsed mode rather than continuous-wave (CW)?",
          "options": [
            "It has no mirrors",
            "It is a 3-level system whose lower laser level is the ground state, requiring over 50% of all atoms to be pumped, which creates extreme thermal heat",
            "Ruby crystals shatter under continuous light",
            "Chromium ions have zero spontaneous emission"
          ],
          "correctIndex": 1,
          "explanation": "Because it is a 3-level laser with terminal ground level, massive flash power is required to invert >50% of the ground population, causing thermal buildup that precludes easy CW operation."
        }
      ]
    },
    "semiconductor-laser": {
      "id": "semiconductor-laser",
      "title": "Semiconductor Laser: p-n Junction Diode Physics",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Discover semiconductor injection lasers (Laser Diodes). Study degenerate p-n junctions, direct bandgap recombination, cleaved facet optical cavities, and heterostructures.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Principle of the Semiconductor Injection Laser Diode</h2>\n            <p>Unlike gas or solid-state crystal lasers that rely on discrete atomic energy levels, semiconductor lasers operate via <strong>direct interband electron-hole recombination across the energy bandgap $E_g$</strong>.</p>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-bolt\"></i> Emission Wavelength &amp; Energy Bandgap Relation</div>\n                <div class=\"formula-math-display\">\n                    h\\nu \\approx E_g \\implies \\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{E_g(\\text{eV})}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">E_g(GaAs)</span>: $1.42\\text{ eV}$ at 300 K $\\implies \\lambda \\approx 870\\text{ nm}$ (Near-IR)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">E_g(InGaAsP)</span>: Engineered from $0.8\\text{-}1.4\\text{ eV} \\implies \\lambda = 1310\\text{ and } 1550\\text{ nm}$</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Direct vs. Indirect Bandgap Semiconductors</h2>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Why Silicon Cannot Be Used for Lasers</div>\n                    <div class=\"callout-text\">\n                        <ul>\n                            <li><strong>Direct Bandgap (e.g., GaAs, InP, GaN):</strong> The conduction band minimum and valence band maximum occur at the <em>same crystal momentum $\\mathbf{k} = 0$</em>. Electron-hole recombination is a fast, highly efficient direct radiative process emitting a photon without phonon assistance.</li>\n                            <li><strong>Indirect Bandgap (e.g., Silicon, Germanium):</strong> The band extrema occur at different momentum $\\mathbf{k}$. Transition requires simultaneous absorption/emission of a lattice phonon ($\\Delta \\mathbf{k} \\neq 0$), making radiative recombination orders of magnitude slower than non-radiative thermal loss.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-microchip\"></i> Degenerate p-n Junction Band Diagram &amp; Laser Diode Chip</div>\n                <span class=\"optics-diagram-badge\">Semiconductor Photonics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Energy Band Diagram under Heavy Forward Bias -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Heavy Forward Bias: Population Inversion</text>\n                        <!-- P-side bands -->\n                        <line x1=\"20\" y1=\"60\" x2=\"100\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                        <text x=\"25\" y=\"50\" fill=\"#f43f5e\" font-size=\"10\">E_c (p-side)</text>\n                        <line x1=\"20\" y1=\"160\" x2=\"100\" y2=\"160\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <text x=\"25\" y=\"180\" fill=\"#38bdf8\" font-size=\"10\">E_v (p-side)</text>\n\n                        <!-- Quasi Fermi level E_Fp inside valence band -->\n                        <line x1=\"20\" y1=\"145\" x2=\"100\" y2=\"145\" stroke=\"#fbbf24\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n                        <text x=\"25\" y=\"140\" fill=\"#fbbf24\" font-size=\"10\">E_Fp (Holes)</text>\n\n                        <!-- Junction active transition zone -->\n                        <path d=\"M 100 60 C 140 60, 160 120, 200 120\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <path d=\"M 100 160 C 140 160, 160 220, 200 220\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n                        <!-- Active Inversion Layer (Shaded) -->\n                        <rect x=\"115\" y=\"60\" width=\"70\" height=\"100\" fill=\"rgba(239, 68, 68, 0.15)\"/>\n                        <text x=\"150\" y=\"115\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Active Inversion Layer</text>\n\n                        <!-- N-side bands -->\n                        <line x1=\"200\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n                        <text x=\"260\" y=\"110\" fill=\"#f43f5e\" font-size=\"10\">E_c (n-side)</text>\n                        <line x1=\"200\" y1=\"220\" x2=\"300\" y2=\"220\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <text x=\"260\" y=\"240\" fill=\"#38bdf8\" font-size=\"10\">E_v (n-side)</text>\n\n                        <!-- Quasi Fermi level E_Fn inside conduction band -->\n                        <line x1=\"200\" y1=\"135\" x2=\"300\" y2=\"135\" stroke=\"#fbbf24\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n                        <text x=\"250\" y=\"150\" fill=\"#fbbf24\" font-size=\"10\">E_Fn (Electrons)</text>\n\n                        <text x=\"150\" y=\"255\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Condition: E_Fn - E_Fp &gt; hν &gt; E_g</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Laser Diode Chip Structure -->\n                    <g transform=\"translate(400, 20)\">\n                        <text x=\"180\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Laser Diode Chip &amp; Cleaved Mirrors</text>\n\n                        <!-- Metallic Top Contact -->\n                        <rect x=\"50\" y=\"55\" width=\"240\" height=\"15\" fill=\"#fbbf24\"/>\n                        <text x=\"170\" y=\"67\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Top Metal Contact (Anode +)</text>\n\n                        <!-- p-type layer -->\n                        <rect x=\"50\" y=\"70\" width=\"240\" height=\"40\" fill=\"#818cf8\"/>\n                        <text x=\"170\" y=\"95\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">p-GaAs Layer</text>\n\n                        <!-- Active Depletion Layer -->\n                        <rect x=\"50\" y=\"110\" width=\"240\" height=\"16\" fill=\"#ef4444\" filter=\"drop-shadow(0 0 4px #ef4444)\"/>\n                        <text x=\"170\" y=\"122\" fill=\"#ffffff\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Active Junction (~0.2 µm)</text>\n\n                        <!-- n-type substrate -->\n                        <rect x=\"50\" y=\"126\" width=\"240\" height=\"60\" fill=\"#38bdf8\"/>\n                        <text x=\"170\" y=\"160\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">n-GaAs Substrate</text>\n\n                        <!-- Bottom Contact -->\n                        <rect x=\"50\" y=\"186\" width=\"240\" height=\"15\" fill=\"#fbbf24\"/>\n                        <text x=\"170\" y=\"198\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Bottom Metal Contact (Cathode -)</text>\n\n                        <!-- Cleaved Facet Optical Mirrors -->\n                        <line x1=\"50\" y1=\"55\" x2=\"50\" y2=\"201\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n                        <line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"201\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n                        <text x=\"50\" y=\"225\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Cleaved Facet</text>\n                        <text x=\"290\" y=\"225\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Output Facet</text>\n\n                        <!-- Diverging Laser Beam -->\n                        <polygon points=\"290,118 360,90 360,146\" fill=\"rgba(239, 68, 68, 0.25)\"/>\n                        <line x1=\"290\" y1=\"118\" x2=\"360\" y2=\"90\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <line x1=\"290\" y1=\"118\" x2=\"360\" y2=\"146\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"365\" y=\"122\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">Laser Output</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.5:</strong> Semiconductor injection laser physics: Degenerate band bending under forward bias creating the active inversion layer (left), and semiconductor chip structure utilizing natural cleaved facets as cavity mirrors (right).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Natural Cleaved Cavity Mirrors &amp; Key Merits</h2>\n            <ul>\n                <li><strong>Built-In Cavity Mirrors:</strong> The refractive index of GaAs is very high ($n \\approx 3.6$). The Fresnel reflection at the semiconductor-air interface is naturally:\n                $$R = \\left(\\frac{n - 1}{n + 1}\\right)^2 = \\left(\\frac{3.6 - 1}{3.6 + 1}\\right)^2 = \\left(\\frac{2.6}{4.6}\\right)^2 \\approx 32\\%$$\n                This $32\\%$ reflectance at each cleaved crystalline facet is completely sufficient to provide cavity feedback without needing separate external mirrors!</li>\n                <li><strong>Key Advantages:</strong> Ultra-compact chip size ($<1\\text{ mm}$), direct electrical battery operation, exceptional wall-plug efficiency ($>40\\%$), and direct modulation at Gigahertz rates for fiber optics.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why is Gallium Arsenide (GaAs) suitable for laser diodes while Silicon (Si) is not?",
          "options": [
            "Silicon is too expensive",
            "GaAs has a direct bandgap allowing efficient radiative recombination, whereas Silicon has an indirect bandgap requiring phonon interaction",
            "GaAs has zero electrical resistance",
            "Silicon cannot be doped"
          ],
          "correctIndex": 1,
          "explanation": "In direct-bandgap GaAs, the conduction band minimum aligns with the valence band maximum at k = 0, allowing rapid direct photon emission."
        },
        {
          "type": "multiple-choice",
          "question": "What provides the optical resonant cavity feedback in a standard semiconductor laser diode?",
          "options": [
            "Two large external spherical mirrors",
            "The naturally cleaved, polished crystalline end facets of the semiconductor chip itself (R ≈ 32%)",
            "Prism beam splitters",
            "A liquid nitrogen dewar"
          ],
          "correctIndex": 1,
          "explanation": "Because of the high refractive index of GaAs (n ≈ 3.6), clean cleavage along crystal planes provides natural ~32% Fresnel reflection at both ends."
        },
        {
          "type": "multiple-choice",
          "question": "What is the condition on the quasi-Fermi levels (E_Fn, E_Fp) for population inversion in a semiconductor laser (Bernard-Duraffourg condition)?",
          "options": [
            "E_Fn = E_Fp",
            "E_Fn - E_Fp > hν > E_g",
            "E_Fn - E_Fp < E_g",
            "E_Fn + E_Fp = 0"
          ],
          "correctIndex": 1,
          "explanation": "The separation between electron and hole quasi-Fermi levels must exceed the photon energy, which in turn must exceed the bandgap: E_Fn - E_Fp > hν > E_g."
        }
      ]
    },
    "laser-applications-industry-medicine": {
      "id": "laser-applications-industry-medicine",
      "title": "Industrial, Medical & Scientific Applications of Lasers",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "8 min read",
      "lead": "Survey the multi-disciplinary applications of lasers across industrial manufacturing, precision surgery, high-speed fiber communications, and metrology.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Transformative Impact of Laser Technology</h2>\n            <p>From Theodore Maiman's initial description of the laser as <em>\"a solution looking for a problem\"</em>, laser technology has transformed modern industry, healthcare, telecommunications, national defense, and fundamental scientific research.</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Domain</th><th>Specific Application</th><th>Laser Type Employed</th><th>Underlying Physical Principle</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Material Processing &amp; Industry</strong></td>\n                            <td>High-speed sheet metal cutting, deep-penetration keyhole welding, micro-drilling, surface hardening, and selective laser melting (3D metal printing).</td>\n                            <td>High-power Fiber Lasers, $CO_2$ Lasers ($10.6\\text{ }\\mu\\text{m}$), Nd:YAG ($1064\\text{ nm}$).</td>\n                            <td>Enormous power density ($>10^7\\text{ W/cm}^2$) causing instantaneous vaporization and melting of metals with narrow heat-affected zones (HAZ).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Medicine &amp; Surgery</strong></td>\n                            <td>LASIK corneal reshaping for myopia correction, retinal detachment photocoagulation, kidney stone lithotripsy, endoscopic tumor ablation, and tattoo removal.</td>\n                            <td>ArF Excimer Laser ($193\\text{ nm}$), Argon Ion Laser ($488/514\\text{ nm}$), Holmium:YAG ($2.1\\text{ }\\mu\\text{m}$), Q-switched Ruby.</td>\n                            <td>Wavelength-selective tissue absorption: UV photoablation breaks molecular bonds without thermal necrosis; blue/green coagulates hemoglobin; mid-IR vaporizes water.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Telecommunications</strong></td>\n                            <td>Transoceanic undersea and terrestrial optical fiber networks, dense wavelength division multiplexing (DWDM), and free-space satellite laser links.</td>\n                            <td>Distributed Feedback (DFB) Semiconductor InGaAsP Lasers, VCSELs ($850, 1310, 1550\\text{ nm}$).</td>\n                            <td>High direct modulation bandwidth ($>40\\text{ Gbps}$), near-zero chirp, low fiber dispersion, and optical amplification via EDFAs.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Metrology &amp; Defense</strong></td>\n                            <td>LIDAR for autonomous navigation, satellite laser ranging, laser gyro navigation (Sagnac effect), and laser target designators.</td>\n                            <td>Diode-Pumped Solid-State (DPSS) Lasers, He-Ne lasers.</td>\n                            <td>Time-of-flight (ToF) distance measurement $\\Delta t = 2d/c$, and high spatial coherence interferometry.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Fundamental Physics</strong></td>\n                            <td>Laser cooling and trapping of atoms (Bose-Einstein Condensation), gravitational wave detection (LIGO/Virgo), and laser fusion (NIF).</td>\n                            <td>Ultra-stable frequency-stabilized Nd:YAG lasers, multi-beam megajoule glass lasers.</td>\n                            <td>Radiation pressure Doppler cooling, sub-attometer Michelson interferometry over $4\\text{ km}$ arms.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which laser is standardly used in LASIK eye surgery to reshape corneal tissue without burning?",
          "options": [
            "ArF Excimer Laser (193 nm)",
            "CO₂ Laser (10.6 µm)",
            "Ruby Laser (694.3 nm)",
            "He-Ne Laser (632.8 nm)"
          ],
          "correctIndex": 0,
          "explanation": "The 193 nm deep-ultraviolet ArF excimer laser performs photoablative decomposition, breaking molecular bonds cleanly with sub-micron precision."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary wavelength used in long-haul transoceanic fiber-optic communications?",
          "options": [
            "632.8 nm",
            "850 nm",
            "1310 nm",
            "1550 nm"
          ],
          "correctIndex": 3,
          "explanation": "The 1550 nm transmission window represents the absolute attenuation minimum (~0.2 dB/km) in silica optical fibers."
        },
        {
          "type": "multiple-choice",
          "question": "How did the LIGO observatory detect gravitational waves from colliding black holes?",
          "options": [
            "By counting gamma-ray bursts",
            "Using ultra-stable laser interferometry with 4-km arms to measure spacetime strain changes smaller than a proton radius",
            "By radio telescope dish rotation",
            "Using seismic sound meters"
          ],
          "correctIndex": 1,
          "explanation": "LIGO operates giant Michelson laser interferometers to measure infinitesimal arm length variations caused by passing gravitational waves."
        }
      ]
    },
    "unit3-activities-rubrics": {
      "id": "unit3-activities-rubrics",
      "title": "Unit 3 Student Activity & Assessment Rubric",
      "category": "cat-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Student hands-on project guide: Laser Audio Communication Demo (transmitting voice signals via intensity-modulated laser beam), and 10-point assessment rubric.",
      "toolType": "laser-cavity",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Student Project: Laser Voice &amp; Audio Communication System</h2>\n            <p><strong>Project Goal:</strong> Construct an open-air optical wireless communication link to transmit real-time voice and musical audio signals across the laboratory using an intensity-modulated laser diode transmitter and a photodiode receiver.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-satellite-dish\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Circuit Architecture &amp; Mechanism</div>\n                    <div class=\"callout-text\">\n                        <ul>\n                            <li><strong>Transmitter Circuit:</strong> A $5\\text{ mW}$ semiconductor laser diode ($650\\text{ nm}$) biased above its threshold current with a DC offset ($I_{bias} \\approx 25\\text{ mA}$). An audio signal from a microphone or phone is AC-coupled via a capacitor and transistor amplifier to modulate the laser drive current: $I(t) = I_{bias} + \\Delta I \\cos(\\omega t)$. The optical power output faithfully mimics the audio signal!</li>\n                            <li><strong>Receiver Circuit:</strong> A silicon PIN photodiode or solar cell placed across the room intercepts the laser beam. The photodiode generates a photocurrent proportional to optical power ($i_{photo}(t) = \\mathcal{R} P(t)$). The signal is amplified by an audio IC (e.g., LM386) and fed to a loudspeaker, reproducing crystal-clear voice!</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>10-Point Student Assessment Rubric</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Assessment Dimension</th><th>Excellent (9-10 Marks)</th><th>Proficient (7-8 Marks)</th><th>Basic (4-6 Marks)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Circuit Design &amp; Assembly (4 Marks)</strong></td>\n                            <td>Clean, noise-free circuit assembly; proper DC biasing above threshold; clear audio transmission over $>5\\text{ meters}$.</td>\n                            <td>System operational over short range ($1\\text{-}2\\text{ m}$); slight audio distortion or 50 Hz hum.</td>\n                            <td>Intermittent transmission; clipping distortion due to improper biasing.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Physical Principles &amp; Derivations (3 Marks)</strong></td>\n                            <td>Mastery of stimulated emission, direct bandgap recombination, threshold current, and Einstein coefficients.</td>\n                            <td>Good conceptual understanding; minor hesitations in laser rate equations.</td>\n                            <td>Rudimentary knowledge; unable to explain population inversion.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Viva Voce &amp; Optical Safety (3 Marks)</strong></td>\n                            <td>Flawless execution of laser safety protocols (Class 2/3R, eye safety), beam alignment, and viva responses.</td>\n                            <td>Demonstrates safety awareness and answers standard laser questions well.</td>\n                            <td>Inadequate safety awareness or poor viva responses.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In a laser audio transmission project, why must the laser diode be DC-biased above its threshold current I_th?",
          "options": [
            "To prevent the diode from melting",
            "To ensure operation in the linear lasing regime so the output optical power linearly tracks the audio signal without clipping distortion",
            "To double the wavelength",
            "To change the color of the beam"
          ],
          "correctIndex": 1,
          "explanation": "Biasing above threshold ensures that the audio modulation operates entirely on the steep, linear P-I curve of the laser diode."
        },
        {
          "type": "multiple-choice",
          "question": "What component at the receiver end converts modulated optical laser signals into electrical audio currents?",
          "options": [
            "Thermocouple",
            "PIN Photodiode or Phototransistor",
            "Diffraction Grating",
            "Resonant Cavity Mirror"
          ],
          "correctIndex": 1,
          "explanation": "A PIN photodiode converts incident photon flux into proportional photocurrent via the photoelectric effect."
        },
        {
          "type": "multiple-choice",
          "question": "What happens if an opaque object (such as a hand or card) blocks the laser beam during transmission?",
          "options": [
            "Sound pitch increases",
            "Audio transmission cuts off instantly (line-of-sight propagation)",
            "Sound gets louder",
            "Receiver circuit explodes"
          ],
          "correctIndex": 1,
          "explanation": "Optical wireless links are strictly line-of-sight; intercepting the beam instantly cuts off the signal."
        }
      ]
    },
    "optical-fiber-fundamentals-tir": {
      "id": "optical-fiber-fundamentals-tir",
      "title": "Optical Fibers: Structure & Total Internal Reflection",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Understand the cylindrical dielectric waveguide. Explore core-cladding refractive index profiles, critical angles, and light trapping via total internal reflection.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Optical Fiber Dielectric Waveguide</h2>\n            <p>An optical fiber is an ultra-pure cylindrical dielectric waveguide engineered from silica glass ($SiO_2$) or transparent optical polymers. It guides electromagnetic optical signals over vast distances with negligible loss.</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Structural Layer</th><th>Typical Dimension</th><th>Material &amp; Refractive Index</th><th>Functional Role</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. Core</strong></td>\n                            <td>$8\\text{-}10\\text{ }\\mu\\text{m}$ (Single Mode)<br>$50\\text{-}62.5\\text{ }\\mu\\text{m}$ (Multimode)</td>\n                            <td>Ultra-pure silica doped with Germanium ($GeO_2$), refractive index $n_1 \\approx 1.48$.</td>\n                            <td>High-index central transmission conduit confining optical photons.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. Cladding</strong></td>\n                            <td>$125\\text{ }\\mu\\text{m}$ (Standard outer diameter)</td>\n                            <td>Pure silica glass or fluorine-doped silica, refractive index $n_2 < n_1$ ($n_2 \\approx 1.46$).</td>\n                            <td>Low-index optical barrier ensuring Total Internal Reflection (TIR) at the core-cladding boundary.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Buffer &amp; Jacket</strong></td>\n                            <td>$250\\text{-}900\\text{ }\\mu\\text{m}$</td>\n                            <td>Acrylate, Kevlar, and PVC/polyethylene.</td>\n                            <td>Mechanical protection against physical abrasion, microbending stress, and moisture ingress.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Mechanism of Light Guidance: Total Internal Reflection (TIR)</h2>\n            <p>For light to be trapped and guided inside the optical core, two necessary conditions must be fulfilled:</p>\n            <ol>\n                <li>The core refractive index must be strictly greater than the cladding index: $\\mathbf{n_1 > n_2}$.</li>\n                <li>The angle of incidence $\\phi$ at the core-cladding interface must exceed the <strong>critical angle $\\theta_c$</strong>:</li>\n            </ol>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Critical Angle Formula</div>\n                <div class=\"formula-math-display\">\n                    \\sin \\theta_c = \\frac{n_2}{n_1} \\implies \\theta_c = \\arcsin\\left(\\frac{n_2}{n_1}\\right)\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-arrows-split-up-and-left\"></i> Total Internal Reflection &amp; Evanescent Waves in Optical Fiber</div>\n                <span class=\"optics-diagram-badge\">Waveguide Physics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 260\" width=\"800\" height=\"260\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Cladding Top -->\n                    <rect x=\"50\" y=\"30\" width=\"700\" height=\"50\" fill=\"#1e293b\"/>\n                    <text x=\"70\" y=\"60\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\">Cladding (n₂ = 1.46)</text>\n\n                    <!-- Core -->\n                    <rect x=\"50\" y=\"80\" width=\"700\" height=\"100\" fill=\"rgba(56, 189, 248, 0.12)\"/>\n                    <text x=\"70\" y=\"135\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">Core (n₁ = 1.50, n₁ &gt; n₂)</text>\n\n                    <!-- Cladding Bottom -->\n                    <rect x=\"50\" y=\"180\" width=\"700\" height=\"50\" fill=\"#1e293b\"/>\n                    <text x=\"70\" y=\"210\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\">Cladding (n₂ = 1.46)</text>\n\n                    <!-- Core-Clad Boundary Lines -->\n                    <line x1=\"50\" y1=\"80\" x2=\"750\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <line x1=\"50\" y1=\"180\" x2=\"750\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n                    <!-- Optical Axis -->\n                    <line x1=\"50\" y1=\"130\" x2=\"750\" y2=\"130\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.2\"/>\n\n                    <!-- Guided Zig-Zag TIR Ray Path -->\n                    <polyline points=\"100,130 180,80 300,180 420,80 540,180 660,80 720,130\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"drop-shadow(0 0 4px #10b981)\"/>\n\n                    <!-- Normal at Reflection Point -->\n                    <line x1=\"180\" y1=\"50\" x2=\"180\" y2=\"110\" stroke=\"#fbbf24\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n                    <text x=\"185\" y=\"65\" fill=\"#fbbf24\" font-size=\"10\">Normal</text>\n\n                    <!-- Angle of incidence phi > theta_c -->\n                    <path d=\"M 180 95 A 15 15 0 0 1 165 90\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                    <text x=\"145\" y=\"105\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">ϕ &gt; θ_c</text>\n\n                    <!-- Evanescent Wave Tails in Cladding -->\n                    <path d=\"M 180 75 Q 185 68 190 75 Q 195 82 200 75\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n                    <text x=\"210\" y=\"60\" fill=\"#a855f7\" font-size=\"10\">Evanescent Field</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.1:</strong> Optical ray propagation in a step-index fiber via Total Internal Reflection at angles $\\phi > \\theta_c$, generating an exponentially decaying evanescent field in the cladding.\n            </div>\n        </div>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary condition on refractive indices for total internal reflection inside an optical fiber?",
          "options": [
            "n_core < n_cladding",
            "n_core > n_cladding",
            "n_core = n_cladding",
            "n_cladding = 1.0"
          ],
          "correctIndex": 1,
          "explanation": "TIR requires light to travel from a denser optical medium into a rarer optical medium, so n_core must be greater than n_cladding."
        },
        {
          "type": "multiple-choice",
          "question": "What is the critical angle θ_c for a fiber having core index n₁ = 1.50 and cladding index n₂ = 1.45?",
          "options": [
            "45.0°",
            "60.0°",
            "75.2°",
            "85.0°"
          ],
          "correctIndex": 2,
          "explanation": "sin θ_c = n₂ / n₁ = 1.45 / 1.50 = 0.9667 => θ_c = arcsin(0.9667) ≈ 75.2°."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the optical wave at the core-cladding boundary during total internal reflection?",
          "options": [
            "It is 100% reflected back into the core, while an exponentially decaying evanescent wave penetrates slightly into the cladding",
            "It is completely absorbed by the glass",
            "It splits into two equal halves",
            "Its frequency is doubled"
          ],
          "correctIndex": 0,
          "explanation": "TIR produces 100% energy reflection into the core, accompanied by an evanescent wave that penetrates a fraction of a wavelength into the cladding."
        }
      ]
    },
    "acceptance-angle-cone-na": {
      "id": "acceptance-angle-cone-na",
      "title": "Acceptance Angle, Acceptance Cone & Numerical Aperture",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Derive the mathematical expressions for the acceptance angle θ_a and Numerical Aperture (NA) from Snell's law and the geometry of the acceptance cone.",
      "toolType": "fiber-na",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Derivation of Acceptance Angle &amp; Numerical Aperture</h2>\n            <p>Consider a light ray launching from outside air ($n_0 \\approx 1$) into the flat circular entrance face of an optical fiber at angle $\\theta_{in}$:</p>\n            <ol>\n                <li>At the fiber entrance face, Snell's law of refraction gives:\n                $$n_0 \\sin \\theta_{in} = n_1 \\sin r = n_1 \\cos \\phi$$\n                where $\\phi = 90^\\circ - r$ is the angle of incidence at the core-cladding boundary.</li>\n                <li>For the ray to be guided by total internal reflection at the cladding, $\\phi \\ge \\theta_c$. The maximum allowable launch angle $\\theta_a$ occurs when $\\phi = \\theta_c$:\n                $$n_0 \\sin \\theta_a = n_1 \\cos \\theta_c = n_1 \\sqrt{1 - \\sin^2 \\theta_c}$$</li>\n                <li>Substituting $\\sin \\theta_c = \\frac{n_2}{n_1}$:\n                $$n_0 \\sin \\theta_a = n_1 \\sqrt{1 - \\left(\\frac{n_2}{n_1}\\right)^2} = \\sqrt{n_1^2 - n_2^2}$$</li>\n            </ol>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-square-root-variable\"></i> Numerical Aperture &amp; Acceptance Angle Formulas</div>\n                <div class=\"formula-math-display\">\n                    NA = \\sqrt{n_1^2 - n_2^2} \\approx n_1 \\sqrt{2\\Delta}\n                </div>\n                <div class=\"formula-math-display\">\n                    \\theta_a = \\arcsin\\left(\\frac{\\sqrt{n_1^2 - n_2^2}}{n_0}\\right) = \\arcsin(NA) \\quad (\\text{in air, } n_0 = 1)\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">NA</span>: Numerical Aperture (light-gathering power)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ_a</span>: Maximum semi-acceptance angle</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Δ</span>: Fractional refractive index change $\\Delta = \\frac{n_1 - n_2}{n_1}$</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Acceptance Cone</h2>\n            <p>Rotating the acceptance angle $\\theta_a$ in three dimensions about the fiber's central axis sweeps out the <strong>Acceptance Cone</strong>. Any light ray falling within this conical solid angle $\\Omega \\approx \\pi \\theta_a^2$ is trapped and guided through the fiber; all rays outside the cone leak into the cladding and are lost.</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the numerical aperture (NA) of an optical fiber with core index n₁ = 1.50 and cladding index n₂ = 1.48?",
          "options": [
            "0.10",
            "0.244",
            "0.50",
            "0.02"
          ],
          "correctIndex": 1,
          "explanation": "NA = √(n₁² - n₂²) = √(1.50² - 1.48²) = √(2.25 - 2.1904) = √0.0596 ≈ 0.244."
        },
        {
          "type": "multiple-choice",
          "question": "What is the acceptance angle θ_a in air for a fiber with NA = 0.50?",
          "options": [
            "15.0°",
            "30.0°",
            "45.0°",
            "60.0°"
          ],
          "correctIndex": 1,
          "explanation": "sin θ_a = NA / n₀ = 0.50 / 1.0 = 0.50 => θ_a = arcsin(0.50) = 30.0°."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to an incident light ray entering the fiber face at an angle θ_in > θ_a?",
          "options": [
            "It travels faster",
            "It strikes the core-cladding boundary at an angle less than the critical angle, refracts into the cladding, and leaks away",
            "It turns into a laser beam",
            "It undergoes total internal reflection forever"
          ],
          "correctIndex": 1,
          "explanation": "Rays launched outside the acceptance cone strike the cladding at ϕ < θ_c, failing TIR and leaking into the cladding as loss."
        }
      ]
    },
    "types-of-optical-fibers": {
      "id": "types-of-optical-fibers",
      "title": "Classification of Optical Fibers: Step Index, Graded Index & Single Mode",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Compare Step Index vs. Graded Index (GRIN) fibers and Single Mode vs. Multimode fibers. Analyze core profiles, mode volumes, and modal dispersion mitigation.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Classification by Refractive Index Profile</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Fiber Category</th><th>Index Profile $n(r)$</th><th>Ray Trajectory</th><th>Modal Dispersion &amp; Bandwidth</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Step-Index (SI) Multimode</strong></td>\n                            <td>Constant $n_1$ across core, abrupt step drop to $n_2$ at $r = a$.</td>\n                            <td>Sharp zig-zag linear reflections at core-cladding boundary.</td>\n                            <td><strong>High Modal Dispersion:</strong> Axial rays travel shorter paths than high-angle zig-zag rays, causing severe pulse broadening ($\\Delta t \\approx \\frac{L n_1 \\Delta}{c}$). Bandwidth limited to $\\sim 20\\text{ MHz}\\cdot\\text{km}$.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Graded-Index (GRIN) Multimode</strong></td>\n                            <td>Parabolic gradient profile: $n(r) = n_1 \\sqrt{1 - 2\\Delta (r/a)^2}$. Index is highest at axis and decreases smoothly outward.</td>\n                            <td>Smooth, continuous sinusoidal undulating curved paths.</td>\n                            <td><strong>Drastically Reduced Dispersion:</strong> Rays traveling outer paths travel greater physical distances but move faster through lower-index glass ($v = c/n(r)$), equalizing arrival times! Bandwidth reaches $\\sim 1\\text{-}2\\text{ GHz}\\cdot\\text{km}$.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Single-Mode Fiber (SMF)</strong></td>\n                            <td>Step-index profile with an ultra-thin core ($2a \\sim 8\\text{-}10\\text{ }\\mu\\text{m}$).</td>\n                            <td>Only a single electromagnetic fundamental mode ($LP_{01}$) can propagate along the axis.</td>\n                            <td><strong>Zero Intermodal Dispersion:</strong> Because only one mode propagates, modal dispersion is zero! Bandwidth exceeds $100\\text{ GHz}\\cdot\\text{km}$, the backbone of global telecommunications.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-network-wired\"></i> Core Profiles &amp; Ray Paths in Optical Fiber Types</div>\n                <span class=\"optics-diagram-badge\">Comparative Profiles</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Column 1: Step Index Multimode -->\n                    <g transform=\"translate(20, 20)\">\n                        <text x=\"110\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"11\" text-anchor=\"middle\">Step-Index Multimode (MMF)</text>\n                        <!-- Index profile step -->\n                        <rect x=\"30\" y=\"45\" width=\"160\" height=\"60\" fill=\"#1e293b\"/>\n                        <rect x=\"70\" y=\"45\" width=\"80\" height=\"60\" fill=\"rgba(56, 189, 248, 0.25)\"/>\n                        <polyline points=\"30,85 70,85 70,55 150,55 150,85 190,85\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"120\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Step Profile: Core 50-62.5 µm</text>\n\n                        <!-- Ray paths: zig-zag -->\n                        <rect x=\"30\" y=\"140\" width=\"160\" height=\"80\" fill=\"#1e293b\"/>\n                        <line x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                        <polyline points=\"30,180 70,145 150,215 190,180\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n                        <line x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"240\" fill=\"#f43f5e\" font-size=\"10\" text-anchor=\"middle\">High Modal Dispersion</text>\n                    </g>\n\n                    <!-- Column 2: Graded Index Multimode (GRIN) -->\n                    <g transform=\"translate(280, 20)\">\n                        <text x=\"110\" y=\"20\" fill=\"#fbbf24\" font-weight=\"bold\" font-size=\"11\" text-anchor=\"middle\">Graded-Index (GRIN)</text>\n                        <!-- Parabolic index profile -->\n                        <rect x=\"30\" y=\"45\" width=\"160\" height=\"60\" fill=\"#1e293b\"/>\n                        <path d=\"M 30 85 L 70 85 Q 110 45 150 85 L 190 85\" fill=\"rgba(251, 191, 36, 0.2)\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"120\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Parabolic Profile: n(r)</text>\n\n                        <!-- Ray paths: sinusoidal curves -->\n                        <rect x=\"30\" y=\"140\" width=\"160\" height=\"80\" fill=\"#1e293b\"/>\n                        <line x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                        <path d=\"M 30 180 Q 70 145 110 180 Q 150 215 190 180\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <line x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"240\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">Equalized Transit Time</text>\n                    </g>\n\n                    <!-- Column 3: Single Mode Fiber (SMF) -->\n                    <g transform=\"translate(540, 20)\">\n                        <text x=\"110\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"11\" text-anchor=\"middle\">Single-Mode Fiber (SMF)</text>\n                        <!-- Thin core step -->\n                        <rect x=\"30\" y=\"45\" width=\"160\" height=\"60\" fill=\"#1e293b\"/>\n                        <rect x=\"100\" y=\"45\" width=\"20\" height=\"60\" fill=\"rgba(16, 185, 129, 0.25)\"/>\n                        <polyline points=\"30,85 100,85 100,55 120,55 120,85 190,85\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"120\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Narrow Core: 8-10 µm</text>\n\n                        <!-- Ray path: single straight fundamental mode -->\n                        <rect x=\"30\" y=\"140\" width=\"160\" height=\"80\" fill=\"#1e293b\"/>\n                        <line x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"drop-shadow(0 0 4px #10b981)\"/>\n                        <text x=\"110\" y=\"240\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Zero Modal Dispersion</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.2:</strong> Comparison of core refractive index profiles and ray trajectories across Step-Index Multimode, Graded-Index Multimode, and Single-Mode fibers.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Normalized Frequency ($V$-Number)</h2>\n            <p>The number of guided modes in a step-index fiber is dictated by the dimensionless <strong>$V$-number</strong>:</p>\n            $$V = \\frac{2\\pi a}{\\lambda} NA = \\frac{2\\pi a}{\\lambda} \\sqrt{n_1^2 - n_2^2}$$\n            <p><strong>Single Mode Cut-Off Condition:</strong> When $\\mathbf{V < 2.4048}$, all higher-order modes are cut off, and only the fundamental $LP_{01}$ mode can propagate!</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the maximum V-number allowable for an optical fiber to operate in single-mode regime?",
          "options": [
            "1.000",
            "2.405",
            "3.141",
            "4.810"
          ],
          "correctIndex": 1,
          "explanation": "Single-mode operation requires V < 2.4048 (the first root of Bessel function J₀)."
        },
        {
          "type": "multiple-choice",
          "question": "How does a Graded-Index (GRIN) fiber reduce intermodal dispersion compared to a step-index multimode fiber?",
          "options": [
            "By blocking all off-axis rays",
            "Rays traveling outer curved trajectories move through lower refractive index glass and travel faster (v = c/n), arriving almost simultaneously with axial rays",
            "By absorbing red light",
            "By using metal coatings"
          ],
          "correctIndex": 1,
          "explanation": "The parabolic decrease in refractive index increases wave velocity away from the axis, equalizing flight times across modes."
        },
        {
          "type": "multiple-choice",
          "question": "What is the typical core diameter of a single-mode optical fiber?",
          "options": [
            "8 to 10 µm",
            "50 µm",
            "62.5 µm",
            "1000 µm"
          ],
          "correctIndex": 0,
          "explanation": "Standard telecommunication single-mode fibers (such as Corning SMF-28) have a core diameter of ~8 to 10 µm."
        }
      ]
    },
    "signal-attenuation-mechanisms": {
      "id": "signal-attenuation-mechanisms",
      "title": "Signal Attenuation Mechanisms in Optical Fibers",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Understand why optical power decays exponentially. Analyze absorption losses, Rayleigh scattering (1/λ⁴), and radiative bending losses.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Fiber Attenuation Definition &amp; Units</h2>\n            <p>As optical signals propagate through an optical fiber, optical power decays exponentially according to Beer-Lambert's law: $P(z) = P_{in} e^{-\\alpha_{Np} z}$. In optical engineering, attenuation is universally quantified in <strong>decibels per kilometer ($\\text{dB/km}$)</strong>:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-wave-square\"></i> Attenuation Coefficient Formula</div>\n                <div class=\"formula-math-display\">\n                    \\alpha\\ (\\text{dB/km}) = \\frac{10}{L} \\log_{10}\\left(\\frac{P_{in}}{P_{out}}\\right)\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Three Primary Loss Mechanisms</h2>\n            <ol>\n                <li><strong>1. Material Absorption Losses:</strong>\n                    <ul>\n                        <li><em>Intrinsic Absorption:</em> Electronic band-edge transitions in the ultraviolet ($\\lambda < 0.4\\text{ }\\mu\\text{m}$) and fundamental molecular vibrational resonances of the $Si-O$ bond in the infrared ($\\lambda > 1.6\\text{ }\\mu\\text{m}$).</li>\n                        <li><em>Extrinsic Absorption:</em> Impurity traces, primarily the <strong>Hydroxyl ion ($OH^-$)</strong> dissolved in glass during manufacturing. Overtone vibrations create intense \"water absorption peaks\" at $950\\text{ nm}$, $1240\\text{ nm}$, and $1380\\text{ nm}$. Modern \"zero-water-peak\" fibers eliminate this loss.</li>\n                    </ul>\n                </li>\n                <li><strong>2. Rayleigh Scattering Losses:</strong>\n                    <ul>\n                        <li>Caused by sub-microscopic density and compositional fluctuations frozen into the amorphous silica matrix during molten glass cooling.</li>\n                        <li>Scattering loss exhibits an extreme <strong>inverse fourth-power wavelength dependence</strong>:\n                        $$\\alpha_{Rayleigh} \\propto \\frac{1}{\\lambda^4}$$\n                        This represents the fundamental physical loss limit in glass fibers. It is massive in the UV/visible spectrum but drops to a tiny $\\sim 0.16\\text{ dB/km}$ at $1550\\text{ nm}$!</li>\n                    </ul>\n                </li>\n                <li><strong>3. Radiative Bending Losses:</strong>\n                    <ul>\n                        <li><em>Macrobending Loss:</em> Occurs when the fiber cable is physically bent into a curve whose radius of curvature is comparable to critical bend radius $R_c$. Light in the evanescent field must travel faster than the speed of light in the cladding to keep up, radiating away as lost energy.</li>\n                        <li><em>Microbending Loss:</em> Microscopic sharp imperfections, ripples, and cabling pressures along the fiber axis that continuously scatter guided modes into lossy radiation cladding modes.</li>\n                    </ul>\n                </li>\n            </ol>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-chart-line\"></i> Attenuation Spectrum of Silica Optical Fiber</div>\n                <span class=\"optics-diagram-badge\">Loss Spectrum</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 280\" width=\"800\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Axes -->\n                    <line x1=\"80\" y1=\"230\" x2=\"740\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                    <text x=\"410\" y=\"260\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Wavelength λ (nm)</text>\n                    <line x1=\"80\" y1=\"230\" x2=\"80\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                    <text x=\"30\" y=\"50\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\">Loss (dB/km)</text>\n\n                    <!-- Y-Axis Ticks: 0, 1, 2, 5, 10 -->\n                    <text x=\"65\" y=\"235\" fill=\"#94a3b8\" font-size=\"10\">0</text>\n                    <text x=\"65\" y=\"195\" fill=\"#94a3b8\" font-size=\"10\">1</text>\n                    <text x=\"65\" y=\"155\" fill=\"#94a3b8\" font-size=\"10\">2</text>\n                    <text x=\"65\" y=\"100\" fill=\"#94a3b8\" font-size=\"10\">5</text>\n\n                    <!-- X-Axis Wavelength Ticks: 800, 1000, 1200, 1310, 1400, 1550, 1700 -->\n                    <text x=\"130\" y=\"245\" fill=\"#94a3b8\" font-size=\"10\">800</text>\n                    <text x=\"240\" y=\"245\" fill=\"#94a3b8\" font-size=\"10\">1000</text>\n                    <text x=\"360\" y=\"245\" fill=\"#94a3b8\" font-size=\"10\">1200</text>\n                    <text x=\"440\" y=\"245\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">1310</text>\n                    <text x=\"590\" y=\"245\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">1550</text>\n                    <text x=\"700\" y=\"245\" fill=\"#94a3b8\" font-size=\"10\">1700</text>\n\n                    <!-- Rayleigh Scattering Curve 1/λ^4 (Dotted Blue) -->\n                    <path d=\"M 90 70 C 140 120, 240 185, 440 215 C 550 224, 700 228, 730 229\" fill=\"none\" stroke=\"#38bdf8\" stroke-dasharray=\"4,3\" stroke-width=\"1.8\"/>\n                    <text x=\"200\" y=\"145\" fill=\"#38bdf8\" font-size=\"10\">Rayleigh ~ 1/λ⁴</text>\n\n                    <!-- IR Absorption Edge (Dotted Red) -->\n                    <path d=\"M 500 230 C 580 230, 660 210, 730 70\" fill=\"none\" stroke=\"#f43f5e\" stroke-dasharray=\"4,3\" stroke-width=\"1.8\"/>\n                    <text x=\"660\" y=\"120\" fill=\"#f43f5e\" font-size=\"10\">IR Absorption Edge</text>\n\n                    <!-- Total Attenuation Curve with OH- Water Peaks -->\n                    <path d=\"M 90 65 C 130 110, 180 150, 230 170 Q 250 185 270 180 Q 290 175 320 190 Q 380 185 410 195 Q 440 215 470 210 Q 490 145 505 145 Q 520 145 540 215 Q 590 224 620 220 Q 660 210 730 65\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n\n                    <!-- OH- Peak Label at 1383 nm -->\n                    <circle cx=\"505\" cy=\"145\" r=\"4.5\" fill=\"#fbbf24\"/>\n                    <text x=\"505\" y=\"130\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">OH⁻ Water Peak (1383 nm)</text>\n\n                    <!-- 1310 nm Window Dot -->\n                    <circle cx=\"440\" cy=\"215\" r=\"5\" fill=\"#38bdf8\"/>\n                    <text x=\"440\" y=\"200\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">0.35 dB/km</text>\n\n                    <!-- 1550 nm Window Dot (Minimum Loss!) -->\n                    <circle cx=\"590\" cy=\"224\" r=\"5.5\" fill=\"#10b981\"/>\n                    <text x=\"590\" y=\"210\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">0.20 dB/km (Minimum)</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.3:</strong> Attenuation spectrum of silica optical fiber. The curve represents the sum of Rayleigh scattering ($1/\\lambda^4$), ultraviolet band absorption, infrared silica vibrational edge, and extrinsic $OH^-$ water peaks.\n            </div>\n        </div>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "How does Rayleigh scattering loss in optical fibers scale with wavelength λ?",
          "options": [
            "∝ λ",
            "∝ 1 / λ²",
            "∝ 1 / λ⁴",
            "Independent of λ"
          ],
          "correctIndex": 2,
          "explanation": "Rayleigh scattering exhibits an inverse fourth-power wavelength dependence (∝ 1/λ⁴), dropping precipitously as wavelength increases from visible to infrared."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary chemical impurity responsible for the strong absorption peaks near 1380 nm in standard silica fibers?",
          "options": [
            "Iron (Fe)",
            "Hydroxyl ion (OH⁻)",
            "Lead (Pb)",
            "Nitrogen gas (N₂)"
          ],
          "correctIndex": 1,
          "explanation": "Vibrational overtones of water (OH⁻ hydroxyl ions) embedded in the silica matrix cause the famous absorption peak at ~1383 nm."
        },
        {
          "type": "multiple-choice",
          "question": "What is the typical attenuation of ultra-pure single-mode silica fiber at the 1550 nm window?",
          "options": [
            "10 dB/km",
            "3.0 dB/km",
            "0.20 dB/km",
            "0.001 dB/km"
          ],
          "correctIndex": 2,
          "explanation": "At 1550 nm, silica glass reaches its absolute physical attenuation minimum of approximately 0.18 to 0.20 dB/km."
        }
      ]
    },
    "optical-transmission-windows": {
      "id": "optical-transmission-windows",
      "title": "Optical Transmission Windows (850, 1310, 1550 nm) & Dispersion",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Examine the historical 1st, 2nd, and 3rd optical communication windows. Differentiate between material dispersion, waveguide dispersion, and chromatic dispersion management.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Three Telecom Transmission Windows</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Transmission Window</th><th>Center Wavelength</th><th>Typical Loss</th><th>Dispersion Characteristics &amp; Application</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1st Window (1970s)</strong></td>\n                            <td>$850\\text{ nm}$</td>\n                            <td>$2.5\\text{-}3.5\\text{ dB/km}$</td>\n                            <td>High Rayleigh scattering. Paired with GaAs semiconductor lasers / LEDs and multimode fibers for short-reach campus LANs and data centers.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2nd Window (1980s)</strong></td>\n                            <td>$1310\\text{ nm}$</td>\n                            <td>$0.35\\text{-}0.5\\text{ dB/km}$</td>\n                            <td><strong>Zero Chromatic Dispersion:</strong> Material dispersion and waveguide dispersion cancel out precisely ($D = 0\\text{ ps/(nm}\\cdot\\text{km)}$). Ideal for high-speed metro networks.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3rd Window (1990s-Present)</strong></td>\n                            <td>$1550\\text{ nm}$ (C-Band)</td>\n                            <td>$\\mathbf{0.20\\text{ dB/km}}$</td>\n                            <td><strong>Absolute Attenuation Minimum:</strong> Enabled transoceanic and intercontinental fiber links. Matches the amplification band of Erbium-Doped Fiber Amplifiers (EDFA) and Dense Wavelength Division Multiplexing (DWDM).</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Chromatic Dispersion &amp; Pulse Broadening</h2>\n            <p>While attenuation reduces signal power, <strong>dispersion</strong> spreads pulses out in time, causing adjacent digital bits (1s and 0s) to overlap and generate Inter-Symbol Interference (ISI):</p>\n            <ul>\n                <li><strong>Material Dispersion ($D_M$):</strong> Arises because glass refractive index varies with wavelength ($dn/d\\lambda \\neq 0$). Different spectral components of a laser pulse travel at different group velocities $v_g = c/n_g$.</li>\n                <li><strong>Waveguide Dispersion ($D_W$):</strong> Arises because light travels partially in the core ($n_1$) and partially in the cladding ($n_2$). The optical distribution shifts with wavelength. $D_W$ is negative and can be engineered to cancel material dispersion!</li>\n                <li><strong>Total Chromatic Dispersion ($D$):</strong> $D = D_M + D_W$. In standard SMF-28, $D = 0$ at $\\lambda = 1310\\text{ nm}$.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "At which optical transmission window does standard silica fiber exhibit zero chromatic dispersion (D = 0)?",
          "options": [
            "850 nm",
            "1310 nm",
            "1550 nm",
            "1064 nm"
          ],
          "correctIndex": 1,
          "explanation": "In standard unshifted single-mode fiber, material dispersion and waveguide dispersion cancel each other out at 1310 nm."
        },
        {
          "type": "multiple-choice",
          "question": "Why is the 1550 nm window universally chosen for long-haul transoceanic undersea cables?",
          "options": [
            "It has zero dispersion",
            "It offers the absolute minimum attenuation (~0.20 dB/km) and aligns with the gain spectrum of Erbium-Doped Fiber Amplifiers (EDFA)",
            "It uses cheaper plastic cables",
            "It can be seen by the naked eye"
          ],
          "correctIndex": 1,
          "explanation": "1550 nm is the loss minimum of silica and is directly amplified in the optical domain by EDFAs without costly electronic regeneration."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary degradation caused by chromatic dispersion in high-speed optical communication links?",
          "options": [
            "Laser frequency shift",
            "Temporal pulse spreading leading to Inter-Symbol Interference (ISI)",
            "Melting of the core",
            "Polarization rotation"
          ],
          "correctIndex": 1,
          "explanation": "Dispersion causes short optical pulses to widen in time as they propagate, eventually overlapping adjacent bits and corrupting digital data."
        }
      ]
    },
    "fiber-optic-applications-sensors": {
      "id": "fiber-optic-applications-sensors",
      "title": "Applications of Optical Fibers: Sensors, Endoscopy & WDM Telecom",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Explore the multi-billion dollar applications of optical fibers in intrinsic/extrinsic sensing, biomedical endoscopy, and multi-terabit WDM telecommunication links.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>1. Optical Fiber Sensors (OFS)</h2>\n            <p>Optical fibers serve as exceptional sensors because they are immune to electromagnetic interference (EMI), chemically inert, lightweight, and capable of multiplexed remote monitoring:</p>\n            <ul>\n                <li><strong>Intrinsic Sensors:</strong> The optical fiber itself acts as the sensing transducer. Physical parameters (strain, temperature, pressure) alter the refractive index, phase, or birefringence inside the core:\n                    <ul>\n                        <li><em>Fiber Bragg Grating (FBG):</em> Periodic micro-modulations of core index reflect a narrow Bragg wavelength: $\\lambda_B = 2 n_{eff} \\Lambda$. When mechanical strain or temperature stretches the grating period $\\Lambda$, $\\lambda_B$ shifts precisely! Widely used to monitor bridges, aircraft wings, and dams.</li>\n                        <li><em>Fiber Optic Gyroscope (FOG):</em> Utilizes the Sagnac effect in a multi-kilometer fiber coil to detect angular rotation rates with sub-degree/hour precision in missiles, satellites, and submarines.</li>\n                    </ul>\n                </li>\n                <li><strong>Extrinsic Sensors:</strong> The fiber simply delivers light to and collects light from an external transducer module (e.g., optical displacement probes, microbend pressure pads).</li>\n            </ul>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-gauge-high\"></i> Fiber Bragg Grating (FBG) Sensor Principle</div>\n                <span class=\"optics-diagram-badge\">Optical Sensor</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"120\" x2=\"780\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Cladding Envelope -->\n                    <rect x=\"100\" y=\"50\" width=\"600\" height=\"140\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n                    <text x=\"120\" y=\"70\" fill=\"#94a3b8\" font-size=\"11\">Cladding</text>\n\n                    <!-- Core -->\n                    <rect x=\"100\" y=\"95\" width=\"600\" height=\"50\" fill=\"rgba(56, 189, 248, 0.15)\"/>\n                    <text x=\"120\" y=\"110\" fill=\"#38bdf8\" font-size=\"11\">Core</text>\n\n                    <!-- FBG Periodic Grating Stripes -->\n                    <g transform=\"translate(320, 95)\">\n                        <rect x=\"0\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"16\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"32\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"48\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"64\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"80\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"96\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"112\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"128\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        <rect x=\"144\" y=\"0\" width=\"8\" height=\"50\" fill=\"#38bdf8\"/>\n                        \n                        <!-- Period Lambda -->\n                        <line x1=\"0\" y1=\"65\" x2=\"16\" y2=\"65\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                        <text x=\"8\" y=\"80\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">Period Λ</text>\n                        <text x=\"76\" y=\"-12\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Fiber Bragg Grating (FBG)</text>\n                    </g>\n\n                    <!-- Incident Broadband Light -->\n                    <line x1=\"30\" y1=\"120\" x2=\"100\" y2=\"120\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n                    <text x=\"30\" y=\"105\" fill=\"#f8fafc\" font-size=\"10\">Broadband Light (λ)</text>\n\n                    <!-- Reflected Bragg Peak λ_B -->\n                    <line x1=\"280\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                    <polygon points=\"180,110 195,105 195,115\" fill=\"#ef4444\"/>\n                    <text x=\"230\" y=\"98\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">Reflected: λ_B = 2 n_eff Λ</text>\n\n                    <!-- Transmitted Light (Minus λ_B notch) -->\n                    <line x1=\"520\" y1=\"120\" x2=\"750\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <polygon points=\"750,120 735,115 735,125\" fill=\"#10b981\"/>\n                    <text x=\"630\" y=\"105\" fill=\"#10b981\" font-size=\"10\">Transmitted Light (Notch)</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.4:</strong> Operation of a Fiber Bragg Grating (FBG) sensor. The periodic core modulation reflects a specific Bragg wavelength $\\lambda_B = 2 n_{eff} \\Lambda$. Mechanical strain stretches $\\Lambda$, shifting $\\lambda_B$ linearly.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. Biomedical Endoscopy &amp; Coherent Bundles</h2>\n            <p>Flexible medical endoscopes incorporate two distinct fiber optic bundles:</p>\n            <ul>\n                <li><strong>Illumination Bundle:</strong> Incoherent fiber bundle carrying high-intensity white light into the internal organ (stomach, lungs, colon).</li>\n                <li><strong>Imaging Bundle:</strong> <strong>Coherent (ordered) fiber bundle</strong> where the spatial arrangement of tens of thousands of microscopic fiber cores at the input face is strictly preserved at the output face, transmitting high-resolution interior images to an external camera.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the formula for the Bragg reflection wavelength λ_B of a Fiber Bragg Grating (FBG)?",
          "options": [
            "λ_B = n_eff / Λ",
            "λ_B = 2 n_eff Λ",
            "λ_B = Λ / (2 n_eff)",
            "λ_B = 4 n_eff Λ"
          ],
          "correctIndex": 1,
          "explanation": "Bragg condition in optical fibers is λ_B = 2 n_eff Λ, where n_eff is the effective mode index and Λ is the grating pitch."
        },
        {
          "type": "multiple-choice",
          "question": "Why must the imaging bundle of a medical endoscope be a 'coherent bundle'?",
          "options": [
            "It must emit laser light",
            "The relative spatial positions of all individual fibers must be identical at both ends to faithfully reconstruct the 2D image",
            "It must be cooled by liquid nitrogen",
            "It prevents total internal reflection"
          ],
          "correctIndex": 1,
          "explanation": "In a coherent bundle, spatial mapping between fibers is preserved 1-to-1, transferring the image pixel-by-pixel without spatial scrambling."
        },
        {
          "type": "multiple-choice",
          "question": "What physical effect enables the Fiber Optic Gyroscope (FOG) to measure angular rotation?",
          "options": [
            "Doppler effect",
            "Sagnac effect",
            "Faraday effect",
            "Kerr effect"
          ],
          "correctIndex": 1,
          "explanation": "The Sagnac effect introduces a relativistic phase shift between counter-propagating light waves in a rotating fiber coil."
        }
      ]
    },
    "holography-principles-recording-reconstruction": {
      "id": "holography-principles-recording-reconstruction",
      "title": "Holography: Principles, Recording & Wavefront Reconstruction",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "9 min read",
      "lead": "Discover true three-dimensional wavefront reconstruction invented by Dennis Gabor. Understand the mathematical difference between 2D photography and holography.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Conventional Photography vs. Holography</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Criterion</th><th>Conventional Photography</th><th>Holography (Dennis Gabor, 1948)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Optical Information Recorded</strong></td>\n                            <td>Only <strong>Intensity / Amplitude ($I \\propto |A|^2$)</strong>. Phase is completely lost.</td>\n                            <td>Both <strong>Amplitude AND Phase ($\\phi(x,y)$)</strong> via optical interference.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Visual Perception</strong></td>\n                            <td>Flat, 2D perspective. Zero parallax.</td>\n                            <td>True <strong>3D autostereoscopic image</strong> with full motion parallax and perspective.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Illumination Required</strong></td>\n                            <td>Incoherent natural or flash white light.</td>\n                            <td>Highly coherent laser source with long coherence length.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Information Density</strong></td>\n                            <td>Localized 1-to-1 point mapping. A torn photo loses content.</td>\n                            <td>Distributed diffraction pattern. <em>Every small fragment of a hologram reconstructs the entire 3D object!</em></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-camera\"></i> Holographic Recording &amp; Wavefront Reconstruction</div>\n                <span class=\"optics-diagram-badge\">3D Holography</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 300\" width=\"800\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Left: Recording Setup -->\n                    <g transform=\"translate(30, 20)\">\n                        <text x=\"160\" y=\"20\" fill=\"#38bdf8\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Step 1: Hologram Recording</text>\n\n                        <!-- Laser Source -->\n                        <rect x=\"20\" y=\"45\" width=\"60\" height=\"25\" fill=\"#ef4444\"/>\n                        <text x=\"50\" y=\"62\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n\n                        <!-- Beam Splitter -->\n                        <rect x=\"110\" y=\"48\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        <line x1=\"110\" y1=\"48\" x2=\"128\" y2=\"66\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                        \n                        <!-- Reference Beam Path -->\n                        <line x1=\"119\" y1=\"66\" x2=\"119\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <!-- Mirror -->\n                        <line x1=\"105\" y1=\"165\" x2=\"135\" y2=\"135\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n                        <line x1=\"119\" y1=\"150\" x2=\"270\" y2=\"190\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <text x=\"180\" y=\"160\" fill=\"#ef4444\" font-size=\"10\">Reference Beam R</text>\n\n                        <!-- Object Beam Path -->\n                        <line x1=\"128\" y1=\"57\" x2=\"200\" y2=\"57\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                        <!-- 3D Object -->\n                        <polygon points=\"215,40 245,57 215,74\" fill=\"#fbbf24\"/>\n                        <text x=\"230\" y=\"90\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">3D Object</text>\n\n                        <!-- Diffuse Scattered Object Waves -->\n                        <path d=\"M 245 57 L 270 140\" stroke=\"#fbbf24\" stroke-width=\"1.8\" stroke-dasharray=\"3,3\"/>\n                        <path d=\"M 245 57 L 270 200\" stroke=\"#fbbf24\" stroke-width=\"1.8\" stroke-dasharray=\"3,3\"/>\n                        <text x=\"275\" y=\"105\" fill=\"#fbbf24\" font-size=\"10\">Object Wave O</text>\n\n                        <!-- Photographic Emulsion Plate -->\n                        <line x1=\"270\" y1=\"130\" x2=\"270\" y2=\"250\" stroke=\"#10b981\" stroke-width=\"5\"/>\n                        <text x=\"270\" y=\"270\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Holographic Plate</text>\n                    </g>\n\n                    <!-- Divider -->\n                    <line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"280\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                    <!-- Right: Reconstruction Setup -->\n                    <g transform=\"translate(420, 20)\">\n                        <text x=\"170\" y=\"20\" fill=\"#10b981\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Step 2: 3D Wavefront Reconstruction</text>\n\n                        <!-- Reconstructing Laser Beam (identical Reference beam) -->\n                        <line x1=\"30\" y1=\"110\" x2=\"150\" y2=\"180\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                        <text x=\"60\" y=\"130\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">Reconstructing Beam R</text>\n\n                        <!-- Developed Hologram Plate -->\n                        <line x1=\"150\" y1=\"80\" x2=\"150\" y2=\"240\" stroke=\"#10b981\" stroke-width=\"5\"/>\n                        <text x=\"150\" y=\"260\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Hologram Plate</text>\n\n                        <!-- Transmitted Zero-Order Beam -->\n                        <line x1=\"150\" y1=\"180\" x2=\"290\" y2=\"250\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n                        <text x=\"260\" y=\"270\" fill=\"#64748b\" font-size=\"9\">Zero-Order Beam</text>\n\n                        <!-- Reconstructed Virtual Wavefront diverging to Observer -->\n                        <line x1=\"150\" y1=\"120\" x2=\"290\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n                        <line x1=\"150\" y1=\"180\" x2=\"290\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n\n                        <!-- Virtual 3D Image behind plate -->\n                        <polygon points=\"50,110 80,127 50,144\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n                        <text x=\"65\" y=\"160\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Virtual 3D Image</text>\n\n                        <!-- Observer Eye -->\n                        <path d=\"M 310 120 Q 330 100 350 120 Q 330 140 310 120 Z\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                        <circle cx=\"330\" cy=\"120\" r=\"7\" fill=\"#38bdf8\"/>\n                        <text x=\"330\" y=\"90\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">Observer</text>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.5:</strong> Holography: Interference between reference beam $R$ and object wave $O$ recorded on photographic plate (left), and wavefront reconstruction recreating the true virtual 3D image (right).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Mathematical Formulation of Hologram Reconstruction</h2>\n            <ol>\n                <li>The recorded intensity pattern on the emulsion is:\n                $$I(x,y) = |R + O|^2 = (R + O)(R^* + O^*) = |R|^2 + |O|^2 + R O^* + R^* O$$</li>\n                <li>The amplitude transmittance of the developed photographic plate is proportional to intensity: $t(x,y) = t_0 + \\beta I(x,y)$.</li>\n                <li>When illuminated by the original reference wave $R$:\n                $$U_{rec} = R \\cdot t(x,y) \\propto \\underbrace{(|R|^2 + |O|^2)R}_{\\text{Zero-order unscattered}} + \\underbrace{|R|^2 O}_{\\mathbf{True\\ Virtual\\ 3D\\ Image}} + \\underbrace{R^2 O^*}_{\\mathbf{Conjugate\\ Real\\ Image}}$$</li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Who invented holography in 1948, winning the Nobel Prize in Physics in 1971?",
          "options": [
            "Albert Einstein",
            "Dennis Gabor",
            "Theodore Maiman",
            "Ernst Abbe"
          ],
          "correctIndex": 1,
          "explanation": "Dennis Gabor invented holography in 1948 while attempting to improve electron microscope resolution."
        },
        {
          "type": "multiple-choice",
          "question": "What happens when a hologram plate is broken into small fragments?",
          "options": [
            "All information is lost permanently",
            "Each fragment still reconstructs the entire complete 3D object, albeit with slightly reduced resolution and narrower viewing perspective",
            "Only the corresponding 2D slice is visible",
            "The color turns black"
          ],
          "correctIndex": 1,
          "explanation": "Because holography records a distributed interference pattern across the entire plate, every fragment contains light waves from all points of the object."
        },
        {
          "type": "multiple-choice",
          "question": "In the mathematical formula for reconstructed waves, which term corresponds to the true virtual 3D image?",
          "options": [
            "(|R|² + |O|²) R",
            "|R|² O",
            "R² O*",
            "|O|² R"
          ],
          "correctIndex": 1,
          "explanation": "The term |R|² O is proportional to the original object wave O in both amplitude and phase, recreating the virtual 3D image behind the plate."
        }
      ]
    },
    "gabor-hologram-limitations-off-axis": {
      "id": "gabor-hologram-limitations-off-axis",
      "title": "Gabor In-Line Hologram, Twin Image Problem & Off-Axis Solution",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Examine the Gabor in-line hologram and its fatal limitation: the twin-image overlap. Discover how Leith & Upatnieks solved this with the off-axis laser technique.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Dennis Gabor's In-Line Hologram (1948)</h2>\n            <p>Dennis Gabor's original setup was strictly <strong>in-line</strong>: light from a filtered mercury arc lamp illuminated a semi-transparent object. The unscattered light passing directly through served as the reference wave, while scattered light formed the object wave along the exact same optical axis.</p>\n\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The \"Twin Image Problem\" of Gabor Holograms</div>\n                    <div class=\"callout-text\">\n                        Upon reconstruction, the three emerging beams travel along the exact same line of sight:\n                        $$\\text{Virtual 3D Image } (|R|^2 O) \\quad + \\quad \\text{Real Conjugate Image } (R^2 O^*) \\quad + \\quad \\text{Blinding Zero-Order Beam}$$\n                        Because the real conjugate image lies in front of the plate on the identical axis, an observer viewing the virtual image sees it severely blurred by the out-of-focus real image and glare!\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>The Leith-Upatnieks Off-Axis Hologram (1962)</h2>\n            <p>In 1962, Emmett Leith and Juris Upatnieks at the University of Michigan made a historic breakthrough using the newly invented laser source. They introduced an <strong>angular separation $\\theta$ between the object beam and the reference beam</strong>.</p>\n            <ul>\n                <li>The reference wave is tilted: $R = A_R e^{i k x \\sin\\theta}$.</li>\n                <li>Upon reconstruction, the three diffraction terms emerge at <strong>three distinct spatial angles</strong>:\n                    <ol>\n                        <li>Zero-order unscattered beam travels straight through ($0^\\circ$).</li>\n                        <li>Real conjugate image is diffracted downward at angle $-\\theta$.</li>\n                        <li><strong>Virtual 3D image is diffracted upward at angle $+\\theta$</strong>, completely separated from the twin image and glare!</li>\n                    </ol>\n                </li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What was the fatal drawback of Dennis Gabor's original in-line holographic setup?",
          "options": [
            "It could only record sound",
            "The 'Twin Image Problem': The virtual image, real conjugate image, and zero-order beam all overlapped along the exact same axis",
            "It required digital computers",
            "It was strictly opaque"
          ],
          "correctIndex": 1,
          "explanation": "Because reference and object waves were coaxial, the virtual image was masked and blurred by the conjugate real image and central transmission."
        },
        {
          "type": "multiple-choice",
          "question": "How did Leith and Upatnieks eliminate the twin-image problem in 1962?",
          "options": [
            "By introducing an angular offset θ between the reference and object beams (Off-axis holography)",
            "By using X-rays",
            "By discarding the reference beam",
            "By using plastic lenses"
          ],
          "correctIndex": 0,
          "explanation": "Tilted reference beams create carrier spatial frequencies that diffract the virtual image, real image, and zero-order beam into distinct angles."
        },
        {
          "type": "multiple-choice",
          "question": "What type of objects could be recorded with Dennis Gabor's original in-line hologram?",
          "options": [
            "Dense, completely opaque 3D metallic objects",
            "Only highly transparent or semi-transparent objects with tiny scattering features",
            "Luminescent biological bacteria only",
            "Any object whatsoever"
          ],
          "correctIndex": 1,
          "explanation": "In Gabor's in-line setup, the reference beam was the unscattered light passing through the object itself, requiring semi-transparent samples."
        }
      ]
    },
    "holography-applications": {
      "id": "holography-applications",
      "title": "Applications of Holography: Interferometry, Storage & Security",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "8 min read",
      "lead": "Explore cutting-edge applications of holography in non-destructive holographic interferometry, volumetric holographic data storage, security rainbow holograms, and head-up displays.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>1. Holographic Non-Destructive Interferometry</h2>\n            <p>Holographic interferometry allows comparing the shape of an object under stress with its unstressed reference state with sub-micron interferometric precision:</p>\n            <ul>\n                <li><strong>Double-Exposure Interferometry:</strong> The hologram plate is exposed twice: first when the object is at rest, and second after applying mechanical load, thermal stress, or pressure. Reconstruction reveals <strong>interference contour fringes</strong> depicting surface micro-deformations as small as $\\lambda/4$ ($150\\text{ nm}$)! Essential for testing aircraft tires, turbine blades, and rocket engine casings.</li>\n                <li><strong>Time-Average Interferometry:</strong> The hologram of a rapidly vibrating object (e.g., a violin body, speaker cone, or engine block) is recorded over multiple vibration cycles. Nodal lines (zero vibration) appear as bright fringes, while antinodes exhibit dark Bessel-function fringes.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>2. High-Density Volumetric Holographic Data Storage (HVD)</h2>\n            <p>Conventional optical discs (CDs, DVDs, Blu-rays) store data purely on a 2D surface layer. <strong>Holographic Data Storage</strong> records data throughout the entire 3D volume of a photosensitive crystal (e.g., $LiNbO_3$):</p>\n            <ul>\n                <li>Data is converted into 2D bit-pages using a spatial light modulator (SLM).</li>\n                <li>Hundreds of distinct holographic pages are multiplexed in the exact same crystal volume by varying the reference beam angle (angle multiplexing) or wavelength (wavelength multiplexing).</li>\n                <li>Theoretical storage density exceeds <strong>$1\\text{ Terabyte}$ on a single postage-stamp crystal</strong>, with read rates exceeding $1\\text{ Gigabit/second}$!</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>3. Security Rainbow Holograms &amp; Augmented Reality</h2>\n            <ul>\n                <li><strong>Embossed Rainbow Holograms:</strong> Developed by Stephen Benton in 1968. By eliminating vertical parallax, the hologram can be illuminated by ordinary white ambient light to produce a bright rainbow spectrum. Mass-produced by hot-stamping onto metallic foil, protecting banknotes, passports, and credit cards from forgery.</li>\n                <li><strong>Head-Up Displays (HUD) &amp; AR Glasses:</strong> Holographic optical elements (HOE) embedded in aircraft windshields and smart glasses reflect digital navigation imagery directly into the viewer's eye while remaining 100% transparent to the outside world.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary industrial application of double-exposure holographic interferometry?",
          "options": [
            "Non-destructive testing of mechanical stress, cracks, and microscopic deformations in aircraft parts and turbine blades",
            "Measuring atmospheric humidity",
            "Cooking food",
            "Producing sound waves"
          ],
          "correctIndex": 0,
          "explanation": "Double-exposure interferometry detects sub-micron structural flaws and stresses by superimposing unstressed and stressed wavefronts."
        },
        {
          "type": "multiple-choice",
          "question": "Why can embossed 'Rainbow Holograms' (such as those on credit cards) be viewed under ordinary white ambient light?",
          "options": [
            "They use invisible ink",
            "They sacrifice vertical parallax, using horizontal diffraction slit geometry so white light disperses into a clear rainbow spectrum without blurring",
            "They are illuminated by tiny internal LEDs",
            "They are simple 2D photographs"
          ],
          "correctIndex": 1,
          "explanation": "Benton's rainbow holography eliminates vertical parallax, preventing color overlap and allowing white-light viewing."
        },
        {
          "type": "multiple-choice",
          "question": "How does holographic data storage achieve massive storage densities compared to conventional optical discs?",
          "options": [
            "By burning larger pits",
            "By recording data throughout the entire 3D volume of the medium using angular and wavelength multiplexing, rather than on a flat 2D surface",
            "By compressing data files",
            "By using magnetic tape"
          ],
          "correctIndex": 1,
          "explanation": "Holographic storage utilizes the full 3D crystal volume, multiplexing hundreds of 2D data pages in the same physical space."
        }
      ]
    },
    "unit4-activities-rubrics": {
      "id": "unit4-activities-rubrics",
      "title": "Unit 4 Student Activity & Assessment Rubric",
      "category": "cat-unit4",
      "track": "track-unit4",
      "readTime": "5 min read",
      "lead": "Student lab project protocol on hologram recording and reconstruction, optical fiber NA measurement, and 10-point assessment rubric.",
      "toolType": "fiber-na",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Student Activity: Holographic Recording &amp; Reconstruction Demo</h2>\n            <p><strong>Activity Protocol:</strong></p>\n            <ol>\n                <li>Using a vibration-isolated optical table, split a He-Ne laser beam ($632.8\\text{ nm}$) into a reference beam and an object beam using a beam splitter cube.</li>\n                <li>Expand both beams using spatial filters (microscope objective + $25\\text{ }\\mu\\text{m}$ pinhole) to eliminate laser speckle.</li>\n                <li>Direct the object beam onto a small opaque diffusely reflecting coin or figurine, and position the photographic plate to receive both the scattered object light and the direct reference beam at an off-axis angle $\\theta \\approx 30^\\circ$.</li>\n                <li>Develop the holographic plate in darkroom chemicals (developer, stop bath, fixer, bleach). Re-illuminate the dried plate with the reference beam to reconstruct the full 3D autostereoscopic image!</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>10-Point Student Assessment Rubric</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Evaluation Metric</th><th>Excellent (9-10 Marks)</th><th>Proficient (7-8 Marks)</th><th>Basic (4-6 Marks)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Optical Table Alignment &amp; Stability (4 Marks)</strong></td>\n                            <td>Proper vibration isolation, equal optical path lengths within laser coherence length ($|L_R - L_O| < 5\\text{ cm}$), and clean beam expansion.</td>\n                            <td>Good alignment; slight path length imbalance or minor table vibrations.</td>\n                            <td>Severe vibration causing complete fringe washout; unexpanded raw laser beam.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Hologram Processing &amp; Contrast (3 Marks)</strong></td>\n                            <td>High-diffraction-efficiency hologram; bright, clear virtual 3D image with deep parallax under reconstruction.</td>\n                            <td>Recognizable 3D image with moderate contrast or slight chemical fogging.</td>\n                            <td>Faint or invisible reconstructed image due to over/underexposure.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Viva Voce on Fiber &amp; Holography Principles (3 Marks)</strong></td>\n                            <td>Comprehensive understanding of Gabor vs. off-axis setups, twin image elimination, NA derivation, and fiber attenuation.</td>\n                            <td>Answers basic fiber NA questions; minor confusion on holographic conjugate waves.</td>\n                            <td>Unable to explain difference between photography and holography.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why is an optical isolation table critical during the recording of a hologram?",
          "options": [
            "To keep the room warm",
            "Because relative movement between the object and plate of even a fraction of a wavelength (λ/4 ≈ 150 nm) during exposure will wash out the microscopic interference fringes",
            "To prevent laser light from leaking",
            "To protect the camera"
          ],
          "correctIndex": 1,
          "explanation": "Holographic fringes are spaced at sub-micron scales. Any acoustic vibration or table shift > λ/4 completely blurs and destroys the fringe pattern."
        },
        {
          "type": "multiple-choice",
          "question": "Why must the optical path lengths of the reference and object beams be matched to within the laser coherence length (|L_R - L_O| < L_c)?",
          "options": [
            "To maintain constant phase correlation between the two beams so high-contrast interference fringes can form",
            "To keep the light speed equal",
            "To prevent the laser from burning out",
            "To make the image twice as large"
          ],
          "correctIndex": 0,
          "explanation": "Interference occurs only if the path difference is well within the laser's temporal coherence length L_c."
        },
        {
          "type": "multiple-choice",
          "question": "What is the function of the spatial filter (microscope objective + pinhole) in holography setups?",
          "options": [
            "To change the color of the laser",
            "To remove high-frequency optical noise, dust diffraction rings, and lens aberrations, producing a clean Gaussian beam",
            "To increase laser power",
            "To polarize the beam"
          ],
          "correctIndex": 1,
          "explanation": "The pinhole acts as a low-pass spatial Fourier filter, stripping away high-frequency spatial noise and scattering ripples."
        }
      ]
    },
    "compound-microscope": {
      "id": "compound-microscope",
      "title": "Compound Microscope: Optical Ray Train & Abbe Resolution Limit",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Analyze the two-stage magnification system of the optical compound microscope. Derive overall magnification and explore Ernst Abbe's diffraction limit of resolution.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Two-Stage Optical Magnification Train</h2>\n            <p>The compound microscope utilizes two coaxial converging lens systems to achieve magnifications far exceeding that of a simple hand magnifier:</p>\n            <ol>\n                <li><strong>Objective Lens:</strong> Short focal length ($f_o \\sim 2\\text{-}10\\text{ mm}$), high numerical aperture (NA). Placed just beyond its first focal length from the tiny object ($u_o \\gt f_o$), forming a real, inverted, and magnified intermediate image $I_1$ inside the microscope tube.</li>\n                <li><strong>Eyepiece (Ocular):</strong> Moderate focal length ($f_e \\sim 25\\text{ mm}$). Positioned such that the intermediate image $I_1$ falls within its focal length ($u_e \\le f_e$), acting as a simple magnifier to produce a greatly enlarged final virtual image at the distance of distinct vision ($D = 25\\text{ cm}$) or infinity.</li>\n            </ol>\n\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Compound Microscope Magnification Formulas</div>\n                <div class=\"formula-math-display\">\n                    M = m_o \\times M_e = -\\left(\\frac{L}{f_o}\\right) \\times \\left(\\frac{D}{f_e} + 1\\right) \\approx -\\frac{L \\cdot D}{f_o f_e} \\quad (\\text{at near point } D=25\\text{ cm})\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">L</span>: Optical tube length (distance between $F_o'$ and $F_e$, standardly $160\\text{ mm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">m_o</span>: Linear lateral magnification of objective ($-L/f_o$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">M_e</span>: Angular magnification of eyepiece ($D/f_e$)</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-microscope\"></i> Compound Microscope Complete Ray Tracing</div>\n                <span class=\"optics-diagram-badge\">Ray Optics</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 300\" width=\"800\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"20\" y1=\"150\" x2=\"780\" y2=\"150\" stroke=\"#64748b\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\"/>\n\n                    <!-- Object AB -->\n                    <line x1=\"90\" y1=\"150\" x2=\"90\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"3\"/>\n                    <polygon points=\"90,115 85,125 95,125\" fill=\"#fbbf24\"/>\n                    <text x=\"75\" y=\"135\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Object</text>\n\n                    <!-- Objective Lens L_o -->\n                    <path d=\"M 160 80 A 80 80 0 0 1 160 220 A 80 80 0 0 1 160 80 Z\" fill=\"rgba(56, 189, 248, 0.22)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"160\" y=\"65\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Objective (f_o)</text>\n\n                    <!-- Intermediate Real Inverted Image I1 -->\n                    <line x1=\"420\" y1=\"150\" x2=\"420\" y2=\"205\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                    <polygon points=\"420,210 415,200 425,200\" fill=\"#ef4444\"/>\n                    <text x=\"430\" y=\"190\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">Intermediate Image I₁ (Real, Inverted)</text>\n\n                    <!-- Eyepiece Lens L_e -->\n                    <path d=\"M 500 50 A 120 120 0 0 1 500 250 A 120 120 0 0 1 500 50 Z\" fill=\"rgba(129, 140, 248, 0.22)\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n                    <text x=\"500\" y=\"35\" fill=\"#818cf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Eyepiece (f_e)</text>\n\n                    <!-- Ray paths from Object through Objective -->\n                    <line x1=\"90\" y1=\"120\" x2=\"160\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <line x1=\"160\" y1=\"120\" x2=\"420\" y2=\"205\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <line x1=\"90\" y1=\"120\" x2=\"160\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <line x1=\"160\" y1=\"150\" x2=\"420\" y2=\"205\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n                    <!-- Rays through Eyepiece -->\n                    <line x1=\"420\" y1=\"205\" x2=\"500\" y2=\"190\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <line x1=\"500\" y1=\"190\" x2=\"660\" y2=\"180\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <line x1=\"420\" y1=\"205\" x2=\"500\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <line x1=\"500\" y1=\"150\" x2=\"660\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2\"/>\n\n                    <!-- Virtual back-projections to giant final image -->\n                    <line x1=\"500\" y1=\"190\" x2=\"220\" y2=\"260\" stroke=\"#64748b\" stroke-dasharray=\"3,3\" stroke-width=\"1.2\"/>\n                    <line x1=\"500\" y1=\"150\" x2=\"220\" y2=\"260\" stroke=\"#64748b\" stroke-dasharray=\"3,3\" stroke-width=\"1.2\"/>\n                    <!-- Final Virtual Image Arrow -->\n                    <line x1=\"220\" y1=\"150\" x2=\"220\" y2=\"260\" stroke=\"#a855f7\" stroke-dasharray=\"4,2\" stroke-width=\"3\"/>\n                    <polygon points=\"220,265 214,255 226,255\" fill=\"#a855f7\"/>\n                    <text x=\"235\" y=\"270\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\">Final Virtual Image (Enlarged)</text>\n\n                    <!-- Observer Eye -->\n                    <path d=\"M 680 140 Q 705 115 730 140 Q 705 165 680 140 Z\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                    <circle cx=\"705\" cy=\"140\" r=\"7\" fill=\"#38bdf8\"/>\n                    <text x=\"705\" y=\"105\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Eye</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 5.1:</strong> Optical ray train of the compound microscope. The objective produces a real inverted intermediate image $I_1$ magnified by $-L/f_o$, and the eyepiece produces the final enlarged virtual image.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Ernst Abbe's Diffraction Limit of Resolution</h2>\n            <p>Magnification can theoretically be made arbitrarily large by decreasing focal lengths, but <strong>empty magnification</strong> occurs beyond the diffraction limit. Formulated by Ernst Abbe in 1873, the minimum resolvable distance $\\Delta x$ between two adjacent specimen points is fundamentally limited by diffraction:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-microscope\"></i> Abbe Diffraction Limit of Resolution</div>\n                <div class=\"formula-math-display\">\n                    \\Delta x = \\frac{0.61 \\lambda}{NA} = \\frac{0.61 \\lambda}{n \\sin \\alpha}, \\quad \\text{Resolving Power } RP = \\frac{1}{\\Delta x} = \\frac{2 NA}{\\lambda}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">λ</span>: Illumination wavelength ($\\sim 500\\text{ nm}$ for visible light)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">n</span>: Refractive index between object and lens (Air: $1.0$, Cedar oil: $1.515$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α</span>: Semi-aperture collection angle</div>\n                </div>\n            </div>\n            <p><strong>Oil Immersion Objectives:</strong> By placing synthetic immersion oil ($n \\approx 1.515$) between the glass coverslip and the objective, the Numerical Aperture is boosted from $0.95$ up to <strong>$NA \\approx 1.40$</strong>, shrinking the resolution limit to $\\Delta x \\approx \\frac{0.61 \\times 500\\text{ nm}}{1.40} \\approx \\mathbf{200\\text{ nm}}$ (the absolute physical limit of far-field optical microscopy).</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the nature of the intermediate image formed by the objective lens in a compound microscope?",
          "options": [
            "Virtual, erect, and magnified",
            "Real, inverted, and magnified",
            "Real, erect, and diminished",
            "Virtual, inverted, and diminished"
          ],
          "correctIndex": 1,
          "explanation": "The objective operates like a projection lens with the object just outside f_o, forming a real, inverted, and magnified intermediate image."
        },
        {
          "type": "multiple-choice",
          "question": "What is the ultimate physical resolution limit of a high-power optical oil-immersion microscope using visible light (λ = 500 nm)?",
          "options": [
            "1.0 mm",
            "10 µm",
            "200 nm (0.2 µm)",
            "0.01 nm"
          ],
          "correctIndex": 2,
          "explanation": "With an oil-immersion NA of ~1.4 and green light (500 nm), the Abbe diffraction limit restricts maximum resolution to ~200 nm."
        },
        {
          "type": "multiple-choice",
          "question": "Why does using immersion oil (n = 1.515) improve microscope resolving power?",
          "options": [
            "It cools the glass slide",
            "It matches the refractive index of the glass coverslip, preventing total internal reflection and increasing the Numerical Aperture NA = n sin α",
            "It changes the frequency of light",
            "It eliminates magnification"
          ],
          "correctIndex": 1,
          "explanation": "Oil eliminates the glass-air interface refraction mismatch, enabling higher-angle diffracted rays to enter the lens, directly elevating the NA."
        }
      ]
    },
    "confocal-microscope": {
      "id": "confocal-microscope",
      "title": "Confocal Microscope: Pinhole Optical Sectioning & 3D Imaging",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Understand Marvin Minsky's confocal principle. Explore laser point scanning, out-of-focus pinhole rejection, and non-destructive 3D optical sectioning.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Challenge with Conventional Widefield Microscopy</h2>\n            <p>In a standard widefield compound microscope, the entire thickness of a biological specimen is flooded with illumination simultaneously. Secondary fluorescence or scattered light from out-of-focus planes above and below the focal plane enters the detector, creating a heavy, hazy background blur that obscures sharp cellular details.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Marvin Minsky's Confocal Principle (1957)</h2>\n            <p>Patented by Marvin Minsky in 1957, <strong>Confocal Microscopy</strong> overcomes out-of-focus blur through two revolutionary optical concepts:</p>\n            <ul>\n                <li><strong>Point Illumination:</strong> A collimated laser beam is focused to a diffraction-limited diffraction spot at a single focal point inside the specimen.</li>\n                <li><strong>Conjugate Pinhole Aperture:</strong> A tiny pinhole aperture ($25\\text{-}50\\text{ }\\mu\\text{m}$) is placed directly in front of the photodetector (Photomultiplier Tube, PMT) at an optical plane that is <em>optically conjugate</em> to the focal spot in the specimen.</li>\n            </ul>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-filter\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Pinhole Rejection Mechanism</div>\n                    <div class=\"callout-text\">\n                        <ul>\n                            <li><strong>In-Focus Light:</strong> Originating precisely from the focal plane, light is refracted into a converging cone that passes completely through the pinhole aperture and reaches the PMT detector.</li>\n                            <li><strong>Out-of-Focus Light:</strong> Originating from planes above or below the focal plane, light converges either in front of or behind the pinhole, spreading into a wide defocused disc at the pinhole plane. <strong>Over $99\\%$ of out-of-focus flare is physically blocked by the opaque pinhole screen!</strong></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-layer-group\"></i> Laser Scanning Confocal Microscope (LSCM) Optical Path</div>\n                <span class=\"optics-diagram-badge\">Optical Sectioning</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 300\" width=\"800\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Laser Source -->\n                    <rect x=\"30\" y=\"40\" width=\"70\" height=\"30\" fill=\"#ef4444\"/>\n                    <text x=\"65\" y=\"60\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                    \n                    <!-- Illumination Beam -->\n                    <line x1=\"100\" y1=\"55\" x2=\"220\" y2=\"55\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n\n                    <!-- Dichroic Beam Splitter -->\n                    <line x1=\"205\" y1=\"40\" x2=\"235\" y2=\"70\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                    <text x=\"220\" y=\"30\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Dichroic Mirror</text>\n\n                    <!-- Downward Excitation Laser Path -->\n                    <line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n\n                    <!-- Objective Lens -->\n                    <path d=\"M 160 140 A 120 120 0 0 1 280 140 A 120 120 0 0 1 160 140 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"290\" y=\"145\" fill=\"#38bdf8\" font-size=\"11\">Objective</text>\n\n                    <!-- Focused Spot in Specimen (In-Focus Plane) -->\n                    <line x1=\"180\" y1=\"145\" x2=\"220\" y2=\"230\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <line x1=\"260\" y1=\"145\" x2=\"220\" y2=\"230\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                    <circle cx=\"220\" cy=\"230\" r=\"4.5\" fill=\"#fbbf24\"/>\n                    <text x=\"240\" y=\"235\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">In-Focus Plane (Focal Spot)</text>\n\n                    <!-- Out-of-Focus Planes (Dotted lines) -->\n                    <line x1=\"140\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                    <text x=\"135\" y=\"195\" fill=\"#64748b\" font-size=\"9\">Above Focal Plane</text>\n                    <line x1=\"140\" y1=\"260\" x2=\"300\" y2=\"260\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                    <text x=\"135\" y=\"270\" fill=\"#64748b\" font-size=\"9\">Below Focal Plane</text>\n\n                    <!-- Returning Fluorescent Green Light (passes dichroic mirror upward) -->\n                    <line x1=\"220\" y1=\"230\" x2=\"220\" y2=\"55\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"15\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"220\" y1=\"15\" x2=\"480\" y2=\"15\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Tube/Detector Lens -->\n                    <path d=\"M 480 0 A 30 30 0 0 1 480 30 A 30 30 0 0 1 480 0 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                    <text x=\"480\" y=\"45\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Detector Lens</text>\n\n                    <!-- In-focus converging to pinhole -->\n                    <line x1=\"480\" y1=\"5\" x2=\"620\" y2=\"15\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n                    <line x1=\"480\" y1=\"25\" x2=\"620\" y2=\"15\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n                    <!-- Pinhole Aperture Screen -->\n                    <rect x=\"620\" y=\"-10\" width=\"8\" height=\"20\" fill=\"#475569\"/>\n                    <rect x=\"620\" y=\"20\" width=\"8\" height=\"20\" fill=\"#475569\"/>\n                    <text x=\"624\" y=\"55\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Pinhole Aperture</text>\n\n                    <!-- Transmitted in-focus beam through pinhole to PMT -->\n                    <line x1=\"620\" y1=\"15\" x2=\"700\" y2=\"15\" stroke=\"#10b981\" stroke-width=\"3\"/>\n\n                    <!-- PMT Detector -->\n                    <rect x=\"700\" y=\"-5\" width=\"60\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"730\" y=\"20\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">PMT</text>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 5.2:</strong> Optical path of a laser scanning confocal microscope. The conjugate pinhole blocks out-of-focus light from above and below the focal plane, achieving crisp optical sectioning.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Optical Sectioning &amp; 3D Volume Reconstruction</h2>\n            <p>Because the pinhole rejects all out-of-focus photons, the microscope records an ultra-sharp 2D optical slice (an <strong>optical section</strong>) through a thick biological specimen without physically cutting it with a microtome. By driving a motorized piezoelectric $z$-stage, a series of optical sections are captured at step heights ($z_1, z_2, \\dots, z_n$). Specialized graphics software renders these into full, rotatable <strong>3D volumetric reconstructions</strong>.</p>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary function of the pinhole aperture in a confocal microscope?",
          "options": [
            "To magnify the image by 100x",
            "To physically block and reject out-of-focus light rays coming from planes above and below the focal plane",
            "To polarize the laser beam",
            "To cool the specimen"
          ],
          "correctIndex": 1,
          "explanation": "The pinhole sits at the conjugate image plane, allowing only in-focus photons through and blocking >99% of out-of-focus background haze."
        },
        {
          "type": "multiple-choice",
          "question": "What is meant by 'optical sectioning' in confocal microscopy?",
          "options": [
            "Slicing the specimen with a physical diamond knife",
            "Recording sharp non-destructive 2D images of thin internal planes within thick living tissue by rejecting out-of-focus blur",
            "Splitting light into spectrum colors",
            "Viewing only half of the sample"
          ],
          "correctIndex": 1,
          "explanation": "Optical sectioning isolates an internal optical plane non-invasively, eliminating the need to physically cut tissue into thin slices."
        },
        {
          "type": "multiple-choice",
          "question": "Who invented the confocal microscope principle in 1957?",
          "options": [
            "Marvin Minsky",
            "Ernst Ruska",
            "Dennis Gabor",
            "Theodore Maiman"
          ],
          "correctIndex": 0,
          "explanation": "Marvin Minsky invented and patented the principle of confocal scanning microscopy in 1957."
        }
      ]
    },
    "electron-microscopy-sem": {
      "id": "electron-microscopy-sem",
      "title": "Scanning Electron Microscope (SEM): Electron Optics & Detectors",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "9 min read",
      "lead": "Break the optical diffraction barrier using de Broglie matter waves. Study the SEM column, electromagnetic condenser lenses, and Secondary (SE) vs. Backscattered (BSE) electron imaging.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Breaking the Optical Diffraction Barrier: de Broglie Matter Waves</h2>\n            <p>In 1924, Louis de Broglie hypothesized that moving particles exhibit wave characteristics with wavelength inversely proportional to momentum: $\\lambda = h/p$.</p>\n            <p>Accelerating an electron through an electrical potential difference $V$ gives it kinetic energy $e V = \\frac{p^2}{2m_e}$. The relativistic de Broglie wavelength is:</p>\n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-bolt\"></i> de Broglie Electron Wavelength</div>\n                <div class=\"formula-math-display\">\n                    \\lambda_e = \\frac{h}{\\sqrt{2 m_e e V}} \\approx \\frac{1.227}{\\sqrt{V(\\text{Volts})}}\\text{ nm}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\">At $V = 10\\text{ kV}$: $\\lambda \\approx 0.012\\text{ nm} = 0.12\\text{ \\AA}$ ($40,000\\times$ smaller than visible light!)</div>\n                    <div class=\"formula-var-item\">At $V = 100\\text{ kV}$: $\\lambda \\approx 0.0037\\text{ nm} = 0.037\\text{ \\AA}$</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>SEM Column Anatomy &amp; Electron Optics</h2>\n            <ul>\n                <li><strong>Electron Gun:</strong> Generates a high-intensity source of electrons (Thermionic Tungsten hairpin filament, $LaB_6$ hexaboride crystal, or Cold Field Emission Gun [FEG]).</li>\n                <li><strong>Electromagnetic Lenses:</strong> Coils carrying electrical current encased in soft iron pole-pieces generate Lorentz magnetic fields $\\mathbf{F} = -e(\\mathbf{v} \\times \\mathbf{B})$ that focus the electron beam into a probe as small as $1\\text{-}2\\text{ nm}$.</li>\n                <li><strong>Scan Coils:</strong> Deflect the electron beam in a precise two-dimensional raster matrix ($X-Y$ grid) across the specimen surface.</li>\n                <li><strong>Specimen Chamber (High Vacuum):</strong> Evacuated to $< 10^{-5}\\text{ Torr}$ to prevent electrons from scattering off air molecules.</li>\n            </ul>\n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-atom\"></i> Scanning Electron Microscope (SEM) Column Architecture</div>\n                <span class=\"optics-diagram-badge\">Electron Microscopy</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                <svg viewBox=\"0 0 800 320\" width=\"800\" height=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <!-- Column Outer Housing -->\n                    <rect x=\"260\" y=\"10\" width=\"280\" height=\"280\" rx=\"8\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2\"/>\n\n                    <!-- Electron Gun at Top -->\n                    <rect x=\"360\" y=\"20\" width=\"80\" height=\"35\" rx=\"4\" fill=\"#fbbf24\"/>\n                    <text x=\"400\" y=\"42\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Electron Gun (FEG)</text>\n\n                    <!-- Electron Beam Path (Cyan Line) -->\n                    <line x1=\"400\" y1=\"55\" x2=\"400\" y2=\"250\" stroke=\"#38bdf8\" stroke-width=\"3\" filter=\"drop-shadow(0 0 6px #38bdf8)\"/>\n\n                    <!-- Condenser Lens 1 -->\n                    <rect x=\"280\" y=\"75\" width=\"70\" height=\"25\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <rect x=\"450\" y=\"75\" width=\"70\" height=\"25\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"400\" y=\"92\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Condenser Lens 1</text>\n\n                    <!-- Condenser Lens 2 -->\n                    <rect x=\"280\" y=\"120\" width=\"70\" height=\"25\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <rect x=\"450\" y=\"120\" width=\"70\" height=\"25\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"400\" y=\"137\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Condenser Lens 2</text>\n\n                    <!-- Scan Coils (X-Y Rastering) -->\n                    <rect x=\"320\" y=\"160\" width=\"40\" height=\"20\" fill=\"#a855f7\"/>\n                    <rect x=\"440\" y=\"160\" width=\"40\" height=\"20\" fill=\"#a855f7\"/>\n                    <text x=\"400\" y=\"174\" fill=\"#a855f7\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Scan Coils (X-Y)</text>\n\n                    <!-- Objective Lens -->\n                    <rect x=\"280\" y=\"195\" width=\"70\" height=\"30\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <rect x=\"450\" y=\"195\" width=\"70\" height=\"30\" fill=\"#334155\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"400\" y=\"213\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Objective Lens</text>\n\n                    <!-- Specimen Stage -->\n                    <rect x=\"350\" y=\"250\" width=\"100\" height=\"15\" fill=\"#e2e8f0\"/>\n                    <text x=\"400\" y=\"262\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Sample Stage</text>\n\n                    <!-- Secondary Electron (SE) Detector (Everhart-Thornley) -->\n                    <g transform=\"translate(100, 200)\">\n                        <rect x=\"0\" y=\"0\" width=\"130\" height=\"50\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                        <text x=\"65\" y=\"22\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">SE Detector (E-T)</text>\n                        <text x=\"65\" y=\"38\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Surface Topography</text>\n                        <line x1=\"130\" y1=\"25\" x2=\"350\" y2=\"250\" stroke=\"#10b981\" stroke-dasharray=\"4,3\" stroke-width=\"1.5\"/>\n                    </g>\n\n                    <!-- Backscattered Electron (BSE) Detector -->\n                    <g transform=\"translate(570, 200)\">\n                        <rect x=\"0\" y=\"0\" width=\"130\" height=\"50\" rx=\"6\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                        <text x=\"65\" y=\"22\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">BSE Detector</text>\n                        <text x=\"65\" y=\"38\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Atomic Number (Z)</text>\n                        <line x1=\"0\" y1=\"25\" x2=\"450\" y2=\"250\" stroke=\"#fbbf24\" stroke-dasharray=\"4,3\" stroke-width=\"1.5\"/>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 5.3:</strong> Scanning Electron Microscope column. Electromagnetic condenser and objective lenses demagnify the electron probe; scan coils raster the beam; Secondary Electron (SE) and Backscattered Electron (BSE) detectors capture topographical and compositional signals.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2>Imaging Signals: Secondary (SE) vs. Backscattered (BSE) Electrons</h2>\n            <ul>\n                <li><strong>Secondary Electrons (SE):</strong> Inelastic collisions with specimen atoms eject valence electrons with low kinetic energy ($< 50\\text{ eV}$). Because of their low energy, only electrons generated within the top $1\\text{-}5\\text{ nm}$ can escape. Collected by an Everhart-Thornley detector with a $+200\\text{ V}$ bias cage, producing stunning, high-depth-of-field 3D surface topography images.</li>\n                <li><strong>Backscattered Electrons (BSE):</strong> Incident beam electrons undergo high-energy elastic Rutherford backscattering off specimen atomic nuclei. The backscatter coefficient $\\eta$ scales directly with atomic number: $\\eta \\propto Z$. Heavier elements ($Pb, Au$) appear bright, while light elements ($C, Al$) appear dark (compositional contrast).</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the approximate de Broglie wavelength of an electron accelerated through a 10,000 Volt potential in an electron microscope?",
          "options": [
            "500 nm",
            "10 nm",
            "0.012 nm (0.12 Å)",
            "1.0 µm"
          ],
          "correctIndex": 2,
          "explanation": "λ ≈ 1.227 / √V nm = 1.227 / √10000 = 1.227 / 100 ≈ 0.012 nm."
        },
        {
          "type": "multiple-choice",
          "question": "Which electron signal in an SEM provides high-resolution 3D surface topography?",
          "options": [
            "Secondary Electrons (SE)",
            "Backscattered Electrons (BSE)",
            "Characteristic X-rays",
            "Transmitted Unscattered Electrons"
          ],
          "correctIndex": 0,
          "explanation": "Secondary electrons have low energy (<50 eV) and escape only from the top few nanometers of the surface, creating high-contrast topographical relief."
        },
        {
          "type": "multiple-choice",
          "question": "How do Backscattered Electrons (BSE) provide material compositional contrast in an SEM?",
          "options": [
            "They change color",
            "The elastic backscattering coefficient increases monotonically with atomic number Z, making heavier elements appear brighter",
            "They heat up the detector",
            "They only detect hydrogen"
          ],
          "correctIndex": 1,
          "explanation": "Higher atomic number nuclei possess larger Coulomb cross-sections, backscattering more electrons and yielding atomic number (Z) contrast."
        }
      ]
    },
    "microscopy-comparative-analysis": {
      "id": "microscopy-comparative-analysis",
      "title": "Comparative Evaluation: Compound vs. Confocal vs. SEM",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Compare Optical Compound, Laser Scanning Confocal, and Scanning Electron Microscopy. Evaluate resolution, radiation regimes, depth of field, and sample preparation.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Comprehensive Comparison Matrix</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Parameter</th><th>Compound Optical Microscope</th><th>Laser Scanning Confocal (LSCM)</th><th>Scanning Electron Microscope (SEM)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Illumination Source</strong></td>\n                            <td>Incoherent white visible light ($\\lambda \\sim 400\\text{-}700\\text{ nm}$)</td>\n                            <td>Coherent laser lines (Ar, He-Ne, Diode, $\\lambda \\sim 405\\text{-}633\\text{ nm}$)</td>\n                            <td>Relativistic electron beam ($\\lambda \\sim 0.003\\text{-}0.012\\text{ nm}$)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Focusing Mechanism</strong></td>\n                            <td>Glass optical refractive lenses</td>\n                            <td>Glass objectives + Pinhole spatial filter</td>\n                            <td>Electromagnetic Lorentz coils</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Practical Resolution Limit</strong></td>\n                            <td>$\\sim 200\\text{ nm}$ ($0.2\\text{ }\\mu\\text{m}$, Abbe limit)</td>\n                            <td>$\\sim 180\\text{ nm}$ ($XY$), $\\sim 500\\text{ nm}$ ($Z$-axis)</td>\n                            <td><strong>$1\\text{-}2\\text{ nm}$</strong> (Sub-nanometer in FEG-SEM)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Useful Magnification</strong></td>\n                            <td>$40\\times$ to $1,500\\times$</td>\n                            <td>$100\\times$ to $2,000\\times$ (+ digital 3D zoom)</td>\n                            <td>$10\\times$ to $\\mathbf{500,000\\times}$</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Depth of Field</strong></td>\n                            <td>Very shallow ($< 1\\text{ }\\mu\\text{m}$)</td>\n                            <td>Sectioned into discrete z-slices</td>\n                            <td><strong>Enormous</strong> ($> 300\\times$ optical microscope)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Operational Environment</strong></td>\n                            <td>Ambient atmospheric air / room pressure</td>\n                            <td>Ambient air (ideal for live cells)</td>\n                            <td>High vacuum ($< 10^{-5}\\text{ Torr}$)</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Specimen Preparation</strong></td>\n                            <td>Simple thin slide staining</td>\n                            <td>Fluorescent dye tagging (GFP, DAPI)</td>\n                            <td>Dehydration + Sputter-coating with Gold/Carbon</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which microscope technique uniquely enables live biological cells to be imaged non-destructively in three dimensions without vacuum dehydration?",
          "options": [
            "Transmission Electron Microscope",
            "Scanning Electron Microscope",
            "Laser Scanning Confocal Microscope",
            "Atomic Force Microscope"
          ],
          "correctIndex": 2,
          "explanation": "Confocal microscopy operates at ambient pressure in liquid culture media with fluorescent tagging, perfect for observing living cells in real time."
        },
        {
          "type": "multiple-choice",
          "question": "Why must biological specimens be sputter-coated with an ultra-thin layer of gold or carbon before SEM imaging?",
          "options": [
            "To prevent them from floating away",
            "To provide electrical conductivity, preventing negative electrostatic charge buildup from the electron beam",
            "To make them waterproof",
            "To change their color"
          ],
          "correctIndex": 1,
          "explanation": "Non-conductive biological specimens accumulate negative electron charges that repel incoming electrons and distort the image; conductive gold coatings dissipate this charge to ground."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary factor limiting the maximum useful magnification of an optical compound microscope to ~1,500x?",
          "options": [
            "Quality of glass polish",
            "Abbe diffraction limit imposed by the finite wavelength of visible light (~500 nm)",
            "Eye pupil diameter",
            "Lens weight"
          ],
          "correctIndex": 1,
          "explanation": "Diffraction blurs details smaller than ~λ/2; magnifying beyond 1,500x yields 'empty magnification' where the image gets bigger without resolving finer details."
        }
      ]
    },
    "optical-telescopes": {
      "id": "optical-telescopes",
      "title": "Optical Telescopes: Refracting & Reflecting Systems",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Study refracting (Keplerian, Galilean) and reflecting (Newtonian, Cassegrain, Ritchey-Chrétien) telescopes. Analyze light gathering power and Rayleigh's angular resolution limit.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Fundamental Astronomical Performance Metrics</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Metric</th><th>Formula</th><th>Physical Implication</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. Light Gathering Power (LGP)</strong></td>\n                            <td>$LGP \\propto D^2$</td>\n                            <td>Proportional to the collecting area of the primary aperture $D$. A $10\\text{-meter}$ telescope collects $40,000\\times$ more photons than a $5\\text{-cm}$ refractor, revealing extremely faint, distant galaxies!</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. Angular Magnification ($M$)</strong></td>\n                            <td>$M = \\frac{f_o}{f_e}$</td>\n                            <td>Ratio of objective focal length $f_o$ to eyepiece focal length $f_e$.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Angular Resolving Power ($\\theta$)</strong></td>\n                            <td>$\\theta = 1.22 \\frac{\\lambda}{D}$ (Rayleigh criterion)</td>\n                            <td>Minimum angular separation between two close stars that can be resolved. Larger aperture $D$ yields smaller $\\theta$ and superior resolution!</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Refracting vs. Reflecting Telescopes</h2>\n            <ul>\n                <li><strong>Refracting Telescopes (Dioptrics):</strong> Use glass objective lenses.\n                    <ul>\n                        <li><em>Keplerian:</em> Convex objective + Convex eyepiece $\\implies$ Inverted image, large field of view.</li>\n                        <li><em>Galilean:</em> Convex objective + Concave eyepiece $\\implies$ Erect image, narrow field of view.</li>\n                        <li><em>Critical Limitations:</em> Severe chromatic aberration; glass absorbs ultraviolet and infrared wavelengths; massive lenses can only be supported along their thin edges and sag under gravity, distorting optics. (Largest refractor ever built: Yerkes Observatory $40\\text{-inch} / 1.02\\text{ m}$, 1897).</li>\n                    </ul>\n                </li>\n                <li><strong>Reflecting Telescopes (Catoptrics):</strong> Use curved primary mirrors.\n                    <ul>\n                        <li><em>Newtonian:</em> Concave parabolic primary mirror + flat diagonal secondary at $45^\\circ$, eyepiece on the side.</li>\n                        <li><em>Cassegrain:</em> Concave parabolic primary with a central hole + convex hyperbolic secondary mirror, eyepiece positioned conveniently at the rear.</li>\n                        <li><em>Ritchey-Chrétien:</em> Advanced Cassegrain using hyperbolic primary and hyperbolic secondary mirrors, completely eliminating both spherical aberration and off-axis coma across a wide field of view. (Used in the Hubble Space Telescope, Keck, and VLT!).</li>\n                        <li><em>Supreme Advantages:</em> <strong>Zero chromatic aberration</strong> (reflection is independent of wavelength); mirrors can be fully supported from behind; giant segmented lightweight mirrors exceeding $10\\text{ meters}$ are feasible!</li>\n                    </ul>\n                </li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the angular magnification M of an astronomical telescope with objective focal length f_o = 200 cm and eyepiece focal length f_e = 5 cm?",
          "options": [
            "20x",
            "40x",
            "100x",
            "1000x"
          ],
          "correctIndex": 1,
          "explanation": "M = f_o / f_e = 200 cm / 5 cm = 40x."
        },
        {
          "type": "multiple-choice",
          "question": "Why are all modern research telescopes larger than 1 meter designed as Reflectors rather than Refractors?",
          "options": [
            "Mirrors are cheaper to transport",
            "Mirrors have zero chromatic aberration and can be mechanically supported across their entire back surface, whereas large lenses sag under their own weight and exhibit chromatic distortion",
            "Lenses reflect all light back to the sky",
            "Mirrors only work in space"
          ],
          "correctIndex": 1,
          "explanation": "Reflection obeys the law of reflection for all wavelengths equally (no chromatic aberration), and massive mirrors can be supported from behind without sagging."
        },
        {
          "type": "multiple-choice",
          "question": "Which optical configuration eliminates both Spherical Aberration and Coma, and is used in the Hubble Space Telescope?",
          "options": [
            "Galilean refractor",
            "Newtonian reflector",
            "Ritchey-Chrétien Cassegrain",
            "Huygens telescope"
          ],
          "correctIndex": 2,
          "explanation": "The Ritchey-Chrétien design uses two hyperbolic mirrors to provide a wide, coma-free, spherically corrected field."
        }
      ]
    },
    "radio-telescopes": {
      "id": "radio-telescopes",
      "title": "Radio Telescopes: Parabolic Dishes & Aperture Synthesis (VLBI)",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Explore radio astronomy. Study large parabolic antenna collectors, cryogenic receivers, the 21-cm hydrogen line, and interferometric Very Long Baseline Interferometry (VLBI).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Radio Window of the Universe</h2>\n            <p>Radio telescopes detect cosmic electromagnetic radiation spanning wavelengths from <strong>$\\lambda \\sim 1\\text{ millimeter to } 30\\text{ meters}$</strong> ($10\\text{ MHz to } 300\\text{ GHz}$). Unlike optical light, radio waves pass unhindered through dense interstellar dust clouds, galactic gas, and daytime terrestrial atmosphere.</p>\n            <p>Major cosmic radio sources include: Pulsars (rapidly rotating neutron stars), Quasars, the Cosmic Microwave Background (CMB, $2.725\\text{ K}$), and the historic <strong>$21\\text{-cm neutral Hydrogen line}$ ($1420.4\\text{ MHz}$)</strong> mapping the spiral arms of galaxies.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Construction of a Radio Telescope</h2>\n            <ul>\n                <li><strong>Parabolic Reflector Dish:</strong> Curved metal surface (aluminum panels or wire mesh) reflecting radio waves to the focus. Because radio wavelengths are long ($\\lambda \\gg 1\\text{ mm}$), surface roughness tolerances can be $\\sim 1\\text{ mm}$, permitting giant dishes ($30\\text{-}500\\text{ meters}$ across!).</li>\n                <li><strong>Feed Horn Antenna:</strong> Positioned at the primary focus to capture the concentrated radio wavefront.</li>\n                <li><strong>Cryogenic Low-Noise Amplifier (LNA):</strong> Cooled with liquid helium to $\\sim 4\\text{ Kelvin}$ to eliminate thermal electronic Johnson noise.</li>\n                <li><strong>Digital Correlator &amp; Spectrometer:</strong> Digitize and Fourier-transform radio voltages into astronomical spectral flux maps.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Aperture Synthesis &amp; Very Long Baseline Interferometry (VLBI)</h2>\n            <p>Because Rayleigh resolution is $\\theta = 1.22 \\frac{\\lambda}{D}$, a radio dish observing at $\\lambda = 21\\text{ cm}$ with $D = 100\\text{ m}$ has terrible angular resolution ($\\theta \\approx 0.15^\\circ$, worse than the naked human eye!).</p>\n            <p>To overcome this, radio astronomers use <strong>Interferometry (Aperture Synthesis)</strong>:</p>\n            <ul>\n                <li>Multiple separated dishes observe the same cosmic source simultaneously.</li>\n                <li>Signals are recorded with atomic hydrogen maser clocks and synthesized digitally.</li>\n                <li>The effective aperture diameter $D_{eff}$ equals the <strong>maximum physical baseline separation $B_{max}$</strong> between the dishes!</li>\n                <li><strong>Event Horizon Telescope (EHT):</strong> Linked radio dishes across Hawaii, Chile, Europe, and the South Pole to form an Earth-sized telescope ($D_{eff} \\approx 10,000\\text{ km}$), successfully imaging the black hole event horizons in galaxies M87* and Sagittarius A*!</li>\n                <li><strong>GMRT (Pune, India):</strong> The Giant Metrewave Radio Telescope operates 30 massive parabolic dishes of $45\\text{-meter}$ diameter over a $25\\text{-km}$ baseline.</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the famous radio emission line of neutral atomic hydrogen used to map the Milky Way galaxy?",
          "options": [
            "632.8 nm line",
            "21-cm line (1420.4 MHz)",
            "10.6 µm line",
            "3-meter line"
          ],
          "correctIndex": 1,
          "explanation": "The 21-cm (1420.4 MHz) hyperfine spin-flip transition of neutral hydrogen penetrates interstellar dust clouds effortlessly."
        },
        {
          "type": "multiple-choice",
          "question": "Why do radio telescope arrays employ Interferometry (Aperture Synthesis)?",
          "options": [
            "To generate radio signals",
            "To synthesize a giant effective aperture equal to the separation baseline between dishes, achieving ultra-high angular resolution",
            "To change the frequency of radio waves",
            "To make the dishes lighter"
          ],
          "correctIndex": 1,
          "explanation": "Interferometry combines signals from distant antennas to achieve the angular resolving power of a single telescope as wide as the baseline array."
        },
        {
          "type": "multiple-choice",
          "question": "Where is India's Giant Metrewave Radio Telescope (GMRT) located?",
          "options": [
            "Bengaluru, Karnataka",
            "Kodaikanal, Tamil Nadu",
            "Near Narayangaon, Pune, Maharashtra",
            "Srikalahasti, Andhra Pradesh"
          ],
          "correctIndex": 2,
          "explanation": "The world-renowned GMRT consists of thirty 45-meter antennas located at Khodad near Pune, Maharashtra, operated by NCRA-TIFR."
        }
      ]
    },
    "solar-telescopes": {
      "id": "solar-telescopes",
      "title": "Solar Telescopes: Thermal Heat Management & Narrowband Filters",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "8 min read",
      "lead": "Study solar telescopes designed to survive extreme thermal loads. Understand vacuum light tubes, liquid-cooled heat stops, H-alpha filters, and India's Aditya-L1 solar mission.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>The Challenge: Blinding Solar Power &amp; Internal Turbulence</h2>\n            <p>Observing the Sun presents challenges found in no other astronomical field. A large solar aperture gathers kilowatts of concentrated thermal solar radiation:</p>\n            <ul>\n                <li><strong>Thermal Boiling (Internal Seeing):</strong> Intense heat absorbed by the telescope optics and tube walls creates violent convection turbulence in the internal air column, completely ruining image resolution.</li>\n                <li><strong>Optical Destruction:</strong> Uncooled optics would melt or shatter within seconds at prime focus.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Engineering Solutions in Modern Solar Telescopes</h2>\n            <ol>\n                <li><strong>Vacuum or Helium-Filled Light Shafts:</strong> The optical light path is evacuated into a vacuum ($< 1\\text{ Torr}$) or filled with circulating Helium gas. Because Helium has an ultra-low refractive index ($n = 1.000036$) and $6\\times$ higher thermal conductivity than air, thermal boiling plumes are eliminated!</li>\n                <li><strong>Liquid-Cooled Heat Stops:</strong> Cooled reflecting stops placed at prime focus reflect $>95\\%$ of unwanted solar energy harmlessly out of the telescope, allowing only a fraction of a percent of the disk through to the detectors.</li>\n                <li><strong>Ultra-Narrowband Birefringent Filters:</strong>\n                    <ul>\n                        <li><em>Hydrogen-Alpha ($H\\text{-}\\alpha$, $\\lambda = 656.28\\text{ nm}$, linewidth $< 0.05\\text{ nm}$):</em> Peeks through the blinding photosphere to reveal the dynamic solar chromosphere, solar flares, prominences, and coronal mass ejections.</li>\n                        <li><em>Calcium II K ($\\lambda = 393.37\\text{ nm}$):</em> Maps magnetic field networks and solar faculae.</li>\n                    </ul>\n                </li>\n                <li><strong>Notable Observatories:</strong>\n                    <ul>\n                        <li><strong>Daniel K. Inouye Solar Telescope (DKIST, Hawaii):</strong> World's largest solar telescope ($4\\text{-meter}$ aperture, resolving $20\\text{-km}$ features on the Sun).</li>\n                        <li><strong>Udaipur Solar Observatory (USO, India):</strong> Located on an island in Lake Fateh Sagar, Rajasthan; surrounding lake water suppresses ambient thermal air turbulence.</li>\n                        <li><strong>Aditya-L1 (ISRO, India):</strong> Space observatory stationed at Lagrange point L1 carrying the Visible Emission Line Coronagraph (VELC) and Solar Ultraviolet Imaging Telescope (SUIT).</li>\n                    </ul>\n                </li>\n            </ol>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why are the internal tubes of high-resolution ground solar telescopes evacuated into a vacuum or filled with Helium gas?",
          "options": [
            "To make the telescope lighter",
            "To eliminate thermal convection air plumes ('internal seeing') caused by intense concentrated sunlight",
            "To generate laser light",
            "To prevent rust"
          ],
          "correctIndex": 1,
          "explanation": "Helium or vacuum eliminates air density fluctuations within the optical tube, preserving diffraction-limited solar imaging."
        },
        {
          "type": "multiple-choice",
          "question": "Which narrow spectral line at 656.3 nm is universally used in solar filters to image solar flares and prominences?",
          "options": [
            "Sodium D line",
            "Hydrogen-Alpha (H-α) line",
            "Iron K-alpha line",
            "Helium D3 line"
          ],
          "correctIndex": 1,
          "explanation": "The Hydrogen-Alpha line (656.28 nm in the red) isolates chromospheric plasma, revealing solar prominences and active magnetic regions."
        },
        {
          "type": "multiple-choice",
          "question": "What is India's dedicated solar space observatory stationed at the Sun-Earth L1 Lagrange point?",
          "options": [
            "Chandrayaan-3",
            "Mangalyaan",
            "Aditya-L1",
            "Astrosat"
          ],
          "correctIndex": 2,
          "explanation": "Aditya-L1 was launched by ISRO in 2023 to continuously observe the Sun's photosphere, chromosphere, and corona from the halo orbit around L1."
        }
      ]
    },
    "ir-uv-telescopes": {
      "id": "ir-uv-telescopes",
      "title": "Infrared & Ultraviolet Space Telescopes: JWST, HST & Astrosat",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "9 min read",
      "lead": "Explore space astronomy beyond the visible spectrum. Understand cryogenic cooling in the James Webb Space Telescope (JWST) and vacuum UV reflective optics in HST and Astrosat.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Why Must Astronomy Move into Space?</h2>\n            <p>Earth's atmosphere acts as an impenetrable shield for most of the electromagnetic spectrum:</p>\n            <ul>\n                <li><strong>Infrared (IR):</strong> Atmospheric water vapor and $CO_2$ absorb broad IR bands. Crucially, Earth and the warm telescope itself glow brightly in the thermal infrared, blinding detectors.</li>\n                <li><strong>Ultraviolet (UV):</strong> The stratospheric ozone layer ($O_3$) and atmospheric nitrogen/oxygen completely block all UV radiation below $\\mathbf{\\lambda < 300\\text{ nm}}$ (Vacuum UV and Extreme UV). UV astronomy is <strong>100% impossible from the ground!</strong></li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Infrared Space Astronomy: James Webb Space Telescope (JWST)</h2>\n            <ul>\n                <li><strong>Mission Architecture:</strong> Launched December 25, 2021; stationed at Sun-Earth Lagrange point L2 ($1.5\\text{ million km}$ from Earth).</li>\n                <li><strong>Optics:</strong> $6.5\\text{-meter}$ deployable primary mirror composed of 18 gold-coated beryllium hexagonal segments. Gold provides $>98\\%$ reflectance across the near and mid-infrared ($0.6\\text{-}28\\text{ }\\mu\\text{m}$).</li>\n                <li><strong>Cryogenic Thermal Shielding:</strong> Five-layer tennis-court-sized Kapton sunshield attenuates solar heat by a factor of 1,000,000, passively cooling the telescope side to <strong>$40\\text{ Kelvin}$ ($-233^\\circ\\text{C}$)</strong>. The MIRI instrument is actively cooled to <strong>$7\\text{ Kelvin}$</strong> via a helium cryocooler!</li>\n                <li><strong>Astrophysical Discoveries:</strong> Peering through cosmic dust clouds into stellar nurseries, detecting atmospheric water and carbon dioxide on exoplanets, and observing the earliest high-redshift galaxies formed after the Big Bang ($z > 13$).</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>Ultraviolet Space Astronomy: Hubble &amp; Astrosat (UVIT)</h2>\n            <ul>\n                <li><strong>Optics for Vacuum UV:</strong> Normal glass lenses are completely opaque in the UV. Telescopes must be all-reflective with specialized mirror coatings: high-purity aluminum overcoated with <strong>Magnesium Fluoride ($MgF_2$)</strong> to prevent aluminum oxidation and maximize UV reflectance down to $115\\text{ nm}$.</li>\n                <li><strong>Solar-Blind Detectors:</strong> Microchannel Plates (MCP) paired with Cesium Iodide (CsI) or Telluride photocathodes that respond solely to energetic UV photons while remaining blind to visible ambient light.</li>\n                <li><strong>Astrosat (India's Multi-Wavelength Observatory):</strong> Launched by ISRO in 2015, featuring the <strong>Ultra-Violet Imaging Telescope (UVIT)</strong> consisting of twin $37.5\\text{-cm}$ Ritchey-Chrétien telescopes observing in Far-UV ($130\\text{-}180\\text{ nm}$) and Near-UV ($200\\text{-}300\\text{ nm}$) with high spatial resolution ($1.2\\text{ arcsec}$).</li>\n            </ul>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why is the 6.5-meter primary mirror of the James Webb Space Telescope (JWST) coated with pure gold?",
          "options": [
            "To make it look attractive",
            "Gold provides exceptional, near-100% optical reflectance in the infrared spectrum (0.6 to 28 µm)",
            "Gold prevents cosmic rays from hitting the spacecraft",
            "Gold is magnetic"
          ],
          "correctIndex": 1,
          "explanation": "Gold has unmatched reflectance throughout the near- and mid-infrared, where JWST captures faint redshifted cosmic light."
        },
        {
          "type": "multiple-choice",
          "question": "Why cannot ultraviolet telescopes (λ < 300 nm) operate from ground-based mountain observatories?",
          "options": [
            "Atmospheric stratospheric ozone and molecular oxygen completely absorb all UV light below 300 nm",
            "Lenses shatter in mountain air",
            "The night sky is too bright in the UV",
            "UV light travels too slowly"
          ],
          "correctIndex": 0,
          "explanation": "Earth's ozone layer blocks UV radiation below 300 nm, necessitating space deployment (such as Astrosat and Hubble)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the Ultra-Violet Imaging Telescope (UVIT) aboard India's Astrosat satellite?",
          "options": [
            "A radio receiver",
            "A twin 37.5-cm Ritchey-Chrétien telescope observing simultaneously in Far-UV, Near-UV, and visible bands",
            "A solar solar furnace",
            "An electron microscope"
          ],
          "correctIndex": 1,
          "explanation": "UVIT on Astrosat consists of twin 37.5 cm Ritchey-Chrétien optical systems capturing high-resolution UV sky surveys."
        }
      ]
    },
    "unit5-activities-rubrics": {
      "id": "unit5-activities-rubrics",
      "title": "Unit 5 Student Activity & Assessment Rubric",
      "category": "cat-unit5",
      "track": "track-unit5",
      "readTime": "5 min read",
      "lead": "Student collaborative project on comparative analysis of optical and electron microscopes, multi-wavelength observatory infographic design, and 10-point rubric.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2>Student Activity: Multi-Wavelength Observatories &amp; Advanced Microscopy Analysis</h2>\n            <p><strong>Activity Framework:</strong> Form student groups to conduct a comparative research project contrasting advanced microscopes (Compound, Confocal, SEM) and multi-wavelength telescopes (Optical, Radio, Solar, IR, UV). Each group will design an illustrative infographic poster and deliver a 10-minute presentation focusing on how optical design is tailored to specific wavelength regimes.</p>\n\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-chalkboard-user\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Poster Presentation Guidelines</div>\n                    <div class=\"callout-text\">\n                        <ul>\n                            <li><strong>Microscopy Focus:</strong> Diagram the ray/electron beam path, identify optical vs. electromagnetic lenses, calculate Abbe diffraction limit vs. de Broglie wavelength, and explain when to use Confocal vs. SEM.</li>\n                            <li><strong>Telescope Focus:</strong> Explain how aperture size $D$ dictates resolving power $\\theta = 1.22\\lambda/D$, contrast Cassegrain reflectors with radio interferometers, and explain why JWST requires cryogenic cooling while Astrosat uses $MgF_2$ coatings.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2>10-Point Student Assessment Rubric</h2>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Assessment Criteria</th><th>Excellent (9-10 Marks)</th><th>Proficient (7-8 Marks)</th><th>Basic (4-6 Marks)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Infographic Scientific Rigor (4 Marks)</strong></td>\n                            <td>Flawless schematics of microscopes and telescopes; exact mathematical formulas ($\\Delta x, \\lambda_e, M, \\theta$); clear wavelength mapping.</td>\n                            <td>Accurate overall diagrams; minor omissions in detector or lens physics.</td>\n                            <td>Incomplete schematics; missing mathematical derivations.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Comparative Analysis &amp; Breadth (3 Marks)</strong></td>\n                            <td>Insightful comparison across radiation regimes; articulate discussion of Abbe limit, pinhole rejection, and aperture synthesis.</td>\n                            <td>Good comparison but limited depth on radio interferometry or space cryogenic systems.</td>\n                            <td>Superficial comparison table lacking optical depth.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Oral Presentation &amp; Viva Voce (3 Marks)</strong></td>\n                            <td>Articulate, confident delivery; accurate answers to viva questions on SEM electron interactions and telescope mirrors.</td>\n                            <td>Good presentation; minor hesitation on de Broglie formulas.</td>\n                            <td>Unable to answer basic questions regarding microscope resolution limits.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary physical reason optical microscopes cannot resolve individual virus particles (~20 nm)?",
          "options": [
            "Viruses move too fast",
            "The wavelength of visible light (~500 nm) is over 25 times larger than the virus, so diffraction limits optical resolution to ~200 nm",
            "Glass lenses absorb viruses",
            "Viruses have zero mass"
          ],
          "correctIndex": 1,
          "explanation": "Because visible light has λ ≈ 500 nm, diffraction prevents far-field optical microscopes from resolving features below ~200 nm."
        },
        {
          "type": "multiple-choice",
          "question": "Why must radio telescopes have diameters thousands of times larger than optical telescopes to achieve comparable angular resolution?",
          "options": [
            "Radio waves travel slower",
            "Radio wavelengths (mm to meters) are millions of times longer than visible light, requiring proportionately larger apertures θ = 1.22 λ / D",
            "Radio waves are heavier",
            "Mirrors cannot reflect radio waves"
          ],
          "correctIndex": 1,
          "explanation": "Because θ ∝ λ/D, the vastly longer wavelength of radio signals requires proportionally giant baselines to achieve sharp resolution."
        },
        {
          "type": "multiple-choice",
          "question": "Which payload aboard India's Aditya-L1 spacecraft captures solar coronal imagery using internal occulting disks?",
          "options": [
            "Visible Emission Line Coronagraph (VELC)",
            "Laser Altimeter",
            "Neutron Spectrometer",
            "Infrared Sounder"
          ],
          "correctIndex": 0,
          "explanation": "VELC is the primary payload on Aditya-L1 designed to photograph the faint solar corona by blocking the blinding photospheric disk."
        }
      ]
    },
    "lab-01-laser-wavelength-grating": {
      "id": "lab-01-laser-wavelength-grating",
      "title": "Lab 1: Wavelength of Laser using Diffraction Grating",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "10 min read",
      "lead": "Determine the wavelength of a semiconductor diode or He-Ne laser using a plane transmission diffraction grating under normal incidence.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 1</div>\n                    <div class=\"callout-text\"><strong>Wavelength of Laser using Transmission Diffraction Grating</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To determine the wavelength of the given laser source (He-Ne or Diode Laser) using a plane transmission diffraction grating under normal incidence.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Laser source (He-Ne 632.8 nm or Red Diode 650 nm), Plane transmission diffraction grating (15,000 lines/inch or 2,500 lines/inch), optical stand, white screen, meter scale.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-equals\"></i> Grating Equation at Normal Incidence</div>\n                <div class=\"formula-math-display\">\n                    (a + b) \\sin \\theta_m = m \\lambda \\implies \\lambda = \\frac{(a + b) \\sin \\theta_m}{m}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">(a + b)</span>: Grating element = $2.54 / N\\text{ cm}$ ($N$ = lines per inch)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">m</span>: Order of diffraction spectrum ($m = 1, 2, 3\\dots$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ_m</span>: Diffraction angle, $\\tan \\theta_m = \\frac{x_m}{D} \\implies \\sin \\theta_m \\approx \\frac{x_m}{\\sqrt{x_m^2 + D^2}}$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Distance from grating to screen; $x_m$ = spot distance from central maximum</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"30\" y=\"90\" width=\"70\" height=\"30\" fill=\"#ef4444\" rx=\"4\"/>\n                <text x=\"65\" y=\"110\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <line x1=\"100\" y1=\"105\" x2=\"260\" y2=\"105\" stroke=\"#ef4444\" stroke-width=\"3\" filter=\"drop-shadow(0 0 6px #ef4444)\"/>\n                <line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n                <text x=\"260\" y=\"200\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Grating (a+b)</text>\n                <line x1=\"260\" y1=\"105\" x2=\"680\" y2=\"105\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                <circle cx=\"680\" cy=\"105\" r=\"5\" fill=\"#fbbf24\"/>\n                <text x=\"700\" y=\"110\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">Central (m=0)</text>\n                <line x1=\"260\" y1=\"105\" x2=\"680\" y2=\"45\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                <circle cx=\"680\" cy=\"45\" r=\"4.5\" fill=\"#ef4444\"/>\n                <text x=\"700\" y=\"50\" fill=\"#ef4444\" font-size=\"10\">m = +1</text>\n                <line x1=\"260\" y1=\"105\" x2=\"680\" y2=\"165\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                <circle cx=\"680\" cy=\"165\" r=\"4.5\" fill=\"#ef4444\"/>\n                <text x=\"700\" y=\"170\" fill=\"#ef4444\" font-size=\"10\">m = -1</text>\n                <line x1=\"680\" y1=\"20\" x2=\"680\" y2=\"210\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n                <text x=\"680\" y=\"228\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Screen</text>\n                <line x1=\"260\" y1=\"215\" x2=\"680\" y2=\"215\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                <text x=\"470\" y=\"210\" fill=\"#fbbf24\" font-size=\"11\" text-anchor=\"middle\">Distance D</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 1.1:</strong> Schematic diagram of the experimental apparatus for Wavelength of Laser using Transmission Diffraction Grating.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the laser horizontally on an optical bench and aim the beam normally onto the transmission diffraction grating.</li><li>Ensure that the laser beam hits the ruled surface of the grating at perpendicular normal incidence.</li><li>Position a white observation screen at a measured perpendicular distance D (e.g., 100 cm) from the grating.</li><li>Observe the symmetric horizontal diffraction spots on the screen: central zeroth-order maximum (m = 0), first orders (m = ±1), second orders (m = ±2).</li><li>Measure the distances x_L and x_R from the central bright spot to the left and right spots for each order m using a vernier caliper or millimeter ruler.</li><li>Calculate the mean spot distance x_m = (x_L + x_R) / 2, compute sin θ_m, and calculate the laser wavelength λ.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Order (m)</th><th>Distance D (cm)</th><th>Left Spot x_L (cm)</th><th>Right Spot x_R (cm)</th><th>Mean x_m (cm)</th><th>sin θ_m</th><th>Wavelength λ (nm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>m = 1</td><td>100.0</td><td>15.8</td><td>15.8</td><td>15.8</td><td>0.1561</td><td>632.8</td></tr>\n                        <tr><td>m = 2</td><td>100.0</td><td>32.7</td><td>32.7</td><td>32.7</td><td>0.3108</td><td>631.2</td></tr>\n                        <tr><td>m = 3</td><td>100.0</td><td>52.3</td><td>52.1</td><td>52.2</td><td>0.4628</td><td>633.4</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-square-poll-vertical\"></i> Mean Result</div>\n                <div class=\"formula-math-display\">\n                    \\lambda_{mean} = \\frac{\\lambda_1 + \\lambda_2 + \\lambda_3}{3} \\approx 632.5\\text{ nm} \\quad (\\text{Standard Red He-Ne Laser: } 632.8\\text{ nm})\n                </div>\n            </div>\n            <p><strong>Experimental Result:</strong> The wavelength of the given laser source is determined to be $\\mathbf{\\lambda = (632.5 \\pm 1.2)\\text{ nm}}$, with percentage error $< 0.1\\%$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Never look directly into the laser beam or its specular reflections (Class 2/3R eye hazard).</li><li>The laser beam must strike the grating at strictly normal perpendicular incidence.</li><li>The screen must be strictly parallel to the plane of the diffraction grating.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the difference between diffraction from a grating and refraction through a prism?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A prism disperses light via material refractive index variation (red deviates least, violet most). A grating disperses light via interference of diffracted wavelets from periodic slits, where longer wavelengths deviate more (red deviates most, violet least).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the grating element?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The grating element is the distance between the centers of two adjacent transparent slits: (a + b), where 'a' is slit width and 'b' is opaque line width.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Why are laser diffraction spots so extraordinarily sharp compared to sodium lamp fringes?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because laser light possesses extreme monochromaticity (near-zero spectral linewidth) and high spatial coherence across the grating aperture.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What happens to the spot spacing if the grating is moved closer to the screen?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The linear spot separation x_m shrinks proportionally because x_m = D tan θ_m.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: How many orders of spectra are theoretically observable with a grating?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Since sin θ_m ≤ 1, the maximum observable order is m_max = (a + b) / λ.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In a transmission grating experiment with laser light, which color undergoes the largest angle of diffraction θ in the first order?",
          "options": [
            "Blue light (450 nm)",
            "Green light (532 nm)",
            "Red light (650 nm)",
            "All colors diffract at the same angle"
          ],
          "correctIndex": 2,
          "explanation": "From the grating equation (a + b) sin θ = m λ, sin θ is directly proportional to wavelength λ, so red light diffracts at the largest angle."
        },
        {
          "type": "multiple-choice",
          "question": "A diffraction grating has 2500 lines per inch. What is its grating element (a + b) in cm?",
          "options": [
            "0.001016 cm",
            "0.00254 cm",
            "0.01016 cm",
            "0.000254 cm"
          ],
          "correctIndex": 0,
          "explanation": "(a + b) = 2.54 cm / 2500 lines = 0.001016 cm = 1.016 * 10⁻³ cm = 10.16 µm."
        },
        {
          "type": "multiple-choice",
          "question": "What is the order of the central undeviated spot on the screen?",
          "options": [
            "m = 0",
            "m = 1",
            "m = -1",
            "m = ∞"
          ],
          "correctIndex": 0,
          "explanation": "The central straight-through undiffracted beam has zero optical path difference, corresponding to diffraction order m = 0."
        }
      ]
    },
    "lab-02-refractive-index-hollow-prism": {
      "id": "lab-02-refractive-index-hollow-prism",
      "title": "Lab 2: Refractive Index of Liquid using Hollow Prism",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Measure the refractive index of unknown liquids (water, benzene, ethanol) using a precision spectrometer and optical hollow prism.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 2</div>\n                    <div class=\"callout-text\"><strong>Refractive Index of Liquid using Hollow Prism & Spectrometer</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To determine the refractive index of a liquid (such as distilled water or glycerin) using a hollow glass prism and spectrometer by measuring the angle of the prism (A) and angle of minimum deviation (D).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Spectrometer, Sodium vapor lamp (λ = 589.3 nm), optical hollow glass prism, liquids under test (distilled water, ethanol, or glycerin), reading lens.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Prism Formula for Refractive Index</div>\n                <div class=\"formula-math-display\">\n                    \\mu = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">μ</span>: Refractive index of the liquid</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">A</span>: Angle of the hollow prism ($\\approx 60^\\circ$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Angle of minimum deviation</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Collimator on Left -->\n                <rect x=\"30\" y=\"95\" width=\"100\" height=\"30\" fill=\"#334155\"/>\n                <text x=\"80\" y=\"115\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">Collimator</text>\n                <line x1=\"130\" y1=\"110\" x2=\"320\" y2=\"110\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                <!-- Hollow Prism filled with liquid -->\n                <polygon points=\"380,40 310,180 450,180\" fill=\"rgba(56, 189, 248, 0.25)\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <text x=\"380\" y=\"140\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Liquid (μ)</text>\n                <text x=\"380\" y=\"60\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Angle A</text>\n                <!-- Ray refracted inside prism -->\n                <line x1=\"335\" y1=\"130\" x2=\"425\" y2=\"130\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                <!-- Emergent Ray -->\n                <line x1=\"425\" y1=\"130\" x2=\"620\" y2=\"190\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                <!-- Telescope on Right -->\n                <rect x=\"620\" y=\"175\" width=\"110\" height=\"30\" fill=\"#334155\" transform=\"rotate(17, 620, 175)\"/>\n                <text x=\"670\" y=\"195\" fill=\"#e2e8f0\" font-size=\"10\" text-anchor=\"middle\">Telescope</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 2.1:</strong> Schematic diagram of the experimental apparatus for Refractive Index of Liquid using Hollow Prism & Spectrometer.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Perform the standard preliminary adjustments of the spectrometer (focusing telescope on infinity, leveling spectrometer table).</li><li>Place the empty hollow prism on the prism table with its refracting edge facing the collimator to determine angle A.</li><li>Fill the hollow prism with the liquid under investigation and position it on the turntable to observe the refracted yellow sodium spectral slit.</li><li>Rotate the turntable slowly until the refracted image moves towards a minimum deviation position, halts, and reverses direction.</li><li>Lock the telescope on the crosswires at this exact turning point to record the minimum deviation position (reading R1).</li><li>Remove the prism and align the telescope directly with the collimator slit to record the direct beam reading (reading R0). The difference gives D = |R1 - R0|.</li><li>Calculate μ using the prism formula.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Liquid Sample</th><th>Prism Angle A</th><th>Minimum Deviation D</th><th>(A + D) / 2</th><th>A / 2</th><th>Calculated μ</th><th>Literature μ</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Distilled Water</td><td>60° 02'</td><td>25° 18'</td><td>42° 40'</td><td>30° 01'</td><td>1.334</td><td>1.333</td></tr>\n                        <tr><td>Ethanol</td><td>60° 02'</td><td>28° 42'</td><td>44° 22'</td><td>30° 01'</td><td>1.362</td><td>1.361</td></tr>\n                        <tr><td>Glycerin</td><td>60° 02'</td><td>38° 54'</td><td>49° 28'</td><td>30° 01'</td><td>1.473</td><td>1.472</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Experimental Result:</strong> The refractive index of distilled water at $\\lambda = 589.3\\text{ nm}$ is determined as $\\mathbf{\\mu = 1.334 \\pm 0.002}$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Ensure the outer glass plates of the hollow prism are optically clean and dry.</li><li>The hollow prism must not leak liquid onto the spectrometer turntable.</li><li>Carefully locate the exact reversal station when rotating the prism to measure minimum deviation.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: Why does a hollow glass prism filled with air produce zero deviation?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because the two glass faces act like parallel glass plates; refraction at the two boundaries is equal and opposite.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: Does the thickness of the glass walls of the hollow prism affect the minimum deviation?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> No, because the glass walls have uniform thickness and act as parallel plates, introducing a tiny lateral displacement but zero net angular deviation.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: At minimum deviation, what is the orientation of the refracted ray inside the prism?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The refracted ray inside the prism travels completely parallel to the base of the prism.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: How does refractive index vary with temperature?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> As temperature increases, liquid density decreases, causing refractive index μ to decrease slightly (negative dμ/dT).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Why is sodium light preferred over white light?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Sodium light is monochromatic (D lines at 589.3 nm), producing a single sharp slit image without chromatic dispersion blur.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "At the position of minimum deviation in an equilateral prism (A = 60°), how does the ray travel inside the prism?",
          "options": [
            "Perpendicular to base",
            "Parallel to base",
            "Reflects backward",
            "Along the normal"
          ],
          "correctIndex": 1,
          "explanation": "At minimum deviation, symmetry dictates that the angle of incidence equals angle of emergence (i = e), and the ray travels parallel to the base."
        },
        {
          "type": "multiple-choice",
          "question": "If an equilateral prism (A = 60°) produces a minimum deviation D = 30°, what is its refractive index μ?",
          "options": [
            "1.333",
            "1.414 (√2)",
            "1.500",
            "1.732 (√3)"
          ],
          "correctIndex": 1,
          "explanation": "μ = sin((60 + 30)/2) / sin(60/2) = sin(45°) / sin(30°) = (1/√2) / (1/2) = 2/√2 = √2 ≈ 1.414."
        },
        {
          "type": "multiple-choice",
          "question": "Why do the glass plates of a hollow prism not alter the measured angle of minimum deviation?",
          "options": [
            "Because glass has zero refractive index",
            "The plates have uniform thickness and parallel faces, so the deviation produced entering the glass is canceled on leaving it",
            "Because sodium light destroys glass",
            "Because the liquid dissolves the glass"
          ],
          "correctIndex": 1,
          "explanation": "Parallel-sided glass plates cause zero angular deviation, so only the enclosed liquid geometry determines D."
        }
      ]
    },
    "lab-03-resolving-power-telescope": {
      "id": "lab-03-resolving-power-telescope",
      "title": "Lab 3: Resolving Power of an Astronomical Telescope",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Determine the theoretical and practical resolving limits of an astronomical telescope objective using an adjustable rectangular slit and resolution target.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 3</div>\n                    <div class=\"callout-text\"><strong>Resolving Power of an Astronomical Telescope</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To determine the resolving power of a telescope by measuring the minimum aperture width required to just resolve two closely spaced parallel black vertical lines on a distant illuminated target.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Astronomical telescope with objective micrometer slit attachment, resolution line target, sodium lamp, traveling microscope, meter scale.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Rayleigh Resolving Power Formulas</div>\n                <div class=\"formula-math-display\">\n                    \\text{Theoretical Limit: } \\theta_{th} = \\frac{\\lambda}{a}, \\quad \\text{Practical Limit: } \\theta_{pr} = \\frac{d}{D}\n                </div>\n                <div class=\"formula-math-display\">\n                    \\text{Resolving Power (RP)} = \\frac{1}{\\theta} = \\frac{a}{\\lambda} = \\frac{D}{d}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">λ</span>: Illumination wavelength ($589.3\\text{ nm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">a</span>: Width of rectangular aperture slit on objective just resolving the lines</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">d</span>: Distance between the two lines on target</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Distance between target and telescope objective</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Distant Target -->\n                <rect x=\"40\" y=\"60\" width=\"40\" height=\"120\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n                <line x1=\"55\" y1=\"70\" x2=\"55\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n                <line x1=\"65\" y1=\"70\" x2=\"65\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n                <text x=\"60\" y=\"200\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">Lines (d)</text>\n                <!-- Telescope with Slit on Objective -->\n                <line x1=\"80\" y1=\"120\" x2=\"480\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\"/>\n                <text x=\"280\" y=\"110\" fill=\"#64748b\" font-size=\"11\" text-anchor=\"middle\">Distance D (meters)</text>\n                <!-- Slit Attachment -->\n                <rect x=\"480\" y=\"60\" width=\"12\" height=\"120\" fill=\"#334155\"/>\n                <rect x=\"484\" y=\"105\" width=\"4\" height=\"30\" fill=\"#0f172a\"/>\n                <text x=\"486\" y=\"50\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Slit (a)</text>\n                <!-- Telescope Body -->\n                <rect x=\"495\" y=\"75\" width=\"220\" height=\"90\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <text x=\"605\" y=\"125\" fill=\"#e2e8f0\" font-size=\"12\" text-anchor=\"middle\">Telescope</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 3.1:</strong> Schematic diagram of the experimental apparatus for Resolving Power of an Astronomical Telescope.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the illuminated target with two closely spaced vertical lines at a distance D (3 to 5 meters) from the telescope.</li><li>Focus the telescope until the two lines are sharply visible in the eyepiece.</li><li>Attach the variable micrometer rectangular slit over the telescope objective.</li><li>Starting from a wide slit opening, slowly narrow the slit width 'a' until the two line images blur together and are just barely resolved (Rayleigh criterion).</li><li>Record the micrometer slit reading. Repeat several times to find the average critical slit width 'a'.</li><li>Measure the exact line separation 'd' on the target using a traveling microscope.</li><li>Compute theoretical resolution limit λ/a and practical limit d/D.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Target Distance D (cm)</th><th>Line Spacing d (cm)</th><th>Practical Limit θ_pr = d/D</th><th>Slit Width a (cm)</th><th>Theoretical Limit θ_th = λ/a</th><th>Resolving Power (1/θ)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>400.0</td><td>0.120</td><td>3.00 × 10⁻⁴ rad</td><td>0.198</td><td>2.98 × 10⁻⁴ rad</td><td>3,355 rad⁻¹</td></tr>\n                        <tr><td>450.0</td><td>0.120</td><td>2.67 × 10⁻⁴ rad</td><td>0.222</td><td>2.65 × 10⁻⁴ rad</td><td>3,770 rad⁻¹</td></tr>\n                        <tr><td>500.0</td><td>0.120</td><td>2.40 × 10⁻⁴ rad</td><td>0.246</td><td>2.39 × 10⁻⁴ rad</td><td>4,180 rad⁻¹</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The theoretical and practical resolving limits are found to be in close agreement: $\\mathbf{\\theta_{th} \\approx \\theta_{pr} \\approx 2.7 \\times 10^{-4}\\text{ radians}}$, validating the Rayleigh criterion.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>The slit jaws must be strictly parallel to the vertical lines on the target.</li><li>Backlash error of the micrometer screw must be avoided by rotating in one direction.</li><li>The illumination must remain constant during measurements.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the Rayleigh criterion for resolution of two point sources?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Two point sources are just resolved when the central diffraction maximum of one source coincides with the first diffraction minimum of the other.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: Why does a rectangular slit use λ/a while a circular aperture uses 1.22 λ/D?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Rectangular apertures produce sinc² diffraction patterns where the first zero is at λ/a. Circular apertures produce Bessel Airy disks where the first zero is at 1.22 λ/D.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: How does resolving power depend on objective aperture?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Resolving power is directly proportional to aperture diameter: larger apertures resolve finer angular details.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What is empty magnification in a telescope?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Magnification beyond the resolving limit that enlarges diffraction blur without revealing any new detail.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Why do ground telescopes have a seeing limit of ~1 arcsecond?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Atmospheric temperature and density fluctuations blur star images regardless of telescope aperture size.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the angular resolution limit θ for a rectangular aperture of width 'a' illuminated with wavelength λ?",
          "options": [
            "θ = a / λ",
            "θ = λ / a",
            "θ = 1.22 λ / a",
            "θ = λ² / a"
          ],
          "correctIndex": 1,
          "explanation": "For a rectangular slit of width 'a', the first diffraction zero occurs at an angle θ = λ / a."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the resolving power of a telescope if its aperture diameter is doubled?",
          "options": [
            "It is halved",
            "It doubles",
            "It quadruples",
            "It remains unchanged"
          ],
          "correctIndex": 1,
          "explanation": "Resolving power RP = D / (1.22 λ) is directly proportional to aperture diameter D; doubling D doubles the resolving power."
        },
        {
          "type": "multiple-choice",
          "question": "According to the Rayleigh criterion, what is the dip in intensity at the center of two overlapping just-resolved diffraction peaks?",
          "options": [
            "0%",
            "~19% drop (intensity is ~81% of peak)",
            "50% drop",
            "100% drop"
          ],
          "correctIndex": 1,
          "explanation": "At the Rayleigh limit, the combined intensity between the peaks drops to approximately 0.81 (an ~19% dip), which the human eye can distinguish."
        }
      ]
    },
    "lab-04-resolving-power-grating": {
      "id": "lab-04-resolving-power-grating",
      "title": "Lab 4: Resolving Power of a Transmission Grating",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Determine the resolving power of a diffraction grating by resolving the famous sodium yellow doublet lines (D1 at 589.6 nm and D2 at 589.0 nm).",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 4</div>\n                    <div class=\"callout-text\"><strong>Resolving Power of a Plane Transmission Diffraction Grating</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To determine the resolving power of a plane transmission diffraction grating by finding the minimum exposed grating width required to just resolve the Sodium doublet lines D1 and D2.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Spectrometer, Sodium vapor lamp, plane transmission grating with variable bilateral slit attachment, reading lens.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Resolving Power of Grating Formula</div>\n                <div class=\"formula-math-display\">\n                    RP = \\frac{\\lambda}{\\Delta\\lambda} = m \\cdot N_{eff}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">λ</span>: Mean wavelength of Sodium doublet = $589.3\\text{ nm}$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Δλ</span>: Separation of doublet ($589.59 - 589.00 = 0.59\\text{ nm} \\approx 6\\text{ \\AA}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">m</span>: Order of spectrum</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">N_eff</span>: Number of lines exposed to beam = $w \\cdot N_0$ ($w$ = slit width, $N_0$ = lines/cm)</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Collimator -->\n                <rect x=\"40\" y=\"95\" width=\"120\" height=\"30\" fill=\"#334155\"/>\n                <line x1=\"160\" y1=\"110\" x2=\"330\" y2=\"110\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                <!-- Grating with variable bilateral slit -->\n                <rect x=\"330\" y=\"40\" width=\"12\" height=\"140\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <text x=\"336\" y=\"200\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Bilateral Slit (w)</text>\n                <!-- Diffracted Sodium Doublet Lines -->\n                <line x1=\"342\" y1=\"110\" x2=\"600\" y2=\"60\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                <line x1=\"342\" y1=\"110\" x2=\"600\" y2=\"65\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n                <text x=\"640\" y=\"55\" fill=\"#fbbf24\" font-size=\"10\">D₂ (589.0 nm)</text>\n                <text x=\"640\" y=\"75\" fill=\"#f59e0b\" font-size=\"10\">D₁ (589.6 nm)</text>\n                <!-- Telescope -->\n                <rect x=\"520\" y=\"45\" width=\"100\" height=\"28\" fill=\"#334155\" transform=\"rotate(-12, 520, 45)\"/>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 4.1:</strong> Schematic diagram of the experimental apparatus for Resolving Power of a Plane Transmission Diffraction Grating.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Adjust the spectrometer for parallel light and align the transmission grating for normal incidence.</li><li>Observe the first-order (m = 1) and second-order (m = 2) spectra of the sodium lamp. Notice the clearly separated D1 and D2 yellow lines.</li><li>Attach a variable micrometer bilateral slit over the front face of the grating.</li><li>Gradually reduce the slit width 'w' to decrease the number of exposed lines until the two distinct D1 and D2 lines merge into a single broad line.</li><li>Slowly open the slit until the two lines are just barely resolved again (a distinct central dip in intensity appears).</li><li>Record the micrometer slit reading 'w'.</li><li>Calculate N_eff = w * N_0 and compute theoretical resolving power m * N_eff, comparing it to λ / Δλ ≈ 1000.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Spectrum Order (m)</th><th>Slit Width w (cm)</th><th>Lines/cm (N_0)</th><th>N_eff = w · N_0</th><th>Theoretical RP (m · N_eff)</th><th>Required RP (λ / Δλ)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Order m = 1</td><td>0.168</td><td>5,905</td><td>992</td><td>992</td><td>999</td></tr>\n                        <tr><td>Order m = 2</td><td>0.085</td><td>5,905</td><td>502</td><td>1,004</td><td>999</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The minimum number of lines required to resolve the sodium doublet in order 1 is $\\mathbf{N_{eff} \\approx 992}$, confirming $\\lambda / \\Delta\\lambda = 589.3 / 0.59 \\approx 999$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>The slit jaws of the bilateral slit must be strictly parallel to the grating rulings.</li><li>Measurements should be made in second order where angular dispersion is twice as large.</li><li>Avoid touching the optical ruled face of the grating with fingers.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the chromatic resolving power of a grating?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The ratio of the mean wavelength to the smallest difference in wavelength that can just be separated: RP = λ / Δλ.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the formula for the resolving power of a grating in order m?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> RP = m * N, where 'm' is the spectral order and 'N' is the total number of illuminated rulings.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: How many lines of a grating must be exposed to just resolve the Sodium doublet in the first order?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Since λ = 589.3 nm and Δλ = 0.59 nm, N = (589.3 / 0.59) / 1 ≈ 999 lines (~1000 lines).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: How many lines are needed in the second order (m = 2)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> In second order, only N = 1000 / 2 = 500 lines are required.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: What is the difference between dispersive power and resolving power of a grating?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Dispersive power (dθ/dλ = m / ((a+b) cos θ)) measures the angular separation between wavelengths. Resolving power (λ/Δλ = m N) measures the ability to see them as distinct, separate lines.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the theoretical minimum number of grating rulings N needed to resolve the Sodium doublet (589.0 nm and 589.6 nm) in the first order (m = 1)?",
          "options": [
            "100 lines",
            "500 lines",
            "1,000 lines",
            "10,000 lines"
          ],
          "correctIndex": 2,
          "explanation": "RP = λ / Δλ = 589.3 / 0.59 ≈ 999 lines in first order (m = 1)."
        },
        {
          "type": "multiple-choice",
          "question": "In what order of spectrum does a grating achieve twice the resolving power of the first order?",
          "options": [
            "Order m = 0",
            "Order m = 2",
            "Order m = 1/2",
            "It is always constant"
          ],
          "correctIndex": 1,
          "explanation": "Because RP = m * N, doubling the order from m = 1 to m = 2 doubles the resolving power."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the resolving power of a grating if the total width of the illuminated grating surface is reduced?",
          "options": [
            "It increases",
            "It decreases proportionally because fewer rulings N are illuminated",
            "It stays constant",
            "Doublet spacing increases"
          ],
          "correctIndex": 1,
          "explanation": "Fewer illuminated lines N reduces RP = m * N, broadening the diffraction peaks and causing close lines to merge."
        }
      ]
    },
    "lab-05-spectrometer-id-curve": {
      "id": "lab-05-spectrometer-id-curve",
      "title": "Lab 5: Spectrometer: Determination of i-d Curve",
      "category": "cat-practicals-part1",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Investigate the variation of angle of deviation d with angle of incidence i using a glass prism and spectrometer. Plot the characteristic i-d curve and locate minimum deviation D.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 5</div>\n                    <div class=\"callout-text\"><strong>Spectrometer: Determination of i-d Curve (Angle of Incidence vs. Deviation)</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To plot the graph between angle of incidence (i) and angle of deviation (d) for a glass prism using a spectrometer, and hence determine the angle of minimum deviation (D) and refractive index (μ) of the glass.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Spectrometer, Sodium vapor lamp, solid glass prism, reading lens.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-chart-line\"></i> Deviation Relation &amp; Minimum Condition</div>\n                <div class=\"formula-math-display\">\n                    i + e = A + d \\implies \\text{At minimum deviation: } i = e, \\quad r_1 = r_2 = \\frac{A}{2}, \\quad d = D\n                </div>\n                <div class=\"formula-math-display\">\n                    \\mu = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Axes on Left -->\n                <line x1=\"80\" y1=\"200\" x2=\"360\" y2=\"200\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"220\" y=\"225\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Angle of Incidence i (degrees)</text>\n                <line x1=\"80\" y1=\"200\" x2=\"80\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"35\" y=\"45\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\">Deviation d</text>\n                <!-- Characteristic Parabolic i-d Curve -->\n                <path d=\"M 100 60 Q 180 185 240 185 Q 290 185 340 90\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"3\"/>\n                <!-- Minimum Deviation Vertex D -->\n                <circle cx=\"230\" cy=\"185\" r=\"5\" fill=\"#10b981\"/>\n                <line x1=\"80\" y1=\"185\" x2=\"230\" y2=\"185\" stroke=\"#10b981\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n                <text x=\"60\" y=\"190\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">D</text>\n                <line x1=\"230\" y1=\"185\" x2=\"230\" y2=\"200\" stroke=\"#10b981\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n                <text x=\"230\" y=\"215\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">i = e</text>\n                <!-- Prism Ray Diagram on Right -->\n                <polygon points=\"580,40 500,180 660,180\" fill=\"rgba(56, 189, 248, 0.18)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <polyline points=\"430,135 535,135 625,135 730,195\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\"/>\n                <line x1=\"430\" y1=\"135\" x2=\"700\" y2=\"135\" stroke=\"#64748b\" stroke-dasharray=\"3,3\"/>\n                <text x=\"690\" y=\"150\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">d = D</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 5.1:</strong> Schematic diagram of the experimental apparatus for Spectrometer: Determination of i-d Curve (Angle of Incidence vs. Deviation).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Adjust the spectrometer and measure prism angle A.</li><li>Mount the prism on the turntable and set the angle of incidence i to a known value (e.g., 35°).</li><li>Locate the refracted emergent slit with the telescope and record reading R1. Measure direct reading R0 to calculate deviation d = |R1 - R0|.</li><li>Increase angle of incidence i in steps of 5° (35°, 40°, 45°, 50°, 55°, 60°, 65°) and record the corresponding deviation d.</li><li>Plot d versus i. Observe that deviation initially decreases, passes through a distinct minimum D, and then increases monotonically.</li><li>Read the minimum deviation D from the vertex of the curve and calculate μ.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Angle of Incidence i (deg)</th><th>Telescope Direct Reading R0</th><th>Telescope Emergent Reading R1</th><th>Deviation d = |R1 - R0|</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>35°</td><td>180° 00'</td><td>232° 15'</td><td>52° 15'</td></tr>\n                        <tr><td>40°</td><td>180° 00'</td><td>224° 30'</td><td>44° 30'</td></tr>\n                        <tr><td>45°</td><td>180° 00'</td><td>220° 12'</td><td>40° 12'</td></tr>\n                        <tr><td>49° (Min)</td><td>180° 00'</td><td>218° 36'</td><td>38° 36' (D)</td></tr>\n                        <tr><td>55°</td><td>180° 00'</td><td>220° 20'</td><td>40° 20'</td></tr>\n                        <tr><td>60°</td><td>180° 00'</td><td>224° 05'</td><td>44° 05'</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> From the $i-d$ curve, the angle of minimum deviation is $\\mathbf{D = 38^\\circ 36'}$, giving glass refractive index $\\mathbf{\\mu = 1.516}$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Spectrometer telescope and collimator must be leveled optically.</li><li>Rotate the turntable slowly to ensure the turning point D is not missed.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the shape of the i-d curve?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> It is an asymmetric parabolic curve exhibiting a unique minimum at i = e.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: Why does deviation decrease and then increase as angle of incidence increases?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Deviation depends on both surface refractions: as 'i' increases, first surface deviation decreases while second surface deviation increases; the sum reaches an absolute minimum when deviations are balanced.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: How many angles of incidence produce the same deviation d?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> For any deviation d > D, there are exactly two angles of incidence (i and e) that yield the same deviation, due to the reversibility of light.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: How many angles produce minimum deviation D?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Only one unique angle, where i = e.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: How does prism angle A affect minimum deviation?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Larger prism angles A produce larger minimum deviations D.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "At the position of minimum deviation in a prism, what is the relationship between the angle of incidence i and angle of emergence e?",
          "options": [
            "i > e",
            "i < e",
            "i = e",
            "i + e = 90°"
          ],
          "correctIndex": 2,
          "explanation": "At minimum deviation, the ray passes symmetrically through the prism, meaning angle of incidence equals angle of emergence: i = e."
        },
        {
          "type": "multiple-choice",
          "question": "For any deviation value d strictly greater than minimum deviation D, how many angles of incidence yield that same deviation?",
          "options": [
            "One",
            "Two (i and e, by reversibility of light)",
            "Three",
            "Infinitely many"
          ],
          "correctIndex": 1,
          "explanation": "By the principle of reversibility of light, reversing the emergent ray at angle e traces back at angle i, producing identical deviation."
        },
        {
          "type": "multiple-choice",
          "question": "What is the relation connecting incidence i, emergence e, prism angle A, and deviation d?",
          "options": [
            "i - e = A + d",
            "i + e = A + d",
            "i + d = A + e",
            "i * e = A * d"
          ],
          "correctIndex": 1,
          "explanation": "Geometrical prism analysis proves that i + e = A + d."
        }
      ]
    },
    "lab-06-laser-reflection-grating-scale": {
      "id": "lab-06-laser-reflection-grating-scale",
      "title": "Lab 6: Laser Reflection Grating using Steel / Metal Scale",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Turn an ordinary steel ruler into a precision reflection diffraction grating. Determine laser wavelength from grazing-incidence diffraction fringes.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 6</div>\n                    <div class=\"callout-text\"><strong>Laser Reflection Grating using Steel / Metal Scale</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To observe grazing-incidence reflection diffraction from the periodic millimeter markings of a steel scale and determine the wavelength of a laser source.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>He-Ne or Red Diode Laser, stainless steel millimeter scale (d = 0.5 mm or 1.0 mm divisions), optical mount, vertical projection screen, meter ruler.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-ruler\"></i> Grazing-Incidence Reflection Grating Formula</div>\n                <div class=\"formula-math-display\">\n                    d (\\cos \\alpha_n - \\cos \\alpha_0) = n \\lambda \\implies d \\left( \\frac{\\alpha_n^2 - \\alpha_0^2}{2} \\right) \\approx n \\lambda\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">d</span>: Periodic ruling spacing of metal scale ($0.5\\text{ mm}$ or $1.0\\text{ mm}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α_0</span>: Grazing angle of incidence, $\\alpha_0 \\approx \\frac{y_0}{L}$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">α_n</span>: Grazing angle of n-th reflected diffraction order, $\\alpha_n \\approx \\frac{y_n}{L}$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">L</span>: Distance from point of incidence on scale to vertical screen</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser on Left -->\n                <rect x=\"30\" y=\"110\" width=\"60\" height=\"25\" fill=\"#ef4444\" rx=\"3\"/>\n                <text x=\"60\" y=\"126\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <!-- Steel Scale -->\n                <rect x=\"180\" y=\"130\" width=\"220\" height=\"12\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n                <line x1=\"200\" y1=\"130\" x2=\"200\" y2=\"136\" stroke=\"#0f172a\"/>\n                <line x1=\"220\" y1=\"130\" x2=\"220\" y2=\"136\" stroke=\"#0f172a\"/>\n                <line x1=\"240\" y1=\"130\" x2=\"240\" y2=\"136\" stroke=\"#0f172a\"/>\n                <line x1=\"260\" y1=\"130\" x2=\"260\" y2=\"136\" stroke=\"#0f172a\"/>\n                <text x=\"290\" y=\"155\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Steel Ruler (1 mm lines)</text>\n                <!-- Grazing Ray -->\n                <line x1=\"90\" y1=\"122\" x2=\"280\" y2=\"130\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                <!-- Reflected diffraction spots -->\n                <line x1=\"280\" y1=\"130\" x2=\"680\" y2=\"138\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <circle cx=\"680\" cy=\"138\" r=\"4.5\" fill=\"#fbbf24\"/>\n                <text x=\"700\" y=\"142\" fill=\"#fbbf24\" font-size=\"10\">Specular (n=0)</text>\n                <line x1=\"280\" y1=\"130\" x2=\"680\" y2=\"90\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <circle cx=\"680\" cy=\"90\" r=\"4\" fill=\"#ef4444\"/>\n                <text x=\"700\" y=\"94\" fill=\"#ef4444\" font-size=\"10\">n = 1</text>\n                <line x1=\"280\" y1=\"130\" x2=\"680\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <circle cx=\"680\" cy=\"35\" r=\"4\" fill=\"#ef4444\"/>\n                <text x=\"700\" y=\"38\" fill=\"#ef4444\" font-size=\"10\">n = 2</text>\n                <!-- Screen -->\n                <line x1=\"680\" y1=\"10\" x2=\"680\" y2=\"210\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n                <text x=\"680\" y=\"225\" fill=\"#e2e8f0\" font-size=\"11\" text-anchor=\"middle\">Screen</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 6.1:</strong> Schematic diagram of the experimental apparatus for Laser Reflection Grating using Steel / Metal Scale.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the steel ruler horizontally on an adjustable stand.</li><li>Direct the laser beam to graze the edge of the scale at a very shallow grazing angle α_0 (< 1° to 2°).</li><li>Observe the vertical array of diffraction spots projected onto a distant wall or screen.</li><li>Identify the direct unreflected beam (y = 0), the specularly reflected zero-order spot (y_0), and higher-order diffraction spots (y_1, y_2, y_3).</li><li>Measure distance L from the ruler incidence point to the screen and vertical spot heights y_n.</li><li>Calculate laser wavelength λ using the small-angle grazing formula.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Distance L (cm)</th><th>Direct y_dir</th><th>Specular y_0 (cm)</th><th>Order n=1 (y_1 cm)</th><th>Order n=2 (y_2 cm)</th><th>Calculated λ (nm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>320.0</td><td>0.0</td><td>2.4</td><td>4.2</td><td>5.5</td><td>635.4</td></tr>\n                        <tr><td>350.0</td><td>0.0</td><td>2.6</td><td>4.6</td><td>6.0</td><td>632.1</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> Using a steel scale ruling of $d = 1.0\\text{ mm}$, the laser wavelength is calculated as $\\mathbf{\\lambda = (633.7 \\pm 3.5)\\text{ nm}}$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>The grazing angle must be kept extremely small (< 2°) so the apparent ruling spacing d sin α_0 is comparable to optical wavelengths.</li><li>Avoid touching the laser beam.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: How can a coarse steel scale with 1 mm markings act as an optical diffraction grating?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> At grazing incidence (α_0 ~ 1°), the effective projected ruling spacing becomes d * sin(α_0) ~ 1 mm * 0.017 ~ 17 µm, which is small enough to generate visible optical diffraction!</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the difference between transmission and reflection gratings?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A transmission grating passes light through transparent slits; a reflection grating reflects light off periodic reflective grooves.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Why are the diffraction spots spaced non-linearly on the screen?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because the diffraction angle relation involves the difference of cosines (α_n² - α_0²), causing spot spacing to compress at higher orders.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: Who first demonstrated this experiment?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Arthur Schawlow (co-inventor of the laser, Nobel Laureate 1981) popularized this experiment in 1965 as an elegant classroom demonstration.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: What happens if a plastic ruler is used instead of steel?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Plastic rulers have poor specular surface reflectivity and ragged printed lines, resulting in dim, diffuse scattering instead of sharp spots.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why must the laser beam graze the steel scale at an extremely small angle (α₀ ≈ 1°)?",
          "options": [
            "To prevent the scale from melting",
            "To reduce the apparent projected ruling spacing d · sin(α₀) to optical micro-scale dimensions comparable to light wavelengths",
            "To polarize the beam",
            "To magnify the beam diameter"
          ],
          "correctIndex": 1,
          "explanation": "Grazing incidence projects the coarse 1 mm millimeter rulings into effective micron-scale optical apertures."
        },
        {
          "type": "multiple-choice",
          "question": "What kind of grating is a steel millimeter scale when used in this setup?",
          "options": [
            "Transmission grating",
            "Reflection grating",
            "Phase hologram",
            "Concave Rowland grating"
          ],
          "correctIndex": 1,
          "explanation": "Light reflects off the metallic polished face between etched millimeter groove marks, operating as a plane reflection grating."
        },
        {
          "type": "multiple-choice",
          "question": "Which spot corresponds to pure specular reflection (angle of incidence = angle of reflection)?",
          "options": [
            "The direct unscattered beam",
            "The zero-order spot (n = 0)",
            "The first order spot (n = 1)",
            "The highest order spot"
          ],
          "correctIndex": 1,
          "explanation": "The n = 0 order represents standard law-of-reflection specular reflection where α_n = α_0."
        }
      ]
    },
    "lab-07-fiber-numerical-aperture": {
      "id": "lab-07-fiber-numerical-aperture",
      "title": "Lab 7: Optical Fiber: Numerical Aperture & Acceptance Angle",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Determine the Numerical Aperture (NA) and light-gathering acceptance angle θ_a of a step-index multimode plastic or glass optical fiber.",
      "toolType": "fiber-na",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 7</div>\n                    <div class=\"callout-text\"><strong>Optical Fiber: Determination of Numerical Aperture (NA)</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To measure the Numerical Aperture (NA) and acceptance angle (θ_a) of a given multimode optical fiber by measuring the divergence diameter of the emerging circular light cone on a screen.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Optical fiber trainer kit, Semiconductor laser or LED source (650 nm), step-index multimode fiber patchcord (PMMA or silica), screen with concentric circles or millimeter grid, traveling mount.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Fiber Cone Geometry Formula</div>\n                <div class=\"formula-math-display\">\n                    NA = \\sin \\theta_a = \\frac{W / 2}{\\sqrt{(W / 2)^2 + D^2}} = \\frac{W}{\\sqrt{W^2 + 4D^2}}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">W</span>: Diameter of the illuminated circular spot on the screen</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Distance between fiber output tip and the screen</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ_a</span>: Semi-acceptance angle of the fiber, $\\theta_a = \\arcsin(NA)$</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Fiber Cable -->\n                <rect x=\"40\" y=\"110\" width=\"220\" height=\"20\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <line x1=\"40\" y1=\"120\" x2=\"260\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"4\" filter=\"drop-shadow(0 0 6px #ef4444)\"/>\n                <text x=\"140\" y=\"100\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Optical Fiber Cable</text>\n                <!-- Fiber Output Tip -->\n                <circle cx=\"260\" cy=\"120\" r=\"10\" fill=\"#475569\"/>\n                <!-- Diverging Emerging Cone of Light -->\n                <polygon points=\"260,120 620,40 620,200\" fill=\"rgba(239, 68, 68, 0.15)\"/>\n                <line x1=\"260\" y1=\"120\" x2=\"620\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"260\" y1=\"120\" x2=\"620\" y2=\"200\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"260\" y1=\"120\" x2=\"650\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\"/>\n                <!-- Spot Diameter W -->\n                <line x1=\"620\" y1=\"40\" x2=\"620\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"3\"/>\n                <text x=\"645\" y=\"125\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Spot Diameter W</text>\n                <!-- Distance D -->\n                <line x1=\"260\" y1=\"215\" x2=\"620\" y2=\"215\" stroke=\"#10b981\" stroke-width=\"1.8\"/>\n                <text x=\"440\" y=\"230\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Distance D</text>\n                <!-- Angle arc theta_a -->\n                <path d=\"M 320 108 A 60 60 0 0 1 320 120\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n                <text x=\"330\" y=\"112\" fill=\"#fbbf24\" font-size=\"10\">θ_a</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 7.1:</strong> Schematic diagram of the experimental apparatus for Optical Fiber: Determination of Numerical Aperture (NA).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Connect one end of the optical fiber to the laser diode transmitter output port.</li><li>Mount the opposite cleave output end of the fiber on a movable translation stage perpendicular to the measurement screen.</li><li>Switch on the laser source and observe the red circular patch of light projected onto the screen.</li><li>Measure the diameter W of the circular spot at distance D = 10 mm using a ruler or vernier scale.</li><li>Increase distance D in steps of 5 mm (15, 20, 25, 30 mm) and record the corresponding spot diameter W.</li><li>Calculate NA for each distance and determine the mean value and acceptance angle θ_a.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Distance D (mm)</th><th>Spot Diameter W (mm)</th><th>Radius R = W/2 (mm)</th><th>NA = R / √(R² + D²)</th><th>Acceptance Angle θ_a</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>10.0</td><td>8.2</td><td>4.1</td><td>0.379</td><td>22.3°</td></tr>\n                        <tr><td>15.0</td><td>12.4</td><td>6.2</td><td>0.382</td><td>22.5°</td></tr>\n                        <tr><td>20.0</td><td>16.5</td><td>8.25</td><td>0.381</td><td>22.4°</td></tr>\n                        <tr><td>25.0</td><td>20.6</td><td>10.3</td><td>0.380</td><td>22.3°</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The Numerical Aperture of the multimode fiber is determined as $\\mathbf{NA = 0.381 \\pm 0.002}$, corresponding to an acceptance angle of $\\mathbf{\\theta_a = 22.4^\\circ}$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>The fiber end face must be cleaved cleanly perpendicular to its axis without chips or dust.</li><li>Ensure the spot boundary is measured accurately at the half-intensity threshold.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the physical meaning of Numerical Aperture (NA)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> NA is a dimensionless figure of merit measuring the light-gathering capacity of the fiber: NA = sin θ_a = √(n₁² - n₂²).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: Does fiber length affect the Numerical Aperture?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> No, NA is an intrinsic material property determined solely by core and cladding refractive indices (n₁ and n₂).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Why do plastic optical fibers (POF) have much higher NA (~0.5) than silica fibers (~0.2)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> POFs have a large refractive index difference Δ between core (PMMA, n₁=1.49) and fluoropolymer cladding (n₂=1.40).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What is the acceptance cone?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The 3D conical solid angle within which all incident light is trapped and guided via total internal reflection.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Why is high NA advantageous for LED sources but disadvantageous for high-speed telecom?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> High NA captures more light from wide-angle LEDs, but causes higher modal dispersion due to steeper zig-zag ray angles.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the formula for the Numerical Aperture (NA) of an optical fiber in terms of core index n₁ and cladding index n₂?",
          "options": [
            "NA = n₁ - n₂",
            "NA = √(n₁² - n₂²)",
            "NA = n₁ / n₂",
            "NA = (n₁ + n₂) / 2"
          ],
          "correctIndex": 1,
          "explanation": "From Snell's law at the entrance face, NA = √(n₁² - n₂²)."
        },
        {
          "type": "multiple-choice",
          "question": "If the spot diameter W = 15 mm at distance D = 20 mm, what is the Numerical Aperture?",
          "options": [
            "0.351",
            "0.500",
            "0.600",
            "0.750"
          ],
          "correctIndex": 0,
          "explanation": "R = W / 2 = 7.5 mm. NA = R / √(R² + D²) = 7.5 / √(7.5² + 20²) = 7.5 / √(56.25 + 400) = 7.5 / 21.36 ≈ 0.351."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the acceptance angle θ_a if the cladding refractive index n₂ is decreased while core n₁ is held constant?",
          "options": [
            "Acceptance angle decreases",
            "Acceptance angle increases",
            "Acceptance angle becomes zero",
            "Fiber stops guiding"
          ],
          "correctIndex": 1,
          "explanation": "Lowering n₂ increases the index difference √(n₁² - n₂²), thereby increasing both NA and acceptance angle θ_a."
        }
      ]
    },
    "lab-08-rabi-oscillations-simulation": {
      "id": "lab-08-rabi-oscillations-simulation",
      "title": "Lab 8: Rabi Oscillations: Quantum Two-Level System Simulation",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Simulate resonant quantum population transfer in a two-level atom driven by coherent laser radiation using Python or GNU Octave.",
      "toolType": "laser-cavity",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 8</div>\n                    <div class=\"callout-text\"><strong>Rabi Oscillations in a Two-Level Atomic System (Python / Octave)</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To write and execute a Python / Octave computational simulation modeling the time evolution of state populations in a two-level atom driven by a coherent monochromatic laser field.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Computer workstation with Python 3 (NumPy, SciPy, Matplotlib) or GNU Octave.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-atom\"></i> Time-Dependent Schrödinger Equation &amp; Rabi Frequency</div>\n                <div class=\"formula-math-display\">\n                    P_2(t) = \\frac{\\Omega^2}{\\Omega_R^2} \\sin^2\\left(\\frac{\\Omega_R t}{2}\\right), \\quad P_1(t) = 1 - P_2(t)\n                </div>\n                <div class=\"formula-math-display\">\n                    \\Omega_R = \\sqrt{\\Omega^2 + \\Delta^2}, \\quad \\Omega = \\frac{\\mu_{12} E_0}{\\hbar}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Ω</span>: On-resonance Rabi frequency (dipole coupling strength)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Δ</span>: Laser detuning frequency ($\\omega - \\omega_0$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">Ω_R</span>: Generalized Rabi frequency</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P_1(t), P_2(t)</span>: Probability of finding atom in ground and excited states</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Axes -->\n                <line x1=\"60\" y1=\"200\" x2=\"740\" y2=\"200\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"400\" y=\"225\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Time t (in units of π / Ω)</text>\n                <line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"25\" y=\"45\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\">P(t)</text>\n                <!-- 1.0 probability line -->\n                <line x1=\"55\" y1=\"50\" x2=\"740\" y2=\"50\" stroke=\"#334155\" stroke-dasharray=\"3,3\"/>\n                <text x=\"35\" y=\"55\" fill=\"#94a3b8\" font-size=\"10\">1.0</text>\n                <!-- 0.0 line -->\n                <text x=\"35\" y=\"205\" fill=\"#94a3b8\" font-size=\"10\">0.0</text>\n                <!-- P2(t) Excited State Sine-Squared Curve (Red) -->\n                <path d=\"M 60 200 Q 145 50 230 200 Q 315 50 400 200 Q 485 50 570 200 Q 655 50 740 200\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                <text x=\"230\" y=\"38\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">P₂(t) Excited State Population</text>\n                <!-- P1(t) Ground State Cosine-Squared Curve (Cyan) -->\n                <path d=\"M 60 50 Q 145 200 230 50 Q 315 200 400 50 Q 485 200 570 50 Q 655 200 740 50\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n                <text x=\"570\" y=\"38\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">P₁(t) Ground State</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 8.1:</strong> Schematic diagram of the experimental apparatus for Rabi Oscillations in a Two-Level Atomic System (Python / Octave).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Formulate the Hamiltonian matrix for a two-level atom in a dipole interaction: H = [[-ħΔ/2, ħΩ/2], [ħΩ/2, ħΔ/2]].</li><li>Implement the analytical solution P2(t) = (Ω / Ω_R)² sin²(Ω_R t / 2) in Python using NumPy.</li><li>Simulate on-resonance excitation (Δ = 0) where population oscillates between 0 and 100% with period T = 2π / Ω.</li><li>Simulate off-resonance conditions (Δ = 0.5Ω, 1.0Ω, 2.0Ω) and observe that the oscillation frequency increases while the maximum excitation probability drops: P_max = Ω² / (Ω² + Δ²).</li><li>Plot population curves P1(t) and P2(t) versus time.</li><li>Investigate π-pulse (complete inversion) and π/2-pulse (equal superposition state) concepts.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Detuning Δ / Ω</th><th>Effective Frequency Ω_R / Ω</th><th>Maximum Population P_max</th><th>Period T (in π/Ω)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0.0 (Resonant)</td><td>1.00</td><td>1.000 (100% inversion)</td><td>2.00</td></tr>\n                        <tr><td>0.5</td><td>1.12</td><td>0.800 (80%)</td><td>1.79</td></tr>\n                        <tr><td>1.0</td><td>1.41</td><td>0.500 (50%)</td><td>1.41</td></tr>\n                        <tr><td>2.0</td><td>2.24</td><td>0.200 (20%)</td><td>0.89</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-code\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Complete Python Script</div>\n                    <div class=\"callout-text\">\n                        <pre><code>import numpy as np\nimport matplotlib.pyplot as plt\n\nomega = 1.0  # Rabi frequency (rad/s)\nt = np.linspace(0, 4 * np.pi, 500)\n\nfor delta in [0.0, 0.5, 1.0, 2.0]:\n    omega_R = np.sqrt(omega**2 + delta**2)\n    P2 = (omega / omega_R)**2 * np.sin(omega_R * t / 2)**2\n    plt.plot(t, P2, label=f\"Δ = {delta}Ω\")\n\nplt.xlabel(\"Time t\")\nplt.ylabel(\"Excited State Population P₂(t)\")\nplt.title(\"Rabi Oscillations in a Two-Level Atom\")\nplt.legend()\nplt.grid(True)\nplt.show()</code></pre>\n                    </div>\n                </div>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Ensure time steps dt in numerical integration satisfy dt << 1 / Ω_R to avoid numerical aliasing.</li><li>Total probability P1(t) + P2(t) = 1 must be conserved at all times.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is a Rabi oscillation?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The periodic cyclical flopping of atomic population between two quantum states driven by a coherent resonant electromagnetic field.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is a π-pulse?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A laser pulse whose duration t satisfies Ω * t = π, transferring 100% of the population from ground state to excited state.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: What is a π/2-pulse?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A pulse of duration t = π / (2Ω) creating an exact 50:50 coherent quantum superposition state (|1⟩ + |2⟩) / √2, fundamental to quantum computing and atomic clocks.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What happens to the Rabi oscillation amplitude when the laser is detuned from resonance (Δ ≠ 0)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The maximum population transfer decreases to Ω² / (Ω² + Δ²), while the oscillation frequency accelerates to Ω_R = √(Ω² + Δ²).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Who first discovered Rabi oscillations?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Isidor Isaac Rabi in 1937, for which he received the 1944 Nobel Prize in Physics.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What pulse area (Ω · t) transfers 100% of atoms from the ground state into the excited state on resonance?",
          "options": [
            "π/2 pulse",
            "π pulse",
            "2π pulse",
            "4π pulse"
          ],
          "correctIndex": 1,
          "explanation": "A π-pulse has Ω t = π, giving sin²(π/2) = 1, achieving complete population inversion."
        },
        {
          "type": "multiple-choice",
          "question": "What is the maximum excited state population P_max when laser detuning equals the Rabi frequency (Δ = Ω)?",
          "options": [
            "100%",
            "75%",
            "50%",
            "25%"
          ],
          "correctIndex": 2,
          "explanation": "P_max = Ω² / (Ω² + Δ²) = Ω² / (Ω² + Ω²) = 1/2 = 50%."
        },
        {
          "type": "multiple-choice",
          "question": "Why does a 2π-pulse return the atomic system back to its original ground state?",
          "options": [
            "Because sin²(2π / 2) = sin²(π) = 0, completing one full cycle of oscillation",
            "Because it burns the atom",
            "Because photons are reflected",
            "Because detuning vanishes"
          ],
          "correctIndex": 0,
          "explanation": "A 2π-pulse completes one full cycle of population flopping (0 -> 1 -> 0), returning atoms to their ground state."
        }
      ]
    },
    "lab-09-two-lens-power-pairs-plot": {
      "id": "lab-09-two-lens-power-pairs-plot",
      "title": "Lab 9: Two Lens System Power Pairs Plot (Python/Octave)",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Plot equivalent power curves P(d) and power pairs (P1, P2) in Python/Octave to design two-lens combinations meeting target focal lengths.",
      "toolType": "matrix-bench",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 9</div>\n                    <div class=\"callout-text\"><strong>Two Lens System Power Pairs Plot & Focal Length Analysis</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To computationally model and plot the variation of equivalent optical power P as a function of separation distance d and generate power pair plots (P1, P2) for specified target system powers using Python / Octave.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Computer terminal running Python 3 or GNU Octave.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Two-Lens Power Coupling Equation</div>\n                <div class=\"formula-math-display\">\n                    P = P_1 + P_2 - d P_1 P_2 \\implies \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P_1, P_2</span>: Optical powers of lenses in Diopters ($D = 1/f\\text{ in meters}$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">d</span>: Coaxial separation distance in meters</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P</span>: Composite equivalent optical power in Diopters</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"60\" y1=\"200\" x2=\"740\" y2=\"200\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"400\" y=\"225\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Separation Distance d (meters)</text>\n                <line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                <text x=\"30\" y=\"45\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"bold\">Power P (D)</text>\n                <!-- Linear decay curve for positive P1, P2 -->\n                <line x1=\"60\" y1=\"60\" x2=\"550\" y2=\"200\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <circle cx=\"60\" cy=\"60\" r=\"5\" fill=\"#fbbf24\"/>\n                <text x=\"130\" y=\"70\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">P_contact = P₁ + P₂ (d=0)</text>\n                <!-- Zero Power Point (Afocal) -->\n                <circle cx=\"550\" cy=\"200\" r=\"5\" fill=\"#10b981\"/>\n                <text x=\"550\" y=\"185\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Afocal: d = (P₁+P₂)/(P₁P₂)</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 9.1:</strong> Schematic diagram of the experimental apparatus for Two Lens System Power Pairs Plot & Focal Length Analysis.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Define the governing two-lens power equation in Python: P(d) = P1 + P2 - d * P1 * P2.</li><li>Simulate two positive lenses (e.g., P1 = +5 D, P2 = +5 D) and compute P as separation d increases from 0 to 0.4 meters.</li><li>Observe that at d = 0, P = +10 D. At d = (f1 + f2) = 0.4 m, P drops to 0 D (afocal telescopic condition). For d > 0.4 m, P becomes negative!</li><li>Generate a 2D contour mesh of (P1, P2) pairs that satisfy a desired target power P_target for a fixed separation d.</li><li>Plot the family of curves using Matplotlib.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Separation d (cm)</th><th>P₁ (D)</th><th>P₂ (D)</th><th>Equivalent Power P (D)</th><th>Equivalent Focal Length F (cm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0.0 (Contact)</td><td>+5.0</td><td>+5.0</td><td>+10.0</td><td>+10.0</td></tr>\n                        <tr><td>10.0</td><td>+5.0</td><td>+5.0</td><td>+7.5</td><td>+13.3</td></tr>\n                        <tr><td>20.0</td><td>+5.0</td><td>+5.0</td><td>+5.0</td><td>+20.0</td></tr>\n                        <tr><td>40.0 (Afocal)</td><td>+5.0</td><td>+5.0</td><td>0.0</td><td>∞ (Telescopic)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> Computational simulation verifies that power decreases linearly with separation $d$ for fixed $P_1, P_2$, vanishing completely at the afocal condition $d = f_1 + f_2$.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Keep units consistent: focal lengths in meters, powers in Diopters.</li><li>Handle division-by-zero gracefully at the afocal condition where F -> infinity.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is 1 Diopter?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The optical power of a lens with a focal length of exactly 1 meter: P = 1 / f(m).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What happens to the equivalent power of two convex lenses as their separation distance increases?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The equivalent power decreases because the term -d P1 P2 subtracts from the sum of powers.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: At what separation distance does a two-lens system have zero power?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> When d = (P1 + P2) / (P1 * P2) = f1 + f2.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: Can two convex lenses produce a net diverging (negative) system?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Yes! When separation d > f1 + f2, the equivalent power P becomes negative (F < 0).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: How is this related to Ramsden and Huygens eyepieces?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Both eyepieces use two separated convex lenses whose separation d is specifically selected to balance equivalent power and minimize aberrations.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the equivalent power of two thin lenses with P₁ = +4 D and P₂ = +6 D placed in contact (d = 0)?",
          "options": [
            "+2 D",
            "+10 D",
            "+24 D",
            "+5 D"
          ],
          "correctIndex": 1,
          "explanation": "In contact, powers add algebraically: P = P₁ + P₂ = 4 D + 6 D = +10 D."
        },
        {
          "type": "multiple-choice",
          "question": "Two lenses with f₁ = 20 cm and f₂ = 30 cm are separated by d = 50 cm. What is the equivalent power of the system?",
          "options": [
            "+10 D",
            "+5 D",
            "0 D (Afocal)",
            "-2 D"
          ],
          "correctIndex": 2,
          "explanation": "Since d = f₁ + f₂ = 20 + 30 = 50 cm, the system is afocal and its equivalent power is 0 D (F = ∞)."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the equivalent focal length F if two convex lenses are separated beyond the afocal distance (d > f₁ + f₂)?",
          "options": [
            "F becomes negative (diverging system)",
            "F becomes zero",
            "F becomes positive and smaller",
            "It cannot be calculated"
          ],
          "correctIndex": 0,
          "explanation": "When d > f₁ + f₂, the term -d / (f₁ f₂) dominates, making 1/F negative."
        }
      ]
    },
    "lab-10-thick-thin-lens-matrix-focal": {
      "id": "lab-10-thick-thin-lens-matrix-focal",
      "title": "Lab 10: Verification of ABCD Matrix Method for Thick & Thin Lenses",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Experimentally measure thick and thin lens focal lengths and cardinal planes on an optical bench and verify them against ABCD matrix computations.",
      "toolType": "matrix-bench",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 10</div>\n                    <div class=\"callout-text\"><strong>Focal Length & Verification of Matrix Method for Thick and Thin Lenses</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To experimentally determine the focal lengths and cardinal points of thick and thin lenses on an optical bench and verify the results against 2x2 ray transfer matrix (ABCD) theoretical formulations.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Optical bench with riders, thick cylindrical/spherical glass lens, thin convex lens, nodal slide assembly, illuminated crosswire target, plane mirror, traveling microscope.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-matrix\"></i> Thick Lens ABCD System Matrix &amp; Cardinal Points</div>\n                <div class=\"formula-math-display\">\n                    \\mathbf{M}_{thick} = \\mathbf{R}_2 \\mathbf{T} \\mathbf{R}_1 = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix}\n                </div>\n                <div class=\"formula-math-display\">\n                    F = -\\frac{1}{C}, \\quad h_1 = \\frac{D - 1}{-C} = \\frac{n-1}{n R_2} t F, \\quad h_2 = \\frac{1 - A}{-C} = -\\frac{n-1}{n R_1} t F\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"30\" y1=\"120\" x2=\"770\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\"/>\n                <!-- Thick Lens with Thickness t -->\n                <path d=\"M 340 40 A 180 180 0 0 1 340 200 L 440 200 A 180 180 0 0 1 440 40 Z\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <text x=\"390\" y=\"110\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Thick Lens (t, n)</text>\n                <!-- Principal planes H1 and H2 -->\n                <line x1=\"365\" y1=\"30\" x2=\"365\" y2=\"210\" stroke=\"#a855f7\" stroke-dasharray=\"4,2\" stroke-width=\"2\"/>\n                <text x=\"365\" y=\"25\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">H₁</text>\n                <line x1=\"415\" y1=\"30\" x2=\"415\" y2=\"210\" stroke=\"#a855f7\" stroke-dasharray=\"4,2\" stroke-width=\"2\"/>\n                <text x=\"415\" y=\"25\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">H₂</text>\n                <!-- Focus F' -->\n                <circle cx=\"620\" cy=\"120\" r=\"5\" fill=\"#10b981\"/>\n                <text x=\"620\" y=\"140\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Focus F'</text>\n                <line x1=\"415\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n                <text x=\"517\" y=\"72\" fill=\"#10b981\" font-size=\"10\" text-anchor=\"middle\">Focal Length F = -1/C</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 10.1:</strong> Schematic diagram of the experimental apparatus for Focal Length & Verification of Matrix Method for Thick and Thin Lenses.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the lens on the nodal slide assembly on the optical bench.</li><li>Using the autocollimation method with a plane mirror placed behind the lens, adjust the nodal slide until rotation about the vertical axis produces no sideways shift in the image (Nodal point condition).</li><li>Record the distance from the bench to locate the principal planes H1 and H2 and true focal length F.</li><li>Measure the thickness t and radii of curvature R1, R2 using a spherometer.</li><li>Calculate the theoretical ABCD matrix elements A, B, C, D and theoretical focal length F = -1/C.</li><li>Compare experimental nodal slide results with matrix computations.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Lens Type</th><th>Thickness t (cm)</th><th>Radii R₁, R₂ (cm)</th><th>Experimental F (cm)</th><th>Matrix Element C (cm⁻¹)</th><th>Theoretical F = -1/C (cm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Thin Convex</td><td>0.30</td><td>+18.2, -18.2</td><td>+18.1</td><td>-0.0552</td><td>+18.1</td></tr>\n                        <tr><td>Thick Bi-convex</td><td>3.50</td><td>+12.0, -12.0</td><td>+11.2</td><td>-0.0891</td><td>+11.2</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The experimentally measured focal length ($\\mathbf{F_{exp} = 11.2\\text{ cm}}$) matches the theoretical ABCD matrix prediction ($\\mathbf{F_{th} = -1/C = 11.22\\text{ cm}}$) to within $< 0.3\\%$ error.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Ensure the nodal slide axis of rotation is strictly perpendicular to the bench bed.</li><li>Avoid parallax when aligning image crosswires.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What are cardinal points in thick lens theory?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Six reference points along the optical axis: two focal points (F1, F2), two principal points (H1, H2), and two nodal points (N1, N2).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is unique about nodal points?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A ray incident directed towards the first nodal point N1 emerges from the second nodal point N2 parallel to its original direction (unit angular magnification).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: When do nodal points coincide with principal points?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> When the optical media on both sides of the lens system have the same refractive index (e.g., lens in air, n1 = n2 = 1).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: Why does a thick lens have two principal planes instead of a single center?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because finite glass thickness causes rays to translate internally between the two curved surfaces before emerging.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: What is the determinant of a thick lens ABCD matrix in air?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Exactly 1.0 (det(M) = AD - BC = 1).</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "How is the equivalent focal length F of a thick lens calculated from its ABCD system matrix?",
          "options": [
            "F = A",
            "F = B",
            "F = -1 / C",
            "F = D"
          ],
          "correctIndex": 2,
          "explanation": "In paraxial matrix theory, the optical power is P = -C, so equivalent focal length F = -1/C."
        },
        {
          "type": "multiple-choice",
          "question": "When does the first nodal point N₁ coincide with the first principal point H₁ in an optical system?",
          "options": [
            "Always, whenever the medium on both sides of the lens is the same (e.g., air)",
            "Only for thin lenses",
            "Only for mirrors",
            "Never"
          ],
          "correctIndex": 0,
          "explanation": "When refractive indices of the initial and final media are equal (n_in = n_out), principal points and nodal points coincide identically."
        },
        {
          "type": "multiple-choice",
          "question": "What happens when a thick lens is rotated slightly about a vertical axis passing through its second nodal point N₂?",
          "options": [
            "The image disappears",
            "The image remains completely stationary without sideways shift",
            "The image turns upside down",
            "The lens shatters"
          ],
          "correctIndex": 1,
          "explanation": "Rotation about a nodal point produces zero transverse shift in the image, the core operating principle of the nodal slide."
        }
      ]
    },
    "lab-11-achromatic-lens-combinations": {
      "id": "lab-11-achromatic-lens-combinations",
      "title": "Lab 11: Achromatic Lens Combinations: In Contact & Separated",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Assemble and test achromatic combinations of lenses in contact (Crown + Flint) and separated by distance d = (f1+f2)/2, verifying chromatic aberration elimination.",
      "toolType": "aberration-visualizer",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 11</div>\n                    <div class=\"callout-text\"><strong>Achromatic Combination of Lenses: In Contact and at a Distance</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To experimentally assemble and verify the conditions for an achromatic doublet in contact (ω1/f1 + ω2/f2 = 0) and two lenses of the same material separated by a distance (d = (f1+f2)/2).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Optical bench, red and blue optical filters, illuminated target, Crown convex lens, Flint concave lens, two identical thin convex lenses, screen.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-link\"></i> Achromatism Conditions</div>\n                <div class=\"formula-math-display\">\n                    \\text{In Contact: } \\frac{\\omega_1}{f_1} + \\frac{\\omega_2}{f_2} = 0 \\implies \\frac{f_1}{f_2} = -\\frac{\\omega_1}{\\omega_2}\n                </div>\n                <div class=\"formula-math-display\">\n                    \\text{Separated by Distance: } d = \\frac{f_1 + f_2}{2} \\quad (\\text{for identical glass, } \\omega_1 = \\omega_2)\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Optical Bench Axis -->\n                <line x1=\"30\" y1=\"120\" x2=\"770\" y2=\"120\" stroke=\"#64748b\" stroke-dasharray=\"6,4\"/>\n                <!-- Achromatic Doublet -->\n                <path d=\"M 260 50 A 120 120 0 0 1 260 190 L 300 190 A 120 120 0 0 0 300 50 Z\" fill=\"rgba(56, 189, 248, 0.22)\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                <path d=\"M 300 50 A 120 120 0 0 1 300 190 L 335 190 L 335 50 Z\" fill=\"rgba(168, 85, 247, 0.22)\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n                <text x=\"290\" y=\"35\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Crown (+) + Flint (-)</text>\n                <!-- Unified Red & Blue rays -->\n                <line x1=\"40\" y1=\"80\" x2=\"260\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"40\" y1=\"80\" x2=\"260\" y2=\"80\" stroke=\"#3b82f6\" stroke-dasharray=\"4,2\" stroke-width=\"1.5\"/>\n                <line x1=\"335\" y1=\"90\" x2=\"620\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"335\" y1=\"90\" x2=\"620\" y2=\"120\" stroke=\"#3b82f6\" stroke-dasharray=\"4,2\" stroke-width=\"1.5\"/>\n                <circle cx=\"620\" cy=\"120\" r=\"5\" fill=\"#10b981\"/>\n                <text x=\"620\" y=\"145\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Common Focus F_ach</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 11.1:</strong> Schematic diagram of the experimental apparatus for Achromatic Combination of Lenses: In Contact and at a Distance.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Measure the individual focal lengths of a convex Crown glass lens (f1) and concave Flint glass lens (f2) for red and blue light.</li><li>Place the Crown and Flint lenses in physical contact on an optical bench rider and measure composite focal lengths for red and blue filters; verify that chromatic aberration ΔF = F_red - F_blue is zero.</li><li>Take two thin convex lenses of identical glass with focal lengths f1 = 20 cm and f2 = 10 cm.</li><li>Mount them coaxially at separation distance d = (f1 + f2) / 2 = 15 cm.</li><li>Verify that the emergent rays for red and blue light emerge parallel with identical focal length.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Combination Type</th><th>Lens 1 Focal Length</th><th>Lens 2 Focal Length</th><th>Separation d (cm)</th><th>F_red (cm)</th><th>F_blue (cm)</th><th>ΔF (cm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Single Convex Lens</td><td>f = 15.0 cm</td><td>None</td><td>None</td><td>15.4</td><td>14.8</td><td>0.60 (Fringes)</td></tr>\n                        <tr><td>Achromatic Doublet (Contact)</td><td>Crown f₁ = +10.0</td><td>Flint f₂ = -16.7</td><td>0.0</td><td>25.0</td><td>25.0</td><td>0.00 (Achromatic)</td></tr>\n                        <tr><td>Separated (Same Glass)</td><td>f₁ = +20.0</td><td>f₂ = +10.0</td><td>15.0</td><td>13.3</td><td>13.3</td><td>0.00 (Achromatic)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The chromatic aberration ΔF drops from $0.60\\text{ cm}$ in a single lens to zero in both the cemented doublet and the separated combination ($d = 15\\text{ cm}$), confirming achromatism.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Align both lenses coaxially on a common optical axis.</li><li>Ensure clean optical contact without air gaps when testing cemented doublets.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is an achromatic combination?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A combination of two or more lenses whose effective focal length is identical for two chosen wavelengths (typically Fraunhofer C and F lines), eliminating color fringing.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: Can two lenses of the same glass placed in contact be made achromatic?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> No, because ω1/f1 + ω2/f2 = (ω/f1 + ω/f2) = ω/F = 0 requires F = ∞ (an optical flat with zero net power).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Why can two lenses of the same glass be achromatic if separated by distance d?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because the condition d = (f1 + f2)/2 does not require opposite sign powers, allowing two positive lenses to achieve achromatism (as in the Huygens eyepiece).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What is secondary spectrum?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The residual chromatic aberration remaining for other wavelengths (e.g. green) when red and blue are unified in an achromatic doublet.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: What is an apochromatic lens?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> An advanced lens system combining three specialized glasses (such as fluorite) that unifies three distinct wavelengths (red, green, blue) to a common focus.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Can two thin lenses fabricated from the same glass material form an achromatic combination when placed in direct physical contact?",
          "options": [
            "Yes, if both are convex",
            "No, because ω₁/f₁ + ω₂/f₂ = 0 would require net focal length F = ∞",
            "Yes, if both are concave",
            "Only under red light"
          ],
          "correctIndex": 1,
          "explanation": "If ω₁ = ω₂, then ω(1/f₁ + 1/f₂) = ω/F = 0, which yields F = ∞ (zero optical power)."
        },
        {
          "type": "multiple-choice",
          "question": "What separation distance d achieves achromatism for two convex lenses of the same glass having focal lengths 18 cm and 6 cm?",
          "options": [
            "6.0 cm",
            "12.0 cm",
            "18.0 cm",
            "24.0 cm"
          ],
          "correctIndex": 1,
          "explanation": "d = (f₁ + f₂) / 2 = (18 + 6) / 2 = 24 / 2 = 12.0 cm."
        },
        {
          "type": "multiple-choice",
          "question": "What is the residual chromatic aberration across green wavelengths called after red and blue are unified in a doublet?",
          "options": [
            "Coma",
            "Secondary spectrum",
            "Astigmatism",
            "Airy disk"
          ],
          "correctIndex": 1,
          "explanation": "The small remaining color defect for non-corrected intermediate wavelengths is known as the secondary spectrum."
        }
      ]
    },
    "lab-12-laser-beam-divergence-spot-size": {
      "id": "lab-12-laser-beam-divergence-spot-size",
      "title": "Lab 12: Laser Beam Divergence & Spot Size Measurement",
      "category": "cat-practicals-part2",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Measure the beam divergence angle θ and waist diameter w0 of a Gaussian laser beam propagating across laboratory distances.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 12</div>\n                    <div class=\"callout-text\"><strong>Measurement of Beam Divergence and Spot Size of a Laser</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To measure the beam spot diameter w(z) of a laser beam at varying propagation distances z, calculate the half-angle beam divergence θ, and verify Gaussian beam propagation.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Semiconductor diode laser (650 nm) or He-Ne laser (632.8 nm), optical bench / translation rail, digital beam profiler or knife-edge / pinhole assembly, photodiode power meter, metric tape.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-calculator\"></i> Gaussian Beam Divergence Formulas</div>\n                <div class=\"formula-math-display\">\n                    \\theta = \\frac{w_2 - w_1}{2 (z_2 - z_1)}, \\quad \\theta_{diff} = \\frac{\\lambda}{\\pi w_0}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">w_1, w_2</span>: Beam spot diameters ($1/e^2$ intensity) at distances $z_1$ and $z_2$</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">w_0</span>: Laser beam waist radius at laser output aperture</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ</span>: Far-field half-divergence angle in radians</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser -->\n                <rect x=\"30\" y=\"100\" width=\"80\" height=\"40\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"2\" rx=\"4\"/>\n                <text x=\"70\" y=\"125\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Laser Source</text>\n                <!-- Waist w0 -->\n                <ellipse cx=\"115\" cy=\"120\" rx=\"4\" ry=\"12\" fill=\"#fbbf24\"/>\n                <text x=\"115\" y=\"90\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">Waist w₀</text>\n                <!-- Expanding Gaussian Beam Profile -->\n                <path d=\"M 115 108 C 220 108, 400 90, 720 50 L 720 190 C 400 150, 220 132, 115 132 Z\" fill=\"rgba(239, 68, 68, 0.12)\"/>\n                <path d=\"M 115 108 C 220 108, 400 90, 720 50\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <path d=\"M 115 132 C 220 132, 400 150, 720 190\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <!-- Spot 1 at z1 -->\n                <line x1=\"320\" y1=\"100\" x2=\"320\" y2=\"140\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                <text x=\"320\" y=\"160\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">w₁ at z₁</text>\n                <!-- Spot 2 at z2 -->\n                <line x1=\"620\" y1=\"65\" x2=\"620\" y2=\"175\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                <text x=\"620\" y=\"195\" fill=\"#fbbf24\" font-size=\"10\" text-anchor=\"middle\">w₂ at z₂</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 12.1:</strong> Schematic diagram of the experimental apparatus for Measurement of Beam Divergence and Spot Size of a Laser.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the laser rigidly on an optical bench directed towards a far wall or movable screen.</li><li>Position the screen at distance z1 = 1.0 meter and measure the 1/e² spot diameter w1 using a millimeter grid or knife-edge technique.</li><li>Move the screen to distances z2 = 2.0 m, 3.0 m, 4.0 m, 5.0 m and measure spot diameters.</li><li>Plot beam diameter w(z) versus propagation distance z.</li><li>Determine the slope of the linear fit: slope = 2θ, and deduce divergence angle θ.</li><li>Compute the Rayleigh range z_R = π w_0² / λ.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Distance z (meters)</th><th>Spot Diameter w(z) (mm)</th><th>Spot Radius r(z) (mm)</th><th>Calculated Divergence θ (mrad)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>1.0</td><td>1.8</td><td>0.90</td><td>—</td></tr>\n                        <tr><td>2.0</td><td>2.9</td><td>1.45</td><td>0.55 mrad</td></tr>\n                        <tr><td>3.0</td><td>4.0</td><td>2.00</td><td>0.55 mrad</td></tr>\n                        <tr><td>4.0</td><td>5.1</td><td>2.55</td><td>0.55 mrad</td></tr>\n                        <tr><td>5.0</td><td>6.2</td><td>3.10</td><td>0.55 mrad</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The laser half-divergence angle is determined to be $\\mathbf{\\theta = 0.55\\text{ milliradians} = 0.031^\\circ}$, confirming exceptional beam collimation.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Never look directly into the laser aperture.</li><li>Measure spot size using the standardized 1/e² (13.5% intensity) boundary rather than visual glare.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is a Gaussian beam?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> A beam of light whose transverse electric field and intensity distribution is described by a Gaussian function: I(r) = I_0 exp(-2r² / w²).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the beam waist w0?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The point along the optical axis where the laser beam cross-section reaches its minimum diameter and has flat planar wavefronts.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: What is the Rayleigh range zR?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The distance over which the beam cross-sectional area doubles: z_R = π w_0² / λ.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: Why is laser beam divergence measured in milliradians rather than degrees?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because laser beams diverge so minimally (typically ~1 mrad = 0.057°), making milliradians the standard optical engineering unit.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: How can laser beam divergence be reduced even further?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> By passing the beam through a beam expander (telescope): expanding the waist diameter w0 by 10x reduces divergence θ by 10x!</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "If a laser beam spot diameter expands by 2.0 mm over a propagation distance of 2.0 meters, what is the half-divergence angle θ?",
          "options": [
            "0.5 mrad",
            "1.0 mrad",
            "2.0 mrad",
            "0.05 mrad"
          ],
          "correctIndex": 0,
          "explanation": "θ = Δw / (2 Δz) = 2.0 mm / (2 * 2000 mm) = 2 / 4000 = 0.5 * 10⁻³ rad = 0.5 mrad."
        },
        {
          "type": "multiple-choice",
          "question": "What is the 1/e² intensity criterion commonly used to define laser spot size?",
          "options": [
            "100% intensity",
            "50% intensity",
            "~13.5% of central peak intensity",
            "0% intensity"
          ],
          "correctIndex": 2,
          "explanation": "The radius w is defined where the intensity drops to e⁻² ≈ 0.135 (13.5%) of the on-axis peak intensity."
        },
        {
          "type": "multiple-choice",
          "question": "How does passing a laser beam through a 5x beam expander affect its far-field divergence angle?",
          "options": [
            "Divergence increases 5x",
            "Divergence is reduced by 5x",
            "Divergence remains unchanged",
            "Divergence drops to zero"
          ],
          "correctIndex": 1,
          "explanation": "Because θ = λ / (π w_0), increasing the beam waist w₀ by 5x reduces the beam divergence angle by a factor of 5."
        }
      ]
    },
    "lab-13-malus-law-polarization": {
      "id": "lab-13-malus-law-polarization",
      "title": "Lab 13: Verification of Malus’s Law using Laser & Polarizers",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Verify Etienne-Louis Malus's 1809 cosine-squared polarization law using a laser, rotatable polarizer-analyzer pair, and digital optical power meter.",
      "toolType": "malus-law",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 13</div>\n                    <div class=\"callout-text\"><strong>Verification of Malus’s Law using Laser and Polarizers</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To verify Malus’s Law of polarization ($I = I_0 \\cos^2\\theta$) by measuring the transmitted light intensity as a function of the relative angle $\\theta$ between the transmission axes of a polarizer and analyzer.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Laser source (He-Ne or Diode), two linear Polaroid sheets mounted on circular 360° rotation stages (Polarizer and Analyzer), photodetector / digital optical power meter, dark enclosure.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-arrows-split-up-and-left\"></i> Malus's Law Formula</div>\n                <div class=\"formula-math-display\">\n                    I(\\theta) = I_0 \\cos^2 \\theta\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">I_0</span>: Maximum transmitted intensity when axes are parallel ($\\theta = 0^\\circ$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">θ</span>: Angle between transmission axes of Polarizer and Analyzer</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">I(θ)</span>: Transmitted intensity; vanishes at crossed orientation ($\\theta = 90^\\circ$)</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser -->\n                <rect x=\"30\" y=\"105\" width=\"60\" height=\"30\" fill=\"#ef4444\" rx=\"3\"/>\n                <text x=\"60\" y=\"124\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <line x1=\"90\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                <!-- Polarizer Disc (0 deg) -->\n                <circle cx=\"240\" cy=\"120\" r=\"45\" fill=\"rgba(56, 189, 248, 0.2)\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n                <line x1=\"240\" y1=\"75\" x2=\"240\" y2=\"165\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <text x=\"240\" y=\"60\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Polarizer (0°)</text>\n                <!-- Polarized Ray -->\n                <line x1=\"240\" y1=\"120\" x2=\"440\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <!-- Analyzer Disc (Rotated by theta) -->\n                <circle cx=\"460\" cy=\"120\" r=\"45\" fill=\"rgba(124, 58, 237, 0.2)\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n                <line x1=\"435\" y1=\"85\" x2=\"485\" y2=\"155\" stroke=\"#a855f7\" stroke-width=\"3\"/>\n                <text x=\"460\" y=\"60\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Analyzer (θ)</text>\n                <!-- Transmitted Ray -->\n                <line x1=\"460\" y1=\"120\" x2=\"650\" y2=\"120\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n                <!-- Power Meter -->\n                <rect x=\"650\" y=\"95\" width=\"80\" height=\"50\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"4\"/>\n                <text x=\"690\" y=\"125\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Power Meter</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 13.1:</strong> Schematic diagram of the experimental apparatus for Verification of Malus’s Law using Laser and Polarizers.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the laser, polarizer, analyzer, and photodetector coaxially on an optical rail.</li><li>Rotate the analyzer until the photodetector reads maximum transmitted optical power I0. Mark this reference orientation as θ = 0°.</li><li>Rotate the analyzer in steps of 10° from 0° to 180°, recording the transmitted intensity I(θ) at each angle.</li><li>Notice that at θ = 90°, intensity drops to near-zero (crossed polarizers). At θ = 180°, intensity returns to maximum I0.</li><li>Plot transmitted intensity I versus cos²θ. A straight line passing through the origin verifies Malus’s Law.</li><li>Plot I versus θ on a polar graph to observe the classic double-lobed figure-eight pattern.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Angle θ (deg)</th><th>cos θ</th><th>cos² θ</th><th>Measured Power I (mW)</th><th>Theoretical I = I₀ cos²θ (mW)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0° (Parallel)</td><td>1.000</td><td>1.000</td><td>5.00</td><td>5.00</td></tr>\n                        <tr><td>30°</td><td>0.866</td><td>0.750</td><td>3.74</td><td>3.75</td></tr>\n                        <tr><td>45°</td><td>0.707</td><td>0.500</td><td>2.48</td><td>2.50</td></tr>\n                        <tr><td>60°</td><td>0.500</td><td>0.250</td><td>1.26</td><td>1.25</td></tr>\n                        <tr><td>90° (Crossed)</td><td>0.000</td><td>0.000</td><td>0.01</td><td>0.00</td></tr>\n                        <tr><td>120°</td><td>-0.500</td><td>0.250</td><td>1.24</td><td>1.25</td></tr>\n                        <tr><td>180° (Parallel)</td><td>-1.000</td><td>1.000</td><td>4.98</td><td>5.00</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The plot of $I$ versus $\\cos^2\\theta$ yields a straight line with correlation coefficient $R^2 = 0.999$, conclusively verifying Malus's Law.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Ensure ambient background room light is shielded from the photodetector.</li><li>If using a linearly polarized laser, place the first polarizer axis aligned with the laser polarization.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: State Malus's Law.</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> When completely plane-polarized light is incident on an analyzer, the transmitted intensity varies directly as the square of the cosine of the angle between the transmission axes: I = I_0 cos²θ.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the transmitted intensity when polarizers are crossed at 90°?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Zero (complete extinction of light).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: What happens if a third polarizer at 45° is inserted between two crossed polarizers?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Light surprisingly reappears! The 45° polarizer rotates the polarization vector, transmitting I = I_0 * cos²(45°) * cos²(45°) = I_0 / 4 (25% of incident light).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What is the physical cause of light extinction in Polaroid sheets?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Dichroism: aligned long-chain polyvinyl alcohol polymer molecules absorb electric field components parallel to their chains and transmit the perpendicular component.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Who discovered Malus's Law and when?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> French physicist Étienne-Louis Malus in 1809.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What fraction of maximum intensity is transmitted through a polarizer-analyzer pair oriented at an angle of 60°?",
          "options": [
            "75%",
            "50%",
            "25%",
            "0%"
          ],
          "correctIndex": 2,
          "explanation": "I = I₀ cos²(60°) = I₀ * (0.5)² = 0.25 I₀ (25%)."
        },
        {
          "type": "multiple-choice",
          "question": "If two polarizers are crossed at 90° (zero transmission) and a third polarizer is inserted between them at 45°, what fraction of incident unpolarized light emerges?",
          "options": [
            "0%",
            "12.5% (1/8)",
            "25% (1/4)",
            "50% (1/2)"
          ],
          "correctIndex": 1,
          "explanation": "First polarizer transmits 50% (I_in/2). Second at 45° transmits (I_in/2) * cos²(45°) = I_in/4. Third at 45° relative to second transmits (I_in/4) * cos²(45°) = I_in/8 = 12.5%."
        },
        {
          "type": "multiple-choice",
          "question": "What is the graphical plot of I versus cos²θ for Malus's Law?",
          "options": [
            "A parabola",
            "A straight line passing through the origin",
            "An exponential curve",
            "A circle"
          ],
          "correctIndex": 1,
          "explanation": "Because I = I₀ * (cos²θ), plotting I against cos²θ gives a linear relationship y = m x with slope I₀."
        }
      ]
    },
    "lab-14-circular-aperture-airy-disk": {
      "id": "lab-14-circular-aperture-airy-disk",
      "title": "Lab 14: Circular Aperture Diffraction (Airy Disk) & Resolving Limit",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Generate Fraunhofer diffraction from a microscopic circular pinhole using a laser. Measure Airy disk diameter and calculate the 1.22λ/D resolving limit.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 14</div>\n                    <div class=\"callout-text\"><strong>Study of Diffraction Pattern from Circular Aperture (Airy Disk)</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To record and analyze the Fraunhofer diffraction pattern formed by a circular pinhole aperture using a laser beam, measure the diameter of the central Airy disk, and verify the 1.22 factor in the Rayleigh resolution criterion.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Laser (He-Ne 632.8 nm or Diode 650 nm), precision circular pinhole apertures (D = 50, 100, 200 µm), translation mount, distant projection screen, traveling microscope or calibrated digital camera.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-circle-dot\"></i> Airy Disk Mathematical Equation</div>\n                <div class=\"formula-math-display\">\n                    I(\\theta) = I_0 \\left[ \\frac{2 J_1(k a \\sin\\theta)}{k a \\sin\\theta} \\right]^2, \\quad \\sin \\theta_1 \\approx 1.22 \\frac{\\lambda}{D}\n                </div>\n                <div class=\"formula-math-display\">\n                    \\text{Airy Disk Linear Diameter: } 2 r_1 = 2.44 \\frac{\\lambda L}{D}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">J_1(x)</span>: First-order Bessel function of the first kind (first zero at $x = 3.8317$)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Diameter of circular aperture pinhole</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">L</span>: Distance from aperture to observation screen</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">r_1</span>: Radius of central bright disk to first dark ring</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser -->\n                <rect x=\"30\" y=\"105\" width=\"70\" height=\"30\" fill=\"#ef4444\" rx=\"3\"/>\n                <text x=\"65\" y=\"125\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <line x1=\"100\" y1=\"120\" x2=\"260\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                <!-- Circular Pinhole Screen -->\n                <rect x=\"260\" y=\"40\" width=\"10\" height=\"160\" fill=\"#334155\"/>\n                <circle cx=\"265\" cy=\"120\" r=\"6\" fill=\"#0f172a\"/>\n                <text x=\"265\" y=\"30\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Pinhole (D)</text>\n                <!-- Diffracted cone -->\n                <polygon points=\"265,120 640,65 640,175\" fill=\"rgba(239, 68, 68, 0.15)\"/>\n                <line x1=\"265\" y1=\"120\" x2=\"640\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"265\" y1=\"120\" x2=\"640\" y2=\"175\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <!-- Observation Screen with Airy Concentric Rings -->\n                <rect x=\"640\" y=\"20\" width=\"14\" height=\"200\" fill=\"#e2e8f0\"/>\n                <!-- Concentric Rings Illustration -->\n                <circle cx=\"720\" cy=\"120\" r=\"30\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.2\"/>\n                <circle cx=\"720\" cy=\"120\" r=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n                <circle cx=\"720\" cy=\"120\" r=\"8\" fill=\"#ef4444\"/>\n                <text x=\"720\" y=\"175\" fill=\"#ef4444\" font-size=\"10\" text-anchor=\"middle\">Airy Disk (84% energy)</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 14.1:</strong> Schematic diagram of the experimental apparatus for Study of Diffraction Pattern from Circular Aperture (Airy Disk).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the circular pinhole aperture on an optical bench and illuminate with an expanded, collimated laser beam.</li><li>Place the observation screen at a large distance L (e.g. 2 to 3 meters) to satisfy Fraunhofer diffraction conditions.</li><li>Observe the classic Airy pattern: bright central circular disk surrounded by faint concentric dark and bright rings.</li><li>Measure the diameter 2r1 of the first dark minimum ring using a traveling microscope or high-resolution camera sensor.</li><li>Repeat measurements for varying pinhole diameters D (100 µm, 200 µm) and screen distances L.</li><li>Verify the factor 2.44 λ L / D.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Pinhole Diameter D (µm)</th><th>Distance L (cm)</th><th>Measured Airy Diameter 2r₁ (mm)</th><th>Theoretical Diameter (mm)</th><th>Airy Disk Energy (%)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>100</td><td>200.0</td><td>30.9</td><td>30.9</td><td>83.8%</td></tr>\n                        <tr><td>200</td><td>200.0</td><td>15.4</td><td>15.4</td><td>83.8%</td></tr>\n                        <tr><td>100</td><td>300.0</td><td>46.3</td><td>46.3</td><td>83.8%</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The measured Airy disk diameter matches the Bessel function prediction $\\mathbf{2r_1 = 2.44 \\lambda L / D}$ to within $1\\%$ accuracy, confirming the physical basis of the Rayleigh criterion.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>The laser beam must be spatially filtered and collimated before striking the pinhole.</li><li>The pinhole must be perfectly circular without burrs or jagged edges.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is an Airy disk?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The bright central circular diffraction maximum formed when light passes through a circular aperture, named after Sir George Biddell Airy (1835).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What fraction of total light energy is contained in the central Airy disk?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Approximately 83.8% of the total transmitted energy resides in the central disk, while 7.2% is in the first ring and 2.8% in the second ring.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Where does the factor 1.22 in Rayleigh's criterion come from?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> From the first zero of the first-order Bessel function J1(x): J1(x) = 0 occurs at x = 3.8317. Since x = π D sin θ / λ, sin θ = 3.8317 / π * (λ/D) ≈ 1.2197 λ/D ≈ 1.22 λ/D.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: How does Airy disk size depend on aperture diameter D?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Inversely: doubling aperture diameter D halves the Airy disk diameter, yielding a sharper focal spot.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Why is the Airy disk of fundamental importance in astronomy and microscopy?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> It sets the absolute diffraction limit of resolution for all circular optical instruments (telescopes, camera lenses, microscopes).</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What percentage of total optical energy is concentrated inside the central bright Airy disk?",
          "options": [
            "50.0%",
            "83.8%",
            "99.0%",
            "100.0%"
          ],
          "correctIndex": 1,
          "explanation": "Integrating the Bessel intensity profile shows that exactly 83.8% of total diffracted light energy resides within the central Airy disk."
        },
        {
          "type": "multiple-choice",
          "question": "What mathematical function describes the radial amplitude of the Fraunhofer diffraction pattern of a circular aperture?",
          "options": [
            "Legendre polynomial P_n(x)",
            "First-order Bessel function of the first kind J₁(x)",
            "Hermite polynomial",
            "Dirac delta function"
          ],
          "correctIndex": 1,
          "explanation": "The 2D Fourier transform of a circular pupil evaluates to the Bessel function J₁(ka sin θ) / (ka sin θ)."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the angular diameter of the Airy disk if the circular aperture diameter D is tripled?",
          "options": [
            "It triples",
            "It reduces to 1/3 of its original size",
            "It increases 9x",
            "It remains unchanged"
          ],
          "correctIndex": 1,
          "explanation": "Since θ = 1.22 λ / D, tripling D reduces the angular radius of the Airy disk by a factor of 3."
        }
      ]
    },
    "lab-15-youngs-double-slit-laser": {
      "id": "lab-15-youngs-double-slit-laser",
      "title": "Lab 15: Young’s Double-Slit Experiment using Laser",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Recreate Thomas Young's foundational 1801 wave optics experiment using a laser. Measure interference fringe width β and determine fringe spacing.",
      "toolType": null,
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 15</div>\n                    <div class=\"callout-text\"><strong>Young’s Double-Slit Experiment using Laser: Interference Fringes</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To produce optical interference fringes using a laser beam and double slit, measure fringe width (β) as a function of slit separation (d) and screen distance (D), and calculate laser wavelength.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Laser source (He-Ne or Diode), double-slit slides (slit separations d = 0.25 mm, 0.50 mm), optical rail, screen, traveling microscope.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-water\"></i> Double-Slit Fringe Width Formula</div>\n                <div class=\"formula-math-display\">\n                    \\beta = \\frac{\\lambda D}{d} \\implies \\lambda = \\frac{\\beta \\cdot d}{D}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">β</span>: Fringe width (distance between two consecutive bright or dark fringes)</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">d</span>: Center-to-center separation between the two slits</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">D</span>: Distance from double-slit slide to observation screen</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser -->\n                <rect x=\"30\" y=\"105\" width=\"60\" height=\"30\" fill=\"#ef4444\" rx=\"3\"/>\n                <text x=\"60\" y=\"124\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <line x1=\"90\" y1=\"120\" x2=\"240\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n                <!-- Double Slit Slide -->\n                <rect x=\"240\" y=\"40\" width=\"8\" height=\"160\" fill=\"#334155\"/>\n                <line x1=\"244\" y1=\"105\" x2=\"244\" y2=\"112\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n                <line x1=\"244\" y1=\"128\" x2=\"244\" y2=\"135\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n                <text x=\"244\" y=\"30\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Slits (d)</text>\n                <!-- Interfering Beams -->\n                <line x1=\"248\" y1=\"108\" x2=\"640\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"248\" y1=\"132\" x2=\"640\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n                <line x1=\"248\" y1=\"108\" x2=\"640\" y2=\"70\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n                <line x1=\"248\" y1=\"132\" x2=\"640\" y2=\"70\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n                <!-- Interference Fringes on Screen -->\n                <rect x=\"640\" y=\"20\" width=\"12\" height=\"200\" fill=\"#e2e8f0\"/>\n                <!-- Alternating Bright Red & Dark Fringes -->\n                <g transform=\"translate(680, 40)\">\n                    <rect x=\"0\" y=\"0\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"16\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"32\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"48\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"64\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"80\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <rect x=\"0\" y=\"96\" width=\"40\" height=\"8\" fill=\"#ef4444\"/>\n                    <text x=\"20\" y=\"125\" fill=\"#ef4444\" font-size=\"10\" text-anchor=\"middle\">Fringe Width β</text>\n                </g>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 15.1:</strong> Schematic diagram of the experimental apparatus for Young’s Double-Slit Experiment using Laser: Interference Fringes.\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Mount the laser and double slit on the optical rail.</li><li>Ensure both slits are uniformly illuminated by the laser beam.</li><li>Set the screen at distance D = 1.5 to 2.0 meters.</li><li>Observe the bright, equally spaced interference fringes modulated by the single-slit diffraction envelope.</li><li>Measure the distance across 10 or 20 fringes using a traveling microscope to calculate average fringe width β.</li><li>Vary distance D and repeat measurements. Plot β versus D to verify direct proportionality.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Slit Spacing d (mm)</th><th>Screen Distance D (cm)</th><th>Width of 10 Fringes (mm)</th><th>Fringe Width β (mm)</th><th>Calculated λ (nm)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>0.25</td><td>150.0</td><td>38.0</td><td>3.80</td><td>633.3</td></tr>\n                        <tr><td>0.25</td><td>200.0</td><td>50.6</td><td>5.06</td><td>632.5</td></tr>\n                        <tr><td>0.50</td><td>200.0</td><td>25.3</td><td>2.53</td><td>632.5</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> The laser wavelength is determined as $\\mathbf{\\lambda = (632.8 \\pm 0.8)\\text{ nm}}$, matching the standard He-Ne laser line with exceptional precision.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Both slits must be illuminated symmetrically.</li><li>The screen must be strictly perpendicular to the central optical axis.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What is the condition for constructive interference (bright fringe)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Optical path difference must be an integer multiple of wavelength: Δ = d sin θ ≈ d y / D = n λ (where n = 0, ±1, ±2...).</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the condition for destructive interference (dark fringe)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Path difference must be an odd half-integer multiple of wavelength: Δ = (2n + 1) λ / 2.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: Why are fringes equally spaced in Young's double slit?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because fringe width β = λ D / d is constant, independent of the fringe order n.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: What happens if the two slits are placed very far apart?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> As slit spacing d increases, fringe width β = λ D / d becomes too small to be resolved by the eye, washing out the pattern.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: Why does a laser produce vastly superior interference fringes compared to Thomas Young's original sunlight pinhole?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because a laser has near-perfect spatial and temporal coherence, producing bright, high-contrast fringes across large screen distances.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What happens to the double-slit interference fringe width β if the distance D to the screen is doubled?",
          "options": [
            "Fringe width is halved",
            "Fringe width doubles",
            "Fringe width quadruples",
            "Fringe width remains unchanged"
          ],
          "correctIndex": 1,
          "explanation": "From β = λ D / d, fringe width is directly proportional to screen distance D."
        },
        {
          "type": "multiple-choice",
          "question": "In a double slit experiment with d = 0.25 mm and D = 1.0 m, what is the fringe width β for a red laser (λ = 632.8 nm)?",
          "options": [
            "1.26 mm",
            "2.53 mm",
            "5.06 mm",
            "0.50 mm"
          ],
          "correctIndex": 1,
          "explanation": "β = (632.8 * 10⁻⁹ m * 1.0 m) / (0.25 * 10⁻³ m) = 632.8 * 10⁻⁶ / 0.25 = 2.531 * 10⁻³ m ≈ 2.53 mm."
        },
        {
          "type": "multiple-choice",
          "question": "What is the intensity at the center of a dark fringe in an ideal Young's double slit experiment with equal amplitude slits?",
          "options": [
            "50% of peak",
            "25% of peak",
            "Zero (complete destructive cancellation)",
            "Equal to single slit intensity"
          ],
          "correctIndex": 2,
          "explanation": "When two coherent waves of equal amplitude are out of phase by 180° (π radians), their electric fields cancel completely: I_min = (A - A)² = 0."
        }
      ]
    },
    "lab-16-optical-fiber-bending-losses": {
      "id": "lab-16-optical-fiber-bending-losses",
      "title": "Lab 16: Optical Fiber Bending Losses: Macrobending & Microbending",
      "category": "cat-practicals-part3",
      "track": "track-practicals",
      "readTime": "9 min read",
      "lead": "Quantify optical power loss in fibers induced by macroscopic cable curvature and microscopic compression stress using mandrel wraps.",
      "toolType": "fiber-na",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <div class=\"callout-box info\" style=\"margin-bottom: 1.5rem;\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask-vial\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Practical Lab Manual: Experiment 16</div>\n                    <div class=\"callout-text\"><strong>Study of Bending Losses in Optical Fiber (Macrobending & Microbending)</strong><br>Prescribed for B.Sc. Semester-III Applied Optics (Physics Major). Follow all laboratory safety precautions and optical alignment protocols.</div>\n                </div>\n            </div>\n\n            <h2><i class=\"fa-solid fa-bullseye\"></i> Aim of the Experiment</h2>\n            <p>To measure the optical power loss induced by macrobending as a function of bending radius (R) and number of turns (N) using cylindrical mandrels, and observe microbending attenuation.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-toolbox\"></i> Apparatus &amp; Optical Equipment</h2>\n            <table class=\"lab-meta-table\">\n                <tbody>\n                    <tr><th>Core Instruments</th><td>Optical fiber power meter and stabilized laser source (650 nm or 1310 nm), multimode fiber patchcord, set of cylindrical mandrels with calibrated radii (R = 5, 10, 15, 20, 25 mm), microbend test clamp with corrugated plates.</td></tr>\n                </tbody>\n            </table>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-square-root-variable\"></i> Principle &amp; Working Formula</h2>\n            \n            <div class=\"formula-card\">\n                <div class=\"formula-card-title\"><i class=\"fa-solid fa-wave-square\"></i> Bending Loss Formula in Decibels</div>\n                <div class=\"formula-math-display\">\n                    \\text{Bending Loss } \\alpha_{bend} = 10 \\log_{10}\\left(\\frac{P_{unbent}}{P_{bent}}\\right)\\text{ dB}\n                </div>\n                <div class=\"formula-variables-grid\">\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P_unbent</span>: Optical power transmitted through the straight unbent fiber</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">P_bent</span>: Optical power transmitted when fiber is wrapped around mandrel</div>\n                    <div class=\"formula-var-item\"><span class=\"formula-var-sym\">R</span>: Mandrel radius of curvature</div>\n                </div>\n            </div>\n            \n        </section>\n\n        <div class=\"optics-diagram-card\">\n            <div class=\"optics-diagram-header\">\n                <div class=\"optics-diagram-title\"><i class=\"fa-solid fa-compass-drafting\"></i> Experimental Setup Schematic</div>\n                <span class=\"optics-diagram-badge\">Lab Diagram</span>\n            </div>\n            <div class=\"optics-svg-container\">\n                \n            <svg viewBox=\"0 0 800 240\" width=\"800\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Laser Source -->\n                <rect x=\"30\" y=\"105\" width=\"70\" height=\"30\" fill=\"#ef4444\" rx=\"3\"/>\n                <text x=\"65\" y=\"125\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Laser</text>\n                <!-- Fiber routing -->\n                <path d=\"M 100 120 L 320 120\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <!-- Mandrel Cylinder -->\n                <circle cx=\"400\" cy=\"120\" r=\"45\" fill=\"#334155\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n                <text x=\"400\" y=\"125\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Mandrel (R)</text>\n                <!-- Fiber wrapped around mandrel -->\n                <circle cx=\"400\" cy=\"120\" r=\"48\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <!-- Radiation leakage rays (Red sparks radiating off bend) -->\n                <line x1=\"420\" y1=\"75\" x2=\"450\" y2=\"50\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/>\n                <line x1=\"445\" y1=\"95\" x2=\"480\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/>\n                <text x=\"490\" y=\"65\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">Radiative Loss</text>\n                <!-- Continuing fiber to power meter -->\n                <path d=\"M 400 168 L 650 168\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n                <!-- Power Meter -->\n                <rect x=\"650\" y=\"145\" width=\"80\" height=\"45\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"4\"/>\n                <text x=\"690\" y=\"172\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Power Meter</text>\n            </svg>\n            \n            </div>\n            <div class=\"optics-diagram-caption\">\n                <strong>Figure 16.1:</strong> Schematic diagram of the experimental apparatus for Study of Bending Losses in Optical Fiber (Macrobending & Microbending).\n            </div>\n        </div>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Step-by-Step Practical Procedure</h2>\n            <ol>\n                <li>Connect the optical fiber between the laser transmitter and optical power meter in a straight, unbent line. Record reference power P_unbent.</li><li>Carefully wind the fiber 1 full turn around a mandrel of radius R = 25 mm. Record transmitted power P_bent.</li><li>Repeat with mandrels of decreasing radii: R = 20 mm, 15 mm, 10 mm, and 5 mm.</li><li>Repeat with multiple turns (N = 1, 2, 3, 4, 5 turns) for a fixed mandrel radius to verify that loss scales linearly with number of turns.</li><li>Calculate the bending loss in dB for each configuration.</li><li>Plot bending loss versus 1/R and loss versus N.</li>\n            </ol>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Tabular Observations &amp; Readings</h2>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Mandrel Radius R (mm)</th><th>Turns (N)</th><th>Measured Power P_bent (mW)</th><th>Loss (dB) = 10 log(P_unbent / P_bent)</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Straight (R = ∞)</td><td>0</td><td>10.00 mW (0 dBm)</td><td>0.00 dB (Reference)</td></tr>\n                        <tr><td>R = 25 mm</td><td>1</td><td>9.82 mW</td><td>0.08 dB</td></tr>\n                        <tr><td>R = 20 mm</td><td>1</td><td>9.55 mW</td><td>0.20 dB</td></tr>\n                        <tr><td>R = 15 mm</td><td>1</td><td>8.81 mW</td><td>0.55 dB</td></tr>\n                        <tr><td>R = 10 mm</td><td>1</td><td>6.31 mW</td><td>2.00 dB</td></tr>\n                        <tr><td>R = 5 mm (Critical)</td><td>1</td><td>2.51 mW</td><td>6.00 dB (Heavy Loss!)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Calculations &amp; Result</h2>\n            \n            <p><strong>Result:</strong> Bending loss increases exponentially when the bending radius drops below the critical bend radius ($\\mathbf{R_c \\approx 12\\text{ mm}}$), demonstrating the critical importance of minimum bend radius standards in fiber installations.</p>\n            \n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-triangle-exclamation\"></i> Precautions &amp; Sources of Error</h2>\n            <ul>\n                <li>Do not bend the fiber beyond its breaking radius to prevent permanent glass core fracture.</li><li>Ensure consistent wrap tension on the mandrels.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-comments\"></i> Viva Voce Questions &amp; Detailed Answers</h2>\n            \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q1: What causes macrobending loss in an optical fiber?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> When the fiber is curved with radius R, light in the outer evanescent field would have to travel faster than the speed of light in the cladding to stay in phase with the wavefront, converting guided modes into radiating cladding modes.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q2: What is the critical bend radius Rc?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> The minimum radius of curvature below which bending radiation losses increase exponentially.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q3: What is microbending loss?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Loss caused by microscopic localized lateral deformations and ripples along the fiber axis (e.g. from cable jacket pressure or rough spool surfaces) that scatter light between modes.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q4: Why do single-mode fibers suffer less macrobending loss at 1310 nm than at 1550 nm?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Because the mode field diameter (MFD) is smaller at 1310 nm, meaning the optical energy is more tightly confined inside the core.</div>\n            </div>\n        \n            <div class=\"viva-box\">\n                <div class=\"viva-q\"><i class=\"fa-solid fa-circle-question\"></i> Q5: What are bend-insensitive fibers (BIF)?</div>\n                <div class=\"viva-a\"><strong>Answer:</strong> Specially engineered fibers (ITU-T G.657) featuring an annular low-index trench in the cladding that reflects evanescent fields back into the core, allowing tight 5-mm bends without loss in FTTH home installations.</div>\n            </div>\n        \n        </section>\n        ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "If transmitted power drops from 10.0 mW (unbent) to 1.0 mW when a fiber is tightly coiled, what is the macrobending loss in decibels (dB)?",
          "options": [
            "1 dB",
            "3 dB",
            "10 dB",
            "20 dB"
          ],
          "correctIndex": 2,
          "explanation": "Loss (dB) = 10 log₁₀(P_unbent / P_bent) = 10 log₁₀(10.0 / 1.0) = 10 log₁₀(10) = 10 dB."
        },
        {
          "type": "multiple-choice",
          "question": "What happens to the macrobending loss as the bending radius R of the mandrel is made progressively smaller?",
          "options": [
            "Loss decreases",
            "Loss increases exponentially",
            "Loss remains constant",
            "Light changes color"
          ],
          "correctIndex": 1,
          "explanation": "Below the critical bend radius, radiation losses escalate exponentially as higher-order guided modes fail TIR."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary difference between macrobending and microbending?",
          "options": [
            "Macrobending involves visible cable curves with radius of curvature comparable to the cable, while microbending involves sub-millimeter axial ripples and lateral compression",
            "Macrobending only happens in lasers",
            "Microbending does not cause loss",
            "They are identical"
          ],
          "correctIndex": 0,
          "explanation": "Macrobending relates to macroscopic curvature (bending around a mandrel), whereas microbending relates to microscopic surface deformities."
        }
      ]
    }
  }
};

  const ORDERED_TOPIC_IDS = [
  "optics-intro",
  "ray-optics-assumptions-fermat",
  "matrix-methods-translation-refraction",
  "reflection-system-matrix",
  "thick-thin-lens-matrix",
  "two-lens-combinations",
  "ramsden-eyepiece",
  "huygens-eyepiece",
  "unit1-activities-rubrics",
  "fresnel-reflection-refraction",
  "monochromatic-aberrations-intro",
  "spherical-aberration-minimization",
  "coma-astigmatism",
  "curvature-field-distortion",
  "chromatic-aberration-longitudinal-lateral",
  "achromatic-combinations",
  "unit2-activities-rubrics",
  "laser-fundamentals-coherence",
  "absorption-spontaneous-stimulated-emission",
  "population-inversion-pumping",
  "einstein-coefficients-relations",
  "he-ne-laser",
  "ruby-laser",
  "semiconductor-laser",
  "laser-applications-industry-medicine",
  "unit3-activities-rubrics",
  "optical-fiber-fundamentals-tir",
  "acceptance-angle-cone-na",
  "types-of-optical-fibers",
  "signal-attenuation-mechanisms",
  "optical-transmission-windows",
  "fiber-optic-applications-sensors",
  "holography-principles-recording-reconstruction",
  "gabor-hologram-limitations-off-axis",
  "holography-applications",
  "unit4-activities-rubrics",
  "compound-microscope",
  "confocal-microscope",
  "electron-microscopy-sem",
  "microscopy-comparative-analysis",
  "optical-telescopes",
  "radio-telescopes",
  "solar-telescopes",
  "ir-uv-telescopes",
  "unit5-activities-rubrics",
  "lab-01-laser-wavelength-grating",
  "lab-02-refractive-index-hollow-prism",
  "lab-03-resolving-power-telescope",
  "lab-04-resolving-power-grating",
  "lab-05-spectrometer-id-curve",
  "lab-06-laser-reflection-grating-scale",
  "lab-07-fiber-numerical-aperture",
  "lab-08-rabi-oscillations-simulation",
  "lab-09-two-lens-power-pairs-plot",
  "lab-10-thick-thin-lens-matrix-focal",
  "lab-11-achromatic-lens-combinations",
  "lab-12-laser-beam-divergence-spot-size",
  "lab-13-malus-law-polarization",
  "lab-14-circular-aperture-airy-disk",
  "lab-15-youngs-double-slit-laser",
  "lab-16-optical-fiber-bending-losses"
];

  // Public API
  window.CurriculumData = {
    getTracks: () => DATA.tracks,
    getCategories: () => DATA.categories,
    getTopics: () => DATA.topics,
    getTopic: (id) => DATA.topics[id] || null,
    getOrderedTopicIds: () => ORDERED_TOPIC_IDS,
    getAdjacentTopics: (id) => {
      const list = ORDERED_TOPIC_IDS;
      const idx = list.indexOf(id);
      if (idx === -1) return { prev: null, next: null };
      return {
        prev: idx > 0 ? DATA.topics[list[idx - 1]] : null,
        next: idx < list.length - 1 ? DATA.topics[list[idx + 1]] : null
      };
    }
  };

})(window);
