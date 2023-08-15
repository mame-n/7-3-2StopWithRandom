input.onSound(DetectedSound.Loud, function () {
    if (動き == 1) {
        動き = 0
        num = randint(0, 70)
        for (let カウンター = 0; カウンター <= num; カウンター++) {
            servos.P1.run(num - カウンター)
            basic.pause(50)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    servos.P1.run(100)
    動き = 1
})
let num = 0
let 動き = 0
動き = 0
basic.forever(function () {
	
})
