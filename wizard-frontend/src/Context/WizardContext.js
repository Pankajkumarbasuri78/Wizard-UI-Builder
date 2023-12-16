import { createContext, useState } from 'react';

const WizardContext = createContext();

const WizardContextProvider = ({ children }) => {
    //wizard creation
  const [wizardData, setWizardData] = useState({
    title: "",
    description: "",
    totalSteps: "",
  });

  const [completeFormDataContext,setCompleteFormDataContext] = useState({
    textBoxes: [],
    checkboxes: [],
    dropdowns: [],
    multiSelectOptions: [],
    radioButtons: [],
    textArea:[]
  });

  const [globalSeq,setGlobalSeq] = useState(1);



  const contextValue = {
    wizardData,
    setWizardData,
    completeFormDataContext,
    setCompleteFormDataContext,
    globalSeq,
    setGlobalSeq
  };

  return (
    <WizardContext.Provider value={contextValue}>
      {children}
    </WizardContext.Provider>
  );
};

export { WizardContext, WizardContextProvider };
