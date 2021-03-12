namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const pot = SpriteKind.create()
}
let myEnemy: Sprite[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    current_level += 1
    startLevel()
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
    mySprite3.ay = 300
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
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level3`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level4`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(mySprite)
    info.setLife(5)
    for (let value of myEnemy) {
        value.destroy()
    }
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (mySprite.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let pot: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let current_level = 0
let mySprite: Sprite = null
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
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9991111111199999999999999999999999999999999999999999999999911111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999
    9911111111111111111111999999999999999999999999999999999999991111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111119999999999999999999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111111111999999999999999999999999999999111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111111111199999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9911111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9991111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111199999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111199999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111199999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111119999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111199999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111199999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111199999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111999999999999
    9999999999999999999999999999999991199999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111119999999999999
    999999999999999999999999999999911.c99999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111199999999999999
    9999999999999999999999999999911dd11c9999999999999999999999999999999999999999999999999999999999999999999999999999999999991111119999999999999999999999999999999999
    99999999999999999999999999911dddd1ccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911ddddd1ccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991dddddd11cccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999991ddddddd1cccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999991ddddddd1cccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999991dddddddd1cccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999991111dddddddd1ccccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999911111ddddddddddd1cccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111dddddddddddddddd1cccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999991dddddddddddddddddd1cccccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999911dddddddddddddddddd1cccccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999911dddddddddddddddddddd1cccccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999991dddddddddddddddddddddd1ccccccccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99911dddddddddddddddddddddd1cccccccccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    991dddddddddddddddddddddddd1cccccccccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999991199999999999999999999999999999
    c1ddddddddddddddddddddddddd1cccccccccccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999c.11999999999999999999999999999
    dddddddddddddddddddddddddd1cccccccccccccccccccc99999999999999911cccc999999999999999999999999999999999999999999999999999999999999c11dd119999999999999999999999999
    dddddddddddddddddddddddddd1ccccccccccccccccccccc9999999999999911ccccccccc999999999999999999999999999999999999999999999999999999ccc1dddd1199999999999999999999999
    dddddddddddddddddddddddd11ccccccccccccccccccccccc99999999999991d1ccccccccc9999999999999999999999999999999999999999999999999999ccccc1ddddd11999999999999999999999
    dddddddddddddddddddddddd1ccccccccccccccccccccccccc9999999999991dd1ccccccccc99999999999999999999999999999999999999999999999999cccccc11dddddd199999999999999999999
    dddddddddddddddddddddd11ccccccccccccccccccccccccccc99999999991dddd1cccccccc9999999999999999999999999999999999999999999999999cccccccc1ddddddd19999999999999999999
    dddddddddddddddddddddd1ccccccccccccccccccccccccccccc9999999991ddddd1ccccccc999999999999999999999999999999999999999999999999cccccccccc1ddddddd1999999999999999999
    ddddddddddddddddddddd1ccccccccccccccccccccccccccccccccc9999991ddddd1cccccccc99999999999999999999999999999999999999999999999cccccccccc1dddddddd199999999999999999
    dddddddddddddddddddd1cccccccccccccccccccccccccccccccccccc9991dddddd1cccccccc99999999999999999999999999999999999999999999999ccccccccccc1dddddddd11119999999999999
    ddddddddddddddddddd1cccccccccccccccccccccccccccccccccccccc991ddddd1ccccccccc9999999999999999999999999999999999999999999999cccccccccccc1ddddddddddd11111999999999
    dddddddddddddddddd1ccccccccccccccccccccccccccccccccccccccc991ddddd1cccccccccc999999999999999999999999999999999999999999999cccccccccccc1dddddddddddddddd111999999
    dddddddddddddddddd1cccccccccccccccccccccccccccccccccccccccc1dddddd1ccccccccccc9999999999999999999999999999999999999999999cccccccccccccc1dddddddddddddddddd199999
    ddddddddddddddddd1cccccccccccccccccccccccccccccccccccccccc11dddddd1cccccccccccc999999999999999999999999999999999999999999cccccccccccccc1dddddddddddddddddd119999
    dddddddddddddddd1ccccccccccccccccccccccccccccccccccccccccc1ddddddd1ccccccccccccc99999999999999999999999999999999999999999cccccccccccccc1dddddddddddddddddddd1199
    dddddddddddddddd1cccccccccccccccccccccccccccccccccccccccc1dddddddd1ccccccccccccc9999999999999999999999999999999999999999ccccccccccccccc1dddddddddddddddddddddd19
    ddddddddddddddd1ccccccccccccccccccccccccccccccccccccccccc1dddddddd1cccccccccccccc999999999999999999999999999999999999999cccccccccccccccc1dddddddddddddddddddddd1
    dddddddddddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddd1ccccccccccccccc999999999999999999999999999999999999cccccccccccccccccc1ddddddddddddddddddddddd
    ddddddddddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddd1ccccccccccccccccc99999999999999999999999999999999999cccccccccccccccccc1ddddddddddddddddddddddd
    ddddddddddddd1cccccccccccccccccccccccccccccccccccccccc1dddddddddd1ccccccccccccccccc9999999999999cccc11999999999999999cccccccccccccccccccc1dddddddddddddddddddddd
    ddddddddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddddd1cccccccccccccccccc9999999ccccccccc1199999999999999ccccccccccccccccccccc1dddddddddddddddddddddd
    ddddddddddd1cccccccccccccccccccccccccccccccccccccccc1ddddddddddd1cccccccccccccccccccc99999ccccccccc1d19999999999999ccccccccccccccccccccccc11dddddddddddddddddddd
    ddddddddd11cccccccccccccccccccccccccccccccccccccccc1dddddddddddd1ccccccccccccccccccccc999ccccccccc1dd1999999999999ccccccccccccccccccccccccc1dddddddddddddddddddd
    dddddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddddddd1cccccccccccccccccccccc99cccccccc1dddd19999999999ccccccccccccccccccccccccccc11dddddddddddddddddd
    ddddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddddddd1cccccccccccccccccccccccccccccccc1ddddd1999999999ccccccccccccccccccccccccccccc1dddddddddddddddddd
    dddddd11cccccccccccccccccccccccccccccccccccccccc1dddddddddddddd1cccccccccccccccccccccccccccccccc1ddddd1999999ccccccccccccccccccccccccccccccccc1ddddddddddddddddd
    dddd111cccccccccccccccccccccccccccccccccccccccc1ddddddddddddddd1cccccccccccccccccccccccccccccccc1dddddd1999cccccccccccccccccccccccccccccccccccc1dddddddddddddddd
    11111ccccccccccccccccccccccccccccccccccccccccc1ddddddddddddddd1cccccccccccccccccccccccccccccccccc1ddddd199cccccccccccccccccccccccccccccccccccccc1ddddddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccc1dddddddddddddddd1cccccccccccccccccccccccccccccccccc1ddddd199ccccccccccccccccccccccccccccccccccccccc1dddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccc11dddddddddddddddd1cccccccccccccccccccccccccccccccccc1dddddd1cccccccccccccccccccccccccccccccccccccccc1dddddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccc11ddddddddddddddddd1cccccccccccccccccccccccccccccccccc1dddddd11cccccccccccccccccccccccccccccccccccccccc1ddddddddddddd
    ccccccccccccccccccccccccccccccccccccccccccc1dddddddddddddddddd1cccccccccccccccccccccccccccccccccc1ddddddd1ccccccccccccccccccccccccccccccccccccccccc1dddddddddddd
    ccccccccccccccccccccccccccccccccccccccccc11ddddddddddddddddddd1cccccccccccccccccccccccccccccccccc1dddddddd1cccccccccccccccccccccccccccccccccccccccc1dddddddddddd
    ccccccccccccccccccccccccccccccccccccccccc1dddddddddddddddddddd1cccccccccccccccccccccccccccccccccc1dddddddd1ccccccccccccccccccccccccccccccccccccccccc1ddddddddddd
    cccccccccccccccccccccccccccccccccccccccc11dddddddddddddddddddd1cccccccccccccccccccccccccccccccccc1ddddddddd1cccccccccccccccccccccccccccccccccccccccc11dddddddddd
    ccccccccccccccccccccccccccccccccccccccc11ddddddddddddddddddddd1ccccccccccccccccccccccccccccccccccc1ddddddddd1cccccccccccccccccccccccccccccccccccccccc11ddddddddd
    ccccccccccccccccccccccccccccccccccccccc1ddddddddddddddddddddd11ccccccccccccccccccccccccccccccccccc1dddddddddd1cccccccccccccccccccccccccccccccccccccccc1ddddddddd
    ccccccccccccccccccccccccccccccccccccc11dddddddddddddddddddddd1cccccccccccccccccccccccccccccccccccc1ddddddddddd1cccccccccccccccccccccccccccccccccccccccc11ddddddd
    cccccccccccccccccccccccccccccccccccc1dddddddddddddddddddddddd1ccccccccccccccccccccccccccccccccccccc1ddddddddddd1cccccccccccccccccccccccccccccccccccccccc1ddddddd
    cccccccccccccccccccccccccccccccccc11dddddddddddddddddddddddd1cccccccccccccccccccccccccccccccccccccc1dddddddddddd1cccccccccccccccccccccccccccccccccccccccc11ddddd
    `)
current_level = 0
startLevel()
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
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy = 0
        mySprite.ay = 0
    } else {
        mySprite.ay = 200
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
