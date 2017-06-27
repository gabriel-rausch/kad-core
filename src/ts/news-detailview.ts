[globalVar = TSFE:page|pid=4]

lib.newsPUIs = HMENU
lib.newsPUIs {
    special = directory
    special.value = 4
    entryLevel = 0
    excludeUidList.data = TSFE:id

    1 = TMENU
    1 {
        expAll = 1
        noBlur = 1
        NO.allStdWrap.field = uid
        NO.allStdWrap.wrap = | |*|  ,|
    }
    2 < .1
}


page = PAGE
page.5 = LOAD_REGISTER
page.5 {
    currentList = TEXT
    currentList.cObject < lib.newsPUIs
}
page.10 = FLUIDTEMPLATE
page.10 {
    format = html
    languageField = sys_language_uid
    file = typo3conf/ext/ktempl/news-detailpage.html
    partialRootPath = typo3conf/ext/ktempl/
    layoutRootPath = typo3conf/ext/ktempl/
        dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
        10 {
            table = tt_content
            orderBy = sorting
            languageField = sys_language_uid
            as = content
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                10 {
                    languageField = sys_language_uid
                    references.fieldName = assets
                }
            }
        }
        20 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
        20 {
            table = tt_content
            pidInList.cObject < lib.newsPUIs
            languageField = sys_language_uid
            as = contentnews
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                10 {
                    languageField = sys_language_uid
                    references.fieldName = assets
                }
            }
        }
    }
}
[global]