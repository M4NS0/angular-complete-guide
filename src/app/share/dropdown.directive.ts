import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    // to bind the class to the element
    // binding properties where the directive is placed on 
    // so that the class can be applied to the open class element in the html that this directive is implemented
    @HostBinding('class.open') isOpen = false;

    // to listen to a click event on the host element opens and close the dropdown
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}