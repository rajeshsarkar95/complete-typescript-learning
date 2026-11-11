
type RouteName = "home" | "profile";

const routes = {
  home: "/",
  profile: "/profile"
} satisfies Record<RouteName,string>;

console.log(routes.profile);
