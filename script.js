var dialogue = [
    {
        character: "Bob", // does NOT know jackshii abt that computer wizardry
        dialogue: "What is your favorite color?",
        expression: "happy",
        speed: 50
    },

    {
        character: "Bartholomew Von Fishington VMMDXLI", // knows jackshii abt that computer wizardry
        dialogue: "...White.",
        expression: "neutral",
        speed: 50
    },

    {
        character: "Bob", 
        dialogue: "Yo that is NOT a color. That is a shade. YOU are a shade.",
        expression: "angry",
        speed: 50
    },

    {
        character: "Bartholomew Von Fishington VMMDXLI",
        dialogue: "??? Bro you asked ME? if you can't take my answer, then don't ask me lmao",
        expression: "confused",
        speed: 50
    },

    {
        character: "Bob",
        dialogue: "nah nah i need a REAL answer. you're a man. choose a real answer.",
        expression: "angry",
        speed: 50
    },

    {
        character: "Bartholomew Von Fishington VMMDXLI",
        dialogue: "dude when you were in preschool did they tell you that white was a color or that it was a result of all frequencies of visible light coalescing into one?",
        expression: "angry",
        speed: 50
    },

    {
        character: "Bob",
        dialogue: "i don't know bro. i didn't go to preschool. i went to  p o s t s c h o o l",
        expression: "sad",
        speed: 50
    },

    {
        character: "Bartholomew Von Fishington VMMDXLI",
        dialogue: "oh shii mb bro didn't know you were chill like that",
        expression: "surprised",
        speed: 50
    },

    {
        character: "Bob",
        dialogue: "hell yeah don't even joke lad im actually the boss",
        expression: "cool",
        speed: 50
    }
]



var charName = document.getElementById("character-name");
var dialogueText = document.getElementById("dialogue-text");
var nextButton = document.getElementById("next-button");
var charImage = document.getElementById("character-image");
var currentDialogue = 0;
let typingInterval;
let isTyping = false;



function showDialogue() {
    if (isTyping) {
        clearInterval(typingInterval);

        const line = dialogue[currentDialogue - 1];
        dialogueText.textContent = line.dialogue;

        isTyping = false;
        return;
    }

    const line = dialogue[currentDialogue];
    if (!line) {
        return; // No more dialogue lines to show
    }

    charName.textContent = line.character;
    dialogueText.textContent = "";
    charImage.src = `${line.character.toLowerCase()}/${line.expression}.png`;

    let charIndex = 0;
    isTyping = true;

    function typeCharacter() {
        if (charIndex < line.dialogue.length) {
            const char = line.dialogue[charIndex]

            dialogueText.textContent += char;
            charIndex++;
            
            let delay = line.speed;

            if (char === '.' || char === '!' || char === '?') {
                delay *= 10;
            } else if (char === ',') {
                delay *= 5;
            }

            clearInterval(typingInterval);
            typingInterval = setInterval(typeCharacter, delay);
        } else {
            clearInterval(typingInterval);
        }
    }

    typingInterval = setInterval(typeCharacter, line.speed);
    currentDialogue++;
}



nextButton.addEventListener("click", showDialogue);