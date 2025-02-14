export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            opacity : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
        },
        show: {
            y: 0,
            x: 0,
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