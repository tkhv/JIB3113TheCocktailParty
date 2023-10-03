JIB3113 The Cocktail Party - Repo for Junior Design, Fall 2023

# Release Notes

### Version 0.1.0
**New Features**
- Added viewport for spectrogram.
- Added components for timescale.
- Added components for editable tags.

**Known Issues**
- "Spectrogram.js" component must be refactored to be referred to as "Viewport.js" to remove ambiguitiy.

### Version 0.2.0
**New Features**
- Broke apart spectrogram into a viewer component and a spectrogram component
- Spectrogram component is now able to load and display SVG spectrograms, play audio, and set volume & playback rate.
- Added buttons for all audio controls.
- Added timeline for audio player

**Known Issues**
- Current SVG loading method does not support zooming in