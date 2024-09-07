const mongoose = require('mongoose');
const SchoolModel = require('./SchoolModel'); // Убедитесь, что путь к модели правильный

// Функция для добавления школы
const addSchool = async () => {
    // Подключение к MongoDB
    try {
        await mongoose.connect('mongodb+srv://seksikoleg5:se4HivNRYKdydnzc@cluster0.pdc2rrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Создание нового документа школы
        const newSchool = new SchoolModel({
            ESL: {
                language: [
                    {
                        id: 1,
                        lang: "English",
                        level: [
                            {
                                id: 1,
                                levelName: "Beginner",
                                date: [
                                    {
                                        d: new Date("2024-09-03"),
                                        allSlots: 10,
                                        workTime: [
                                            {
                                                time: new Date("2024-09-03T10:00:00Z"),
                                                slots: 5
                                            },
                                            {
                                                time: new Date("2024-09-03T14:00:00Z"),
                                                slots: 3
                                            }
                                        ],
                                        nonWorkTime: [
                                            {
                                                start: new Date("2024-09-03T09:00:00Z"),
                                                end: new Date("2024-09-03T10:00:00Z")
                                            },
                                            {
                                                start: new Date("2024-09-03T15:00:00Z"),
                                                end: new Date("2024-09-03T17:00:00Z")
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 2,
                                levelName: "Intermediate",
                                date: [
                                    {
                                        d: new Date("2024-09-04"),
                                        allSlots: 8,
                                        workTime: [
                                            {
                                                time: new Date("2024-09-04T11:00:00Z"),
                                                slots: 4
                                            }
                                        ],
                                        nonWorkTime: [
                                            {
                                                start: new Date("2024-09-04T08:00:00Z"),
                                                end: new Date("2024-09-04T11:00:00Z")
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        lang: "Spanish",
                        level: [
                            {
                                id: 1,
                                levelName: "Beginner",
                                date: [
                                    {
                                        d: new Date("2024-09-05"),
                                        allSlots: 7,
                                        workTime: [
                                            {
                                                time: new Date("2024-09-05T09:00:00Z"),
                                                slots: 3
                                            }
                                        ],
                                        nonWorkTime: [
                                            {
                                                start: new Date("2024-09-05T08:00:00Z"),
                                                end: new Date("2024-09-05T09:00:00Z")
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                teacher: [
                    {
                        data: {
                            lang: [
                                {
                                    id: 1,
                                    lang: "English",
                                    level: [
                                        {
                                            id: 1,
                                            levelName: "Beginner",
                                            date: [
                                                {
                                                    d: new Date("2024-09-03"),
                                                    allSlots: 10,
                                                    workTime: [
                                                        {
                                                            time: new Date("2024-09-03T10:00:00Z"),
                                                            slots: 5
                                                        }
                                                    ],
                                                    nonWorkTime: [
                                                        {
                                                            start: new Date("2024-09-03T09:00:00Z"),
                                                            end: new Date("2024-09-03T10:00:00Z")
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            teacherId: "T001",
                            teacherName: "John Doe"
                        }
                    },
                    {
                        data: {
                            lang: [
                                {
                                    id: 2,
                                    lang: "Spanish",
                                    level: [
                                        {
                                            id: 1,
                                            levelName: "Beginner",
                                            date: [
                                                {
                                                    d: new Date("2024-09-05"),
                                                    allSlots: 7,
                                                    workTime: [
                                                        {
                                                            time: new Date("2024-09-05T09:00:00Z"),
                                                            slots: 3
                                                        }
                                                    ],
                                                    nonWorkTime: [
                                                        {
                                                            start: new Date("2024-09-05T08:00:00Z"),
                                                            end: new Date("2024-09-05T09:00:00Z")
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            teacherId: "T002",
                            teacherName: "Jane Smith"
                        }
                    }
                ],
                id: "school_002",
                schoolName: "Language School"
            }
        });

        // Сохранение нового документа в коллекции
        const savedSchool = await newSchool.save();
        console.log('School added successfully:', savedSchool);
    } catch (error) {
        console.error('Error adding school:', error);
    } finally {
        // Закрыть соединение с базой данных
        await mongoose.connection.close();
    }
};

// Вызов функции добавления школы
addSchool();
