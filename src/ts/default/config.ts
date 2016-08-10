config {
  no_cache = 1
  doctype = html5
 

  #kein Typo3 generiertes CSS einbinden
  inlineStyle2TempFile=0
  language = de 
  linkVars = L, owner
  htmlTag_langKey = de_DE
  sys_language_uid = 0
  locale_all = de_DE

  #sys_language_mode = content_fallback
  #sys_language_overlay = hideNonTranslated

  # real url #
   # typolinkCheckRootline = 1
   simulateStaticDocuments = 0
   absRefPrefix = /
   baseURL = http://kadia.info
   tx_realurl_enable = 1
   # prefixLocalAnchors = all
   # uniqueLinkVars = 1
  # real url #


  noPageTitle = 2

  # index search #
  index_enable = 1

}

# [hostname = sub2.localhost.tld]
#   config.baseURL = sub2.localhost.tld/
# [global]
# [globalString = ENV:HTTP_HOST=sub1.localhost.tld]
#   config.baseURL = sub1.localhost.tld/
# [global]


[globalVar = GP:L = 1]
  config{
    sys_language_uid = 1
    language = en
    locale_all = en_UK
    htmlTag_langKey = en_UK
  }
[global]



#### enable images in WYSIWYG
RTE.default.proc {
  allowTag := addToList(img)
  allowTagsOutside := addToList(img)
  entryHTMLparser_db.tags.img >
}
RTE.default.showButtons := addToList(image)
RTE.default.FE {
  proc.allowTags := RTE.default.proc.allowTags
  proc.allowTagsOutside < RTE.default.proc.allowTagsOutside
  proc.entryHTMLparser_db.tags.img >
  showButtons < RTE.default.showButtons
}


plugin.tx_indexedsearch.search.rootPidList = 1



