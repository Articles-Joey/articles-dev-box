const defaultAdjectives = [
    'Swift', 'Clever', 'Bright', 'Bold', 'Calm', 'Quick', 'Smart', 'Witty',
    'Sharp', 'Kind', 'Cool', 'Vast', 'Fair', 'Brave', 'Keen', 'Grand',
    'Pure', 'Rich', 'Smooth', 'Strong', 'Sunny', 'Wild', 'Wise', 'Zero',
    'Great', 'Elite', 'Prime', 'Solid', 'Global', 'Unique'
];

const defaultNouns = [
    'Fox', 'Wolf', 'Bear', 'Eagle', 'Hawk', 'Lion', 'Tiger', 'Shark',
    'Owl', 'Deer', 'Falcon', 'Raven', 'Panda', 'Koala', 'Otter', 'Lynx',
    'River', 'Star', 'Sky', 'Mountain', 'Cloud', 'Ocean', 'Forest', 'Storm',
    'Peak', 'Valley', 'Desert', 'Island', 'Bridge'
];

/**
 * Generates a random pattern/solving-themed nickname.
 * @returns {string} A random nickname like "CleverSolver42" or "SwiftMatcher7".
 */
const generateRandomNickname = (config) => {

    const { type, parts } = config || {};

    if (type == "Basic") {

        const adjectives = parts[0] || defaultAdjectives;
        const nouns = parts[1] || defaultNouns;

        const adj = (adjectives || defaultAdjectives)[Math.floor(Math.random() * (adjectives || defaultAdjectives).length)];
        const noun = (nouns || defaultNouns)[Math.floor(Math.random() * (nouns || defaultNouns).length)];
        const num = Math.floor(Math.random() * 100);

        return `${adj}${noun}${num}`;

    }

};

export default generateRandomNickname;