// Admin Authentication Configuration for IFA Media

export const ADMIN_CONFIG = {
  email: process.env.ADMIN_EMAIL || 'hello@ifamedia.co.uk',
  password: process.env.ADMIN_PASSWORD || 'IFAMedia_2026!Secure#Admin',
  cookieName: 'ifa_admin_session',
  sessionToken: process.env.ADMIN_SESSION_TOKEN || 'ifa_sec_sess_8c72e9a1b4f6d3e5a7c2b9f1e0d8a4c3',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

export function verifyAdminCredentials(email?: string | null, password?: string | null): boolean {
  if (!email || !password) return false;
  const inputEmail = email.trim().toLowerCase();
  const targetEmail = ADMIN_CONFIG.email.trim().toLowerCase();
  return inputEmail === targetEmail && password === ADMIN_CONFIG.password;
}

export function isValidSessionToken(token?: string | null): boolean {
  if (!token) return false;
  return token === ADMIN_CONFIG.sessionToken;
}
