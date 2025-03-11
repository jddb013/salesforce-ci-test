import { LightningElement, track } from 'lwc';
import modal from "@salesforce/resourceUrl/custommodalcss";
import fonts from "@salesforce/resourceUrl/customfontscss";
import { loadStyle } from "lightning/platformResourceLoader";

export default class Container extends LightningElement {

    @track communityUser;
    @track headerIndex = 'z-index: 1001';

    get setPageHeight() {
        if(!this.communityUser){
            return 'display: flex; min-height: 100v; flex-direction: column;';
        }

        return 'display: flex; min-height: calc(100vh - 166px); flex-direction: column;';
    }


    get computeHeaderStyle() {
        return `position:sticky; top:0; ${this.headerIndex};`;
    }

    connectedCallback() {
        loadStyle(this, modal);
        loadStyle(this, fonts);
    }

}