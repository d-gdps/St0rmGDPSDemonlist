import List from './List.js';

export default {
    ...List,

    data() {
        return {
            ...List.data(),
            dataDir: '/St0rmGDPSDemonlist/SDLPlus',
        };
    },

    methods: {
        ...List.methods,
        score() {
            return 0;
        },
    },
};
