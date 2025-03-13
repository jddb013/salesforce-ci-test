import { LightningElement, track } from 'lwc';

const listOfInsuranceOptions = [
    { label: 'Aseguradora Confianza', value: 'aseguradora confianza' },
    { label: 'Aseguradora Fortaleza', value: 'aseguradora fortaleza' },
    { label: 'Aseguradora Proteccion', value: 'aseguradora proteccion' },
    { label: 'Sin Aseguradora', value: 'sin aseguradora' }
];

const listOfPlanOptions = [
    { label: 'Oro', value: 'oro' },
    { label: 'Plata', value: 'plata' },
    { label: 'Bronce', value: 'bronce' }
];

export default class Information extends LightningElement {
    @track isInformation = true;
    @track isPendingInput = true;
    @track screenAge = true;
    @track screenInsurance = true;
    @track showModal = false;
    @track isAppointment = false;
    @track currentStep = 1; 
    insurance;
    plan;
    @track dateOfBirth;
    @track searchTermInsurance = ''; 
    @track searchTermPlan = '';
    @track listOfInsurance = listOfInsuranceOptions;
    @track listOfPlanOptions = listOfPlanOptions;
    @track bookingHeader;
    payloadValues = {};
    newPatient;
    isNextDisable = true;

    getClientSettings(){
        this.bookingHeader = '¿ Es un nuevo paciente ?';
        this.screenAgeLabel = 'Fecha de nacimiento';
        this.screenInsuranceLabel = 'Aseguradora';
        this.screenPlanLabel = 'Plan';
        this.screenInsurance = true;
        this.screenAge = true;

        const childElement = this.template.querySelector('c-path');
        if (childElement) {
            childElement.setStep(1);
        }
    }

    connectedCallback(){
        this.getClientSettings();
    }

    handleDateChange(event) {
        this.dateOfBirth = event.target.value;
        this.checkButtons();
    }

    handleChangeInsurance(event) {
        this.searchTermInsurance = event.target.value;
        this.insurance = this.searchTermInsurance;
        this.checkButtons();

    }

    handleChangePlan(event) {
        this.searchTermPlan = event.target.value;
        this.plan = this.searchTermPlan;
        this.checkButtons();

    }

    handleExistingPatient() {
        this.newPatient = false;
        this.validateData();
    }

    handleNewPatient(){
        this.newPatient = true;
        this.validateData();
    }

    validateData(){
        if(this.dateOfBirth && this.insurance && this.plan){
            this.fillPayload();
            this.isAppointment = true;
            this.isInformation = false;
        }        
    }

    fillPayload(){
        this.payloadValues.account = this.account;
        this.payloadValues.dateOfBirth = this.dateOfBirth;
        this.payloadValues.insurance = this.insurance;
        this.payloadValues.plan = this.plan
        this.payloadValues.newPatient = this.newPatient;
        console.log('*** this.payloadValues: ' + JSON.stringify(this.payloadValues));
    }

    checkButtons(){
        if(this.dateOfBirth && this.insurance && this.plan){
            this.isNextDisable = false;
        }
    }

    handleConfirm() {
    }

    handleReturn() {
    }

    handleNavigateBack() {
        this.isInformation = true;
        this.isAppointment = false;
        this.isNextDisable = false;
        if(this.communityUser){
            this.bodChanged = false;
            this.InsuranceChanged = false;
            this.PlanChanged = false;
        }
    }

}