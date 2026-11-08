type UserCardProps = {
  name: string;
  role: "admin" | "member";
  bio?: string;
};

export function UserCard({ name, role, bio }: UserCardProps) {
  return <article><h2>{name}</h2><p>{role}</p>{bio && <p>{bio}</p>}</article>;
}
