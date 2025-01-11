
import { atom } from "jotai";

// Write-only Event Atom for selecting a card
export const toggleSelectCardAtom = atom(
    null, // Write-only
    (get, set, cardId: string) => {
        // Retrieve current selected cards
        const selectedCards = get(selectedCardsAtom);
    
        // Check if the card is already selected
        if (!selectedCards.includes(cardId)) {
            set(selectedCardsAtom, [...selectedCards, cardId]);
        } else {
            console.warn("Card is already selected.");
        }
    },
);

/*
// Write-only Event Atom for playing a card
export const playCardAtom = atom(
    null, // Write-only
    (get, set, cardId: string) => {
      const selectedCards = get(selectedCardsAtom);
  
      // Remove the played card from the selected cards
      const newSelectedCards = selectedCards.filter(card => card !== cardId);
  
      set(selectedCardsAtom, newSelectedCards);
  
      // Optionally, update the deck or other game state (not shown here)
    }
);
*/