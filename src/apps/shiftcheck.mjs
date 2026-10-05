// ShiftCheck – app metadata. Only facts of the current release candidate
// (1.0.0+1). Never claim "fully offline" or "no data transfer at all":
// Google Play Billing sends technical diagnostics to Google. ShiftCheck has
// no ratings feature and opens no online content except the imprint.

export default {
  slug: 'shiftcheck',
  name: 'ShiftCheck',
  icon: '/assets/apps/shiftcheck/icon.png',
  iconAlt: { de: 'App-Symbol von ShiftCheck', en: 'ShiftCheck app icon' },
  // 'available' | 'coming-soon'. Store link only once the app is published.
  status: 'coming-soon',
  googlePlayUrl: null,
  platforms: ['Android'],
  legal: {
    // 'final': rendered from content/legal/shiftcheck/ – byte-identical
    // copies of the app's assets/legal/*.txt (tools/check-legal-sync.mjs).
    privacy: 'final',
    terms: 'final',
  },

  content: {
    de: {
      tagline: 'Dein Schichtplan. Deine Zeiten. Dein Überblick.',
      summary:
        'Plane Schichten mit eigener Wochenrotation, dokumentiere deine tatsächlichen Arbeitszeiten und vergleiche deine Aufzeichnungen mit deiner Lohnabrechnung.',
      statusLabel: 'In Vorbereitung',
      modelShort: '14 Tage testen, dann einmal kaufen',
      metaTitle: 'ShiftCheck – Schichtplan, Arbeitszeiten und Abrechnung im Blick | SHneoTools',
      metaDescription:
        'ShiftCheck von SHneoDesigns: Schichtplan mit Wochenrotation, tatsächliche Arbeitszeiten, Abwesenheiten, Auswertung und persönlicher Abgleich mit der Lohnabrechnung. Lokal auf dem Gerät, ohne Konto. 14 Tage testen, danach einmaliger Kauf – kein Abo, keine Werbung.',
      features: [
        {
          title: 'Schichten und Rotation',
          text: 'Lege eigene Schichtarten mit Zeiten, Pausen und Starttagen an und stelle daraus deine Wochenrotation zusammen – auch mit freien Wochen. Der Kalender ergibt sich daraus automatisch.',
        },
        {
          title: 'Plan und Ist',
          text: 'Erfasse, wann du tatsächlich gearbeitet hast – mit einem Tipp „wie geplant“ oder mit abweichenden Zeiten, auch über Mitternacht.',
        },
        {
          title: 'Abwesenheiten und Tagesänderungen',
          text: 'Trage Urlaub, Krankheit, sonstige Abwesenheiten und freie Tage ein, ändere einzelne Tage und kehre jederzeit zur Rotation zurück.',
        },
        {
          title: 'Auswertung',
          text: 'Sieh Soll, Ist und Differenz je Woche, Monat und Jahr – mit persönlichen Überstunden, Nacht-, Sonntags- und Feiertagsstunden sowie geschätzten Zuschlägen nach deinen eigenen Regeln.',
        },
        {
          title: 'Abrechnung prüfen',
          text: 'Vergleiche deine eigenen Aufzeichnungen mit den Werten, die du aus deiner Lohnabrechnung abtippst. Abweichungen sind ein Hinweis, genauer hinzusehen.',
        },
        {
          title: 'Erinnerungen, Backup und CSV',
          text: 'Lokale Erinnerungen an Schichten und fehlende Zeiten, Sicherung in eine Datei und Monatsexport als CSV.',
        },
        { title: 'Lokal gespeichert', text: 'Deine Einträge werden lokal auf deinem Gerät gespeichert.' },
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
        'Die Kernfunktionen und deine Daten in ShiftCheck – Schichtplan, Arbeitszeiten, Abwesenheiten, Auswertungen und Abrechnungsvergleich – arbeiten lokal auf deinem Gerät. SHneoDesigns erhält diese Daten nicht.',
        'Für Kauf und Wiederherstellung des Kaufs nutzt ShiftCheck Google Play; dafür sind Google-Dienste und eine Internetverbindung nötig. Zahlungsdaten gibst du nur bei Google ein.',
        'SHneoDesigns betreibt für ShiftCheck kein eigenes Analyse- oder Tracking-System, zeigt keine Werbung und verwendet kein Benutzerkonto.',
        'Sobald ShiftCheck mit Google Play Billing verbunden ist – nach einem Tipp auf Freischalten oder Kauf wiederherstellen bzw. zum Abgleich eines bereits getätigten Kaufs –, überträgt die eingebundene Billing-Bibliothek technische Diagnoseinformationen an Google. Allein das Starten und Nutzen der App während der Testphase verbindet Google Play Billing nicht. Details: Datenschutzerklärung.',
        'Backups und CSV-Exporte entstehen nur auf deinen Wunsch; den Speicherort wählst du selbst. Sie sind unverschlüsselt und enthalten keinen Kauf.',
      ],
      notes: [
        'ShiftCheck ist ein persönliches Werkzeug zur Organisation, Dokumentation und Kontrolle deiner Arbeitszeiten. Es erstellt keine Lohnabrechnung.',
        'Alle Berechnungen beruhen auf deinen eigenen Einträgen und den Regeln, die du selbst festlegst. Die Ergebnisse sind Schätzungen und nicht rechtsverbindlich.',
        'Arbeitsvertrag, Tarifvertrag, Betriebsvereinbarungen, gesetzliche Vorschriften und die Abrechnung deines Arbeitgebers können abweichende Regeln enthalten. ShiftCheck kennt diese nicht und kann nicht garantieren, dass berechnete Zuschläge oder Überstunden einem konkreten Anspruch entsprechen.',
        'Der Abrechnungsvergleich ist ein persönlicher Abgleich mit Werten, die du selbst eingibst. Eine angezeigte Abweichung bedeutet nicht, dass deine Abrechnung falsch ist – prüfe in diesem Fall deine Einträge und die Originalunterlagen und wende dich bei Bedarf an deinen Arbeitgeber oder eine fachkundige Stelle.',
        'ShiftCheck bietet keine Rechts-, Steuer- oder Lohnberatung. Für korrekte Eingaben und Regeln bist du selbst verantwortlich.',
      ],
    },
    en: {
      tagline: 'Your shift plan. Your hours. Your overview.',
      summary:
        'Plan shifts with your own weekly rotation, record the hours you actually worked and compare your records with your payslip.',
      statusLabel: 'In preparation',
      modelShort: 'Try for 14 days, then buy once',
      metaTitle: 'ShiftCheck – shift plan, working hours and payslip at a glance | SHneoTools',
      metaDescription:
        'ShiftCheck by SHneoDesigns: shift plan with weekly rotation, actual working hours, absences, evaluation and a personal comparison with your payslip. Stored locally on your device, no account. Try every feature for 14 days, then a one-time purchase – no subscription, no ads.',
      features: [
        {
          title: 'Shifts and rotation',
          text: 'Create your own shift types with times, breaks and start days and build your weekly rotation from them – free weeks included. The calendar follows automatically.',
        },
        {
          title: 'Planned and actual',
          text: 'Record when you actually worked – with one tap “as planned” or with different times, also across midnight.',
        },
        {
          title: 'Absences and day changes',
          text: 'Enter vacation, sick days, other absences and days off, change single days and return to the rotation at any time.',
        },
        {
          title: 'Evaluation',
          text: 'See target, actual and difference per week, month and year – with personal overtime, night, Sunday and holiday hours and premiums estimated with your own rules.',
        },
        {
          title: 'Check payslip',
          text: 'Compare your own records with the values you type in from your payslip. A deviation is a hint to take a closer look.',
        },
        {
          title: 'Reminders, backup and CSV',
          text: 'Local reminders of shifts and missing times, backup to a file and a monthly CSV export.',
        },
        { title: 'Stored locally', text: 'Your entries are stored locally on your device.' },
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
        'The core features and your data in ShiftCheck – shift plan, working hours, absences, evaluations and payslip comparison – work locally on your device. SHneoDesigns does not receive this data.',
        'ShiftCheck uses Google Play for purchasing and restoring the purchase; this needs Google services and an internet connection. You enter payment details only with Google.',
        'SHneoDesigns does not run its own analytics or tracking system for ShiftCheck, shows no ads and uses no user account.',
        'Once ShiftCheck is connected to Google Play Billing – after a tap on unlock or restore purchase, or to match an existing purchase –, the built-in Billing Library sends technical diagnostic information to Google. Starting and using the app during the trial does not by itself connect Google Play Billing. Details: privacy policy.',
        'Backups and CSV exports are only created when you ask for them; you choose where they are saved. They are not encrypted and contain no purchase.',
      ],
      notes: [
        'ShiftCheck is a personal tool to organise, document and check your working hours. It does not create a payslip.',
        'All calculations are based on your own entries and the rules you set yourself. The results are estimates and not legally binding.',
        'Your employment contract, collective agreement, works agreements, statutory rules and your employer’s payroll may contain different rules. ShiftCheck does not know them and cannot guarantee that calculated premiums or overtime match a specific entitlement.',
        'The payslip comparison is a personal comparison with values you enter yourself. A deviation shown does not mean that your payslip is wrong – in that case check your entries and the original documents and, if needed, contact your employer or a qualified adviser.',
        'ShiftCheck does not provide legal, tax or payroll advice. You are responsible for correct entries and rules.',
      ],
    },
  },
};
