(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    min-height: 100vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQWM7SUFBZCxjQUFjO0lBQ2QsNkJBQXVCO0lBQXZCLDhCQUF1QjtZQUF2Qix1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'BigQuery Geo Viz';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: Step, MAX_RESULTS, MAX_RESULTS_PREVIEW, TIMEOUT_MS, SHARING_VERSION, SAMPLE_PROJECT_ID, SAMPLE_QUERY, MAX_PAGES, SAMPLE_FILL_OPACITY, SAMPLE_FILL_COLOR, SAMPLE_CIRCLE_RADIUS, PALETTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RESULTS", function() { return MAX_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RESULTS_PREVIEW", function() { return MAX_RESULTS_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_MS", function() { return TIMEOUT_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARING_VERSION", function() { return SHARING_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_PROJECT_ID", function() { return SAMPLE_PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_QUERY", function() { return SAMPLE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PAGES", function() { return MAX_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_FILL_OPACITY", function() { return SAMPLE_FILL_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_FILL_COLOR", function() { return SAMPLE_FILL_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_CIRCLE_RADIUS", function() { return SAMPLE_CIRCLE_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTES", function() { return PALETTES; });
/* harmony import */ var colorbrewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colorbrewer */ "./node_modules/colorbrewer/index.js");
/* harmony import */ var colorbrewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(colorbrewer__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Step = {
    DATA: 0,
    SCHEMA: 1,
    STYLE: 2,
    SHARE: 3
};
// Maximum number of results to be returned by BigQuery API.
var MAX_RESULTS = 5000000;
// Maximum number of results to be shown in the HTML preview table.
var MAX_RESULTS_PREVIEW = 10;
// How long to wait for the query to complete, in milliseconds, before the request times out and returns.
var TIMEOUT_MS = 120000;
// Used to write the sharing data and maintain backward compatibility.
var SHARING_VERSION = "v1";
var SAMPLE_PROJECT_ID = 'google.com:bqmapper';
var SAMPLE_QUERY = "SELECT\n  ST_GeogPoint(longitude, latitude)  AS WKT,\n  status,\n  health,\n  spc_common,\n  user_type,\n  problems,\n  tree_dbh\nFROM `bigquery-public-data.new_york_trees.tree_census_2015`\nWHERE status = 'Alive'\nLIMIT 50000;";
// Each page is 10MB. This means the total data will be 250MB at most..
var MAX_PAGES = 25;
var SAMPLE_FILL_OPACITY = { isComputed: false, value: 0.8 };
var SAMPLE_FILL_COLOR = {
    isComputed: true,
    property: 'health',
    function: 'categorical',
    domain: ['Poor', 'Fair', 'Good'],
    range: ['#F44336', '#FFC107', '#4CAF50']
};
var SAMPLE_CIRCLE_RADIUS = {
    isComputed: true,
    property: 'tree_dbh',
    function: 'linear',
    domain: [0, 500],
    range: [10, 50]
};
var PALETTES = Object.keys(colorbrewer__WEBPACK_IMPORTED_MODULE_0__).map(function (key) { return colorbrewer__WEBPACK_IMPORTED_MODULE_0__[key]; });


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-codemirror */ "./node_modules/ng2-codemirror/lib/index.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_codemirror__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _rule_rule_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rule/rule.component */ "./src/app/rule/rule.component.ts");
/* harmony import */ var _file_size_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./file-size.pipe */ "./src/app/file-size.pipe.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























if (_environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_23__["MapComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_24__["TermsComponent"],
                _rule_rule_component__WEBPACK_IMPORTED_MODULE_25__["RuleInputComponent"],
                _file_size_pipe__WEBPACK_IMPORTED_MODULE_26__["FileSizePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ng2_codemirror__WEBPACK_IMPORTED_MODULE_2__["CodemirrorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_28__["StorageServiceModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_29__["ColorPickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
    },
    {
        path: 'terms',
        component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_0__["TermsComponent"]
    },
    {
        path: 'project',
        children: [
            {
                path: ':project/dataset/:dataset/table/:table',
                component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
            },
            {
                path: ':project/job',
                children: [
                    {
                        path: ':job/location/:location',
                        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
                    },
                    {
                        path: ':job',
                        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
                    },
                ]
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/file-size.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/file-size.pipe.ts ***!
  \***********************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (!isFinite(bytes)) {
            return '';
        }
        var unit;
        for (unit = 0; bytes >= 1024; unit++) {
            bytes /= 1024;
        }
        var value = bytes.toFixed(Number(precision));
        return value + " " + UNITS[unit];
    };
    FileSizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'fileSize' })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n            flex-direction: row-reverse;\n}\n\n.header-profile {\n    font-size: 14px;\n    padding: 0 16px;\n}\n\n.header-logo {\n    height: 32px;\n    margin-right: 0.5em;\n}\n\n.flex-spacer {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n}\n\n.toolbar-divider {\n    padding: 0 16px;\n}\n\n.drawer {\n    max-width: 600px;\n    max-height: calc(100vh - 64px);\n    overflow: auto;\n    flex-shrink: 0;\n}\n\n.sidenav-container {\n    position: fixed;\n    left: 0;\n    right: 0;\n}\n\n.stepper {\n    max-width: 100%;\n    overflow: auto;\n    flex-shrink: 0;\n}\n\nmat-progress-spinner {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.apply-style-button {\n    margin-top: 0.5em;\n}\n\n.create-share-link-button {\n    margin-bottom: 0.5em;\n}\n\n.toggle-button,\n.preset-button {\n  position: fixed;\n  bottom: 1em;\n  background: #00539b;\n  z-index: 10000;\n}\n\n.toggle-button {\n  left: 1em;\n}\n\n.preset-button {\n  /* spacing + buttonWidth + spacing */\n  left: calc(1em + 40px + 1em);\n}\n\n.sql-form-field {\n    display: block;\n    width: 100%;\n    max-width: 600px;\n}\n\n.sql-lint {\n    font-size: 0.8em;\n    color: crimson;\n}\n\n.sql-caption {\n    color: #888;\n    font-size: 0.8em;\n}\n\n.sql-location {\n    margin-top: 1em;\n    display: block;\n}\n\n.num-results-text {\n    font-size: 0.8em;\n}\n\n.result-table {\n    overflow-x: auto;\n}\n\n.result-table-cell {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.styles-prop-list .rule-badge {\n    font-size: 0.6em;\n    font-weight: 500;\n    display: inline-block;\n    padding: 0.5em;\n    color: #ffffff;\n    border-radius: 2px;\n}\n\n.styles-prop-list mat-panel-title {\n    width: 150px;\n    -webkit-box-flex: 0;\n            flex-grow: 0;\n}\n\n.styles-prop-list .rule-badge.computed { background: #00539b; }\n\n.styles-prop-list .rule-badge.global { background: #F4B400; }\n\n.styles-prop-list .rule-badge.none { background: #e5e3df; color: #000000; }\n\n.mat-toolbar.mat-primary,\n.mat-raised-button.mat-primary,\n.mat-step-header .mat-step-icon {\n    color: #FFFFFF;\n}\n\n.mat-raised-button[disabled] {\n    background: #e5e3df;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCwrQkFBNEI7SUFBNUIsK0JBQTRCO1lBQTVCLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0JBQWE7WUFBYixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztDQUNaOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtDQUM5Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG9CQUFhO1lBQWIsYUFBYTtDQUNoQjs7QUFFRCx5Q0FBeUMsb0JBQW9CLEVBQUU7O0FBQy9ELHVDQUF1QyxvQkFBb0IsRUFBRTs7QUFDN0QscUNBQXFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRTs7QUFFM0U7OztJQUdJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmhlYWRlci1wcm9maWxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uZmxleC1zcGFjZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRvb2xiYXItZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uZHJhd2VyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLnN0ZXBwZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYXBwbHktc3R5bGUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmNyZWF0ZS1zaGFyZS1saW5rLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi50b2dnbGUtYnV0dG9uLFxuLnByZXNldC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMWVtO1xuICBiYWNrZ3JvdW5kOiAjMDA1MzliO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICBsZWZ0OiAxZW07XG59XG5cbi5wcmVzZXQtYnV0dG9uIHtcbiAgLyogc3BhY2luZyArIGJ1dHRvbldpZHRoICsgc3BhY2luZyAqL1xuICBsZWZ0OiBjYWxjKDFlbSArIDQwcHggKyAxZW0pO1xufVxuXG4uc3FsLWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5zcWwtbGludCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogY3JpbXNvbjtcbn1cblxuLnNxbC1jYXB0aW9uIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uc3FsLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5udW0tcmVzdWx0cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucmVzdWx0LXRhYmxlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ucmVzdWx0LXRhYmxlLWNlbGwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnN0eWxlcy1wcm9wLWxpc3QgLnJ1bGUtYmFkZ2Uge1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc3R5bGVzLXByb3AtbGlzdCBtYXQtcGFuZWwtdGl0bGUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5zdHlsZXMtcHJvcC1saXN0IC5ydWxlLWJhZGdlLmNvbXB1dGVkIHsgYmFja2dyb3VuZDogIzAwNTM5YjsgfVxuLnN0eWxlcy1wcm9wLWxpc3QgLnJ1bGUtYmFkZ2UuZ2xvYmFsIHsgYmFja2dyb3VuZDogI0Y0QjQwMDsgfVxuLnN0eWxlcy1wcm9wLWxpc3QgLnJ1bGUtYmFkZ2Uubm9uZSB7IGJhY2tncm91bmQ6ICNlNWUzZGY7IGNvbG9yOiAjMDAwMDAwOyB9XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSxcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlM2RmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header\">\n  <img class=\"header-logo\" src=\"assets/ic_logo@2X.png\" srcset=\"assets/ic_logo.png 1x,\n               assets/ic_logo@2X.png 2x\" alt=\"BigQuery Geo Viz Logo\">\n  <span>BigQuery Geo Viz</span>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button href=\"https://github.com/GoogleCloudPlatform/bigquery-geo-viz/issues\" target=\"_blank\">Feedback</a>\n  <a mat-button href=\"https://github.com/GoogleCloudPlatform/bigquery-geo-viz\" target=\"_blank\">Source</a>\n  <a mat-button href=\"/terms\">Terms &amp; privacy</a>\n  <span class=\"toolbar-divider\">|</span>\n  <span class=\"header-profile\">{{ user?.getBasicProfile().getEmail() }}</span>\n  <button *ngIf=\"isSignedIn\" mat-button (click)=\"signout()\">Sign out</button>\n</mat-toolbar>\n\n<div class=\"view\">\n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav-content>\n      <app-map [rows]=\"rows\" [geoColumn]=\"schemaFormGroup.controls.geoColumn.value\" [styles]=\"styles\"></app-map>\n    </mat-sidenav-content>\n    <mat-sidenav #sidenav mode=\"side\" position=\"start\" [(opened)]=\"sideNavOpened\">\n      <section class=\"drawer\">\n        <mat-vertical-stepper linear (selectionChange)=\"onStepperChange($event)\" #stepper class=\"stepper\">\n          <mat-step [stepControl]=\"dataFormGroup\" label=\"Query\">\n\n            <button *ngIf=\"!isSignedIn\" mat-raised-button color=\"primary\" (click)=\"signin()\">Authorize</button>\n\n            <form *ngIf=\"isSignedIn\" [formGroup]=\"dataFormGroup\">\n              <mat-form-field class=\"sql-form-field\">\n                <input type=\"text\" placeholder=\"Project ID\" matInput formControlName=\"projectID\" ([ngModel])=\"model\"\n                  [matAutocomplete]=\"auto\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let project of matchingProjects\" [value]=\"project.id\">\n                    {{ project.id }}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n\n              <codemirror ref=\"codemirror\" formControlName=\"sql\" ([ngModel])=\"model\" [config]=\"cmConfig\"\n                (change)=\"dryRun()\" (query)=\"query()\"></codemirror>\n\n              <div>\n                <button mat-raised-button color=\"primary\" (click)=\"query(stepper)\"\n                  [disabled]=\"!dataFormGroup.valid || pending\">Run</button>\n                <button mat-raised-button color=\"primary\" matStepperNext [disabled]=\"!rows.length || pending\"\n                  [matTooltip]=\"rows.length !== totalRows ? 'Results may be truncated due to size and performance limitations. Selecting fewer columns or less data may increase this limit.'\n                                                                : null\" matTooltipPosition=\"after\">\n                  Show results ({{ rows.length | number }}<span *ngIf=\"rows.length !== totalRows\"> of\n                    {{ totalRows | number }}</span>)\n                </button>\n                <mat-progress-spinner *ngIf=\"pending\" mode=\"indeterminate\" [diameter]=\"24\" [strokeWidth]=\"4\">\n                </mat-progress-spinner>\n                <p class=\"sql-caption\" *ngIf=\"bytesProcessed >= 0\">\n                  Estimated query size: {{ bytesProcessed | fileSize:1 }}\n                </p>\n                <p *ngIf=\"lintMessage\" class=\"sql-lint\">{{ lintMessage }}</p>\n                <mat-form-field class=\"wide sql-location\">\n                  <mat-select placeholder=\"Processing location\" formControlName=\"location\" ([ngModel])=\"model\"\n                    matTooltip=\"Select processing location.\" matTooltipPosition=\"after\">\n                    <mat-option value=\"\">Auto-select</mat-option>\n                    <mat-option value=\"US\">United States (US)</mat-option>\n                    <mat-option value=\"EU\">European Union (EU)</mat-option>\n                    <mat-option value=\"us-east4\">Northern Virginia (us-east4)</mat-option>\n                    <mat-option value=\"northamerica-northeast1\">Montréal (northamerica-northeast1)</mat-option>\n                    <mat-option value=\"europe-west2\">London (europe-west2)</mat-option>\n                    <mat-option value=\"europe-north1\">Finland (europe-north1)</mat-option>\n                    <mat-option value=\"asia-south1\">Mumbai (asia-south1)</mat-option>\n                    <mat-option value=\"asia-southeast1\">Singapore (asia-southeast1)</mat-option>\n                    <mat-option value=\"asia-east1\">Taiwan (asia-east1)</mat-option>\n                    <mat-option value=\"asia-northeast1\">Tokyo (asia-northeast1)</mat-option>\n                    <mat-option value=\"australia-southeast1\">Sydney (australia-southeast1)</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"schemaFormGroup\" label=\"Data\">\n            <div style=\"margin-bottom: 2em\">\n              <button mat-raised-button color=\"primary\" matStepperNext>Add styles</button>\n            </div>\n            <form [formGroup]=\"schemaFormGroup\">\n              <mat-form-field class=\"wide\">\n                <mat-select placeholder=\"Geometry column\" formControlName=\"geoColumn\" ([ngModel])=\"model\"\n                  matTooltip=\"Select field containing WKT-formatted geometry\" matTooltipPosition=\"after\">\n                  <mat-option *ngFor=\"let column of geoColumnNames\" [value]=\"column\">{{ column }}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-table *ngIf=\"data\" [dataSource]=\"data\" class=\"result-table\">\n                <ng-container *ngFor=\"let column of columnNames; let i = index\" [matColumnDef]=\"column\">\n                  <mat-header-cell *matHeaderCellDef>\n                    <div class=\"header-cell-title\">{{ column }}</div>\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" class=\"result-table-cell\" [title]=\"row[column]\">{{ row[column] }}\n                  </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"columnNames\" [ngStyle]=\"{'min-width': getRowWidth()}\">\n                </mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: columnNames;\" [ngStyle]=\"{'min-width': getRowWidth()}\"></mat-row>\n              </mat-table>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"stylesFormGroup\" label=\"Style\">\n            <form [formGroup]=\"stylesFormGroup\">\n              <mat-accordion class=\"styles-prop-list\">\n                <mat-expansion-panel *ngFor=\"let prop of StyleProps\" [formGroupName]=\"prop.name\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>{{ prop.name }}</mat-panel-title>\n                    <mat-panel-description>\n                      <span *ngIf=\"getPropStatus(prop.name) === 'computed'\"\n                        class=\"rule-badge computed\">data-driven</span>\n                      <span *ngIf=\"getPropStatus(prop.name) === 'global'\" class=\"rule-badge global\">global</span>\n                      <span *ngIf=\"getPropStatus(prop.name) === 'none'\" class=\"rule-badge none\">none</span>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <app-rule-input [prop]=\"prop\" [columns]=\"columnNames\" [stats]=\"getPropStats(prop.name)\"\n                    [formGroup]=\"getPropFormGroup(prop.name)\"></app-rule-input>\n                </mat-expansion-panel>\n              </mat-accordion>\n              <button mat-raised-button color=\"primary\" (click)=\"onApplyStylesClicked()\"\n                class=\"apply-style-button\">Apply Style</button>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"sharingFormGroup\" label=\"Share\">\n            <p class=\"sql-caption\"> <b>IMPORTANT:</b>\n              Creating a sharing link will save information about the query and style settings. Any user with the link\n              can restore these settings. However, results returned by the query will not be stored, and the the ability\n              to execute the query and view the results is restricted to users with the necessary permissions on the\n              selected Google Cloud Platform project. Sharing links remain active for 30 days.\n            </p>\n            <button mat-raised-button color=\"primary\" class=\"create-share-link-button\" [disabled]=\"!sharingDataChanged\"\n              (click)=\"generateSharingUrl()\">Create Share Link</button>\n            <mat-progress-spinner *ngIf=\"sharingIdGenerationPending\" mode=\"indeterminate\" [diameter]=\"24\"\n              [strokeWidth]=\"4\"></mat-progress-spinner>\n            <form *ngIf=\"generatedSharingId !== ''\" [formGroup]=\"sharingFormGroup\">\n              <mat-form-field class=\"sql-form-field\">\n                <input type=\"text\" matInput formControlName=\"sharingUrl\" ([ngModel])=\"model\" readonly>\n              </mat-form-field>\n            </form>\n          </mat-step>\n        </mat-vertical-stepper>\n      </section>\n    </mat-sidenav>\n  </mat-sidenav-container>\n\n  <!-- Lower-left corner buttons. -->\n  <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"toggle-button\" color=\"primary\">\n    <mat-icon aria-label=\"Toggle sidebar\">\n      <img src=\"https://www.gstatic.com/images/icons/material/system/1x/vertical_split_white_24dp.png\" srcset=\"https://www.gstatic.com/images/icons/material/system/1x/vertical_split_white_24dp.png 1x,\n              https://www.gstatic.com/images/icons/material/system/2x/vertical_split_white_24dp.png 2x\"\n        alt=\"Toggle sidebar\">\n    </mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"onFillPreset()\" class=\"preset-button\" color=\"primary\">\n    <mat-icon aria-label=\"Fill magic presets\">\n      <img src=\"https://www.gstatic.com/images/icons/material/system/1x/auto_fix_white_24dp.png\"\n           srcset=\"https://www.gstatic.com/images/icons/material/system/1x/auto_fix_white_24dp.png 1x,\n                   https://www.gstatic.com/images/icons/material/system/2x/auto_fix_white_24dp.png 2x\"\n        alt=\"magic wand\">\n    </mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/styles.service */ "./src/app/services/styles.service.ts");
/* harmony import */ var _services_bigquery_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/bigquery.service */ "./src/app/services/bigquery.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var DEBOUNCE_MS = 1000;
var USER_QUERY_START_MARKER = '--__USER__QUERY__START__';
var USER_QUERY_END_MARKER = '--__USER__QUERY__END__';
var MainComponent = /** @class */ (function () {
    function MainComponent(_storage, _formBuilder, _snackbar, _changeDetectorRef, _route, _ngZone) {
        var _this = this;
        this._storage = _storage;
        this._formBuilder = _formBuilder;
        this._snackbar = _snackbar;
        this._changeDetectorRef = _changeDetectorRef;
        this._route = _route;
        this._ngZone = _ngZone;
        this.title = 'BigQuery Geo Viz';
        this.StyleProps = _services_styles_service__WEBPACK_IMPORTED_MODULE_9__["StyleProps"];
        this.projectIDRegExp = new RegExp('^[a-z][a-z0-9\.:-]*$', 'i');
        this.datasetIDRegExp = new RegExp('^[_a-z][a-z_0-9]*$', 'i');
        this.tableIDRegExp = new RegExp('^[a-z][a-z_0-9]*$', 'i');
        this.jobIDRegExp = new RegExp('[a-z0-9_-]*$', 'i');
        this.localStorageKey = 'execution_local_storage_key';
        // GCP session data
        this.dataService = new _services_bigquery_service__WEBPACK_IMPORTED_MODULE_10__["BigQueryService"]();
        this.storageService = new _services_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"]();
        this.matchingProjects = [];
        this.projectID = '';
        this.dataset = '';
        this.table = '';
        this.jobID = '';
        this.location = '';
        // This contains the query that ran in the job.
        this.jobWrappedSql = '';
        this.bytesProcessed = 0;
        this.lintMessage = '';
        this.pending = false;
        this.totalRows = 0;
        this.maxRows = _app_constants__WEBPACK_IMPORTED_MODULE_12__["MAX_RESULTS"];
        this.stats = new Map();
        this.sideNavOpened = true;
        // If a new query is run or the styling has changed, we need to generate a new sharing id.
        this.sharingDataChanged = false;
        // Track if the stepper has actually changed.
        this.stepperChanged = false;
        this.sharingId = ''; // This is the input sharing Id from the url
        this.generatedSharingId = ''; // This is the sharing id generated for the current settings.
        this.sharingIdGenerationPending = false;
        // UI state
        this.stepIndex = 0;
        // Current style rules
        this.styles = [];
        // CodeMirror configuration
        this.cmConfig = {
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            lineWrapping: true
        };
        this.cmDebouncer = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // Debounce CodeMirror change events to avoid running extra dry runs.
        this.cmDebouncerSub = this.cmDebouncer
            .debounceTime(DEBOUNCE_MS)
            .subscribe(function (value) { _this._dryRun(); });
        // Set up BigQuery service.
        this.dataService.onSigninChange(function () { return _this.onSigninChange(); });
        this.dataService.init()
            .catch(function (e) { return _this.showMessage(parseErrorMessage(e)); });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns = [];
        this.columnNames = [];
        this.geoColumnNames = [];
        this.rows = [];
        // Read parameters from URL
        this.projectID = this._route.snapshot.paramMap.get("project");
        this.dataset = this._route.snapshot.paramMap.get("dataset");
        this.table = this._route.snapshot.paramMap.get("table");
        this.jobID = this._route.snapshot.paramMap.get("job");
        this.location = this._route.snapshot.paramMap.get("location") || ''; // Empty string for 'Auto Select'
        this.sharingId = this._route.snapshot.queryParams["shareid"];
        // Data form group
        this.dataFormGroup = this._formBuilder.group({
            projectID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sql: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [''],
        });
        this.dataFormGroup.controls.projectID.valueChanges.debounceTime(200).subscribe(function () {
            _this.dataService.getProjects()
                .then(function (projects) {
                _this.matchingProjects = projects.filter(function (project) {
                    return project['id'].indexOf(_this.dataFormGroup.controls.projectID.value) >= 0;
                });
            });
        });
        // Schema form group
        this.schemaFormGroup = this._formBuilder.group({ geoColumn: [''] });
        // Style rules form group
        var stylesGroupMap = {};
        _services_styles_service__WEBPACK_IMPORTED_MODULE_9__["StyleProps"].forEach(function (prop) { return stylesGroupMap[prop.name] = _this.createStyleFormGroup(); });
        this.stylesFormGroup = this._formBuilder.group(stylesGroupMap);
        // Sharing form group
        this.sharingFormGroup = this._formBuilder.group({
            sharingUrl: '',
        });
        // Initialize default styles.
        this.updateStyles();
    };
    MainComponent.prototype.saveDataToSharedStorage = function () {
        var _this = this;
        var dataValues = this.dataFormGroup.getRawValue();
        // Encrypt the style values using the sql string.
        var hashedStyleValues = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(JSON.stringify(this.styles), this.jobWrappedSql + this.bytesProcessed);
        var shareableData = {
            sharingVersion: _app_constants__WEBPACK_IMPORTED_MODULE_12__["SHARING_VERSION"],
            projectID: dataValues.projectID,
            jobID: this.jobID,
            location: dataValues.location,
            styles: hashedStyleValues.toString(),
            creationTimestampMs: Date.now()
        };
        return this.storageService.storeShareableData(shareableData).then(function (written_doc_id) {
            _this.generatedSharingId = written_doc_id;
        });
    };
    MainComponent.prototype.restoreDataFromSharedStorage = function (docId) {
        return this.storageService.getSharedData(this.sharingId);
    };
    MainComponent.prototype.saveDataToLocalStorage = function (projectID, sql, location) {
        this._storage.set(this.localStorageKey, { projectID: projectID, sql: sql, location: location });
    };
    MainComponent.prototype.loadDataFromLocalStorage = function () {
        return this._storage.get(this.localStorageKey);
    };
    MainComponent.prototype.clearDataFromLocalStorage = function () {
        this._storage.remove(this.localStorageKey);
    };
    MainComponent.prototype.resetUIOnSingout = function () {
        this.clearDataFromLocalStorage();
        this.dataFormGroup.reset();
        this.lintMessage = '';
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.cmDebouncerSub.unsubscribe();
    };
    MainComponent.prototype.signin = function () {
        this.clearDataFromLocalStorage();
        this.dataService.signin();
    };
    MainComponent.prototype.signout = function () {
        this.resetUIOnSingout();
        this.dataService.signout();
    };
    MainComponent.prototype.onSigninChange = function () {
        var _this = this;
        this._ngZone.run(function () {
            _this.isSignedIn = _this.dataService.isSignedIn;
            if (!_this.dataService.isSignedIn) {
                return;
            }
            _this.user = _this.dataService.getUser();
            _this.storageService.authorize(_this.dataService.getCredential());
            _this.dataService.getProjects()
                .then(function (projects) {
                _this.matchingProjects = projects;
                _this._changeDetectorRef.detectChanges();
            });
            if (_this._hasJobParams() && _this._jobParamsValid()) {
                _this.dataFormGroup.patchValue({
                    sql: '/* Loading sql query from job... */',
                    projectID: _this.projectID,
                    location: _this.location
                });
                _this.dataService.getQueryFromJob(_this.jobID, _this.location, _this.projectID).then(function (queryText) {
                    _this.dataFormGroup.patchValue({
                        sql: queryText.sql,
                    });
                });
            }
            else if (_this._hasTableParams() && _this._tableParamsValid()) {
                _this.dataFormGroup.patchValue({
                    sql: "SELECT * FROM `" + _this.projectID + "." + _this.dataset + "." + _this.table + "`;",
                    projectID: _this.projectID,
                });
            }
            else if (_this.sharingId) {
                _this.restoreDataFromSharedStorage(_this.sharingId).then(function (shareableValues) {
                    _this.applyRetrievedSharingValues(shareableValues);
                }).catch(function (e) { return _this.showMessage(parseErrorMessage(e)); });
            }
            else {
                var localStorageValues = _this.loadDataFromLocalStorage();
                if (localStorageValues) {
                    _this.dataFormGroup.patchValue({
                        sql: localStorageValues.sql,
                        projectID: localStorageValues.projectID,
                        location: localStorageValues.location
                    });
                }
            }
        });
    };
    MainComponent.prototype.applyRetrievedSharingValues = function (shareableValues) {
        var _this = this;
        if (shareableValues) {
            if (shareableValues.sharingVersion != _app_constants__WEBPACK_IMPORTED_MODULE_12__["SHARING_VERSION"]) {
                throw new Error('Sharing link is invalid.');
            }
            this.dataFormGroup.patchValue({
                sql: '/* Loading sql query from job... */',
                projectID: shareableValues.projectID,
                location: shareableValues.location
            });
            this.dataService.getQueryFromJob(shareableValues.jobID, shareableValues.location, shareableValues.projectID).then(function (queryText) {
                _this.dataFormGroup.patchValue({
                    sql: _this.convertToUserQuery(queryText.sql),
                });
                var unencryptedStyles = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8.stringify(crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(shareableValues.styles, queryText.sql + queryText.bytesProcessed)));
                _this.setNumStops(_this.stylesFormGroup.controls.fillColor, unencryptedStyles['fillColor'].domain.length);
                _this.setNumStops(_this.stylesFormGroup.controls.fillOpacity, unencryptedStyles['fillOpacity'].domain.length);
                _this.setNumStops(_this.stylesFormGroup.controls.strokeColor, unencryptedStyles['strokeColor'].domain.length);
                _this.setNumStops(_this.stylesFormGroup.controls.strokeOpacity, unencryptedStyles['strokeOpacity'].domain.length);
                _this.setNumStops(_this.stylesFormGroup.controls.strokeWeight, unencryptedStyles['strokeWeight'].domain.length);
                _this.setNumStops(_this.stylesFormGroup.controls.circleRadius, unencryptedStyles['circleRadius'].domain.length);
                _this.stylesFormGroup.patchValue(unencryptedStyles);
                _this.updateStyles();
            }).catch(function (e) { return _this.showMessage("Cannot retrieve styling options."); });
        }
    };
    MainComponent.prototype.clearGeneratedSharingUrl = function () {
        this.generatedSharingId = '';
        this.sharingDataChanged = true;
        this.sharingFormGroup.patchValue({
            sharingUrl: ''
        });
    };
    MainComponent.prototype.generateSharingUrl = function () {
        var _this = this;
        if (!this._hasJobParams()) {
            this.showMessage("Please first run a valid query before generating a sharing URL.");
            return;
        }
        if (this.stepIndex == _app_constants__WEBPACK_IMPORTED_MODULE_12__["Step"].SHARE && this.stepperChanged && this.sharingDataChanged) {
            this.sharingDataChanged = false;
            this.sharingIdGenerationPending = true;
            this.saveDataToSharedStorage().then(function () {
                _this.sharingFormGroup.patchValue({
                    sharingUrl: window.location.origin + '?shareid=' + _this.generatedSharingId
                });
            }).catch(function (e) { return _this.showMessage(parseErrorMessage(e)); });
        }
        this.sharingIdGenerationPending = false;
    };
    MainComponent.prototype.onStepperChange = function (e) {
        this.stepIndex = e.selectedIndex;
        if (e.selectedIndex != e.previouslySelectedIndex) {
            this.stepperChanged = true;
        }
        else {
            this.stepperChanged = false;
        }
        gtag('event', 'step', { event_label: "step " + this.stepIndex });
    };
    MainComponent.prototype.dryRun = function () {
        this.cmDebouncer.next();
    };
    MainComponent.prototype._hasJobParams = function () {
        return !!(this.jobID && this.projectID);
    };
    MainComponent.prototype._hasTableParams = function () {
        return !!(this.projectID && this.dataset && this.table);
    };
    MainComponent.prototype._jobParamsValid = function () {
        return this.projectIDRegExp.test(this.projectID) &&
            this.jobIDRegExp.test(this.jobID);
    };
    MainComponent.prototype._tableParamsValid = function () {
        return this.projectIDRegExp.test(this.projectID) &&
            this.datasetIDRegExp.test(this.dataset) &&
            this.tableIDRegExp.test(this.table);
    };
    MainComponent.prototype._dryRun = function () {
        var _this = this;
        var _a = this.dataFormGroup.getRawValue(), projectID = _a.projectID, sql = _a.sql, location = _a.location;
        if (!projectID)
            return;
        var dryRun = this.dataService.prequery(projectID, sql, location)
            .then(function (response) {
            if (!response.ok)
                throw new Error('Query analysis failed.');
            var geoColumn = response.schema.fields.find(function (f) { return f.type === 'GEOGRAPHY'; });
            if (response.statementType !== 'SELECT') {
                throw new Error('Expected a SELECT statement.');
            }
            else if (!geoColumn) {
                throw new Error('Expected a geography column, but found none.');
            }
            _this.lintMessage = '';
            _this.bytesProcessed = response.totalBytesProcessed;
            return response;
        });
        dryRun.catch(function (e) {
            _this.bytesProcessed = -1;
            _this.lintMessage = parseErrorMessage(e);
        });
        return dryRun;
    };
    // 'count' is used to track the number of request. Each request is 10MB.
    MainComponent.prototype.getResults = function (count, projectID, inputPageToken, location, jobID) {
        var _this = this;
        if (!inputPageToken || count >= _app_constants__WEBPACK_IMPORTED_MODULE_12__["MAX_PAGES"]) {
            // Force an update feature here since everything is done.
            this.rows = this.rows.slice(0);
            return;
        }
        count = count + 1;
        return this.dataService.getResults(projectID, jobID, location, inputPageToken, this.columns, this.stats).then(function (_a) {
            var _b;
            var rows = _a.rows, stats = _a.stats, pageToken = _a.pageToken;
            (_b = _this.rows).push.apply(_b, rows);
            _this.stats = stats;
            _this._changeDetectorRef.detectChanges();
            return _this.getResults(count, projectID, pageToken, location, jobID);
        });
    };
    MainComponent.prototype.convertToUserQuery = function (geovizQuery) {
        if (!geovizQuery)
            return '';
        var lines = geovizQuery.split('\n');
        var userQueryStarted = false;
        var userQuery = '';
        lines.forEach(function (line) {
            if (line.includes(USER_QUERY_START_MARKER)) {
                userQueryStarted = true;
            }
            else if (line.includes(USER_QUERY_END_MARKER)) {
                userQueryStarted = false;
            }
            else {
                if (userQueryStarted) {
                    userQuery += line + '\n';
                }
            }
        });
        return userQuery.trim();
    };
    MainComponent.prototype.convertToGeovizQuery = function (userQuery, geoColumns, numCols) {
        var hasNonGeoColumns = geoColumns.length < numCols;
        var nonGeoClause = hasNonGeoColumns
            ? "* EXCEPT(" + geoColumns.map(function (f) { return "`" + f.name + "`"; }).join(', ') + "),"
            : '';
        return "SELECT\n  " + nonGeoClause + "\n  " + geoColumns.map(function (f) { return "ST_AsGeoJson(`" + f.name + "`) as `" + f.name + "`"; }).join(', ') + "\nFROM (\n" + USER_QUERY_START_MARKER + "\n\n" + userQuery.replace(/;\s*$/, '') + "\n\n" + USER_QUERY_END_MARKER + "\n\n);";
    };
    MainComponent.prototype.query = function () {
        var _this = this;
        if (this.pending) {
            return;
        }
        this.pending = true;
        // We will save the query information to local store to be restored next
        // time that the app is launched.
        var dataFormValues = this.dataFormGroup.getRawValue();
        this.projectID = dataFormValues.projectID;
        var sql = dataFormValues.sql;
        this.location = dataFormValues.location;
        this.saveDataToLocalStorage(this.projectID, sql, this.location);
        // Clear the existing sharing URL.
        this.clearGeneratedSharingUrl();
        var geoColumns;
        this._dryRun()
            .then(function (dryRunResponse) {
            geoColumns = dryRunResponse.schema.fields.filter(function (f) { return f.type === 'GEOGRAPHY'; });
            // Wrap the user's SQL query, replacing geography columns with GeoJSON.
            _this.jobWrappedSql = _this.convertToGeovizQuery(sql, geoColumns, dryRunResponse.schema.fields.length);
            return _this.dataService.query(_this.projectID, _this.jobWrappedSql, _this.location);
        })
            .then(function (_a) {
            var columns = _a.columns, columnNames = _a.columnNames, rows = _a.rows, stats = _a.stats, totalRows = _a.totalRows, pageToken = _a.pageToken, jobID = _a.jobID, totalBytesProcessed = _a.totalBytesProcessed;
            _this.columns = columns;
            _this.columnNames = columnNames;
            _this.geoColumnNames = geoColumns.map(function (f) { return f.name; });
            _this.rows = rows;
            _this.stats = stats;
            _this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](rows.slice(0, _app_constants__WEBPACK_IMPORTED_MODULE_12__["MAX_RESULTS_PREVIEW"]));
            _this.schemaFormGroup.patchValue({ geoColumn: geoColumns[0].name });
            _this.totalRows = totalRows;
            _this.jobID = jobID;
            _this.bytesProcessed = totalBytesProcessed;
            return _this.getResults(0, _this.projectID, pageToken, _this.location, jobID);
        })
            .catch(function (e) {
            var error = e && e.result && e.result.error || {};
            if (error.status === 'INVALID_ARGUMENT' && error.message.match(/^Unrecognized name: f\d+_/)) {
                _this.showMessage('Geography columns must provide a name. For example, "SELECT ST_GEOGPOINT(1,2)" could ' +
                    'be changed to "SELECT ST_GEOGPOINT(1,2) geo".');
            }
            else {
                _this.showMessage(parseErrorMessage(e));
            }
        })
            .then(function () {
            _this.pending = false;
            _this._changeDetectorRef.detectChanges();
        });
    };
    MainComponent.prototype.onApplyStylesClicked = function () {
        this.clearGeneratedSharingUrl();
        this.updateStyles();
    };
    MainComponent.prototype.updateStyles = function () {
        if (this.stylesFormGroup.invalid) {
            return;
        }
        this.styles = this.stylesFormGroup.getRawValue();
    };
    MainComponent.prototype.getRowWidth = function () {
        return (this.columns.length * 100) + 'px';
    };
    MainComponent.prototype.onFillPreset = function () {
        switch (this.stepIndex) {
            case _app_constants__WEBPACK_IMPORTED_MODULE_12__["Step"].DATA:
                this.dataFormGroup.patchValue({ sql: _app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_QUERY"] });
                break;
            case _app_constants__WEBPACK_IMPORTED_MODULE_12__["Step"].SCHEMA:
                this.schemaFormGroup.patchValue({ geoColumn: 'WKT' });
                break;
            case _app_constants__WEBPACK_IMPORTED_MODULE_12__["Step"].STYLE:
                this.setNumStops(this.stylesFormGroup.controls.fillColor, _app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_FILL_COLOR"].domain.length);
                this.setNumStops(this.stylesFormGroup.controls.circleRadius, _app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_CIRCLE_RADIUS"].domain.length);
                this.stylesFormGroup.controls.fillOpacity.patchValue(_app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_FILL_OPACITY"]);
                this.stylesFormGroup.controls.fillColor.patchValue(_app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_FILL_COLOR"]);
                this.stylesFormGroup.controls.circleRadius.patchValue(_app_constants__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_CIRCLE_RADIUS"]);
                break;
            default:
                console.warn("Unexpected step index, " + this.stepIndex + ".");
        }
        gtag('event', 'preset', { event_label: "step " + this.stepIndex });
    };
    MainComponent.prototype.setNumStops = function (group, numStops) {
        var domain = group.controls.domain;
        var range = group.controls.range;
        while (domain.length !== numStops) {
            if (domain.length < numStops) {
                domain.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                range.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
            }
            if (domain.length > numStops) {
                domain.removeAt(domain.length - 1);
                range.removeAt(range.length - 1);
            }
        }
    };
    MainComponent.prototype.createStyleFormGroup = function () {
        return this._formBuilder.group({
            isComputed: [false],
            value: [''],
            property: [''],
            function: [''],
            domain: this._formBuilder.array([[''], ['']]),
            range: this._formBuilder.array([[''], ['']])
        });
    };
    MainComponent.prototype.getPropStatus = function (propName) {
        var rule = this.stylesFormGroup.controls[propName].value;
        if (!rule.isComputed && rule.value) {
            return 'global';
        }
        if (rule.isComputed && rule.function) {
            return 'computed';
        }
        return 'none';
    };
    MainComponent.prototype.getPropStats = function (propName) {
        var group = this.stylesFormGroup.controls[propName];
        var rawValue = group.value;
        if (!rawValue.property) {
            return null;
        }
        return this.stats.get(rawValue.property);
    };
    MainComponent.prototype.getPropFormGroup = function (propName) {
        return this.stylesFormGroup.controls[propName];
    };
    MainComponent.prototype.showMessage = function (message, duration) {
        var _this = this;
        if (duration === void 0) { duration = 5000; }
        console.warn(message);
        this._ngZone.run(function () {
            _this._snackbar.open(message, undefined, { duration: duration });
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MainComponent);
    return MainComponent;
}());

function parseErrorMessage(e, defaultMessage) {
    if (defaultMessage === void 0) { defaultMessage = 'Something went wrong'; }
    if (e.message) {
        return e.message;
    }
    if (e.result && e.result.error && e.result.error.message) {
        return e.result.error.message;
    }
    return defaultMessage;
}


/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host,\n.map {\n    width: 100%;\n    height: 100%;\n    min-width: 45vw;\n    min-height: calc(100vh - 64px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLCtCQUErQjtDQUNsQyIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxuLm1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDV2dztcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapEl class=\"map\"></div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/styles.service */ "./src/app/services/styles.service.ts");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deck.gl/layers */ "./node_modules/@deck.gl/layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deck.gl/google-maps */ "./node_modules/@deck.gl/google-maps/dist/esm/index.js");
/* harmony import */ var _turf_bbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/bbox */ "./node_modules/@turf/bbox/index.js");
/* harmony import */ var _turf_bbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_bbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_geojson_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/geojson.service */ "./src/app/services/geojson.service.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var LAYER_ID = 'geojson-layer';
var INITIAL_VIEW_STATE = { latitude: 45, longitude: 0, zoom: 2, pitch: 0 };
var DEFAULT_BATCH_SIZE = 5;
var MapComponent = /** @class */ (function () {
    function MapComponent(_ngZone, iterableDiffers) {
        this._ngZone = _ngZone;
        // Styling service.
        this.styler = new _services_styles_service__WEBPACK_IMPORTED_MODULE_1__["StylesService"]();
        this._rows = [];
        this._features = [];
        this._styles = [];
        this._activeGeometryTypes = new Set();
        // Detects how many times we have received new values.      
        this._numChanges = 0;
        // Counts after how many changes we should update the map.
        this._batchSize = DEFAULT_BATCH_SIZE;
        this._deckLayer = null;
        this._iterableDiffer = null;
        this._iterableDiffer = iterableDiffers.find([]).create(null);
        this.pendingStyles = fetch('assets/basemap.json', { credentials: 'include' })
            .then(function (response) { return response.json(); });
    }
    Object.defineProperty(MapComponent.prototype, "rows", {
        set: function (rows) {
            this._rows = rows;
            this.resetBatching();
            this.updateFeatures();
            this.updateStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "geoColumn", {
        set: function (geoColumn) {
            this._geoColumn = geoColumn;
            this.updateFeatures();
            this.updateStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "styles", {
        set: function (styles) {
            this._styles = styles;
            this.updateStyles();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngDoCheck = function () {
        var changes = this._iterableDiffer.diff(this._rows);
        if (changes) {
            this._numChanges++;
            if (this._numChanges >= this._batchSize) {
                this.updateFeatures();
                this.updateStyles();
                this._numChanges = 0;
                // Increase the batch size incrementally to keep the overhead low.
                this._batchSize = this._batchSize * 1.5;
            }
        }
    };
    /**
       * Constructs a Maps API instance after DOM has initialized.
       */
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.all([pendingMap, this.pendingStyles])
            .then(function (_a) {
            var _ = _a[0], mapStyles = _a[1];
            // Initialize Maps API outside of the Angular zone. Maps API binds event listeners,
            // and we do NOT want Angular to trigger change detection on these events. Ensuring
            // that Maps API interaction doesn't trigger change detection improves performance.
            // See: https://blog.angularindepth.com/boosting-performance-of-angular-applications-with-manual-change-detection-42cb396110fb
            _this._ngZone.runOutsideAngular(function () {
                _this.map = new google.maps.Map(_this.mapEl.nativeElement, {
                    center: { lat: INITIAL_VIEW_STATE.latitude, lng: INITIAL_VIEW_STATE.longitude },
                    zoom: INITIAL_VIEW_STATE.zoom,
                    tilt: 0
                });
                _this.map.setOptions({ styles: mapStyles });
                _this.infoWindow = new google.maps.InfoWindow({ content: '' });
                _this.map.data.addListener('click', function (e) {
                    _this.showInfoWindow(e.feature, e.latLng);
                });
                _this._deckLayer = new _deck_gl_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsOverlay"]({ layers: [] });
                _this._deckLayer.setMap(_this.map);
                _this.map.addListener('click', function (e) { return _this._onClick(e); });
            });
        });
    };
    MapComponent.prototype._onClick = function (e) {
        // TODO(donmccurdy): Do we need a public API for determining when layer is ready?
        if (!this._deckLayer._deck.layerManager)
            return;
        var _a = e['pixel'], x = _a.x, y = _a.y;
        var picked = this._deckLayer.pickObject({ x: x, y: y, radius: 4 });
        if (picked) {
            this.showInfoWindow(picked.object, e.latLng);
        }
    };
    MapComponent.prototype.resetBatching = function () {
        this._numChanges = 0;
        this._batchSize = DEFAULT_BATCH_SIZE;
    };
    /**
     * Converts row objects into GeoJSON, then loads into Maps API.
     */
    MapComponent.prototype.updateFeatures = function () {
        var _this = this;
        if (!this.map)
            return;
        this._features = _services_geojson_service__WEBPACK_IMPORTED_MODULE_5__["GeoJSONService"].rowsToGeoJSON(this._rows, this._geoColumn);
        // Note which types of geometry are being shown.
        this._activeGeometryTypes.clear();
        this._features.forEach(function (feature) {
            _this._activeGeometryTypes.add(feature.geometry['type']);
        });
        // Fit viewport bounds to the data.
        var _a = _turf_bbox__WEBPACK_IMPORTED_MODULE_4___default()({ type: 'FeatureCollection', features: this._features }), minX = _a[0], minY = _a[1], maxX = _a[2], maxY = _a[3];
        var bounds = new google.maps.LatLngBounds(new google.maps.LatLng(minY, minX), new google.maps.LatLng(maxY, maxX));
        if (!bounds.isEmpty()) {
            this.map.fitBounds(bounds);
        }
    };
    /**
     * Updates styles applied to all GeoJSON features.
     */
    MapComponent.prototype.updateStyles = function () {
        var _this = this;
        if (!this.map)
            return;
        this.styler.uncache();
        // Remove old features.
        this._deckLayer.setProps({ layers: [] });
        // Create GeoJSON layer.
        var colorRe = /(\d+), (\d+), (\d+)/;
        var layer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_2__["GeoJsonLayer"]({
            id: LAYER_ID,
            data: this._features,
            pickable: true,
            autoHighlight: true,
            highlightColor: [219, 68, 55],
            stroked: this.hasStroke(),
            filled: true,
            extruded: false,
            elevationScale: 0,
            lineWidthUnits: 'pixels',
            pointRadiusMinPixels: 1,
            getFillColor: function (d) {
                var color = _this.getStyle(d, _this._styles, 'fillColor');
                if (typeof color === 'string')
                    color = color.match(colorRe).slice(1, 4).map(Number);
                var opacity = _this.getStyle(d, _this._styles, 'fillOpacity');
                return __spreadArrays(color, [opacity * 256]);
            },
            getLineColor: function (d) {
                var color = _this.getStyle(d, _this._styles, 'strokeColor');
                if (typeof color === 'string')
                    color = color.match(colorRe).slice(1, 4).map(Number);
                var opacity = _this.getStyle(d, _this._styles, 'strokeOpacity');
                return __spreadArrays(color, [opacity * 256]);
            },
            getLineWidth: function (d) { return _this.getStyle(d, _this._styles, 'strokeWeight'); },
            getRadius: function (d) { return _this.getStyle(d, _this._styles, 'circleRadius'); },
        });
        this._deckLayer.setProps({ layers: [layer] });
    };
    /**
     * Return a given style for a given feature.
     * @param feature
     * @param style
     */
    MapComponent.prototype.getStyle = function (feature, styles, styleName) {
        return this.styler.parseStyle(styleName, feature['properties'], styles[styleName]);
    };
    /**
     * Returns whether the style is currently enabled.
     * @param styles
     * @param styleName
     */
    MapComponent.prototype.hasStyle = function (styles, styleName) {
        var rule = styles[styleName];
        if (!rule)
            return false;
        if (!rule.isComputed)
            return !!rule.value || rule.value === '0';
        return rule.property && rule.function;
    };
    MapComponent.prototype.hasStroke = function () {
        return this._activeGeometryTypes.has('LineString')
            || this._activeGeometryTypes.has('MultiLineString')
            || this._activeGeometryTypes.has('Polygon')
            || this._activeGeometryTypes.has('MultiPolygon');
    };
    /**
     * Displays info window for selected feature.
     * @param feature
     * @param latLng
     */
    MapComponent.prototype.showInfoWindow = function (feature, latLng) {
        this.infoWindow.setContent("<pre>" + JSON.stringify(feature.properties, null, 2) + "</pre>");
        this.infoWindow.open(this.map);
        this.infoWindow.setPosition(latLng);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "mapEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MapComponent.prototype, "rows", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MapComponent.prototype, "geoColumn", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MapComponent.prototype, "styles", null);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/rule/rule.component.css":
/*!*****************************************!*\
  !*** ./src/app/rule/rule.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-slide-toggle {\n    margin: 1em 0;\n}\n\nmat-form-field {\n    display: block;\n    max-width: 250px;\n}\n\n.array-field + .array-field {\n    margin-top: 1em;\n}\n\n.array-field-list {\n    display: block;\n}\n\n.array-field-item {\n    position: relative;\n}\n\n.array-field-input {\n    border: 1px solid rgba(0, 0, 0, 0.32);\n    height: 32px;\n    line-height: 32px;\n    display: inline-block;\n    width: 72px;\n    margin: 0.5em 0.5em 0.5em 0;\n    padding: 0 1em;\n    font-family: inherit;\n    font-size: 1em;\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.array-field-caption {\n    position: absolute;\n    bottom: -1.2em;\n    font-size: 0.8em;\n    color: #888;\n}\n\n.array-field-swatch {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border-radius: 2px;\n    position: absolute;\n    right: 1em;\n    top: 1em;\n}\n\nbutton:not([disabled]) mat-icon.create {\n    color: #33AC71;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVsZS9ydWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0NBQ1o7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcnVsZS9ydWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLmFycmF5LWZpZWxkICsgLmFycmF5LWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5hcnJheS1maWVsZC1saXN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFycmF5LWZpZWxkLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFycmF5LWZpZWxkLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAwO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uYXJyYXktZmllbGQtY2FwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEuMmVtO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY29sb3I6ICM4ODg7XG59XG5cbi5hcnJheS1maWVsZC1zd2F0Y2gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMWVtO1xuICAgIHRvcDogMWVtO1xufVxuXG5idXR0b246bm90KFtkaXNhYmxlZF0pIG1hdC1pY29uLmNyZWF0ZSB7XG4gICAgY29sb3I6ICMzM0FDNzE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/rule/rule.component.html":
/*!******************************************!*\
  !*** ./src/app/rule/rule.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section [formGroup]=\"formGroup\">\n  <p>{{ prop.description }}</p>\n  <mat-slide-toggle formControlName=\"isComputed\">\n    Data-driven\n  </mat-slide-toggle>\n  <mat-form-field *ngIf=\"!_rule.isComputed\">\n    <input matInput\n          placeholder=\"Value\"\n          formControlName=\"value\"\n          matTooltip=\"Value of this style for all features\"\n          matTooltipPosition=\"after\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"_rule.isComputed\">\n    <mat-select placeholder=\"Function\"\n                formControlName=\"function\"\n                matTooltip=\"Function used to compute a style value from a field's values\"\n                matTooltipPosition=\"after\">\n      <mat-option value=\"\">None</mat-option>\n      <mat-option *ngFor=\"let fn of StyleFunctions\"\n                  [value]=\"fn.name\"\n                  [disabled]=\"fn.disabled\"\n                  [matTooltip]=\"fn.description\"\n                  matTooltipPosition=\"after\">\n        {{ fn.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field *ngIf=\"_rule.isComputed\">\n    <mat-select placeholder=\"Field\"\n                formControlName=\"property\"\n                matTooltip=\"Field in data used as input to the styling function\"\n                matTooltipPosition=\"after\">\n      <mat-option value=\"\">None</mat-option>\n      <mat-option  *ngFor=\"let column of columns;\" [value]=\"column\">\n        {{ column }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"array-field\" *ngIf=\"_rule.isComputed && getPropNeedsMapping()\">\n    <label>Domain</label>\n    <button mat-icon-button\n            color=\"primary\"\n            type=\"button\"\n            (click)=\"addDomainRangeValue()\"\n            style=\"margin-right: -10px;\">\n      <mat-icon class=\"create\" aria-label=\"Add domain value\">add_circle</mat-icon>\n    </button>\n    <button mat-icon-button\n            color=\"warn\"\n            type=\"button\"\n            (click)=\"removeDomainRangeValue()\">\n      <mat-icon class=\"remove\" aria-label=\"Remove domain/range value\">remove_circle</mat-icon>\n    </button>\n    <div class=\"array-field-list\">\n      <span *ngFor=\"let d of getDomainControls(); let i = index; let first = first; let last = last;\"\n            class=\"array-field-item\">\n        <input [formControl]=\"d\" class=\"array-field-input\">\n        <span *ngIf=\"(first || last) && stats\"\n              class=\"array-field-caption\">\n          {{ first ? ('min: ' + stats.min) : ('max: ' + stats.max) }}\n        </span>\n      </span>\n    </div>\n  </div>\n  <div class=\"array-field\" *ngIf=\"_rule.isComputed && getPropNeedsMapping()\">\n    <label>Range</label>\n    <button *ngIf=\"prop.type === 'color'\"\n            mat-icon-button\n            type=\"button\"\n            (click)=\"addRandomColors()\"\n            style=\"margin-right: -10px;\">\n      <mat-icon class=\"create\" aria-label=\"Randomize colors\">refresh</mat-icon>\n    </button>\n    <div class=\"array-field-list\">\n      <span *ngFor=\"let d of getRangeControls(); let i = index\" class=\"array-field-item\">\n        <input *ngIf=\"prop.type !== 'color'\"\n              [formControl]=\"d\"\n              class=\"array-field-input\">\n        <span *ngIf=\"prop.type === 'color'\"\n              [(colorPicker)]=\"d.value\"\n              [cpPresetColors]=\"['#edf8fb','#ccece6','#99d8c9','#66c2a4','#2ca25f','#006d2c']\"\n              cpUseRootViewContainer=\"true\"\n              cpPosition=\"top\"\n              (colorPickerChange)=\"onColorChange()\"\n              class=\"array-field-input\">\n          {{d.value}}\n        </span>\n        <span *ngIf=\"prop.type === 'color'\" class=\"array-field-swatch\" [ngStyle]=\"{'background': d.value}\"></span>\n      </span>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/rule/rule.component.ts":
/*!****************************************!*\
  !*** ./src/app/rule/rule.component.ts ***!
  \****************************************/
/*! exports provided: RuleInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleInputComponent", function() { return RuleInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/styles.service */ "./src/app/services/styles.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Custom form control for a single style rule.
 */
var RuleInputComponent = /** @class */ (function () {
    function RuleInputComponent() {
        this.StyleFunctions = _services_styles_service__WEBPACK_IMPORTED_MODULE_2__["StyleFunctions"];
        this.columns = [];
        this._rule = {
            isComputed: false,
            value: '',
            function: '',
            property: '',
            domain: [],
            range: []
        };
        this.onChange = function (rule) { };
        this.onTouched = function (rule) { };
    }
    RuleInputComponent_1 = RuleInputComponent;
    RuleInputComponent.prototype.validate = function (c) {
        return null;
    };
    RuleInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Reflect FormGroup changes to local object used to update view.
        this.formGroup.valueChanges.subscribe(function () {
            Object.assign(_this._rule, _this.formGroup.getRawValue());
        });
    };
    RuleInputComponent.prototype.writeValue = function (rule) {
        Object.assign(this._rule, rule);
        this.formGroup.patchValue(rule);
        this.onChange(rule);
    };
    RuleInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RuleInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RuleInputComponent.prototype.getDomainControls = function () {
        var array = this.formGroup.controls.domain;
        return array.controls;
    };
    RuleInputComponent.prototype.getRangeControls = function () {
        var array = this.formGroup.controls.range;
        return array.controls;
    };
    RuleInputComponent.prototype.addDomainRangeValue = function () {
        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        var domainArray = this.formGroup.controls.domain;
        var rangeArray = this.formGroup.controls.range;
        domainArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
        rangeArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
    };
    RuleInputComponent.prototype.removeDomainRangeValue = function () {
        var domain = this.formGroup.controls.domain;
        var range = this.formGroup.controls.range;
        domain.removeAt(domain.length - 1);
        range.removeAt(range.length - 1);
    };
    /**
     * Whether this rule has enough information to be used.
     */
    RuleInputComponent.prototype.isPropEnabled = function () {
        var rule = this._rule;
        if (!rule.isComputed && rule.value) {
            return true;
        }
        if (rule.isComputed && rule.function) {
            return true;
        }
        return false;
    };
    /**
     * Whether this rule requires domain/range mappings.
     */
    RuleInputComponent.prototype.getPropNeedsMapping = function () {
        return this._rule.function && this._rule.function !== 'identity';
    };
    /**
     * Replaces current color palette with a random one.
     */
    RuleInputComponent.prototype.addRandomColors = function () {
        var palette = _app_constants__WEBPACK_IMPORTED_MODULE_3__["PALETTES"][Math.floor(Math.random() * _app_constants__WEBPACK_IMPORTED_MODULE_3__["PALETTES"].length)];
        var range = this.formGroup.controls.range;
        if (range.length < 3) {
            range.setValue(palette[3].slice(0, range.length));
        }
        else if (range.length < 10) {
            range.setValue(palette[range.length]);
        }
        else {
            console.warn('No palettes available for 10+ colors.');
        }
    };
    /**
     * ngx-color-picker doesn't support Reactive Forms, so use a change
     * handler to update the form.
     */
    RuleInputComponent.prototype.onColorChange = function () {
        this.writeValue(this.formGroup.getRawValue());
    };
    var RuleInputComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], RuleInputComponent.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RuleInputComponent.prototype, "prop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RuleInputComponent.prototype, "stats", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RuleInputComponent.prototype, "columns", void 0);
    RuleInputComponent = RuleInputComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rule-input',
            template: __webpack_require__(/*! ./rule.component.html */ "./src/app/rule/rule.component.html"),
            styles: [__webpack_require__(/*! ./rule.component.css */ "./src/app/rule/rule.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RuleInputComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RuleInputComponent_1; }),
                    multi: true,
                }
            ]
        })
    ], RuleInputComponent);
    return RuleInputComponent;
}());



/***/ }),

/***/ "./src/app/services/bigquery.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/bigquery.service.ts ***!
  \**********************************************/
/*! exports provided: ColumnType, BigQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnType", function() { return ColumnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigQueryService", function() { return BigQueryService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ColumnType = {
    STRING: 'string',
    NUMBER: 'number',
    LAT: 'latitude',
    LNG: 'longitude',
    WKT: 'wkt',
    DATE: 'date',
    ID: 'id'
};
/**
 * Utility class for managing interaction with the Cloud BigQuery API.
 */
var BigQueryService = /** @class */ (function () {
    function BigQueryService() {
        this.isSignedIn = false;
        this.projects = [];
        this.signinChangeCallback = function () { };
    }
    /**
     * Initializes the service. Must be called before any queries are made.
     */
    BigQueryService.prototype.init = function () {
        var _this = this;
        // Wait for Google APIs to load, then initialize and try to authenticate.
        return pendingGapi
            .then(function () {
            gapi.client.init({
                clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authClientID,
                scope: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authScope
            })
                .then(function () {
                gapi['auth2'].getAuthInstance().isSignedIn.listen((function (isSignedIn) {
                    _this.isSignedIn = isSignedIn;
                    _this.signinChangeCallback();
                }));
                _this.isSignedIn = !!gapi['auth2'].getAuthInstance().isSignedIn.get();
                _this.signinChangeCallback();
            });
        });
    };
    /**
     * Returns current user details.
     */
    BigQueryService.prototype.getUser = function () {
        return gapi['auth2'].getAuthInstance().currentUser.get();
    };
    /**
     * Returns current user credentials.
     */
    BigQueryService.prototype.getCredential = function () {
        var authResponse = gapi['auth2'].getAuthInstance().currentUser.get().getAuthResponse(true);
        if (authResponse) {
            return { id_token: authResponse.id_token, access_token: authResponse.access_token };
        }
        return null;
    };
    /**
     * Attempts session login.
     */
    BigQueryService.prototype.signin = function () {
        var _this = this;
        gapi['auth2'].getAuthInstance().signIn().then(function () { return _this.signinChangeCallback(); });
    };
    /**
     * Logs out of current session.
     */
    BigQueryService.prototype.signout = function () {
        var _this = this;
        this.isSignedIn = false;
        gapi['auth2'].getAuthInstance().signOut().then(function () { return _this.signinChangeCallback(); });
    };
    /**
     * Sets callback to be invoked when signin status changes.
     * @param callback
     */
    BigQueryService.prototype.onSigninChange = function (callback) {
        this.signinChangeCallback = callback;
    };
    /**
     * Queries and returns a list of GCP projects available to the current user.
     */
    BigQueryService.prototype.getProjects = function () {
        var _this = this;
        if (this.projects.length) {
            return Promise.resolve(this.projects);
        }
        return gapi.client.request({ path: "https://www.googleapis.com/bigquery/v2/projects?maxResults=100000" })
            .then(function (response) {
            _this.projects = response.result.projects.slice();
            _this.projects.sort(function (p1, p2) { return p1['id'] > p2['id'] ? 1 : -1; });
            return _this.projects;
        });
    };
    /**
     * Queries and returns the sql text for a specific job ID. Throws an error if the
     * job id is not for a SELECT statement.
     */
    BigQueryService.prototype.getQueryFromJob = function (jobID, location, projectID) {
        var location_param = location ? "location=" + location : '';
        return gapi.client.request({
            path: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/jobs/" + jobID + "?" + location_param
        }).then(function (response) {
            if (!response.result.statistics.query) {
                throw new Error('Job id is not for a query job.');
            }
            if (response.result.statistics.query.statementType != 'SELECT') {
                throw new Error('Job id is not for a SELECT statement.');
            }
            return { sql: response.result.configuration.query.query, bytesProcessed: Number(response.result.statistics.query.totalBytesProcessed) };
        });
    };
    /**
     * Performs a dry run for the given query, and returns estimated bytes to be processed.
     * If the dry run fails, returns -1.
     * @param projectID
     * @param sql
     */
    BigQueryService.prototype.prequery = function (projectID, sql, location) {
        var configuration = {
            dryRun: true,
            query: {
                query: sql,
                maxResults: _app_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_RESULTS"],
                timeoutMs: _app_constants__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MS"],
                useLegacySql: false
            }
        };
        if (location) {
            configuration.query['location'] = location;
        }
        return gapi.client.request({
            path: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/jobs",
            method: 'POST',
            body: { configuration: configuration },
        }).then(function (response) {
            var _a = response.result.statistics.query, schema = _a.schema, statementType = _a.statementType;
            var totalBytesProcessed = Number(response.result.statistics.query.totalBytesProcessed);
            return { ok: true, schema: schema, statementType: statementType, totalBytesProcessed: totalBytesProcessed };
        }).catch(function (e) {
            if (e && e.result && e.result.error) {
                throw new Error(e.result.error.message);
            }
            console.warn(e);
            return { ok: false };
        });
    };
    BigQueryService.prototype.normalizeRows = function (rows, normalizedCols, stats) {
        return (rows || []).map(function (row) {
            var rowObject = {};
            row['f'].forEach(function (_a, index) {
                var v = _a.v;
                var column = normalizedCols[index];
                if (column['type'] === ColumnType.NUMBER) {
                    v = v === '' || v === null ? null : Number(v);
                    rowObject[column['name']] = v;
                    var stat = stats.get(column['name']);
                    if (v === null) {
                        stat.nulls++;
                    }
                    else {
                        stat.max = Math.round(Math.max(stat.max, v) * 1000) / 1000;
                        stat.min = Math.round(Math.min(stat.min, v) * 1000) / 1000;
                    }
                }
                else {
                    rowObject[column['name']] = v === null ? null : String(v);
                }
            });
            return rowObject;
        });
    };
    BigQueryService.prototype.getResults = function (projectID, jobID, location, pageToken, normalized_cols, stats) {
        var _this = this;
        var body = {
            maxResults: _app_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_RESULTS"],
            timeoutMs: _app_constants__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MS"],
            pageToken: pageToken
        };
        if (location) {
            body['location'] = location;
        }
        return gapi.client.request({
            path: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/queries/" + jobID,
            method: 'GET',
            params: body,
        }).then(function (response) {
            if (response.result.jobComplete === false) {
                throw new Error("Request timed out after " + _app_constants__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MS"] / 1000 + " seconds. This UI does not yet handle longer jobs.");
            }
            // Normalize row structure.
            var rows = _this.normalizeRows(response.result.rows, normalized_cols, stats);
            return { rows: rows, stats: stats, pageToken: response.result.pageToken };
        });
    };
    BigQueryService.prototype.query = function (projectID, sql, location) {
        var _this = this;
        var body = {
            query: sql,
            maxResults: _app_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_RESULTS"],
            timeoutMs: _app_constants__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MS"],
            useLegacySql: false
        };
        if (location) {
            body['location'] = location;
        }
        return gapi.client.request({
            path: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/queries",
            method: 'POST',
            body: body,
        }).then(function (response) {
            var stats = new Map();
            if (response.result.jobComplete === false) {
                throw new Error("Request timed out after " + _app_constants__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MS"] / 1000 + " seconds. This UI does not yet handle longer jobs.");
            }
            // Normalize column types.
            var columnNames = [];
            var columns = (response.result.schema.fields || []).map(function (field) {
                if (isNumericField(field)) {
                    field.type = ColumnType.NUMBER;
                    stats.set(field.name, { min: Infinity, max: -Infinity, nulls: 0 });
                }
                else {
                    field.type = ColumnType.STRING;
                }
                columnNames.push(field.name);
                return field;
            });
            // Normalize row structure.
            var rows = _this.normalizeRows(response.result.rows, columns, stats);
            if (rows.length === 0) {
                throw new Error('No results.');
            }
            var totalRows = Number(response.result.totalRows);
            return { columns: columns, columnNames: columnNames, rows: rows, stats: stats, totalRows: totalRows, pageToken: response.result.pageToken, jobID: response.result.jobReference.jobId,
                totalBytesProcessed: Number(response.result.totalBytesProcessed) };
        });
    };
    return BigQueryService;
}());

function isNumericField(field) {
    var fieldType = field['type'].toUpperCase();
    return ['INTEGER', 'NUMBER', 'FLOAT', 'DECIMAL'].includes(fieldType);
}


/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Load required services into the firebase namespace.



var SHARING_COLLECTION = 'GeoVizSharing';
/**
 * Utility class for managing interaction with the Firestore.
 */
var FirestoreService = /** @class */ (function () {
    function FirestoreService() {
        this.db = null;
        // Initialize Firebase
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["firebaseConfig"]);
        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
    }
    FirestoreService.prototype.storeShareableData = function (shareableData) {
        return this.db.collection(SHARING_COLLECTION).add(shareableData)
            .then(function (docRef) {
            return docRef.id;
        });
    };
    FirestoreService.prototype.getSharedData = function (docId) {
        return this.db.collection(SHARING_COLLECTION).doc(docId).get().then(function (doc) {
            if (!doc.exists) {
                throw new Error('Shared visualization does not exist. Please check your URL!');
            }
            return doc.data();
        });
    };
    FirestoreService.prototype.authorize = function (credential) {
        var firebase_credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.credential(credential['id_token'], credential['access_token']);
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithCredential(firebase_credential);
    };
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/services/geojson.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/geojson.service.ts ***!
  \*********************************************/
/*! exports provided: GeoJSONService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoJSONService", function() { return GeoJSONService; });
var GeoJSONService = /** @class */ (function () {
    function GeoJSONService() {
    }
    /**
     * Converts rows to GeoJSON features.
     * @param rows
     * @param geoColumn
     */
    GeoJSONService.rowsToGeoJSON = function (rows, geoColumn) {
        if (!rows || !geoColumn)
            return [];
        // Convert rows to GeoJSON features.
        var features = [];
        rows.forEach(function (row) {
            if (!row[geoColumn])
                return;
            try {
                var geometry = JSON.parse(row[geoColumn]);
                var feature = { type: 'Feature', geometry: geometry, properties: row };
                features.push(feature);
            }
            catch (e) {
                // Parsing can fail (e.g. invalid GeoJSON); just log the error.
                console.error(e);
            }
        });
        return features;
    };
    return GeoJSONService;
}());



/***/ }),

/***/ "./src/app/services/styles.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/styles.service.ts ***!
  \********************************************/
/*! exports provided: StyleProps, StyleFunctions, StylesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleProps", function() { return StyleProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleFunctions", function() { return StyleFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesService", function() { return StylesService; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var DEFAULT_STYLES = {
    fillColor: [255, 0, 0],
    fillOpacity: 1.0,
    strokeColor: [255, 0, 0],
    strokeOpacity: 1.0,
    strokeWeight: 1.0,
    circleRadius: 25
};
var parseNumber = Number;
var parseBoolean = function (v) { return !!String(v).match(/y|1|t/gi); };
var parseColorString = function (v) {
    var color = d3_color__WEBPACK_IMPORTED_MODULE_1__["color"](v);
    return color ? String(color) : DEFAULT_STYLES.fillColor;
};
var StyleProps = [
    {
        name: 'fillColor',
        type: 'color',
        parse: parseColorString,
        description: ''
            + 'Fill color of a polygon or point. For example, "linear" or "interval" functions may be used'
            + ' to map numeric values to a color gradient.'
    },
    {
        name: 'fillOpacity',
        type: 'number',
        parse: parseNumber,
        description: ''
            + 'Fill opacity of a polygon or point. Values must be in the range 0—1, where 0=transparent'
            + ' and 1=opaque.'
    },
    {
        name: 'strokeColor',
        type: 'color',
        parse: parseColorString,
        description: 'Stroke/outline color of a polygon or line.'
    },
    {
        name: 'strokeOpacity',
        type: 'number',
        parse: parseNumber,
        description: ''
            + 'Stroke/outline opacity of polygon or line. Values must be in the range 0—1, where'
            + ' 0=transparent and 1=opaque.'
    },
    {
        name: 'strokeWeight',
        type: 'number',
        parse: parseNumber,
        description: 'Stroke/outline width, in pixels, of a polygon or line.'
    },
    {
        name: 'circleRadius',
        type: 'number',
        parse: parseNumber,
        description: ''
            + 'Radius of the circle representing a point, in meters. For example, a "linear" function'
            + ' could be used to map numeric values to point sizes, creating a scatterplot style.'
    }
];
var StyleFunctions = [
    {
        name: 'identity',
        description: 'Data value of each field is used, verbatim, as the styling value.'
    },
    {
        name: 'categorical',
        description: 'Data values of each field listed in the domain are mapped 1:1 with corresponding styles in the range.'
    },
    {
        name: 'interval',
        description: ''
            + 'Data values of each field are rounded down to the nearest value in the domain, then styled'
            + ' with the corresponding style in the range.'
    },
    {
        name: 'linear',
        description: ''
            + 'Data values of each field are interpolated linearly across values in the domain, then'
            + ' styled with a blend of the corresponding styles in the range.'
    },
    {
        name: 'exponential',
        disabled: true,
        description: ''
            + 'Data values of each field are interpolated exponentially across values in the domain,'
            + ' then styled with a blend of the corresponding styles in the range.'
    },
];
var StylesService = /** @class */ (function () {
    function StylesService() {
        this.iconCache = new Map();
        this.imageCache = new Map();
        this.scaleCache = new Map();
    }
    StylesService.prototype.uncache = function () {
        this.scaleCache.clear();
    };
    StylesService.prototype.parseStyle = function (propName, row, rule) {
        var prop = StyleProps.find(function (p) { return p.name === propName; });
        var scale = this.scaleCache.get(rule);
        if (!rule.isComputed) {
            // Static value.
            return rule.value
                ? prop.parse(rule.value)
                : DEFAULT_STYLES[propName];
        }
        else if (!rule.property || !rule.function) {
            // Default value.
            return DEFAULT_STYLES[propName];
        }
        else if (rule.function === 'identity') {
            // Identity function.
            return prop.parse(row[rule.property]);
        }
        else if (rule.function === 'categorical') {
            // Categorical function.
            if (!scale) {
                var range = rule.range.map(function (v) { return prop.parse(v); });
                scale = d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]()
                    .domain(rule.domain)
                    .range(range)
                    .unknown(DEFAULT_STYLES[propName]);
                this.scaleCache.set(rule, scale);
            }
            var callableScale = scale;
            return callableScale(row[rule.property]);
        }
        else if (rule.function === 'interval') {
            // Interval function.
            if (!scale) {
                var range = rule.range.map(function (v) { return prop.parse(v); });
                var tmpScale = d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleThreshold"]()
                    .domain(rule.domain.map(Number))
                    .range(__spreadArrays(range, [DEFAULT_STYLES[propName]]));
                scale = tmpScale;
                this.scaleCache.set(rule, scale);
            }
            var callableScale = scale;
            return callableScale(Number(row[rule.property]));
        }
        else if (rule.function === 'linear') {
            // Linear function.
            if (!scale) {
                var range = rule.range.map(function (v) { return prop.parse(v); });
                scale = d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                    .domain(rule.domain.map(Number))
                    .range(range);
                this.scaleCache.set(rule, scale);
            }
            var callableScale = scale;
            return callableScale(Number(row[rule.property]));
        }
        throw new Error('Unknown style rule function: ' + rule.function);
    };
    StylesService.prototype.getIcon = function (radius, color, opacity) {
        var iconCacheKey = radius + ":" + color + ":" + opacity;
        var imageCacheKey = color + ":" + opacity;
        // Use cached icon if available.
        if (this.iconCache.has(iconCacheKey)) {
            return this.iconCache.get(iconCacheKey);
        }
        // Use large, scaled icon rather than new image for each size.
        var iconRadius = 256;
        var iconWidth = 512;
        // Used cached image if available.
        if (!this.imageCache.has(imageCacheKey)) {
            // Parse color and apply opacity.
            var parsedColor = d3_color__WEBPACK_IMPORTED_MODULE_1__["color"](color);
            parsedColor.opacity = opacity;
            // Create canvas and render circle.
            var canvas = document.createElement('canvas');
            canvas.height = canvas.width = iconWidth;
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(iconRadius, iconRadius, iconRadius - 0.5, 0, Math.PI * 2);
            ctx.fillStyle = String(parsedColor);
            ctx.strokeStyle = null;
            ctx.fill();
            // Cache the image.
            this.imageCache.set(imageCacheKey, canvas.toDataURL());
        }
        // Cache and return result.
        var icon = {
            url: this.imageCache.get(imageCacheKey),
            size: new google.maps.Size(iconWidth, iconWidth),
            scaledSize: new google.maps.Size(radius * 2, radius * 2),
            anchor: new google.maps.Point(radius, radius)
        };
        this.iconCache.set(iconCacheKey, icon);
        return icon;
    };
    return StylesService;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.css":
/*!*******************************************!*\
  !*** ./src/app/terms/terms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  font-family: Roboto, Helvetica, sans-serif;\n  padding: 1em;\n  max-width: 700px;\n}\n\n.flex-spacer {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n}\n\nnav {\n  text-align: center;\n}\n\n.back {\n  margin-top: 2em;\n}\n\na.policy-link {\n  color: #4285f4;\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0lBQ0ksb0JBQWE7WUFBYixhQUFhO0NBQ2hCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMWVtO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uZmxleC1zcGFjZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxubmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFjayB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuYS5wb2xpY3ktbGluayB7XG4gIGNvbG9yOiAjNDI4NWY0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header\">\n  <span>BigQuery Geo Viz</span>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button href=\"/\">Back</a>\n</mat-toolbar>\n<div class=\"view\">\n  <h1>Terms of Service &amp; Privacy</h1>\n  <p>\n    This tool is provided as a reference implementation of Google Maps and geospatial BigQuery API usage capabilities. It may\n    be useful as a debugging and visualization resource. It is not an officially supported Google product and is provided without\n    guarantees of maintenance.\n  </p>\n  <nav>\n    <a class=\"policy-link\" mat-button href=\"https://policies.google.com/terms\" target=\"_blank\">Google Terms of Service</a>\n    <a class=\"policy-link\" mat-button href=\"https://cloud.google.com/terms/\" target=\"_blank\">Google Cloud Platform Terms of Service</a>\n    <a class=\"policy-link\" mat-button href=\"https://policies.google.com/privacy\" target=\"_blank\">Privacy</a>\n  </nav>\n  <a mat-raised-button color=\"primary\" href=\"/\" class=\"back\">Back</a>\n</div>\n"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    /**
     * Constructs a Maps API instance after DOM has initialized.
     */
    TermsComponent.prototype.ngAfterViewInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var environment = {
    production: false,
    authClientID: '419125973937-kl2cru5pu2vfugne7lr1hosgseh4lo1s.apps.googleusercontent.com',
    authScope: 'https://www.googleapis.com/auth/bigquery'
};
// Your web app's Firebase configuration
// TODO(hormati): Create a different config for testing.
var firebaseConfig = {
    apiKey: "AIzaSyDS8k-x7L9vZ_mvvdyTzwQ1LNXsYLNnhOM",
    authDomain: "bigquerygeoviz.firebaseapp.com",
    databaseURL: "https://bigquerygeoviz.firebaseio.com",
    projectId: "bigquerygeoviz",
    storageBucket: "bigquerygeoviz.appspot.com",
    messagingSenderId: "419125973937",
    appId: "1:419125973937:web:eba1c63d64b58be3ec2390",
    measurementId: "G-FNH2K1BP5G"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hunghoang/gocar/bigquery-geo-viz/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************************************!*\
  !*** ../node/utils/to-array-buffer.node (ignored) ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************************************!*\
  !*** ../../node/read-file-sync.node (ignored) ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** ../../node/write-file.node (ignored) ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** asciify-image (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map