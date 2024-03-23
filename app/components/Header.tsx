import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="h-20 w-screen">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <p className="hidden sm:block font-bold text-inherit">Find Doc</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarContent className="hidden sm:flex gap-4">
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Providers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
