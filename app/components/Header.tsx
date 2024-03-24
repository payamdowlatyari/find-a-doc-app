import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <Navbar className="h-20 w-screen">
      <NavbarContent>
        <NavbarBrand className="mr-4">
          <Link href="/" color="foreground">
            <p className="hidden sm:block font-bold text-inherit">FindaDoc</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <NavbarContent>
          <NavbarItem>
            <Link href="/" color="foreground">
              Providers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" color="foreground">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
