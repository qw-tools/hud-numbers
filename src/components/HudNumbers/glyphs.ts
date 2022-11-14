export class Glyph {
    type: string;
    name: string;
    char: string;


    constructor(type: string, name: string, char: string) {
        this.type = type;
        this.name = name;
        this.char = char;
    }

    get filename(): string {
        return [this.type, this.name].join("_");
    }
}


function glyphsByType(type: string): Glyph[] {
    const numbersChars = [...Array(10).keys()].map((n) => ({
        char: n.toString(),
        name: n.toString(),
    }));
    const specialChars = [
        {char: ":", name: "colon"},
        {char: "-", name: "minus"},
        // { char: "/", name: "slash", type: "nonNumber" }, OBSOLETE?
    ];
    const allChars = numbersChars.concat(specialChars);
    return allChars.map(c => new Glyph(type, c.name, c.char))
}

export default {
    nums: glyphsByType("num"),
    anums: glyphsByType("anum"),
};

