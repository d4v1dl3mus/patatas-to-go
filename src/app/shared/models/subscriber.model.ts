export interface Subscriber {
  SystemId: string;
  Area: string;
  PublicId: number;
  CountryCode: string;
  CountryName: string;
  Name: string;
  EndpointsCount: number;
  Email: string;
  JobTitle: string;
  PhoneNumber: number;
  PhoneCode: number;
  PhoneCodeAndNumber: string;
  LastActivityUtc: string;
  LastActivity: string;
  LastActivityString: string;
  SubscriptionDate: string;
  SubscriptionMethod: number;
  SubscriptionState: number;
  SubscriptionStateDescription: string;
  Topics: [];
  ValidEmail: boolean;
  Activity: string;
  ConnectionState: number;
  Id: number
}
