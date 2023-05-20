import OperationFormButton from '../base/OperationFormButton';

const OperationForm = () => {
  const OPERATIONS = ['AND', 'OR', 'XOR', 'NAND', 'NOR', 'XNOR'];
  return (
    <div className="flex flex-col">
      <span className="mb-2 text-sm font-black text-form-900">Operation:</span>
      <div>
        {OPERATIONS.map((operation) => (
          <OperationFormButton
            key={operation}
            operation={operation}
            className="mr-3 last-of-type:mr-0"
          />
        ))}
      </div>
    </div>
  );
};

export default OperationForm;
