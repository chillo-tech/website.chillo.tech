import {Service} from '@/utils/types';

export const SERVICES_ICONS = {
    CODE: 'code',
    BUSINESS: 'business',
    ART: 'art',
    CHROME: 'chrome',
    DEV: 'dev',
};

const services: Service[] = [
    {
        id: 1,
        icon: SERVICES_ICONS.CODE,
        title: `Software application`,
        content: `Develop your software application MVP faster than ever. Speed is your friend.`,
    },
    {
        id: 2,
        icon: SERVICES_ICONS.BUSINESS,
        title: `Business Management`,
        content: `Revolutionize your business by building custom solutions or seamlessly integrating all your internal tools into a tailored, single-point dashboard. Develop your own systems such as CRMs and Business Management Tools, tailored specifically to your business. You can even supercharge this with our Artificial Intelligence solutions.`,
    },
    {
        id: 3,
        icon: SERVICES_ICONS.ART,
        title: `Artificial intelligence`,
        content: `Develop Simple to Advanced AI Applications using Large Language Models.`,
    },
    {
        id: 4,
        icon: SERVICES_ICONS.CHROME,
        title: `Custom CRM Systems`,
        content: `Develop CRM systems for your business tailored specifically to your clients. No More 3rd Party Apps.`,
    },
    {
        id: 5,
        icon: SERVICES_ICONS.DEV,
        title: `Custom AI Chatbots`,
        content: `Build custom knowledge based AI chatbot systems that can be applied with a variety of use cases.`,
    }
];

export default services;
