import {NavigationProp} from '@react-navigation/native';

export type NavigationType = NavigationProp<any, any>;

export type DocumentType = 'docx' | 'doc' | 'pdf';

export type ConversionType =
  | 'file-to-pdf'
  | 'image-to-pdf'
  | 'url-to-pdf'
  | 'text-to-pdf'
  | 'merge-pdf'
  | 'add-signature';
