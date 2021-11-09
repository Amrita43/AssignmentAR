const Order = require("./Order");

const OrderState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ITEM: Symbol("item"),
    UPSELL: Symbol("upsell")
});

module.exports = class LockDownEssentials extends Order {
    constructor(sNumber, sUrl) {
        super(sNumber, sUrl);
        this.stateCur = OrderState.WELCOMING;
        this.sItem = "";
        this.upSell = "";
        this.broomPrice = 2.25;
        this.dustBinPrice = 3.50;
        this.filterPrice = 5.45;
        this.totPrice = 0;
        this.sPrice = 3.25;
        this.gPrice = 4.50;
        this.ePrice = 5.00;
        this.dPrice = 5.25;
        this.nTax = 0;
        this.nTotal = 0 ;
    }
    handleInput(sInput) {
        let aReturn = [];
        switch (this.stateCur) {
            case OrderState.WELCOMING:
                this.stateCur = OrderState.ITEM;
                aReturn.push("Welcome to Home Hardware");
                aReturn.push(`Here is the list of Products we have`);
                aReturn.push(`1.Brooms \n 2. Dustbins \n 3.Furnace Filters`);
                aReturn.push(`Please select an item`);
                break;

            case OrderState.ITEM:
                this.stateCur = OrderState.UPSELL;
                this.sItem = sInput;
                aReturn.push("Please select an Upsell Item");
                aReturn.push("1. Simonize Car Cloths \n 2.Geeky Headlamps \n 3. Earbuds \n 4. De-scalar for Kettle");
                break;

            case OrderState.UPSELL:
                this.upSell = sInput;
                aReturn.push("Thank-you for your order of");
                if (this.sItem.toLowerCase() == "brooms") {
                    if (this.upSell.toLowerCase() == "simonize car cloths") {
                        this.totPrice = this.broomPrice + this.sPrice;
                    }
                    else if (this.upSell.toLowerCase() == "geeky headlamps") {
                        this.totPrice = this.broomPrice + this.gPrice;
                    }
                    else if (this.upSell.toLowerCase() == "earbuds") {
                        this.totPrice = this.broomPrice + this.ePrice;
                    }
                    else if (this.upSell.toLowerCase() == "de-scalar for kettle") {
                        this.totPrice = this.broomPrice + this.dPrice;
                    }
                }
                else if (this.sItem.toLowerCase() == "dustbins") {
                    if (this.upSell.toLowerCase() == "simonize car cloths") {
                        this.totPrice = this.dustBinPrice + this.sPrice;
                    }
                    else if (this.upSell.toLowerCase() == "geeky headlamps") {
                        this.totPrice = this.dustBinPrice + this.gPrice;
                    }
                    else if (this.upSell.toLowerCase() == "earbuds") {
                        this.totPrice = this.dustBinPrice + this.ePrice;
                    }
                    else if (this.upSell.toLowerCase() == "de-scalar for kettle") {
                        this.totPrice = this.dustBinPrice + this.dPrice;
                    }
                }
                else if (this.sItem.toLowerCase() == "furnace filters") {
                    if (this.upSell.toLowerCase() == "simonize car cloths") {
                        this.totPrice = this.filterPrice + this.sPrice;
                    }
                    else if (this.upSell.toLowerCase() == "geeky headlamps") {
                        this.totPrice = this.filterPrice + this.gPrice;
                    }
                    else if (this.upSell.toLowerCase() == "earbuds") {
                        this.totPrice = this.filterPrice + this.ePrice;
                    }
                    else if (this.upSell.toLowerCase() == "de-scalar for kettle") {
                        this.totPrice = this.filterPrice + this.dPrice;
                    }
                }
                aReturn.push(`Your total comes to ${this.totPrice}`);
                aReturn.push(`15% tax will be added to your bill amount`);
                this.nTax = this.totPrice * 0.15;
                this.nTotal = this.nTax + this.totPrice;
                aReturn.push(`Your total along with tax comes to ${this.nTotal}`);
                aReturn.push(`We will text you from 437-984-1143 when your order is ready or if we have questions.`)
                this.isDone(true);
                break;
        }
        return aReturn;
    }
    renderForm() {
        // your client id should be kept private
        return (`
      <html>

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c9 {
            border-right-style: solid;
            padding: 5pt 5pt 5pt 5pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 225.7pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c12 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 18pt;
            font-family: "Impact";
            font-style: normal
        }

        .c0 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
        }

        .c10 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 15pt;
            font-family: "Impact";
            font-style: normal
        }

        .c5 {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 25pt;
            font-family: "Arial";
            font-style: normal
        }

        .c1 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 17pt;
            font-family: "Arial";
            font-style: normal
        }

        .c2 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c8 {
            border-spacing: 0;
            border-collapse: collapse;
            margin-right: auto
        }

        .c11 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: left
        }

        .c4 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: right
        }

        .c7 {
            background-color: #ffffff;
            max-width: 451.4pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .c6 {
            height: 11pt
        }

        .c3 {
            height: 0pt
        }

        .title {
            padding-top: 0pt;
            color: #000000;
            font-size: 26pt;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .subtitle {
            padding-top: 0pt;
            color: #666666;
            font-size: 15pt;
            padding-bottom: 16pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        li {
            color: #000000;
            font-size: 11pt;
            font-family: "Arial"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 11pt;
            font-family: "Arial"
        }

        h1 {
            padding-top: 20pt;
            color: #000000;
            font-size: 20pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 18pt;
            color: #000000;
            font-size: 16pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 16pt;
            color: #434343;
            font-size: 14pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 14pt;
            color: #666666;
            font-size: 12pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }
    </style>
</head>

<body class="c7">
    <p class="c2"><span class="c5">For curbside pickup</span></p>
    <p class="c2 c6"><span class="c0"></span></p>
    <p class="c2"><span class="c10">Send &ldquo;Hi&rdquo; to 437-982-1143</span></p>
    <p class="c2 c6"><span class="c0"></span></p><a id="t.cbe3c857b3eaab558b1481dc1b898fcf14ecb069"></a><a id="t.0"></a>
    <table class="c8">
        <tbody>
            <tr class="c3">
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c11"><span class="c1">Brooms</span></p>
                </td>
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c4"><span class="c1">$2.25</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c11"><span class="c1">Dust Bins</span></p>
                </td>
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c4"><span class="c1">$3.50</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c11"><span class="c1">Furnace filters</span></p>
                </td>
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c4"><span class="c1">$5.45</span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c2 c6"><span class="c0"></span></p>
    <p class="c2 c6"><span class="c0"></span></p>
    <p class="c2"><span class="c12">Upsell Items</span></p>
    <p class="c2"><span class="c0">&nbsp;</span></p>
    <p class="c2"><span class="c1">1. Simonize Car Clothes</span></p>
    <p class="c2"><span class="c1">2. Geeky Head Lamps</span></p>
    <p class="c2"><span class="c1">3. Earbuds</span></p>
    <p class="c2"><span class="c1">4. De - Scaler for a kettle</span></p>
</body>

</html>      `);

    }
}
