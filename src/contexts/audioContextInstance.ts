import { createContext } from 'react';
import { AudioContextType } from './AudioContext';

export const AudioContext = createContext<AudioContextType | undefined>(undefined);
