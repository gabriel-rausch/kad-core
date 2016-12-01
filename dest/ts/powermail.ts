plugin.tx_powermail.settings.setup.staticTemplate = 1

plugin.tx_powermail.settings.setup.receiver.subject = Anfrage KADIA Kontaktformular - Information
plugin.tx_powermail.settings.setup.receiver.email = misc@gabriel-rausch.de


[globalString = GP:tx_powermail_pi1|field|marker = Service]
    plugin.tx_powermail.settings.setup.receiver.subject = Anfrage KADIA Kontaktformular - Service
    plugin.tx_powermail.settings.setup.receiver.email = mail@gabriel-rausch.de
[global]

## Kopie an Absender, wenn Checkbox aktiviert
plugin.tx_powermail.settings.setup.sender.enable = 0
# Abfrage ob das Wort "Kopie" vorkommt
[globalString = GP:tx_powermail_pi1|field|inkopieanmichsenden|0 = *Kopie*]
    plugin.tx_powermail.settings.setup.sender.enable = 1
[end]
