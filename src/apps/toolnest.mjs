// ToolNest – app metadata. Only facts of the current release candidate
// (1.0.0+1). ToolNest is a general "where did I put it?" app for personal
// things – not a tool, stock or warehouse manager. Never claim "fully
// offline" or "no data transfer at all": Google Play Billing sends technical
// diagnostics to Google once it is connected. ToolNest opens no online
// content except the imprint.

export default {
  slug: 'toolnest',
  name: 'ToolNest',
  icon: '/assets/apps/toolnest/icon.png',
  iconAlt: { de: 'App-Symbol von ToolNest', en: 'ToolNest app icon' },
  // 'available' | 'coming-soon'. Store link only once the app is published.
  status: 'coming-soon',
  googlePlayUrl: null,
  platforms: ['Android'],
  legal: {
    // 'final': rendered from content/legal/toolnest/ – byte-identical
    // copies of the app's assets/legal/*.txt (tools/check-legal-sync.mjs).
    privacy: 'final',
    terms: 'final',
  },

  content: {
    de: {
      tagline: 'Wissen, wo deine Sachen sind.',
      summary:
        'Erfasse deine Sachen, merke dir, wo sie liegen, und finde sie später in Sekunden wieder – von der Winterjacke über die Weihnachtsdeko bis zum HDMI-Kabel.',
      statusLabel: 'In Vorbereitung',
      modelShort: '14 Tage testen, dann einmal kaufen',
      metaTitle: 'ToolNest – wissen, wo deine Sachen sind | SHneoTools',
      metaDescription:
        'ToolNest von SHneoDesigns: persönliche Gegenstände mit Foto erfassen, ihren Aufbewahrungsort in beliebig vielen Ebenen speichern und sie per Suche oder QR-Etikett wiederfinden. Lokal auf dem Gerät, ohne Konto. 14 Tage testen, danach einmaliger Kauf – kein Abo, keine Werbung.',
      features: [
        {
          title: 'Eintragen in Sekunden',
          text: 'Foto (optional), Name, Ort – fertig. Kategorie, Marke, Modell, Seriennummer, Kaufdatum, Preis, Zustand und Notizen kannst du bei Bedarf unter „Weitere Details“ ergänzen.',
        },
        {
          title: 'Orte in beliebig vielen Ebenen',
          text: 'Bilde deine Aufbewahrung so ab, wie sie wirklich ist – zum Beispiel Zuhause › Keller › Regal links › Kiste Weihnachten.',
        },
        {
          title: 'Suchen und wiederfinden',
          text: 'Die Suche findet Einträge über Name, Marke, Modell, Seriennummer, Notiz, Kategorie und Ort und zeigt sofort, wo etwas liegt.',
        },
        {
          title: 'QR-Etiketten',
          text: 'Erstelle QR-Etiketten für Gegenstände und Orte. Auf eine Kiste geklebt, öffnet ein Scan mit ToolNest direkt deren Inhalt.',
        },
        {
          title: 'Eigene Kategorien',
          text: 'Ordne deine Sachen mit Kategorien, die du selbst festlegst – optional und beliebig verschachtelbar.',
        },
        {
          title: 'Fotos und Dokumente',
          text: 'Mehrere Fotos je Eintrag sowie Dokumente wie Rechnung, Garantieschein oder Anleitung direkt beim Gegenstand.',
        },
        {
          title: 'Wartung, Erinnerungen und Verlauf',
          text: 'Plane Wartungen, Prüfungen und Garantietermine mit lokalen Erinnerungen; der Verlauf zeigt, was sich bei einem Eintrag geändert hat.',
        },
        {
          title: 'Backup und CSV',
          text: 'Sicherung aller Einträge, Fotos und Dokumente in eine Datei und Wiederherstellung, dazu CSV-Export und -Import.',
        },
        { title: 'Lokal gespeichert', text: 'Deine Einträge, Fotos und Dokumente werden lokal auf deinem Gerät gespeichert.' },
        { title: 'Kein Konto nötig', text: 'Kein SHneoDesigns-Konto und keine Registrierung.' },
      ],
      model: [
        '14 Tage alle Funktionen vollständig testen.',
        'Danach dauerhafte Freischaltung durch einen einmaligen Kauf über Google Play.',
        'Kein Abo und keine Werbung.',
        'Deine Daten bleiben nach Ablauf des Testzeitraums erhalten.',
      ],
      modelNote: 'Den Preis zeigt Google Play in deinem Land an.',
      data: [
        'Die Funktionen und deine Daten in ToolNest – Einträge, Orte, Kategorien, Fotos, Dokumente, Wartungen und Verlauf – arbeiten lokal auf deinem Gerät. SHneoDesigns erhält diese Daten nicht.',
        'Die Kamera nutzt ToolNest nur, wenn du ein Foto aufnimmst oder einen QR-Code scannst. Vor dem Speichern eines Fotos entfernt die App Metadaten wie den GPS-Standort. Kamerabilder des Scanners werden weder gespeichert noch übertragen.',
        'Ein QR-Etikett enthält nur einen zufälligen technischen Code – keinen Namen, keine Adresse und keinen Link ins Internet.',
        'Für Kauf und Wiederherstellung des Kaufs nutzt ToolNest Google Play; dafür sind Google-Dienste und eine Internetverbindung nötig. Zahlungsdaten gibst du nur bei Google ein.',
        'SHneoDesigns betreibt für ToolNest kein eigenes Analyse- oder Tracking-System, zeigt keine Werbung und verwendet kein Benutzerkonto.',
        'Sobald ToolNest mit Google Play Billing verbunden ist – nach einem Tipp auf Freischalten oder Kauf wiederherstellen bzw. zum Abgleich eines bereits getätigten Kaufs –, überträgt die eingebundene Billing-Bibliothek technische Diagnoseinformationen an Google. Allein das Starten und Nutzen der App während der Testphase verbindet Google Play Billing nicht. Details: Datenschutzerklärung.',
        'Backups und CSV-Exporte entstehen nur auf deinen Wunsch; den Speicherort wählst du selbst. Sie sind unverschlüsselt und enthalten keinen Kauf.',
      ],
      notes: [
        'ToolNest ist eine Hilfe für deinen eigenen Überblick: Es merkt sich, was du einträgst – keine Lagerverwaltung und keine Bestandsführung.',
        'Fälligkeiten und Erinnerungen beruhen ausschließlich auf deinen eigenen Einträgen. Erinnerungen zeigt Android an; sie können sich verzögern oder ausbleiben, zum Beispiel wenn Benachrichtigungen ausgeschaltet sind oder Energiesparfunktionen die App einschränken.',
        'ToolNest ersetzt keine Herstellerangaben und keine vorgeschriebenen Prüfungen oder Wartungen und ist kein Nachweis über Eigentum, Wert oder Zustand gegenüber Versicherungen oder Behörden.',
        'Deine Daten liegen nur auf deinem Gerät. Erstelle regelmäßig Backups und bewahre sie außerhalb des Geräts auf – bei Verlust, Defekt oder Zurücksetzen des Geräts sind die Daten sonst verloren.',
      ],
    },
    en: {
      tagline: 'Know where your things are.',
      summary:
        'Add your things, remember where they are and find them again in seconds – from the winter jacket and the Christmas decorations to the HDMI cable.',
      statusLabel: 'In preparation',
      modelShort: 'Try for 14 days, then buy once',
      metaTitle: 'ToolNest – know where your things are | SHneoTools',
      metaDescription:
        'ToolNest by SHneoDesigns: add personal things with a photo, save where they are kept on as many levels as you like and find them again by search or QR label. Stored locally on your device, no account. Try every feature for 14 days, then a one-time purchase – no subscription, no ads.',
      features: [
        {
          title: 'Added in seconds',
          text: 'Photo (optional), name, place – done. Category, brand, model, serial number, purchase date, price, condition and notes can be added under “More details” when you need them.',
        },
        {
          title: 'Places on any number of levels',
          text: 'Map your storage the way it really is – for example Home › Basement › Left shelf › Christmas box.',
        },
        {
          title: 'Search and find',
          text: 'Search finds entries by name, brand, model, serial number, note, category and place and shows right away where something is.',
        },
        {
          title: 'QR labels',
          text: 'Create QR labels for things and places. Stuck on a box, a scan with ToolNest opens its contents directly.',
        },
        {
          title: 'Your own categories',
          text: 'Organise your things with categories you define yourself – optional and nestable as you like.',
        },
        {
          title: 'Photos and documents',
          text: 'Several photos per entry and documents such as the invoice, warranty or manual right with the item.',
        },
        {
          title: 'Maintenance, reminders and history',
          text: 'Plan maintenance, inspections and warranty dates with local reminders; the history shows what changed for an entry.',
        },
        {
          title: 'Backup and CSV',
          text: 'Back up all entries, photos and documents to a file and restore them, plus CSV export and import.',
        },
        { title: 'Stored locally', text: 'Your entries, photos and documents are stored locally on your device.' },
        { title: 'No account needed', text: 'No SHneoDesigns account and no sign-up.' },
      ],
      model: [
        'Try every feature for 14 days.',
        'After that, unlock the app permanently with a one-time purchase through Google Play.',
        'No subscription and no ads.',
        'Your data is kept when the trial ends.',
      ],
      modelNote: 'Google Play shows the price for your country.',
      data: [
        'The features and your data in ToolNest – entries, places, categories, photos, documents, maintenance and history – work locally on your device. SHneoDesigns does not receive this data.',
        'ToolNest uses the camera only when you take a photo or scan a QR code. Before a photo is saved, the app removes metadata such as the GPS location. Camera images of the scanner are neither stored nor sent.',
        'A QR label contains only a random technical code – no name, no address and no link to the internet.',
        'ToolNest uses Google Play for purchasing and restoring the purchase; this needs Google services and an internet connection. You enter payment details only with Google.',
        'SHneoDesigns does not run its own analytics or tracking system for ToolNest, shows no ads and uses no user account.',
        'Once ToolNest is connected to Google Play Billing – after a tap on unlock or restore purchase, or to match an existing purchase –, the built-in Billing Library sends technical diagnostic information to Google. Starting and using the app during the trial does not by itself connect Google Play Billing. Details: privacy policy.',
        'Backups and CSV exports are only created when you ask for them; you choose where they are saved. They are not encrypted and contain no purchase.',
      ],
      notes: [
        'ToolNest helps you keep your own overview: it remembers what you enter – it is no warehouse or stock management.',
        'Due dates and reminders are based solely on your own entries. Reminders are shown by Android and may be delayed or not shown, for example if notifications are switched off or energy saving restricts the app.',
        'ToolNest does not replace manufacturer instructions or required inspections or maintenance and is no proof of ownership, value or condition towards insurers or authorities.',
        'Your data is only on your device. Make regular backups and keep them outside the device – otherwise the data is lost if the device is lost, broken or reset.',
      ],
    },
  },
};
