interface NavLink {
  title: string;
  href: string;
}

export const socials: NavLink[] = [];

export const navigations: NavLink[] = [
  { title: 'À propos de nous', href: '/' },
  { title: 'Comment ça marche', href: '#how-it-works' },
  { title: 'Services', href: '#services' },
  { title: 'Tarifs', href: '#tarifs' },
  { title: 'FAQ', href: '#faq' },
];
