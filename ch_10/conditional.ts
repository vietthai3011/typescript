type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>;

type GetElementType<T> = T extends any[] ? T[number] : T;
type Example1 = GetElementType<StringArray>;

const text1 = "123";

type Example2 = GetElementType<typeof text1>;

type FullNamePerson = {
    firstName: string;
    lastName: string;
};

type FullNameOrNoThing<T> = T extends FullNamePerson ? string : never;

function getFullname<T extends object>(person: T): FullNameOrNoThing<T> {
    if ("firstName" in person && "lastName" in person && person.firstName && person.lastName)
        return `${person.firstName} ${person.lastName}` as FullNameOrNoThing<T>;

    throw new Error("No first name and / or last name found.");
}

const name1 = getFullname({});
const name2 = getFullname({ firstName: "Viet", lastName: "Thai" });
