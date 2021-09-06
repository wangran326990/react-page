import ViewersPeiChart from './components/ViewersPeiChart';
import React from 'react';

class LiveStreamAnalyticPage extends React.Component {
   
    render() {
        const test = [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }];
        return (
            <ViewersPeiChart data = {test} outerRadius={200} innerRadius={0}/>
        );
    }
}

export default LiveStreamAnalyticPage;