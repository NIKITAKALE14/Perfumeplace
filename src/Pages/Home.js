import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack'; // Corrected import for Stack component
import Typography from '@mui/material/Typography'; // Import Typography component
import Card from '@mui/material/Card'; // Import Card component
import CardContent from '@mui/material/CardContent'; // Import CardContent component
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'; // Import SparkLineChart correctly
import { PieChart } from '@mui/x-charts/PieChart';
// import './style.css';
import GridSlider from './GridSlider';
import ProductList from './admin/products/ProductList';

export default function Home() {
    const sparkLineChartData = [3, -10, -2, 5, 7, -2, 4, 6];
    const pieChartData = [
        { id: 0, value: 10, label: 'Female' },
        { id: 1, value: 15, label: 'Male' },
        { id: 2, value: 20, label: 'Unisex' },
    ];

    return (
        <div>
            {/* Background bubbles */}
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            
            {/* Title and subtitle */}

            

            {/* Main container with 50-50 layout */}
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 1}}>
                {/* Left side for SparkLineChart */}
                <Box sx={{ width: '34%', p: 2 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom> Sales Trend </Typography>
                            <SparkLineChart data={sparkLineChartData} height={200} area />
                        </CardContent>
                    </Card>
                </Box>
                <div>
                <h2 style={{ fontSize: '3em', textAlign: 'center' ,marginTop:75, fontFamily:'"Lucida Console", "Courier New", monospace'}}>FragranceFlare</h2>
                <p style={{ textAlign: 'center' }}>Perfume is the key to our memories</p>
                </div>

                {/* Right side for PieChart */}
                <Box sx={{ width: '35%', p: 2 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom> Sales Distribution </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: pieChartData,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={200}
                            />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <GridSlider />
             <div>
                <ProductList />
                </div>

        </div>

    );
}
