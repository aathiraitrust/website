import { usePathname } from 'next/navigation';

export function Title() {

    const pathname = usePathname();
    const titleMap = new Map<string, string>([
        ["/about-us/", "About Us"],
        ["/our-beneficiaries/", "Our Beneficiaries"],
        ["/our-events/", "Our Events"],
        ["/rising-star-projects/", "Rising Star"],
        ["/to-donate/", "To Donate"],
        ["/contact-us/", "Contact Us"],
    ])

    const title = titleMap.has(pathname) ? titleMap.get(pathname) + " - Aathirai Trust" : "Aathirai Trust";
  
    return (
      <title data-testid="title">{title}</title>
    );
  }