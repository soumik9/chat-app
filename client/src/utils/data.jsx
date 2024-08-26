export const users = [
    {
        "_id": '1',
        name: 'Alice Johnson',
        status: 'active',
        messages: [
            {
                text: 'Hello there, how are you?',
                createdAt: 1669464200,
                image: '',
                from: '1',
                to: '2',
                isSeen: false,
                isDelivered: false,
            },
            {
                text: 'Yes, I am fine. How about you?',
                createdAt: 1669464200,
                image: '',
                from: '2',
                to: '1',
                isSeen: false,
                isDelivered: false,
            },
        ]
    },
    {
        "_id": '2',
        name: 'Bob Smith',
        status: 'offline',
        messages: [
            {
                text: 'Did you finish the report?',
                createdAt: 1669465200,
                image: '',
                from: '2',
                to: '1',
                isSeen: true,
                isDelivered: true,
            },
            {
                text: 'I am almost done.',
                createdAt: 1669465300,
                image: '',
                from: '1',
                to: '2',
                isSeen: true,
                isDelivered: true,
            },
        ]
    },
    {
        "_id": '3',
        name: 'Carol Lee',
        status: 'active',
        messages: [
            {
                text: 'Are we still on for lunch tomorrow?',
                createdAt: 1669466200,
                image: '',
                from: '3',
                to: '1',
                isSeen: false,
                isDelivered: false,
            },
            {
                text: 'Yes, see you at noon.',
                createdAt: 1669466300,
                image: '',
                from: '1',
                to: '3',
                isSeen: false,
                isDelivered: false,
            },
        ]
    },
    {
        "_id": '4',
        name: 'David Kim',
        status: 'away',
        messages: [
            {
                text: 'Can you send me the file?',
                createdAt: 1669467200,
                image: '',
                from: '4',
                to: '1',
                isSeen: true,
                isDelivered: false,
            },
            {
                text: 'Sure, give me a moment.',
                createdAt: 1669467300,
                image: '',
                from: '1',
                to: '4',
                isSeen: false,
                isDelivered: false,
            },
        ]
    },
    {
        "_id": '5',
        name: 'Emily Davis',
        status: 'active',
        messages: [
            {
                text: 'Let\'s meet at the cafe.',
                createdAt: 1669468200,
                image: '',
                from: '5',
                to: '1',
                isSeen: false,
                isDelivered: false,
            },
            {
                text: 'Sounds good. I\'ll be there in 10 minutes.',
                createdAt: 1669468300,
                image: '',
                from: '1',
                to: '5',
                isSeen: true,
                isDelivered: true,
            },
        ]
    },
    {
        id: '6',
        name: 'Frank Miller',
        status: 'offline',
        messages: [
            {
                text: 'Don\'t forget about the meeting tomorrow.',
                createdAt: 1669469200,
                image: '',
                from: '6',
                to: '1',
                isSeen: true,
                isDelivered: true,
            },
            {
                text: 'I won\'t. Thanks for the reminder!',
                createdAt: 1669469300,
                image: '',
                from: '1',
                to: '6',
                isSeen: false,
                isDelivered: false,
            },
        ]
    },
];