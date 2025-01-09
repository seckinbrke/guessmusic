import AsyncStorage from '@react-native-async-storage/async-storage';

export const getIntroductionInformation = async () => {
  try {
    return await AsyncStorage.getItem('@isPassedIntroduction');
  } catch (e) {
    console.warn(e);
  }
};

export const setIntroductionInformation = (isPassedIntroduction: string) => {
  try {
    AsyncStorage.setItem('@isPassedIntroduction', isPassedIntroduction);
  } catch (e) {
    console.warn(e);
  }
};

export const setBusinessInformation = async (info: any) => {
  try {
    await AsyncStorage.setItem('@businessInformation', JSON.stringify(info));
  } catch (error) {
    console.error('Failed to save business information:', error);
  }
};

export const getBusinessInformation = async () => {
  try {
    const info = await AsyncStorage.getItem('@businessInformation');
    return info ? JSON.parse(info) : {};
  } catch (error) {
    console.error('Failed to retrieve business information:', error);
    return {};
  }
};

export const getSpecialOfferShown = async () => {
  try {
    return await AsyncStorage.getItem('@isShowedSpecialOffer');
  } catch (e) {
    console.warn(e);
  }
};

export const setSpecialOfferShown = (isShowedSpecialOffer: string) => {
  try {
    AsyncStorage.setItem('@isShowedSpecialOffer', isShowedSpecialOffer);
  } catch (e) {
    console.warn(e);
  }
};

export const getIsOneTimeTried = async () => {
  try {
    return await AsyncStorage.getItem('@isOneTimeTried');
  } catch (e) {
    console.warn(e);
  }
};

export const setIsOneTimeTriedStorage = (isOneTimeTried: string) => {
  try {
    AsyncStorage.setItem('@isOneTimeTried', isOneTimeTried);
  } catch (e) {
    console.warn(e);
  }
};

export const getIsTryToOpenPdfStorage = async () => {
  try {
    return await AsyncStorage.getItem('@isTryToOpenPdf');
  } catch (e) {
    console.warn(e);
  }
};

export const setIsTryToOpenPdfStorage = (isTryToOpenPdf: string) => {
  try {
    AsyncStorage.setItem('@isTryToOpenPdf', isTryToOpenPdf);
  } catch (e) {
    console.warn(e);
  }
};

export const getInvoices = async () => {
  try {
    const invoices = await AsyncStorage.getItem('@invoices');
    const parsedInvoices = JSON.parse(invoices ?? '[]');
    return parsedInvoices;
  } catch (e) {
    console.warn(e);
  }
};

export const setInvoices = (invoices: any[]) => {
  try {
    AsyncStorage.setItem('@invoices', JSON.stringify(invoices));
  } catch (e) {
    console.warn(e);
  }
};

// AS var olan invoiceleri getir
// temp boş array oluştur
// eğerki aynı ide item varsa onu güncelle
// eğerki aynı ide item yoksa onu ekle
// temp arrayi eski itemleri koy, sonra yeni itemi ekle. [...eski, yeniObj];
// AS ile set et.
// redux ile set et;
