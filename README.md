# get-starknet

[![npm](https://img.shields.io/npm/v/get-starknet.svg)](https://www.npmjs.com/package/get-starknet)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/starknet-io/get-starknet/blob/master/LICENSE)

## Goals

- ❤️‍🩹 Allow Starknet dApps and wallets to seamlessly connect
- 🪶 Lightweight and easy to use
- 🏎 Fast integration, building and testing
- ⚙️ Customizable and extensible
- 🌍 Open source and controlled by the community

## Installation

```
# using npm
npm install get-starknet starknet@next

# using yarn
yarn add get-starknet starknet@next

# using pnpm
pnpm add get-starknet starknet@next
```

## Usage for dApp developers

You can use the built-in UI to connect to any Starknet wallet as fast as
possible like this:

```tsx
import { connect, disconnect } from "get-starknet"

return <button onClick={() => connect()}>Connect wallet</button>
```

### Advanced usage

You can also choose to customize the UI by overwriting the CSS classes, or by
implementing your very own UI. This is possible due to a split into a `core` and
`ui` package. As a library author or dapp developer who wants to implement a
custom UI, you can use the `core` package.

```tsx
import {
  disconnect,
  enable,
  getAvailableWallets,
  getDiscoveryWallets,
  getLastConnectedWallet,
  getPreAuthorizedWallets,
} from "get-starknet-core"

interface GetStarknetResult {
  // Returns all wallets available in the window object
  getAvailableWallets: (
    options?: GetWalletOptions,
  ) => Promise<StarknetWindowObject[]>
  // Returns only preauthorized wallets available in the window object
  getPreAuthorizedWallets: (
    options?: GetWalletOptions,
  ) => Promise<StarknetWindowObject[]>
  // Returns all wallets in existence (from discovery file)
  getDiscoveryWallets: (options?: GetWalletOptions) => Promise<WalletProvider[]>
  // Returns the last wallet connected when it's still connected
  getLastConnectedWallet: () => Promise<StarknetWindowObject | null>
  // Connects to a wallet
  enable: (
    wallet: StarknetWindowObject,
    options?: {
      starknetVersion?: "v4" | "v5"
    },
  ) => Promise<ConnectedStarknetWindowObject>
  // Disconnects from a wallet
  disconnect: (options?: { clearLastWallet?: boolean }) => Promise<void>
}
```

## Development

You need Node and pnpm installed. Make sure to clone this repo and run:

```bash
pnpm install
pnpm build
```

To start watching for changes, run:

```bash
pnpm dev
```

and open `http://localhost:5173/`

### Running tests

For running tests:

```bash
pnpm test
```
