# Motion Library for p5.js

This library provides useful functions for creating time-based animations in p5.js.

## Installation

Include the library file in your p5.js project by adding a `<script>` tag in your `index.html` file:

```html
 <script src="https://unpkg.com/p5-motion"></script>
```

## Usage

Use one or more of the following functions within the `draw()` function to achieve the desired animation.

### getLoop()

Get a liner loop that varies from 0 to 1.

```js
let a = getLoop(vel = 1, delay = 0);

// Loop at half speed with a 25% delay
let b = getLoop(0.5, 0.25);
```

- `vel`: Animation speed (default: 1).
- `delay`: Animation delay (0-1) (default: 0).


### getLoopBounce()

Gets a sinusoidal loop that varies from 1 to -1, creating a sinusoidal "bounce" effect.

```js
let a = getLoopBounce(vel = 1, delay = 0);

// Loop at half speed with a 25% delay
let b = getLoopBounce(0.5, 0.25);
```

- `vel`: Animation speed (default: 1).
- `delay`: Animation delay (0-1) (default: 0).

### getLoopBounceLinear()

Gets a linear loop that varies from 1 to -1, creating a linear "bounce" effect.

```js
let a = getLoopBounceLinear(vel = 1, delay = 0);

// Loop at half speed with a 25% delay
let b = getLoopBounceLinear(0.5, 0.25);
```

- `vel`: Animation speed (default: 1).
- `delay`: Animation delay (0-1) (default: 0).

### getAnimation()

Gets the animation value in seconds.

```js
let a = getAnimation(vel = 1, delay = 0);

// Animation time ad half speed with a 25% delay
let b = getAnimation(0.5, 0.25);
```

- `vel`: Animation speed (default: 1).
- `delay`: Animation delay (0-1) (default: 0).

## frameRateMotion()

Sets the frame rate for animations (default: 60).

```js
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  frameRateMotion(30);
}
```


## Notes

The `delay` parameter is normalized between 0 and 1, where 0 represents no delay and 1 represents a full cycle delay.

The `vel` speed affects the animation's advancement speed. Higher values increase the speed, while lower values decrease it.

The `getAnimation()` function is the base for the other loop functions, providing the animation time in seconds.

