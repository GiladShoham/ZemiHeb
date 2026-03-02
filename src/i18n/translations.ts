export type Language = 'he' | 'en'

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Header
    'header.viewOnGithub': 'צפה ב-GitHub',

    // Intro
    'intro.subtitle': 'תוויות בעברית למתגי Zemismart',
    'intro.desc': 'המרת טקסט בעברית לקידוד הנכון עבור מסכי LED של מתגים חכמים מבית Zemismart. עובד בצורה חלקה עם Home Assistant ו-Zigbee2MQTT.',
    'intro.credit.prefix': 'נוצר ב ❤️ על ידי',
    'intro.credit.suffix': '- חינמי לשימוש.',

    // Gang Selector
    'gangSelector.ariaLabel': 'מספר כפתורי מתג',
    'gangSelector.gang': 'לחצנים',

    // Switch Preview
    'switchPreview.alt': 'מתג Zemismart',
    'switchPreview.label': 'תווית',

    // Input Section
    'input.title': 'הזנת תוויות בעברית',
    'input.button': 'כפתור',
    'input.placeholder': 'הקלד כאן...',
    'input.clearAriaLabel': 'נקה כפתור',

    // Encoded Output
    'output.title': 'פלט מקודד',
    'output.desc': 'העתק את הטקסט המקודד למטה והדבק אותו ב-Home Assistant / Zigbee2MQTT.',
    'output.buttonEncoded': 'כפתור',
    'output.encodedSuffix': '— מקודד',
    'output.copyAriaLabel': 'העתק טקסט מקודד עבור כפתור',

    // Author
    'author.photoAlt': 'גלעד שהם',
    'author.name': 'גלעד שהם',

    // Buy Coffee
    'coffee.text': 'הפרויקט הזה הוא חינמי וקוד פתוח. אם מצאת אותו שימושי ורוצה לתרום, שקול לקנות לי קפה!',
    'coffee.button': 'קנה לי קפה',
  },
  en: {
    // Header
    'header.viewOnGithub': 'View on GitHub',

    // Intro
    'intro.subtitle': 'Hebrew Labels for Zemismart Switches',
    'intro.desc': 'Convert Hebrew text to the correct encoding for Zemismart smart switch LED displays. Works seamlessly with Home Assistant and Zigbee2MQTT.',
    'intro.credit.prefix': 'Created with ❤️ by',
    'intro.credit.suffix': '— free to use.',

    // Gang Selector
    'gangSelector.ariaLabel': 'Number of switch buttons',
    'gangSelector.gang': 'Gang',

    // Switch Preview
    'switchPreview.alt': 'Zemismart switch',
    'switchPreview.label': 'Label',

    // Input Section
    'input.title': 'Enter Hebrew Labels',
    'input.button': 'Button',
    'input.placeholder': 'הקלד כאן...',
    'input.clearAriaLabel': 'Clear button',

    // Encoded Output
    'output.title': 'Encoded Output',
    'output.desc': 'Copy the encoded text below and paste it in Home Assistant / Zigbee2MQTT.',
    'output.buttonEncoded': 'Button',
    'output.encodedSuffix': '— Encoded',
    'output.copyAriaLabel': 'Copy encoded text for button',

    // Author
    'author.photoAlt': 'Gilad Shoham',
    'author.name': 'Gilad Shoham',

    // Buy Coffee
    'coffee.text': 'This project is free and open source. If you find it useful and want to give back, consider buying me a coffee!',
    'coffee.button': 'Buy me a coffee',
  },
}

export default translations
