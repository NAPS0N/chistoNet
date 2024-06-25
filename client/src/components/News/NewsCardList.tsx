import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { useAppDispatch } from '../../App/redux/store';
import { deleteNews } from '../../App/redux/slicers/NewsSlicer';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NewsCardList({ news }): JSX.Element {
  const navigate = useNavigate();
  const dispatchDeleteNews = useAppDispatch();
  const formattedDate = format(new Date(news.updatedAt), 'dd.MM.yyyy HH:mm');
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSettingsClick = () => {
    navigate(`/updatenews/${news.id}`, { state: { news } }); // Переход на /settings при клике
  };

  const handleDelete = () => {
    console.log(1111111);
    dispatchDeleteNews(deleteNews(Number(news.id))).catch(console.log);
  };

  return (
    <Card sx={{ maxWidth: 500, backgroundColor: '#1f8a7009', boxShadow: 10 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src="../../../public/logo/Фавикон.png" />}
        action={
          <IconButton aria-label="settings" onClick={handleSettingsClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title="ЧИСТО.NET"
        subheader={formattedDate}
      />
      <CardMedia component="img" sx={{ boxShadow: 3 }} image={news.photo} alt="Paella dish" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {news.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <DeleteForeverTwoToneIcon onClick={handleDelete} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{}} paragraph>
            {news.text}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default NewsCardList;
