import Button from './Button';

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded ouline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
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
        <Button secundary rounded>
          Something
        </Button>
      </div>
    </div>
  );
};

export default App;
