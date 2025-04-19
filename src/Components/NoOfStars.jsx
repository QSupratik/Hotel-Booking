import StarIcon from '@mui/icons-material/Star';

function NoOfStars({rating}){
    let array = Array.from({length:rating});
    return(
        <>
            {array.map( (items)=><StarIcon/>)}
        </>
    )
}

export default NoOfStars;