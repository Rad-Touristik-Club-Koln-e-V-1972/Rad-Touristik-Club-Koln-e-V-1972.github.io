import ContactBuilder from '~/models/builder/ContactBuilder'

export default [
    new ContactBuilder()
        .description('Hier könnte seine Beschreibung stehen.')
        .eMail('erster.vorsitzender@rtc-koeln.de')
        .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
        .name('Wolfgang Dünkelmann')
        .position('Erster Vorsitzender')
        .build(),
    new ContactBuilder()
        .description('Hier könnte seine Beschreibung stehen.')
        .eMail('erster.sportwart@rtc-koeln.de')
        .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
        .name('Klaus Dünkelmann')
        .position('Erster Sportwart')
        .build(),
    new ContactBuilder()
        .description('Hier könnte seine Beschreibung stehen.')
        .eMail('PR@rtc-koeln.de')
        .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
        .name('Diana Vialon')
        .position('Pressewart')
        .build(),
    new ContactBuilder()
        .description('Hier könnte seine Beschreibung stehen.')
        .eMail('geschaeftsfuehrung@rtc-koeln.de')
        .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
        .name('Burghild Liedtke')
        .position('Geschäftsführung')
        .build(),
    new ContactBuilder()
        .description('Hier könnte seine Beschreibung stehen.')
        .eMail('webmaster@rtc-koeln.de')
        .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
        .name('Martin Dünkelmann')
        .position('Webmaster')
        .build(),
]
