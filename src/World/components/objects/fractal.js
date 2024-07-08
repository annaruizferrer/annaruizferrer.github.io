import {
  Group,
  Vector2,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  Color,
} from "three";

function createFractalGroup() {
  const fractalGroup = new Group()
  const maxDepth = 8
  let currentDepth = 0
  let points = createFractal();

  const drawFractal = (points) => {
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({color: new Color("black")});
    const line = new Line(geometry, material);
    fractalGroup.add(line);
  };

  function growFractal() {
    fractalGroup.clear();
    drawFractal(points);
    points = updateFractal(points, currentDepth);
    // Todo clean points outside view
    currentDepth = Math.min((currentDepth + 1), maxDepth)
    if (currentDepth < maxDepth) {
      setTimeout(growFractal, 1000); // Increase depth every second
    }
  }
  growFractal(currentDepth);

  fractalGroup.tick = () => {
    fractalGroup.rotation.z += 0.005;
    if (fractalGroup.position.z < 4.7){
      fractalGroup.position.z += (0.006 - 0.0012 * (fractalGroup.position.z));
    }
  };
  return fractalGroup;
}

const updateFractal = (points) => {
  const newPoints = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];

    const dx = (p2.x - p1.x) / 3;
    const dy = (p2.y - p1.y) / 3;

    const pA = new Vector2(p1.x + dx, p1.y + dy );
    const pB = new Vector2(p1.x + 2 * dx, p1.y + 2 * dy);

    const pC = new Vector2(
      (p1.x + p2.x) / 2 + (Math.sqrt(3) * (p1.y - p2.y)) / 6,
      (p1.y + p2.y) / 2 + (Math.sqrt(3) * (p2.x - p1.x)) / 6
    );

    newPoints.push(p1, pA, pC, pB);
  }
  newPoints.push(points[points.length - 1]);
  return newPoints;
}

export { createFractalGroup }


const createFractal = () => {
  const points = [];
  const length = 3;
  const height = length * Math.sqrt(3) / 2;
  points.push(new Vector2(-length / 2, -height / 3, 0));
  points.push(new Vector2(length / 2, -height / 3, 0));
  points.push(new Vector2(0, 2 * height / 3, 0));
  points.push(new Vector2(-length / 2, -height / 3, 0));
  return points
}
