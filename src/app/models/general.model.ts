export interface Me {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  identityNumber: string;
  updateDate: string;
  country: string;
}
export interface Response {
  code: number;
  message: string;
  [key: string]: any;
}
export interface Balance {
  assetCode: string;
  availableAmount: number;
  availableAmountTRYValue: number;
}
export interface OpenOrder {
  marketCode: string;
  orderSide: string;
  orderDate: string;
  price: number;
  orderAmount: number;
  fillAmount: number;
}
export interface Market {
  marketCode: string;
  currentQuote: number;
  change24h: number;
  change24hPercent: number;
  highestQuote24h: number;
  lowestQuote24h: number;
  weightedAverage24h: number;
  volume24h: number;
  notionalVolume24h: number;
  ask: number;
  bid: number;
}
