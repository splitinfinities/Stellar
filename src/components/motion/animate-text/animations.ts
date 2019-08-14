import anime from 'animejs/lib/anime.es.js';

export const animations = {
    lettering: {
        in: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: function(_, i) {
                    return 500 + 30 * i;
                }
            })
        },
        out: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 1100,
                delay: function(_, i) {
                    return 100 + 30 * i;
                }
            });
        }
    },
    bounce: {
        in: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: function(_, i) {
                  return 70*i;
                }
              })
        },
        out: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                scale: [1,4],
                opacity: [1,0],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: function(_, i) {
                  return 70*i;
                }
              })
        }
    },
    jump: {
        in: (targets) => {
            anime.timeline({loop: false})
              .add({
                targets,
                translateY: ["1.1em", 0],
                translateZ: 0,
                opacity: [0,1],
                duration: 750,
                delay: function(_, i) {
                    return 50 * i;
                }
            })
        },
        out: (targets) => {
            anime.timeline({loop: false})
              .add({
                targets,
                translateY: [0, "1.1em"],
                translateZ: 0,
                opacity: [1,0],
                duration: 750,
                delay: function(_, i) {
                    return 50 * i;
                }
            })
        }
    },
    flip: {
        in: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                rotateY: [-90, 0],
                opacity: [0,1],
                duration: 1300,
                delay: function(_, i) {
                    return 45 * i;
                }
            })
        },
        out: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                rotateY: [0, -90],
                opacity: [1,0],
                duration: 1300,
                delay: function(_, i) {
                    return 45 * i;
                }
            })
        }
    },
    rise: {
        in: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: function(_, i) {
                    return 300 + 30 * i;
                }
            })
        },
        out: (targets) => {
            anime.timeline({loop: false})
            .add({
                targets,
                translateY: [0,100],
                translateZ: 0,
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 1400,
                delay: function(_, i) {
                    return 300 + 30 * i;
                }
            })
        }
    }
}
