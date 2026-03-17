enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        BallBeiMir = true
        Ballläuft = true
        rallyes += 1
        if (rallyes >= 10) {
            spielEnde()
        } else {
            basic.setLedColor(basic.rgb(0, 255, 0))
            basic.showIcon(IconNames.Heart)
        }
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (BallBeiMir == true) {
        BallBeiMir = false
        basic.setLedColor(basic.rgb(0, 0, 0))
        basic.showNumber(rallyes)
        basic.pause(600)
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowEast)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Ballläuft == false) {
        Ballläuft = true
        BallBeiMir = false
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowEast)
        basic.pause(800)
        basic.clearScreen()
    }
})
function spielEnde () {
    Ballläuft = false
    BallBeiMir = false
    basic.setLedColor(basic.rgb(255, 200, 0))
    basic.showString("SUPER!")
    basic.pause(1000)
    basic.showNumber(rallyes)
    basic.pause(2000)
    basic.setLedColor(basic.rgb(0, 0, 0))
    basic.showString("PP")
}
let rallyes = 0
let Ballläuft = false
let BallBeiMir = false
radio.setGroup(50)
BallBeiMir = false
Ballläuft = false
basic.showString("PP")
rallyes = 0
basic.forever(function () {
	
})
