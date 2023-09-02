import NavItemsSatu from "./navitems/navItemsSatu";
import NavItemsDua from "./navitems/navItemsDua";
import NavItemsTiga from "./navitems/NavItemsTiga";
import NavItemsEmpat from "./navitems/NavItemsEmpat";
export default function Navbar() {
  return (
    <div className="mt-2 rounded-lg flex p-5 px-8 gap-2 bg-slate-800 justify-center items-center">
      <NavItemsSatu />
      <NavItemsDua />
      <NavItemsTiga />
      <NavItemsEmpat />
    </div>
  );
}
