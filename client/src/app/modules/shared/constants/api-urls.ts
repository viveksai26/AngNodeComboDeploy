import { environment } from 'client/src/environments/environment';

export class ApiUrls {
  public static verifyGIdToken = 'https://oauth2.googleapis.com/tokeninfo?id_token={idToken}';
  public static SUBSCRIBE_NEWSLETTER = `${environment.baseURL}/api/subscribe`;
}
