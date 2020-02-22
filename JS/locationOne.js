var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locationn = /** @class */ (function () {
    function Locationn(city, zipcode, address, img) {
        this.city = "";
        this.address = "";
        this.img = "";
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
    }
    Locationn.prototype.getloc = function () {
        return "<div><p>" + this.address + ", " + this.city + ", " + this.zipcode + "</p></div>";
    };
    Locationn.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t <img class=\"card-img-top m-2\" width=\"150px\" src=\"" + this.img + "\">\n\t\t\t <div class=\"card-body\"><p class=\"card-text\">" + this.getloc() + "</p>\n\t\t\t </div>\n\t\t </div>";
    };
    return Locationn;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipcode, address, img, name, type, telephoneNumber, webAddress) {
        var _this = _super.call(this, city, zipcode, address, img) || this;
        _this.name = "";
        _this.type = "";
        _this.telephoneNumber = "";
        _this.webAddress = "";
        _this.name = name;
        _this.type = type;
        _this.telephoneNumber = telephoneNumber;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t <img class=\"card-img-top m-2\" width=\"150px\" src=\"" + this.img + "\">\n\t\t\t <div class=\"card-body\">\n\t\t\t\t <h4 class=\"card-title\">" + this.name + "</h4>\n\t\t\t\t <p class=\"card-text\">\n                     " + _super.prototype.getloc.call(this) + "<br> " + this.type + " <br> " + this.telephoneNumber + "\n                     </p>\n\t\t\t </div>\n\t\t </div>";
    };
    return Restaurant;
}(Locationn));
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(city, zipcode, address, img, name, type, telephoneNumber, webAddress, eventDate, eventTime, price) {
        var _this = _super.call(this, city, zipcode, address, img, name, type, telephoneNumber, webAddress) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Eventt.prototype.getdes = function () {
        return " <div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t\t\t\t\t\t\t <img class=\"card-img-top m-2\" src=\"" + this.img + "\">\n\t\t\t\t\t\t\t\t \t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">" + this.eventDate + " " + this.eventTime + " <br>" + this.price + " $\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>";
    };
    return Eventt;
}(Restaurant));
var items = [new Locationn("Vienna", 1010, "St.Charles Church, Karlsplatz 1", "imgs/img1.jpg"),
    new Locationn("Vienna", 1130, "Schoenbrunn Park, Maxingstrasse 13b", "imgs/img2.jpg"),
    new Restaurant("vienna", 1050, "Wehrgasse 8", "imgs/img3.jpg", "ON Restaurant", "Chinese", "+43(1)5854900", "http://www.restaurant-on.at/"),
    new Restaurant("vienna", 1150, "Stutterheimstrasse 6", "imgs/img4.jpg", "BioFrische", "Indian", "+43(1)9529215", "biofrische.wien"),
    new Eventt("vienna", 1010, "Seilerstaette 9", "imgs/img5.jpg", "Cats- The Musical", "Indian", "+43(1)9529215", "http://catsmusical.at", "Fr., 15.12.2020", "20:00", 120),
    new Eventt("vienna", 1020, "Ernst-Happel Stadion, Meiereistrasse 7", "imgs/img6.jpg", "Guns 'n Roses", "Indian", "+43(1)9529215", "www.gunsandroses.com/", "Sat, 09.06.2020", "19:30", 95)];
for (var i = 0; i < items.length; i++) {
    if (i < 3) {
        document.getElementById("gallary1").innerHTML += items[i].getdes();
    }
    else {
        document.getElementById("gallary2").innerHTML += items[i].getdes();
    }
}
// const whiteHeart = '\u2661';
// const redHeart = '\u2665';
// const button = document.querySelector('button');
// button.addEventListener ('click', toggle);
// function toggle() {
// 	const plus = button.textContent;
// 	if (plus == whiteHeart) {
// 		button.textContent = redHeart;
// 	} else {
// 		button.textContent = whiteHeart;
// 	}
// 	}
