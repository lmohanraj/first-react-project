import { useState } from 'react';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0); // UseState to change the likes value
  const [dislike, setDislike] = useState(0); // UseState to change the dislikes value
  const incrementLike = () => setLike(like + 1); // UseState function for like value
  const incrementDislike = () => setDislike(dislike + 1); // UseState function for dislike value
  const iconStyle = {
    fontSize: "1.7rem",
    // border : "1px solid black",
    color: "black", // Styling like & dislike icons
  };

  return (
    <div className="buttons-container">

      {/* Display the like button */}

      <Badge onClick={incrementLike} badgeContent={like} color="primary" overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <i class="fas fa-thumbs-up" style={iconStyle}></i>
      </Badge>

      {/* Display the dislike button */}

      <Badge onClick={incrementDislike} badgeContent={dislike} color="error" overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <i class="fas fa-thumbs-down" style={iconStyle}></i>
      </Badge>

    </div>
  );
}
