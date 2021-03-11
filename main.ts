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
    otherSprite.destroy()
    mySprite3.ay = 200
    animation.runImageAnimation(
    mySprite3,
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
    mySprite3.setPosition(mySprite.x - 20, mySprite.y)
    mySprite3.follow(mySprite, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (mySprite.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
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
info.setLife(5)
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
    pot = sprites.create(img`
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 f f f f 7 7 7 f . . 
        f 7 7 7 f f f f f f f f 7 7 f . 
        f 7 7 f f f f f f f f f 7 7 f . 
        f 7 7 f f f f f f f f f 7 7 f . 
        f 7 7 f f f f f f f f f 7 f f . 
        f f 7 7 f f f f f f f 7 7 f . . 
        . f f 7 7 7 7 7 7 7 7 7 f f . . 
        . f f f 7 7 7 7 7 7 7 f f . . . 
        . f 7 f f f f f f f f f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        `, SpriteKind.pot)
    tiles.placeOnTile(pot, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    mySprite.setImage(img`
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
        `)
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            ............ee..
            ...........e11e.
            ..........e1111e
            .......fffff111e
            .....ff22252f1e.
            ....f2244d51fef.
            ...f4244ffffff..
            ..f444fffffffff.
            ..fdfffbfbfbcf..
            .fdedfbdfdfdee..
            .fbedffddddddde.
            .ffbdfddfbbbbbe.
            ..ffbbdfffffff..
            .eee2ebbbffff...
            ee11e2eeee8.....
            e1111e266998....
            e1111e6611918ff.
            .e11e6661191f5ff
            .fee66666698feff
            .fe88866668feff.
            .fe5f.8888.feff.
            ..ff........ff..
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            .......fffff....
            .....ff44454f...
            ....f4422551f...
            ...f2422ffffff..
            ..f222fffffffff.
            ..f2fffffbff....
            .f22ffbddddd....
            .f2dffddfdfd....
            .fdedfddfdfdee..
            .fbedffddddddde.
            ..fbdfddfbbbbbe.
            .e11ebdfffffff1e
            e1111ebbbffff11e
            e1111eeeee8e1ff1
            .e11e6666998f5ff
            .fee86661191feff
            .fee86661191feff
            .fe588666698feff
            ..ff.886668..ff.
            ......8888......
            `)
    } else if (mySprite.x % 2 == 0) {
        mySprite.setImage(img`
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
            . . e e e e f e e e f . . . 
            . . f e e f 5 f f f 5 f . . 
            . . f f f f f f . f f f . . 
            `)
    } else {
    	
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
