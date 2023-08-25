

import './Tabs.css';
import { useState } from 'react';

const Tabs: React.FC = () => {

  const [top, setTop] = useState(false);
  
  const onTop = () => {
    setTop(true);
  }
  const offTop = () => {
    setTop(false);
  }
  
  return <div></div>
};

export default Tabs;