input.onButtonPressed(Button.A, function () {
    Abiadura = 40
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
    Abiadura = 0
})
input.onButtonPressed(Button.AB, function () {
    Abiadura = 10
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Abiadura)
    basic.pause(2000)
    while (Abiadura > 0) {
        Abiadura += 2
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Abiadura)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    Abiadura = 20
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Abiadura)
    basic.pause(5000)
    Abiadura += 20
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
    Abiadura = 0
})
let Abiadura = 0
Abiadura = 0
basic.showNumber(Abiadura)
basic.pause(1000)
basic.showString("kO1")
basic.pause(500)
basic.forever(function () {
    basic.showNumber(Abiadura)
})
