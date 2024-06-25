import { IndexSignature } from '@stoplight/elements-core/components/Docs/Model';
import { atom, useAtom } from 'jotai';

const persistedServerVariableValuesAtom = atom({});
export const useServerVariables = () => {
  const [serverVariables, setPersistedServerVariableValues] = useAtom(persistedServerVariableValuesAtom);

  const updateServerVariableValue = (op: 'set' | 'unset', name: string, value: string) => {
    const newServerVariables: IndexSignature = { ...serverVariables };
    if (op === 'unset') {
      delete newServerVariables[name];
    } else {
      newServerVariables[name] = value;
    }

    setPersistedServerVariableValues(newServerVariables);
  };

  return { serverVariables, updateServerVariableValue };
};
