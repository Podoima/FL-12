function Card(suit, rank) {
	var names = {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'};
	this.suit = suit;
	this.rank = Number(rank);
	this.name = (function() {
		return names[rank] ? names[rank] : rank.toString()
	})();
	Object.defineProperty(this, 'isFaceCard', {
    	writable: false,
    	value: this.rank === 1 || this.rank > 10
	});
}
Card.prototype.toString = function() {
	console.log(this.name + ' of ' + this.suit);
}
Card.Compare = function(cardOne, cardTwo) {
	return cardOne.rank - cardTwo.rank;
}


function Deck() {
	var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
	this.cards = (function() {
		var deck = [];
		for (var i = 0; i < suits.length; i++) {
			for (var rank = 1; rank <= 13; rank++) {
				deck.push(new Card(suits[i], rank));
			}
		}
		return deck;
	})();
	this._count = this.cards.length;
	Object.defineProperty(this, 'count', {
  		get: function() { return this._count; },
	});
}
Deck.prototype.shuffle = function() {
	this.cards.sort(function() { return Math.random() - 0.5 });
}
Deck.prototype.draw = function(n) {
	var index = this._count - n - 1;
	var drawnCards = this.cards.splice(index, n);
	this._count = this.cards.length;
	return drawnCards;
}


function Player(name) {
	this.name = name;
	this.deck;
	this.points = 0;
	this._wins = 0;
	Object.defineProperty(this, 'wins', {
  		get: function() { return this._wins; },
	});
}
Player.Play = function(playerOne, playerTwo) {
	
	playerOne.deck = new Deck;
	playerOne.deck.shuffle();
	playerTwo.deck = new Deck;
	playerTwo.deck.shuffle();
		
	while (playerOne.deck._count > 0) {

		var playerOneCard = playerOne.deck.draw(1);
		var playerTwoCard = playerTwo.deck.draw(1);
		
		var compare = Card.Compare(playerOneCard[0], playerTwoCard[0]);
		if (compare > 0) {
			playerOne.points++;
		} else if (compare < 0) {
			playerTwo.points++;
		}
	}
		
	var winner;
	var looser;
		
	if (playerOne.points > playerTwo.points) {
		winner = playerOne;
		looser = playerTwo;
	} else if (playerTwo.points > playerOne.points) {
		winner = playerTwo;
		looser = playerOne;
	} else {
		winner = null;
		looser = null;
	}
				
	if (winner) {
		console.log(winner.name + ' wins ' + winner.points + ' to ' + looser.points);
		winner._wins++;
	} else {
		console.log('Player\'s points are equal and nobody wins this game');
	}
	
	playerOne.points = 0;
	playerTwo.points = 0;
}

var playerOne = new Player('John');
var playerTwo = new Player('Jack');

console.log(playerOne);
console.log(playerTwo);

Player.Play(playerOne, playerTwo);
console.log(playerOne);
console.log(playerTwo);

Player.Play(playerOne, playerTwo);
console.log(playerOne);
console.log(playerTwo);

Player.Play(playerOne, playerTwo);
console.log(playerOne);
console.log(playerTwo);
