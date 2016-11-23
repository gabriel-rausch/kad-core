

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
    <urlset
        xmlns="http://www.google.com/schemas/sitemap/0.84"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemalocation="http://www.google.com/schemas/sitemap/0.84 www.google.com/schemas/sitemap/0.84/sitemap.xsd
    ">|</urlset>
)

    10 = COA
    10 {
        10 = TEXT
        10.value (
            <url>
                <loc>http://kadia.de/sitemap-de.xml</loc>
                <lastmod>2016-09-30T09:53:46Z</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>http://kadia.de/sitemap-en.xml</loc>
                <lastmod>2016-09-30T09:53:46Z</lastmod>
                <priority>1.0</priority>
            </url>
        )
    }

    }
