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
    cameos: string
    media?: string[]
}

//CharacterType[] means goblinsData is an array of CharacterType objects
export const goblinsData: CharacterType[] = [
    
    {
        id: 1,
        name: "Arthur",
        series: "gng",
        description: "Arthur is a fearless knight faced with fending off legions of the undead and supernatural creatures. Arthur has defeated powerful demon lords, such as Astaroth, Lucifer and Sardius, and lived to tell about it.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Fights in Marvel vs Capcom 3"
    },
    
    {
        id: 2, 
        name: "The Princess",
        series: "gng",
        description: "The monarch of an unfortunate kingdom, she is kidnapped by demons at the start of each Ghost ‘n Goblins game. Each time she uses her powers to leave a magical item in a chest, for the knight Arthur to find. Arthur cannot defeat a demon lord without it.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Arthur's ending in  Marvel vs Capcom 3"
    },
    
    {
        id:3, 
        name: "Red Arremer",
        series: "gng",
        description: "One of the enemies from Ghost ‘n Goblins. It attacks by flying, spitting fire and spawning smaller demons. With a brutal attack pattern that is difficult to predict, it difficult to keep your armor when facing him.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Gargoyle's Quest for Super Nintendo"
    },

    {
        id: 4,
        name: "Magician",
        series: "gng",
        description: "This Ghost ‘n goblins enemy occasionally appears when breaking open a chest. This enemy can temporarily transform the player into a helpless entity such as a baby, old man, a grasshopper or a frog.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Gargoyle's Quest for Super Nintendo"
    },

    
    {
        id: 5, 
        name: "Astaroth",
        series: "gng",
        description: "A powerful demon lord and ruler of the demon realm village in Ghosts ‘n Goblins. Using his two mouths, he breathes fire and fires lazers. He takes an enormous amount of damage to kill, making him one of Arthur's toughest enemies.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Akuma's secret ending in SNK vs Capcom"
    },
    
    {
        id: 6,
        name: "Zardius",
        series: "gng",
        description: "The final demon lord in Super Ghouls ‘n Ghosts. Should Arthur beat Astaroth, the princess will inform him that her bracelet can be found in a treasure chest somewhere in the demon realm. The game must be beaten one more time and Arthur must find the bracelet on the way to fight Zardius.",
        firstAppeared: "1996, ghouls n ghosts for super nintendo",
        cameos: "SNK vs Capcom Card Fighters"
    },
    

]

export const sfData: CharacterType[] = [
    
    {
        id: 1,
        name: "Ryu",
        series: "sf",
        description: "The ",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Fights in Marvel vs Capcom 3"
    },
    
    {
        id: 2, 
        name: "M Bison",
        series: "sf",
        description: "The monarch of an unfortunate kingdom, she is kidnapped by demons at the start of each Ghost ‘n Goblins game. Each time she uses her powers to leave a magical item in a chest, for the knight Arthur to find. Arthur cannot defeat a demon lord without it.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Arthur's ending in  Marvel vs Capcom 3"
    },
    
    {
        id:3, 
        name: "Chun Li",
        series: "sf",
        description: "One of the enemies from Ghost ‘n Goblins. It attacks by flying, spitting fire and spawning smaller demons. With a brutal attack pattern that is difficult to predict, it difficult to keep your armor when facing him.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Gargoyle's Quest for Super Nintendo"
    },

    {
        id: 4,
        name: "R Mika",
        series: "sf",
        description: "This Ghost ‘n goblins enemy occasionally appears when breaking open a chest. This enemy can temporarily transform the player into a helpless entity such as a baby, old man, a grasshopper or a frog.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Gargoyle's Quest for Super Nintendo"
    },

    
    {
        id: 5, 
        name: "Bruce",
        series: "sf",
        description: "A powerful demon lord and ruler of the demon realm village in Ghosts ‘n Goblins. Using his two mouths, he breathes fire and fires lazers. He takes an enormous amount of damage to kill, making him one of Arthur's toughest enemies.",
        firstAppeared: "1985, ghost ‘n goblins arcade machine",
        cameos: "Akuma's secret ending in SNK vs Capcom"
    },
    
    {
        id: 6,
        name: "Yuri",
        series: "sf",
        description: "The final demon lord in Super Ghouls ‘n Ghosts. Should Arthur beat Astaroth, the princess will inform him that her bracelet can be found in a treasure chest somewhere in the demon realm. The game must be beaten one more time and Arthur must find the bracelet on the way to fight Zardius.",
        firstAppeared: "1996, ghouls n ghosts for super nintendo",
        cameos: "SNK vs Capcom Card Fighters"
    },
    

]