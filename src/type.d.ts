export default interface BankData {
  accountNumber: string;
  accountTitle: string;
  mainHeading: string;
  IBAN?: string;
  bank?: string;
  bgColor?: string;
}
// export default interface BankData extends CopyData {
//   mainHeading: string;
//   bgColor?: string;
// }

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

export default interface TeamType {
  teamImage: string;
}

export default interface AboutBlogType {
  title: string;
  slug: string;
  blogImage: string;
}

export default interface BlogType extends AboutBlogType {
  description: any;
  videoUrl: string;
}

export default interface CaroselType {
  title: string;
  description: string;
  mainImage: any;
}
