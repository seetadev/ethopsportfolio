import UAuth from '@uauth/js';

const ProductionCredentials = {
  clientID: '65cc8acc-806a-4e4b-8150-9b4d8d8e421a',
  scope: 'openid email wallet',
  redirectUri: '',
  postLogoutRedirectUri: '',
};

export const uauth = new UAuth(ProductionCredentials);