

xmlSitemap = PAGE
xmlSitemap {
    config {
        xhtml_cleaning = none
        no_cache = 1
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type: text/xml; charset=utf-8
        simulateStaticDocuments = 0
        tx_realurl_enable = 1
    }
    wrap (
        <?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">|</sitemapindex>
    )

    10 = COA
    10 {
        10 = TEXT
        10.value (
            <sitemap>
                <loc>http://kadia.de/sitemap-de.xml</loc>
                <lastmod>2016-12-05T09:23:34Z</lastmod>
            </sitemap>
            <sitemap>
                <loc>http://kadia.de/sitemap-en.xml</loc>
                <lastmod>2016-12-05T09:23:34Z</lastmod>
            </sitemap>
        )
    }

    }
