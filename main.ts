controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.melt)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . 4 4 4 4 4 . . . 
    . . . . 4 4 2 2 2 5 2 2 . . 
    . . . 4 2 2 2 2 5 5 1 2 . . 
    . . 4 2 2 2 2 f f f f f f . 
    . 4 2 2 2 f f f f f f f f f 
    . 4 d f f f b f b f b . . . 
    4 d e d f b d f d f d e e . 
    4 b e d f f d d d d d d d e 
    4 f b d f d d f b b b b b e 
    . f f b b d f f f f f f f . 
    . . f e e b b b f f f f . . 
    . . . f 2 e e e 9 8 . . . . 
    . . f 2 2 2 6 6 9 9 8 . . . 
    . . f e e e 6 1 1 9 1 8 . . 
    . . f 1 1 1 e 1 1 9 1 8 . . 
    . . f 1 1 e 6 6 6 9 9 8 . . 
    . . f 1 1 e 6 6 8 6 8 . . . 
    . . . e e e e f e f . . . . 
    . . . f e e e 5 f 5 f . . . 
    . . . f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 200
mySprite.setPosition(5, 140)
scene.cameraFollowSprite(mySprite)
