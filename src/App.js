import Button from './Button';
import { FaCreditCard, FaOpencart } from 'react-icons/fa6';

const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <FaCreditCard />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secundary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <FaOpencart />
          Something
        </Button>
      </div>
    </div>
  );
};

export default App;
