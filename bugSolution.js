```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
      {/* Access other properties safely here */}
    </View>
  );
};

export default MyComponent;
```