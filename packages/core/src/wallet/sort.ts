import { StarknetWindowObject } from "../StarknetWindowObject"
import { WalletProvider } from "../discovery"
import { shuffle } from "../utils"

export type Sort = string[] | "community" | "random" | null | undefined

export const sortBy = <T extends StarknetWindowObject | WalletProvider>(
  wallets: T[],
  sort: Sort,
): T[] => {
  if (sort && Array.isArray(sort)) {
    // skip default/preAuthorized priorities,
    // sort by client-specific order
    wallets.sort((a, b) => sort.indexOf(a.id) - sort.indexOf(b.id))

    const sortScope = wallets.length - sort.length
    return [
      ...wallets.slice(sortScope),
      // shuffle wallets which are outside `sort` scope
      ...shuffle(wallets.slice(0, sortScope)),
    ]
  } else {
    if (!sort || sort === "random") {
      return shuffle(wallets)
    } else if (sort === "community") {
      // "community" sort is the natural sort of the wallets array,
      // see discovery/index.ts
    }
    return wallets
  }
}
