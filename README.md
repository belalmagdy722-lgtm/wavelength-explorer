# Wavelength — The Invisible World Around Us

An interactive, responsive, single-page educational website based on the supplied research about electromagnetic radiation and its everyday applications.

## What's included

- Interactive seven-region electromagnetic spectrum selector.
- Live frequency / wavelength / photon-energy calculator.
- Region explorer with separate Everyday Uses, Advantages, and Limitations tabs.
- Everyday-life scenario cards that jump to the matching wave.
- Ionizing vs. non-ionizing explainer.
- Five-question quiz with instant feedback and a final score.
- Responsive mobile navigation, light/dark theme toggle, reading progress, and reduced-motion support.
- Further-reading links to NASA, WHO and the U.S. FDA.

## Run locally

No package manager, build step, backend, database, or API key is required.

1. Download and extract the project folder.
2. Open a terminal inside the folder.
3. On Ubuntu/Linux, run:

   ```bash
   ./run-local.sh
   ```

   Or run `python3 -m http.server 8000` on any system with Python 3.
4. Open `http://localhost:8000` in your browser.

You can also open `index.html` directly, but using the local server is recommended.

## Publish with GitHub Pages (free for public repositories)

1. Sign in to GitHub and create a new repository, for example `wavelength-explorer`.
2. Upload **all files in this folder** to the repository's root (not the containing folder):
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - `README.md`
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then press **Save**.
7. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings. It will look like:

   `https://YOUR-USERNAME.github.io/wavelength-explorer/`

Whenever you push a new commit to the selected branch and folder, GitHub Pages publishes the update.

## Update the project

- Edit page structure and written content in `index.html`.
- Edit visual styling and responsive behavior in `styles.css`.
- Edit wave data, calculator, spectrum selector, interactions and quiz in `app.js`.
- Keep these files together in the repository root so the relative file links continue to work.

## Notes on scientific content

The spectrum values shown in the interactive explorer are representative examples, not strict universal boundaries. Band conventions can overlap and vary by field. The calculator uses `c = f × λ` and `E = h × f` for a wave in a vacuum; it does not simulate absorption by materials or clinical exposure. The safety section is educational and is not personal medical advice.

## References

- NASA — The Electromagnetic Spectrum: https://science.nasa.gov/ems/
- NASA — Electromagnetics: https://science.nasa.gov/learn/basics-of-space-flight/chapter6-2/
- WHO — Ultraviolet Radiation: https://www.who.int/health-topics/ultraviolet-radiation
- U.S. FDA — Medical X-ray Imaging: https://www.fda.gov/radiation-emitting-products/medical-imaging/medical-x-ray-imaging
