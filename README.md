# 💰 PayLink

PayLink is a payment organizer and an open source alternative to Paynest.

## Live example

[https://payme.dlcastillop.com/](https://payme.dlcastillop.com/)

## Features

- ✅ Select from over 30 themes to customize the appearance of your PayLink page
- ✅ Add a hero section with a photo, name and description to introduce yourself or your brand
- ✅ Include up to 18 links to your social media accounts
- ✅ Add up to 14 payment methods
- ✅ Add a Google Analytics ID to track your analytics
- ✅ The users can copy or generate QRCode for each payment method
- ✅ The users can use the search bar to look for a specific payment method

## How to use

You only need to work in the `paylink.config.json` file.

If you are not a developer, we recommend you to setup your PayLink page using [this video](https://youtu.be/p_Jk6lW6LEM) (spanish).

### Theme

You can modify the theme in the `theme` property. It accepts 33 values:

- `minimalist-theme`
- `minimalist-dark-theme`
- `swordfest-theme`
- `swordfest-dark-theme`
- `light`
- `dark`
- `cupcake`
- `bumblebee`
- `emerald`
- `corporate`
- `synthwave`
- `retro`
- `cyberpunk`
- `valentine`
- `halloween`
- `garden`
- `forest`
- `aqua`
- `lofi`
- `pastel`
- `fantasy`
- `wireframe`
- `black`
- `luxury`
- `dracula`
- `cmyk`
- `autumn`
- `business`
- `acid`
- `lemonade`
- `night`
- `coffee`
- `winter`

For example:

```js
"theme": "minimalist-dark-theme",
```

### Hero section

The Hero section is going to have your photo, name and description. You can modify it in the `properties` object which has the following properties.

- `name`: your name
- `description`: your description
- `alt`: an alternative text for your photo
- `hero`: the path to your photo. We recommend to put it in the `images` folder.

For example:

```js
"properties": {
    "name": "Daniel Castillo",
    "description": "Frontend web developer",
    "alt": "Photo of Daniel Castillo",
    "hero": "./src/images/daniel-castillo.png"
},
```

### Social media section

The Social Media section is going to have all your social media links. You can modify it in the `Social` array which has one object per social media. You only need to put your social media link in the `link` property within the corresponding object.

For example:

```js
"Social": [
    {
        "label": "Email",
        "value": "bx-envelope",
        "link": "mailto:dlcastillo3015@gmail.com"
    },
    { "label": "Link", "value": "bx-link", "link": "https://dlcastillop.com" },
    {
        "label": "GitHub",
        "value": "bxl-github",
        "link": "https://github.com/dlcastillop"
    },
    {
        "label": "Twitter",
        "value": "bxl-twitter",
        "link": "https://twitter.com/dlcastillop"
    },
    {
        "label": "LinkedIn",
        "value": "bxl-linkedin",
        "link": "https://linkedin.com/in/dlcastillop"
    },
    {
        "label": "Instagram",
        "value": "bxl-instagram",
        "link": "https://instagram.com/dlcastillop"
    },
    { "label": "Discord", "value": "bxl-discord", "link": "" },
    { "label": "Facebook", "value": "bxl-facebook", "link": "" },
    { "label": "Medium", "value": "bxl-medium", "link": "" },
    { "label": "Pinterest", "value": "bxl-pinterest", "link": "" },
    { "label": "Snapchat", "value": "bxl-snapchat", "link": "" },
    { "label": "Telegram", "value": "bxl-telegram", "link": "" },
    { "label": "TikTok", "value": "bxl-tiktok", "link": "" },
    { "label": "Twitch", "value": "bxl-twitch", "link": "" },
    { "label": "Vimeo", "value": "bxl-vimeo", "link": "" },
    { "label": "WhatsApp", "value": "bxl-whatsapp", "link": "" },
    { "label": "YouTube", "value": "bxl-youtube", "link": "" },
    { "label": "Product Hunt", "value": "bxl-product-hunt", "link": "" },
    { "label": "Newsletter", "value": "bx-mail-send", "link": "" }
],
```

If you want to modify the order of the social media, you must organize the objects according to your preference.

For example:

```js
"Social": [
    { "label": "LinkedIn", "value": "bxl-linkedin", "link": "https://linkedin.com/in/dlcastillop" },
    { "label": "Twitter", "value": "bxl-twitter", "link": "https://twitter.com/dlcastillop" },
    { "label": "Link", "value": "bx-link", "link": "https://dlcastillop.com" },
    { "label": "Instagram", "value": "bxl-instagram", "link": "https://instagram.com/dlcastillop" },
    { "label": "Email", "value": "bx-envelope", "link": "mailto:dlcastillo3015@gmail.com" },
    { "label": "GitHub", "value": "bxl-github", "link": "https://github.com/dlcastillop" },
    { "label": "Discord", "value": "bxl-discord", "link": "" },
    { "label": "Facebook", "value": "bxl-facebook", "link": "" },
    { "label": "Medium", "value": "bxl-medium", "link": "" },
    { "label": "Pinterest", "value": "bxl-pinterest", "link": "" },
    { "label": "Snapchat", "value": "bxl-snapchat", "link": "" },
    { "label": "Telegram", "value": "bxl-telegram", "link": "" },
    { "label": "TikTok", "value": "bxl-tiktok", "link": "" },
    { "label": "Twitch", "value": "bxl-twitch", "link": "" },
    { "label": "Vimeo", "value": "bxl-vimeo", "link": "" },
    { "label": "WhatsApp", "value": "bxl-whatsapp", "link": "" },
    { "label": "YouTube", "value": "bxl-youtube", "link": "" },
    { "label": "Product Hunt", "value": "bxl-product-hunt", "link": "" },
    { "label": "Newsletter", "value": "bx-mail-send", "link": "" }
],
```

The Social Media section supports:

- Twitter
- GitHub
- LinkedIn
- Instagram
- A link
- Discord
- Facebook
- Medium
- Pinterest
- Snapchat
- Telegram
- TikTok
- Twitch
- Vimeo
- WhatsApp
- YouTube
- Product Hunt
- A newsletter

### Payment section

The Payment section is going to have all your payment methods. You can modify it in the `Payments` array which has one object per payment methods. You only need to put your payment method link in the `value` property within the corresponding object.

For example:

```js
"Payments": [
    {
        "id": "btc",
        "label": "Bitcoin",
        "value": "bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle",
        "img": "./src/images/payments/btc.svg"
    },
    {
        "id": "busd",
        "label": "BinanceUSD",
        "value": "",
        "img": "./src/images/payments/busd.svg"
        },
    {
        "id": "matic",
        "label": "Matic",
        "value": "",
        "img": "./src/images/payments/matic.svg"
    },
    {
        "id": "doge",
        "label": "DogeCoin",
        "value": "",
        "img": "./src/images/payments/doge.svg"
    },
    {
        "id": "eth",
        "label": "Ethereum",
        "value": "0x59C864f658caD68A19a97499755080c056079988",
        "img": "./src/images/payments/eth.svg"
    },
    {
        "id": "ltc",
        "label": "Litecoin",
        "value": "",
        "img": "./src/images/payments/ltc.svg"
    },
    {
        "id": "paypal",
        "label": "Paypal",
        "value": "",
        "img": "./src/images/payments/paypal.svg"
    },
    {
        "id": "usdt",
        "label": "USDT",
        "value": "",
        "img": "./src/images/payments/usdt.svg"
    },
    {
        "id": "qvapay",
        "label": "QvaPay",
        "value": "https://qvapay.com/payme/dlcastillop",
        "img": "./src/images/payments/qvapay.svg"
    },
    {
        "id": "sol",
        "label": "Solana",
        "value": "",
        "img": "./src/images/payments/sol.svg"
    },
    {
        "id": "ada",
        "label": "ADA",
        "value": "",
        "img": "./src/images/payments/ada.svg"
    },
    {
        "id": "trx",
        "label": "Tron",
        "value": "",
        "img": "./src/images/payments/trx.svg"
    },
    {
        "id": "xrp",
        "label": "XRP",
        "value": "",
        "img": "./src/images/payments/xrp.svg"
    },
    {
        "id": "card",
        "label": "Card",
        "value": "",
        "img": "./images/payments/card.svg"
    }
]
```

If you want to modify the order of the payment methods, you must organize the objects according to your preference.

For example:

```js
"Payments": [
    {
        "id": "qvapay",
        "label": "QvaPay",
        "value": "https://qvapay.com/payme/dlcastillop",
        "img": "./src/images/payments/qvapay.svg"
    },
    {
        "id": "eth",
        "label": "Ethereum",
        "value": "0x59C864f658caD68A19a97499755080c056079988",
        "img": "./src/images/payments/eth.svg"
    },
    {
        "id": "btc",
        "label": "Bitcoin",
        "value": "bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle",
        "img": "./src/images/payments/btc.svg"
    },
    {
        "id": "busd",
        "label": "BinanceUSD",
        "value": "",
        "img": "./src/images/payments/busd.svg"
    },
    {
        "id": "matic",
        "label": "Matic",
        "value": "",
        "img": "./src/images/payments/matic.svg"
    },
    {
        "id": "doge",
        "label": "DogeCoin",
        "value": "",
        "img": "./src/images/payments/doge.svg"
    },
    {
        "id": "ltc",
        "label": "Litecoin",
        "value": "",
        "img": "./src/images/payments/ltc.svg"
    },
    {
        "id": "paypal",
        "label": "Paypal",
        "value": "",
        "img": "./src/images/payments/paypal.svg"
    },
    {
        "id": "usdt",
        "label": "USDT",
        "value": "",
        "img": "./src/images/payments/usdt.svg"
    },
    {
        "id": "sol",
        "label": "Solana",
        "value": "",
        "img": "./src/images/payments/sol.svg"
    },
    {
        "id": "ada",
        "label": "ADA",
        "value": "",
        "img": "./src/images/payments/ada.svg"
    },
    {
        "id": "trx",
        "label": "Tron",
        "value": "",
        "img": "./src/images/payments/trx.svg"
    },
    {
        "id": "xrp",
        "label": "XRP",
        "value": "",
        "img": "./src/images/payments/xrp.svg"
    },
    {
        "id": "card",
        "label": "Card",
        "value": "",
        "img": "./images/payments/card.svg"
    }
]
```

The Payment section supports:

- Bitcoin
- Binance USD
- Matic
- DogeCoin
- Ethereum
- Litecoin
- PayPal
- USDT
- QvaPay
- Solana
- ADA
- TRON
- XRP
- A card

### Google Analytics

You can add your Google Analytics ID in the `googleAnalyticsId` property.

For example:

```js
"googleAnalyticsId": "G-SOMEID"
```

## How to deploy

### Deploy on GitHub Pages

1. Go to the repository settings, enable GitHub Pages and, select the `GitHub Actions` option as the source. For more info visit [this link](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
2. Go to the `vite.config.js` and uncomment the `base` parameter. For more info read the comment in `vite.config.js`
3. After some seconds the deployment will be ready in `https://<username>.github.io/paylink`

## Contributions

If you're interested in contributing to PayLink, please read our [contributing docs](https://github.com/dlcastillop/dlcastillop/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Support

Don't forget to leave a star!

## Special thanks

Many thanks to [Manuel Ernesto](https://twitter.com/manuelernestog), [Yoannis Sánchez](https://twitter.com/yossthedev), [Carlos Z. Bent](https://t.me/carloszbent_channel) and [Alex Navarro](https://twitter.com/Swordfest). PayLink is much better thanks to your work.
