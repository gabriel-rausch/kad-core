<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array (
  '_DEFAULT' => array(
    'init' => array (
      'appendMissingSlash' => 'ifNotFile,redirect',
      'emptyUrlReturnValue' => '/',
    ),
    'pagePath' => array(
      'type' => 'user',
      'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
      'rootpage_id' => 1,
      'languageGetVar' => 'L',
    ),
    'preVars' => array(
        array(
           'GETvar' => 'L',
           'valueMap' => array(
               'en' => '2',
           ),
           'noMatch' => 'bypass',
       ),
    ),
  ), 
);