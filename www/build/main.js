webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeoriaPage = (function () {
    function TeoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeoriaPage');
    };
    TeoriaPage.prototype.tabla = function (x) {
        var construyeTabla = '';
        for (var i = 0; i <= 10; i++) {
            construyeTabla += '<p large><span>' + x + ' &nbsp; x &nbsp; ' + i
                + ' &nbsp; = &nbsp; ' + x * i + '</span></p>';
        }
        document.getElementById("tablaMultiplicar").innerHTML = construyeTabla;
    };
    TeoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teoria',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/teoria/teoria.html"*/`<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="finger-print"></ion-icon>\n      </button>\n      <ion-title>Teoría</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <h2 text-center>¿Necesitas ayuda?</h2>\n\n    <ion-segment [(ngModel)]="mymodel" class="botonera">\n      <ion-segment-button value="teoriaSumar">\n        <ion-icon name="add"></ion-icon>\n        <br>\n        <span>Sumar</span>\n      </ion-segment-button>\n      <ion-segment-button value="teoriaRestar">\n        <ion-icon name="remove"></ion-icon>\n        <br>\n        <span>Restar</span>\n      </ion-segment-button>\n      <ion-segment-button value="teoriaMultiplicar">\n        <ion-icon name="close"></ion-icon>\n        <br>\n        <span>Multiplicar</span>\n      </ion-segment-button>\n      <ion-segment-button value="teoriaDividir">\n        <ion-icon name="cut"></ion-icon>\n        <br>\n        <span>Dividir</span>\n      </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]="mymodel" text-wrap>\n      <ion-list *ngSwitchCase="">\n        <ion-item>\n          <p>Pulsa en la operación de la que quieres repasar la teoría para ver una pequeña explicación.</p>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'teoriaSumar\'">\n        <ion-item>\n          <h2 text-center>SUMAR</h2>\n          <p>Sumar es <strong>juntar</strong> 2 o más cosas para saber cuántas hay en total.</p>\n          <br>\n          <p>Por ejemplo: Pedro tiene 3 balones y María tiene 6. Si juntamos a Pedro y a María, ¿cuántos balones tienen en total? 3 + 6 = 9</p>\n          <br>\n          <p>Cuéntalos y verás que hay 9 balones:</p>\n          <br>\n          <img src="../../assets/imgs/suma1.png">\n          <br>\n          <br>\n          <p>Ahora vamos a aprender a sumar con los dedos: En una mano ponemos 2 dedos y en la otra 3 dedos. Y ahora contamos todos los dedos que tenemos: 2 dedos + 3 dedos, es igual a 5 dedos.</p>\n          <br>\n          <img src="../../assets/imgs/suma2.png">\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'teoriaRestar\'">\n        <ion-item>\n          <h2 text-center>RESTAR</h2>\n          <p>Restar es <strong>quitar</strong> una cierta cantidad a otra que ya teníamos.</p>\n          <br>\n          <p>Por ejemplo: Si tenemos 7 pasteles y nos comemos 1, ¿cuántos pasteles tendremos? 7 – 1 = 6</p>\n          <img src="../../assets/imgs/resta1.jpg">\n          <br>\n          <br>\n          <p>Ahora vamos a aprender a restar con los dedos. Si tenemos 9 dedos, 5 en una mano y 4 en la otra, y queremos restar 5 dedos, ¿cuántos dedos nos quedan? Escondemos los 5 dedos de una mano y contamos los que nos quedan. Nos quedan 4 dedos. Por lo tanto, 9 – 5 = 4.</p>\n          <br>\n          <img src="../../assets/imgs/resta2.jpg">\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'teoriaMultiplicar\'">\n        <ion-item>\n          <h2 text-center>MULTIPLICAR</h2>\n          <p>Aunque puede parecer muy complicada al principio, la multiplicación no es más que la <strong>suma sucesiva</strong> de un mismo número y es muy útil para sacar cuentas rápidas.</p>\n          <br>\n          <p>La suma sucesiva del mismo número, por ejemplo 2 x 8, significa que hay que sumar 2 veces 8:</p>\n          <p text-center>2 x 8 = 8 + 8 = 16</p>\n          <br>\n          <p>En la multiplicación, como en la suma, no importa el orden al hacer la operación. De esta forma, 2 x 8 también se podría calcular como que hay que sumar 8 veces 2:</p>\n          <p text-center>2 x 8 = 8 x 2 = 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16</p>\n          <br>\n          <img src="../../assets/imgs/multiplica1.jpg">\n          <br>\n          <br>\n          <p>¿Quieres ver alguna tabla de multiplicar?</p>\n          <p text-center id="botonesMultiplicar">\n            <button ion-button round color="cero" (click)=\'tabla(0)\'>0</button>\n            <button ion-button round color="uno" (click)=\'tabla(1)\'>1</button>\n            <button ion-button round color="dos" (click)=\'tabla(2)\'>2</button>\n            <button ion-button round color="tres" (click)=\'tabla(3)\'>3</button>\n            <button ion-button round color="cuatro" (click)=\'tabla(4)\'>4</button>\n            <button ion-button round color="cinco" (click)=\'tabla(5)\'>5</button>\n            <button ion-button round color="seis" (click)=\'tabla(6)\'>6</button>\n            <button ion-button round color="siete" (click)=\'tabla(7)\'>7</button>\n            <button ion-button round color="ocho" (click)=\'tabla(8)\'>8</button>\n            <button ion-button round color="nueve" (click)=\'tabla(9)\'>9</button>\n          </p>\n          <br>\n          <div id="tablaMultiplicar"></div>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'teoriaDividir\'">\n        <ion-item>\n          <h2 text-center>DIVIDIR</h2>\n          <p>Dividir nos da la idea de <strong>repartir</strong> o distribuir en partes iguales.</p>\n          <br>\n          <p>Por ejemplo: vamos a comer una pizza y queremos cortarla en partes iguales.<br>Primero la cortaremos por la mitad y así tendremos dos partes iguales (esto es dividir por dos).<br>Luego si cada mitad la cortamos otra vez en dos partes iguales quedaran 4 porciones, es decir que la pizza quedó dividida en 4.</p>\n          <br>\n          <p>Antes de empezar a dividir, ten en cuenta que deberías saber hacer el resto de operaciones: la suma, la resta y la multiplicación.</p>\n          <br>\n          <p>Puede ayudarte intentar pensar cuántas veces el segundo número de la división cabe en el primero.</p>\n          <p>Por ejemplo: 18 / 2. ¿Cuántas veces puedo sumar el numero 2 hasta llegar a 18?</p>\n          <br>\n          <p>La división es la operación inversa de la multiplicación. Podemos aprovechar esta información para averiguar cuantas veces un número contiene a otro número.</p>\n          <br>\n          <img src="../../assets/imgs/divide1.jpg">\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <button ion-button color="secondary" menuToggle text-centered>\n      <ion-icon left name="finger-print"> Menu</ion-icon>\n    </button>\n  </ion-content>\n\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/teoria/teoria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeoriaPage);
    return TeoriaPage;
}());

//# sourceMappingURL=teoria.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/practica/practica.module": [
		274,
		1
	],
	"../pages/teoria/teoria.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="finger-print"></ion-icon>\n    </button>\n    <ion-title>CalculApp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>Aprende a calcular</h1>\n  <p>\n    ¡Bienvenido aprendiz!<br>Has llegado al lugar indicado para aprender a calcular.\n  </p>\n  <ul>\n    <li>Sumar</li>\n    <li>Restar</li>\n    <li>Multiplicar</li>\n    <li>Dividir</li>\n  </ul>\n  <img src="../../assets/imgs/pocoyo.jpeg" style="display: block; width: 66%; margin: 0 auto;">\n  <p text-center>\n    <button ion-button secondary menuToggle>\n    <ion-icon left name="finger-print"> Menu</ion-icon>\n  </button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_practica_practica__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_teoria_teoria__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_practica_practica__["a" /* PracticaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teoria_teoria__["a" /* TeoriaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/practica/practica.module#PracticaPageModule', name: 'PracticaPage', segment: 'practica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teoria/teoria.module#TeoriaPageModule', name: 'TeoriaPage', segment: 'teoria', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_practica_practica__["a" /* PracticaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teoria_teoria__["a" /* TeoriaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_practica_practica__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teoria_teoria__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Práctica', component: __WEBPACK_IMPORTED_MODULE_5__pages_practica_practica__["a" /* PracticaPage */] },
            { title: 'Teoría', component: __WEBPACK_IMPORTED_MODULE_6__pages_teoria_teoria__["a" /* TeoriaPage */] },
            { title: 'Lista', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <button ion-button secondary menuToggle>Volver</button>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PracticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PracticaPage = (function () {
    function PracticaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PracticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PracticaPage');
    };
    PracticaPage.prototype.mostrarOperacion = function (operacion) {
        var operador;
        var operando1;
        var operando2;
        var resultado;
        var construirOperacion;
        // Math.floor(Math.random()) * (max - min) + min;
        operando1 = Math.floor(Math.random() * (10 - 1) + 1);
        switch (operacion) {
            case 'sumar':
                operador = '+';
                operando2 = Math.floor(Math.random() * (100 - 1) + 1);
                resultado = operando1 + operando2;
                break;
            case 'restar':
                operador = '-';
                // minuendo entre 1 y operando1 (ambos incluidos)
                operando2 = Math.floor(Math.random() * operando1 + 1);
                resultado = operando1 - operando2;
                break;
            case 'multiplicar':
                operador = '*';
                operando2 = Math.floor(Math.random() * (10 - 1) + 1);
                resultado = operando1 * operando2;
                break;
            case 'dividir':
                operador = '/';
                // divisor entre 1 y operando1 (ambos incluidos)
                do {
                    operando2 = Math.floor(Math.random() * operando1 + 1);
                } while (operando1 % operando2);
                resultado = operando1 / operando2;
                break;
            default:
                resultado = 'ERROR';
                break;
        }
        construirOperacion = operando1 + ' ' + operador + ' ' + operando2 + ' = ' + resultado;
        document.getElementById("operacionMostrada").innerHTML = construirOperacion;
    };
    PracticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-practica',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/practica/practica.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="finger-print"></ion-icon>\n    </button>\n    <ion-title>Práctica</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 text-center>Elige una operación</h2>\n  <form>\n    <ion-list radio-group name=\'operacion\' [(ngModel)]=\'operacion\'>\n      <ion-item>\n        <ion-label>Sumar</ion-label>\n        <ion-radio value="sumar"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Restar</ion-label>\n        <ion-radio value="restar"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Multiplicar</ion-label>\n        <ion-radio value="multiplicar"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Dividir</ion-label>\n        <ion-radio value="dividir"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" (click)=\'mostrarOperacion(operacion)\'>Empezar</button>\n  </form>\n  <br><br>\n  <form id="calculaccion" [hidden]="mostrarOperacion(operacion)==48">\n    <span id="operacionMostrada"></span>\n    <input type="number" placeholder="¿?" name="calculo"/>\n    <button ion-button color=secondary type="submit">¿?</button>\n  </form> \n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/calculapp/src/pages/practica/practica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PracticaPage);
    return PracticaPage;
}());

//# sourceMappingURL=practica.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map