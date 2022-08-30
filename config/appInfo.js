let websiteDomain;
const apiBasePath = '/api/auth/'

<<<<<<< master
if (process.env.NODE_ENV == "production") {
  websiteDomain = process.env.VERCEL_URL
} else {
  websiteDomain = "http://localhost:3000"
}
=======
export const websiteDomain =
  process.env.VERCEL_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`
>>>>>>> Update the website domain

const appInfo = {
  appName: 'SuperTokens Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
}

export { websiteDomain, appInfo }