import { environment } from 'client/src/environments/environment';

export class ApiUrls {
  public static verifyGIdToken = 'https://oauth2.googleapis.com/tokeninfo?id_token={idToken}';
  public static SUBSCRIBE_NEWSLETTER = `${environment.baseURL}/api/subscription/subscribe`;
  public static CHECK_SUBSCRIBERS = `${environment.baseURL}/api/subscription/subscribers`;
  public static CLEAR_SUBSCRIBERS = `${environment.baseURL}/api/subscription/clearSubscriptions`;
  public static SEND_NEWSLETTER = `${environment.baseURL}/api/subscription/newsletter`;
}
