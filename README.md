# nativescript-animated-circle

[![npm](https://img.shields.io/npm/v/nativescript-animated-circle.svg)](https://www.npmjs.com/package/nativescript-animated-circle)
[![npm](https://img.shields.io/npm/dt/nativescript-animated-circle.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-animated-circle)

[![NPM](https://nodei.co/npm/nativescript-animated-circle.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-animated-circle/)

Creates an animated circle (animates the border of the circle) on iOS and Android.

| iOS | Android |
| --- | --- |
|<img height="520" src="https://user-images.githubusercontent.com/13732623/31305683-871c586c-ab0d-11e7-8afb-321960664439.png">|<img height="400" src="https://user-images.githubusercontent.com/13732623/31305686-ab5c4444-ab0d-11e7-9525-81f77c2c6689.png"> |

## Installation

```
tns plugin add nativescript-animated-circle
```

## Usage

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ui="nativescript-animated-circle">
    <ui:AnimatedCircle
        backgroundColor="transparent"
        width="200"
        height="200"
        animated="true"
        animateFrom="0"
        rimColor="#FF5722"
        barColor="#3D8FF4"
        fillColor="#eee"
        clockwise="true"
        rimWidth="5"
        progress="80" />
</Page>
```

## API

| Property | Default | Description |
| --- | --- | --- |
| rimColor | #FF5722 | The filled portion of the circle border's color. |
| barColor | #3D8FF4 | The remaining (unfilled) portion of the circle border. |
| clockwise | true | The CW (true) or CCW (false) draw direction. |
| rimWidth | 5 | The border radius of the circle. |
| progress | 0 | The current progress value. |
| startAngle | 0 | The angle to start drawing from. |
| endAngle | 100 | _iOS only_ the end angle to stop drawing at. |
| animated | false | _Android only_ animation status. |
| animateFrom | 0 | _Android only_ the progress value to animate from. |
| animationDuration | 1000 | _Android only_ the duration to animate for. |

### Available for Contract

Need velocity on your NativeScript projects? I'm available to build beautiful and performant NativeScript applications for your business requirements. Email me direct: sean@devonite.com to discuss project details.

## License

Apache License Version 2.0, January 2004
