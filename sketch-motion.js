/**
 * @author Luca Cattaneo <luca.cattaneo@mekit.it>
 * @version 1.0.0
 * @license MIT
 */

let motionSettings = {
  fps: 60
};

function frameRateMotion(fps){
  motionSettings.fps = fps;
}

/**
 * Get linear loop (0 to 1)
 * @param {Number} velocity
 * @param {Number} delay: 0-1
 */
function getLoop(vel = 1, delay = 0) {
  let anim = getAnimation(vel, delay);
  return anim % 1;
}

/**
 * Get sinusoidal loop (1 to -1)
 * @param {Number} velocity
 * @param {Number} delay: 0-1
 */
function getLoopBounce(vel = 1, delay = 0) {
  let anim = getAnimation(vel, delay);
  return sin(anim * TWO_PI);
}

/**
 * Get linear loop (1 to -1)
 * @param {Number} velocity
 * @param {Number} delay: 0-1
 */
function getLoopBounceLinear(vel = 1, delay = 0) {
  let anim = getLoop(vel, delay);
  let t = 0;
  if (anim < 0.5) {
    t = anim * 2;
  } else {
    t = 2 - anim * 2;
  }
  t = t * 2 - 1;
  return t;
}

/**
 * Get animation in seconds
 * @param {Number} velocity
 * @param {Number} delay: 0-1
 */
function getAnimation(vel = 1, delay = 0) {
  delay = delay % 1;
  let sec = (frameCount + (delay * motionSettings.fps) / vel) / motionSettings.fps;
  return sec * vel;
}
