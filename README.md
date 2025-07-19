# 🪙 Remote Crypto App

> A **Microfrontend** built with **Module Federation** using **RSPack** for real-time cryptocurrency tracking and exploration powered by the [CoinGecko API](https://www.coingecko.com/en/api).


---

## 🚀 Features

- 🔗 Microfrontend module built with **Module Federation**.
- 📦 Powered by **RSPack**, a blazing-fast bundler based on Rust.
- ⚛️ Built with **React**, **Zustand**, and **SCSS Modules**.
- 📊 Displays real-time crypto prices from CoinGecko.
- 📈 Includes interactive price history charts with **Recharts**.
- 🔁 Modular components: `CryptoList`, `CryptoDetailCard`, `CryptoDashboard`, and more.

---

## 🧩 Architecture

- **Transpiler**: SWC
- **Bundler**: RSPack
- **Module Federation**: Remote App (can be consumed by a Host)
- **State Management**: Zustand
- **API Integration**: CoinGecko (Public APIs)
- **Styling**: SCSS Modules
- **Charting**: Recharts

---

## 📁 Exposed Modules

This app exposes components and hooks via Module Federation:

```ts
"./SkeletonCard"
"./BackgroundWrapper"
"./Title"
"./Paragraph"
"./CryptoItemsList"
"./CryptoItemsListWithinBox"
"./CryptoCardHighlight"
"./useCryptoTracker"
"./useSelectedCrypto"
"./DEFAULT_CRYPTO_IDS"
"./types"
"./cryptoStore"
"./detailedCryptoStore"
"./CryptoDashboard"
```

---

## 🧪 Local Development

1. Clone the repository

```bash
git clone https://github.com/patriciob00/remote_crypto_app.git
cd remote_crypto_app
```

2. Install dependencies

```bash
pnpm install
```

3. Start the dev server

```bash
pnpm start
```

> Runs at: [http://localhost:8082](http://localhost:8082)

---

## 🌐 Usage as Remote (Host Integration)

In your host project (Webpack/RSPack), consume the modules:

```ts
remotes: {
  remote_crypto_app: "remote_crypto_app@http://localhost:8082/remoteEntry.js"
}
```

Then you can import modules like:

```ts
import { CryptoDashboard } from "remote_crypto_app/CryptoDashboard"
```

---

## 🔒 Environment Variables

Create a `.env` file to define your **CoinGecko API key**:

```
COINGECKO_API_KEY=your_api_key_here
```

---

## 📦 Deployment (Optional)

You can deploy using Zephyr (CLI or CI):

```bash
pnpm run build
zephyr publish
```

---

## 📄 License

MIT © [patriciob00](https://github.com/patriciob00)