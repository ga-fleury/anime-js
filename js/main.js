anime({
  targets: '.st0, .st1, .st2',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'forward',
  loop: false
});

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [9, 13];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'spring(1, 80, 10, 0)',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  duration: 2000
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  borderRadius: ['0%', '50%'],
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  borderRadius: ['50%', '0%'],
  delay: anime.stagger(4, {from: 'center'})
}, '+=1200')
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'}),
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 225,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
}, '+=1200')
.add({
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(0, {grid: grid, from: 'center'})
}, '+=1200')
.add({
  easing: 'steps(2)',
  rotate: 270,
  duration: 500,
  delay: anime.stagger(10, {grid: grid, from: 'center'})
}, '+=1200')

staggersAnimation.play();