  const eye = document.querySelector('.eye');
  const ball = document.querySelector('.ball');

  // Limits: Eye moves a little, Ball (pupil) moves more
  const eyeLimit = 20; 
  const ballLimit = 40; 

  window.addEventListener('mousemove', (event) => {
    const rect = eye.getBoundingClientRect();
    
    // 1. Find the center of the eye
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    // 2. Calculate distance/angle from mouse to center
    const deltaX = event.clientX - eyeX;
    const deltaY = event.clientY - eyeY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.hypot(deltaX, deltaY);

    // 3. Move the EYE (subtle movement)
    const eyeDist = Math.min(distance, eyeLimit);
    const eyeMoveX = Math.cos(angle) * eyeDist;
    const eyeMoveY = Math.sin(angle) * eyeDist;
    eye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;

    // 4. Move the BALL (more dramatic movement)
    const ballDist = Math.min(distance, ballLimit);
    const ballMoveX = Math.cos(angle) * ballDist;
    const ballMoveY = Math.sin(angle) * ballDist;
    ball.style.transform = `translate(${ballMoveX}px, ${ballMoveY}px)`;
  });