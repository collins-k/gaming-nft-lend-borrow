import { v4 as uuidv4 } from 'uuid';

export const generateKey = (pre: string) => {
  return `${pre}_${uuidv4()}`;
};

export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
          reject(error);
      };
  });
};