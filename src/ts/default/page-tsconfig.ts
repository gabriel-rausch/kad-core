
# This files should be included in 
# page > edit > appearance > tsconfig

TCEFORM.tt_content.layout.altLabels.0 = tba
TCEFORM.tt_content.layout.altLabels.1 = Superhero
TCEFORM.tt_content.layout.altLabels.2 = 1-spaltig mit Balken
TCEFORM.tt_content.layout.altLabels.3 = 2-spaltig Text/Bild
TCEFORM.tt_content.layout.addItems.4 = 2-spaltig Bild/Text
TCEFORM.tt_content.layout.addItems.5 = Event Widget
TCEFORM.tt_content.layout.addItems.6 = News Widget
TCEFORM.tt_content.layout.addItems.30 = Hero (hell)
TCEFORM.tt_content.layout.addItems.31 = Hero (dunkel)
TCEFORM.tt_content.layout.addItems.50 = Hero Maschinen
TCEFORM.tt_content.layout.addItems.62 = 2-spaltig Slideshow/Text
TCEFORM.tt_content.layout.addItems.63 = 2-spaltig Text/Slideshow
TCEFORM.tt_content.layout.addItems.70 = Zierbild


RTE.default {
    contentCSS = typo3conf/ext/ktempl/screen.min.css
    showButtons = bold, italic, chMode, formatblock, textstyle, textstylelabel, unorderedlist, insertedtext, deletedtext, link, unlink, removeformat, undo, redo, left, right, table, tableproperties, image
    buttons.textstyle.showTagFreeClasses = 1

    buttons.textstyle.tags.span.allowedClasses (
        link-btn, link-arrow, link-video, link-document
    )
    buttons.textstyle.tags.a.allowedClasses (
        link-btn, link-arrow, link-video, link-document
    )
    buttons.image.properties.class.allowedClasses (
        rte_image
    )
    proc {
        allowedClasses (
            external-link, external-link-new-window, internal-link, internal-link-new-window, download,
            link-btn, link-arrow, link-video, link-document, align-right, align-left
        )
    }
}