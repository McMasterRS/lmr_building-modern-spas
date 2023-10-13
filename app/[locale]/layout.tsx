import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
    return [{locale: 'en-CA'}, {locale: 'fr-CA'}];
}

export default async function LocalizationLayout({
   // Layouts must accept a children prop.
   // This will be populated with nested layouts or pages
   children,
   params
}: {
    children: React.ReactNode,
    params: {locale: string}
}) {
    let dict
    try {
        dict = (await import(`../../dictionaries/${params.locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={params.locale} messages={dict}>
            {children}
        </NextIntlClientProvider>
    )
}
