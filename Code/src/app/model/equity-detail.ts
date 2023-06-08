export interface EquityTransactionDetail {
    id: string;
    userId: string;
    stockName: string;
    transactionDate: Date;
    pricePerStock: number;
    brokerageAndOtherCharges: number;
    transactionType: string;
    quantity: number;
}

export interface EquityActive {
    stockName: string;
    avgPricePerStock: number;
    quantity: number;
    holdingAmount: number;
}

export interface EquityDetail {
    activeEquities: EquityActive[],
    transactionDetail: EquityTransactionDetail[]
}