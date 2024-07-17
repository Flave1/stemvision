import { useEffect, useState } from 'react';
import { Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import NextLink from 'next/link';

// Separate the MenuLink for client-side only rendering
export function NavLink({ path, label, children, ...rest }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <a className="nav-item">{label}</a>; // Render a placeholder link on the server
  }

  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path} passHref>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}
