/// DOM Elements

const __playerHP = document.querySelector(".hp");
const __enemyHP = document.querySelector(".hp-enemy");

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
    user: {
      handler(val) {
        __playerHP.style.width = calculatePercentage(
          this.user.health,
          this.user.totalHealth
        );
      },
      deep: true
    },
    enemy: {
      handler(val) {
        if (this.enemy.health <= 0) {
          this.enemy.alive = false;
          this.loadNextRound();
          this.user.gold += this.enemy.reward;
        } else this.enemy.alive = true;
        __enemyHP.style.width = calculatePercentage(
          this.enemy.health,
          this.enemy.totalHealth
        );
      },
      deep: true
    }
  },
  methods: {
    rstGame: function() {
      this.rstPlayer();
      this.rstEnemey();
      this.rstConfig();
    },
    rstPlayer: function() {
      this.user = { ...initialPlayer };
    },
    rstEnemey: function() {
      this.enemy = { ...initialMonster };
    },
    rstConfig: function() {
      this.game = { ...initialConfig };
    },
    playerAttack: function(amount) {
      this.enemy.health -= amount;
    },
    enemyAttack: function(amount) {
      this.user.health -= amount;
      console.log("Player hit!");
    },
    loadNextRound: function(curRound) {
      this.game.round++;
      if (this.game.round >= 3) {
        this.rstEnemey();
        this.game.round = 0;
        this.game.wave++;
      }
    }
  }
});
