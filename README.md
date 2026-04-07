# Morse Transmitter

A small browser-based Morse code app for encoding, decoding, transmitting, scanning, and saving Morse audio.

## Features

- Convert text into Morse code
- Transmit Morse as audio tone, screen flash, and camera torch flash
- Decode Morse from manual dot/dash input
- Live scan Morse from microphone tone or camera light
- Save generated Morse audio as MP3, with WAV fallback
- Install on phone as a standalone web app
- Works basically offline once loaded/installed

## Files

- `index.html` - main app UI and logic
- `manifest.json` - PWA manifest for installability
- `sw.js` - service worker for offline caching
- `lame.min.js` - local MP3 encoder
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` - app icons

## Running It

Open `index.html` in a browser for basic use.

For best results on phone and for install prompts:

- serve it over HTTPS, or
- use a local/dev server that your phone browser accepts

Some browser features, especially camera torch access and install behavior, are more reliable over HTTPS.

## Installing On Phone

Android:

- Open the app in Chrome
- Use `Add to Home screen` or `Install app`

iPhone:

- Open the app in Safari
- Tap Share
- Choose `Add to Home Screen`

## Notes

- MP3 export is generated locally in the browser
- If MP3 encoding is unavailable for any reason, the app falls back to WAV
- Google Fonts are still referenced online, so if those were not already loaded the app may fall back to system fonts when offline

## Development

This is a simple single-file app. Most changes happen in `index.html`.
