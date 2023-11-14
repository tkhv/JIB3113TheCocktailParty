# Label | Me | Audio

_From The Cocktail Party - CS 3311 Junior Design Team 3113_

# What does this do?

This is an Audio Labeling tool meant to ease access and collaboration on Label data. This project is meant to be hosted and built with an AWS Amplify backend for Data storage. This can be used to prepare raw audio data for training data.

# Release Notes

### Version 0.4.0

**New Features**

- Spectrograms have a wider color range
- Overhauled UI to be closer to Audacity
- Can now add and remove labels
- Added a labelling area to visually edit labels
- Can loop over labelled segments

**Known Issues**

- Hotkeys and undo/redo are still disabled for debugging
- Spectrogram needs to be draggable to be resized vertically

### Version 0.3.0

**New Features**

- Can now navigate to spectrogram from home page and nav bar
- Added labelling
- Added playback looping
- Added dictionary
- Added zooming into spectrogram
- Added volume and speed display for spectrogram

**Known Issues**

- Hotkeys and undo/redo are temporarily disabled for debugging

### Version 0.2.0

**New Features**

- Broke apart spectrogram into a viewer component and a spectrogram component
- Spectrogram component is now able to load and display SVG spectrograms, play audio, and set volume & playback rate.
- Added buttons for all audio controls.
- Added timeline for audio player

**Known Issues**

- Current SVG loading method does not support zooming in

### Version 0.1.0

**New Features**

- Added viewport for spectrogram.
- Added components for timescale.
- Added components for editable tags.

**Known Issues**

- "Spectrogram.js" component must be refactored to be referred to as "Viewport.js" to remove ambiguitiy.

## Getting Started

- Contact AWS Admins for login info

### For Local Deployment

1.  Install [NPM and Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2.  Change your present working directory to ./junior-design/amplifyapp
3.  In your Terminal/Command Line enter

        npm install

    That will install all dependecies required by the project.

4.  Configure CLI

        npx amplify configure

5.  Initialize the amplify environment and project

        npx amplify init

6.  Now pull your the AWS Amplify backend environment from AWS

    Example:

        npx amplfiy pull --appId abcdefghjklmnop --envName staging

    The <code> --appId </code> and <code> --envName</code> arguments for the latest build may differ. Refer to AudioT admins for specific amplify details.

### The project will then be ready for adding features!

Credit: [From this aws tutorial](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-two/)
