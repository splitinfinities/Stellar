import anime from 'animejs/lib/anime.es.js';

export const animations = {
    lettering: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateX: [40, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration,
                    delay: function (_, i) {
                        return delay + (30 * i);
                    }
                })
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateX: [0, -30],
                    opacity: [1, 0],
                    easing: "easeInExpo",
                    duration,
                    delay: function (_, i) {
                        return delay + (30 * i);
                    }
                });
        }
    },
    retro: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets).reverse(),
                    translateY: [-1, 0],
                    opacity: function (_, i) {
                        return [0, 0.1 * i];
                    },
                    easing: "easeInExpo",
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    },
                    complete: () => {
                        const first = Array.from(targets).shift();

                        setTimeout(() => {
                            anime.timeline({ loop: true, direction: 'alternate', duration: 900 })
                                .add({
                                    targets: first,
                                    translateY: [-1, -1],
                                    translateX: [1, -1],
                                    easing: "steps(3)",
                                })
                                .add({
                                    targets: first,
                                    translateY: [1, 1],
                                    translateX: [-1, 1],
                                    easing: "steps(3)",
                                })
                                .add({
                                    targets: first,
                                    translateY: [1, -1],
                                    translateX: [-1, 1],
                                    easing: "steps(3)",
                                })
                                .add({
                                    targets: first,
                                    translateY: [-1, 1],
                                    translateX: [1, 1],
                                    easing: "steps(3)",
                                })
                        }, 600)

                    }
                })
                .add({
                    targets: Array.from(targets).map((el, i) => { if (i !== 0) { return el } }).filter(Boolean).reverse(),
                    translateY: [0, -1],
                    opacity: 0,
                    easing: "easeInExpo",
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                });
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateXy: [0, -20],
                    opacity: [0, 1],
                    easing: "linear",
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                });
        }
    },
    bounce: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    scale: [4, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    scale: [1, 4],
                    opacity: [1, 0],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        }
    },
    jump: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateY: [0, "1.1em"],
                    translateZ: 0,
                    opacity: [1, 0],
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        }
    },
    flip: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    rotateY: [-90, 0],
                    opacity: [0, 1],
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    rotateY: [0, -90],
                    opacity: [1, 0],
                    duration,
                    delay: function (_, i) {
                        return delay * i;
                    }
                })
        }
    },
    rise: {
        in: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateY: [100, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration,
                    delay: function (_, i) {
                        return delay + (30 * i);
                    }
                })
        },
        out: (targets: NodeListOf<HTMLElement>, delay: number, duration: number) => {
            anime.timeline({ loop: false })
                .add({
                    targets: Array.from(targets),
                    translateY: [0, 100],
                    translateZ: 0,
                    opacity: [1, 0],
                    easing: "easeInExpo",
                    duration,
                    delay: function (_, i) {
                        return delay + (30 * i);
                    }
                })
        }
    }
}
