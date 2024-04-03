import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

// responsive navbar
// TODO: authentiction should be implemented
export default function Header() {
  return (
    <Navbar className="h-20 w-screen">
      <NavbarContent>
        <NavbarBrand className="mr-4 flex flex-col justify-start items-start">
          <Link href="/" color="foreground">
            <p className="sm:block font-bold text-inherit text-lg">FindaDoc</p>
          </Link>
          <p className="sm:block font-light text-foreground-600 text-xs">
            Find the best care
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <NavbarContent>
          <NavbarItem className="hidden lg:flex">
            <Link href="/providers" color="foreground">
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
            <Link href="#" color="foreground">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#" variant="flat">
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
