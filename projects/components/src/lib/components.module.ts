import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsComponent } from './components.component';
import { Webcomponent1Component } from './webcomponent1/webcomponent1.component';
import { Webcomponent2Component } from './webcomponent2/webcomponent2.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    Webcomponent1Component,
    Webcomponent2Component,
  ],
  imports: [],
  exports: [ComponentsComponent],
  entryComponents: [Webcomponent1Component, Webcomponent2Component],
})
export class ComponentsModule {
  constructor(private injector: Injector) {
    const webcomponent1 = createCustomElement(Webcomponent1Component, {
      injector,
    });
    customElements.define('hello-web', webcomponent1);

    const webcomponent2 = createCustomElement(Webcomponent2Component, {
      injector,
    });
    customElements.define('world-web', webcomponent2);
  }
}
