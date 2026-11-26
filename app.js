const waves = [
  {
    name: 'Radio Waves', short: 'Radio', symbol: '⌁', color: '#6ca9ff', code: 'REGION 01', kicker: 'THE LONG-WAVE REGION', className: 'RADIO FREQUENCY',
    band: 'From metres to kilometres', wavelength: '1,000 m', frequency: '3.00 × 10⁵ Hz', energy: '1.24 × 10⁻⁹ eV', type: 'Non-ionizing',
    lead: 'The longest wavelengths in the spectrum carry information across cities, oceans and the air around us.',
    description: 'Radio waves have long wavelengths and relatively low frequencies. They are widely used to transmit information wirelessly.',
    uses: [
      ['Broadcast radio & TV', 'Audio and video signals reach receivers without a physical cable.', '◉'],
      ['Mobile communication', 'Radio-frequency signals help phones connect to nearby network antennas.', '▥'],
      ['Aviation & marine links', 'Aircraft and ships use radio systems to exchange important messages.', '✈'],
      ['Wireless services', 'Different radio bands support many forms of wireless communication.', '⌁']
    ],
    benefits: [
      ['Long-range links', 'Some radio frequencies can cover large areas and travel beyond the line of sight.'],
      ['Wireless access', 'Information can be broadcast to many receivers at once.'],
      ['Versatile systems', 'Different frequencies and modulation methods support different services.'],
      ['Useful infrastructure', 'Radio technology is central to broadcasting, navigation and communication.']
    ],
    limits: [
      ['Interference', 'Signals can overlap when systems share or poorly coordinate frequencies.'],
      ['Coverage gaps', 'Buildings, terrain and distance can weaken or block some signals.'],
      ['Limited spectrum', 'Usable frequency bands must be carefully allocated and managed.'],
      ['Security is a system issue', 'Wireless transmissions need suitable encryption and security controls.']
    ],
    note: 'At sufficiently high power, radio-frequency energy can heat body tissue. Exposure limits depend on frequency and conditions.'
  },
  {
    name: 'Microwaves', short: 'Microwave', symbol: ')))', color: '#72d9ee', code: 'REGION 02', kicker: 'THE FOCUSED-WAVE REGION', className: 'MICROWAVE BAND',
    band: 'About 1 mm – 1 m (approx.)', wavelength: '10 cm', frequency: '3.00 × 10⁹ Hz', energy: '1.24 × 10⁻⁵ eV', type: 'Non-ionizing',
    lead: 'Microwaves can move information at high speed — and transfer energy to food in a microwave oven.',
    description: 'Microwaves are commonly treated as a high-frequency part of the radio spectrum. They are used in communication, radar and heating.',
    uses: [
      ['Microwave ovens', 'Ovens use microwave energy to heat food through interactions with polar molecules.', '▤'],
      ['Radar', 'Radar systems send and receive microwave signals to detect objects and measure distance or speed.', '◎'],
      ['Satellite links', 'Directional antennas send focused signals between ground stations and satellites.', '◉'],
      ['Wi-Fi networks', 'Many wireless local-area networks operate in microwave frequency bands.', '⌁']
    ],
    benefits: [
      ['High data capacity', 'Microwave links can carry large amounts of information.'],
      ['Directional beams', 'Antennas can focus energy toward a receiver, reducing unwanted signal spread.'],
      ['Precise detection', 'Radar uses reflected microwave signals to locate and track objects.'],
      ['Practical heating', 'Microwave ovens heat food quickly and conveniently.']
    ],
    limits: [
      ['Obstacles matter', 'Walls and dense materials can weaken some microwave signals.'],
      ['Rain fade', 'Heavy rain can attenuate certain higher-frequency microwave links.'],
      ['Line-of-sight links', 'Many point-to-point systems need a clear path between antennas.'],
      ['Heating at high power', 'Strong exposure can heat tissue; equipment must meet safety standards.']
    ],
    note: 'Microwaves are non-ionizing. The main established biological interaction at high intensities is heating, not direct ionization.'
  },
  {
    name: 'Infrared Radiation', short: 'Infrared', symbol: '≈', color: '#ff9b79', code: 'REGION 03', kicker: 'THE HEAT-SENSING REGION', className: 'INFRARED BAND',
    band: 'About 700 nm – 1 mm', wavelength: '10 μm', frequency: '3.00 × 10¹³ Hz', energy: '0.124 eV', type: 'Non-ionizing',
    lead: 'You may not see infrared, but you can feel some of its effects as warmth — and cameras can turn it into an image.',
    description: 'Infrared lies just beyond red light. Warm objects emit infrared radiation, and different IR bands are useful for sensing and communication.',
    uses: [
      ['Remote controls', 'Many remotes send short pulses of infrared light to a device sensor.', '⌁'],
      ['Thermal imaging', 'Thermal cameras detect infrared radiation and map temperature differences.', '◒'],
      ['Night vision', 'Some imaging systems use infrared to reveal scenes in low visible light.', '◉'],
      ['Weather & industry', 'Infrared sensors help monitor clouds, temperature and equipment.', '⌂']
    ],
    benefits: [
      ['See temperature patterns', 'Thermal imaging can reveal heat loss, hot components and temperature changes.'],
      ['Contact-free sensing', 'IR sensors can measure temperature without touching an object.'],
      ['Simple control links', 'Infrared is useful for short-range device communication.'],
      ['Useful in research', 'Different IR wavelengths help scientists study objects and materials.']
    ],
    limits: [
      ['Line of sight', 'Many IR communication systems need a clear path to the receiver.'],
      ['Short range', 'Common remote-control links work over relatively short distances.'],
      ['Environmental effects', 'Water vapour and other materials absorb parts of the infrared spectrum.'],
      ['Intense sources', 'Strong IR exposure can heat tissue and may injure eyes or skin.']
    ],
    note: 'Infrared is non-ionizing. A thermal camera detects infrared radiation; it does not photograph heat itself.'
  },
  {
    name: 'Visible Light', short: 'Visible', symbol: '✦', color: '#d5cf83', code: 'REGION 04', kicker: 'THE VISIBLE REGION', className: 'VISIBLE BAND',
    band: 'About 380–700 nm', wavelength: '550 nm', frequency: '5.45 × 10¹⁴ Hz', energy: '2.25 eV', type: 'Non-ionizing',
    lead: 'The small part of the electromagnetic spectrum that human eyes can detect — the reason the world has colour.',
    description: 'Visible light is the portion of the spectrum our eyes can detect. Different wavelengths are perceived as different colours.',
    uses: [
      ['Vision & lighting', 'Natural and artificial visible light lets us see our surroundings.', '☼'],
      ['Screens & displays', 'Phones, televisions and computers use visible light to show images.', '▣'],
      ['Photography', 'Cameras capture light to create photographs and video.', '◉'],
      ['Endoscopy', 'Optical fibres can carry visible light into the body to illuminate internal organs.', '✚']
    ],
    benefits: [
      ['Enables vision', 'Visible light makes everyday sight and colour perception possible.'],
      ['Efficient lighting', 'Modern LEDs provide useful illumination with relatively low energy use.'],
      ['Imaging & diagnosis', 'Cameras and optical instruments turn light into useful information.'],
      ['Optical communication', 'Light-based systems can carry information through optical fibres.']
    ],
    limits: [
      ['Glare & eye strain', 'Very bright light can cause discomfort and reduce visibility.'],
      ['Light pollution', 'Excessive outdoor lighting can affect wildlife and hide the night sky.'],
      ['Sleep timing', 'Bright light at night can influence the body clock.'],
      ['Sun exposure', 'Sunlight also contains ultraviolet radiation, which has separate health risks.']
    ],
    note: 'Visible light itself is non-ionizing. Risks depend on brightness, exposure and the source; never look directly at the Sun or powerful lasers.'
  },
  {
    name: 'Ultraviolet Radiation', short: 'Ultraviolet', symbol: '☼', color: '#b68cff', code: 'REGION 05', kicker: 'THE ULTRAVIOLET REGION', className: 'UV BAND',
    band: 'About 100–400 nm', wavelength: '100 nm', frequency: '3.00 × 10¹⁵ Hz', energy: '12.4 eV', type: 'Higher-energy / UV',
    lead: 'Ultraviolet is invisible to human eyes. It supports some useful processes, but too much exposure can harm skin and eyes.',
    description: 'UV radiation has shorter wavelengths than visible light. It is divided into UVA, UVB and UVC bands, which interact with the body differently.',
    uses: [
      ['Vitamin D production', 'UVB from sunlight helps the skin produce vitamin D.', '☼'],
      ['Phototherapy', 'Controlled UV treatment is used for some skin conditions under medical supervision.', '✚'],
      ['Disinfection', 'Germicidal UVC systems can inactivate microorganisms in air, water and on surfaces.', '✧'],
      ['Forensic & industrial work', 'UV light can reveal some fluorescent materials and help cure inks or coatings.', '⌕']
    ],
    benefits: [
      ['Vitamin D', 'UVB exposure contributes to the skin’s vitamin D production.'],
      ['Medical treatment', 'Carefully controlled phototherapy can help treat selected skin conditions.'],
      ['Disinfection', 'Appropriately designed UVC systems can reduce microbes.'],
      ['Material processing', 'UV curing is used for inks, adhesives and coatings.']
    ],
    limits: [
      ['Sunburn & ageing', 'Excessive UVA and UVB exposure can damage skin.'],
      ['Skin-cancer risk', 'UV exposure is a known risk factor for skin cancer.'],
      ['Eye injury', 'UV can damage the eyes, including the cornea and lens.'],
      ['Artificial UVC hazards', 'Germicidal UVC sources can injure skin and eyes if used incorrectly.']
    ],
    note: 'Avoid unprotected UV exposure. Use shade, clothing, sunglasses and sunscreen as appropriate; never look directly at a UV source.'
  },
  {
    name: 'X-Rays', short: 'X-ray', symbol: '✚', color: '#7db8ff', code: 'REGION 06', kicker: 'THE X-RAY REGION', className: 'X-RAY BAND',
    band: 'About 0.01–10 nm (approx.)', wavelength: '0.1 nm', frequency: '3.00 × 10¹⁸ Hz', energy: '12.4 keV', type: 'Ionizing',
    lead: 'X-rays pass through soft tissue more easily than bone — allowing doctors and engineers to inspect what cannot be seen from the outside.',
    description: 'X-rays are high-energy electromagnetic waves with short wavelengths. They can penetrate matter and are used in imaging and inspection.',
    uses: [
      ['Medical imaging', 'Radiography and CT help clinicians examine bones, organs and other internal structures.', '✚'],
      ['Dental imaging', 'Dental X-rays help assess teeth, roots and jaw structures.', '▤'],
      ['Security screening', 'X-ray scanners inspect luggage and cargo at controlled checkpoints.', '⌕'],
      ['Industrial inspection', 'Radiography can reveal internal defects in welds and components.', '⚙']
    ],
    benefits: [
      ['Non-invasive views', 'X-rays can reveal internal structures without surgery.'],
      ['Fast diagnosis', 'Many examinations produce images quickly.'],
      ['Treatment guidance', 'Imaging can help plan or guide certain medical procedures.'],
      ['Beyond medicine', 'Industrial radiography can inspect materials without cutting them open.']
    ],
    limits: [
      ['Ionizing radiation', 'X-ray photons can damage DNA; risk depends on the dose and exposure.'],
      ['Unnecessary repeats', 'Imaging should be justified and duplicate examinations avoided when possible.'],
      ['Dose optimization', 'The lowest dose that gives adequate image quality should be used.'],
      ['Special circumstances', 'Pregnancy and paediatric imaging require careful clinical consideration.']
    ],
    note: 'A medically justified X-ray exam usually has benefits that outweigh its small radiation risk. Clinicians apply justification and dose-optimization principles.'
  },
  {
    name: 'Gamma Rays', short: 'Gamma', symbol: 'γ', color: '#ff83bd', code: 'REGION 07', kicker: 'THE HIGHEST-ENERGY REGION', className: 'GAMMA-RAY BAND',
    band: 'Shortest wavelengths in the spectrum', wavelength: '0.001 nm', frequency: '3.00 × 10²⁰ Hz', energy: '1.24 MeV', type: 'Ionizing',
    lead: 'Gamma rays are extremely energetic. In carefully controlled settings, that energy can treat disease, sterilize equipment and inspect dense materials.',
    description: 'Gamma rays are high-energy electromagnetic radiation commonly produced in nuclear transitions and other energetic processes.',
    uses: [
      ['Cancer treatment', 'Radiotherapy uses carefully planned high-energy radiation to damage targeted tumour cells.', '✚'],
      ['Medical sterilization', 'Gamma irradiation can sterilize selected medical supplies and devices.', '✧'],
      ['Food irradiation', 'Controlled irradiation can reduce harmful microbes and pests in some foods.', '◇'],
      ['Industrial radiography', 'Gamma sources can inspect thick metal components and welds.', '⚙']
    ],
    benefits: [
      ['Targeted treatment', 'Radiotherapy can deliver high doses to a defined treatment area.'],
      ['Sterilization', 'Gamma rays can reach packaged products and reduce microbial contamination.'],
      ['Food safety', 'Approved food-irradiation processes can help control pests and pathogens.'],
      ['Deep inspection', 'Industrial radiography can reveal internal flaws in dense structures.']
    ],
    limits: [
      ['Cell and DNA damage', 'Gamma rays are ionizing and can damage healthy as well as diseased tissue.'],
      ['Shielding needed', 'Appropriate shielding, access controls and monitoring are essential.'],
      ['Source management', 'Radioactive sources require strict handling, storage and disposal procedures.'],
      ['Exposure cannot be sensed', 'People cannot see or feel gamma rays, so instruments are needed to detect them.']
    ],
    note: 'Gamma sources require specialist controls. Medical and industrial uses follow strict procedures to manage dose and protect workers and the public.'
  }
];

const qs = [
  { category: 'SPECTRUM BASICS', question: 'Which region has the longest wavelengths?', options: ['Gamma rays', 'Radio waves', 'Visible light', 'X-rays'], answer: 1, why: 'Radio waves sit at the long-wavelength, low-frequency end of the electromagnetic spectrum.' },
  { category: 'EVERYDAY TECHNOLOGY', question: 'Which type of radiation is commonly used by a TV remote control?', options: ['Infrared', 'Ultraviolet', 'Gamma rays', 'X-rays'], answer: 0, why: 'Many remote controls send coded pulses of infrared light to a sensor on the device.' },
  { category: 'ENERGY & WAVES', question: 'When frequency increases, what happens to wavelength in a vacuum?', options: ['It gets longer', 'It stays the same', 'It gets shorter', 'It disappears'], answer: 2, why: 'The wave equation is c = f × λ. With a fixed speed of light, higher frequency means shorter wavelength.' },
  { category: 'HEALTH & SAFETY', question: 'Which pair contains ionizing electromagnetic radiation?', options: ['Radio and microwave', 'Infrared and visible', 'Visible and ultraviolet', 'X-rays and gamma rays'], answer: 3, why: 'X-rays and gamma rays have enough photon energy to ionize atoms and molecules.' },
  { category: 'REAL-WORLD APPLICATIONS', question: 'Which wave is used in thermal cameras to map temperature differences?', options: ['Radio waves', 'Infrared', 'Ultraviolet', 'Gamma rays'], answer: 1, why: 'Thermal cameras detect infrared radiation emitted by objects and convert it into a temperature-pattern image.' }
];

let selectedWave = 3;
let activeTab = 'uses';
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function formatScientific(value, digits = 2) {
  if (!Number.isFinite(value) || value === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / Math.pow(10, exp);
  return `${mantissa.toFixed(digits)} × 10${toSuperscript(exp)}`;
}
function toSuperscript(value) {
  const map = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
  return String(value).split('').map(char => map[char] || char).join('');
}
function prettyWavelength(metres) {
  if (metres >= 1000) return `${(metres / 1000).toPrecision(3)} km`;
  if (metres >= 1) return `${metres.toPrecision(3)} m`;
  if (metres >= 1e-2) return `${(metres * 100).toPrecision(3)} cm`;
  if (metres >= 1e-3) return `${(metres * 1000).toPrecision(3)} mm`;
  if (metres >= 1e-6) return `${(metres * 1e6).toPrecision(3)} μm`;
  if (metres >= 1e-9) return `${(metres * 1e9).toPrecision(3)} nm`;
  if (metres >= 1e-12) return `${(metres * 1e12).toPrecision(3)} pm`;
  return `${formatScientific(metres, 2)} m`;
}
function formatEV(ev) {
  if (ev >= 1e6) return `${(ev / 1e6).toPrecision(3)} MeV`;
  if (ev >= 1e3) return `${(ev / 1e3).toPrecision(3)} keV`;
  if (ev >= 1) return `${ev.toPrecision(3)} eV`;
  if (ev >= 1e-3) return `${(ev * 1e3).toPrecision(3)} meV`;
  return `${formatScientific(ev, 2)} eV`;
}

function drawWavePath(pathElement, cycles, width, height, phase = 0) {
  const mid = height / 2;
  const amplitude = height * .32;
  let d = '';
  const steps = 360;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = mid - Math.sin((i / steps) * Math.PI * 2 * cycles + phase) * amplitude;
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  pathElement.setAttribute('d', d);
}

// ---- Motion: travelling waves and state-change transitions ----
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const liveWaves = {};
let waveFrame = 0;
let lastFrame = 0;
function setLiveWave(key, path, cycles, width, height) {
  const wave = liveWaves[key] || (liveWaves[key] = { path, cycles, phase: 0, visible: true });
  Object.assign(wave, { path, target: cycles, width, height });
  if (reducedMotion.matches) { wave.cycles = cycles; drawWavePath(path, cycles, width, height, wave.phase); return; }
  if (!wave.observed && 'IntersectionObserver' in window) {
    wave.observed = true;
    new IntersectionObserver(entries => entries.forEach(entry => { wave.visible = entry.isIntersecting; })).observe(path.closest('svg'));
  }
  if (!waveFrame) { lastFrame = performance.now(); waveFrame = requestAnimationFrame(animateWaves); }
}
function animateWaves(now) {
  const dt = Math.min(.05, (now - lastFrame) / 1000);
  lastFrame = now;
  Object.values(liveWaves).forEach(wave => {
    if (!wave.visible) return;
    wave.cycles += (wave.target - wave.cycles) * Math.min(1, dt * 7);
    // Phase rate scales with cycles, so every wave crosses the screen at the same speed, like light.
    wave.phase -= wave.cycles * .9 * dt;
    drawWavePath(wave.path, wave.cycles, wave.width, wave.height, wave.phase);
  });
  waveFrame = reducedMotion.matches ? 0 : requestAnimationFrame(animateWaves);
}
if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', () => {
  Object.values(liveWaves).forEach(wave => { wave.cycles = wave.target; drawWavePath(wave.path, wave.cycles, wave.width, wave.height, wave.phase); });
  if (!reducedMotion.matches && !waveFrame) { lastFrame = performance.now(); waveFrame = requestAnimationFrame(animateWaves); }
});
function replay(elements, className = 'is-swapping') {
  if (reducedMotion.matches) return;
  elements.forEach(el => {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  });
}

function initSpectrum() {
  const nodes = $('#spectrumNodes');
  const selector = $('#spectrumSelector');
  nodes.innerHTML = waves.map((wave, index) => `<button class="spectrum-node" type="button" data-wave="${index}" style="--node-color:${wave.color}" aria-label="Select ${wave.name}"><span>${wave.short}</span></button>`).join('');
  selector.innerHTML = waves.map((wave, index) => `<button class="selector-dot" type="button" data-wave="${index}" style="--dot-color:${wave.color}" aria-label="Select ${wave.name}" title="${wave.name}"><span></span></button>`).join('');
  $$('.spectrum-node, .selector-dot').forEach(button => button.addEventListener('click', () => selectSpectrum(Number(button.dataset.wave))));
  selectSpectrum(selectedWave);
}
function selectSpectrum(index) {
  selectedWave = Math.max(0, Math.min(waves.length - 1, index));
  const wave = waves[selectedWave];
  $$('.spectrum-node, .selector-dot').forEach(button => button.classList.toggle('active', Number(button.dataset.wave) === selectedWave));
  $('#selectedRegionName').textContent = wave.name;
  $('#selectedRegionName').style.color = wave.color;
  $('#selectedRegionTag').textContent = wave.description;
  $('#regionTitle').textContent = wave.name;
  $('#regionDescription').textContent = wave.lead;
  $('#regionWavelength').textContent = wave.wavelength;
  $('#regionFrequency').textContent = wave.frequency;
  $('#regionEnergy').textContent = wave.energy;
  setLiveWave('spectrum', $('#spectrumWavePath'), 2.2 + selectedWave * 3.7, 1000, 180);
  replay([$('.spectrum-control-copy'), $('.detail-main'), ...$$('.detail-stat strong')]);
}

function makeIllustration(index) {
  const commonStart = '<svg viewBox="0 0 360 300" role="img" aria-label="Abstract illustration of the selected wave type">';
  const commonEnd = '</svg>';
  const art = [
    `<path class="illustration-muted" d="M34 242H326M83 242L178 70l95 172M110 191h136M129 156h98M148 122h60M178 70v172M150 119l-30 123M207 119l30 123"/><path class="illustration-stroke" d="M178 71v-18m-12 18h24m-6-22 6 4m-14-4-6 4"/><path class="illustration-stroke" d="M146 64c-43 23-43 65 0 88M210 64c43 23 43 65 0 88M126 42c-66 37-66 107 0 144M230 42c66 37 66 107 0 144"/><circle class="illustration-fill" cx="178" cy="51" r="5"/>`,
    `<path class="illustration-muted" d="M180 251V90M55 251h250"/><path class="illustration-stroke" d="M180 91c-54-21-94 10-94 53 0 43 40 74 94 53 54-21 94-10 94-53 0-43-40-74-94-53Z"/><path class="illustration-fill" d="M95 139c0-43 38-74 85-48 47-26 85 5 85 48s-38 74-85 48c-47 26-85-5-85-48Z"/><path class="illustration-stroke" d="M180 90v112M181 139l100-35M281 104l-10 1m10-1-4 10"/><path class="illustration-stroke" d="M282 104 324 87M282 104 324 122"/>`,
    `<path class="illustration-muted" d="M47 243h266M73 243V160l105-63 109 63v83"/><path class="illustration-stroke" d="M73 160 178 97l109 63M102 180h150v63H102z"/><path class="illustration-fill" d="M128 198h30v45h-30zM184 185h42v33h-42z"/><path class="illustration-stroke" d="M111 137c-24-18-24-40 0-58m-19 76c-39-30-39-68 0-98M245 137c24-18 24-40 0-58m19 76c39-30 39-68 0-98"/><path class="illustration-stroke" d="M178 75c-12-20-10-38 0-50 11 12 13 30 0 50Z"/>`,
    `<path class="illustration-muted" d="M180 40v220M45 150h270"/><path class="illustration-stroke" d="M66 90 180 222 294 90"/><path class="illustration-fill" d="M66 90h228L180 222Z"/><path class="illustration-stroke" d="M66 90 180 222 294 90"/><path d="M180 222 294 90h28l-142 170Z" fill="url(#rainbowGlow)" opacity=".85"/><defs><linearGradient id="rainbowGlow" x1="0" x2="1"><stop stop-color="#7c8cff"/><stop offset=".25" stop-color="#67d9ec"/><stop offset=".5" stop-color="#8ce2a8"/><stop offset=".72" stop-color="#f3df87"/><stop offset="1" stop-color="#ff8caa"/></linearGradient></defs><path class="illustration-stroke" d="M44 76h90m-90 0 16-9m-16 9 16 9"/>`,
    `<circle class="illustration-fill" cx="180" cy="147" r="47"/><path class="illustration-stroke" d="M180 25v35m0 174v35M58 147h35m174 0h35M94 61l25 25m122 122 25 25M266 61l-25 25M119 208l-25 25"/><path class="illustration-stroke" d="M180 98c-25 0-44 20-44 45 0 22 19 47 44 47s44-25 44-47c0-25-19-45-44-45Z"/><path class="illustration-muted" d="M145 151c14-14 28-14 42 0s28 14 42 0"/><path class="illustration-stroke" d="M180 112v68"/>`,
    `<path class="illustration-muted" d="M180 36v225M90 150h180"/><path class="illustration-stroke" d="M137 85c16-15 70-15 86 0v122c-16 15-70 15-86 0Z"/><path class="illustration-stroke" d="M137 110c-20 0-28 13-28 25s8 25 28 25m86-50c20 0 28 13 28 25s-8 25-28 25M143 125h74m-74 19h74m-74 19h74m-74 19h74"/><path class="illustration-fill" d="M152 73h56v150h-56z" opacity=".15"/><path class="illustration-stroke" d="M122 82 90 51m148 31 32-31M122 219 90 250m148-31 32 31"/>`,
    `<circle class="illustration-fill" cx="180" cy="150" r="22"/><circle class="illustration-stroke" cx="180" cy="150" r="62"/><circle class="illustration-muted" cx="180" cy="150" r="101"/><circle class="illustration-muted" cx="180" cy="150" r="132"/><path class="illustration-stroke" d="M180 18c21 28 21 52 0 75-21-23-21-47 0-75Zm132 132c-28 21-52 21-75 0 23-21 47-21 75 0ZM180 282c-21-28-21-52 0-75 21 23 21 47 0 75ZM48 150c28-21 52-21 75 0-23 21-47 21-75 0Z"/><path class="illustration-stroke" d="M180 150 269 62m-89 88 83 93m-83-93L91 62m89 88-83 93"/>`
  ];
  return commonStart + art[index] + commonEnd;
}

function initWaveExplorer() {
  $('#waveList').innerHTML = waves.map((wave, index) => `<button class="wave-list-item" type="button" role="tab" aria-selected="false" data-wave="${index}" style="--wave-color:${wave.color}"><span class="wave-list-number">0${index + 1}</span><span class="wave-list-symbol">${wave.symbol}</span><span class="wave-list-title">${wave.short}</span><span class="wave-list-arrow">↗</span></button>`).join('');
  $$('.wave-list-item').forEach(button => button.addEventListener('click', () => selectWave(Number(button.dataset.wave))));
  $$('.wave-tab').forEach(button => button.addEventListener('click', () => { activeTab = button.dataset.tab; renderWaveTab(); }));
  $('#prevWave').addEventListener('click', () => selectWave((selectedWave + waves.length - 1) % waves.length));
  $('#nextWave').addEventListener('click', () => selectWave((selectedWave + 1) % waves.length));
  selectWave(selectedWave);
}
function selectWave(index) {
  selectedWave = (index + waves.length) % waves.length;
  const wave = waves[selectedWave];
  $$('.wave-list-item').forEach(button => {
    const active = Number(button.dataset.wave) === selectedWave;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  $('#waveVisual').style.setProperty('--wave-color', wave.color);
  $('#waveKicker').textContent = wave.kicker;
  $('#waveName').textContent = wave.name;
  $('#waveNumber').textContent = `0${selectedWave + 1} / 07`;
  $('#waveLead').textContent = wave.lead;
  $('#waveBand').textContent = wave.band;
  $('#waveEnergyType').textContent = wave.type;
  $('#visualWaveCode').textContent = wave.code;
  $('#visualWaveSymbol').textContent = wave.symbol;
  $('#visualWaveClass').textContent = wave.className;
  $('#waveIllustration').innerHTML = makeIllustration(selectedWave);
  $$('#waveIllustration .illustration-stroke').forEach(shape => shape.setAttribute('pathLength', '1'));
  replay([$('.wave-title-row'), $('#waveLead'), $('.wave-meta-grid'), $('#waveIllustration'), $('.visual-caption')]);
  $$('.wave-tab').forEach(button => button.classList.toggle('active', button.dataset.tab === activeTab));
  renderWaveTab();
  selectSpectrum(selectedWave);
}
function renderWaveTab() {
  const wave = waves[selectedWave];
  replay([$('#waveTabContent')]);
  $$('.wave-tab').forEach(button => button.classList.toggle('active', button.dataset.tab === activeTab));
  const list = wave[activeTab];
  const content = $('#waveTabContent');
  if (activeTab === 'uses') {
    content.innerHTML = `<div class="info-grid">${list.map(([title, desc]) => `<div class="info-tile info-tile-plain"><div><strong>${title}</strong><p>${desc}</p></div></div>`).join('')}</div>`;
  } else {
    content.innerHTML = `<div class="info-grid">${list.map(([title, desc], index) => `<div class="info-tile"><span class="info-icon">${activeTab === 'benefits' ? '＋' : '!'}</span><div><strong>${title}</strong><p>${desc}</p></div></div>`).join('')}</div><p class="fine-print">${wave.note}</p>`;
  }
}

function getBandName(exponent) {
  if (exponent < 7) return 0;
  if (exponent < 12) return 1;
  if (exponent < 14.35) return 2;
  if (exponent < 15.1) return 3;
  if (exponent < 16.4) return 4;
  if (exponent < 19.5) return 5;
  return 6;
}
function updateLab() {
  const exponent = Number($('#frequencySlider').value);
  const frequency = Math.pow(10, exponent);
  const c = 299792458;
  const h = 6.62607015e-34;
  const wavelength = c / frequency;
  const energyEv = h * frequency / 1.602176634e-19;
  const index = getBandName(exponent);
  const wave = waves[index];
  $('#frequencyReadout').textContent = `10${toSuperscript(exponent.toFixed(1).replace(/\.0$/, ''))}`;
  $('#frequencyReadout').style.color = wave.color;
  $('#calcWavelength').textContent = prettyWavelength(wavelength);
  $('#calcEnergy').textContent = formatEV(energyEv);
  $('#labTipText').textContent = `You are in the ${wave.name.toLowerCase()} region — ${wave.description.toLowerCase()}`;
  $('#calcInsight').textContent = `At ${formatScientific(frequency, 1)} Hz, the wavelength is ${prettyWavelength(wavelength)}. Move right to increase photon energy and shorten the wavelength.`;
  $('#frequencySlider').style.background = `linear-gradient(90deg, ${wave.color}, #b68cff)`;
  const cycles = Math.max(1.2, Math.min(24, (exponent - 2) * 1.35));
  setLiveWave('lab', $('#labWavePath'), cycles, 600, 130);
}

function initMissions() {
  $$('.mission-card').forEach(button => button.addEventListener('click', () => {
    selectWave(Number(button.dataset.wave));
    $('#daily-life').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    setTimeout(() => replay([$('.wave-list-item.active')], 'is-arriving'), 450);
  }));
}

const ionData = {
  non: {
    color: '#64e6e0', visual: 'NON-IONIZING', kicker: 'LOWER PHOTON ENERGY', title: 'Enough to excite or heat.<br /><em>Not enough to ionize.</em>',
    description: 'Radio waves, microwaves, infrared and visible light are non-ionizing. At sufficiently high intensities, some can still heat tissue or damage eyes and skin.',
    bands: ['Radio', 'Microwave', 'Infrared', 'Visible'],
    note: 'Risk depends on the source, intensity, exposure time and the body part exposed — not just the name of the wave.'
  },
  ion: {
    color: '#ff83bd', visual: 'IONIZING', kicker: 'HIGHER PHOTON ENERGY', title: 'Enough to remove electrons.<br /><em>Handle with care.</em>',
    description: 'Higher-energy ultraviolet, X-rays and gamma rays can ionize atoms. Ionizing radiation can damage cells and DNA, so exposure is managed using justification, time, distance and shielding.',
    bands: ['Some UV', 'X-rays', 'Gamma rays'],
    note: 'Ionizing radiation has important medical and industrial uses. Risk is dose-dependent, and trained professionals follow safety procedures.'
  }
};
function setIonMode(mode) {
  const data = ionData[mode];
  $$('.ion-switch button').forEach(button => button.classList.toggle('active', button.dataset.ion === mode));
  $('#ionVisualTag').textContent = data.visual;
  $('#ionVisualTag').style.color = data.color;
  $('#ionKicker').textContent = data.kicker;
  $('#ionTitle').innerHTML = data.title;
  $('#ionDescription').textContent = data.description;
  $('#ionBands').innerHTML = data.bands.map(band => `<span>${band}</span>`).join('');
  $('#ionNote').textContent = data.note;
  replay([$('#ionKicker'), $('#ionTitle'), $('#ionDescription'), $('#ionBands'), $('#ionNote'), $('#ionVisualTag')]);
  $('.ion-nucleus').style.background = data.color;
  $('.ion-nucleus').style.boxShadow = `0 0 0 9px color-mix(in srgb, ${data.color} 12%, transparent), 0 0 35px ${data.color}`;
  $('.ion-orbit').style.borderColor = `color-mix(in srgb, ${data.color} 55%, transparent)`;
}
function initIonization() { $$('.ion-switch button').forEach(button => button.addEventListener('click', () => setIonMode(button.dataset.ion))); setIonMode('non'); }

function renderQuiz() {
  const item = qs[quizIndex];
  quizAnswered = false;
  $('#quizCounter').textContent = `QUESTION 0${quizIndex + 1} / 05`;
  $('#quizScoreLabel').textContent = `SCORE ${quizScore}`;
  $('#quizProgressFill').style.width = `${(quizIndex / qs.length) * 100 + 20}%`;
  $('#quizCategory').textContent = item.category;
  $('#quizQuestion').textContent = item.question;
  $('#quizHint').textContent = 'ONE ANSWER · TAKE YOUR TIME';
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz-feedback';
  $('#quizNext').disabled = true;
  $('#quizNext').innerHTML = quizIndex === qs.length - 1 ? 'See your result <span>→</span>' : 'Next question <span>→</span>';
  $('#quizOptions').innerHTML = item.options.map((option, index) => `<button type="button" class="quiz-option" data-option="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join('');
  $$('.quiz-option').forEach(button => button.addEventListener('click', () => answerQuiz(Number(button.dataset.option))));
  replay([$('.quiz-question-area')]);
}
function answerQuiz(choice) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = qs[quizIndex];
  const correct = choice === item.answer;
  if (correct) quizScore++;
  $$('.quiz-option').forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add('correct');
    if (index === choice && !correct) button.classList.add('incorrect');
  });
  $('#quizScoreLabel').textContent = `SCORE ${quizScore}`;
  $('#quizFeedback').textContent = `${correct ? '✓ Correct. ' : 'Not quite. '} ${item.why}`;
  $('#quizFeedback').className = `quiz-feedback ${correct ? 'good' : 'bad'}`;
  replay([$('#quizFeedback')]);
  $('#quizHint').textContent = correct ? 'NICE ONE · KEEP GOING' : 'GOOD TRY · LEARNING IS THE POINT';
  $('#quizNext').disabled = false;
  $('#quizProgressFill').style.width = `${((quizIndex + 1) / qs.length) * 100}%`;
}
function finishQuiz() {
  $('#quizCard').hidden = true;
  $('#quizResult').hidden = false;
  replay([$('#quizResult')]);
  const percent = quizScore / qs.length;
  $('#quizFinalTitle').textContent = percent === 1 ? 'Perfect signal.' : percent >= .6 ? 'You’re tuned in.' : 'Curiosity is a great start.';
  $('#quizFinalText').textContent = `You got ${quizScore} out of ${qs.length} correct. ${percent >= .8 ? 'You have a strong grasp of the spectrum.' : 'Explore the wave cards again and give it another go.'}`;
}
function initQuiz() {
  renderQuiz();
  $('#quizNext').addEventListener('click', () => {
    if (!quizAnswered) return;
    if (quizIndex === qs.length - 1) finishQuiz();
    else { quizIndex++; renderQuiz(); }
  });
  $('#quizRestart').addEventListener('click', () => {
    quizIndex = 0; quizScore = 0;
    $('#quizCard').hidden = false; $('#quizResult').hidden = true;
    renderQuiz();
  });
}

function initTheme() {
  const saved = localStorage.getItem('wavelength-theme');
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('wavelength-theme', next);
  });
}
function initNavigation() {
  const menu = $('.topnav');
  $('#menuToggle').addEventListener('click', () => menu.classList.toggle('open'));
  $$('.topnav a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const back = $('#backToTop');
  const update = () => {
    back.classList.toggle('visible', window.scrollY > 700);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
  const sections = ['spectrum','daily-life','safety','quiz'].map(id => document.getElementById(id));
  const navLinks = $$('.topnav a');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }
}

initSpectrum();
initWaveExplorer();
initMissions();
initIonization();
initQuiz();
initTheme();
initNavigation();
$('#frequencySlider').addEventListener('input', updateLab);
updateLab();
