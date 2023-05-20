// NPM
import { useState } from 'react';

const OperationForm = () => {
  const OPERATIONS = ['AND', 'OR', 'XOR', 'NAND', 'NOR', 'XNOR'];
  const [operation, setOperation] = useState('AND');

  const changeOperation = (e) => {
    const BTN = e.currentTarget;
    const IND = +BTN.dataset.index;
    setOperation(OPERATIONS[IND]);
  };

  return (
    <div className="flex flex-col">
      <span className="mb-2 text-sm font-black text-form-900">Operation:</span>
      <div>
        {OPERATIONS.map((op, ind) => (
          <button
            key={ind}
            type="button"
            data-index={ind}
            className={`mr-2 rounded-lg px-4 py-2 text-xs font-black outline-none transition-shadow duration-100 ease-in last-of-type:mr-0 focus:ring-4 focus:ring-primary-300 ${
              operation === OPERATIONS[ind]
                ? 'bg-primary-50 text-primary-500 hover:bg-primary-100 focus:bg-primary-100'
                : 'bg-form-300 text-form-600 hover:bg-form-400 focus:bg-primary-50 focus:text-primary-500'
            }`}
            onClick={changeOperation}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OperationForm;
