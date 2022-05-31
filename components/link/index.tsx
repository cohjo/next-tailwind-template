import {
  NavigationMenuLink,
  NavigationMenuLinkProps,
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

const CustomLink: React.FC<NavigationMenuLinkProps> = ({
  children,
  href,
  ...props
}) => {
  return href ? (
    <Link href={href}>
      <NavigationMenuLink className="cursor-pointer" {...props}>
        {children}
      </NavigationMenuLink>
    </Link>
  ) : (
    <NavigationMenuLink {...props}>{children}</NavigationMenuLink>
  )
}

export default CustomLink
