import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to the recipe App
      </h1>
        <Link href={'/recipelist'}>Explore Recipe</Link>
    </div>
  );
}
