class Card {
	constructor(suit, rank) {
		const NAMES = {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'};
		this.suit = suit;
		this.rank = Number(rank);
		this.name = (() => NAMES[rank] ? NAMES[rank] : rank.toString())();
		Object.defineProperty(this, 'isFaceCard', {
    		writable: false,
    		value: this.rank === 1 || this.rank > 10
		});
	}
	toString() {
		console.log(`${this.name} of ${this.suit}`);
	}
	static Compare(cardOne, cardTwo) {
		return cardOne.rank - cardTwo.rank;
	}
}


const _count = Symbol('count');

class Deck {
	constructor() {
		const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
		this.cards = (() => {
			let deck = [];
			for (let suit of SUITS) {
				for (let rank = 1; rank <= 13; rank++) {
					deck.push(new Card(suit, rank));
				}
			}
			return deck;
		})();
		this[_count] = this.cards.length;
	}
	get count() {
		return this[_count];
	}
	shuffle() {
		this.cards.sort(() => Math.random() - 0.5);
	}
	draw(n) {
		const INDEX = this[_count] - n - 1;
		const DRAWN_CARDS = this.cards.splice(INDEX, n);
		this[_count] = this.cards.length;
		return DRAWN_CARDS;
	}
}


const _wins = Symbol('wins');

class Player {
	constructor (name) {
		this.name = name;
		this[_wins] = 0;
		this.deck;
		this.points = 0;
	}
	get wins() {
		return this[_wins];
	}
	
	static Play(playerOne, playerTwo) {
				
		(function makeDeck(...players) {
			for (let player of players) {
				player.deck = new Deck;
				player.deck.shuffle();
			}
		})(playerOne, playerTwo);
		
		while (playerOne.deck.count > 0) {
			const PLAYER_ONE_CARD = playerOne.deck.draw(1);
			const PLAYER_TWO_CARD = playerTwo.deck.draw(1);
			const COMPARE = Card.Compare(PLAYER_ONE_CARD[0], PLAYER_TWO_CARD[0]);
			if (COMPARE > 0) {
				playerOne.points++;
			} else if (COMPARE < 0) {
				playerTwo.points++;
			}
		}
		
		let winner;
		let looser;
		
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
			console.log(`${winner.name} wins ${winner.points} to ${looser.points}`);
			winner[_wins]++;
		} else {
			console.log(`Player's points are equal and nobody wins this game`);
		}
		
		(function setZeroPoints(...players) {
			for (let player of players) {
				player.points = 0;
			}
		})(playerOne, playerTwo);
	}
}

const playerOne = new Player('John');
const playerTwo = new Player('Jack');

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
