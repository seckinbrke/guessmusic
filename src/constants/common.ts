import {Dimensions} from 'react-native';

export const APP_NAME = 'Invoice Maker';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_IPHONE_MINI = () => HEIGHT < 700;
export const IS_IPHONE_13_PRO = () => HEIGHT < 850;

export const COMMON_ANIMATION_DURATION = 400;

export const ROUTE_NAMES = {
  ROOT_TABS: 'RootTabs',
  NEW_INVOICE: 'NewInvoiceScreen',
  INVOICE_DETAIL: 'InvoiceDetailScreen',
  HOME: 'HomeScreen',
  BAG: 'BagScreen',
  PURCHASE: 'PurchaseScreen',
  INTRO1: 'Intro1Screen',
  INTRO2: 'Intro2Screen',
  INTRO3: 'Intro3Screen',
  BUSINESS_INFORMATION: 'BusinessInformationScreen',
};

export const WEEKLY_SUB_PRODUCT_ID = 'com.invoice.weekly';
export const LIFETIME_SUB_PRODUCT_ID = 'com.invoice.lifetime';

export const TERMS_OF_USE = 'https://www.appsdna.co/terms';
export const PRIVACY_POLICY = 'https://www.appsdna.co/privacy';

export const EXAMPLE_DATA = {
  currency: 'EUR',
  invoiceId: 1,
  issuedDate: '2024-12-23T00:00:00.000Z',
  deadline: '2025-01-23T00:00:00.000Z',
  client: {
    fullName: 'John Doe',
    phoneNumber: '+123456789',
    email: 'example@example.com',
    address: '123 Main St, City, Country',
  },
  business: {
    fullName: 'John Doe',
    phoneNumber: '+123456789',
    email: 'example@example.com',
    address: '123 Main St, City, Country',
  },
  items: [
    {
      description: 'Item1',
      price: 150,
      quantity: 1,
    },
    {
      description: 'Item2',
      price: 250,
      quantity: 1,
    },
    {
      description: 'Item3',
      price: 350,
      quantity: 1,
    },
  ],
};
