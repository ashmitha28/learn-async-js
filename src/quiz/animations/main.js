const animateAlice = async (element, animation, timing) => {
  const animationPromise = element.animate(animation, timing).finished;
  return await animationPromise;
};

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

try {
  await animateAlice(alice1, aliceTumbling, aliceTiming);
  console.log('Animation for alice1 completed');
  await animateAlice(alice2, aliceTumbling, aliceTiming);
  console.log('Animation for alice2 completed');
  await animateAlice(alice3, aliceTumbling, aliceTiming);
  console.log('Animation for alice3 completed');
} catch (error) {
  console.error('Error:', error);
}
