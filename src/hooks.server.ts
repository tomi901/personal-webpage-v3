import { Handle } from '@sveltejs/kit';

const proxyPath = '/cloud'

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url

  if (pathname.startsWith('/.well-known/acme-challenge')) {
    const newHost = 'cloud.tomasrinaldi.com';

    const url = new URL(event.request.url);
    url.protocol = 'http:';
    url.hostname = newHost;
    url.port = '80';

    const headers = new Headers(event.request.headers);
    headers.set('accept-encoding', '');

    // Forward client IP for geolocation
    const clientIp = event.request.headers.get('x-forwarded-for') || event.getClientAddress();
    if (clientIp) {
      headers.set('x-forwarded-for', clientIp);
    }

    const response = await fetch(url.toString(), {
      method: event.request.method,
      headers,
      body: event.request.body,
      // @ts-ignore - duplex is required for streaming request bodies
      duplex: 'half'
    });

    return response;
  }

  return resolve(event);
};
