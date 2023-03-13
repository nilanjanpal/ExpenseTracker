(self["webpackChunkexpense_tracker"] = self["webpackChunkexpense_tracker"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 2443);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signup/signup.component */ 5933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup',
  component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./child-route/dashboard-routing.module */ 9035)).then(m => m.DashboardRoutingModule)
}, {
  path: 'expense',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./child-route/expense-routing.module */ 7784)).then(m => m.ExpenseRoutingModule)
}, {
  path: 'profile',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./child-route/profile-routing.module */ 8613)).then(m => m.ProfileRoutingModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/app.reducer */ 4840);
/* harmony import */ var _shared_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/feedback-form/feedback-form.component */ 357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 6221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ 264);
/* harmony import */ var _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/sidebar/sidebar.component */ 7958);














const _c0 = ["sidenav"];
function AppComponent_mat_sidenav_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-sidenav", 8, 9)(2, "app-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sidenavClickEvent", function AppComponent_mat_sidenav_4_Template_app_sidebar_sidenavClickEvent_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onToggle());
    })("sidenavLoadEvent", function AppComponent_mat_sidenav_4_Template_app_sidebar_sidenavLoadEvent_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.onSideNavLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", ctx_r0.sidenavMode);
  }
}
function AppComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Feedback Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(store, matDialog, authService) {
    this.store = store;
    this.matDialog = matDialog;
    this.authService = authService;
    this.title = 'Expense Tracker';
  }
  ngOnInit() {
    this.isAuthenticated$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsAuthenticated);
    this.authService.autoLogin();
  }
  onToggle() {
    if (this.sidenavMode === 'over') {
      this.sidenav.toggle();
    }
  }
  onSideNavLoad() {
    if (window.innerWidth >= 960) {
      this.sidenavMode = 'side';
      this.sidenav.open();
    } else {
      this.sidenavMode = 'over';
    }
  }
  onResize(event) {
    if (event.target.innerWidth < 960) {
      if (this.sidenav !== undefined) {
        this.sidenav.close();
        this.sidenavMode = 'over';
      }
    }
    if (event.target.innerWidth >= 960) {
      if (this.sidenav !== undefined) {
        this.sidenav.open();
        this.sidenavMode = 'side';
      }
    }
  }
  onClick() {
    this.matDialog.open(_shared_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__.FeedbackFormComponent);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  decls: 17,
  vars: 6,
  consts: [[2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "100%", 3, "resize"], [3, "toggleSideBar"], [2, "flex", "1 1 0"], ["role", "navigation", 3, "mode", 4, "ngIf"], ["color", "primary", 1, "position"], [1, "flex-container"], ["mat-button", ""], [4, "ngIf"], ["role", "navigation", 3, "mode"], ["sidenav", ""], [3, "sidenavClickEvent", "sidenavLoadEvent"], ["mat-button", "", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleSideBar", function AppComponent_Template_app_header_toggleSideBar_1_listener() {
        return ctx.onToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2)(3, "mat-sidenav-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_mat_sidenav_4_Template, 3, 1, "mat-sidenav", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-toolbar", 4)(9, "div", 5)(10, "button", 6)(11, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "copyright");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Angular Apps 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AppComponent_div_15_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 4, ctx.isAuthenticated$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_11__.MatLegacyButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["mat-sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.position[_ngcontent-%COMP%] {\n  position: sticky; bottom: 0px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0;\n  justify-content: space-between;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxXQUFXO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ucG9zaXRpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5OyBib3R0b206IDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ 2443);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ 5933);
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/header/header.component */ 264);
/* harmony import */ var _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/sidebar/sidebar.component */ 7958);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 9355);
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expense/expense.component */ 2248);
/* harmony import */ var _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expense/edit-expense/edit-expense.component */ 3032);
/* harmony import */ var _expense_new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expense/new-expense/new-expense.component */ 4124);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ 2987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/auth.reducer */ 48);
/* harmony import */ var _child_route_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./child-route/dashboard-routing.module */ 9035);
/* harmony import */ var _child_route_expense_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./child-route/expense-routing.module */ 7784);
/* harmony import */ var _child_route_profile_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./child-route/profile-routing.module */ 8613);
/* harmony import */ var _store_expense_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/expense.reducer */ 7346);
/* harmony import */ var _expense_expense_history_expense_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expense/expense-history/expense-history.component */ 9757);
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/dialog/dialog.component */ 7355);
/* harmony import */ var _expense_expense_history_expense_table_expense_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./expense/expense-history/expense-table/expense-table.component */ 2019);
/* harmony import */ var _expense_expense_history_expense_expand_panel_expense_expand_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expense/expense-history/expense-expand-panel/expense-expand-panel.component */ 6491);
/* harmony import */ var _store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/dashboard.reducer */ 8368);
/* harmony import */ var _dashboard_monthly_expense_graph_monthly_expense_graph_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/monthly-expense-graph/monthly-expense-graph.component */ 4046);
/* harmony import */ var _dashboard_yearly_expense_graph_yearly_expense_graph_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/yearly-expense-graph/yearly-expense-graph.component */ 7406);
/* harmony import */ var _dashboard_yearly_expense_category_graph_yearly_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/yearly-expense-category-graph/yearly-expense-category-graph.component */ 6468);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _shared_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/feedback-form/feedback-form.component */ 357);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-apexcharts */ 3239);
/* harmony import */ var _dashboard_annual_expense_category_graph_annual_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/annual-expense-category-graph/annual-expense-category-graph.component */ 9096);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/loading/loading.component */ 8828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth-interceptor */ 6916);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2560);








































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HTTP_INTERCEPTORS,
    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__.AuthInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreModule.forRoot({
    auth: _store_auth_reducer__WEBPACK_IMPORTED_MODULE_11__.AuthReducer,
    expense: _store_expense_reducer__WEBPACK_IMPORTED_MODULE_15__.ExpenseReducer,
    dashboard: _store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_20__.DashboardReducer
  }), _child_route_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutingModule, _child_route_expense_routing_module__WEBPACK_IMPORTED_MODULE_13__.ExpenseRoutingModule, _child_route_profile_routing_module__WEBPACK_IMPORTED_MODULE_14__.ProfileRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_34__.ChartsModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__.LayoutModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__.NgApexchartsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_37__.ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _expense_expense_component__WEBPACK_IMPORTED_MODULE_7__.ExpenseComponent, _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__.EditExpenseComponent, _expense_new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_9__.NewExpenseComponent, _expense_expense_history_expense_history_component__WEBPACK_IMPORTED_MODULE_16__.ExpenseHistoryComponent, _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DialogComponent, _expense_expense_history_expense_table_expense_table_component__WEBPACK_IMPORTED_MODULE_18__.ExpenseTableComponent, _expense_expense_history_expense_expand_panel_expense_expand_panel_component__WEBPACK_IMPORTED_MODULE_19__.ExpenseExpandPanelComponent, _dashboard_monthly_expense_graph_monthly_expense_graph_component__WEBPACK_IMPORTED_MODULE_21__.MonthlyExpenseGraphComponent, _dashboard_yearly_expense_graph_yearly_expense_graph_component__WEBPACK_IMPORTED_MODULE_22__.YearlyExpenseGraphComponent, _dashboard_yearly_expense_category_graph_yearly_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_23__.YearlyExpenseCategoryGraphComponent, _shared_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_24__.FeedbackFormComponent, _dashboard_annual_expense_category_graph_annual_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_25__.AnnualExpenseCategoryGraphComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__.LoadingComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreRootModule, _child_route_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutingModule, _child_route_expense_routing_module__WEBPACK_IMPORTED_MODULE_13__.ExpenseRoutingModule, _child_route_profile_routing_module__WEBPACK_IMPORTED_MODULE_14__.ProfileRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_34__.ChartsModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__.LayoutModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_36__.NgApexchartsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_37__.ToastrModule]
  });
})();

/***/ }),

/***/ 2443:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 6221);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);













const _c0 = ["f"];
function LoginComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You must enter email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You must enter password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_progress_bar_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 26);
  }
}
class LoginComponent {
  constructor(route, authService, store) {
    this.route = route;
    this.authService = authService;
    this.store = store;
  }
  ngOnInit() {
    this.isBufferOn$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsBufferOn);
  }
  onSignUp() {
    this.route.navigate(["/signup"]);
  }
  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
  onClear() {
    this.loginForm.reset();
  }
  onSigninWithFacebook() {
    this.authService.signInWithFacebook();
  }
  onSigninWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    }
  },
  decls: 44,
  vars: 6,
  consts: [[2, "width", "100%", "height", "100%", "justify-content", "center", "align-items", "center", "column-gap", "20px"], [2, "margin-right", "20px", "max-width", "600px"], ["src", "./../assets/login_background.jpg"], [1, "mat-elevation-z8", 2, "max-width", "500px", "height", "fit-content", "justify-content", "space-around", "padding", "10px"], [1, "layout-column", 3, "ngSubmit"], ["f", "ngForm"], [1, "center"], ["type", "email", "name", "email", "matInput", "", "required", "", "email", "", "ngModel", ""], ["email", ""], [4, "ngIf"], ["type", "password", "name", "password", "matInput", "", "required", "", "ngModel", ""], ["password", ""], [2, "flex-direction", "row", "justify-content", "space-between"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "login-button", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "login-button", 3, "click"], [1, "center", 2, "padding-bottom", "10px", "padding-top", "10px"], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "click"], [2, "column-gap", "5px", "justify-content", "center", "align-items", "center"], [2, "width", "fit-content"], ["type", "button", "mat-button", "", 2, "flex", "1 1 35%", 3, "click"], ["src", "./../../../assets/btn_google_light_normal_ios.svg", 2, "padding-right", "0px"], [2, "font-size", "14px"], ["type", "button", "mat-button", "", "color", "primary", 2, "flex", "1 1 35%", 3, "click"], [2, "margin-right", "5px"], [2, "color", "darkblue", "font-size", "14px"], ["mode", "buffer", 4, "ngIf"], ["mode", "buffer"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 3)(5, "mat-card-content")(6, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enter your email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Enter password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
        return ctx.onClear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Don't have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
        return ctx.onSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Sign in with :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
        return ctx.onSigninWithGoogle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() {
        return ctx.onSigninWithFacebook();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-card-footer", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, LoginComponent_mat_progress_bar_42_Template, 1, 0, "mat-progress-bar", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r3.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 4, ctx.isBufferOn$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__.MatLegacyInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressBar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["mat-progress-bar[_ngcontent-%COMP%]{\n    margin: 30px;\n    width:100px;\n}\n\ndiv[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n    max-width: 600px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\n\n.layout-column[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 10px;\n    justify-content: space-around;\n}\n\n.login-button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-basis: 49%;\n}\n\n.center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content:center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtcHJvZ3Jlc3MtYmFye1xuICAgIG1hcmdpbjogMzBweDtcbiAgICB3aWR0aDoxMDBweDtcbn1cblxuZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWd7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5sYXlvdXQtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1iYXNpczogNDklO1xufVxuXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5933:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ 6221);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);














function SignupComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You must enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must be of minimum 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_mat_progress_bar_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 22);
  }
}
class SignupComponent {
  constructor(authService, store) {
    this.authService = authService;
    this.store = store;
  }
  ngOnInit() {
    this.initForm();
    this.isBufferOn$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsBufferOn);
  }
  initForm() {
    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tnc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }
  onClear() {
    this.signupForm.reset();
  }
  onSubmit() {
    this.authService.signup(this.signupForm.value);
  }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["app-signup"]],
  decls: 54,
  vars: 11,
  consts: [[1, "center", 2, "height", "100%", "width", "100%", "align-items", "center"], [2, "margin-right", "20px"], ["src", "./../assets/signup_background.jpg"], [1, "mat-elevation-z8", 2, "display", "flex", "width", "400px", "padding", "10px"], [1, "layout-column", 3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "formControlName", "displayName"], ["type", "email", "matInput", "", "formControlName", "email"], ["type", "password", "matInput", "", "formControlName", "password"], ["align", "end"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "confirmPassword"], ["color", "accent", "appearance", "fill"], ["matInput", "", "formControlName", "dob", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["color", "primary"], ["picker", ""], ["before", "true", "color", "accent", "formControlName", "tnc"], [1, "center", 2, "display", "flex", "justify-content", "space-between", "padding-top", "5px"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "signup-button", 3, "disabled"], ["type", "submit", "mat-raised-button", "", "color", "accent", 1, "signup-button", 3, "click"], [1, "center"], ["mode", "buffer", 4, "ngIf"], ["mode", "buffer"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "mat-card", 1)(2, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 3)(5, "mat-card-content")(6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Display name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "You must enter your display name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Enter your email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "You must enter your email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field")(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Enter your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SignupComponent_mat_error_25_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SignupComponent_mat_error_26_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Confirm your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "You must confirm your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 11)(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Enter your Date of Birth");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 12)(39, "mat-datepicker-toggle", 13)(40, "mat-datepicker", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "You must enter your date of birth");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Accept Terms and Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17)(47, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_49_listener() {
        return ctx.onClear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-card-footer", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, SignupComponent_mat_progress_bar_52_Template, 1, 0, "mat-progress-bar", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.signupForm.value.password.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.value.password.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.value.password.length > 0 && ctx.signupForm.value.password.length <= 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.signupForm.value.confirmPassword.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 9, ctx.isBufferOn$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyHint, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacySuffix, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__.MatLegacyInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckbox, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatLegacyProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["mat-progress-bar[_ngcontent-%COMP%]{\n    margin: 30px;\n    width:100px;\n}\n\ndiv[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n    max-width: 500px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\n\n.layout-column[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 10px;\n    justify-content: space-around;\n}\n\n.signup-button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-basis: 49%;\n}\n\n.center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content:center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wcm9ncmVzcy1iYXJ7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIHdpZHRoOjEwMHB4O1xufVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmltZ3tcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmxheW91dC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnNpZ251cC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1iYXNpczogNDklO1xufVxuXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9035:
/*!*********************************************************!*\
  !*** ./src/app/child-route/dashboard-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 9355);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-guard.service */ 7262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const dashboardRoute = [{
  path: '',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(dashboardRoute), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 7784:
/*!*******************************************************!*\
  !*** ./src/app/child-route/expense-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseRoutingModule": () => (/* binding */ ExpenseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../expense/expense.component */ 2248);
/* harmony import */ var _expense_new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expense/new-expense/new-expense.component */ 4124);
/* harmony import */ var _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expense/edit-expense/edit-expense.component */ 3032);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ 7262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const expenseRoutes = [{
  path: '',
  component: _expense_expense_component__WEBPACK_IMPORTED_MODULE_0__.ExpenseComponent,
  children: [{
    path: 'new',
    component: _expense_new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_1__.NewExpenseComponent
  }, {
    path: 'edit/:id',
    component: _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_2__.EditExpenseComponent
  }],
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}];
class ExpenseRoutingModule {}
ExpenseRoutingModule.ɵfac = function ExpenseRoutingModule_Factory(t) {
  return new (t || ExpenseRoutingModule)();
};
ExpenseRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ExpenseRoutingModule
});
ExpenseRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(expenseRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExpenseRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 8613:
/*!*******************************************************!*\
  !*** ./src/app/child-route/profile-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile/profile.component */ 7451);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-guard.service */ 7262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const profileRoutes = [{
  path: '',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class ProfileRoutingModule {}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
  return new (t || ProfileRoutingModule)();
};
ProfileRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfileRoutingModule
});
ProfileRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(profileRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 9096:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/annual-expense-category-graph/annual-expense-category-graph.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnualExpenseCategoryGraphComponent": () => (/* binding */ AnnualExpenseCategoryGraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AnnualExpenseCategoryGraphComponent {
  constructor() {}
  ngOnInit() {}
}
AnnualExpenseCategoryGraphComponent.ɵfac = function AnnualExpenseCategoryGraphComponent_Factory(t) {
  return new (t || AnnualExpenseCategoryGraphComponent)();
};
AnnualExpenseCategoryGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AnnualExpenseCategoryGraphComponent,
  selectors: [["app-annual-expense-category-graph"]],
  decls: 2,
  vars: 0,
  template: function AnnualExpenseCategoryGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "annual-expense-category-graph works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9355:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ 8530);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _yearly_expense_graph_yearly_expense_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yearly-expense-graph/yearly-expense-graph.component */ 7406);
/* harmony import */ var _yearly_expense_category_graph_yearly_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yearly-expense-category-graph/yearly-expense-category-graph.component */ 6468);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loading/loading.component */ 8828);















function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_2_mat_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_2_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_2_mat_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 25);
  }
}
function DashboardComponent_div_2_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, ctx_r5.currentYearExpense$) / _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, ctx_r5.previousYearExpense$) * 100), "1.2-2"), "% of ", ctx_r5.currentYear - 1, "");
  }
}
function DashboardComponent_div_2_mat_icon_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_2_mat_icon_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const expense_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](expense_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 2, expense_r9.expense, "INR"));
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-content")(10, "div", 6)(11, "div", 7)(12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6)(20, "span", 10)(21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, DashboardComponent_div_2_mat_icon_26_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, DashboardComponent_div_2_mat_icon_30_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, DashboardComponent_div_2_mat_icon_35_Template, 1, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-card-content")(43, "div", 6)(44, "div", 7)(45, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, DashboardComponent_div_2_span_52_Template, 6, 11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span", 16)(55, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](59, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, DashboardComponent_div_2_mat_icon_60_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, DashboardComponent_div_2_mat_icon_62_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-card-content")(72, "div", 19)(73, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Trending expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, DashboardComponent_div_2_div_75_Template, 8, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](79, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "mat-card-title")(82, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](87, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](88, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-card", 22)(90, "mat-card-content")(91, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "app-yearly-expense-graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "mat-grid-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](95, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "mat-card", 22)(100, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "app-yearly-expense-category-graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 31, ctx_r1.cardLayout).gridCol)("rowHeight", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 33, ctx_r1.cardLayout).rowheight);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 35, ctx_r1.cardLayout).smallCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 37, ctx_r1.cardLayout).smallCard.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 39, ctx_r1.currentMonth$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 41, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 44, ctx_r1.currentMonthExpense$), "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 49, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 51, ctx_r1.percentageIncreaseMom$)), "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 53, ctx_r1.currentMonthExpense$) !== 0 && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 55, ctx_r1.currentMonthExpense$) > _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 57, ctx_r1.previousMonthExpense$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 59, ctx_r1.currentMonthExpense$) !== 0 && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 61, ctx_r1.currentMonthExpense$) < _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 63, ctx_r1.previousMonthExpense$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 65, ctx_r1.currentMonthExpense$) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 67, ctx_r1.cardLayout).smallCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 69, ctx_r1.cardLayout).smallCard.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](49, 71, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 74, ctx_r1.currentYearExpense$), "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 76, ctx_r1.previousYearExpense$) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](57, 78, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 81, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](59, 83, ctx_r1.percentageIncreaseYoy$)), "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 85, ctx_r1.percentageIncreaseYoy$) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 87, ctx_r1.percentageIncreaseYoy$) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 89, ctx_r1.cardLayout).smallCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](68, 91, ctx_r1.cardLayout).smallCard.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 93, ctx_r1.trendingExpenseData$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 95, ctx_r1.cardLayout).smallCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](79, 97, ctx_r1.cardLayout).smallCard.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](84, 99, ctx_r1.cardLayout).gridCol)("rowHeight", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](85, 101, ctx_r1.cardLayout).rowheight);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](87, 103, ctx_r1.cardLayout).wideCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](88, 105, ctx_r1.cardLayout).wideCard.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 107, ctx_r1.cardLayout).gridCol)("rowHeight", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](95, 109, ctx_r1.cardLayout).rowheight);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](97, 111, ctx_r1.cardLayout).wideCard.col)("rowspan", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 113, ctx_r1.cardLayout).wideCard.row);
  }
}
class DashboardComponent {
  constructor(breakpointObserver, dashboardService, store, iconRegistry, sanitizer) {
    this.breakpointObserver = breakpointObserver;
    this.dashboardService = dashboardService;
    this.store = store;
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
    this.currentYear = new Date().getFullYear();
    /** Based on the screen size, switch from standard to one column per row */
    this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      matches
    }) => {
      if (matches) {
        return {
          gridCol: 1,
          smallCard: {
            row: 1,
            col: 1
          },
          wideCard: {
            row: 1.5,
            col: 1
          },
          mediumCard: {
            row: 1,
            col: 1
          },
          rowheight: '200px'
        };
      } else {
        return {
          gridCol: 4,
          smallCard: {
            row: 1,
            col: 1
          },
          wideCard: {
            row: 1.5,
            col: 4
          },
          mediumCard: {
            row: 2,
            col: 2
          },
          rowheight: '200px'
        };
      }
    }));
    this.iconRegistry.addSvgIcon('money', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/rupee-svgrepo-com.svg'));
    this.iconRegistry.addSvgIcon('graph', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/line-graph-part-2-svgrepo-com.svg'));
  }
  ngOnInit() {
    this.today = new Date().getMonth();
    this.currentMonth$ = this.dashboardService.getCurrentMonth();
    // this.store.dispatch(new dashboardActions.StartAnnualExpenseGraphLoading);
    // this.store.dispatch(new dashboardActions.StartCategoryExpenseGraphLoading);
    this.isDataUpdateInProgress$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsDataUpdateInProgress);
    this.allMonths$ = this.dashboardService.getAllMonths();
    // this.trendingExpenseData$ = this.dashboardService.getTrendingExpenses();
  }

  ngAfterViewInit() {
    this.currentMonthExpense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getCurrentMonthExpense);
    this.previousMonthExpense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getPreviousMonthExpense);
    this.currentYearExpense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getCurrentYearExpense);
    this.previousYearExpense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getPreviousYearExpense);
    this.previousMonthExpense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getPreviousMonthExpense);
    this.percentageIncreaseMom$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getExpenseMonthonMonth);
    this.percentageIncreaseYoy$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getExpenseYearonYear);
    this.trendingExpenseData$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getTrendingExpenses);
    this.categories$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getCategories);
  }
  onMonthChange(data) {
    const date = '01-' + data + '-' + new Date().getFullYear();
    const startDate = new Date(new Date().getFullYear(), new Date(date).getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date(date).getMonth() + 1, 0);
    // const monthExpenseDetail$ = this.dashboardService.calculateExpenseDataByDate(startDate, endDate);
    // this.dashboardService.monthlyExpenseChangeEvent.next(monthExpenseDetail$);
  }

  onChange(data) {
    // this.dashboardService.getCategorySummary(data);
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 4,
  vars: 6,
  consts: [[4, "ngIf"], ["class", "grid-container", 4, "ngIf"], [1, "grid-container"], [3, "cols", "rowHeight"], [3, "colspan", "rowspan"], [1, "dashboard-card", "mat-elevation-z4", "gradient-background"], [1, "flex-container"], [1, "flex-child"], [2, "color", "white", "font-size", "1.5em", "margin-bottom", "10px"], [2, "color", "white", "font-size", "1.5em", "font-weight", "bold", "margin-top", "10px"], [2, "color", "white", "margin-top", "10px", "display", "flex"], [2, "color", "white"], ["color", "warn", "style", "padding: 0;margin:0;", 4, "ngIf"], ["style", "color:white; padding: 0;margin:0;", 4, "ngIf"], ["style", "height: fit-content; width: fit-content; padding:10px", "svgIcon", "money", 4, "ngIf"], [2, "color", "white", "font-size", "1.5em", "padding-bottom", "10px"], [1, "flex-container", 2, "color", "white", "margin-top", "10px"], ["style", "color: white;", 4, "ngIf"], ["svgIcon", "graph", 2, "padding", "10px", "width", "fit-content", "height", "fit-content"], [1, "flex-column-container"], [2, "color", "white", "font-size", "1.5em", "padding-bottom", "20px"], ["style", "display: flex; color: white;", 4, "ngFor", "ngForOf"], [1, "dashboard-card", "mat-elevation-z4"], ["color", "warn", 2, "padding", "0", "margin", "0"], [2, "color", "white", "padding", "0", "margin", "0"], ["svgIcon", "money", 2, "height", "fit-content", "width", "fit-content", "padding", "10px"], [2, "display", "flex", "color", "white"], [2, "display", "flex", "flex-basis", "50%"], [2, "display", "flex", "flex-basis", "5%"], [2, "display", "flex", "flex-basis", "45%"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 102, 115, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.isDataUpdateInProgress$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.isDataUpdateInProgress$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTile, _yearly_expense_graph_yearly_expense_graph_component__WEBPACK_IMPORTED_MODULE_2__.YearlyExpenseGraphComponent, _yearly_expense_category_graph_yearly_expense_category_graph_component__WEBPACK_IMPORTED_MODULE_3__.YearlyExpenseCategoryGraphComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n\n.gradient-background[_ngcontent-%COMP%] {\n  background: #00B4DB;    \n  background: linear-gradient(to right, #0083B0, #00B4DB); \n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n.flex-child[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.flex-column-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding:20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOzs7QUFHQTtFQUNFLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtFQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7QUFDaEk7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMDBCNERCOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODNCMCwgIzAwQjREQik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uZmxleC1jaGlsZCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgtY29sdW1uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOjIwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4046:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/monthly-expense-graph/monthly-expense-graph.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyExpenseGraphComponent": () => (/* binding */ MonthlyExpenseGraphComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/util.service */ 1944);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard.service */ 8530);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 3808);






function MonthlyExpenseGraphComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MonthlyExpenseGraphComponent_canvas_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.graphData)("labels", ctx_r1.columnLabels)("chartType", ctx_r1.chartType)("options", ctx_r1.chartOptions)("colors", ctx_r1.chartColors)("legend", ctx_r1.chartLegend);
  }
}
class MonthlyExpenseGraphComponent {
  constructor(utilService, dashboardService) {
    this.utilService = utilService;
    this.dashboardService = dashboardService;
    this.graphData = [];
    this.columnLabels = [];
    this.chartColors = [{
      backgroundColor: []
    }];
    // @Input() legendPosition: string;
    this.isNoData = false;
    this.chartType = 'doughnut';
    this.chartLegend = true;
    this.chartOptions = {
      responsive: true,
      legend: {
        // position: 'chartArea',
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      }
    };
  }
  ngOnDestroy() {
    this.monthlyExpenseDetailSubscription.unsubscribe();
  }
  ngOnInit() {
    if (this.graphData.length === 0) {
      this.isNoData = true;
    }
    this.monthlyExpenseDetail$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(data => {
      this.graphData = [...data.monthlyCategoryExpense];
      this.columnLabels = [...data.categories];
      if (this.graphData.length != 0) {
        this.isNoData = false;
      }
      this.graphData.map(() => {
        this.chartColors[0].backgroundColor.push(this.utilService.getRandomColor());
      });
    });
    this.monthlyExpenseDetailSubscription = this.dashboardService.monthlyExpenseChangeEvent.subscribe(monthlyExpenseDetail => {
      monthlyExpenseDetail.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(data => {
        this.graphData = [...data.monthlyCategoryExpense];
        this.columnLabels = [...data.categories];
        if (this.graphData.length != 0) {
          this.isNoData = false;
        } else {
          this.isNoData = true;
        }
        this.graphData.map(() => {
          this.chartColors[0].backgroundColor.push(this.utilService.getRandomColor());
        });
      });
    });
  }
}
MonthlyExpenseGraphComponent.ɵfac = function MonthlyExpenseGraphComponent_Factory(t) {
  return new (t || MonthlyExpenseGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService));
};
MonthlyExpenseGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MonthlyExpenseGraphComponent,
  selectors: [["app-monthly-expense-graph"]],
  inputs: {
    monthlyExpenseDetail$: "monthlyExpenseDetail$"
  },
  decls: 4,
  vars: 2,
  consts: [["style", "color: darkblue;", 4, "ngIf"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "colors", "legend", 4, "ngIf"], [2, "color", "darkblue"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "colors", "legend"]],
  template: function MonthlyExpenseGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthlyExpenseGraphComponent_h2_2_Template, 2, 0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthlyExpenseGraphComponent_canvas_3_Template, 1, 6, "canvas", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNoData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective],
  styles: ["canvas[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vbnRobHktZXhwZW5zZS1ncmFwaC9tb250aGx5LWV4cGVuc2UtZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6468:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/yearly-expense-category-graph/yearly-expense-category-graph.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearlyExpenseCategoryGraphComponent": () => (/* binding */ YearlyExpenseCategoryGraphComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/dashboard.service */ 8530);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ 3239);







const _c0 = ["chart"];
function YearlyExpenseCategoryGraphComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r3.Name);
  }
}
function YearlyExpenseCategoryGraphComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r4);
  }
}
function YearlyExpenseCategoryGraphComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r2.series)("chart", ctx_r2.chartOptions.chart)("dataLabels", ctx_r2.chartOptions.dataLabels)("plotOptions", ctx_r2.chartOptions.plotOptions)("yaxis", ctx_r2.chartOptions.yaxis)("xaxis", ctx_r2.chartOptions.xaxis)("fill", ctx_r2.chartOptions.fill)("title", ctx_r2.chartOptions.title);
  }
}
class YearlyExpenseCategoryGraphComponent {
  constructor(dashboardService, expenseStore) {
    this.dashboardService = dashboardService;
    this.expenseStore = expenseStore;
    this.monthName = [];
    this.expense = [];
    this.dashboardService.getAnnualExpenseDetailByCategory('Vegetables').subscribe(expenseDetail => {
      expenseDetail.map(expense => {
        this.monthName.push(expense.month);
        this.expense.push(expense.amount);
      });
      this.series = [{
        name: "Expense",
        data: [...this.expense]
      }];
      this.chartOptions = {
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },

        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: [...this.monthName],
          position: "top",
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: true
          },
          labels: {
            show: true
          }
        },
        title: {
          text: 'Category Analysis',
          offsetY: -40
        }
      };
    });
  }
  ngOnInit() {
    // this.categories$ = this.expenseStore.select(appReducer.getCategory);
    // this.years$ = this.dashboardService.getYears();
    this.dashboardService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(categories => this.categories = categories);
  }
  ngOnDestroy() {
    // this.categorySummaryInitSubscription.unsubscribe();
    // this.chartLabelSubscription.unsubscribe();
    // this.categorySummarySubscription.unsubscribe();
  }
  onCategoryChange(data) {
    this.dashboardService.getAnnualExpenseDetailByCategory(data).subscribe(expenseDetail => {
      this.monthName = [];
      this.expense = [];
      expenseDetail.map(expense => {
        this.monthName.push(expense.month);
        this.expense.push(expense.amount);
      });
      this.series[0].data = [...this.expense];
      this.chart.updateSeries(this.series);
    });
    // this.dashboardService.getAnnualExpenseDetailByCategory(data).subscribe(
    //   (expenseDetail) => {
    //     this.monthName = [];
    //     this.expense = [];
    //     expenseDetail.map(
    //       (expense) => {
    //         this.monthName.push(expense.month);
    //         this.expense.push(expense.amount);
    //       }
    //     );
    //     this.series[0].data = [...this.expense];
    //     this.chart.updateSeries(this.series);
    //   }
    // );
    // this.years$ = this.dashboardService.getYears();
  }

  onYearChange(data) {}
}
YearlyExpenseCategoryGraphComponent.ɵfac = function YearlyExpenseCategoryGraphComponent_Factory(t) {
  return new (t || YearlyExpenseCategoryGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
YearlyExpenseCategoryGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YearlyExpenseCategoryGraphComponent,
  selectors: [["app-yearly-expense-category-graph"]],
  viewQuery: function YearlyExpenseCategoryGraphComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 17,
  vars: 5,
  consts: [[1, "flex-container"], [2, "justify-content", "flex-start end", "flex-basis", "50%", "row-gap", "10px", "color", "darkblue", "padding", "0px", "margin", "0px"], [2, "display", "flex", "justify-content", "flex-end", "flex-basis", "50%", "flex-wrap", "nowrap", "row-gap", "10px"], [2, "color", "darkblue", "margin-right", "15px"], ["name", "category", "id", "category", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "year", "id", "year", 3, "change"], [4, "ngIf"], [3, "value"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "fill", "title"], ["chart", ""]],
  template: function YearlyExpenseCategoryGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Category Analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function YearlyExpenseCategoryGraphComponent_Template_select_change_7_listener($event) {
        return ctx.onCategoryChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, YearlyExpenseCategoryGraphComponent_option_8_Template, 2, 2, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Years");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function YearlyExpenseCategoryGraphComponent_Template_select_change_12_listener($event) {
        return ctx.onYearChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, YearlyExpenseCategoryGraphComponent_option_13_Template, 2, 2, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, YearlyExpenseCategoryGraphComponent_div_16_Template, 3, 8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 3, ctx.years$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.series != undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n  }\n  \n  .flex-child[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n    justify-content: space-evenly;\n    align-content: center;\n  }\n  \n  .flex-column-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3llYXJseS1leHBlbnNlLWNhdGVnb3J5LWdyYXBoL3llYXJseS1leHBlbnNlLWNhdGVnb3J5LWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIFxuICAuZmxleC1jaGlsZCB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZsZXgtY29sdW1uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7406:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/yearly-expense-graph/yearly-expense-graph.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearlyExpenseGraphComponent": () => (/* binding */ YearlyExpenseGraphComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/dashboard.service */ 8530);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 3239);




class YearlyExpenseGraphComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.annualExpense = [];
    this.months = [];
  }
  ngOnInit() {
    this.dashboardService.getAnnualExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(data => {
      data.forEach(element => {
        this.annualExpense.push(element.amount);
        this.months.push(element.month);
      });
      this.chartOptions = {
        series: [{
          name: "Amount",
          data: [...this.annualExpense]
        }],
        chart: {
          height: 350,
          type: "line"
        },
        stroke: {
          width: 7,
          curve: "smooth"
        },
        xaxis: {
          type: "category",
          categories: [...this.months]
        },
        title: {
          text: "Last 12 Months Expense Detail",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        yaxis: {
          min: Math.min(...this.annualExpense),
          max: Math.max(...this.annualExpense),
          title: {
            text: "Expense Amount"
          }
        }
      };
    });
  }
  ngAfterContentInit() {}
}
YearlyExpenseGraphComponent.ɵfac = function YearlyExpenseGraphComponent_Factory(t) {
  return new (t || YearlyExpenseGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
};
YearlyExpenseGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: YearlyExpenseGraphComponent,
  selectors: [["app-yearly-expense-graph"]],
  decls: 2,
  vars: 10,
  consts: [["id", "chart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title", "markers", "yaxis", "fill"]],
  template: function YearlyExpenseGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "apx-chart", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis)("fill", ctx.chartOptions.fill);
    }
  },
  dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3032:
/*!****************************************************************!*\
  !*** ./src/app/expense/edit-expense/edit-expense.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditExpenseComponent": () => (/* binding */ EditExpenseComponent)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _store_expense_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/expense.action */ 8922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/expense.service */ 2797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);














const _c0 = ["f"];
function EditExpenseComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r3.Name);
  }
}
class EditExpenseComponent {
  constructor(store, expenseService) {
    this.store = store;
    this.expenseService = expenseService;
  }
  ngOnInit() {
    this.categories$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getCategories);
    this.expense$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getEditElement);
  }
  onSave() {
    let expenseId = '';
    this.expense$.subscribe(expense => expenseId = expense.id);
    this.expenseService.updateExpense({
      id: expenseId,
      userId: this.editForm.value.userId,
      itemName: this.editForm.value.ItemName,
      price: this.editForm.value.Price,
      category: this.editForm.value.Category,
      comment: this.editForm.value.Comment,
      purchaseDate: this.editForm.value.PurchaseDate,
      edited: true
    });
    this.expenseService.expenseTabSelect.next(0);
  }
  onCancel() {
    this.expenseService.expenseTabSelect.next(0);
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetEditModeOff());
  }
}
EditExpenseComponent.ɵfac = function EditExpenseComponent_Factory(t) {
  return new (t || EditExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseService));
};
EditExpenseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EditExpenseComponent,
  selectors: [["app-edit-expense"]],
  viewQuery: function EditExpenseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
    }
  },
  decls: 41,
  vars: 21,
  consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "flex", "col-gap-5"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "margin", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "margin", 3, "click"], [1, "mat-elevation-z8", "margin"], ["type", "text", "matInput", "", "name", "ItemName", 3, "ngModel"], ["type", "number", "matInput", "", "name", "Price", 3, "ngModel"], ["name", "Category", 3, "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent", "appearance", "fill"], ["matInput", "", "name", "PurchaseDate", 3, "ngModel", "matDatepicker"], ["matSuffix", "", 3, "for"], ["color", "primary"], ["picker", ""], [2, "display", "flex", "flex-direction", "column"], [1, "margin"], ["matInput", "", "name", "Comment", 3, "ngModel"], [3, "value"]],
  template: function EditExpenseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditExpenseComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditExpenseComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card", 5)(8, "mat-form-field")(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Item Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditExpenseComponent_mat_option_21_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "You must select category");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 10)(26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Enter date of purchase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "mat-datepicker-toggle", 12)(31, "mat-datepicker", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "You must enter date of purchase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-card-footer", 15)(36, "mat-form-field", 16)(37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Leave a comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, ctx.expense$).itemName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, ctx.expense$).price);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 13, ctx.expense$).category);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 15, ctx.categories$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 17, ctx.expense$).purchaseDate)("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 19, ctx.expense$).comment);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacySuffix, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__.MatLegacyInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__.MatLegacyOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".margin[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n\n.flex[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.col-gap-5[_ngcontent-%COMP%] {\n    column-gap: 5px;\n}\n\n.col-gap-20[_ngcontent-%COMP%] {\n    column-gap: 20px;\n}\n\ndiv[_ngcontent-%COMP%]{\n    display:flex;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    column-gap: 20px;\n    align-items: baseline;\n    padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZW5zZS9lZGl0LWV4cGVuc2UvZWRpdC1leHBlbnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2wtZ2FwLTUge1xuICAgIGNvbHVtbi1nYXA6IDVweDtcbn1cblxuLmNvbC1nYXAtMjAge1xuICAgIGNvbHVtbi1nYXA6IDIwcHg7XG59XG5cbmRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6491:
/*!************************************************************************************************!*\
  !*** ./src/app/expense/expense-history/expense-expand-panel/expense-expand-panel.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseExpandPanelComponent": () => (/* binding */ ExpenseExpandPanelComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/dialog/dialog.component */ 7355);
/* harmony import */ var _store_expense_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../store/expense.action */ 8922);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/expense.service */ 2797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 7591);











function ExpenseExpandPanelComponent_mat_accordion_0_mat_form_field_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "textarea", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r1.Comment);
  }
}
function ExpenseExpandPanelComponent_mat_accordion_0_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* Item has been edited");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseExpandPanelComponent_mat_accordion_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-accordion")(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ExpenseExpandPanelComponent_mat_accordion_0_mat_form_field_18_Template, 4, 1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ExpenseExpandPanelComponent_mat_accordion_0_mat_hint_20_Template, 2, 0, "mat-hint", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", element_r1.ItemName, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, element_r1.PurchaseDate, "MMMM-d"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r1.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r1.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r1.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r1.Comment != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r1.isEdited == true);
  }
}
class ExpenseExpandPanelComponent {
  constructor(expenseService, store, matDialog) {
    this.expenseService = expenseService;
    this.store = store;
    this.matDialog = matDialog;
    this.datasource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource();
  }
  ngOnInit() {}
  confirmDelete(expenseId) {
    const dialogRef = this.matDialog.open(src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      data: {
        dialogType: 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.expenseService.deleteExpense(expenseId);
      }
    });
  }
  openComment(expenseComment) {
    const dialogRef = this.matDialog.open(src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      data: {
        dialogType: 2,
        comment: expenseComment
      }
    });
  }
  onEdit(element) {
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetEditModeOn());
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetEditExpenseElement(element));
    this.expenseService.expenseTabSelect.next(2);
  }
}
ExpenseExpandPanelComponent.ɵfac = function ExpenseExpandPanelComponent_Factory(t) {
  return new (t || ExpenseExpandPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialog));
};
ExpenseExpandPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExpenseExpandPanelComponent,
  selectors: [["app-expense-expand-panel"]],
  inputs: {
    displayedColumn$: "displayedColumn$",
    datasource: "datasource"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "disabled", "", 3, "value"], [4, "ngIf"]],
  template: function ExpenseExpandPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ExpenseExpandPanelComponent_mat_accordion_0_Template, 21, 10, "mat-accordion", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.datasource.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyHint, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInput, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9757:
/*!**********************************************************************!*\
  !*** ./src/app/expense/expense-history/expense-history.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseHistoryComponent": () => (/* binding */ ExpenseHistoryComponent)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _store_expense_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/expense.action */ 8922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/expense.service */ 2797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _expense_table_expense_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-table/expense-table.component */ 2019);














const _c0 = ["searchForm"];
const _c1 = ["expenseTable"];
function ExpenseHistoryComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ExpenseHistoryComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-expense-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasource", ctx_r4.datasource)("displayedColumn$", ctx_r4.displayedColumn$);
  }
}
class ExpenseHistoryComponent {
  constructor(expenseService, store) {
    this.expenseService = expenseService;
    this.store = store;
    this.datasource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTableDataSource();
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetLoadingOn());
  }
  ngOnInit() {
    this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    this.isLoading$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getExpenseLoading);
    this.displayedColumn$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getDisplayedColumns);
    // Below subscription need to be unsubscribed else will be too many subscription
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getExpenses).subscribe(data => this.datasource.data = [...data]);
  }
  ngAfterViewInit() {
    setTimeout(() => this.filterData(), 0);
    this.searchForm.valueChanges.subscribe(result => {
      this.filterStartDate = this.searchForm.value.endDate;
      this.filterEndDate = this.searchForm.value.startDate;
    });
  }
  // ngAfterContentInit() {
  //   // console.log('ngDoCheck');
  //   this.store.select(appReducer.getExpenses)
  //   .subscribe(
  //     data => this.datasource.data = [...data]
  //   )
  // }
  filterData() {
    let startDate;
    let endDate;
    if (this.searchForm !== undefined) {
      startDate = this.searchForm.value.startDate === undefined ? this.startDate : this.searchForm.value.startDate;
      endDate = this.searchForm.value.endDate === undefined ? this.endDate : this.searchForm.value.endDate;
    } else {
      startDate = this.startDate;
      endDate = this.endDate;
    }
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetSearchDate(startDate, endDate));
    this.expenseService.refreshExpenses();
  }
}
ExpenseHistoryComponent.ɵfac = function ExpenseHistoryComponent_Factory(t) {
  return new (t || ExpenseHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
ExpenseHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ExpenseHistoryComponent,
  selectors: [["app-expense-history"]],
  viewQuery: function ExpenseHistoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.expenseTable = _t.first);
    }
  },
  decls: 25,
  vars: 14,
  consts: [[2, "display", "flex", "flex-direction", "column", "flex", "1 1 100%"], [1, "margin"], [2, "display", "flex", "flex-direction", "row", "column-gap", "10px", 3, "ngSubmit"], ["searchForm", "ngForm"], ["color", "accent", "appearance", "fill", 1, "height"], ["matInput", "", "name", "startDate", 3, "ngModel", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["color", "primary"], ["startpicker", ""], ["matInput", "", "name", "endDate", 3, "ngModel", "min", "matDatepicker"], ["endpicker", ""], ["mat-mini-fab", "", "color", "primary", "type", "submit"], ["class", "margin", 4, "ngIf"], [2, "color", "darkblue"], [3, "datasource", "displayedColumn$"]],
  template: function ExpenseHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ExpenseHistoryComponent_Template_form_ngSubmit_2_listener() {
        return ctx.filterData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 5)(8, "mat-datepicker-toggle", 6)(9, "mat-datepicker", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9)(15, "mat-datepicker-toggle", 6)(16, "mat-datepicker", 7, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11)(19, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ExpenseHistoryComponent_section_21_Template, 3, 0, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ExpenseHistoryComponent_section_23_Template, 2, 2, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.startDate)("max", ctx.filterStartDate)("matDatepicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.endDate)("min", ctx.filterEndDate)("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 10, ctx.isLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 12, ctx.isLoading$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacySuffix, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _expense_table_expense_table_component__WEBPACK_IMPORTED_MODULE_3__.ExpenseTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".margin[_ngcontent-%COMP%]{\n    margin: 20px;\n}\n\n\n.height[_ngcontent-%COMP%]{\n    height: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZW5zZS9leHBlbnNlLWhpc3RvcnkvZXhwZW5zZS1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2lue1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuXG4uaGVpZ2h0e1xuICAgIGhlaWdodDogMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2019:
/*!**********************************************************************************!*\
  !*** ./src/app/expense/expense-history/expense-table/expense-table.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseTableComponent": () => (/* binding */ ExpenseTableComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/dialog/dialog.component */ 7355);
/* harmony import */ var _store_expense_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../store/expense.action */ 8922);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/expense.service */ 2797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);












function ExpenseTableComponent_mat_header_cell_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "(edited)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpenseTableComponent_mat_cell_4_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r10.itemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r10.edited);
  }
}
function ExpenseTableComponent_mat_header_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r12.price);
  }
}
function ExpenseTableComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Purchase Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r13.purchaseDate, "dd-MM-yyyy"));
  }
}
function ExpenseTableComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_13_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseTableComponent_mat_cell_13_mat_icon_3_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.openComment(element_r14.comment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpenseTableComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExpenseTableComponent_mat_cell_13_mat_icon_3_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseTableComponent_mat_cell_13_Template_mat_icon_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const element_r14 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.onEdit(element_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseTableComponent_mat_cell_13_Template_mat_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const element_r14 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.confirmDelete(element_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r14.comment !== "");
  }
}
function ExpenseTableComponent_mat_header_row_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
  }
}
function ExpenseTableComponent_mat_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
class ExpenseTableComponent {
  constructor(expenseService, store, matDialog) {
    this.expenseService = expenseService;
    this.store = store;
    this.matDialog = matDialog;
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }
  confirmDelete(expenseId) {
    const dialogRef = this.matDialog.open(src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      data: {
        dialogType: 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.expenseService.deleteExpense(expenseId);
      }
    });
  }
  openComment(expenseComment) {
    const dialogRef = this.matDialog.open(src_app_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      data: {
        dialogType: 2,
        comment: expenseComment
      }
    });
  }
  onEdit(element) {
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetEditModeOn());
    this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_1__.SetEditExpenseElement(element));
    this.expenseService.expenseTabSelect.next(2);
  }
}
ExpenseTableComponent.ɵfac = function ExpenseTableComponent_Factory(t) {
  return new (t || ExpenseTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_expense_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialog));
};
ExpenseTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExpenseTableComponent,
  selectors: [["app-expense-table"]],
  viewQuery: function ExpenseTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_6__.MatLegacyPaginator, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  inputs: {
    displayedColumn$: "displayedColumn$",
    datasource: "datasource"
  },
  decls: 19,
  vars: 9,
  consts: [[1, "firefox-bug", "mat-elevation-z8", "margin", "flex-col"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "itemName"], [4, "matHeaderCellDef"], ["style", "display: flex;column-gap: 5px;", 4, "matCellDef"], ["matColumnDef", "price"], [4, "matCellDef"], ["matColumnDef", "purchaseDate"], ["matColumnDef", "category"], ["style", "display: flex;", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [2, "display", "flex", "column-gap", "5px"], ["class", "font", 4, "ngIf"], [1, "font"], [2, "display", "flex"], [1, "flex-row"], ["class", "iconSize", "matTooltip", "Click to check comments", "color", "primary", 3, "click", 4, "ngIf"], ["matTooltip", "Edit expense item", "color", "primary", 1, "iconSize", 3, "click"], ["matTooltip", "Delete Expense item", "color", "warn", 1, "iconSize", 3, "click"], ["matTooltip", "Click to check comments", "color", "primary", 1, "iconSize", 3, "click"]],
  template: function ExpenseTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExpenseTableComponent_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExpenseTableComponent_mat_cell_4_Template, 3, 2, "mat-cell", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExpenseTableComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExpenseTableComponent_mat_cell_7_Template, 2, 1, "mat-cell", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExpenseTableComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ExpenseTableComponent_mat_cell_10_Template, 3, 4, "mat-cell", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ExpenseTableComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ExpenseTableComponent_mat_cell_13_Template, 8, 2, "mat-cell", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ExpenseTableComponent_mat_header_row_14_Template, 1, 0, "mat-header-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ExpenseTableComponent_mat_row_16_Template, 1, 0, "mat-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "mat-paginator", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.datasource);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 4, ctx.displayedColumn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 6, ctx.displayedColumn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_9__.MatLegacyRow, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_6__.MatLegacyPaginator, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatLegacyTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [".iconSize[_ngcontent-%COMP%] {\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.alignIcon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    justify-content:flex-end!important;\n    margin-right: 10px;\n}\n\n.font[_ngcontent-%COMP%]{\n    color: darkgray;\n    font-size: 12px;\n    \n    margin-left: 10px;\n}\n\n.firefox-bug[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n.flex-row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    column-gap: 5px;\n    justify-content: flex-end;\n    flex: 1 1 100%;\n}\n\n.flex-col[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZW5zZS9leHBlbnNlLWhpc3RvcnkvZXhwZW5zZS10YWJsZS9leHBlbnNlLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmljb25TaXplIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxpZ25JY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb250e1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZmlyZWZveC1idWcgPiB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLmZsZXgtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbn1cblxuLmZsZXgtY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2248:
/*!**********************************************!*\
  !*** ./src/app/expense/expense.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseComponent": () => (/* binding */ ExpenseComponent)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/expense.service */ 2797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-expense/edit-expense.component */ 3032);
/* harmony import */ var _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-expense/new-expense.component */ 4124);
/* harmony import */ var _expense_history_expense_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-history/expense-history.component */ 9757);









function ExpenseComponent_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-new-expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ExpenseComponent_mat_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-edit-expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ExpenseComponent {
  constructor(expenseService, store) {
    this.expenseService = expenseService;
    this.store = store;
    this.selectedIndex = 0;
  }
  ngOnInit() {
    this.expenseService.expenseTabSelect.subscribe(index => {
      this.selectedIndex = index;
    });
    this.isEditMode$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getEditMode);
  }
}
ExpenseComponent.ɵfac = function ExpenseComponent_Factory(t) {
  return new (t || ExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_1__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
ExpenseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ExpenseComponent,
  selectors: [["app-expense"]],
  decls: 7,
  vars: 7,
  consts: [["animationDuration", "0", 3, "selectedIndex", "selectedIndexChange"], ["label", "Expense History"], ["label", "Add New Expense", 4, "ngIf"], ["label", "Edit Expense", 4, "ngIf"], ["label", "Add New Expense"], ["label", "Edit Expense"]],
  template: function ExpenseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function ExpenseComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
        return ctx.selectedIndex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-expense-history");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ExpenseComponent_mat_tab_3_Template, 2, 0, "mat-tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ExpenseComponent_mat_tab_5_Template, 2, 0, "mat-tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, ctx.isEditMode$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, ctx.isEditMode$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTabGroup, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_8__.MatLegacyTab, _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_2__.EditExpenseComponent, _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_3__.NewExpenseComponent, _expense_history_expense_history_component__WEBPACK_IMPORTED_MODULE_4__.ExpenseHistoryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4124:
/*!**************************************************************!*\
  !*** ./src/app/expense/new-expense/new-expense.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewExpenseComponent": () => (/* binding */ NewExpenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/expense.service */ 2797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);














function NewExpenseComponent_mat_card_2_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r6.Name);
  }
}
function NewExpenseComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-form-field")(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter the name of the item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "You must enter name of the item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Enter the price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "You must enter price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NewExpenseComponent_mat_card_2_mat_option_15_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "You must select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 10)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Enter date of purchase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 11)(23, "mat-datepicker-toggle", 12)(24, "mat-datepicker", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "You must enter date of purchase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field")(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Leave a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-card-footer")(33, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewExpenseComponent_mat_card_2_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onDelete(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx_r0.categories$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
  }
}
function NewExpenseComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.newExpenseForm.valid);
  }
}
class NewExpenseComponent {
  constructor(expenseService, store) {
    this.expenseService = expenseService;
    this.store = store;
  }
  ngOnInit() {
    this.initForm();
    this.categories$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getCategories);
  }
  initForm() {
    this.newExpenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      expenseItemArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormArray([])
    });
  }
  addNewExpenseItem() {
    this.newExpenseForm.get('expenseItemArray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      purchaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      itemPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('')
    }));
  }
  onDelete(index) {
    this.newExpenseForm.get('expenseItemArray').removeAt(index);
  }
  onSubmit() {
    this.expenseService.saveExpenses(this.newExpenseForm.value.expenseItemArray);
    const expenseItemArrayLength = this.newExpenseForm.get('expenseItemArray')['controls'].length;
    for (let i = 0; i < expenseItemArrayLength; i++) {
      this.onDelete(i);
    }
    this.expenseService.expenseTabSelect.next(0);
  }
}
NewExpenseComponent.ɵfac = function NewExpenseComponent_Factory(t) {
  return new (t || NewExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_1__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
NewExpenseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NewExpenseComponent,
  selectors: [["app-new-expense"]],
  decls: 6,
  vars: 3,
  consts: [[3, "formGroup", "ngSubmit"], ["formArrayName", "expenseItemArray"], ["class", "margin mat-elevation-z2 flex-container", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "class", "margin", 3, "disabled", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "margin", 3, "click"], [1, "margin", "mat-elevation-z2", "flex-container", 3, "formGroupName"], ["matInput", "", "type", "text", "formControlName", "itemName"], ["matInput", "", "type", "number", "formControlName", "itemPrice"], ["formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent", "appearance", "fill"], ["matInput", "", "formControlName", "purchaseDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["color", "primary"], ["picker", ""], ["matInput", "", "formControlName", "comment"], ["type", "button", "mat-raised-button", "", "color", "warn", 1, "margin", 3, "click"], [3, "value"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "margin", 3, "disabled"]],
  template: function NewExpenseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewExpenseComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NewExpenseComponent_mat_card_2_Template, 35, 6, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NewExpenseComponent_button_3_Template, 2, 1, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewExpenseComponent_Template_button_click_4_listener() {
        return ctx.addNewExpenseItem();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add New Expense");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newExpenseForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.newExpenseForm.get("expenseItemArray")["controls"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newExpenseForm.get("expenseItemArray")["controls"].length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacySuffix, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_8__.MatLegacyInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__.MatLegacyOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".margin[_ngcontent-%COMP%]{\n    margin: 20px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZW5zZS9uZXctZXhwZW5zZS9uZXctZXhwZW5zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW57XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2987:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

























class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_4__.MatLegacyInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCheckboxModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressBarModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatLegacySnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_19__.MatLegacyPaginatorModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_21__.MatLegacyDialogModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatLegacyProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_4__.MatLegacyInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCheckboxModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressBarModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatLegacySnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_19__.MatLegacyPaginatorModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_21__.MatLegacyDialogModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatLegacyProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_4__.MatLegacyInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCheckboxModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressBarModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatLegacySnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_19__.MatLegacyPaginatorModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_21__.MatLegacyDialogModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatLegacyProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule],
    exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_4__.MatLegacyInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCheckboxModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressBarModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatLegacySnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_13__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_15__.MatLegacyMenuModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTableModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_19__.MatLegacyPaginatorModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_21__.MatLegacyDialogModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatLegacyProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule]
  });
})();

/***/ }),

/***/ 264:
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/app.reducer */ 4840);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 6221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);











function HeaderComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
  }
}
function HeaderComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class HeaderComponent {
  constructor(store, authService) {
    this.store = store;
    this.authService = authService;
    this.toggleSideBar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.isAuthenticated$ = this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsAuthenticated);
  }
  onLogout() {
    this.authService.logout();
  }
  onClick() {
    this.toggleSideBar.emit();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  outputs: {
    toggleSideBar: "toggleSideBar"
  },
  decls: 20,
  vars: 18,
  consts: [["color", "primary"], [1, "flex-container"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", "routerLink", "/dashboard", 2, "color", "white"], ["style", "color: white;", "mat-button", "", "routerLink", "/login", "color", "primary", 4, "ngIf"], ["style", "color: white;", "mat-button", "", "routerLink", "/signup", "color", "primary", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "primary", "routerLink", "profile", 4, "ngIf"], ["mat-menu-item", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/login", "color", "primary", 2, "color", "white"], ["mat-button", "", "routerLink", "/signup", "color", "primary", 2, "color", "white"], ["mat-mini-fab", "", "color", "primary", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "color", "primary", "routerLink", "profile"], [2, "color", "darkblue"], ["mat-menu-item", "", "color", "primary", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_button_3_Template, 3, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Expense Tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HeaderComponent_button_8_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 2, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeaderComponent_button_12_Template, 3, 1, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-menu", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_button_16_Template, 3, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HeaderComponent_button_18_Template, 3, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 14, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 16, ctx.isAuthenticated$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_9__.MatLegacyMenu, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_9__.MatLegacyMenuItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_9__.MatLegacyMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".margin[_ngcontent-%COMP%]{\n    margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1 1 0;\n    width: 100%;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7958:
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);






class SidebarComponent {
  constructor(store) {
    this.store = store;
    this.sidenavClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.sidenavLoadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => this.sidenavLoadEvent.emit(), 0);
  }
  onClick() {
    this.sidenavClickEvent.emit();
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  outputs: {
    sidenavClickEvent: "sidenavClickEvent",
    sidenavLoadEvent: "sidenavLoadEvent"
  },
  decls: 11,
  vars: 0,
  consts: [["role", "list"], ["mat-list-item", "", "routerLink", "/dashboard", 3, "click"], ["matListIcon", "", "color", "primary"], [2, "font-size", "15px", "color", "blue"], ["mat-list-item", "", "routerLink", "/expense", 3, "click"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_1_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_6_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Expense");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_3__.MatLegacyNavList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_3__.MatLegacyListItem, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_3__.MatLegacyListIconCssMatStyler, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2aWdhdGlvbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHIiwic291cmNlc0NvbnRlbnQiOlsiLyogYVxuOmhvdmVyXG46YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7451:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileComponent {
  constructor() {}
  ngOnInit() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)();
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 2,
  vars: 0,
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7262:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);



class AuthGuard {
  constructor(store) {
    this.store = store;
  }
  canActivate(route, state) {
    // return false;
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getIsAuthenticated);
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6916:
/*!**********************************************!*\
  !*** ./src/app/services/auth-interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6221);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(authRequest);
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac
});

/***/ }),

/***/ 6221:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/auth.action */ 5490);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ 8530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);








class AuthService {
  constructor(store, snackbar, router, dashboardService, http) {
    this.store = store;
    this.snackbar = snackbar;
    this.router = router;
    this.dashboardService = dashboardService;
    this.http = http;
    this.token = '';
  }
  getToken() {
    return this.token;
  }
  autoLogin() {
    // const result = this.cookieService.get('user');
    // if (result != "") {
    //   const user = JSON.parse(result);
    //   if (new Date(user.user.stsTokenManager.expirationTime) > new Date()) {
    //     // this.expenseService.getCategories().then(
    //     //   () => {
    //     //     this.store.dispatch(new authActions.Authenticate(user.user.uid, ''));
    //     //     // this.router.navigate(['/dashboard']);
    //     //     this.dashboardService.setExpenseDetail();
    //     //   }
    //     // );
    //   }
    // }
    // else {
    //   this.router.navigate(['/login']);
    // }
  }
  login(email, password) {
    this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StartBuffer());
    this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StartAuthentication());
    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + "authenticate", {
      userName: email,
      password: password
    }).subscribe(response => {
      this.token = response.token;
      if (response.token != "" || response.token != null) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + "user/" + email).subscribe(user => {
          const displayName = user.firstName + " " + user.lastName;
          this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StopBuffer());
          this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.Authenticate(user.id, displayName));
          this.dashboardService.initLoadData();
          this.router.navigate(['/dashboard']);
        }, error => {
          this.snackbar.open(response.message, 'Dismiss', {
            duration: 5000
          });
          this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StopBuffer());
          this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StopAuthentication());
        });
      }
    });
  }
  signup(userDetail) {
    this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.StartBuffer());
    // this.afAuth.createUserWithEmailAndPassword(userDetail.email, userDetail.password)
    //   .then(
    //     result => {
    //       const profile = {
    //         displayName: userDetail.displayName,
    //         photoURL: ''
    //       };
    //       result.user.updateProfile(profile).then(
    //         (data) => { console.log('update profile'); console.log(data) }
    //       );
    //       // this.expenseService.getCategories();
    //       this.store.dispatch(new authActions.StopBuffer());
    //       // this.fireStore.collection('UserDetail').add({ UserId: result.user.uid,
    //       //                                               Name: userDetail.name,
    //       //                                               EmailId: userDetail.email,
    //       //                                               DateOfBirth: userDetail.dob});
    //       this.store.dispatch(new authActions.Authenticate(result.user.uid, result.user.displayName));
    //       this.router.navigate(['/dashboard']);
    //       // this.dashboardService.setExpenseDetail();
    //       this.cookieService.set('user', JSON.stringify(result));
    //     }
    //   )
    //   .catch(
    //     error => {
    //       this.snackbar.open(error, 'Dismiss', { duration: 5000 });
    //       this.store.dispatch(new authActions.StopBuffer());
    //     }
    //   );
  }

  logout() {
    this.token = "";
    this.store.dispatch(new _store_auth_action__WEBPACK_IMPORTED_MODULE_0__.UnAuthenticate());
    this.router.navigate(['/login']);
    // this.afAuth.signOut()
    //   .then(
    //     result => {
    //       this.store.dispatch(new authActions.UnAuthenticate());
    //       this.router.navigate(['/login']);
    //       this.cookieService.delete('user');
    //     }
    //   );
  }

  signInWithGoogle() {
    // this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    //   .then(
    //     result => {
    //       // this.expenseService.getCategories();
    //       this.store.dispatch(new authActions.StopBuffer());
    //       this.store.dispatch(new authActions.Authenticate(result.user.uid, ''));
    //       this.router.navigate(['/dashboard']);
    //     }
    //   )
    //   .catch(
    //     error => {
    //       this.snackbar.open(error, 'Dismiss', { duration: 5000 });
    //       this.store.dispatch(new authActions.StopBuffer());
    //     }
    //   );
  }
  signInWithFacebook() {
    //   this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
    //     .then(
    //       result => {
    //         // this.expenseService.getCategories();
    //         this.store.dispatch(new authActions.StopBuffer());
    //         this.store.dispatch(new authActions.Authenticate(result.user.uid, ''));
    //         this.router.navigate(['/dashboard']);
    //       }
    //     )
    //     .catch(
    //       error => {
    //         this.snackbar.open(error, 'Dismiss', { duration: 5000 });
    //         this.store.dispatch(new authActions.StopBuffer());
    //       }
    //     );
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatLegacySnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8530:
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/app.reducer */ 4840);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/dashboard.action */ 6114);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);









class DashboardService {
  constructor(store, http) {
    this.store = store;
    this.http = http;
    this.categoryChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.monthlyExpenseChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.monthName = [{
      monthName: 'January',
      nextIndex: 1,
      previousIndex: 11
    }, {
      monthName: 'February',
      nextIndex: 2,
      previousIndex: 0
    }, {
      monthName: 'March',
      nextIndex: 3,
      previousIndex: 1
    }, {
      monthName: 'April',
      nextIndex: 4,
      previousIndex: 2
    }, {
      monthName: 'May',
      nextIndex: 5,
      previousIndex: 3
    }, {
      monthName: 'June',
      nextIndex: 6,
      previousIndex: 4
    }, {
      monthName: 'July',
      nextIndex: 7,
      previousIndex: 5
    }, {
      monthName: 'August',
      nextIndex: 8,
      previousIndex: 6
    }, {
      monthName: 'September',
      nextIndex: 9,
      previousIndex: 7
    }, {
      monthName: 'October',
      nextIndex: 10,
      previousIndex: 8
    }, {
      monthName: 'November',
      nextIndex: 11,
      previousIndex: 9
    }, {
      monthName: 'December',
      nextIndex: 0,
      previousIndex: 10
    }];
  }
  initLoadData() {
    this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.StartAnnualExpenseGraphLoading());
    this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.StartCategoryExpenseGraphLoading());
    this.getCurrentMonthExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetCurrentMonthExpense(data)));
    this.getPreviousMonthExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetPreviousMonthExpense(data)));
    this.getCurrentYearExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetCurrentYearExpense(data)));
    this.getPreviousYearExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetPreviousYearExpense(data)));
    this.getExpenseMonthonMonth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetExpenseMonthonMonth(data)));
    this.getExpenseYearonYear().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetExpenseYearonYear(data)));
    this.getTrendingExpenses().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetTrendingExpenses(data)));
    this.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => {
      this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetCategories(data));
      this.getAnnualExpenseDetailByCategory(data[0].Name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => {
        this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetCategoryExpenseDetail(data));
        this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.StopCategoryExpenseGraphLoading());
      });
    });
    this.getAnnualExpenseDetail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => {
      this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.SetAnnualExpenseDetail(data));
      this.store.dispatch(new _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__.StopAnnualExpenseGraphLoading());
    });
  }
  getTrendingExpenses() {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "topFiveExpenses", {
        params: {
          "id": id
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
        let expense = [];
        response.forEach(element => {
          expense.push({
            category: element._id,
            expense: element.expense
          });
        });
        return expense;
      }));
    }));
  }
  getExpenseDetailByYear(year) {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses/year", {
        params: {
          "id": id,
          "year": year
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => response.expense));
    }));
  }
  getExpenseMonthonMonth() {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses/mom", {
        params: {
          "id": id
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => response.expense));
    }));
  }
  getExpenseYearonYear() {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses/yoy", {
        params: {
          "id": id
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => response.expense));
    }));
  }
  getExpenseDetailByMonth(year, month) {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses/month", {
        params: {
          "id": id,
          "year": year,
          "month": month
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => response.expense));
    }));
  }
  refreshData() {
    this.initLoadData();
  }
  getCurrentMonthExpenseDetail() {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const month = date.toLocaleString('en-US', {
      month: 'long'
    });
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.getExpenseDetailByMonth(year, month);
  }
  getPreviousMonthExpenseDetail() {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() == 0 ? 11 : new Date().getMonth() - 1, 1);
    const month = date.toLocaleString('en-US', {
      month: 'long'
    });
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.getExpenseDetailByMonth(year, month);
  }
  getCurrentYearExpenseDetail() {
    const date = new Date(new Date().getFullYear(), 0, 1);
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.getExpenseDetailByYear(year);
  }
  getPreviousYearExpenseDetail() {
    const date = new Date(new Date().getFullYear() - 1, 0, 1);
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.getExpenseDetailByYear(year);
  }
  getCategories() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "categories").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      let categories = [];
      response.forEach(element => {
        categories.push({
          Name: element.name,
          Description: element.description
        });
      });
      return categories;
    }));
  }
  getAnnualExpenseDetailByCategory(category) {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenseCategorySummary", {
        params: {
          "id": id,
          "year": year,
          "category": category
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
        let expense = [];
        response.forEach(element => {
          expense.push({
            month: element.date.month,
            amount: element.expense
          });
        });
        return expense;
      }));
    }));
  }
  /*
    Description - Method to fetch expense data for the last twelve months from current date
    Input Parameters -
      NA
    Returns -
      An observable with the below parameters -
        months            - An array of string with last twelve months from current date.
        lastAnnualExpense - An array of numbers with expense of last twelve months from current
                            date.
  */
  getAnnualExpenseDetail() {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const year = date.toLocaleString('en-US', {
      year: 'numeric'
    });
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenseSummary", {
        params: {
          "id": id,
          "year": year
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
        let expense = [];
        response.forEach(element => {
          expense.push({
            month: element.date.month,
            amount: element.expense
          });
        });
        return expense;
      }));
    }));
  }
  getlastMonthNames(numberOfMonths) {
    let currentMonthIndex = new Date().getMonth();
    const months = [];
    for (let index = 0; index < numberOfMonths; index++) {
      months.push(this.monthName[currentMonthIndex].monthName);
      currentMonthIndex = this.monthName[currentMonthIndex].previousIndex;
    }
    months.reverse();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(months);
  }
  getAllMonths() {
    const allMonths = [];
    this.monthName.map(month => allMonths.push(month.monthName));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(allMonths);
  }
  getCurrentMonth() {
    return this.getAllMonths().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(result => {
      const currentMonth = new Date().getMonth();
      return result[currentMonth];
    }));
  }
}
DashboardService.ɵfac = function DashboardService_Factory(t) {
  return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
};
DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: DashboardService,
  factory: DashboardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2797:
/*!*********************************************!*\
  !*** ./src/app/services/expense.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseService": () => (/* binding */ ExpenseService)
/* harmony export */ });
/* harmony import */ var _store_expense_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/expense.action */ 8922);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/app.reducer */ 4840);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.service */ 8530);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);










class ExpenseService {
  constructor(store, http, dashboardService, toastr) {
    this.store = store;
    this.http = http;
    this.dashboardService = dashboardService;
    this.toastr = toastr;
    this.expenseTabSelect = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.subscription = [];
  }
  saveExpenses(expenseItems) {
    let expenseHistory = [];
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getUserId).subscribe(userId => {
      expenseItems.map(item => {
        const expenseItem = {
          id: null,
          userId: userId,
          itemName: item.itemName,
          comment: item.comment,
          purchaseDate: item.purchaseDate,
          category: item.category,
          price: item.itemPrice,
          edited: false
        };
        expenseHistory.push(expenseItem);
      });
      this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses", expenseHistory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
        this.refreshExpenses();
        this.dashboardService.refreshData();
        this.toastr.success('Success', 'Expense added successfully');
        // console.log('Insert complete successfully');
      });
      // this.dashboardService.setExpenseDetail().then(
      //     () => {
      //         this.expenseTabSelect.next(0);
      //     }
      // );
    });
  }

  refreshExpenses() {
    let startDate;
    let endDate;
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getStartDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(date => {
      startDate = date.toDateString();
      this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getEndDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(date => {
        endDate = date.toDateString();
        if (startDate === "" && endDate === "") {
          startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toDateString();
          endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toDateString();
        }
        this.getExpenses(startDate, endDate).subscribe(data => {
          this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_0__.SetExpenseData(data));
          this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_0__.SetLoadingOff());
        });
      });
    });
  }
  getExpenses(startDate, endDate) {
    return this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses", {
        params: {
          "id": id,
          "startDate": startDate,
          "endDate": endDate
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => {
        let expense = [];
        data.map(element => {
          expense.push({
            id: element.id,
            userId: element.userId,
            itemName: element.itemName,
            comment: element.comment,
            purchaseDate: new Date(element.purchaseDate),
            category: element.category,
            price: element.price,
            edited: element.edited
          });
        });
        return expense;
      }));
    }));
  }
  deleteExpense(expenseId) {
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(id => {
      this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expenses", {
        params: {
          "expenseId": expenseId
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
        this.refreshExpenses();
        this.dashboardService.refreshData();
        this.toastr.success('Information', 'Expense deleted successfully');
        // this.toastr.fireSuccess('Information','Expense deleted successfully');
        console.log("Item deleted");
      });
    });
  }
  updateExpense(expense) {
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_1__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(id => {
      expense.userId = id;
      this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + "expense", expense).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
        this.refreshExpenses();
        this.store.dispatch(new _store_expense_action__WEBPACK_IMPORTED_MODULE_0__.SetEditModeOff());
        this.dashboardService.refreshData();
        this.toastr.success('Success', 'Expense updated successfully');
        // this.toastr.fireSuccess('Success','Expense updated successfully');
        console.log('Update complete successfully');
      });
    });
  }
}
ExpenseService.ɵfac = function ExpenseService_Factory(t) {
  return new (t || ExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
};
ExpenseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: ExpenseService,
  factory: ExpenseService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 199:
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FeedbackService {
  constructor() {}
  saveFeedBack(feedbackDetail) {
    // this.firestore.collection('Feedback').add({UserId: feedbackDetail.UserId,
    //                                            Comments: feedbackDetail.Comments});
  }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) {
  return new (t || FeedbackService)();
};
FeedbackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FeedbackService,
  factory: FeedbackService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1944:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UtilService {
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
UtilService.ɵfac = function UtilService_Factory(t) {
  return new (t || UtilService)();
};
UtilService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UtilService,
  factory: UtilService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7355:
/*!***************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);





function DialogComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DialogComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DialogComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure to Delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DialogComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.comment);
  }
}
function DialogComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
function DialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
  }
}
function DialogComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
  }
}
class DialogComponent {
  constructor(matdialog, data) {
    this.matdialog = matdialog;
    this.data = data;
  }
  ngOnInit() {}
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
};
DialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DialogComponent,
  selectors: [["app-dialog"]],
  decls: 8,
  vars: 7,
  consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", "", "style", "margin: 30px", 4, "ngIf"], ["mat-dialog-actions", "", 1, "flex-container"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close", 4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "margin", "30px"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogComponent_span_0_Template, 2, 0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogComponent_span_1_Template, 2, 0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogComponent_span_2_Template, 2, 0, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogComponent_span_3_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DialogComponent_button_5_Template, 2, 1, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogComponent_button_6_Template, 2, 1, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogComponent_button_7_Template, 2, 1, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.dialogType === 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogActions],
  styles: [".spinner[_ngcontent-%COMP%] {\n    margin-left: 10px; \n    margin-right: 10px;\n    background: transparent;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    row-gap: 5px;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHJvdy1nYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 357:
/*!*****************************************************************!*\
  !*** ./src/app/shared/feedback-form/feedback-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackFormComponent": () => (/* binding */ FeedbackFormComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/app.reducer */ 4840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/feedback.service */ 199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











const _c0 = ["f"];
function FeedbackFormComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You must enter feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class FeedbackFormComponent {
  constructor(matdialog, store, feedbackService) {
    this.matdialog = matdialog;
    this.store = store;
    this.feedbackService = feedbackService;
  }
  ngOnInit() {}
  onSubmit() {
    this.store.select(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.getUserId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(userId => {
      this.feedbackService.saveFeedBack({
        UserId: userId,
        Comments: this.feedbackForm.value.comments
      });
    });
  }
}
FeedbackFormComponent.ɵfac = function FeedbackFormComponent_Factory(t) {
  return new (t || FeedbackFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_feedback_service__WEBPACK_IMPORTED_MODULE_1__.FeedbackService));
};
FeedbackFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FeedbackFormComponent,
  selectors: [["app-feedback-form"]],
  viewQuery: function FeedbackFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.feedbackForm = _t.first);
    }
  },
  decls: 16,
  vars: 3,
  consts: [[2, "display", "flex", "flex-direction", "column", "width", "400px", 3, "ngSubmit"], ["f", "ngForm"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "display", "flex", "flex-direction", "column"], ["matInput", "", "rows", "5", "required", "", "ngModel", "", "name", "comments"], ["comments", ""], [4, "ngIf"], ["mat-dialog-actions", "", 1, "flex-container-row"], ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"], ["type", "button", "mat-flat-button", "", "color", "accent", 3, "mat-dialog-close"]],
  template: function FeedbackFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FeedbackFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3)(5, "mat-form-field")(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Enter your feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "textarea", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FeedbackFormComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInput, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm],
  styles: [".flex-container-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    row-gap: 5px;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlZWRiYWNrLWZvcm0vZmVlZGJhY2stZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHJvdy1nYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8828:
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingComponent {
  constructor() {}
  ngOnInit() {}
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
  return new (t || LoadingComponent)();
};
LoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingComponent,
  selectors: [["app-loading"]],
  decls: 2,
  vars: 0,
  consts: [[1, "loader"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  background: #009cc6;\n  animation: _ngcontent-%COMP%_load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader[_ngcontent-%COMP%] {\n  color: #009cc6;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  transform: translateZ(0);\n  animation-delay: -0.16s;\n}\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader[_ngcontent-%COMP%]:before {\n  left: -1.5em;\n  animation-delay: -0.32s;\n}\n.loader[_ngcontent-%COMP%]:after {\n  left: 1.5em;\n}\n@keyframes _ngcontent-%COMP%_load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxtQkFBbUI7RUFFbkIsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBR2Ysd0JBQXdCO0VBRXhCLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBRVosdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFhQTtFQUNFOzs7SUFHRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLFxuLmxvYWRlcjpiZWZvcmUsXG4ubG9hZGVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwOWNjNjtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDRlbTtcbn1cbi5sb2FkZXIge1xuICBjb2xvcjogIzAwOWNjNjtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIG1hcmdpbjogODhweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG4ubG9hZGVyOmJlZm9yZSxcbi5sb2FkZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY29udGVudDogJyc7XG59XG4ubG9hZGVyOmJlZm9yZSB7XG4gIGxlZnQ6IC0xLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG4ubG9hZGVyOmFmdGVyIHtcbiAgbGVmdDogMS41ZW07XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDEge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDEge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4840:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnnualExpenseDetail": () => (/* binding */ getAnnualExpenseDetail),
/* harmony export */   "getAnnualGraphLoadingStatus": () => (/* binding */ getAnnualGraphLoadingStatus),
/* harmony export */   "getAuthState": () => (/* binding */ getAuthState),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "getCategoryExpenseDetail": () => (/* binding */ getCategoryExpenseDetail),
/* harmony export */   "getCategoryExpenseGraphLoadingStatus": () => (/* binding */ getCategoryExpenseGraphLoadingStatus),
/* harmony export */   "getCurrentMonthExpense": () => (/* binding */ getCurrentMonthExpense),
/* harmony export */   "getCurrentYearExpense": () => (/* binding */ getCurrentYearExpense),
/* harmony export */   "getDashboardState": () => (/* binding */ getDashboardState),
/* harmony export */   "getDisplayedColumns": () => (/* binding */ getDisplayedColumns),
/* harmony export */   "getEditElement": () => (/* binding */ getEditElement),
/* harmony export */   "getEditMode": () => (/* binding */ getEditMode),
/* harmony export */   "getEndDate": () => (/* binding */ getEndDate),
/* harmony export */   "getExpenseLoading": () => (/* binding */ getExpenseLoading),
/* harmony export */   "getExpenseMonthonMonth": () => (/* binding */ getExpenseMonthonMonth),
/* harmony export */   "getExpenseState": () => (/* binding */ getExpenseState),
/* harmony export */   "getExpenseYearonYear": () => (/* binding */ getExpenseYearonYear),
/* harmony export */   "getExpenses": () => (/* binding */ getExpenses),
/* harmony export */   "getIsAuthenticated": () => (/* binding */ getIsAuthenticated),
/* harmony export */   "getIsBufferOn": () => (/* binding */ getIsBufferOn),
/* harmony export */   "getIsDataUpdateInProgress": () => (/* binding */ getIsDataUpdateInProgress),
/* harmony export */   "getPreviousMonthExpense": () => (/* binding */ getPreviousMonthExpense),
/* harmony export */   "getPreviousYearExpense": () => (/* binding */ getPreviousYearExpense),
/* harmony export */   "getStartDate": () => (/* binding */ getStartDate),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "getTrendingExpenses": () => (/* binding */ getTrendingExpenses),
/* harmony export */   "getUserId": () => (/* binding */ getUserId)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('auth');
const getIsAuthenticated = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getAuthState, state => state.isAuthenticated);
const getUserId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getAuthState, state => state.userid);
const getIsBufferOn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getAuthState, state => state.isBufferOn);
const getToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getAuthState, state => state.token);
const getExpenseState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('expense');
const getExpenses = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.expenseHistory);
const getDisplayedColumns = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.displayedColumns);
const getEditMode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.isEditModeOn);
const getEditElement = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.editExpense);
const getExpenseLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.isExpenseLoading);
const getStartDate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.searchStartDate);
const getEndDate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getExpenseState, state => state.searchEndDate);
const getDashboardState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('dashboard');
const getAnnualGraphLoadingStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.isAnnualExpenseGraphLoading);
const getIsDataUpdateInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.isDataUpdateInProgress);
const getCategoryExpenseGraphLoadingStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.isCategoryExpenseGraphLoading);
const getCurrentMonthExpense = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.currentMonthExpense);
const getPreviousMonthExpense = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.previousMonthExpense);
const getCurrentYearExpense = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.currentYearExpense);
const getPreviousYearExpense = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.previousYearExpense);
const getExpenseMonthonMonth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.expenseMonthonMonth);
const getExpenseYearonYear = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.expenseYearonYear);
const getTrendingExpenses = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.trendingExpenses);
const getCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.categories);
const getCategoryExpenseDetail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.categoryExpenseDetail);
const getAnnualExpenseDetail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getDashboardState, state => state.annualExpenseDetail);

/***/ }),

/***/ 5490:
/*!**************************************!*\
  !*** ./src/app/store/auth.action.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHENTICATE": () => (/* binding */ AUTHENTICATE),
/* harmony export */   "Authenticate": () => (/* binding */ Authenticate),
/* harmony export */   "STARTBUFFER": () => (/* binding */ STARTBUFFER),
/* harmony export */   "START_AUTHENTICATION": () => (/* binding */ START_AUTHENTICATION),
/* harmony export */   "STOPBUFFER": () => (/* binding */ STOPBUFFER),
/* harmony export */   "STOP_AUTHENTICATION": () => (/* binding */ STOP_AUTHENTICATION),
/* harmony export */   "StartAuthentication": () => (/* binding */ StartAuthentication),
/* harmony export */   "StartBuffer": () => (/* binding */ StartBuffer),
/* harmony export */   "StopAuthentication": () => (/* binding */ StopAuthentication),
/* harmony export */   "StopBuffer": () => (/* binding */ StopBuffer),
/* harmony export */   "UNAUTHENTICATE": () => (/* binding */ UNAUTHENTICATE),
/* harmony export */   "UnAuthenticate": () => (/* binding */ UnAuthenticate)
/* harmony export */ });
const AUTHENTICATE = 'AUTHENTICATE';
const UNAUTHENTICATE = 'UNAUTHENTICATE';
const STARTBUFFER = 'STARTBUFFER';
const STOPBUFFER = 'STOPBUFFER';
const START_AUTHENTICATION = 'START_AUTHENTICATION';
const STOP_AUTHENTICATION = 'STOP_AUTHENTICATION';
class StartAuthentication {
  constructor() {
    this.type = START_AUTHENTICATION;
  }
}
class StopAuthentication {
  constructor() {
    this.type = STOP_AUTHENTICATION;
  }
}
class Authenticate {
  constructor(userId, displayName) {
    this.userId = userId;
    this.displayName = displayName;
    this.type = AUTHENTICATE;
  }
}
class UnAuthenticate {
  constructor() {
    this.type = UNAUTHENTICATE;
  }
}
class StartBuffer {
  constructor() {
    this.type = STARTBUFFER;
  }
}
class StopBuffer {
  constructor() {
    this.type = STOPBUFFER;
  }
}

/***/ }),

/***/ 48:
/*!***************************************!*\
  !*** ./src/app/store/auth.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthReducer": () => (/* binding */ AuthReducer)
/* harmony export */ });
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.action */ 5490);

const initialState = {
  isAuthenticated: false,
  userid: '',
  isBufferOn: false,
  displayName: '',
  token: ''
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case _auth_action__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATE:
      return {
        isAuthenticated: true,
        userid: action.userId,
        isBufferOn: false,
        displayName: action.displayName
      };
    case _auth_action__WEBPACK_IMPORTED_MODULE_0__.UNAUTHENTICATE:
      return {
        isAuthenticated: false,
        userId: '',
        isBufferOn: false,
        token: ''
      };
    case _auth_action__WEBPACK_IMPORTED_MODULE_0__.STARTBUFFER:
      return {
        ...state,
        isBufferOn: true
      };
    case _auth_action__WEBPACK_IMPORTED_MODULE_0__.STOPBUFFER:
      return {
        ...state,
        isBufferOn: false
      };
    default:
      return state;
  }
}

/***/ }),

/***/ 6114:
/*!*******************************************!*\
  !*** ./src/app/store/dashboard.action.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_ANNUAL_EXPENSE_DETAIL": () => (/* binding */ SET_ANNUAL_EXPENSE_DETAIL),
/* harmony export */   "SET_CATEGORIES": () => (/* binding */ SET_CATEGORIES),
/* harmony export */   "SET_CATEGORY_EXPENSE_DETAIL": () => (/* binding */ SET_CATEGORY_EXPENSE_DETAIL),
/* harmony export */   "SET_CURRENT_MONTH_EXPENSE": () => (/* binding */ SET_CURRENT_MONTH_EXPENSE),
/* harmony export */   "SET_CURRENT_YEAR_EXPENSE": () => (/* binding */ SET_CURRENT_YEAR_EXPENSE),
/* harmony export */   "SET_EXPENSE_MONTH_ON_MONTH": () => (/* binding */ SET_EXPENSE_MONTH_ON_MONTH),
/* harmony export */   "SET_EXPENSE_YEAR_ON_YEAR": () => (/* binding */ SET_EXPENSE_YEAR_ON_YEAR),
/* harmony export */   "SET_PREVIOUS_MONTH_EXPENSE": () => (/* binding */ SET_PREVIOUS_MONTH_EXPENSE),
/* harmony export */   "SET_PREVIOUS_YEAR_EXPENSE": () => (/* binding */ SET_PREVIOUS_YEAR_EXPENSE),
/* harmony export */   "SET_TRENDING_EXPENSES": () => (/* binding */ SET_TRENDING_EXPENSES),
/* harmony export */   "START_ANNUAL_EXPENSE_GRAPH_LOADING": () => (/* binding */ START_ANNUAL_EXPENSE_GRAPH_LOADING),
/* harmony export */   "START_CATEGORY_EXPENSE_GRAPH_LOADING": () => (/* binding */ START_CATEGORY_EXPENSE_GRAPH_LOADING),
/* harmony export */   "STOP_ANNUAL_EXPENSE_GRAPH_LOADING": () => (/* binding */ STOP_ANNUAL_EXPENSE_GRAPH_LOADING),
/* harmony export */   "STOP_CATEGORY_EXPENSE_GRAPH_LOADING": () => (/* binding */ STOP_CATEGORY_EXPENSE_GRAPH_LOADING),
/* harmony export */   "SetAnnualExpenseDetail": () => (/* binding */ SetAnnualExpenseDetail),
/* harmony export */   "SetCategories": () => (/* binding */ SetCategories),
/* harmony export */   "SetCategoryExpenseDetail": () => (/* binding */ SetCategoryExpenseDetail),
/* harmony export */   "SetCurrentMonthExpense": () => (/* binding */ SetCurrentMonthExpense),
/* harmony export */   "SetCurrentYearExpense": () => (/* binding */ SetCurrentYearExpense),
/* harmony export */   "SetExpenseMonthonMonth": () => (/* binding */ SetExpenseMonthonMonth),
/* harmony export */   "SetExpenseYearonYear": () => (/* binding */ SetExpenseYearonYear),
/* harmony export */   "SetPreviousMonthExpense": () => (/* binding */ SetPreviousMonthExpense),
/* harmony export */   "SetPreviousYearExpense": () => (/* binding */ SetPreviousYearExpense),
/* harmony export */   "SetTrendingExpenses": () => (/* binding */ SetTrendingExpenses),
/* harmony export */   "StartAnnualExpenseGraphLoading": () => (/* binding */ StartAnnualExpenseGraphLoading),
/* harmony export */   "StartCategoryExpenseGraphLoading": () => (/* binding */ StartCategoryExpenseGraphLoading),
/* harmony export */   "StopAnnualExpenseGraphLoading": () => (/* binding */ StopAnnualExpenseGraphLoading),
/* harmony export */   "StopCategoryExpenseGraphLoading": () => (/* binding */ StopCategoryExpenseGraphLoading)
/* harmony export */ });
const START_ANNUAL_EXPENSE_GRAPH_LOADING = 'Dashboard START_ANNUAL_EXPENSE_GRAPH_LOADING';
const STOP_ANNUAL_EXPENSE_GRAPH_LOADING = 'Dashboard STOP_ANNUAL_EXPENSE_GRAPH_LOADING';
const START_CATEGORY_EXPENSE_GRAPH_LOADING = 'Dashboard START_CATEGORY_EXPENSE_GRAPH_LOADING';
const STOP_CATEGORY_EXPENSE_GRAPH_LOADING = 'Dashboard STOP_CATEGORY_EXPENSE_GRAPH_LOADING';
const SET_CURRENT_MONTH_EXPENSE = 'Dashboard SET_CURRENT_MONTH_EXPENSE';
const SET_PREVIOUS_MONTH_EXPENSE = 'Dashboard SET_PREVIOUS_MONTH_EXPENSE';
const SET_CURRENT_YEAR_EXPENSE = 'Dashboard SET_CURRENT_YEAR_EXPENSE';
const SET_PREVIOUS_YEAR_EXPENSE = 'Dashboard SET_PREVIOUS_YEAR_EXPENSE';
const SET_EXPENSE_MONTH_ON_MONTH = 'Dashboard SET_EXPENSE_MONTH_ON_MONTH';
const SET_EXPENSE_YEAR_ON_YEAR = 'Dashboard SET_EXPENSE_YEAR_ON_YEAR';
const SET_CATEGORIES = 'Dashboard SET_CATEGORIES';
const SET_TRENDING_EXPENSES = 'Dashboard SET_TRENDING_EXPENSES';
const SET_CATEGORY_EXPENSE_DETAIL = 'Dashboard SET_CATEGORY_EXPENSE_DETAIL';
const SET_ANNUAL_EXPENSE_DETAIL = 'Dashboard SET_ANNUAL_EXPENSE_DETAIL';
class StartAnnualExpenseGraphLoading {
  constructor() {
    this.type = START_ANNUAL_EXPENSE_GRAPH_LOADING;
  }
}
class StopAnnualExpenseGraphLoading {
  constructor() {
    this.type = STOP_ANNUAL_EXPENSE_GRAPH_LOADING;
  }
}
class StartCategoryExpenseGraphLoading {
  constructor() {
    this.type = START_CATEGORY_EXPENSE_GRAPH_LOADING;
  }
}
class StopCategoryExpenseGraphLoading {
  constructor() {
    this.type = STOP_CATEGORY_EXPENSE_GRAPH_LOADING;
  }
}
class SetCurrentMonthExpense {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_CURRENT_MONTH_EXPENSE;
  }
}
class SetPreviousMonthExpense {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_PREVIOUS_MONTH_EXPENSE;
  }
}
class SetCurrentYearExpense {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_CURRENT_YEAR_EXPENSE;
  }
}
class SetPreviousYearExpense {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_PREVIOUS_YEAR_EXPENSE;
  }
}
class SetExpenseMonthonMonth {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_EXPENSE_MONTH_ON_MONTH;
  }
}
class SetExpenseYearonYear {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_EXPENSE_YEAR_ON_YEAR;
  }
}
class SetCategories {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_CATEGORIES;
  }
}
class SetTrendingExpenses {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_TRENDING_EXPENSES;
  }
}
class SetCategoryExpenseDetail {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_CATEGORY_EXPENSE_DETAIL;
  }
}
class SetAnnualExpenseDetail {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ANNUAL_EXPENSE_DETAIL;
  }
}

/***/ }),

/***/ 8368:
/*!********************************************!*\
  !*** ./src/app/store/dashboard.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardReducer": () => (/* binding */ DashboardReducer)
/* harmony export */ });
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.action */ 6114);

const initialState = {
  isAnnualExpenseGraphLoading: false,
  isCategoryExpenseGraphLoading: false,
  isDataUpdateInProgress: false,
  currentMonthExpense: 0,
  previousMonthExpense: 0,
  currentYearExpense: 0,
  previousYearExpense: 0,
  expenseMonthonMonth: 0,
  expenseYearonYear: 0,
  categories: [],
  trendingExpenses: [],
  categoryExpenseDetail: [],
  annualExpenseDetail: []
};
function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.START_ANNUAL_EXPENSE_GRAPH_LOADING:
      return {
        ...state,
        isAnnualGraphLoading: true,
        isDataUpdateInProgress: true
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.STOP_ANNUAL_EXPENSE_GRAPH_LOADING:
      return {
        ...state,
        isAnnualGraphLoading: false,
        isDataUpdateInProgress:  false || state.isCategoryExpenseGraphLoading
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.START_CATEGORY_EXPENSE_GRAPH_LOADING:
      return {
        ...state,
        isCategoryExpenseGraphLoading: true,
        isDataUpdateInProgress: true
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.STOP_CATEGORY_EXPENSE_GRAPH_LOADING:
      return {
        ...state,
        isCategoryExpenseGraphLoading: false,
        isDataUpdateInProgress:  false || state.isAnnualExpenseGraphLoading
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_MONTH_EXPENSE:
      return {
        ...state,
        currentMonthExpense: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_PREVIOUS_MONTH_EXPENSE:
      return {
        ...state,
        previousMonthExpense: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_YEAR_EXPENSE:
      return {
        ...state,
        currentYearExpense: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_PREVIOUS_YEAR_EXPENSE:
      return {
        ...state,
        previousYearExpense: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_EXPENSE_MONTH_ON_MONTH:
      return {
        ...state,
        expenseMonthonMonth: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_EXPENSE_YEAR_ON_YEAR:
      return {
        ...state,
        expenseYearonYear: action.payload
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_TRENDING_EXPENSES:
      return {
        ...state,
        trendingExpenses: [...action.payload]
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload]
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_CATEGORY_EXPENSE_DETAIL:
      return {
        ...state,
        categoryExpenseDetail: [...action.payload]
      };
    case _dashboard_action__WEBPACK_IMPORTED_MODULE_0__.SET_ANNUAL_EXPENSE_DETAIL:
      return {
        ...state,
        annualExpenseDetail: [...action.payload]
      };
    default:
      return state;
  }
}

/***/ }),

/***/ 8922:
/*!*****************************************!*\
  !*** ./src/app/store/expense.action.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_EDIT_EXPENSE_ELEMENT": () => (/* binding */ SET_EDIT_EXPENSE_ELEMENT),
/* harmony export */   "SET_EDIT_MODE_OFF": () => (/* binding */ SET_EDIT_MODE_OFF),
/* harmony export */   "SET_EDIT_MODE_ON": () => (/* binding */ SET_EDIT_MODE_ON),
/* harmony export */   "SET_EXPENSES": () => (/* binding */ SET_EXPENSES),
/* harmony export */   "SET_EXPENSE_LOAD_OFF": () => (/* binding */ SET_EXPENSE_LOAD_OFF),
/* harmony export */   "SET_EXPENSE_LOAD_ON": () => (/* binding */ SET_EXPENSE_LOAD_ON),
/* harmony export */   "SET_SEARCH_DATE": () => (/* binding */ SET_SEARCH_DATE),
/* harmony export */   "SetEditExpenseElement": () => (/* binding */ SetEditExpenseElement),
/* harmony export */   "SetEditModeOff": () => (/* binding */ SetEditModeOff),
/* harmony export */   "SetEditModeOn": () => (/* binding */ SetEditModeOn),
/* harmony export */   "SetExpenseData": () => (/* binding */ SetExpenseData),
/* harmony export */   "SetLoadingOff": () => (/* binding */ SetLoadingOff),
/* harmony export */   "SetLoadingOn": () => (/* binding */ SetLoadingOn),
/* harmony export */   "SetSearchDate": () => (/* binding */ SetSearchDate)
/* harmony export */ });
const SET_EXPENSES = 'SET_EXPENSES';
const SET_EDIT_MODE_ON = 'SET_EDIT_MODE_ON';
const SET_EDIT_MODE_OFF = 'SET_EDIT_MODE_OFF';
const SET_EDIT_EXPENSE_ELEMENT = 'SET_EDIT_EXPENSE_ELEMENT';
const SET_EXPENSE_LOAD_ON = 'SET_EXPENSE_LOAD_ON';
const SET_EXPENSE_LOAD_OFF = 'SET_EXPENSE_LOAD_OFF';
const SET_SEARCH_DATE = 'SET_SEARCH_DATE';
class SetExpenseData {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_EXPENSES;
  }
}
class SetEditModeOn {
  constructor() {
    this.type = SET_EDIT_MODE_ON;
  }
}
class SetEditModeOff {
  constructor() {
    this.type = SET_EDIT_MODE_OFF;
  }
}
class SetEditExpenseElement {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_EDIT_EXPENSE_ELEMENT;
  }
}
class SetLoadingOn {
  constructor() {
    this.type = SET_EXPENSE_LOAD_ON;
  }
}
class SetLoadingOff {
  constructor() {
    this.type = SET_EXPENSE_LOAD_OFF;
  }
}
class SetSearchDate {
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = SET_SEARCH_DATE;
  }
}

/***/ }),

/***/ 7346:
/*!******************************************!*\
  !*** ./src/app/store/expense.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReducer": () => (/* binding */ ExpenseReducer)
/* harmony export */ });
/* harmony import */ var _expense_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense.action */ 8922);

const initialState = {
  searchStartDate: new Date(),
  searchEndDate: new Date(),
  expenseHistory: [],
  displayedColumns: ['itemName', 'price', 'purchaseDate', 'category'],
  isEditModeOn: false,
  editExpense: {
    id: '',
    userId: '',
    itemName: '',
    comment: '',
    purchaseDate: new Date(),
    category: '',
    price: 0,
    edited: false
  },
  isExpenseLoading: false
};
function ExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EXPENSES:
      return {
        ...state,
        expenseHistory: [...action.payload]
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EDIT_MODE_ON:
      return {
        ...state,
        isEditModeOn: true
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EDIT_MODE_OFF:
      return {
        ...state,
        isEditModeOn: false
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EDIT_EXPENSE_ELEMENT:
      return {
        ...state,
        editExpense: {
          ...action.payload
        }
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EXPENSE_LOAD_ON:
      return {
        ...state,
        isExpenseLoading: true
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_EXPENSE_LOAD_OFF:
      return {
        ...state,
        isExpenseLoading: false
      };
    case _expense_action__WEBPACK_IMPORTED_MODULE_0__.SET_SEARCH_DATE:
      return {
        ...state,
        searchStartDate: action.startDate,
        searchEndDate: action.endDate
      };
    default:
      return state;
  }
}

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBCm-5dEaY80hMwCe9-Vekf-edcfWUlvG0",
    authDomain: "expense-tracker-2bff2.firebaseapp.com",
    databaseURL: "https://expense-tracker-2bff2.firebaseio.com",
    projectId: "expense-tracker-2bff2",
    storageBucket: "expense-tracker-2bff2.appspot.com",
    messagingSenderId: "757956429532",
    appId: "1:757956429532:web:60f3c664c859c8adf75619",
    measurementId: "G-9G232RXKFH"
  },
  url: "https://expense-tracker-backend-production-4d1b.up.railway.app/api/"
  // url: "http://localhost:8080/api/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 8999,
	"./hy-am.js": 8999,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map