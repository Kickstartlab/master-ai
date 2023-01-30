import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


function Circle() {
    const [progress, setProgress] = React.useState(0);
    const [color, setColor] = React.useState("32,248,253");

    React.useEffect(() => {

        if (progress <= 32) {
            setColor("32,248,253");
        } else if (progress <= 64) {
            setColor("245,22,126");
        } else if (progress <= 96) {
            setColor("245,22,126");
        } else {
            setColor("245,22,126");
        }

        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 96 ? 4 : prevProgress + 32));
        }, 700);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack sx={{
            color: `rgb(${color})`,
        }}>
            <CircularProgress color='inherit' variant="determinate" value={progress} size={400} stroke={20} />
        </Stack>
    );
}

export default Circle
