input.onButtonPressed(Button.A, function () {
    password = "" + password + "A"
    basic.showString(password)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    attemps = 0
    password = ""
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    password = "" + password + "B"
    basic.showString(password)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    attemps += 1
    if (password == "ABA") {
        basic.showString("ACCESS")
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showString("DENIED")
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.showString("ATTEMPS?")
    basic.showNumber(attemps)
    password = ""
    basic.clearScreen()
})
let password = ""
let attemps = 0
attemps = 0
password = ""
basic.forever(function () {
	
})
