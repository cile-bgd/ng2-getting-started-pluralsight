import { Component } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    templateUrl: './product-detail.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    constructor(private _routeParams: RouteParams,
                private _router: Router) {
        let id = +this._routeParams.get('id'); // + used to convert id to numeber
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}
