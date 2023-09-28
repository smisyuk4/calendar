import { addMeet } from '../firebase/services';
import { useEffect } from 'react';

import { Calendar } from '../components/Calendar';

const WelcomePage = () => {
  useEffect(() => {
    const setData = async () => {
      const result = await addMeet();
      console.log(result);
    };

    // setData();
  }, []);

  return (
    <div>
      <h1> Welcome page</h1>
      <Calendar />
    </div>
  );
};

export default WelcomePage;
