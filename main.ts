radio.setGroup(198)
music.playTone(262, music.beat(BeatFraction.Sixteenth))


input.onButtonPressed(Button.A, function () {
    radio.sendString("GO")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("STOP")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("BACK")
})


