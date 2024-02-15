input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (input.lightLevel() >= 80) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
            basic.pause(2000)
        }
        if (input.soundLevel() >= 120) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
            basic.pause(2000)
        }
        if (input.isGesture(Gesture.Shake)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            break;
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            break;
        }
        if (input.isGesture(Gesture.Shake)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            led.plot(0, 0)
            basic.pause(2000)
            led.unplot(0, 0)
            led.plot(0, 1)
            basic.pause(1500)
            led.unplot(0, 1)
            led.plot(0, 2)
            basic.pause(1500)
            led.unplot(0, 2)
            led.plot(0, 3)
            basic.pause(1500)
            led.unplot(0, 3)
            led.plot(0, 4)
            basic.pause(2000)
            led.unplot(0, 4)
            led.plot(1, 4)
            basic.pause(1500)
            led.unplot(1, 4)
            led.plot(2, 4)
            basic.pause(1500)
            led.unplot(2, 4)
            led.plot(3, 4)
            basic.pause(1500)
            led.unplot(3, 4)
            led.plot(4, 4)
            basic.pause(2000)
            led.unplot(4, 4)
            led.plot(4, 3)
            basic.pause(1500)
            led.unplot(4, 3)
            led.plot(4, 2)
            basic.pause(1500)
            led.unplot(4, 2)
            led.plot(4, 1)
            basic.pause(1500)
            led.unplot(4, 1)
            led.plot(4, 0)
            basic.pause(2000)
            led.unplot(4, 0)
            led.plot(3, 0)
            basic.pause(1500)
            led.unplot(3, 0)
            led.plot(2, 0)
            basic.pause(1500)
            led.unplot(2, 0)
            led.plot(1, 0)
            basic.pause(1500)
            led.unplot(1, 0)
        } else {
            break;
        }
    }
})
