import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-white p-4 text-center"
      style={{ marginTop: "15% !important" }}
    >
      Copyright &copy; {new Date().getFullYear()} ALBUM
    </footer>
  );
}
