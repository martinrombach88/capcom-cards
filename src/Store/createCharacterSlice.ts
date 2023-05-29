//data set -> 

//Here we expect to make a list of
//objects, rather than alter functional
//component params, so we use a type
export type CharacterType = {
    id: number
    name: string
    description: string
    series: string
    firstAppeared: string
    fightingGame: string
    media: string[]
}

//CharacterType[] means goblinsData is an array of CharacterType objects
export const goblinsData: CharacterType[] = [
    {
        id: 0,
        name: "Arthur",
        description: "Hero of Ghosts n Goblins",
        series: "Ghosts n Goblins",
        firstAppeared: "1985: Ghosts 'n Goblins Arcade",
        fightingGame: "Ultimate Marvel vs Capcom 3",
        media: ["image1", "image2", "image3"]
    }
]