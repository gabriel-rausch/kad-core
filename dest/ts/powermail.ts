
# Configuration

plugin.tx_powermail.settings.setup.staticTemplate = 1

plugin.tx_powermail.settings.setup.receiver.subject = Anfrage KADIA Kontaktformular - Information
plugin.tx_powermail.settings.setup.receiver.email =  info@kadia.de

# DE version
[globalString = GP:tx_powermail_pi1|field|marker = Service]
    plugin.tx_powermail.settings.setup.receiver.subject = Anfrage KADIA Kontaktformular - Service
    plugin.tx_powermail.settings.setup.receiver.email = service@kadia.de
[global]
# EN version
[globalString = GP:tx_powermail_pi1|field|kontaktgrund = Service]
    plugin.tx_powermail.settings.setup.receiver.subject = Anfrage KADIA Kontaktformular - Service
plugin.tx_powermail.settings.setup.receiver.email = service@kadia.de
[global]

# Kopie an Absender, wenn Checkbox aktiviert
plugin.tx_powermail.settings.setup.sender.enable = 0
# Abfrage ob das Wort "Kopie" vorkommt
# DE version
[globalString = GP:tx_powermail_pi1|field|inkopieanmichsenden|0 = *Kopie*]
    plugin.tx_powermail.settings.setup.sender.enable = 1
[end]
# EN version
[globalString = GP:tx_powermail_pi1|field|sendcopytome|0 = *Kopie*]
    plugin.tx_powermail.settings.setup.sender.enable = 1
[end]



# Return form element

lib.form = CONTENT
lib.form {
    table = tt_content
    select {
        orderBy = sorting
        where = colPos = 0
        languageField = sys_language_uid
        andWhere = CType = 'list'
    }
}