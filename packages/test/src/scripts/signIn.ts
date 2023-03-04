export async function signIn(token: string) {
  const providersResponse = await fetch('http://localhost:3000/api/auth/providers');
  const providersJson = await providersResponse.json();
  const getCsrfResponse = await fetch('http://localhost:3000/api/auth/csrf');
  const getCsrfJson = await getCsrfResponse.json();

  const params = new URLSearchParams();
  params.append('callbackUrl', providersJson.credentials.callbackUrl);
  params.append('csrfToken', getCsrfJson.csrfToken);
  params.append('token', token);
  params.append('json', 'true');

  const signInResult = await fetch(providersJson.credentials.callbackUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: getCsrfResponse.headers.get('set-cookie') ?? '',
    },
    body: params,
  });

  const rowCookie = signInResult.headers.get('set-cookie');
  let sessionToken: string = '';

  if (rowCookie) {
    const cookie: RegExpMatchArray | null = rowCookie.match(/next-auth.session-token=.*?;/g);
    if (cookie) {
      sessionToken = cookie[cookie.length - 1].trim().replace(/;$|,$/, '');
    }
  }

  return sessionToken;
}
