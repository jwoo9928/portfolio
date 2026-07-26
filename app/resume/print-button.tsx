"use client";

import styles from "./resume-page.module.css";

export function PrintButton() {
  return (
    <button
      className={styles.printButton}
      type="button"
      onClick={() => window.print()}
    >
      Print
    </button>
  );
}
