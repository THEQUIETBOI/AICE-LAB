
const { Engine, Render, Runner, World, Bodies, Body, Constraint, Events } = Matter;

const width = window.outerWidth/2;
const height = window.outerHeight/2;

const engine = Engine.create();
const world = engine.world;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: { width, height, wireframes: false, background: "#111" }
});
Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);

// --- rest of your molecule + hydrogen bond code ---
