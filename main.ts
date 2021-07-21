namespace SpriteKind {
    export const forest = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`the kings layer`)
    skeleton_king = sprites.create(assets.image`skeleton king`, SpriteKind.Enemy)
    skeleton_king.setPosition(68, 7)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . a a 8 a a . . . . . . 
        . . . . a 8 8 8 8 8 a . . . . . 
        . . . . a 8 9 9 9 8 a . . . . . 
        . . . . a 8 9 f 9 8 a . . . . . 
        . . . . a 8 9 9 9 8 a . . . . . 
        . . . . a 8 8 8 8 8 a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, skeleton_king, 50, 50)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ....................e5..........
        ..................5d5e5d5.......
        ..................d5d5d5d.......
        .................e5d5d5d5.......
        ................e5e5d5d5d.......
        ...............e5e5d5d5d5.......
        ..............e5e.d5d5d5d.......
        .............e5e..5d5d5d5.......
        ............e5e.................
        ...........e5e..................
        ..........e5e...................
        .........e5e....................
        .........5e.....................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, mySprite, 100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    if (mySprite.overlapsWith(myEnemy)) {
        myEnemy.destroy()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`the labyrinth`)
    mySprite.setPosition(4, 2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.forest, function (sprite, otherSprite) {
    entrance_to_forest.destroy()
    controller.moveSprite(mySprite, 40, 40)
    tiles.setTilemap(tilemap`the great forest`)
    mySprite.setPosition(8, 7)
    scene.cameraFollowSprite(mySprite)
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.setPosition(76, 69)
    myEnemy.startEffect(effects.blizzard)
    myEnemy.say("BOOOOO", 5000)
    myEnemy.follow(mySprite, 25)
})
info.onLifeZero(function () {
    game.splash("On the death of the hero, the land was over run with undead, and the evil king became the ruler of the world.")
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    myEnemy.startEffect(effects.disintegrate)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    skeleton_king.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(1000)
    info.changeLifeBy(-1)
    pause(1000)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let skeleton_king: Sprite = null
let entrance_to_forest: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
game.splash("The Dark Tree")
music.spooky.play()
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
    999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
    999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
    99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
    9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
    9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
    699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
    999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
    696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
    69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
    6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
    9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
    9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
    999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
    999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
    999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
    999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
    666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
    666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
    6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
    66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
    666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
    666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
    b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
    b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
    bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
    444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
    44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
    444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
    4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
    4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
    4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
    4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
    4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
    4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
    4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
    4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
    44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
    44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
    44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
    44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
    6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
    4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
    4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
    4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
    4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
    444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
    fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
    effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
    beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
    dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
    efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
    ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
    ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
    ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
    fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
    ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
    fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
    fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
    ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
    fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
    ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
    bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
    bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
    bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
    bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
    bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
    bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
    bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
    ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
    ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
    cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
    cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
    bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
    bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
    bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
    bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
    cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
    bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
    bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
    cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
    ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
    bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
    bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
    ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
    bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
    dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
    d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
    ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
    4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
    dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
    `)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(10)
mySprite.setPosition(15, 106)
mySprite.say("I will defeat the evil king", 2000)
controller.moveSprite(mySprite, 40, 0)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setPosition(136, 98)
myEnemy.startEffect(effects.blizzard)
myEnemy.say("BOOOOO", 5000)
myEnemy.follow(mySprite, 25)
entrance_to_forest = sprites.create(img`
    ........................
    ...........ff...........
    ..........f88f..........
    .........ff88ff.........
    .........f8888f.........
    ........f888888f........
    ......ff88888888ff......
    .....f888888888888f.....
    .....ff8888888888ff.....
    .....f888888888888f.....
    ....f88ff88888fff88f....
    ....ffff88fff88f8fff....
    .....f8f8ff8ff8f88f.....
    ....f88fff88fffff8f.....
    ....f8ffff8fffffffff....
    ....fff88ffffff88fff....
    ....f888ffff8fff888f....
    ...f888ff8f88f8ff888f...
    ..f8888888888f888888f...
    .f88f8888888888888888f..
    .fff8888888888888888f8f.
    .ff888888888888888888ff.
    ..ff88f888f88f8888f888f.
    ..f8ff88fff88ff8f88ff88f
    .f88ff8ff8f8f88fff8fffff
    f88ff8ff88ffff88ffff8f..
    ffff88f88ffffff8f8ff88f.
    .ffffffffffffffff88ff8f.
    .ff888ff88ff8ff8ff8f8ff.
    .f888ff888ff88f8888888ff
    f888888888f888888888888f
    fff888f8888888888f888ff.
    ..ffff88f888888888ffff..
    .....f8ff88f888ff8f.....
    ......fff8fff88ffff.....
    .........ffeeff.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.forest)
entrance_to_forest.setPosition(139, 96)
