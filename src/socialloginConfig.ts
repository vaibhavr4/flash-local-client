import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angularx-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("971318108998-049gsei3r0kv8mecuf3cptsr6gakeiiv.apps.googleusercontent.com")
  }]);

  return config;
}
