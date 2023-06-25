export interface EquityTransactionDetail {
    id: string;
    userId: string;
    stockName: string;
    transactionDate: Date;
    pricePerStock: number;
    brokerageAndOtherCharges: number;
    transactionType: string;
    quantity: number;
    symbol: string;
    exchange: string;
}

export interface ActiveEquityHolding {
    stockName: string;
    averageBuyingPrice: number;
    quantity: number;
    totalHoldingAmount: number;
    currentStockPrice: number;
}

export interface RealizedGain {
    stockName: string;
    averageBuyingPrice: number;
    averageSellingPrice: number;
    gainAmount: number;
    gainPercent: number;
}

export interface EquityDetail {
    activeEquities: ActiveEquityHolding[],
    transactionDetail: EquityTransactionDetail[],
    realizedGain: RealizedGain[]
}