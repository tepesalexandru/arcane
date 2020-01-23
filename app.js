/// Player Object

let player = {
  health: 0,
  energy: 0,
  shield: 0,
  attack: 10,
  gold: 0
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
    enemy: monster
  },
  computed: {
    enemyHealth: function() {
      return this.enemy.health > 0 ? "Monster Alive" : "Monster Defeated";
    }
  },
  watch: {
    enemy: function(value) {}
  },
  methods: {
    rstGame: function() {
      player.health = 100;
      monster.health = 80;
      monster.alive = true;
    },
    playerAttack: function(amount) {
      monster.health -= amount;
    }
  }
});
