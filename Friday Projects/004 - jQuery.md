## Before Starting GrillBer Requirements
 
With things going so well with GrillBer, the great people over at our Retention and Prevention team have come up with a great idea! If we put an interactive game as an easter egg somewhere, they think that user retention will skyrocket! Before we can move forward with GrillBer, we need to make this easter egg!

We have decided to go with the classic Concentration game. The rules are simple!

- Make a square grid of cards
- The user selects two cards
    - If the cards match, they are removed from the game
    - If the cards don't match, they are flipped back over
- The user keeps selecting cards until they are all removed

Here are our requirements for this game:

1. Game must have three distinct states:
    1. Start - User has the option of starting the game
    1. Playing - User is actively playing the game
    1. End - User has won the game, and has the option of starting again
1. Cards should be randomly selected and placed into the browser
1. All Cards should share a "back", so they are all the same when "upside down"
1. Each matching pair should have the same "front" image
1. When a user clicks a card, it should "flip" over to reveal its front
1. When a user clicks a second card, it should also "flip" over to reveal its front
1. Once two cards are selected:
    1. If they are the same, they should be removed from the board
    1. If they are different, the should both "flip" back over to show their "back"
1. Once all the cards have been removed, move to the end screen
1. You must use jQuery for all DOM manipulation. No more `document.` manipulation!
1. You cannot use event element attributes. You must attach events in jQuery. For example, this is invalid: `<button onclick="doThing()"></button>`
1. Things should look good. Make sure the CSS makes things look good!
1. Use animations and transitions to make it feel more interactive! 
    - Ideas
        - Have cards fly off the screen when they pick a matching pair
        - Have cards flip over! (This might take a mixture of CSS and jQuery)

## Requirements

1. Convert all DOM manipulation into jQuery (no more `document.`)
1. Use `$.ajax` to async retrieve all of the grill data from the back end
1. When users input their first 