"use client"

let wheelAnimationFrame = null;
let thumbElement = null;
const snapPoints = [10, 35, 60, 85, 110, 135, 160, 185, 210, 235, 260, 285, 310, 335, 360, 385];

// Cache the thumb element
function getThumb() {
  if (!thumbElement) {
    thumbElement = document.querySelector(".thumb");
  }
  return thumbElement;
}

// Easing function for smooth animation
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function handleWheel(e, setThumbTop) {
  const thumb = getThumb();
  if (!thumb) return;

  const currentTop = parseFloat(thumb.style.top || 10);
  
  // Find nearest snap point more efficiently
  let currentIdx = 0;
  let minDist = Math.abs(snapPoints[0] - currentTop);
  for (let i = 1; i < snapPoints.length; i++) {
    const dist = Math.abs(snapPoints[i] - currentTop);
    if (dist < minDist) {
      minDist = dist;
      currentIdx = i;
    }
  }

  const direction = e.deltaY > 0 ? 1 : -1;
  let nextIdx = Math.max(0, Math.min(currentIdx + direction, snapPoints.length - 1));
  const target = snapPoints[nextIdx];

  if (wheelAnimationFrame) cancelAnimationFrame(wheelAnimationFrame);

  const startTop = currentTop;
  const distance = target - startTop;
  const duration = 350; // ms - smooth animation
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const newTop = startTop + distance * easedProgress;

    thumb.style.top = `${newTop}px`;
    setThumbTop(newTop); // Update state progressively for animation
    
    if (progress < 1) {
      wheelAnimationFrame = requestAnimationFrame(animate);
    } else {
      thumb.style.top = `${target}px`;
      setThumbTop(target);
      wheelAnimationFrame = null;
    }
  }

  wheelAnimationFrame = requestAnimationFrame(animate);
}

const MIN_SCALE = 1;
const MAX_SCALE = 2;
export function getScale(thumbTop, MIN_TOP, MAX_TOP) {
  const clampedTop = Math.max(MIN_TOP, Math.min(thumbTop, MAX_TOP));
  const scale = MIN_SCALE + ((clampedTop - MIN_TOP) / (MAX_TOP - MIN_TOP)) * (MAX_SCALE - MIN_SCALE);
  return scale;
}


const MIN_SCALE_SP = 0.5;
const MAX_SCALE_SP = 1;

export function setScale(thumbTop, MIN_TOP, MAX_TOP) {
  if (thumbTop < MIN_TOP) return MIN_SCALE_SP;
  const clampedTop = Math.max(MIN_TOP, Math.min(thumbTop, MAX_TOP));
  const scale = MIN_SCALE_SP + ((clampedTop - MIN_TOP) / (MAX_TOP - MIN_TOP)) * (MAX_SCALE_SP - MIN_SCALE_SP);
  return scale;
}

export function getTranslate(thumbTop, MIN_TOP, MAX_TOP) {
  const clampedTop = Math.max(MIN_TOP, Math.min(thumbTop, MAX_TOP));
  const vhTranslate = ((clampedTop - MIN_TOP) / (MAX_TOP - MIN_TOP)) * 50;
  const percentTranslate = ((clampedTop - MIN_TOP) / (MAX_TOP - MIN_TOP)) * 50;
  return `calc(${vhTranslate}vh + ${percentTranslate}%)`;
}

const MAX_OPACITY = 100;

export function darkToLight(thumbTop, MIN_TOP, MAX_TOP) {
  const clampedTop = Math.max(MIN_TOP, Math.min(thumbTop, MAX_TOP));
  const opacity = ((MAX_TOP - clampedTop) / (MAX_TOP - MIN_TOP)) * MAX_OPACITY;
  return opacity;
}

const MIN_OPACITY_SP = 0;
const MAX_OPACITY_SP = 1;

export function setOpacity(thumbTop, MIN_TOP, MAX_TOP) {
  const clampedTop = Math.max(MIN_TOP, Math.min(thumbTop, MAX_TOP));
  return ((clampedTop - MIN_TOP) / ((MAX_TOP) - MIN_TOP)) * (MAX_OPACITY_SP - MIN_OPACITY_SP) + MIN_OPACITY_SP;
}


let touchStartY = 0;
let velocity = 0;
let lastTouchTime = 0;

export function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY;
  lastTouchTime = performance.now();
  velocity = 0;
  if (wheelAnimationFrame) cancelAnimationFrame(wheelAnimationFrame);
}

export function handleTouchMove(e, setThumbTop, thumbTop) {
  if (e.touches.length > 1) return;
  const thumb = getThumb();
  if (!thumb) return;

  const now = performance.now();
  const touchY = e.touches[0].clientY;
  const delta = touchStartY - touchY;
  const timeDelta = now - lastTouchTime;
  
  touchStartY = touchY;
  lastTouchTime = now;
  
  // Calculate velocity (pixels per ms)
  if (timeDelta > 0) {
    velocity = delta / timeDelta;
  }

  if (!(thumbTop === snapPoints[0] && delta < 0)) e.preventDefault();

  // Find current snap point efficiently
  const currentTop = parseFloat(thumb.style.top || 0);
  let currentIdx = 0;
  let minDist = Math.abs(snapPoints[0] - currentTop);
  for (let i = 1; i < snapPoints.length; i++) {
    const dist = Math.abs(snapPoints[i] - currentTop);
    if (dist < minDist) {
      minDist = dist;
      currentIdx = i;
    }
  }

  const direction = delta > 0 ? 1 : -1;
  let nextIdx = Math.max(0, Math.min(currentIdx + direction, snapPoints.length - 1));
  const target = snapPoints[nextIdx];

  if (wheelAnimationFrame) cancelAnimationFrame(wheelAnimationFrame);

  const startTop = currentTop;
  const distance = target - startTop;
  const duration = 350; // ms - smooth touch animation
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const newTop = startTop + distance * easedProgress;

    thumb.style.top = `${newTop}px`;
    setThumbTop(newTop); // Update state progressively for animation
    
    if (progress < 1) {
      wheelAnimationFrame = requestAnimationFrame(animate);
    } else {
      thumb.style.top = `${target}px`;
      setThumbTop(target);
      wheelAnimationFrame = null;
    }
  }

  wheelAnimationFrame = requestAnimationFrame(animate);
}

export function handleTouchEnd(setThumbTop) {
  const thumb = getThumb();
  if (!thumb) return;

  // Only trigger momentum if velocity is significant
  if (Math.abs(velocity) < 0.3) return;

  const currentTop = parseFloat(thumb.style.top || 0);
  
  // Find current snap point efficiently
  let currentIdx = 0;
  let minDist = Math.abs(snapPoints[0] - currentTop);
  for (let i = 1; i < snapPoints.length; i++) {
    const dist = Math.abs(snapPoints[i] - currentTop);
    if (dist < minDist) {
      minDist = dist;
      currentIdx = i;
    }
  }

  const direction = velocity > 0 ? 1 : -1;
  let nextIdx = Math.max(0, Math.min(currentIdx + direction, snapPoints.length - 1));
  const target = snapPoints[nextIdx];

  if (wheelAnimationFrame) cancelAnimationFrame(wheelAnimationFrame);

  const startTop = currentTop;
  const distance = target - startTop;
  const duration = 350; // ms
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const newTop = startTop + distance * easedProgress;

    thumb.style.top = `${newTop}px`;
    setThumbTop(newTop); // Update state progressively for animation
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      thumb.style.top = `${target}px`;
      setThumbTop(target);
    }
  }

  requestAnimationFrame(animate);
}