import { For, Portal } from 'solid-js/web';
import styles from './Particles.module.css';

const randomInt = function (min: number, max: number) {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);

  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxRounded - minRounded + 1) + minRounded);
};

const createParticles = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    size: randomInt(2, 10),
    x: randomInt(0, 100),
    y: randomInt(0, 100),
    // translateX: randomInt(-20, 120),
    // translateY: randomInt(-20, 120),
    duration: randomInt(5, 20),
    translateX: randomInt(0, index % 2 === 0 ? -12 : 12),
    // translateY: randomInt(0, index % 2 !== 0 ? -12 : 12),
    translateY: randomInt(0, 12),
  }));
};

export function Particles() {
  const particles = createParticles();

  return (
    <Portal>
      <div class={styles.root}>
        <For each={particles}>
          {(particle) => (
            <span
              class={styles.particle}
              style={{
                '--size': `${particle.size}px`,
                '--x': `${particle.x}vw`,
                '--y': `${particle.y}vh`,
                '--translateX': `${particle.translateX}rem`,
                '--translateY': `${particle.translateY}rem`,
                '--duration': `${particle.duration}s`,
              }}
            ></span>
          )}
        </For>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </div>
      </div>
    </Portal>
  );
}
