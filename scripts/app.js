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
    },
    enemyHP: function() {
      return calculatePercentage(this.enemy.health, this.enemy.totalHealth);
    },
    playerHP: function() {
      return calculatePercentage(this.user.health, this.user.totalHealth);
    }
  },
  watch: {
    user: {
      handler(val) {},
      deep: true
    },
    enemy: {
      handler(val) {
        // Check if the enemy is dead
        if (this.enemy.health <= 0) {
          this.enemy.alive = false;
          this.rstEnemey();
          this.endRound(true);
          this.loadNextRound();
          this.user.gold += this.enemy.reward;
        } else this.enemy.alive = true;
      },
      deep: true
    },
    game: {
      handler(val) {
        if (this.game.playerLog[0]) __playerRounds[0].classList += wonClass;
        else __playerRounds[0].classList.add(lostClass);
        console.log("hi");
        console.log(__playerRounds[0]);
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
      if (this.user.alive == true) {
        this.enemy.health -= amount;
      }
    },
    enemyAttack: function(amount) {
      this.user.health -= amount;
    },
    loadNextRound: function(curRound) {
      this.game.round++;
      if (this.game.round >= 3) {
        this.game.round = 0;
        this.game.wave++;
      }
    },
    endRound: function(playerWon) {
      let playerWins = this.game.playerLog[0] + this.game.playerLog[1];
      let enemyWins = this.game.enemyLog[0] + this.game.enemyLog[1];
      if (playerWon) this.game.playerLog[playerWins] = true;
      else this.game.enemyLog[enemyWins] = true;
    },
    barColor: function(round, target) {
      if (target == 1) {
        if (this.game.playerLog[round]) return wonClass;
        else return lostClass;
      } else {
        if (this.game.enemyLog[round]) return wonClass;
        else return lostClass;
      }
    }
  }
});
