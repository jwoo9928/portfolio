import { HomePage } from "./home-page";
import { projects } from "./portfolio-data";

export default function Home() {
  return <HomePage locale="en" projects={projects} />;
}
