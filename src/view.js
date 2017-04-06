class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  draw() {
    this.game.actors().forEach(actor => actor.draw())
  }

  tick() {
    this.game.tick()
    this.draw()
  }

  start() {
    drawFrame()
  }

  drawFrame() {
    this.tick()
    requestAnimationFrame(drawFrame)
  }
}
