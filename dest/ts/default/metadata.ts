page{

  headerData{
    
    10 = TEXT
    10.field = subtitle // title
    10.wrap = <title>|&nbsp;- KADIA</title>
    
      
    50 = TEXT 
    50.value (
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="favicon.ico" type="image/x-icon">

        <!--[if gte IE 9]><!-->
          <link rel="stylesheet" href="{$myConst.template.dir}screen.min.css"/>
          <style type="text/css"> .gradient { filter: none; } </style>
        <!--<![endif]-->
        <!--[if lt IE 9]>
          <link rel="stylesheet" href="{$myConst.template.dir}screen-IE.min.css"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
        <![endif]-->

        <script src="{$myConst.template.dir}script.min.js" async></script>


      )
  }

  meta{
    keywords.stdWrap.cObject = COA
    keywords.stdWrap.cObject {
      5 = TEXT
      5.field = title
      5.stdWrap.wrap = |, 
      10 = TEXT
      10.field = keywords
      10.stdWrap.wrap = |, 
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    description.stdWrap.cObject = COA
    description.stdWrap.cObject {
      10 = TEXT
      10.field = description
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    abstract.stdWrap.cObject = COA
    abstract.stdWrap.cObject {
      10 = TEXT
      10.field = abstract
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    author.stdWrap.cObject = COA
    author.stdWrap.cObject {
      10 = TEXT
      10.field = author
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
  }



}