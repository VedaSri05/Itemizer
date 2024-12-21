// src/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  cards: [
    { id: 1, title: 'Card 1', description: 'This is a description for Card 1.', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Card 2', description: 'This is a description for Card 2.', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Card 3', description: 'This is a description for Card 3.', image: 'https://via.placeholder.com/300' }
  ],
  addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
  removeCard: (id) => set((state) => ({ cards: state.cards.filter(card => card.id !== id) }))
}));

export default useStore;
