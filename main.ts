input.onButtonPressed(Button.A, function () {
    Autoampel.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    Autoampel.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Autoampel.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Autoampel.show()
    Fussampel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Fussampel.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    Fussampel.show()
    basic.pause(1000)
    Autoampel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Autoampel.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    Autoampel.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    Fussampel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Fussampel.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
})
let Fussampel: neopixel.Strip = null
let Autoampel: neopixel.Strip = null
Autoampel = neopixel.create(DigitalPin.C16, 3, NeoPixelMode.RGB)
Autoampel.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
Autoampel.show()
Fussampel = neopixel.create(DigitalPin.C17, 2, NeoPixelMode.RGB)
Fussampel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
Fussampel.show()
basic.forever(function () {
	
})
