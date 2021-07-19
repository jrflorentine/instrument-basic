input.onPinPressed(TouchPin.P0, function () {
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.LogoUp, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ScreenUp, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(880, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(784, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltRight, function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.LogoDown, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
})
