while (input.buttonIsPressed(Button.A)) {
    basic.showString("Pac-Man!")
}
let block = 0
let paused = 0
let ghost = game.createSprite(0, 0)
let hero = game.createSprite(2, 2)
let food = game.createSprite(4, 4)
ghost.change(LedSpriteProperty.Blink, 15)
food.set(LedSpriteProperty.Brightness, 8)
while (true) {
    basic.pause(1000)
    if (ghost.get(LedSpriteProperty.X) < hero.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, 1)
    } else if (ghost.get(LedSpriteProperty.X) > hero.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, -1)
    } else if (ghost.get(LedSpriteProperty.Y) < hero.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, 1)
    } else if (ghost.get(LedSpriteProperty.Y) > hero.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.X) > 200) {
        hero.change(LedSpriteProperty.X, 1)
    } else if (input.acceleration(Dimension.X) < -200) {
        hero.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        hero.change(LedSpriteProperty.Y, 1)
    } else if (input.acceleration(Dimension.Y) < -200) {
        hero.change(LedSpriteProperty.Y, -1)
    }
    if (hero.isTouching(food)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
        if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) >= 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) >= 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 0)
        } else {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 0)
        }
    }
    if (hero.isTouching(ghost)) {
        game.gameOver()
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
}
