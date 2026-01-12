import { create } from 'zustand'

interface Bearstate {
    bears: number
    birds: string
    increasePopulation: () => void
    removeAllBears: () => void
    updateBears: (newBears: number) => void
    updateBirds: (newBirds: string) => void
}

const useStore = create<Bearstate>	(set => ({
    bears: 0,
    birds: "None",
    increasePopulation: () => set((state) => ({ bears: state.bears + 20 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears}),
    updateBirds: (newBirds) => set({ birds: newBirds}),
}))

export { useStore }