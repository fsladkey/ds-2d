class Game {
  constructor(state = {}) {
    this.state = state;
  }

  actors() {
    return this.actors
  }

  tick() {
    this.actors().forEach(actor => {
      actor.update()
    })
  }


}
