
import { atom } from "jotai";

import { toggleMcCardSelectionAtom } from "@state/game/atoms";

// Write-only Event Atom for selecting a card
export const handleMcClickCardAtom = atom(
    null,
    (get, set, id: string) => {
        // Use the set function to call toggleMcCardSelectionAtom
        set(toggleMcCardSelectionAtom, id);
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
