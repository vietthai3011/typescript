// const appUser = {
//     name: "Thai",
//     age: 22,
//     description: [{ id: "p1", title: "admin", description: "Admin access" }],
// };

// type AppUser = typeof appUser;

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
};

type Perms = AppUser["permissions"];
type Perm = Perms[number];
