import Link from "next/link";
import routes, { routeIsActive } from "@/routes/sidebar";
import * as Icons from "@/icons";
import { IIcon } from "@/icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { useRouter } from "next/router";

function Icon({ icon, ...props }: IIcon) {
  // @ts-ignore
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

interface ISidebarContent {
  linkClicked: () => void;
}

function SidebarContent({ linkClicked }: ISidebarContent) {
  const { pathname } = useRouter();
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <div className="text-black dark:text-white">
      <Link
        className="text-lg font-bold text-black dark:text-white"
        href="/#"
        passHref
      >
        <div className="py-6 ml-6">{appName}</div>
      </Link>
      <ul>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu
              route={route}
              key={route.name}
              linkClicked={linkClicked}
            />
          ) : (
            <li className={`${
              routeIsActive(pathname, route)
                ? "bg-cyan-400 font-bold text-white rounded-xl"
                : ""
            }`} key={route.name}>
              <Link
                className="flex items-end text-sm px-6 py-3 font-semibold transition-colors duration-150"
                onClick={linkClicked}
                href={route.path || "#"}
                scroll={false}
              >
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon || ""}
                />
                <span className="ml-4 text-left">{route.name}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SidebarContent;
