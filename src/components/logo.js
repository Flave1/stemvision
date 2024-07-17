import {  Image } from 'theme-ui';
import { Link } from 'components/link';
const logo = '/assets/images/logo.png';

export default function Logo({ white }) {
  return (
    // <Link
    //   path="/"
    //   sx={{
    //     variant: 'links.logo',
    //   }}
    // >
      <Image src={white ? logo : logo} alt="startup landing logo" />
    // </Link>
  );
}
