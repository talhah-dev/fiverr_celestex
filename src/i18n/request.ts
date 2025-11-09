// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = {
        // Navbar messages
        ...(await import(`../messages/navbar/${locale}.json`)).default,
        // Home page messages
        // ...(await import(`../messages/home/${locale}.json`)).default,
        // Footer, etc...
        ...(await import(`../messages/footer/${locale}.json`)).default
    };

    return {
        locale,
        messages
    };
});
