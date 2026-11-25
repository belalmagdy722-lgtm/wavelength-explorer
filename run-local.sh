#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Wavelength is running at http://localhost:8000"
echo "Press Ctrl+C to stop the local server."
python3 -m http.server 8000 --bind 127.0.0.1
