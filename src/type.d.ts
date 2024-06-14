export default interface CopyData {
  accountNumber: number;
  accountTitle: string;
  IBAN?: number;
  bank?: string;
}
export default interface BankData extends CopyData {
  mainHeading: string;
  bgColor?: string;
}

export default interface SocialMediaType {
  _id: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export default interface EmailType {
  _id: string;
  email: string;
  phone: string;
  emailMob: string;
  phoneMob: string;
}

export default interface VideoType {
  _id: string;
  videolink: string;
  poster: string;
}

export default interface ServiceType {
  icon: string;
  title: string;
  details: string;
  imageName: string;
}

export default interface AboutType {
  ceomessage: any;
  ceoImage: string;
  title: string;
}
