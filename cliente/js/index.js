/* eslint-disable no-undef */
import config from './config.js'
import abertura from './cena-abertura.js'
import sala from './cena-sala.js'
import lagoa from './cena-lagoa.js'
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura', abertura)
    this.scene.add('sala', sala)
    this.scene.add('lagoa', lagoa)

    this.scene.start('abertura')
  }
}

window.onload = () => {
  window.game = new Game()
}
