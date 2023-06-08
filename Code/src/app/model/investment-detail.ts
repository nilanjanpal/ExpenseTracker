export interface InvestmentDetail {
    id: string;
    investmentType: string;
    companyName: string;
    amount: number;
    purchaseDate: Date;
    isEdited: boolean;
    userId: string;
}