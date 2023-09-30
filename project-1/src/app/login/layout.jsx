// import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <h1>Common Layout</h1>
      </div>

      {children}
    </div>
  );
}
