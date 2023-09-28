import { addMeet } from '../firebase/services';
import { useEffect } from 'react';

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
    </div>
  );
};

export default WelcomePage;
