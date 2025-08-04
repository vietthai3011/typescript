const userName = "Thai";
type b = typeof userName;

const B: b = "Thai";

const setting = {
    difficulty: "easy",
    minLevel: 10,
    didStart: false,
    player: ["John", "Jane"],
};

type Settings = typeof setting;
