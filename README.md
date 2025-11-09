# l^2 simulation suite

double pendulum chaos playground with five different features built on lagrangian mechanics and numerical integration methods, uses html5 canvas and vanilla javascript for all the physics and rendering stuff

## what it does

simulates chaotic double pendulum motion using both euler integration (fast but drifts energy) and rk4 integration (fourth order runge kutta, way more accurate with the whole k1+2k2+2k3+k4 weighted average thing but slower), all the physics comes from lagrangian equations of motion to compute angular accelerations based on masses lengths angles and angular velocities

## features

- **background chaos** - 120 double pendulums all colliding with each other in real time, uses fadecanvas with alpha 0.04 for motion trails and bitwise operations for rendering performance optimization, collision detection uses distance squared to avoid expensive sqrt calls
- **chaotic tic tac toe** - play against minimax ai that has 60% randomness so its actually beatable, cells get stolen by pendulum collisions making the game completely unpredictable and chaotic
- **ppl (visual programming)** - drag and drop block based programming language for controlling pendulum parameters, has blocks for physics constants integration methods and initial conditions
- **precision challenge** - microscopic initial condition sensitivity test where you try to hit targets while avoiding obstacles by adjusting theta1 theta2 omega1 omega2 with sliders, shows how tiny changes create massive differences
- **prophecy (bonus)** - fortune teller that uses pendulum chaos to answer yes/no/maybe questions, runs 8 second simulation with energy tracking and modular state management split across prophecy-state prophecy-game prophecy-render prophecy-controls and prophecy-energy files

## physics stuff

uses g=9.81 m/s^2, computes total energy as kinetic plus potential (T+V), polar to cartesian conversion for rendering, all the acceleration math comes from taking derivatives of the lagrangian with respect to angles, collision detection checks if distance squared between any two bob positions is less than combined radii squared

## how to run

just open index.html in a browser, no build process no dependencies no frameworks just pure vanilla javascript and canvas api

## file structure

core physics in physics.js, integration methods split into euler.js and rk4.js, rendering utilities in canvas-utils.js, minimax ai in minimax.js, each feature has its own html file and the prophecy feature is modular with separate files for different concerns
