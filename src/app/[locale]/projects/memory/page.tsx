'use client';

import Link from "next/link";
import classes from "@/src/app/[locale]/projects/memory/page.module.css";
import { useState } from "react";

type Card = {
    card: number;
    id: number;
};

// TODO: Implement a second card flip state or something similar to track the second card flipped.

export default function MemoryPage() {
    const [difficultyMode, setDifficultyMode] = useState<boolean>(false);
    const [deck, setDeck] = useState<number[]>([]);
    const [firstCardFlipped, setFirstCardFlipped] = useState<Card | null>(null);
    const [secondCardFlipped, setSecondCardFlipped] = useState<Card | null>(null);
    const [matched, setMatched] = useState<number[]>([]);
    const [triesLeft, setTriesLeft] = useState<number>(0); // 10
    const bothCardsFlipped = !!firstCardFlipped && !!secondCardFlipped;
    const [endGameMessage, setEndGameMessage] = useState<string>('');

    function startNewGame() {
        setDifficultyMode(true);
        resetGame();
    }

    function resetFlippedCards() {
        setFirstCardFlipped(null);
        setSecondCardFlipped(null);
    }

    function resetGame() {
        setDeck([]);
        resetFlippedCards();
        setMatched([]);
        setTriesLeft(4);
        setEndGameMessage('');
        setDifficultyMode(true);
    }

    function hasPlayerWon(matchedCards: number[]) {
        if (matchedCards.length === deck.length) {
            setEndGameMessage("Congratulations! You've matched all the cards!");
        }
    }

    function hasPlayerLost(tries: number) {
        console.log(tries);
        if (tries <= 0) {
            setEndGameMessage("Game Over! You've run out of tries.");
        }
    }

    function flipCard(card: number, id: number) {
        //     console.log(`Flipped card: ${card} with id: ${id}`);
        if (!bothCardsFlipped) {
            if (firstCardFlipped) {
                setSecondCardFlipped({ card, id });
                checkMatch(firstCardFlipped, { card, id });
            } else {
                setFirstCardFlipped({ card, id });
            }
        }
    }

    function checkMatch(firstCardFlipped: Card, secondCardFlipped: Card) {
        //    console.log(`Checking match: ${firstCardFlipped.card} with ${secondCardFlipped.card}`);
        if (firstCardFlipped.card === secondCardFlipped.card) {
            const matchedCards = [...matched, firstCardFlipped.id, secondCardFlipped.id];
            setMatched(matchedCards);
            hasPlayerWon(matchedCards);
            resetFlippedCards();
        }
        else {
            setTimeout(() => {
                const tries = (triesLeft - 1);
                setTriesLeft(tries);
                hasPlayerLost(tries);
                resetFlippedCards();
            }, 1000);
        }
    }

    function generateDeck(nrOfCards: number) {
        setDifficultyMode(false);
        //    const nrCardsInRow: number = Math.sqrt(nrOfCards * 2);
        //     console.log(nrCardsInRow);
        setDeck(Array.from({ length: nrOfCards }, (_, i) => i % (nrOfCards / 2)).sort(() => Math.random() - 0.5));
    }

    return (
        <>
            <h1>Memory</h1>
            <p>This is the Memory page.</p>
            <Link className={classes.githubLink} target="_blank" href="https://github.com/Althona/Trafic-help-Javascript">Github</Link>

            <button onClick={startNewGame}>Start New game</button>

            {difficultyMode &&
                <>
                    <p>Select difficulty</p>
                    <button onClick={() => generateDeck(18)}>Easy Mode</button>
                    <button onClick={() => generateDeck(36)}>Normal Mode</button>
                    <button onClick={() => generateDeck(72)}>Hard Mode</button>
                    <button onClick={() => (generateDeck(144))}>Insane Mode</button>
                </>
            }
            {deck.length > 0 &&
                <>
                    <p>{`Tries Left: ${triesLeft}`}</p>
                    <div className={classes.memoryGrid}>
                        {deck.map((card, index) => (
                            matched.includes(index) || firstCardFlipped?.id === index || secondCardFlipped?.id === index
                                ?
                                <div key={index} className={classes.memoryCard}>
                                    <span className={classes.card}>?</span>
                                </div>
                                :
                                <div key={index} className={classes.memoryCard}>
                                    <span id={index.toString()} className={classes.card} onClick={() => flipCard(card, index)}>{card}</span>
                                </div>
                        ))}
                    </div>
                </>
            }
            {endGameMessage &&
                <div>
                    <p>{endGameMessage}</p>
                    <button onClick={() => resetGame()}>Reset Game</button>
                </div>
            }
        </>
    );
}