import React , {useState, useEffect} from 'react';
import './App.css';
import {Pie ,Line} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import {fetchdata, fetchdatadaily } from './API';
import {Header} from './Components/Header';
import {Box} from './Components/Box';

function App() { 
  

    const classes = useStyles();
  // usestate data 
  let [death , setdeath] = useState(0);
  let [recovered , setrecovered] = useState(0);
  let [total , settotal] = useState(0);
  let [tested, settested]= useState(0);
  let [source,setsource] = useState("");
  let [daily, setdaily]= useState([])
  let [activecases,setactive]=useState(0);

  //total pakistan cases
  let data1 = "";
  async function  x(){
    data1 = await fetchdata();
    
    setdeath(data1.deceased);
    setrecovered(data1.recovered);
    settotal(data1.infected);
    settested(data1.tested);
    setsource(data1.sourceUrl);
    setactive((data1.infected - (data1.recovered + data1.deceased))) ;
    const initialDailyData = await fetchdatadaily();
    setdaily(initialDailyData);
    console.log(data1);
    console.log(activecases);
  };
  x();

  const linedata =  {
    labels: daily.map(({lastUpdatedAtSource}) => lastUpdatedAtSource),
    datasets: [
      {
        label: 'Death',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#b83032',
        borderColor: '#b83032',
        data: daily.map(({deceased}) => deceased)
      },
      {
        label: 'Recovered',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#2d8a34',
        borderColor: '#2d8a34',
        data: daily.map(({recovered}) => recovered)
      },
      {
        label: 'Infected',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: daily.map(({infected}) => infected)
      }
    ]
  };
  
  


    // data for pie of total cases
  const data = {
    labels: [
      'Active',
      'Recovered',
      'Deaths'
    ],
    datasets: [{
      data: [activecases,recovered,death ],
      backgroundColor: [
      '#144a7a',
      '#2d8a34',
      '#b83032'
      ],
      hoverBackgroundColor: [
      '#326ca1',
      '#4fab56',
      '#FF6384'
      ]
    }]
  };


  
  return (
    <>
      <div className="container"> 
        <Header/>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Box name="Total Tested" cases={tested} source={source} />
            </Grid>
            <Grid item xs={6}>
                <Box name="Infected" cases={total} source={source}/>
            </Grid>
            <Grid item xs={6}>
                <Box name="Recovered" cases={recovered} source={source}/>
            </Grid>
            <Grid item xs={6}>
                <Box name="Death" cases={death} source={source}/>
            </Grid>
        </Grid>
        <Pie data={data} />
        <Line data={linedata}/>
          
         
        
      </div> 
      
    </>
  );
}

export default App;
