const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const sun = { x: 200, y: 100, radius: 50, color: "red" };
const planets = [
  { distance: 70, radius: 5, color: "gray", angle: 0, speed: 0.02 },
  { distance: 100, radius: 8, color: "orange", angle: 0, speed: 0.015 },
  { distance: 130, radius: 6, color: "blue", angle: 0, speed: 0.01 },
  { distance: 160, radius: 7, color: "red", angle: 0, speed: 0.008 },
  { distance: 200, radius: 9, color: "lightblue", angle: 0, speed: 0.005 },
];

function drawSun() {
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
  ctx.fillStyle = sun.color;
  ctx.fill();
  ctx.closePath();
}

function drawPlanet(planet) {
  const x = sun.x + planet.distance * Math.cos(planet.angle);
  const y = sun.y + planet.distance * Math.sin(planet.angle);
  ctx.beginPath();
  ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
  ctx.fillStyle = planet.color;
  ctx.fill();
  ctx.closePath();
}

function updatePlanets() {
  planets.forEach((planet) => {
    planet.angle += planet.speed;
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSun();
  planets.forEach(drawPlanet);
  updatePlanets();
  requestAnimationFrame(animate);
}

animate();
