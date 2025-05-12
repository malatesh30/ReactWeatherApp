import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D";
    const rainUrl="https://media.istockphoto.com/id/2071010545/photo/parking-lot-in-the-heavy-rain-in-summer-thunderstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=P8oPhucwIh0k2wOZjcZcZfmDKwF7KccOkQgKg4xWoqc=";
    const hotUrl="https://images.unsplash.com/photo-1586902197503-e71026292412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyfGVufDB8fDB8fHww";
    const coldUrl="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    if (!info || !info.city) {
        return null; // Do not render anything
    }
    return (
        <div className="InfoBox">
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainUrl:info.temp>25?hotUrl:coldUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>25?<SunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp} &deg; C</p>
          <p>Humididty={info.humidity}</p>
          <p>Min Temp={info.tempMin}</p>
          <p>Max Temp={info.tempMax}</p>
          <p>The Weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}