let websiteDomain;
const apiBasePath = '/api/auth/'

if (process.env.NODE_ENV == "production") {
  websiteDomain = process.env.VERCEL_URL
} else {
  websiteDomain = "http://localhost:3000"
}

const appInfo = {
  appName: 'SuperTokens Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
}

export { websiteDomain, appInfo }