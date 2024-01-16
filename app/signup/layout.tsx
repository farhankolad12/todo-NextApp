import styles from "@/app/login/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${styles.main} d-flex flex-column justify-content-center align-items-center`}
    >
      {children}
    </main>
  );
}
