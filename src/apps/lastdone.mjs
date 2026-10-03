// LastDone – app metadata. Only facts of the current release candidate
// (1.0.0+3). Never claim "fully offline" or "no data transfer at all":
// Google Play Billing sends technical diagnostics to Google.

export default {
  slug: 'lastdone',
  name: 'LastDone',
  icon: '/assets/apps/lastdone/icon.png',
  iconAlt: { de: 'App-Symbol von LastDone', en: 'LastDone app icon' },
  // 'available' | 'coming-soon'. Store link only once the app is published.
  status: 'coming-soon',
  googlePlayUrl: null,
  platforms: ['Android'],
  legal: {
    // 'final' once the binding texts are in place. While 'draft', the pages
    // show a clear "in preparation" notice and are excluded from indexing.
    privacy: 'draft',
    terms: 'draft',
  },

  content: {
    de: {
      tagline: 'Behalte im Blick, was wann zuletzt erledigt wurde – und was als Nächstes fällig ist.',
      summary:
        'Verwalte Dinge und Aufgaben mit Fälligkeiten, dokumentiere Erledigungen und lass dich erinnern.',
      statusLabel: 'In Vorbereitung',
      modelShort: '14 Tage testen, dann einmal kaufen',
      metaTitle: 'LastDone – Aufgaben, Fälligkeiten und Erledigungen im Blick | SHneoTools',
      metaDescription:
        'LastDone von SHneoDesigns: Dinge und Aufgaben mit Fälligkeiten verwalten, Erledigungen dokumentieren, Erinnerungen. 14 Tage vollständig testen, danach einmaliger Kauf – kein Abo, keine Werbung.',
      features: [
        { title: 'Fälligkeiten im Blick', text: 'Verwalte Dinge und Aufgaben mit Fälligkeiten an einem Ort.' },
        { title: 'Erledigungen dokumentieren', text: 'Halte fest, wann etwas erledigt wurde, und sieh den Verlauf.' },
        { title: 'Erinnerungen', text: 'Lass dich rechtzeitig an anstehende Aufgaben erinnern.' },
        { title: 'Sicherung und Wiederherstellung', text: 'Sichere deine Daten in eine Datei und stelle sie bei Bedarf wieder her.' },
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
        'Die Kernfunktionen und deine Daten in LastDone arbeiten lokal auf deinem Gerät.',
        'Ein Online-Zugriff wird für bestimmte Google-Play-Funktionen wie Kauf und Wiederherstellung des Kaufs benötigt sowie für Online-Funktionen, die du bewusst aufrufst (zum Beispiel das Öffnen der Store-Seite).',
        'SHneoDesigns betreibt für LastDone kein eigenes Analyse- oder Tracking-System.',
        'Google Play Billing kann technische Diagnoseinformationen an Google übertragen.',
      ],
    },
    en: {
      tagline: 'Keep track of what was last done when – and what is due next.',
      summary: 'Manage things and tasks with due dates, record completions and get reminders.',
      statusLabel: 'In preparation',
      modelShort: 'Try for 14 days, then buy once',
      metaTitle: 'LastDone – tasks, due dates and completions at a glance | SHneoTools',
      metaDescription:
        'LastDone by SHneoDesigns: manage things and tasks with due dates, record completions, reminders. Try every feature for 14 days, then a one-time purchase – no subscription, no ads.',
      features: [
        { title: 'Due dates at a glance', text: 'Manage things and tasks with due dates in one place.' },
        { title: 'Record completions', text: 'Note when something was done and see the history.' },
        { title: 'Reminders', text: 'Get reminded of upcoming tasks in good time.' },
        { title: 'Backup and restore', text: 'Back up your data to a file and restore it when needed.' },
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
        'The core features and your data in LastDone work locally on your device.',
        'Online access is needed for certain Google Play functions such as purchasing and restoring the purchase, and for online features you deliberately open (for example the store page).',
        'SHneoDesigns does not run its own analytics or tracking system for LastDone.',
        'Google Play Billing may transmit technical diagnostic information to Google.',
      ],
    },
  },
};
