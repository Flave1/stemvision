/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';
import logoWhite from 'assets/images/logo_1.png';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={white ? logoWhite : logo} alt="startup landing logo" />
    </Link>
  );
}
