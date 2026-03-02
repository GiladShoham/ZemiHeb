export default function IntroSection() {
  return (
    <section className="intro">
      <h1 className="intro-title">ZemiHeb</h1>
      <p className="intro-subtitle">Hebrew Labels for Zemismart Switches</p>
      <p className="intro-desc">
        Convert Hebrew text to the correct encoding for Zemismart smart switch
        LED displays. Works seamlessly with Home Assistant and Zigbee2MQTT.
      </p>
      <p className="intro-credit">
        Created with ❤️ by{' '}
        <a
          href="https://www.linkedin.com/in/shohamgilad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gilad Shoham
        </a>
        {' '}— free to use.
      </p>
    </section>
  )
}
