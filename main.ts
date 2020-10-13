input.onButtonPressed(Button.A, function () {
    if (Position <= Max) {
        Position = Position + Amount
        pins.servoSetPulse(AnalogPin.P0, Position)
    }
})
input.onButtonPressed(Button.AB, function () {
    Position = Mid
    pins.servoSetPulse(AnalogPin.P0, Position)
})
input.onButtonPressed(Button.B, function () {
    if (Position >= Min) {
        Position = Position - Amount
        pins.servoSetPulse(AnalogPin.P0, Position)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Position))
})
let Position = 0
let Amount = 0
let Max = 0
let Mid = 0
let Min = 0
Min = 500
Mid = 1500
Max = 2500
Amount = 100
Position = Min
pins.servoSetPulse(AnalogPin.P0, Position)
basic.pause(2000)
Position = Max
pins.servoSetPulse(AnalogPin.P0, Position)
basic.pause(2000)
Position = Mid
pins.servoSetPulse(AnalogPin.P0, Position)
