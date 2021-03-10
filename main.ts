namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const pot = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pot, function (sprite, otherSprite) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    pot.destroy()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . e e e e e . . . . . 
        . . . . e e e e e e e . . . . 
        . . . e e e e e e e e e . . . 
        . . e f f e e e e e f f e . . 
        . e e e 1 f e e e f 1 e e e . 
        . e e e 1 f e e e f 1 e e e . 
        e e e e 1 f 1 e 1 f 1 e e e e 
        e e e e 1 1 1 e 1 1 1 e e e e 
        e e e e e e e e e e e e e e e 
        . e e e d d d d d d d e e e . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . f f d d d d d d d d d f f . 
        f f f f d d d d d d d f f f f 
        f f f f f f . . . f f f f f f 
        f f f f f . . . . . f f f f f 
        `,img`
        . . . . . e e e e e . . . . . 
        . . . . e e e e e e e . . . . 
        . . . e e e e e e e e e . . . 
        . . e e e e e e e e e e e . . 
        . e e f f e e e e e f f e e . 
        . e e e 1 f e e e f 1 e e e . 
        e e e e 1 f e e e f 1 e e e e 
        e e e e 1 1 e e e 1 1 e e e e 
        e e e e e e e e e e e e e e e 
        . e e e d d d d d d d e e e . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . f f d d d d d d d d d f f . 
        f f f f d d d d d d d f f f f 
        f f f f f f . . . f f f f f f 
        f f f f f . . . . . f f f f f 
        `,img`
        . . . . . e e e e e . . . . . 
        . . . . e e e e e e e . . . . 
        . . . e e e e e e e e e . . . 
        . . e e e e e e e e e e e . . 
        . e e f f e e e e e f f e e . 
        . e e e 1 f e e e f 1 e e e . 
        e e e e 1 f e e e f 1 e e e e 
        e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e 
        . e e e d d d d d d d e e e . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . f f d d d d d d d d d f f . 
        f f f f d d d d d d d f f f f 
        f f f f f f . . . f f f f f f 
        f f f f f . . . . . f f f f f 
        `,img`
        . . . . . e e e e e . . . . . 
        . . . . e e e e e e e . . . . 
        . . . e e e e e e e e e . . . 
        . . e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . 
        . e f e e e e e e e e e f e . 
        e e f f f f e e e f f f f e e 
        e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e 
        . e e e d d d d d d d e e e . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . f f d d d d d d d d d f f . 
        f f f f d d d d d d d f f f f 
        f f f f f f . . . f f f f f f 
        f f f f f . . . . . f f f f f 
        `],
    300,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.melt)
})
let mySprite3: Sprite = null
let pot: Sprite = null
let mySprite2: Sprite = null
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
mySprite.setPosition(5, 160)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f f 4 4 4 4 4 f f f f . . 
        . . f f 4 4 5 5 5 5 5 f f f f . 
        . . f 4 5 5 5 5 5 5 5 5 5 f f . 
        . f f 4 5 5 4 4 4 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 5 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 4 5 5 4 5 5 f 5 5 5 f f . 
        . f 4 4 5 5 f f f f 5 5 f f f . 
        . f f 4 5 5 5 5 5 5 5 f f f . . 
        . . f f 4 5 5 5 5 5 f f f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f f 4 4 4 4 f f f f . . . 
        . . f f 4 4 5 5 5 5 f f f f . . 
        . . f 4 5 5 5 5 5 5 5 5 f f . . 
        . f f 4 5 5 4 4 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 4 5 5 4 5 f 5 5 5 f f . . 
        . f 4 4 5 5 f f f 5 5 f f f . . 
        . f f 4 5 5 5 5 5 5 f f f . . . 
        . . f f 4 5 5 5 5 f f f . . . . 
        . . . f f f f f f f f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 4 4 f f f f . . . 
        . . . f f 4 5 5 5 5 f f f f . . 
        . . . f 4 5 5 5 5 5 5 5 f f . . 
        . . f f 4 5 4 4 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 4 5 4 5 f 5 5 5 f f . . 
        . . f 4 4 5 f f f 5 5 f f f . . 
        . . f f 4 5 5 5 5 5 f f f . . . 
        . . . f f 4 5 5 5 f f f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f f 4 4 f f f f . . . . 
        . . . f f 4 5 5 5 f f f f . . . 
        . . . f 4 5 5 5 5 5 5 f f . . . 
        . . f f 4 5 4 4 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 4 5 4 f 5 5 5 f f . . . 
        . . f 4 4 5 f f 5 5 f f f . . . 
        . . f f 4 5 5 5 5 f f f . . . . 
        . . . f f 4 5 5 f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . . . f 4 4 f f f . . . . . 
        . . . . f f 5 5 f f f f . . . . 
        . . . . f 4 5 5 5 5 f f . . . . 
        . . . f f 4 4 4 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 4 4 f 5 5 f f . . . . 
        . . . f 4 4 f f 5 f f f . . . . 
        . . . f f 4 5 5 f f f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `,img`
        . . . . . . f f . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f 4 5 5 f f . . . . . 
        . . . . f f 4 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 5 5 5 f f . . . . . 
        . . . . f 4 4 5 5 f f . . . . . 
        . . . . f 4 4 5 f f f . . . . . 
        . . . . f f 4 f f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . . . f 4 4 f f f . . . . . 
        . . . . f f 5 5 f f f f . . . . 
        . . . . f 4 5 5 5 5 f f . . . . 
        . . . f f 4 4 4 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 5 4 f 5 5 f f . . . . 
        . . . f 4 4 4 f 5 5 f f . . . . 
        . . . f 4 4 f f 5 f f f . . . . 
        . . . f f 4 5 5 f f f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f f 4 4 f f f f . . . . 
        . . . f f 4 5 5 5 f f f f . . . 
        . . . f 4 5 5 5 5 5 5 f f . . . 
        . . f f 4 5 4 4 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 5 5 4 f 5 5 5 f f . . . 
        . . f 4 4 5 4 f 5 5 5 f f . . . 
        . . f 4 4 5 f f 5 5 f f f . . . 
        . . f f 4 5 5 5 5 f f f . . . . 
        . . . f f 4 5 5 f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 4 4 4 f f f f . . . 
        . . . f f 4 5 5 5 5 f f f f . . 
        . . . f 4 5 5 5 5 5 5 5 f f . . 
        . . f f 4 5 4 4 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 5 5 4 5 f 5 5 5 f f . . 
        . . f 4 4 5 4 5 f 5 5 5 f f . . 
        . . f 4 4 5 f f f 5 5 f f f . . 
        . . f f 4 5 5 5 5 5 f f f . . . 
        . . . f f 4 5 5 5 f f f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f f 4 4 4 4 f f f f . . . 
        . . f f 4 4 5 5 5 5 f f f f . . 
        . . f 4 5 5 5 5 5 5 5 5 f f . . 
        . f f 4 5 5 4 4 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 5 5 5 4 5 f 5 5 5 f f . . 
        . f 4 4 5 5 4 5 f 5 5 5 f f . . 
        . f 4 4 5 5 f f f 5 5 f f f . . 
        . f f 4 5 5 5 5 5 5 f f f . . . 
        . . f f 4 5 5 5 5 f f f . . . . 
        . . . f f f f f f f f . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    pot = sprites.create(, SpriteKind.pot)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
