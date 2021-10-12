import { writable } from "svelte/store";

export let user = writable([
    "User",
    35,
    [
        {
            id: "Comp 233",
            name: "Computer Organization",
            hours: 3,
            core: true,
        },
        {
            id: "Comp 245",
            name: "Data Structures",
            hours: 3,
            core: true,
        },
        {
            id: "COMP 550",
            name: "Algorithms and Analysis",
            hours: 3,
            core: true,
        },
    ],
    [
        {
            id: "Comp 233",
            name: "Computer Organization",
            hours: 3,
            core: false,
        },
        {
            id: "Comp 245",
            name: "Data Structures",
            hours: 3,
            core: false,
        },
        {
            id: "COMP 210",
            name: "Data Structures and Analysis",
            hours: 3,
            core: false,
        },
        {
            id: "COMP 550",
            name: "Algorithms and Analysis",
            hours: 3,
            core: false,
        },
    ],
    5,
]);
export let user2 = writable({
    id: "User",
    completedHours: 35,
    completedClasses: 5,
    completedCourses: {
        core: [{
            id: "Comp 233",
            name: "Computer Organization",
            hours: 3,
            core: true,
        },
        {
            id: "Comp 245",
            name: "Data Structures",
            hours: 3,
            core: true,
        },
        {
            id: "COMP 550",
            name: "Algorithms and Analysis",
            hours: 3,
            core: true,
        },],
        nonCore: [{
            id: "Comp 233",
            name: "Computer Organization",
            hours: 3,
            core: false,
        },
        {
            id: "Comp 245",
            name: "Data Structures",
            hours: 3,
            core: false,
        },
        {
            id: "COMP 210",
            name: "Data Structures and Analysis",
            hours: 3,
            core: false,
        },
        {
            id: "COMP 550",
            name: "Algorithms and Analysis",
            hours: 3,
            core: false,
        },],
    }
})