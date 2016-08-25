
# This files should be included in 
# page > edit > appearance > tsconfig

TCEFORM.tt_content.layout.altLabels.0 = tba
TCEFORM.tt_content.layout.altLabels.1 = Superhero
TCEFORM.tt_content.layout.altLabels.2 = 1-spaltig mit Balken (weiß)
TCEFORM.tt_content.layout.altLabels.3 = 2-spaltig Text/Bild (weiß innen)
TCEFORM.tt_content.layout.addItems.4 = 2-spaltig Bild/Text (weiß innen)
TCEFORM.tt_content.layout.addItems.5 = Event Widget
TCEFORM.tt_content.layout.addItems.6 = News Widget
TCEFORM.tt_content.layout.addItems.20 = 1-spaltig mit Balken (grau)
TCEFORM.tt_content.layout.addItems.21 = 1-spaltig ohne Balken (weiß)
TCEFORM.tt_content.layout.addItems.22 = 1-spaltig ohne Balken (grau)
TCEFORM.tt_content.layout.addItems.23 = Text 2-spaltig (grau)
TCEFORM.tt_content.layout.addItems.24 = Text 2-spaltig (weiß)
TCEFORM.tt_content.layout.addItems.25 = 1-spaltig Impression
TCEFORM.tt_content.layout.addItems.26 = 1-spaltig Grafik
TCEFORM.tt_content.layout.addItems.30 = Hero (hell)
TCEFORM.tt_content.layout.addItems.31 = Hero (dunkel)
TCEFORM.tt_content.layout.addItems.50 = Hero Maschinen

TCEFORM.tt_content.layout.addItems.60 = 2-spaltig Text/Bild (grau)
TCEFORM.tt_content.layout.addItems.61 = 2-spaltig Bild/Text (grau)
TCEFORM.tt_content.layout.addItems.62 = 2-spaltig Text/Slideshow
TCEFORM.tt_content.layout.addItems.63 = 2-spaltig Slideshow/Text
TCEFORM.tt_content.layout.addItems.64 = 2-spaltig Text/Bild (weiß)
TCEFORM.tt_content.layout.addItems.65 = 2-spaltig Bild/Text (weiß)
TCEFORM.tt_content.layout.addItems.66 = 2-spaltig Info Text/Bild
TCEFORM.tt_content.layout.addItems.67 = 2-spaltig Info Bild/Text
TCEFORM.tt_content.layout.addItems.68 = 2-spaltig Text/Bild mit Bildoverlay
TCEFORM.tt_content.layout.addItems.69 = 2-spaltig Bild/Text mit Bildoverlay
TCEFORM.tt_content.layout.addItems.70 = Zierbild
TCEFORM.tt_content.layout.addItems.80 = Full-Image Slideshow
TCEFORM.tt_content.layout.addItems.100 = Zahlen & Fakten
TCEFORM.tt_content.layout.addItems.101 = Zahlen & Fakten (weiß)
TCEFORM.tt_content.layout.addItems.120 = Tooltip 1
TCEFORM.tt_content.layout.addItems.121 = Tooltip 2
TCEFORM.tt_content.layout.addItems.122 = Tooltip 3


RTE.default {
    contentCSS = typo3conf/ext/ktempl/screen.min.css
    showButtons = bold, italic, chMode, formatblock, textstyle, textstylelabel, unorderedlist, insertedtext, deletedtext, link, unlink, removeformat, undo, redo, left, right, table, tableproperties, image
    buttons.textstyle.showTagFreeClasses = 1

    buttons.textstyle.tags.span.allowedClasses (
        link-btn, link-arrow, link-video, link-document, text-definition, link-info
    )
    buttons.textstyle.tags.a.allowedClasses (
        link-btn, link-arrow, link-video, link-document, text-definition, link-info
    )
    buttons.image.properties.class.allowedClasses (
        rte_image
    )
    proc {
        allowedClasses (
            external-link, external-link-new-window, internal-link, internal-link-new-window, download,
            link-btn, link-arrow, link-video, link-document, align-right, align-left, text-definition, link-info
        )
    }
}