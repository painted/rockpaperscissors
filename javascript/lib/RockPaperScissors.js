function Player(name) {
  this.name = name;
};

var Rock, Paper, Scissors, Lizard, Spock;

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

};

Game.prototype.PAIRS = {
	'Rock': {'Scissors': 'crushes','Lizard': 'destroys'},
	'Paper': {'Rock': 'covers','Spock': 'disproves'},
	'Scissors': {'Paper': 'cuts','Lizard': 'decapitates'},
	'Lizard': {'Spock': 'poisons','Paper': 'eats'},
	'Spock': {'Rock': 'vaporizes','Scissors': 'smashes'}
}

Game.prototype.winner = function() {
	if (this._isSamePick()) return null;	
  	if (this.player1BeatsPlayer2()) {
    return this.player1;
  } else {
  	return this.player2;
  }
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.player1BeatsPlayer2 = function() {
	return Object.keys(this.PAIRS[this.player1.pick]).indexOf(this.player2.pick) > -1;
};

Game.prototype.verb = function() {
	return this.PAIRS[this.player1.pick][this.player2.pick];
};

Game.prototype.losingVerb = function() {
	return this.PAIRS[this.player2.pick][this.player1.pick];
};

Game.prototype.announcement = function() {
	if (this.winner() === this.player1) {
		return this.player1.name + "'s "+ this.player1.pick + " " + this.verb() + " " + this.player2.name + "'s " + this.player2.pick
	} else {
		return this.player2.name + "'s "+ this.player2.pick + " " + this.losingVerb() + " " + this.player1.name + "'s " + this.player1.pick
	}
};

Game.prototype.winnerName = function() {
	if (this.winner() === this.player1){
		return this.player1.name + " wins!"
	} else if (this.winner() === this.player2){
		return this.player2.name + " wins!"
	} else {
		return this.player1.name + " draws with " + this.player2.name
	};
};