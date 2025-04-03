export function createSparkles() {
  const container = document.querySelector('.sparkle-background');
  const containerWidth = container?.offsetWidth || window.innerWidth;
  const containerHeight = container?.offsetHeight || window.innerHeight;
  
  // Create 30-50 sparkles
  const sparkleCount = Math.floor(Math.random() * 20) + 30;
  
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position
    const posX = Math.random() * containerWidth;
    const posY = Math.random() * containerHeight;
    
    // Random size (some slightly larger)
    const size = Math.random() * 3 + 1;
    
    // Random delay and duration
    const delay = Math.random() * 5;
    const duration = Math.random() * 4 + 4;
    
    // Apply styles
    sparkle.style.left = `${posX}px`;
    sparkle.style.top = `${posY}px`;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.animationDelay = `${delay}s`;
    sparkle.style.animationDuration = `${duration}s`;
    
    container?.appendChild(sparkle);
  }
  
  // Add occasional "wand trail" effect
  setInterval(() => {
    createWandTrail(container, containerWidth, containerHeight);
  }, 8000);

  // Add floating orbs
  createFloatingOrbs(container);
}

function createWandTrail(container: Element | null, containerWidth: number, containerHeight: number) {
  if (!container) return;
  
  // Random starting point
  const startX = Math.random() * containerWidth;
  const startY = Math.random() * containerHeight;
  
  // Random end point (curved path)
  const endX = Math.random() * containerWidth;
  const endY = Math.random() * containerHeight;
  
  // Create 15-25 sparkles along the path
  const trailCount = Math.floor(Math.random() * 10) + 15;
  
  for (let i = 0; i < trailCount; i++) {
    const progress = i / trailCount;
    
    // Create curved path using quadratic bezier
    const controlX = (startX + endX) / 2 + (Math.random() * 100 - 50);
    const controlY = (startY + endY) / 2 + (Math.random() * 100 - 50);
    
    const t = progress;
    const posX = Math.pow(1-t, 2) * startX + 2 * (1-t) * t * controlX + Math.pow(t, 2) * endX;
    const posY = Math.pow(1-t, 2) * startY + 2 * (1-t) * t * controlY + Math.pow(t, 2) * endY;
    
    const trailSparkle = document.createElement('div');
    trailSparkle.classList.add('sparkle', 'trail-sparkle');
    
    // Larger, brighter sparkles for the trail
    const size = Math.random() * 4 + 2;
    
    trailSparkle.style.left = `${posX}px`;
    trailSparkle.style.top = `${posY}px`;
    trailSparkle.style.width = `${size}px`;
    trailSparkle.style.height = `${size}px`;
    trailSparkle.style.boxShadow = '0 0 8px 2px rgba(0, 180, 255, 0.8)';
    trailSparkle.style.animationDelay = `${progress * 1.5}s`;
    trailSparkle.style.animationDuration = '3s';
    
    container.appendChild(trailSparkle);
    
    // Remove trail sparkles after animation
    setTimeout(() => {
      trailSparkle.remove();
    }, 3000 + progress * 1500);
  }
}

function createFloatingOrbs(container: Element | null) {
  if (!container) return;

  const orbCount = 5;
  const orbColors = [
    'rgba(64, 156, 255, 0.3)',
    'rgba(100, 180, 255, 0.3)',
    'rgba(150, 200, 255, 0.3)',
  ];

  for (let i = 0; i < orbCount; i++) {
    const orb = document.createElement('div');
    orb.classList.add('floating-orb');
    
    const size = Math.random() * 100 + 100;
    const color = orbColors[Math.floor(Math.random() * orbColors.length)];
    
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.backgroundColor = color;
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDuration = `${Math.random() * 10 + 20}s`;
    orb.style.animationDelay = `-${Math.random() * 20}s`;
    
    container.appendChild(orb);
  }
}