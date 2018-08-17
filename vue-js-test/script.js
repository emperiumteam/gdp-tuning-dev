const app = new Vue({
    el: "#app",
    data: {
        products: ["Boots", "Jackets", "Socks"],
        test: {
            product: {

            }
        }
    }
});

new Vue({
    el: ".product-item-container",
    data: {
        power_egr: {
            product1: {
                prod_truck: "ford",
                prod_category: "egr-upgrade",
                prod_code: "R-EGRD-03-076.0FORD",
                prod_manual: "http://gdptuning.com/image/catalog/DLs/15-16FORD_v4b.pdf",
                social_url: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=",
                social_url_prod_cat_id: "59",
                dealer_link: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=58",
                prod_msrp: "162.63",
                prod_name: "GDP EGR | 03-07 FORD 6.0L w/Pipe",
                prod_image: "http://gdptuning.com/image/cache/catalog/Products/EGR/R-EGRD-03-076.0FORD-350x400.png",
                prod_desc: ""
            },
            product2: {
                prod_code: "R-EGRD-03-076.0FORD",
                prod_manual: "http://gdptuning.com/image/catalog/DLs/15-16FORD_v4b.pdf",
                social_url: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=",
                social_url_prod_cat_id: "59",
                social_url_html_id: "#egr-upgrade",
                dealer_link: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=58",
                prod_msrp: "162.63",
                prod_name: "GDP EGR | 03-07 FORD 6.0L w/Pipe",
                prod_image: "http://gdptuning.com/image/cache/catalog/Products/EGR/R-EGRD-03-076.0FORD-350x400.png",
                prod_desc: ""
            }
        }
    }
});
