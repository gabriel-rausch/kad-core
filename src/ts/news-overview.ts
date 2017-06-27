[globalVar = TSFE:page|uid=4]

lib.newsPUIs = HMENU
lib.newsPUIs {
    special = directory
    special.value = 4
    entryLevel = 0

    1 = TMENU
    1 {
        expAll = 1
        noBlur = 1
        NO.allStdWrap.field = uid
        # start list with this uid and add sub pages with comma
            NO.allStdWrap.wrap = this,| |*|  ,|
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
    file = typo3conf/ext/ktempl/main.html
    partialRootPath = typo3conf/ext/ktempl/
    layoutRootPath = typo3conf/ext/ktempl/
        dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
        10 {
            table = tt_content
            pidInList.cObject < lib.newsPUIs
            orderBy.dataWrap = FIND_IN_SET(pid,'{register:currentList}'),|
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
    }
}

[global]