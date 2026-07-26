"use client";

import styles from "./career-page.module.css";

export function PrintButton() {
  return (
    <button
      className={styles.printButton}
      type="button"
      onClick={() => window.print()}
    >
      PDF로 저장
    </button>
  );
}
