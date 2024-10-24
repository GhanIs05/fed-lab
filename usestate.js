import { useState, useEffect } from 'react';
function App() {
const [date, setDate] = useState(new Date());
useEffect(() => {
const interval = setInterval(() => {
setDate(new Date());
}, 1000)
return () => clearInterval(interval);
}, [])
return (
<p className='Digital Clock'>
{date.toLocaleTimeString()}
</p>
);
}
export default App;
