function Footer() {
  return (
    <div className="min-h-[40vh] bg-gradient-to-r from-green-100 via-white to-lime-100 text-center rounded">
    <div className="footer p-10 bg-base-300 text-base-content ">
      <div className="items-center grid-flow-col">
        <h2 className="text-2xl font-bold">Grocery Billing System</h2>
        <p>Manage your grocery items, cart, and billing seamlessly!</p>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Grocery Shop. All Rights Reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;