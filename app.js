/// Game Object

let gameConfig = {
  wave: 0,
  round: 0
};

/// Player Object

let player = {
  health: 0,
  energy: 0,
  shield: 0,
  attack: 10,
  gold: 0,
  alive: false
};

/// Monster

let monster = {
  health: 0,
  shield: 0,
  attack: 0,
  alive: false
};

new Vue({
  el: "#app",
  data: {
    user: player,
    enemy: monster,
    game: gameConfig
  },
  computed: {
    enemyHealth: function() {
      return this.enemy.health > 0 ? "Monster Alive" : "Monster Defeated";
    }
  },
  watch: {
    enemy: {
      handler(val) {
        if (this.enemy.health <= 0) this.enemy.alive = false;
        else this.enemy.alive = true;
      },
      deep: true
    }
  },
  methods: {
    rstGame: function() {
      /*player.health = 100;
      monster.health = 80;
      monster.alive = true;*/
    },
    rstPlayer: function() {
      player.health = 100;
    },
    rstEnemey: function() {
      monster.health = 80;
      monster.alive = true;
    },
    playerAttack: function(amount) {
      monster.health -= amount;
    },
    loadNextRound: function(curRound) {
      gameConfig.round++;
      if (gameConfig.round >= 3) {
        this.rstEnemey();
        gameConfig.round = 0;
        gameConfig.wave++;
      }
    }
  }
});
