const app = new Vue({
    el: "#app",
    data: {
        products: ["Boots", "Jackets", "Socks"],
        test: {
            product: {
                prod_code: "R-EGRD-03-076.0FORD",
                prod_manual: "http://gdptuning.com/image/catalog/DLs/15-16FORD_v4b.pdf",
                social_url: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=59",
                social_url_id: "#egr-upgrade",
                dealer_link: "http://gdp.emperiumdesign.com/index.php?route=information/information&information_id=58",
                prod_msrp: "162.63",
                prod_name: "GDP EGR | 03-07 FORD 6.0L w/Pipe",
                prod_image: "http://gdptuning.com/image/cache/catalog/Products/EGR/R-EGRD-03-076.0FORD-350x400.png",
                prod_desc: "",
                prod_desc_bullets: [""]
            }
        }
    }
});

new Vue({
    el: ".product-item-container",
    data: {
        object: {
            product1: {
                name: "GDP 123",
                code: "44122",
                url: "asdfasdfsdf.com"
            },
            product2: {
                name: "GDP 456",
                code: "44122",
                url: "asdfasdfsdf.com"
            }
        }
    }
});
