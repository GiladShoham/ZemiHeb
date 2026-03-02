# ZemiHeb

A lightweight utility for encoding and mapping Hebrew characters for Zemismart smart switch LED displays.

**Live App:** [https://zemiheb.netlify.app/](https://zemiheb.netlify.app/)

Works with [Home Assistant](https://www.home-assistant.io/) and [Zigbee2MQTT](https://www.zigbee2mqtt.io/).

## Features

- Type Hebrew labels and preview them on the Zemismart switch image
- Automatically encodes Hebrew text (UTF-8 → ISO-8859-1) for the switch LED display
- Supports 2, 3, and 4-gang switch configurations
- Copy encoded text with one click for use in Home Assistant / Zigbee2MQTT
- 10-character limit per label with visual feedback
- Clean, responsive UI

## Getting Started

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## How It Works

Zemismart switches (ZMS-206 series) display Hebrew text by interpreting UTF-8 bytes as ISO-8859-1 characters. This tool automates that conversion — type Hebrew text, get the encoded string, paste it into your Home Assistant / Z2M configuration.

## License

MIT
