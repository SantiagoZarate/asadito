/* eslint-disable @typescript-eslint/no-explicit-any */
export interface JumboResponse {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  brandImageUrl: null;
  linkText: string;
  productReference: string;
  productReferenceCode: string;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: Date;
  clusterHighlights: { [key: string]: string };
  productClusters: { [key: string]: string };
  searchableClusters: { [key: string]: string };
  categories: string[];
  categoriesIds: string[];
  link: string;
  ProductData: string[];
  SkuData: string[];
  Configuraciones: string[];
  'Tipo de Producto': string[];
  Estado: string[];
  Origen: string[];
  'Tipo de Animal': string[];
  'Características Destacadas': string[];
  'Uso Recomendado': string[];
  'Observaciones y Recomendaciones': string[];
  allSpecifications: string[];
  allSpecificationsGroups: string[];
  description: string;
  items: Item[];
}

export interface Item {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  referenceId: ReferenceID[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType: null;
  isKit: boolean;
  images: Image[];
  sellers: Seller[];
  Videos: any[];
  estimatedDateArrival: null;
}

export interface Image {
  imageId: string;
  imageLabel: string;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  imageLastModified: Date;
}

export interface ReferenceID {
  Key: string;
  Value: string;
}

export interface Seller {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
}

export interface CommertialOffer {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments: Installment[];
  DiscountHighLight: any[];
  GiftSkuIds: any[];
  Teasers: any[];
  PromotionTeasers: any[];
  BuyTogether: any[];
  ItemMetadataAttachment: any[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  FullSellingPrice: number;
  RewardValue: number;
  PriceValidUntil: Date;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples: DeliverySlaSample[];
  GetInfoErrorMessage: null;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
}

export interface DeliverySlaSample {
  DeliverySlaPerTypes: any[];
  Region: null;
}

export interface DeliverySlaSamplesPerRegion {
  '0': DeliverySlaSample;
}

export interface Installment {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  PaymentSystemGroupName: string;
  Name: string;
}

export interface PaymentOptions {
  installmentOptions: InstallmentOption[];
  paymentSystems: PaymentSystem[];
  payments: any[];
  giftCards: any[];
  giftCardMessages: any[];
  availableAccounts: any[];
  availableTokens: any[];
}

export interface InstallmentOption {
  paymentSystem: string;
  bin: null;
  paymentName: string;
  paymentGroupName: string;
  value: number;
  installments: InstallmentElement[];
}

export interface InstallmentElement {
  count: number;
  hasInterestRate: boolean | null;
  interestRate: number | null;
  value: number;
  total: number;
  sellerMerchantInstallments?: InstallmentElement[];
  id?: ID;
}

export enum ID {
  Jumboargentinaj5202Martinez = 'JUMBOARGENTINAJ5202MARTINEZ',
}

export interface PaymentSystem {
  id: number;
  name: string;
  groupName: string;
  validator: null;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description: null | string;
  requiresAuthentication: boolean;
  dueDate: Date;
  availablePayments: null;
}
