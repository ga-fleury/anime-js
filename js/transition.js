import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css module
barba.use(barbaCss);

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// init Barba
barba.init({

  sync: true,

  transitions: [{

    async leave(data) {

      const done = this.async();

      PageTransitionEvent();
      await delay(1500);
      done();
    }
  }]
});