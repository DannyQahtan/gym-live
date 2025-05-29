export enum SelectedPage {
    Home = "home",
    Memberships = "memberships",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

export interface BenefitType {
  description: string;
}

export interface ClassType {
  name: string;
  description?: string; //make this field optional
  image: string;
  programImage?: string;
}