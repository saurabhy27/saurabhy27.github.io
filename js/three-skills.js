/**
 * Three.js Skills Globe — Vibrant, colorful 3D skills universe
 * Wireframe globe with gradient colors, glowing particles, and animated rings.
 */
(function () {
  'use strict';

  const LOBEHUB_CDN = 'https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark';

  const NODE_ICON_1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' fill='none' stroke='%23a78bfa' stroke-width='3'%3E%3Ccircle cx='24' cy='24' r='12'/%3E%3Ccircle cx='56' cy='56' r='12'/%3E%3Cline x1='33' y1='33' x2='47' y2='47'/%3E%3C/svg%3E";
  const NODE_ICON_2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' fill='none' stroke='%23f472b6' stroke-width='3'%3E%3Ccircle cx='20' cy='40' r='12'/%3E%3Ccircle cx='60' cy='40' r='16'/%3E%3Cline x1='32' y1='40' x2='44' y2='40'/%3E%3C/svg%3E";

  const SKILLS = [
    { name: 'Python', slug: 'python', color: '#3776AB' },
    { name: 'Go', slug: 'go', color: '#00ADD8' },
    { name: 'Java', slug: 'openjdk', color: '#ED8B00', iconUrl: 'https://cdn-icons-png.flaticon.com/128/226/226777.png' },
    { name: 'FastAPI', slug: 'fastapi', color: '#05998B' },
    { name: 'Spring Boot', slug: 'springboot', color: '#6DB33F' },
    { name: 'Hugging Face', slug: 'huggingface', color: '#FFD21E', iconUrl: LOBEHUB_CDN + '/huggingface-color.png' },
    { name: 'Kafka', slug: 'apachekafka', color: '#FFFFFF' },
    { name: 'Dify', slug: 'dify', color: '#1C64F2', iconUrl: LOBEHUB_CDN + '/dify.png' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
    { name: 'Redis', slug: 'redis', color: '#DC382D' },
    { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
    { name: 'Elasticsearch', slug: 'elasticsearch', color: '#005571' },
    { name: 'Docker', slug: 'docker', color: '#2496ED' },
    { name: 'AWS', slug: 'aws', color: '#FF9900', iconUrl: LOBEHUB_CDN + '/aws.png' },
    { name: 'Git', slug: 'git', color: '#F05032' },
    { name: 'System Design', slug: '', color: '#a78bfa', iconUrl: NODE_ICON_1 },
    { name: 'GitHub', slug: 'github', color: '#FFFFFF' },
    { name: 'Scalability', slug: '', color: '#f472b6', iconUrl: NODE_ICON_2 }
  ];

  function init() {
    const container = document.getElementById('skills-globe');
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight || 550;

    // ---- Scene, camera, renderer ----
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ---- Rotating group ----
    const group = new THREE.Group();
    scene.add(group);

    // ---- Custom ShaderMaterial for gradient wireframe globe ----
    const sphereGeo = new THREE.IcosahedronGeometry(90, 2);
    const sphereMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#a78bfa') }, // purple
        uColor2: { value: new THREE.Color('#06b6d4') }, // cyan
        uColor3: { value: new THREE.Color('#f472b6') }, // pink
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec3 vPosition;
        void main() {
          float t = sin(uTime * 0.5 + vPosition.y * 0.02) * 0.5 + 0.5;
          vec3 color = mix(uColor1, uColor2, t);
          color = mix(color, uColor3, sin(uTime * 0.3 + vPosition.x * 0.015) * 0.5 + 0.5);
          gl_FragColor = vec4(color, 0.15);
        }
      `,
      wireframe: true,
      transparent: true,
      depthWrite: false,
    });
    group.add(new THREE.Mesh(sphereGeo, sphereMat));

    // ---- Subtle dark inner sphere (matches dark theme) ----
    const glowGeo = new THREE.SphereGeometry(60, 32, 32);
    const glowMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.85 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
          vec3 c1 = vec3(0.12, 0.08, 0.25);   // deep dark purple
          vec3 c2 = vec3(0.04, 0.15, 0.22);   // dark teal
          vec3 color = mix(c1, c2, sin(uTime * 0.4) * 0.5 + 0.5);
          gl_FragColor = vec4(color, intensity * 0.12);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
    });
    group.add(new THREE.Mesh(glowGeo, glowMat));

    // ---- Colorful orbital rings ----
    function addRing(radius, rotX, rotY, color, opacity) {
      const ringGeo = new THREE.TorusGeometry(radius, 0.3, 8, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: opacity,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      group.add(ring);
      return ring;
    }
    const ring1 = addRing(105, Math.PI / 2, 0, '#a78bfa', 0.18);
    const ring2 = addRing(108, Math.PI / 3, Math.PI / 6, '#06b6d4', 0.12);
    const ring3 = addRing(102, -Math.PI / 4, Math.PI / 3, '#f472b6', 0.10);

    // ---- Floating particles (stars / dust) ----
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color('#a78bfa'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#f472b6'),
      new THREE.Color('#fbbf24'),
      new THREE.Color('#34d399'),
    ];

    for (let i = 0; i < particleCount; i++) {
      // Random spherical distribution around the globe
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const r = 80 + Math.random() * 80;
      particlePositions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      particlePositions[i * 3 + 2] = r * Math.cos(theta);

      const c = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.5,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // ---- Fibonacci sphere distribution for icons ----
    const N = SKILLS.length;
    const RADIUS = 100;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const positions = SKILLS.map((_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return new THREE.Vector3(
        Math.cos(theta) * r * RADIUS,
        y * RADIUS,
        Math.sin(theta) * r * RADIUS
      );
    });

    // ---- Create skill sprites ----
    const createSprite = (skill, pos) => {
      const size = 160;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size + 32;
      const ctx = canvas.getContext('2d');

      const texture = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.copy(pos);
      sprite.scale.set(32, 38.4, 1);
      group.add(sprite);

      const renderLabel = () => {
        let f = 18;
        ctx.font = `600 ${f}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`;
        while (ctx.measureText(skill.name).width > size && f > 12) {
          f--;
          ctx.font = `600 ${f}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`;
        }
        ctx.fillStyle = '#e8eaed';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, size / 2, size + 16);
      };

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, (size - 80) / 2, 8, 80, 80);
        renderLabel();
        texture.needsUpdate = true;
      };
      img.onerror = () => {
        ctx.fillStyle = skill.color;
        ctx.font = 'bold 48px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name.charAt(0), size / 2, size / 2 + 16);
        renderLabel();
        texture.needsUpdate = true;
      };
      img.src = skill.iconUrl || `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`;
    };

    SKILLS.forEach((skill, i) => createSprite(skill, positions[i]));

    // ---- Mouse / touch drag ----
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotVelocity = { x: 0.003, y: 0.005 };

    renderer.domElement.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
      renderer.domElement.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      rotVelocity.y = dx * 0.002;
      rotVelocity.x = dy * 0.002;
      prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    });

    renderer.domElement.style.cursor = 'grab';

    // ---- Clock for animations ----
    const clock = new THREE.Clock();

    // ---- Animation ----
    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Update shader uniforms
      sphereMat.uniforms.uTime.value = elapsed;
      glowMat.uniforms.uTime.value = elapsed;

      // Slowly animate ring colors
      ring1.material.color.setHSL((elapsed * 0.05) % 1, 0.7, 0.6);
      ring2.material.color.setHSL((elapsed * 0.05 + 0.33) % 1, 0.7, 0.6);
      ring3.material.color.setHSL((elapsed * 0.05 + 0.66) % 1, 0.7, 0.6);

      // Pulse particles
      particleMat.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.2;

      if (!isDragging) {
        rotVelocity.x += (0.001 - rotVelocity.x) * 0.02;
        rotVelocity.y += (0.003 - rotVelocity.y) * 0.02;
      }

      group.rotation.x += rotVelocity.x;
      group.rotation.y += rotVelocity.y;

      // Depth-based parallax for sprites
      group.children.forEach((child) => {
        if (child.isSprite) {
          const worldPos = new THREE.Vector3();
          child.getWorldPosition(worldPos);
          const dist = worldPos.distanceTo(camera.position);
          const scale = THREE.MathUtils.mapLinear(dist, 200, 400, 1.1, 0.6);
          child.material.opacity = THREE.MathUtils.mapLinear(dist, 200, 400, 1, 0.3);
          child.scale.set(28 * scale, 32 * scale, 1);
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // ---- Resize ----
    window.addEventListener('resize', () => {
      const w = container.clientWidth;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
