export interface InsuranceDetail {
    id: string;
    policyNumber: string;
    policyName: string;
    companyName: string;
    purchaseDate: Date;
    sumAssured:number;
    premiumAmount: number;
    paymentEndDate: Date;
    maturityDate: Date;
    maturityAmount: number;
    paymentFrequency: string;
    policyStatus: string;
    isEdited: boolean;
    userId: string;
}