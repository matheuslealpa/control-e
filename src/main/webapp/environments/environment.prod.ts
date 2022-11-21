export const environment = {
  production: true,
  contextPath: '/server-api/control-e',
  keycloak: {
    authServerUrl: 'http://localhost:8085/auth',
    resource: 'control-e-frontend',
    realm: 'CONTROL-E'
  }
};
