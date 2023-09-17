import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './components/card';


const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<Card/>)