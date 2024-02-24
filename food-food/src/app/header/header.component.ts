import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @Output('featureEvent') selectFeatureEvent = new EventEmitter<string>();
  
    selectFeature(feature:string){
        this.selectFeatureEvent.emit(feature);
    }
}