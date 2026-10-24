const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const frown = document.createElementNS("http://www.w3.org/2000/svg", "path");
frown.setAttribute("d", "M 70 140 Q 100 125 130 140");
frown.setAttribute("fill", "none");
frown.setAttribute("x2", "15");
frown.setAttribute("y2", "137");
frown.setAttribute("stroke", "#302c29");
frown.setAttribute("stroke-width", "4");
frown.setAttribute("stroke-linecap", "round");
face.append(frown);

const defs = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "defs",
);

const sunburn = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);

sunburn.setAttribute("id", "sunburn");
sunburn.setAttribute("x1", "0%");
sunburn.setAttribute("y1", "0%");
sunburn.setAttribute("x2", "0%");
sunburn.setAttribute("y2", "100%");

const sunburnStop1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
sunburnStop1.setAttribute("offset", "0%");
sunburnStop1.setAttribute("stop-color", "#ffc2b8");

const sunburnStop2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
sunburnStop2.setAttribute("offset", "50%");
sunburnStop2.setAttribute("stop-color", "#ec4141");

const sunburnStop3 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
sunburnStop3.setAttribute("offset", "100%");
sunburnStop3.setAttribute("stop-color", "#ffc2b8");

sunburn.appendChild(sunburnStop1);
sunburn.appendChild(sunburnStop2);
sunburn.appendChild(sunburnStop3);

defs.appendChild(sunburn);
face.prepend(defs);

head.setAttribute("fill", "url(#sunburn)");

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
