import React, { useState } from "react";

import Upload from "./upload";
import Almost from "./almost";

import styles from "./uploadcsv.module.css";

function UploadCsv() {
  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);

  return (
    <main className={styles.main}>
      {/* Switch statement to render components based on upload progress */}
      <div className={styles.container}>
        {(() => {
          switch (step) {
            case 0:
              return <Upload onNext={onNext} />;

            case 1:
              return <Almost onNext={onNext} step={step} />;

            case 2:
              return <Almost onNext={onNext} step={step} />;
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}

export default UploadCsv;
