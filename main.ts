input.onButtonPressed(Button.A, function () {
    if (Position > 500) {
        Position = Position + Amount
        pins.servoSetPulse(AnalogPin.P0, Position)
    }
})
input.onButtonPressed(Button.AB, function () {
    Position = 1500
    pins.servoSetPulse(AnalogPin.P0, Position)
})
input.onButtonPressed(Button.B, function () {
    if (Position < 2500) {
        Position = Position - Amount
        pins.servoSetPulse(AnalogPin.P0, Position)
    }
})
let Amount = 0
let Position = 0
Position = 500
pins.servoSetPulse(AnalogPin.P0, Position)
basic.pause(1000)
Position = 2500
pins.servoSetPulse(AnalogPin.P0, Position)
basic.pause(1000)
Position = 1500
pins.servoSetPulse(AnalogPin.P0, Position)
Amount = 100
