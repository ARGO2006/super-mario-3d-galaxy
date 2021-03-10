// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200110001010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000105050501000000000000000000080000080000000000000000000000000000080000000000000000000000000000000000010105010100000000000000000203030303030400000000090000000001010101010100000000000800000000000000000001010101010000000000000000000000000000000000020303030400000000000000000000000101010100000000080000000101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000010505050000000000000000000000000000000000000000000000000000000000080000000000000000000001010000000001050505000008080000000000000000000000000000000000000000000000000207040000000000090800010100000000000105050500000808000000000000000000000000000000000000080009080000000000000000000303030303030300000000010101010101010100000000000000000000000900080000020303030303040000000000000000000000000000000000000000000000000000000000000000000000000002030303030000000000000002040000000000000000000000000000000000000000000000000000000000080000000002030400000000000000000000000000000000000000080000000000000000000000000000000000000000000204000000000000000000000000000800090800000000000002030001000000000000000000000000000900000008000002040000000000000009080000000002030303030400000000000000000000000000000000000000000101010101010100000000000000000101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
22222.............................................
22222.............................................
22222........2222222.........222222...............
22222.................22222...........2222........
22222........................................22...
2...........................................22....
2...............................2.2........22.....
2......................................2222222....
22222222................2222222...................
..................22222.......22..................
................222...............................
..........22.......................22.2...........
.........22.............222222....................
2222222........222222.............................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
