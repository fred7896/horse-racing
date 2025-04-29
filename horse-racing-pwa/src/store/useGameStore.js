import { create } from 'zustand';

export const useGameStore = create((set) => ({
    // --- User data ---
    user: {
        id: 1,
        name: 'Guest',
        balance: 1000,
        ownedHorses: [],
        joinedLeagues: [],
    },

    // --- Game entities ---
    horses: [],    // all horses available in game
    races: [],     // list of races (public or private)
    leagues: [],   // all leagues created by users

    // --- Mutations ---
    setUser: (user) => set({ user }),

    addHorseToStable: (horse) =>
        set((state) => ({
            user: {
                ...state.user,
                ownedHorses: [...state.user.ownedHorses, horse.id],
                balance: state.user.balance - horse.price,
            },
            horses: [...state.horses, horse],
        })),

    createRace: (race) =>
        set((state) => ({
            races: [...state.races, race],
        })),

    createLeague: (league) =>
        set((state) => ({
            leagues: [...state.leagues, league],
            user: {
                ...state.user,
                joinedLeagues: [...state.user.joinedLeagues, league.id],
            },
        })),

    joinLeague: (leagueId) =>
        set((state) => ({
            user: {
                ...state.user,
                joinedLeagues: [...new Set([...state.user.joinedLeagues, leagueId])],
            },
        })),

    updateBalance: (amount) =>
        set((state) => ({
            user: {
                ...state.user,
                balance: state.user.balance + amount,
            },
        })),

    initializeGame: ({ users, horses, races, leagues }) =>
        set(() => ({
            user: users[0],        // On prend le premier comme user actif
            horses,
            races,
            leagues
        }))

}));
