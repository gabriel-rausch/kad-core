config {
  no_cache = 1
  doctype = html5
 

  #kein Typo3 generiertes CSS einbinden
  inlineStyle2TempFile=0
  linkVars = L, owner

  #sys_language_mode = content_fallback
  #sys_language_overlay = hideNonTranslated

  ### real url ###
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://autodiscover.kadia.de/
  # absRefPrefix = /
  # prefixLocalAnchors = all
  uniqueLinkVars = 1
  # typolinkCheckRootline = 1

  noPageTitle = 2

  # index search #
  index_enable = 1


  ## language ##
  sys_language_uid = 0
  language = de
  locale_all = de_DE
  htmlTag_langKey = de_DE
}

# [hostname = sub2.localhost.tld]
#   config.baseURL = sub2.localhost.tld/
# [global]
# [globalString = ENV:HTTP_HOST=sub1.localhost.tld]
#   config.baseURL = sub1.localhost.tld/
# [global]


[globalVar = GP:L = 2]
  config{
    sys_language_uid = 2
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



