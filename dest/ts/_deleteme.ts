
page = PAGE

<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/template_kadia_website/ts/default/clearOutput.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/template_kadia_website/ts/default/config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/template_kadia_website/ts/default/metadata.ts">



tmp.mainContent = COA
tmp.mainContent {
    10 < styles.content.get
}


tmp.mainnav = HMENU
tmp.mainnav {
    wrap = <ul class="ul-1">|</ul>
    1 = TMENU
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li class="li-1">|</li>
        wrapItemAndSub.insertData = 1
        ATagTitle.field = title
        stdWrap.titleText = a
        stdWrap.dataWrap = <span class="span-1">|</span>
        ATagParams = class="a-1"
      }
      ACT = 1
      ACT {
        wrapItemAndSub = <li class="active li-1 cat{field:uid}">|</li>
        wrapItemAndSub.insertData = 1
        stdWrap.dataWrap = <span class="span-1">|</span>
        ATagParams = class="active a-1"
      }
    }
    2 < .1
    2 {
      wrap = <ul class="ul-2">|</ul>
      NO {
        wrapItemAndSub = <li class="li-2">|</li>
        ATagTitle.field = title
        stdWrap.titleText = a
        stdWrap.dataWrap = <span class="span-2">|</span>
        ATagParams = class="a-2"
      }
      ACT = 1
      ACT {
        linkWrap = <li class="active li-2">|
        stdWrap.dataWrap = <span class="span-2">|</span>
        ATagParams = class="active a-2"
      }
    }
    3 < .2
    3 {
      wrap = <ul class="ul-3">|</ul>
      NO {
        wrapItemAndSub = <li class="li-3">|</li>
        ATagTitle.field = title
        stdWrap.titleText = a
        stdWrap.dataWrap = <span class="span-3">|</span>
        ATagParams = class="a-3"
      }
      ACT = 1
      ACT {
        linkWrap = <li class="active li-3">|
        stdWrap.dataWrap = <span class="span-3">|</span>
        ATagParams = class="active a-3"
      }
    }
} 


page = PAGE
page.10 = FLUIDTEMPLATE
page.10{
	file = typo3conf/ext/template_kadia_website/main.html
  variables{
    templatePath = TEXT
    templatePath.value = {$myConst.template.dir}
  }
}
