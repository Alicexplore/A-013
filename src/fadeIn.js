export const fadeIn = (delay = 0) => {
    return {
        hidden: {
            y: 20,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay, 
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};